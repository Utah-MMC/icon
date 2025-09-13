'use client';

import { useState, useRef } from 'react';
import { useDataValidation } from './DataValidation';
import LoadingSpinner from './LoadingSpinner';

interface GoogleAdsReportData {
  campaignName: string;
  impressions: number;
  clicks: number;
  cost: number;
  conversions: number;
  conversionValue: number;
  ctr: number;
  cpc: number;
  cpa: number;
  roas: number;
  date: string;
}

export default function GoogleAdsReportUpload() {
  const [uploadedData, setUploadedData] = useState<GoogleAdsReportData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [validationWarnings, setValidationWarnings] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { validateCSV, sanitize } = useDataValidation();

  const parseCSV = (csvText: string): GoogleAdsReportData[] => {
    const lines = csvText.split('\n');
    const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
    
    console.log('CSV Headers:', headers); // Debug: show all headers
    
    // Find column indices - handle exact matches first
    const getColumnIndex = (name: string) => {
      return headers.findIndex(h => 
        h.toLowerCase().includes(name.toLowerCase())
      );
    };

    // Map to your exact CSV column names
    const campaignIndex = getColumnIndex('campaign name') || getColumnIndex('campaign');
    const impressionsIndex = getColumnIndex('impr'); // Your CSV has "Impr."
    const clicksIndex = getColumnIndex('clicks'); // Your CSV has "Clicks"
    const costIndex = getColumnIndex('cost'); // Your CSV has "Cost"
    const conversionsIndex = getColumnIndex('all conv'); // Your CSV has "All conv."
    const conversionValueIndex = getColumnIndex('conv. value'); // Your CSV has "Conv. value"
    const ctrIndex = getColumnIndex('ctr'); // Your CSV has "CTR"
    const cpcIndex = getColumnIndex('avg. cpc'); // Your CSV has "Avg. CPC"
    const cpaIndex = getColumnIndex('cost / all conv'); // Your CSV has "Cost / all conv."
    const roasIndex = getColumnIndex('roas') || getColumnIndex('value per conversion');
    const dateIndex = getColumnIndex('date') || getColumnIndex('day');

    console.log('Column indices found:', {
      campaign: campaignIndex,
      impressions: impressionsIndex,
      clicks: clicksIndex,
      cost: costIndex,
      conversions: conversionsIndex,
      conversionValue: conversionValueIndex,
      ctr: ctrIndex,
      cpc: cpcIndex,
      cpa: cpaIndex,
      roas: roasIndex
    });

    const data: GoogleAdsReportData[] = [];

    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim()) {
        const values = lines[i].split(',').map(v => v.trim().replace(/"/g, ''));
        
        if (values.length > Math.max(impressionsIndex, clicksIndex, costIndex)) {
          // Handle keyword reports that don't have campaign names
          const campaignName = values[campaignIndex] || 'Keyword Report';
          const impressions = parseInt((values[impressionsIndex] || '0').replace(/,/g, ''));
          const clicks = parseInt((values[clicksIndex] || '0').replace(/,/g, ''));
          const cost = parseFloat((values[costIndex] || '0').replace(/,/g, ''));
          const conversions = parseFloat(values[conversionsIndex] || '0');
          const conversionValue = parseFloat((values[conversionValueIndex] || '0').replace(/,/g, ''));
          const ctr = parseFloat((values[ctrIndex] || '0').replace('%', ''));
          const cpc = parseFloat((values[cpcIndex] || '0').replace(/,/g, ''));
          const cpa = parseFloat((values[cpaIndex] || '0').replace(/,/g, ''));
          const roas = parseFloat((values[roasIndex] || '0').replace(/,/g, ''));
          const date = values[dateIndex] || new Date().toISOString().split('T')[0];

          const rowData = {
            campaignName,
            impressions,
            clicks,
            cost,
            conversions,
            conversionValue,
            ctr,
            cpc,
            cpa,
            roas,
            date
          };
          
          console.log('Parsed row data:', rowData); // Debug log
          data.push(rowData);
        }
      }
    }

    return data;
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const text = await file.text();
      console.log('CSV content:', text.substring(0, 500)); // Debug: show first 500 chars
      const parsedData = parseCSV(text);
      console.log('Parsed data:', parsedData); // Debug: show parsed data
      
      if (parsedData.length === 0) {
        throw new Error('No valid data found in CSV file');
      }

      // Validate the parsed data
      const validation = validateCSV(parsedData);
      if (!validation.isValid) {
        throw new Error(`Data validation failed: ${validation.errors.join(', ')}`);
      }

      // Show warnings if any
      if (validation.warnings.length > 0) {
        setValidationWarnings(validation.warnings);
      } else {
        setValidationWarnings([]);
      }

      setUploadedData(parsedData);
      
      // Save to localStorage for persistence
      localStorage.setItem('googleAdsReportData', JSON.stringify({
        data: parsedData,
        uploadedAt: new Date().toISOString(),
        fileName: file.name
      }));

      setSuccess(`Successfully uploaded ${parsedData.length} campaign records from ${file.name}`);
      
      // Send to API for processing
      await fetch('/api/google-ads/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: parsedData, fileName: file.name })
      });

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to process CSV file');
    } finally {
      setLoading(false);
    }
  };

  const loadStoredData = () => {
    const stored = localStorage.getItem('googleAdsReportData');
    if (stored) {
      try {
        const { data, uploadedAt, fileName } = JSON.parse(stored);
        setUploadedData(data);
        setSuccess(`Loaded ${data.length} records from ${fileName} (uploaded ${new Date(uploadedAt).toLocaleString()})`);
      } catch (err) {
        setError('Failed to load stored data');
      }
    }
  };

  const clearData = () => {
    setUploadedData([]);
    localStorage.removeItem('googleAdsReportData');
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

  // Calculate totals
  const totals = uploadedData.reduce((acc, row) => ({
    impressions: acc.impressions + row.impressions,
    clicks: acc.clicks + row.clicks,
    cost: acc.cost + row.cost,
    conversions: acc.conversions + row.conversions,
    conversionValue: acc.conversionValue + row.conversionValue
  }), { impressions: 0, clicks: 0, cost: 0, conversions: 0, conversionValue: 0 });

  const overallCTR = totals.impressions > 0 ? (totals.clicks / totals.impressions) * 100 : 0;
  const overallCPC = totals.clicks > 0 ? totals.cost / totals.clicks : 0;
  const overallCPA = totals.conversions > 0 ? totals.cost / totals.conversions : 0;
  const overallROAS = totals.cost > 0 ? totals.conversionValue / totals.cost : 0;

  return (
    <div className="space-y-6">
      {/* Upload Section */}
      <div className="bg-white rounded-xl shadow border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">📊 Upload Google Ads Report</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload CSV Report from Google Ads
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
            
            {uploadedData.length > 0 && (
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

          {validationWarnings.length > 0 && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <div className="text-yellow-800 text-sm">
                <strong>⚠️ Data Warnings:</strong>
                <ul className="mt-1 list-disc list-inside">
                  {validationWarnings.map((warning, index) => (
                    <li key={index}>{warning}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {success && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <div className="text-green-800 text-sm">✅ {success}</div>
            </div>
          )}

          {loading && (
            <div className="flex justify-center">
              <LoadingSpinner text="Processing CSV file..." />
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-medium text-blue-900 mb-2">📋 How to Export from Google Ads:</h4>
          <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
            <li>Go to your Google Ads dashboard</li>
            <li>Navigate to Campaigns → Reports</li>
            <li>Create a new report with these columns:
              <ul className="ml-4 mt-1 space-y-1 list-disc">
                <li>Campaign name</li>
                <li>Impressions</li>
                <li>Clicks</li>
                <li>Cost</li>
                <li>Conversions</li>
                <li>Conversion value</li>
                <li>CTR</li>
                <li>Avg. CPC</li>
                <li>Cost per conversion</li>
              </ul>
            </li>
            <li>Export as CSV</li>
            <li>Upload the file above</li>
          </ol>
          
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
            <p className="text-sm text-yellow-800">
              <strong>⚠️ Note:</strong> If you have a <strong>keyword report</strong> (like "Search keyword report"), 
              please use the <strong>"Google Ads Keyword Performance"</strong> section below instead of this one.
            </p>
          </div>
        </div>
      </div>

      {/* Data Display */}
      {uploadedData.length > 0 && (
        <div className="space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl shadow border p-4">
              <h3 className="text-sm font-medium text-[#4e37a8] mb-1">Total Spend</h3>
              <p className="text-2xl font-bold text-gray-900">{formatCurrency(totals.cost)}</p>
              <p className="text-xs text-gray-600">{uploadedData.length} campaigns</p>
            </div>
            
            <div className="bg-white rounded-xl shadow border p-4">
              <h3 className="text-sm font-medium text-[#4e37a8] mb-1">Conversions</h3>
              <p className="text-2xl font-bold text-gray-900">{totals.conversions}</p>
              <p className="text-xs text-gray-600">Total conversions</p>
            </div>
            
            <div className="bg-white rounded-xl shadow border p-4">
              <h3 className="text-sm font-medium text-[#4e37a8] mb-1">Cost Per Acquisition</h3>
              <p className="text-2xl font-bold text-gray-900">{formatCurrency(overallCPA)}</p>
              <p className="text-xs text-gray-600">Overall CPA</p>
            </div>
            
            <div className="bg-white rounded-xl shadow border p-4">
              <h3 className="text-sm font-medium text-[#4e37a8] mb-1">ROAS</h3>
              <p className="text-2xl font-bold text-gray-900">{overallROAS.toFixed(2)}x</p>
              <p className="text-xs text-gray-600">Return on ad spend</p>
            </div>
          </div>

          {/* Campaign Details Table */}
          <div className="bg-white rounded-xl shadow border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Campaign Performance</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Campaign</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Impressions</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Clicks</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conversions</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CTR</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CPC</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CPA</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ROAS</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {uploadedData.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {row.campaignName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatNumber(row.impressions)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatNumber(row.clicks)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatCurrency(row.cost)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {row.conversions}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {row.ctr.toFixed(2)}%
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatCurrency(row.cpc)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatCurrency(row.cpa)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {row.roas.toFixed(2)}x
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
