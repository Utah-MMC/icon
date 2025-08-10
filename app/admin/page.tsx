'use client';

import { useState, useEffect } from 'react';

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showManualEntry, setShowManualEntry] = useState(false);
  const [manualData, setManualData] = useState({
    rentals: 0,
    revenue: 0,
    activeRentals: 0,
    totalDumpsters: 20,
    customerSatisfaction: 0
  });

  // Simple authentication (in production, use proper auth)
  const handleLogin = () => {
    if (password === 'IconDumpsters2024!') {
      setIsAuthenticated(true);
      localStorage.setItem('adminAuthenticated', 'true');
    } else {
      alert('Incorrect password');
    }
  };

  useEffect(() => {
    const authenticated = localStorage.getItem('adminAuthenticated');
    if (authenticated === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuthenticated');
  };

  const handleManualEntry = () => {
    if (typeof window !== 'undefined' && (window as any).updateKPI) {
      (window as any).updateKPI.rental(manualData.rentals, manualData.revenue);
      (window as any).updateKPI.utilization(manualData.activeRentals, manualData.totalDumpsters);
      (window as any).updateKPI.satisfaction(manualData.customerSatisfaction);
      setShowManualEntry(false);
      alert('Data updated successfully!');
    }
  };

  const exportData = () => {
    if (typeof window !== 'undefined' && (window as any).updateKPI) {
      (window as any).updateKPI.export();
    }
  };

  const resetData = () => {
    if (confirm('Are you sure you want to reset all monthly data?')) {
      if (typeof window !== 'undefined' && (window as any).updateKPI) {
        (window as any).updateKPI.reset();
        alert('Data reset successfully!');
      }
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img 
              className="mx-auto h-12 w-auto" 
              src="/images/Icon_Dumpsters_Final.png" 
              alt="Icon Dumpsters - Professional Dumpster Rental Services in Utah"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Admin Dashboard
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Enter password to access KPI tracking
            </p>
          </div>
          <div className="mt-8 space-y-6">
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              />
            </div>
            <div>
              <button
                onClick={handleLogin}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#4e37a8] hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#4e37a8] shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <img 
                className="h-8 w-auto" 
                src="/images/Icon_Dumpsters_Final.png" 
                alt="Icon Dumpsters - Professional Dumpster Rental Services in Utah"
              />
              <h1 className="ml-3 text-2xl font-bold text-white">
                KPI Dashboard
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleLogout}
                className="text-white hover:text-purple-200 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Action Buttons */}
        <div className="mb-6 flex flex-wrap gap-4">
          <button
            onClick={() => setShowManualEntry(!showManualEntry)}
            className="bg-white px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            {showManualEntry ? 'Hide' : 'Show'} Manual Entry
          </button>
          <button
            onClick={exportData}
            className="bg-green-600 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Export Data
          </button>
          <button
            onClick={resetData}
            className="bg-red-600 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Reset Monthly Data
          </button>
        </div>

        {/* Manual Entry Form */}
        {showManualEntry && (
          <div className="bg-white shadow rounded-lg p-6 mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Manual Data Entry</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Total Rentals</label>
                <input
                  type="number"
                  value={manualData.rentals}
                  onChange={(e) => setManualData({...manualData, rentals: parseInt(e.target.value) || 0})}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Total Revenue ($)</label>
                <input
                  type="number"
                  value={manualData.revenue}
                  onChange={(e) => setManualData({...manualData, revenue: parseInt(e.target.value) || 0})}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Active Rentals</label>
                <input
                  type="number"
                  value={manualData.activeRentals}
                  onChange={(e) => setManualData({...manualData, activeRentals: parseInt(e.target.value) || 0})}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Total Dumpsters</label>
                <input
                  type="number"
                  value={manualData.totalDumpsters}
                  onChange={(e) => setManualData({...manualData, totalDumpsters: parseInt(e.target.value) || 20})}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Customer Satisfaction (1-5)</label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  step="0.1"
                  value={manualData.customerSatisfaction}
                  onChange={(e) => setManualData({...manualData, customerSatisfaction: parseFloat(e.target.value) || 0})}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                />
              </div>
              <div className="flex items-end">
                <button
                  onClick={handleManualEntry}
                  className="w-full bg-[#4e37a8] px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  Update Data
                </button>
              </div>
            </div>
          </div>
        )}

        {/* KPI Dashboard */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Real-Time KPI Metrics
            </h3>
            <div id="kpi-dashboard">
              {/* KPI data will be populated by the tracking script */}
              <div className="text-center text-gray-500 py-8">
                Loading KPI data...
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="text-sm font-medium text-blue-800 mb-2">How to Use This Dashboard</h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• <strong>Automatic Tracking:</strong> Quote requests and phone calls are tracked automatically</li>
            <li>• <strong>Manual Entry:</strong> Use the form above to update rental data, revenue, and customer satisfaction</li>
            <li>• <strong>Export Data:</strong> Download your KPI data as a JSON file for analysis</li>
            <li>• <strong>Reset Data:</strong> Clear all monthly data (use at the beginning of each month)</li>
            <li>• <strong>Status Indicators:</strong> 🟢 On track, 🟡 Needs attention, 🔴 Below target</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
