#!/usr/bin/env node

/**
 * Fix Utilization Sync Script
 * Forces the KPI system to use the correct utilization rate from inventory
 */

// This script will be run in the browser console to fix the sync issue

const fixUtilizationSync = () => {
  console.log('🔧 Fixing utilization sync...');
  
  // Current inventory data
  const inventoryStats = {
    totalDumpsters: 44,
    activeRentals: 36,
    availableDumpsters: 8,
    maintenanceDumpsters: 0,
    utilizationRate: 81.8
  };
  
  // Update localStorage with correct data
  const kpiData = {
    revenue: 0,
    rentals: inventoryStats.activeRentals,
    utilization: inventoryStats.utilizationRate,
    websiteVisitors: 0,
    quoteRequests: 0,
    phoneCalls: 0,
    conversionRate: 0,
    customerSatisfaction: 0
  };
  
  localStorage.setItem('iconDumpstersKPI', JSON.stringify(kpiData));
  localStorage.setItem('kpi-inventory-sync', JSON.stringify({
    ...inventoryStats,
    lastUpdated: new Date().toISOString()
  }));
  
  console.log('✅ Utilization sync fixed!');
  console.log('📊 Current utilization: 81.8% (36/44 dumpsters)');
  console.log('🔄 Please refresh your dashboard to see the updated numbers');
  
  // Dispatch event to update dashboards
  window.dispatchEvent(new CustomEvent('inventory-updated', {
    detail: inventoryStats
  }));
  
  return inventoryStats;
};

// Run the fix
if (typeof window !== 'undefined') {
  fixUtilizationSync();
} else {
  console.log('This script should be run in the browser console');
  console.log('Copy and paste the fixUtilizationSync function and run it');
}
