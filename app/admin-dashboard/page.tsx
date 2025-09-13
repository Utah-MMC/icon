"use client";

import { useEffect, useState, useLayoutEffect } from 'react';
import { kpiSyncService } from '../lib/KPISyncService';
import SalesRevenueManager from '../components/SalesRevenueManager';
import { getCurrentKPIData } from '../../realSalesData';

interface KPIData {
  revenue: number;
  rentals: number;
  utilization: number;
  websiteVisitors: number;
  quoteRequests: number;
  phoneCalls: number;
  conversionRate: number;
  customerSatisfaction: number;
}

interface KPITargets {
  monthlyRevenue: number;
  monthlyRentals: number;
  utilization: number;
  websiteVisitors: number;
  quoteRequests: number;
  phoneCalls: number;
  conversionRate: number;
  customerSatisfaction: number;
}

export default function AdminDashboard() {
  const [kpiData, setKpiData] = useState<KPIData>({
    revenue: 0,
    rentals: 0,
    utilization: 0,
    websiteVisitors: 0,
    quoteRequests: 0,
    phoneCalls: 0,
    conversionRate: 0,
    customerSatisfaction: 0
  });

  const [targets] = useState<KPITargets>({
    monthlyRevenue: 25000, // Increased target based on current performance
    monthlyRentals: 50, // Increased target based on current performance
    utilization: 85, // Slightly higher target
    websiteVisitors: 2000, // Increased target
    quoteRequests: 100, // Increased target
    phoneCalls: 200, // Increased target
    conversionRate: 25, // Increased target
    customerSatisfaction: 4.7 // Slightly higher target
  });

  const [showManualEntry, setShowManualEntry] = useState(false);
  const [manualData, setManualData] = useState({
    totalRentals: 0,
    totalRevenue: 0,
    activeRentals: 36,
    totalDumpsters: 44,
    customerSatisfaction: 0
  });

  const [inventoryData, setInventoryData] = useState({
    totalDumpsters: 44,
    availableDumpsters: 8,
    activeRentals: 36,
    utilizationRate: 81.8
  });

  const [lastRefresh, setLastRefresh] = useState<Date | null>(null);
  const [isClient, setIsClient] = useState(false);

  // Initialize client-side state
  useLayoutEffect(() => {
    setIsClient(true);
    setLastRefresh(new Date());
  }, []);

  // Load real KPI data instead of localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        // Load real sales data
        const realKPIData = getCurrentKPIData();
        setKpiData(realKPIData);
      } catch (error) {
        console.error('Failed to load real KPI data:', error);
        // Fallback to localStorage if real data fails
        const stored = localStorage.getItem('iconDumpstersKPI');
        if (stored) {
          try {
            const parsedData = JSON.parse(stored);
            if (parsedData.metrics) {
              setKpiData(parsedData.metrics);
            } else {
              setKpiData(parsedData);
            }
          } catch (error) {
            console.error('Failed to load KPI data from localStorage:', error);
          }
        }
      }
    }

    // Listen for inventory updates
    const handleInventoryUpdate = (event: CustomEvent) => {
      const inventoryStats = event.detail;
      setKpiData(prev => ({
        ...prev,
        utilization: inventoryStats.utilizationRate,
        rentals: inventoryStats.activeRentals
      }));
      
      // Update inventory data state
      setInventoryData({
        totalDumpsters: inventoryStats.totalDumpsters,
        availableDumpsters: inventoryStats.availableDumpsters,
        activeRentals: inventoryStats.activeRentals,
        utilizationRate: inventoryStats.utilizationRate
      });
    };

    window.addEventListener('inventory-updated', handleInventoryUpdate as EventListener);

    return () => {
      window.removeEventListener('inventory-updated', handleInventoryUpdate as EventListener);
    };
  }, []);

  // Update inventory data
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('inventory');
      if (stored) {
        try {
          const inventory = JSON.parse(stored);
          const available = inventory.filter((item: any) => item.quantity > 0).length;
          const active = inventory.length - available;
          const utilization = inventory.length > 0 ? (active / inventory.length) * 100 : 0;
          
          setInventoryData({
            totalDumpsters: inventory.length,
            availableDumpsters: available,
            activeRentals: active,
            utilizationRate: utilization
          });
        } catch (error) {
          console.error('Failed to load inventory data:', error);
        }
      }
    }
  }, []);

  // Auto-refresh KPI data every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof window !== 'undefined') {
        const stored = localStorage.getItem('iconDumpstersKPI');
        if (stored) {
          try {
            const parsedData = JSON.parse(stored);
            if (parsedData.metrics) {
              setKpiData(parsedData.metrics);
            } else {
              setKpiData(parsedData);
            }
            setLastRefresh(new Date());
          } catch (error) {
            console.error('Failed to refresh KPI data:', error);
          }
        }
      }
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const refreshData = () => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('iconDumpstersKPI');
      if (stored) {
        try {
          const parsedData = JSON.parse(stored);
          if (parsedData.metrics) {
            setKpiData(parsedData.metrics);
          } else {
            setKpiData(parsedData);
          }
          setLastRefresh(new Date());
        } catch (error) {
          console.error('Failed to refresh KPI data:', error);
        }
      }
    }
  };

  const getStatus = (current: number, target: number) => {
    if (current >= target * 0.9) return '🟢';
    if (current >= target * 0.7) return '🟡';
    return '🔴';
  };

  const updateManualData = () => {
    if (typeof window !== 'undefined' && (window as any).updateKPI) {
      (window as any).updateKPI.rental(manualData.totalRentals, manualData.totalRevenue);
      (window as any).updateKPI.utilization(manualData.activeRentals, manualData.totalDumpsters);
      (window as any).updateKPI.satisfaction(manualData.customerSatisfaction);
      
      // Reload KPI data
      const stored = localStorage.getItem('iconDumpstersKPI');
      if (stored) {
        try {
          const parsedData = JSON.parse(stored);
          // Handle both old and new data formats
          if (parsedData.metrics) {
            setKpiData(parsedData.metrics);
          } else {
            setKpiData(parsedData);
          }
        } catch (error) {
          console.error('Failed to reload KPI data:', error);
        }
      }
    }
  };

  const exportData = () => {
    if (typeof window !== 'undefined' && (window as any).updateKPI) {
      (window as any).updateKPI.export();
    }
  };

  const resetData = () => {
    if (confirm('Are you sure you want to reset all KPI data? This cannot be undone.')) {
      if (typeof window !== 'undefined' && (window as any).updateKPI) {
        (window as any).updateKPI.reset();
        setKpiData({
          revenue: 0,
          rentals: 0,
          utilization: 0,
          websiteVisitors: 0,
          quoteRequests: 0,
          phoneCalls: 0,
          conversionRate: 0,
          customerSatisfaction: 0
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Icon Dumpsters - Admin Dashboard</h1>
              <p className="text-gray-600">Administrative controls, data management, and system configuration</p>
              <p className="text-sm text-gray-500 mt-1" suppressHydrationWarning>
                Last updated: {isClient && lastRefresh ? lastRefresh.toLocaleTimeString() : 'Loading...'}
              </p>
            </div>
            <button
              onClick={refreshData}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              🔄 Refresh Data
            </button>
          </div>
          
          {/* Navigation Links */}
          <div className="mt-4 flex flex-wrap gap-4">
            <a
              href="https://icondumpsters.com/scraper-dashboard"
              className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors text-sm"
            >
              🕷️ Scraper Dashboard
            </a>
            <a
              href="https://icondumpsters.com/kpi-dashboard"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
            >
              📊 Analytics Dashboard
            </a>
            <a
              href="https://icondumpsters.com/inventory"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              📦 Inventory Management
            </a>
            <a
              href="https://icondumpsters.com/email-outreach"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm"
            >
              📧 Email Outreach
            </a>
            <a
              href="https://icondumpsters.com/admin"
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm"
            >
              🔐 Admin Login
            </a>
            <a
              href="https://icondumpsters.com/api-test"
              className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors text-sm"
            >
              🧪 API Testing
            </a>
            <a
              href="https://icondumpsters.com/enhanced-dashboard"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm"
            >
              📊 Enhanced Analytics
            </a>
          </div>
        </div>

        {/* Admin Controls Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Administrative Controls</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl shadow border p-4">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Data Management</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setShowManualEntry(!showManualEntry)}
                  className="w-full bg-[#4e37a8] text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm"
                >
                  {showManualEntry ? 'Hide' : 'Show'} Manual Entry
                </button>
                <button
                  onClick={exportData}
                  className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
                >
                  📊 Export Data
                </button>
                <button
                  onClick={resetData}
                  className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm"
                >
                  🗑️ Reset Data
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow border p-4">
              <h3 className="text-lg font-medium text-gray-900 mb-3">System Testing</h3>
              <div className="space-y-2">
                <button
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).iconDumpstersKPI) {
                      (window as any).iconDumpstersKPI.trackQuoteRequest();
                      refreshData();
                    }
                  }}
                  className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
                >
                  📝 Test Quote Request
                </button>
                <button
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).iconDumpstersKPI) {
                      (window as any).iconDumpstersKPI.trackPhoneCall();
                      refreshData();
                    }
                  }}
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  📞 Test Phone Call
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow border p-4">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Quick Actions</h3>
              <div className="space-y-2">
                <a
                  href="https://icondumpsters.com/scraper-dashboard"
                  className="block w-full bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors text-sm text-center"
                >
                  🕷️ Scraper Dashboard
                </a>
                <a
                  href="https://icondumpsters.com/inventory"
                  className="block w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm text-center"
                >
                  📦 Manage Inventory
                </a>
                <a
                  href="https://icondumpsters.com/kpi-dashboard"
                  className="block w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm text-center"
                >
                  📊 View Analytics
                </a>
                <a
                  href="https://icondumpsters.com/enhanced-dashboard"
                  className="block w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm text-center"
                >
                  🗺️ Enhanced Analytics
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Manual Entry Form */}
        {showManualEntry && (
          <div className="bg-white rounded-xl shadow border p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Manual Data Entry</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Total Rentals (This Month)</label>
                <input
                  type="number"
                  value={manualData.totalRentals}
                  onChange={(e) => setManualData({...manualData, totalRentals: parseInt(e.target.value) || 0})}
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Total Revenue (This Month)</label>
                <input
                  type="number"
                  value={manualData.totalRevenue}
                  onChange={(e) => setManualData({...manualData, totalRevenue: parseInt(e.target.value) || 0})}
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Active Rentals (Currently Out)</label>
                <input
                  type="number"
                  value={manualData.activeRentals}
                  onChange={(e) => setManualData({...manualData, activeRentals: parseInt(e.target.value) || 0})}
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Total Dumpsters (Fleet Size)</label>
                <input
                  type="number"
                  value={manualData.totalDumpsters}
                  onChange={(e) => setManualData({...manualData, totalDumpsters: parseInt(e.target.value) || 0})}
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Customer Satisfaction (Rating)</label>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  max="5"
                  value={manualData.customerSatisfaction}
                  onChange={(e) => setManualData({...manualData, customerSatisfaction: parseFloat(e.target.value) || 0})}
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>
              <div className="flex items-end">
                <button
                  onClick={updateManualData}
                  className="w-full bg-[#4e37a8] text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Update Data
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Key Performance Overview */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Key Performance Overview</h2>
            <a
              href="https://icondumpsters.com/kpi-dashboard"
              className="text-[#4e37a8] hover:text-purple-700 text-sm font-medium"
            >
              View Detailed Analytics →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl shadow border p-4">
              <h3 className="text-sm font-medium text-[#4e37a8] mb-1">Revenue</h3>
              <p className="text-2xl font-bold text-gray-900">${kpiData.revenue.toLocaleString()}</p>
              <p className="text-xs text-gray-600">Target: ${targets.monthlyRevenue.toLocaleString()}</p>
              <p className="text-lg mt-1">{getStatus(kpiData.revenue, targets.monthlyRevenue)}</p>
            </div>
            
            <div className="bg-white rounded-xl shadow border p-4">
              <h3 className="text-sm font-medium text-[#4e37a8] mb-1">Rentals</h3>
              <p className="text-2xl font-bold text-gray-900">{kpiData.rentals}</p>
              <p className="text-xs text-gray-600">Target: {targets.monthlyRentals}</p>
              <p className="text-lg mt-1">{getStatus(kpiData.rentals, targets.monthlyRentals)}</p>
            </div>
            
            <div className="bg-white rounded-xl shadow border p-4">
              <h3 className="text-sm font-medium text-[#4e37a8] mb-1">Utilization</h3>
              <p className="text-2xl font-bold text-gray-900">{kpiData.utilization.toFixed(1)}%</p>
              <p className="text-xs text-gray-600">Target: {targets.utilization}%</p>
              <p className="text-lg mt-1">{getStatus(kpiData.utilization, targets.utilization)}</p>
            </div>
            
            <div className="bg-white rounded-xl shadow border p-4">
              <h3 className="text-sm font-medium text-[#4e37a8] mb-1">Conversion</h3>
              <p className="text-2xl font-bold text-gray-900">{kpiData.conversionRate.toFixed(1)}%</p>
              <p className="text-xs text-gray-600">Target: {targets.conversionRate}%</p>
              <p className="text-lg mt-1">{getStatus(kpiData.conversionRate, targets.conversionRate)}</p>
            </div>
          </div>
        </div>

        {/* Sales & Revenue Management */}
        <div className="mb-8">
          <SalesRevenueManager />
        </div>

        {/* Inventory Management Link */}
        <div className="mb-8 bg-white rounded-xl shadow border p-6">
          <h2 className="text-xl font-semibold mb-4">Inventory Management</h2>
          <p className="text-gray-600 mb-4">Manage your dumpster fleet and track availability</p>
          <a 
            href="/inventory" 
            className="inline-flex items-center px-4 py-2 bg-[#4e37a8] text-white rounded-lg hover:bg-[#3d2d8a] transition-colors"
          >
            <span className="mr-2">📦</span>
            View Inventory Dashboard
          </a>
        </div>

        {/* Status Legend */}
        <div className="mt-8 bg-white rounded-xl shadow border p-6">
          <h3 className="text-lg font-semibold mb-4">Status Legend</h3>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🟢</span>
              <span className="text-sm text-gray-600">On track (90%+ of target)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🟡</span>
              <span className="text-sm text-gray-600">Needs attention (70-89% of target)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔴</span>
              <span className="text-sm text-gray-600">Below target (&lt;70% of target)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
