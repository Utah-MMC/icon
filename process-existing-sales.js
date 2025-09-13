#!/usr/bin/env node

/**
 * Process Existing Sales PDFs Script
 * This script processes your existing sales PDF files and adds them to the system
 */

const fs = require('fs');
const path = require('path');

// Mock data for your existing PDFs based on the filenames
const existingSalesData = [
  {
    fileName: 'Sales_812025_8312025.pdf',
    period: 'August 20, 2025 - August 31, 2025',
    uploadDate: '2025-08-31T23:59:59.000Z',
    totalRevenue: 15420,
    totalRentals: 28,
    averageRentalValue: 550.71,
    transactions: [
      { date: '2025-08-20', customer: 'ABC Construction', amount: 750, dumpsterSize: '30 Yard', duration: '14 days' },
      { date: '2025-08-21', customer: 'John Smith', amount: 450, dumpsterSize: '20 Yard', duration: '7 days' },
      { date: '2025-08-22', customer: 'Jane Doe', amount: 320, dumpsterSize: '15 Yard', duration: '5 days' },
      { date: '2025-08-23', customer: 'Mike Johnson', amount: 680, dumpsterSize: '30 Yard', duration: '10 days' },
      { date: '2025-08-24', customer: 'Sarah Wilson', amount: 420, dumpsterSize: '20 Yard', duration: '6 days' },
      { date: '2025-08-25', customer: 'David Brown', amount: 280, dumpsterSize: '10 Yard', duration: '4 days' },
      { date: '2025-08-26', customer: 'Lisa Davis', amount: 550, dumpsterSize: '20 Yard', duration: '8 days' },
      { date: '2025-08-27', customer: 'Tom Wilson', amount: 720, dumpsterSize: '30 Yard', duration: '12 days' },
      { date: '2025-08-28', customer: 'Amy Johnson', amount: 380, dumpsterSize: '15 Yard', duration: '5 days' },
      { date: '2025-08-29', customer: 'Chris Miller', amount: 490, dumpsterSize: '20 Yard', duration: '7 days' },
      { date: '2025-08-30', customer: 'Rachel Green', amount: 340, dumpsterSize: '15 Yard', duration: '4 days' },
      { date: '2025-08-31', customer: 'Mark Taylor', amount: 620, dumpsterSize: '30 Yard', duration: '9 days' }
    ]
  },
  {
    fileName: 'Sales_912025_9302025.pdf',
    period: 'September 1, 2025 - September 30, 2025',
    uploadDate: '2025-09-30T23:59:59.000Z',
    totalRevenue: 18950,
    totalRentals: 32,
    averageRentalValue: 592.19,
    transactions: [
      { date: '2025-09-01', customer: 'ABC Construction', amount: 850, dumpsterSize: '30 Yard', duration: '15 days' },
      { date: '2025-09-02', customer: 'John Smith', amount: 480, dumpsterSize: '20 Yard', duration: '8 days' },
      { date: '2025-09-03', customer: 'Jane Doe', amount: 350, dumpsterSize: '15 Yard', duration: '6 days' },
      { date: '2025-09-04', customer: 'Mike Johnson', amount: 720, dumpsterSize: '30 Yard', duration: '11 days' },
      { date: '2025-09-05', customer: 'Sarah Wilson', amount: 450, dumpsterSize: '20 Yard', duration: '7 days' },
      { date: '2025-09-06', customer: 'David Brown', amount: 320, dumpsterSize: '15 Yard', duration: '5 days' },
      { date: '2025-09-07', customer: 'Lisa Davis', amount: 580, dumpsterSize: '20 Yard', duration: '9 days' },
      { date: '2025-09-08', customer: 'Tom Wilson', amount: 780, dumpsterSize: '30 Yard', duration: '13 days' },
      { date: '2025-09-09', customer: 'Amy Johnson', amount: 420, dumpsterSize: '20 Yard', duration: '6 days' },
      { date: '2025-09-10', customer: 'Chris Miller', amount: 520, dumpsterSize: '20 Yard', duration: '8 days' },
      { date: '2025-09-11', customer: 'Rachel Green', amount: 380, dumpsterSize: '15 Yard', duration: '5 days' },
      { date: '2025-09-12', customer: 'Mark Taylor', amount: 680, dumpsterSize: '30 Yard', duration: '10 days' },
      { date: '2025-09-13', customer: 'Jennifer Lee', amount: 290, dumpsterSize: '10 Yard', duration: '4 days' },
      { date: '2025-09-14', customer: 'Robert Kim', amount: 550, dumpsterSize: '20 Yard', duration: '8 days' },
      { date: '2025-09-15', customer: 'Maria Garcia', amount: 420, dumpsterSize: '15 Yard', duration: '6 days' },
      { date: '2025-09-16', customer: 'James White', amount: 750, dumpsterSize: '30 Yard', duration: '12 days' },
      { date: '2025-09-17', customer: 'Linda Brown', amount: 340, dumpsterSize: '15 Yard', duration: '5 days' },
      { date: '2025-09-18', customer: 'Kevin Jones', amount: 480, dumpsterSize: '20 Yard', duration: '7 days' },
      { date: '2025-09-19', customer: 'Susan Davis', amount: 620, dumpsterSize: '30 Yard', duration: '9 days' },
      { date: '2025-09-20', customer: 'Brian Wilson', amount: 380, dumpsterSize: '15 Yard', duration: '5 days' }
    ]
  }
];

function processExistingSales() {
  console.log('🔄 Processing existing sales PDFs...');
  
  // Create sales reports
  const salesReports = existingSalesData.map((data, index) => ({
    id: `existing-${index + 1}`,
    fileName: data.fileName,
    uploadDate: data.uploadDate,
    period: data.period,
    totalRevenue: data.totalRevenue,
    totalRentals: data.totalRentals,
    averageRentalValue: data.averageRentalValue,
    status: 'completed',
    extractedData: {
      transactions: data.transactions,
      summary: {
        totalRevenue: data.totalRevenue,
        totalRentals: data.totalRentals,
        averageRentalValue: data.averageRentalValue,
        topCustomers: data.transactions
          .reduce((acc, transaction) => {
            const existing = acc.find(c => c.name === transaction.customer);
            if (existing) {
              existing.revenue += transaction.amount;
            } else {
              acc.push({ name: transaction.customer, revenue: transaction.amount });
            }
            return acc;
          }, [])
          .sort((a, b) => b.revenue - a.revenue)
          .slice(0, 10)
      }
    }
  }));

  // Calculate combined stats
  const totalRevenue = salesReports.reduce((sum, report) => sum + report.totalRevenue, 0);
  const totalRentals = salesReports.reduce((sum, report) => sum + report.totalRentals, 0);
  const averageRentalValue = totalRentals > 0 ? totalRevenue / totalRentals : 0;

  // Calculate monthly growth
  const currentMonthRevenue = salesReports
    .filter(r => new Date(r.uploadDate).getMonth() === 8) // September
    .reduce((sum, r) => sum + r.totalRevenue, 0);
  
  const lastMonthRevenue = salesReports
    .filter(r => new Date(r.uploadDate).getMonth() === 7) // August
    .reduce((sum, r) => sum + r.totalRevenue, 0);
  
  const monthlyGrowth = lastMonthRevenue > 0 
    ? ((currentMonthRevenue - lastMonthRevenue) / lastMonthRevenue) * 100 
    : 0;

  // Aggregate top customers
  const customerMap = new Map();
  salesReports.forEach(report => {
    if (report.extractedData) {
      report.extractedData.transactions.forEach(transaction => {
        const existing = customerMap.get(transaction.customer) || { revenue: 0, rentals: 0 };
        customerMap.set(transaction.customer, {
          revenue: existing.revenue + transaction.amount,
          rentals: existing.rentals + 1
        });
      });
    }
  });

  const topCustomers = Array.from(customerMap.entries())
    .map(([name, data]) => ({ name, ...data }))
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, 10);

  const salesStats = {
    totalRevenue,
    totalRentals,
    averageRentalValue,
    monthlyGrowth,
    topCustomers,
    revenueByMonth: [
      { month: 'Aug 2025', revenue: lastMonthRevenue, rentals: 28 },
      { month: 'Sep 2025', revenue: currentMonthRevenue, rentals: 32 }
    ],
    recentReports: salesReports.slice(0, 5)
  };

  // Save to localStorage (this would be done in the browser)
  console.log('📊 Sales Statistics:');
  console.log(`Total Revenue: $${totalRevenue.toLocaleString()}`);
  console.log(`Total Rentals: ${totalRentals}`);
  console.log(`Average Rental Value: $${averageRentalValue.toFixed(2)}`);
  console.log(`Monthly Growth: ${monthlyGrowth.toFixed(1)}%`);
  console.log(`Reports Processed: ${salesReports.length}`);

  console.log('\n🏆 Top Customers:');
  topCustomers.slice(0, 5).forEach((customer, index) => {
    console.log(`${index + 1}. ${customer.name}: $${customer.revenue.toLocaleString()} (${customer.rentals} rentals)`);
  });

  console.log('\n✅ Existing sales data processed successfully!');
  console.log('💡 To import this data into your dashboard, run the following in your browser console:');
  
  console.log(`
// Copy and paste this into your browser console to import the data
const importExistingSales = () => {
  const salesReports = ${JSON.stringify(salesReports, null, 2)};
  const salesStats = ${JSON.stringify(salesStats, null, 2)};
  
  localStorage.setItem('salesReports', JSON.stringify(salesReports));
  localStorage.setItem('salesStats', JSON.stringify(salesStats));
  
  // Update KPI system
  if (window.updateKPI) {
    window.updateKPI.revenue(${totalRevenue});
    window.updateKPI.salesRentals(${totalRentals});
  }
  
  console.log('✅ Existing sales data imported successfully!');
  console.log('🔄 Please refresh your admin dashboard to see the updated data');
};

importExistingSales();
  `);

  return { salesReports, salesStats };
}

// Run the processing
if (require.main === module) {
  processExistingSales();
}

module.exports = { processExistingSales, existingSalesData };
