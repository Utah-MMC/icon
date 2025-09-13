'use client';

import { useState, useEffect } from 'react';
import { enhancedKPIData, getFilteredData } from '../../enhancedClientDatabase';

interface FilterState {
  city: string;
  clientType: string;
  dateRange: string;
  minRevenue: number;
  maxRevenue: number;
  isRepeatCustomer: boolean | undefined;
}

export default function EnhancedKPIDashboard() {
  const [filters, setFilters] = useState<FilterState>({
    city: '',
    clientType: '',
    dateRange: '',
    minRevenue: 0,
    maxRevenue: 10000,
    isRepeatCustomer: undefined
  });

  const [filteredData, setFilteredData] = useState(enhancedKPIData);
  const [activeTab, setActiveTab] = useState<'overview' | 'geographic' | 'clients' | 'analytics'>('overview');

  // Update filtered data when filters change
  useEffect(() => {
    const filtered = getFilteredData(filters);
    setFilteredData(prev => ({
      ...prev,
      clients: {
        ...prev.clients,
        allClients: filtered.clients,
        topClients: filtered.clients.sort((a, b) => b.totalRevenue - a.totalRevenue).slice(0, 10)
      }
    }));
  }, [filters]);

  const handleFilterChange = (key: keyof FilterState, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      city: '',
      clientType: '',
      dateRange: '',
      minRevenue: 0,
      maxRevenue: 10000,
      isRepeatCustomer: undefined
    });
  };

  const getUniqueCities = () => {
    const cities = new Set<string>();
    enhancedKPIData.clients.allClients.forEach(client => {
      client.serviceAreas.forEach((area: string) => cities.add(area));
    });
    return Array.from(cities).sort();
  };

  const getUniqueClientTypes = () => {
    const types = new Set<string>();
    enhancedKPIData.clients.allClients.forEach(client => {
      types.add(client.clientType);
    });
    return Array.from(types).sort();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Enhanced KPI Dashboard</h1>
        <p className="text-gray-600">Comprehensive business analytics with geographic and client insights</p>
      </div>

      {/* Filter Section */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 mb-8">
        <h3 className="text-lg font-semibold mb-4">Filters</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* City Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
            <select
              value={filters.city}
              onChange={(e) => handleFilterChange('city', e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-sm"
            >
              <option value="">All Cities</option>
              {getUniqueCities().map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          {/* Client Type Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Client Type</label>
            <select
              value={filters.clientType}
              onChange={(e) => handleFilterChange('clientType', e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-sm"
            >
              <option value="">All Types</option>
              {getUniqueClientTypes().map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* Revenue Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Min Revenue</label>
            <input
              type="number"
              value={filters.minRevenue}
              onChange={(e) => handleFilterChange('minRevenue', parseFloat(e.target.value) || 0)}
              className="w-full border rounded-lg px-3 py-2 text-sm"
              placeholder="0"
            />
          </div>

          {/* Repeat Customer Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Customer Type</label>
            <select
              value={filters.isRepeatCustomer === undefined ? '' : filters.isRepeatCustomer.toString()}
              onChange={(e) => handleFilterChange('isRepeatCustomer', 
                e.target.value === '' ? undefined : e.target.value === 'true'
              )}
              className="w-full border rounded-lg px-3 py-2 text-sm"
            >
              <option value="">All Customers</option>
              <option value="true">Repeat Customers</option>
              <option value="false">New Customers</option>
            </select>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={clearFilters}
            className="text-sm text-gray-500 hover:text-gray-700 underline"
          >
            Clear All Filters
          </button>
          <div className="text-sm text-gray-600">
            Showing {filteredData.clients.allClients.length} clients
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="mb-8">
        <nav className="flex space-x-8">
          {[
            { id: 'overview', label: 'Overview', icon: '📊' },
            { id: 'geographic', label: 'Geographic', icon: '🗺️' },
            { id: 'clients', label: 'Clients', icon: '👥' },
            { id: 'analytics', label: 'Analytics', icon: '📈' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-[#4e37a8] text-white'
                  : 'text-gray-600 hover:text-[#4e37a8] hover:bg-purple-50'
              }`}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg text-white">
              <h3 className="text-lg font-semibold mb-2">Total Revenue</h3>
              <p className="text-3xl font-bold">${filteredData.overall.totalRevenue.toLocaleString()}</p>
              <p className="text-blue-100 text-sm mt-1">
                ${filteredData.overall.avgRevenuePerClient.toLocaleString()} avg per client
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-lg text-white">
              <h3 className="text-lg font-semibold mb-2">Total Clients</h3>
              <p className="text-3xl font-bold">{filteredData.overall.totalClients}</p>
              <p className="text-green-100 text-sm mt-1">
                {filteredData.overall.repeatCustomers} repeat customers
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-lg text-white">
              <h3 className="text-lg font-semibold mb-2">Total Rentals</h3>
              <p className="text-3xl font-bold">{filteredData.overall.totalRentals}</p>
              <p className="text-purple-100 text-sm mt-1">
                {filteredData.overall.totalTransactions} total transactions
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-lg text-white">
              <h3 className="text-lg font-semibold mb-2">Retention Rate</h3>
              <p className="text-3xl font-bold">{filteredData.overall.customerRetentionRate.toFixed(1)}%</p>
              <p className="text-orange-100 text-sm mt-1">
                {filteredData.overall.newCustomers} new customers
              </p>
            </div>
          </div>

          {/* Top Clients */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-xl font-semibold mb-4">Top Clients by Revenue</h3>
            <div className="space-y-3">
              {filteredData.clients.topClients.slice(0, 5).map((client, index) => (
                <div key={client.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-bold text-[#4e37a8]">#{index + 1}</span>
                    <div>
                      <p className="font-medium text-gray-900">{client.name}</p>
                      <p className="text-sm text-gray-600">{client.clientType}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">${client.totalRevenue.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">{client.totalTransactions} transactions</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'geographic' && (
        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-xl font-semibold mb-4">City Performance</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {enhancedKPIData.geographic.cities.map(city => (
                <div key={city.city} className="border rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{city.city}</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Revenue:</span>
                      <span className="font-medium">${city.revenue.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Clients:</span>
                      <span className="font-medium">{city.clients}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rentals:</span>
                      <span className="font-medium">{city.rentals}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Market Share:</span>
                      <span className="font-medium">{city.marketShare.toFixed(1)}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'clients' && (
        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-xl font-semibold mb-4">Client Database</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Client
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Revenue
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Transactions
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Areas
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredData.clients.allClients.map(client => (
                    <tr key={client.name} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{client.name}</div>
                          <div className="text-sm text-gray-500">
                            ${client.avgRevenuePerTransaction.toFixed(0)} avg/transaction
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {client.clientType}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        ${client.totalRevenue.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {client.totalTransactions}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {client.serviceAreas.join(', ')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          client.isRepeatCustomer 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {client.isRepeatCustomer ? 'Repeat' : 'New'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'analytics' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-xl font-semibold mb-4">Client Type Breakdown</h3>
              <div className="space-y-3">
                {Object.entries(enhancedKPIData.clients.clientTypes).map(([type, data]) => (
                  <div key={type} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">{type}</span>
                    <div className="text-right">
                      <p className="text-sm font-medium">{data.count} clients</p>
                      <p className="text-sm text-gray-600">${data.avgRevenue.toFixed(0)} avg</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-xl font-semibold mb-4">Growth Trends</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Revenue Growth</span>
                  <span className={`font-bold ${
                    enhancedKPIData.temporal.growthTrends.revenueGrowth >= 0 
                      ? 'text-green-600' 
                      : 'text-red-600'
                  }`}>
                    {enhancedKPIData.temporal.growthTrends.revenueGrowth >= 0 ? '+' : ''}
                    {enhancedKPIData.temporal.growthTrends.revenueGrowth.toFixed(1)}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Profit Growth</span>
                  <span className={`font-bold ${
                    enhancedKPIData.temporal.growthTrends.profitGrowth >= 0 
                      ? 'text-green-600' 
                      : 'text-red-600'
                  }`}>
                    {enhancedKPIData.temporal.growthTrends.profitGrowth >= 0 ? '+' : ''}
                    {enhancedKPIData.temporal.growthTrends.profitGrowth.toFixed(1)}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Rental Growth</span>
                  <span className={`font-bold ${
                    enhancedKPIData.temporal.growthTrends.rentalGrowth >= 0 
                      ? 'text-green-600' 
                      : 'text-red-600'
                  }`}>
                    {enhancedKPIData.temporal.growthTrends.rentalGrowth >= 0 ? '+' : ''}
                    {enhancedKPIData.temporal.growthTrends.rentalGrowth.toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
