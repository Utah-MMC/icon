"use client";

import { useEffect, useState } from 'react';

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
    monthlyRevenue: 20000,
    monthlyRentals: 40,
    utilization: 75,
    websiteVisitors: 1500,
    quoteRequests: 75,
    phoneCalls: 150,
    conversionRate: 20,
    customerSatisfaction: 4.5
  });

  const [showManualEntry, setShowManualEntry] = useState(false);
  const [manualData, setManualData] = useState({
    totalRentals: 0,
    totalRevenue: 0,
    activeRentals: 0,
    totalDumpsters: 20,
    customerSatisfaction: 0
  });

  const [inventoryData, setInventoryData] = useState({
    totalDumpsters: 20,
    availableDumpsters: 20,
    activeRentals: 0,
    utilizationRate: 0
  });

  // Load KPI data from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('iconDumpstersKPI');
      if (stored) {
        try {
          const data = JSON.parse(stored);
          setKpiData(data);
        } catch (error) {
          console.error('Failed to load KPI data:', error);
        }
      }
    }
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
          const data = JSON.parse(stored);
          setKpiData(data);
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Icon Dumpsters - Admin Dashboard</h1>
          <p className="text-gray-600">Monitor your business performance and manage inventory</p>
          
          {/* Navigation Links */}
          <div className="mt-4 flex flex-wrap gap-4">
            <a
              href="/inventory"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              📦 Inventory Management
            </a>
            <a
              href="/kpi-dashboard"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
            >
              📊 Analytics Dashboard
            </a>
            <a
              href="/admin"
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm"
            >
              🔐 Admin Login
            </a>
            <a
              href="/api-test"
              className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors text-sm"
            >
              🧪 API Testing
            </a>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mb-8 flex flex-wrap gap-4">
          <button
            onClick={() => setShowManualEntry(!showManualEntry)}
            className="bg-[#4e37a8] text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            {showManualEntry ? 'Hide' : 'Show'} Manual Entry
          </button>
          <button
            onClick={exportData}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Export Data
          </button>
          <button
            onClick={resetData}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Reset Data
          </button>
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

        {/* KPI Dashboard */}
        <div id="kpi-dashboard" className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow border p-6">
              <h3 className="text-lg font-semibold text-[#4e37a8] mb-2">Revenue</h3>
              <p className="text-3xl font-bold text-gray-900">${kpiData.revenue.toLocaleString()}</p>
              <p className="text-sm text-gray-600">Target: ${targets.monthlyRevenue.toLocaleString()}</p>
              <p className="text-2xl mt-2">{getStatus(kpiData.revenue, targets.monthlyRevenue)}</p>
            </div>
            
            <div className="bg-white rounded-xl shadow border p-6">
              <h3 className="text-lg font-semibold text-[#4e37a8] mb-2">Rentals</h3>
              <p className="text-3xl font-bold text-gray-900">{kpiData.rentals}</p>
              <p className="text-sm text-gray-600">Target: {targets.monthlyRentals}</p>
              <p className="text-2xl mt-2">{getStatus(kpiData.rentals, targets.monthlyRentals)}</p>
            </div>
            
            <div className="bg-white rounded-xl shadow border p-6">
              <h3 className="text-lg font-semibold text-[#4e37a8] mb-2">Utilization</h3>
              <p className="text-3xl font-bold text-gray-900">{kpiData.utilization.toFixed(1)}%</p>
              <p className="text-sm text-gray-600">Target: {targets.utilization}%</p>
              <p className="text-2xl mt-2">{getStatus(kpiData.utilization, targets.utilization)}</p>
            </div>
            
            <div className="bg-white rounded-xl shadow border p-6">
              <h3 className="text-lg font-semibold text-[#4e37a8] mb-2">Website Visitors</h3>
              <p className="text-3xl font-bold text-gray-900">{kpiData.websiteVisitors}</p>
              <p className="text-sm text-gray-600">Target: {targets.websiteVisitors}</p>
              <p className="text-2xl mt-2">{getStatus(kpiData.websiteVisitors, targets.websiteVisitors)}</p>
            </div>
            
            <div className="bg-white rounded-xl shadow border p-6">
              <h3 className="text-lg font-semibold text-[#4e37a8] mb-2">Quote Requests</h3>
              <p className="text-3xl font-bold text-gray-900">{kpiData.quoteRequests}</p>
              <p className="text-sm text-gray-600">Target: {targets.quoteRequests}</p>
              <p className="text-2xl mt-2">{getStatus(kpiData.quoteRequests, targets.quoteRequests)}</p>
            </div>
            
            <div className="bg-white rounded-xl shadow border p-6">
              <h3 className="text-lg font-semibold text-[#4e37a8] mb-2">Phone Calls</h3>
              <p className="text-3xl font-bold text-gray-900">{kpiData.phoneCalls}</p>
              <p className="text-sm text-gray-600">Target: {targets.phoneCalls}</p>
              <p className="text-2xl mt-2">{getStatus(kpiData.phoneCalls, targets.phoneCalls)}</p>
            </div>
            
            <div className="bg-white rounded-xl shadow border p-6">
              <h3 className="text-lg font-semibold text-[#4e37a8] mb-2">Conversion Rate</h3>
              <p className="text-3xl font-bold text-gray-900">{kpiData.conversionRate.toFixed(1)}%</p>
              <p className="text-sm text-gray-600">Target: {targets.conversionRate}%</p>
              <p className="text-2xl mt-2">{getStatus(kpiData.conversionRate, targets.conversionRate)}</p>
            </div>
            
            <div className="bg-white rounded-xl shadow border p-6">
              <h3 className="text-lg font-semibold text-[#4e37a8] mb-2">Customer Satisfaction</h3>
              <p className="text-3xl font-bold text-gray-900">{kpiData.customerSatisfaction.toFixed(1)}</p>
              <p className="text-sm text-gray-600">Target: {targets.customerSatisfaction}+</p>
              <p className="text-2xl mt-2">{getStatus(kpiData.customerSatisfaction, targets.customerSatisfaction)}</p>
            </div>
          </div>
        </div>

        {/* Inventory Status */}
        <div className="bg-white rounded-xl shadow border p-6">
          <h2 className="text-xl font-semibold mb-4">Inventory Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-[#4e37a8]">{inventoryData.totalDumpsters}</p>
              <p className="text-sm text-gray-600">Total Dumpsters</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">{inventoryData.availableDumpsters}</p>
              <p className="text-sm text-gray-600">Available</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-orange-600">{inventoryData.activeRentals}</p>
              <p className="text-sm text-gray-600">Active Rentals</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#4e37a8]">{inventoryData.utilizationRate.toFixed(1)}%</p>
              <p className="text-sm text-gray-600">Utilization Rate</p>
            </div>
          </div>
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
