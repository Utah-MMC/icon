'use client';

import { useState, useRef } from 'react';

interface RentalData {
  dropOffDate: string;
  size: string;
  client: string;
  address: string;
  invoiceTotal: number;
  county: string;
  month: string;
  year: number;
}

interface SalesMetrics {
  totalRevenue: number;
  totalRentals: number;
  averageRentalValue: number;
  revenueBySize: Record<string, { count: number; revenue: number; average: number }>;
  revenueByMonth: Record<string, { count: number; revenue: number }>;
  topClients: Array<{ client: string; count: number; revenue: number }>;
  revenueByCounty: Record<string, { count: number; revenue: number }>;
  unpaidRentals: number;
  unpaidRevenue: number;
}

export default function SalesByRentalAnalytics() {
  const [rentalData, setRentalData] = useState<RentalData[]>([]);
  const [metrics, setMetrics] = useState<SalesMetrics | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const parseCSV = (csvText: string): RentalData[] => {
    const lines = csvText.split('\n');
    const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
    
    const data: RentalData[] = [];

    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim()) {
        const values = lines[i].split(',').map(v => v.trim().replace(/"/g, ''));
        
        if (values.length >= 5) {
          const dropOffDate = values[0];
          const size = values[1];
          const client = values[2];
          const address = values[3];
          const invoiceTotal = parseFloat(values[4] || '0');
          
          // Extract county from address
          const countyMatch = address.match(/([^,]+County)/);
          const county = countyMatch ? countyMatch[1] : 'Unknown';
          
          // Extract month and year from date
          const date = new Date(dropOffDate);
          const month = date.toLocaleDateString('en-US', { month: 'long' });
          const year = date.getFullYear();

          data.push({
            dropOffDate,
            size,
            client,
            address,
            invoiceTotal,
            county,
            month,
            year
          });
        }
      }
    }

    return data;
  };

  const calculateMetrics = (data: RentalData[]): SalesMetrics => {
    const totalRevenue = data.reduce((sum, rental) => sum + rental.invoiceTotal, 0);
    const totalRentals = data.length;
    const averageRentalValue = totalRentals > 0 ? totalRevenue / totalRentals : 0;

    // Revenue by size
    const revenueBySize: Record<string, { count: number; revenue: number; average: number }> = {};
    data.forEach(rental => {
      if (!revenueBySize[rental.size]) {
        revenueBySize[rental.size] = { count: 0, revenue: 0, average: 0 };
      }
      revenueBySize[rental.size].count++;
      revenueBySize[rental.size].revenue += rental.invoiceTotal;
    });
    
    Object.keys(revenueBySize).forEach(size => {
      revenueBySize[size].average = revenueBySize[size].revenue / revenueBySize[size].count;
    });

    // Revenue by month
    const revenueByMonth: Record<string, { count: number; revenue: number }> = {};
    data.forEach(rental => {
      const monthKey = `${rental.month} ${rental.year}`;
      if (!revenueByMonth[monthKey]) {
        revenueByMonth[monthKey] = { count: 0, revenue: 0 };
      }
      revenueByMonth[monthKey].count++;
      revenueByMonth[monthKey].revenue += rental.invoiceTotal;
    });

    // Top clients
    const clientRevenue: Record<string, { count: number; revenue: number }> = {};
    data.forEach(rental => {
      if (!clientRevenue[rental.client]) {
        clientRevenue[rental.client] = { count: 0, revenue: 0 };
      }
      clientRevenue[rental.client].count++;
      clientRevenue[rental.client].revenue += rental.invoiceTotal;
    });

    const topClients = Object.entries(clientRevenue)
      .map(([client, data]) => ({ client, ...data }))
      .sort((a, b) => b.revenue - a.revenue)
      .slice(0, 10);

    // Revenue by county
    const revenueByCounty: Record<string, { count: number; revenue: number }> = {};
    data.forEach(rental => {
      if (!revenueByCounty[rental.county]) {
        revenueByCounty[rental.county] = { count: 0, revenue: 0 };
      }
      revenueByCounty[rental.county].count++;
      revenueByCounty[rental.county].revenue += rental.invoiceTotal;
    });

    // Unpaid rentals
    const unpaidRentals = data.filter(rental => rental.invoiceTotal === 0).length;
    const unpaidRevenue = data.filter(rental => rental.invoiceTotal === 0).length * averageRentalValue;

    return {
      totalRevenue,
      totalRentals,
      averageRentalValue,
      revenueBySize,
      revenueByMonth,
      topClients,
      revenueByCounty,
      unpaidRentals,
      unpaidRevenue
    };
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const text = await file.text();
      const parsedData = parseCSV(text);
      
      if (parsedData.length === 0) {
        throw new Error('No valid rental data found in CSV file');
      }

      const calculatedMetrics = calculateMetrics(parsedData);
      
      setRentalData(parsedData);
      setMetrics(calculatedMetrics);
      
      // Save to localStorage for persistence
      localStorage.setItem('salesByRentalData', JSON.stringify({
        data: parsedData,
        metrics: calculatedMetrics,
        uploadedAt: new Date().toISOString(),
        fileName: file.name
      }));

      setSuccess(`Successfully uploaded ${parsedData.length} rental records from ${file.name}`);
      
      // Send to API for processing
      await fetch('/api/sales-rental/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: parsedData, metrics: calculatedMetrics, fileName: file.name })
      });

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to process CSV file');
    } finally {
      setLoading(false);
    }
  };

  const loadStoredData = () => {
    const stored = localStorage.getItem('salesByRentalData');
    if (stored) {
      try {
        const { data, metrics: storedMetrics, uploadedAt, fileName } = JSON.parse(stored);
        setRentalData(data);
        setMetrics(storedMetrics);
        setSuccess(`Loaded ${data.length} records from ${fileName} (uploaded ${new Date(uploadedAt).toLocaleString()})`);
      } catch (err) {
        setError('Failed to load stored data');
      }
    }
  };

  const clearData = () => {
    setRentalData([]);
    setMetrics(null);
    localStorage.removeItem('salesByRentalData');
    setSuccess(null);
    setError(null);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <div className="space-y-6">
      {/* Upload Section */}
      <div className="bg-white rounded-xl shadow border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">📊 Sales by Rental Analytics</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Sales by Rental CSV Report
            </label>
            <input
              ref={fileInputRef}
              type="file"
              accept=".csv"
              onChange={handleFileUpload}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#4e37a8] file:text-white hover:file:bg-purple-700"
            />
          </div>

          <div className="flex space-x-3">
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={loading}
              className="bg-[#4e37a8] text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
            >
              {loading ? 'Processing...' : '📁 Choose File'}
            </button>
            
            <button
              onClick={loadStoredData}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              📂 Load Stored Data
            </button>
            
            {rentalData.length > 0 && (
              <button
                onClick={clearData}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                🗑️ Clear Data
              </button>
            )}
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <div className="text-red-800 text-sm">⚠️ {error}</div>
            </div>
          )}

          {success && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <div className="text-green-800 text-sm">✅ {success}</div>
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-medium text-blue-900 mb-2">📋 Expected CSV Format:</h4>
          <div className="text-sm text-blue-800">
            <p>Columns: <strong>Drop Off Date, Size, Client, Address, Invoice Total</strong></p>
            <p className="mt-1">Example: "December 24, 2024", "30 Yard", "Boyd Smith", "969 East 5700 South, Salt Lake City, Utah, 84121, Salt Lake County", "400.00"</p>
          </div>
        </div>
      </div>

      {/* Metrics Display */}
      {metrics && (
        <div className="space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl shadow border p-4">
              <h3 className="text-sm font-medium text-[#4e37a8] mb-1">Total Revenue</h3>
              <p className="text-2xl font-bold text-gray-900">{formatCurrency(metrics.totalRevenue)}</p>
              <p className="text-xs text-gray-600">{metrics.totalRentals} rentals</p>
            </div>
            
            <div className="bg-white rounded-xl shadow border p-4">
              <h3 className="text-sm font-medium text-[#4e37a8] mb-1">Average Rental Value</h3>
              <p className="text-2xl font-bold text-gray-900">{formatCurrency(metrics.averageRentalValue)}</p>
              <p className="text-xs text-gray-600">Per rental</p>
            </div>
            
            <div className="bg-white rounded-xl shadow border p-4">
              <h3 className="text-sm font-medium text-[#4e37a8] mb-1">Unpaid Rentals</h3>
              <p className="text-2xl font-bold text-red-600">{metrics.unpaidRentals}</p>
              <p className="text-xs text-gray-600">$0.00 invoices</p>
            </div>
            
            <div className="bg-white rounded-xl shadow border p-4">
              <h3 className="text-sm font-medium text-[#4e37a8] mb-1">Potential Revenue</h3>
              <p className="text-2xl font-bold text-orange-600">{formatCurrency(metrics.unpaidRevenue)}</p>
              <p className="text-xs text-gray-600">If unpaid were paid</p>
            </div>
          </div>

          {/* Revenue by Size */}
          <div className="bg-white rounded-xl shadow border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue by Dumpster Size</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(metrics.revenueBySize).map(([size, data]) => (
                <div key={size} className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">{size}</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rentals:</span>
                      <span className="font-semibold">{data.count}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Revenue:</span>
                      <span className="font-semibold text-green-600">{formatCurrency(data.revenue)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Average:</span>
                      <span className="font-semibold">{formatCurrency(data.average)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Revenue */}
          <div className="bg-white rounded-xl shadow border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Revenue Trends</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(metrics.revenueByMonth)
                .sort(([a], [b]) => new Date(a).getTime() - new Date(b).getTime())
                .map(([month, data]) => (
                <div key={month} className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">{month}</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rentals:</span>
                      <span className="font-semibold">{data.count}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Revenue:</span>
                      <span className="font-semibold text-green-600">{formatCurrency(data.revenue)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Clients */}
          <div className="bg-white rounded-xl shadow border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Clients by Revenue</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rentals</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Revenue</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Average</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {metrics.topClients.map((client, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {client.client}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {client.count}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className="text-green-600 font-semibold">{formatCurrency(client.revenue)}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatCurrency(client.revenue / client.count)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Revenue by County */}
          <div className="bg-white rounded-xl shadow border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue by County</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(metrics.revenueByCounty)
                .sort(([,a], [,b]) => b.revenue - a.revenue)
                .map(([county, data]) => (
                <div key={county} className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">{county}</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rentals:</span>
                      <span className="font-semibold">{data.count}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Revenue:</span>
                      <span className="font-semibold text-green-600">{formatCurrency(data.revenue)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
