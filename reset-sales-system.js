#!/usr/bin/env node

/**
 * Reset Sales System Script
 * Clears any error states and resets the sales system
 */

const resetSalesSystem = () => {
  console.log('🔄 Resetting sales system...');
  
  // Clear any existing sales data
  if (typeof window !== 'undefined') {
    localStorage.removeItem('salesReports');
    localStorage.removeItem('salesStats');
    
    console.log('✅ Sales system reset successfully!');
    console.log('🔄 Please refresh your admin dashboard');
    console.log('📁 You can now try uploading your PDF again');
  } else {
    console.log('This script should be run in the browser console');
    console.log('Copy and paste the resetSalesSystem function and run it');
  }
};

// Browser console version
const browserReset = () => {
  localStorage.removeItem('salesReports');
  localStorage.removeItem('salesStats');
  
  console.log('✅ Sales system reset successfully!');
  console.log('🔄 Please refresh your admin dashboard');
  console.log('📁 You can now try uploading your PDF again');
};

if (typeof window !== 'undefined') {
  resetSalesSystem();
} else {
  console.log('Browser console commands:');
  console.log(`
// Copy and paste this into your browser console to reset the system
const resetSalesSystem = () => {
  localStorage.removeItem('salesReports');
  localStorage.removeItem('salesStats');
  console.log('✅ Sales system reset successfully!');
  console.log('🔄 Please refresh your admin dashboard');
};

resetSalesSystem();
  `);
}

module.exports = { resetSalesSystem, browserReset };
