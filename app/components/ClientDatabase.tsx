'use client';

import { useState, useEffect, useCallback } from 'react';
import CSVUploader from './CSVUploader';

interface Client {
  companyName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zip: string;
  county: string;
  accountId: string;
  tags: string;
  taxExempt: string;
  onHold: string;
  onHoldReason: string;
  createdOn: string;
}

interface ClientAnalytics {
  totalClients: number;
  residentialClients: number;
  commercialClients: number;
  clientsByCounty: Record<string, number>;
  clientsByCity: Record<string, number>;
  leadSources: Record<string, number>;
  monthlyGrowth: number;
  topCities: Array<{city: string, count: number}>;
  topCounties: Array<{county: string, count: number}>;
  recentClients: Client[];
}

export default function ClientDatabase() {
  const [clients, setClients] = useState<Client[]>([]);
  const [analytics, setAnalytics] = useState<ClientAnalytics | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'residential' | 'commercial'>('all');
  const [selectedCounty, setSelectedCounty] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [clientsPerPage, setClientsPerPage] = useState(25);

  const loadClientData = useCallback(async () => {
    try {
      // Fetch from the API endpoint
      const response = await fetch('/api/clients');
      if (response.ok) {
        const data = await response.json();
        setClients(data);
        calculateAnalytics(data);
      } else {
        throw new Error('Failed to fetch client data');
      }
    } catch (error) {
      console.error('Error loading client data:', error);
      // Fallback to localStorage if API fails
      const savedData = localStorage.getItem('clientData');
      if (savedData) {
        try {
          const clients = JSON.parse(savedData);
          setClients(clients);
          calculateAnalytics(clients);
        } catch (parseError) {
          console.error('Error parsing saved client data:', parseError);
          setClients([]);
        }
      } else {
        setClients([]);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadClientData();
    // Try to load from localStorage first
    const savedData = localStorage.getItem('clientData');
    if (savedData) {
      try {
        const clients = JSON.parse(savedData);
        setClients(clients);
        calculateAnalytics(clients);
      } catch (error) {
        console.error('Error loading saved client data:', error);
      }
    }
  }, [loadClientData]);

  const calculateAnalytics = (clientData: Client[]) => {
    const totalClients = clientData.length;
    const residentialClients = clientData.filter(c => c.tags.includes('Residential')).length;
    const commercialClients = clientData.filter(c => c.tags.includes('Commercial')).length;
    
    // County analysis
    const clientsByCounty: Record<string, number> = {};
    const clientsByCity: Record<string, number> = {};
    const leadSources: Record<string, number> = {};
    
    clientData.forEach(client => {
      // County counting
      if (client.county) {
        clientsByCounty[client.county] = (clientsByCounty[client.county] || 0) + 1;
      }
      
      // City counting
      if (client.city) {
        clientsByCity[client.city] = (clientsByCity[client.city] || 0) + 1;
      }
      
      // Lead source analysis
      if (client.tags) {
        const sources = client.tags.split(',');
        sources.forEach(source => {
          const cleanSource = source.trim();
          if (cleanSource && !cleanSource.includes('Due Upon Receipt')) {
            leadSources[cleanSource] = (leadSources[cleanSource] || 0) + 1;
          }
        });
      }
    });

    // Top cities and counties
    const topCities = Object.entries(clientsByCity)
      .map(([city, count]) => ({ city, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    const topCounties = Object.entries(clientsByCounty)
      .map(([county, count]) => ({ county, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    // Recent clients (last 10)
    const recentClients = clientData
      .sort((a, b) => new Date(b.createdOn).getTime() - new Date(a.createdOn).getTime())
      .slice(0, 10);

    // Monthly growth calculation (simplified)
    const currentMonth = new Date().getMonth();
    const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const currentMonthClients = clientData.filter(c => 
      new Date(c.createdOn).getMonth() === currentMonth
    ).length;
    const lastMonthClients = clientData.filter(c => 
      new Date(c.createdOn).getMonth() === lastMonth
    ).length;
    
    const monthlyGrowth = lastMonthClients > 0 
      ? ((currentMonthClients - lastMonthClients) / lastMonthClients) * 100 
      : 0;

    setAnalytics({
      totalClients,
      residentialClients,
      commercialClients,
      clientsByCounty,
      clientsByCity,
      leadSources,
      monthlyGrowth,
      topCities,
      topCounties,
      recentClients
    });
  };

  const filteredClients = clients.filter(client => {
    const matchesSearch = 
      client.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.companyName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.city?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = filterType === 'all' || 
      (filterType === 'residential' && client.tags?.includes('Residential')) ||
      (filterType === 'commercial' && client.tags?.includes('Commercial'));

    const matchesCounty = selectedCounty === 'all' || client.county === selectedCounty;

    return matchesSearch && matchesType && matchesCounty;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredClients.length / clientsPerPage);
  const startIndex = (currentPage - 1) * clientsPerPage;
  const endIndex = startIndex + clientsPerPage;
  const currentClients = filteredClients.slice(startIndex, endIndex);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filterType, selectedCounty, clientsPerPage]);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#4e37a8]"></div>
        <span className="ml-2">Loading client data...</span>
      </div>
    );
  }

  const handleDataUploaded = (uploadedClients: Client[], uploadedAnalysis: any) => {
    setClients(uploadedClients);
    setAnalytics(uploadedAnalysis);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Client Database Analytics</h2>
          <p className="text-gray-600">Comprehensive client insights and management</p>
        </div>
        <button
          onClick={() => {
            setLoading(true);
            loadClientData();
          }}
          disabled={loading}
          className="px-4 py-2 bg-[#4e37a8] text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
        >
          {loading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Loading...
            </>
          ) : (
            <>
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Refresh Data
            </>
          )}
        </button>
      </div>

      {/* CSV Uploader */}
      <div className="mb-8">
        <CSVUploader onDataUploaded={handleDataUploaded} />
      </div>

      {/* Analytics Overview */}
      {analytics && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg text-white">
            <h3 className="text-lg font-semibold mb-2">Total Clients</h3>
            <p className="text-3xl font-bold">{analytics.totalClients}</p>
            <p className="text-blue-100 text-sm">
              {analytics.monthlyGrowth > 0 ? '+' : ''}{analytics.monthlyGrowth.toFixed(1)}% this month
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-lg text-white">
            <h3 className="text-lg font-semibold mb-2">Residential</h3>
            <p className="text-3xl font-bold">{analytics.residentialClients}</p>
            <p className="text-green-100 text-sm">
              {((analytics.residentialClients / analytics.totalClients) * 100).toFixed(1)}% of total
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-lg text-white">
            <h3 className="text-lg font-semibold mb-2">Commercial</h3>
            <p className="text-3xl font-bold">{analytics.commercialClients}</p>
            <p className="text-purple-100 text-sm">
              {((analytics.commercialClients / analytics.totalClients) * 100).toFixed(1)}% of total
            </p>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-lg text-white">
            <h3 className="text-lg font-semibold mb-2">Top County</h3>
            <p className="text-2xl font-bold">{analytics.topCounties[0]?.county || 'N/A'}</p>
            <p className="text-orange-100 text-sm">
              {analytics.topCounties[0]?.count || 0} clients
            </p>
          </div>
        </div>
      )}

      {/* Lead Source Analysis */}
      {analytics && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-4">Lead Sources</h3>
            <div className="space-y-3">
              {Object.entries(analytics.leadSources).map(([source, count]) => (
                <div key={source} className="flex justify-between items-center">
                  <span className="text-gray-700">{source}</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                      <div 
                        className="bg-[#4e37a8] h-2 rounded-full" 
                        style={{ width: `${(count / analytics.totalClients) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-4">Top Cities</h3>
            <div className="space-y-3">
              {analytics.topCities.slice(0, 8).map(({ city, count }) => (
                <div key={city} className="flex justify-between items-center">
                  <span className="text-gray-700">{city}</span>
                  <span className="text-sm font-medium text-gray-900">{count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="mb-6 flex flex-wrap gap-4">
        <div className="flex-1 min-w-64">
          <input
            type="text"
            placeholder="Search clients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4e37a8] focus:border-transparent"
          />
        </div>
        
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value as any)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4e37a8] focus:border-transparent"
        >
          <option value="all">All Clients</option>
          <option value="residential">Residential</option>
          <option value="commercial">Commercial</option>
        </select>

        <select
          value={selectedCounty}
          onChange={(e) => setSelectedCounty(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4e37a8] focus:border-transparent"
        >
          <option value="all">All Counties</option>
          {analytics && Object.keys(analytics.clientsByCounty).map(county => (
            <option key={county} value={county}>{county}</option>
          ))}
        </select>

        <select
          value={clientsPerPage}
          onChange={(e) => setClientsPerPage(Number(e.target.value))}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4e37a8] focus:border-transparent"
        >
          <option value={10}>10 per page</option>
          <option value={25}>25 per page</option>
          <option value={50}>50 per page</option>
          <option value={100}>100 per page</option>
        </select>
      </div>

      {/* Client List */}
      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Client
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Created
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentClients.map((client, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {client.companyName || `${client.firstName} ${client.lastName}`}
                      </div>
                      <div className="text-sm text-gray-500">
                        {client.accountId}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{client.email}</div>
                    <div className="text-sm text-gray-500">{client.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{client.city}, {client.state}</div>
                    <div className="text-sm text-gray-500">{client.county}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      client.tags?.includes('Commercial') 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {client.tags?.includes('Commercial') ? 'Commercial' : 'Residential'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(client.createdOn).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      client.onHold === 'Yes' 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {client.onHold === 'Yes' ? 'On Hold' : 'Active'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="flex-1 flex justify-between sm:hidden">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">{startIndex + 1}</span> to{' '}
                <span className="font-medium">{Math.min(endIndex, filteredClients.length)}</span> of{' '}
                <span className="font-medium">{filteredClients.length}</span> results
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="sr-only">Previous</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {/* Page Numbers */}
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                        currentPage === pageNum
                          ? 'z-10 bg-[#4e37a8] border-[#4e37a8] text-white'
                          : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
                
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="sr-only">Next</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
