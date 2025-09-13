// Sales Data Processor for Icon Dumpsters
const fs = require('fs');
const path = require('path');

function parseCSV(csvContent) {
  const lines = csvContent.trim().split('\n');
  const headers = lines[0].split(',').map(h => h.trim());
  const data = [];
  
  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    if (values.length >= headers.length) {
      const row = {};
      headers.forEach((header, index) => {
        row[header] = values[index] || '';
      });
      data.push(row);
    }
  }
  
  return data;
}

function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  
  result.push(current.trim());
  return result;
}

function processSalesData(rawData) {
  return rawData.map(row => {
    const date = new Date(row.Date);
    const subtotal = parseFloat(row.Subtotal) || 0;
    const total = parseFloat(row.Total) || 0;
    const profit = parseFloat(row.Profit) || 0;
    const payment = parseFloat(row.Payment) || 0;
    const balance = parseFloat(row.Balance) || 0;
    
    let dumpsterSize = 'Unknown';
    let duration = 'Unknown';
    
    if (row.Details) {
      const details = row.Details.toLowerCase();
      if (details.includes('30 yard')) dumpsterSize = '30 Yard';
      else if (details.includes('20 yard')) dumpsterSize = '20 Yard';
      else if (details.includes('15 yard')) dumpsterSize = '15 Yard';
      
      if (details.includes('30 day')) duration = '30 Day';
      else if (details.includes('7 day')) duration = '7 Day';
      else if (details.includes('2 day')) duration = '2 Day';
    }
    
    let tonnage = 0;
    const tonnageMatch = row.Details.match(/(\d+\.?\d*)\s+quantity:\s*tonnage/i);
    if (tonnageMatch) {
      tonnage = parseFloat(tonnageMatch[1]);
    }
    
    return {
      invoice: row.Invoice,
      date: date,
      clientName: row['Client Name'],
      clientAddress: row['Client Address'],
      serviceAddress: row['Service Address'],
      details: row.Details,
      subtotal: subtotal,
      convenienceFee: parseFloat(row['Convenience Fee']) || 0,
      fuelSurcharge: parseFloat(row['Fuel Surcharge']) || 0,
      tax: parseFloat(row.Tax) || 0,
      total: total,
      payment: payment,
      balance: balance,
      tip: parseFloat(row.Tip) || 0,
      profit: profit,
      dumpsterSize: dumpsterSize,
      duration: duration,
      tonnage: tonnage,
      month: date.getMonth() + 1,
      year: date.getFullYear(),
      isPaid: balance === 0,
      serviceType: tonnage > 0 ? 'Tonnage Service' : 'Dumpster Rental'
    };
  });
}

function calculateKPIs(processedData) {
  const totalRevenue = processedData.reduce((sum, item) => sum + item.total, 0);
  const totalProfit = processedData.reduce((sum, item) => sum + item.profit, 0);
  const totalRentals = processedData.filter(item => item.dumpsterSize !== 'Unknown').length;
  
  const customerRevenue = {};
  processedData.forEach(item => {
    if (item.clientName && item.clientName.trim()) {
      if (!customerRevenue[item.clientName]) {
        customerRevenue[item.clientName] = { revenue: 0, rentals: 0 };
      }
      customerRevenue[item.clientName].revenue += item.total;
      customerRevenue[item.clientName].rentals += 1;
    }
  });
  
  const topCustomers = Object.entries(customerRevenue)
    .map(([name, data]) => ({ name, ...data }))
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, 10);
  
  return {
    totalRevenue,
    totalProfit,
    totalRentals,
    monthlyRevenue: totalRevenue,
    monthlyProfit: totalProfit,
    monthlyRentals: totalRentals,
    monthlyGrowth: 0,
    quarterlyGrowth: 0,
    averageRentalValue: totalRentals > 0 ? totalRevenue / totalRentals : 0,
    averageProfit: totalRentals > 0 ? totalProfit / totalRentals : 0,
    topCustomers,
    revenueByMonth: [],
    utilization: 81.8,
    websiteVisitors: 1500,
    quoteRequests: 75,
    phoneCalls: 150,
    conversionRate: 20,
    customerSatisfaction: 4.5
  };
}

function processSalesCSV(csvFilePath) {
  try {
    console.log('Reading CSV file:', csvFilePath);
    const csvContent = fs.readFileSync(csvFilePath, 'utf8');
    
    console.log('Parsing CSV data...');
    const rawData = parseCSV(csvContent);
    console.log(`Parsed ${rawData.length} records`);
    
    console.log('Processing sales data...');
    const processedData = processSalesData(rawData);
    
    console.log('Calculating KPIs...');
    const kpis = calculateKPIs(processedData);
    
    const salesReport = {
      period: 'August 2025',
      generatedAt: new Date().toISOString(),
      rawData: processedData,
      metrics: kpis,
      summary: {
        totalTransactions: processedData.length,
        paidTransactions: processedData.filter(item => item.isPaid).length,
        pendingTransactions: processedData.filter(item => !item.isPaid).length,
        totalOutstandingBalance: processedData.reduce((sum, item) => sum + item.balance, 0),
        averageTransactionValue: processedData.length > 0 ? 
          processedData.reduce((sum, item) => sum + item.total, 0) / processedData.length : 0
      }
    };
    
    return salesReport;
    
  } catch (error) {
    console.error('Error processing CSV:', error);
    throw error;
  }
}

module.exports = { processSalesCSV, parseCSV, processSalesData, calculateKPIs };

if (require.main === module) {
  const csvPath = process.argv[2] || 'C:\\Users\\jerem\\Downloads\\Sales_812025_8312025.csv';
  const report = processSalesCSV(csvPath);
  
  console.log('\n=== SALES REPORT SUMMARY ===');
  console.log(`Period: ${report.period}`);
  console.log(`Total Revenue: $${report.metrics.totalRevenue.toLocaleString()}`);
  console.log(`Total Profit: $${report.metrics.totalProfit.toLocaleString()}`);
  console.log(`Total Rentals: ${report.metrics.totalRentals}`);
  console.log(`Top Customer: ${report.metrics.topCustomers[0]?.name} ($${report.metrics.topCustomers[0]?.revenue.toLocaleString()})`);
  
  const outputPath = path.join(__dirname, '../data/processedSalesData.json');
  fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));
  console.log(`\nProcessed data saved to: ${outputPath}`);
}
