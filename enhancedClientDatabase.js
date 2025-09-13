// Enhanced Client Database with Geographic and Sales Integration
// This module provides comprehensive client data with geographic filtering capabilities

import { realSalesData, august2025Data, september2025Data } from './realSalesData.js';

// Extract and process client data from sales transactions
function processClientData() {
  const allTransactions = [
    ...august2025Data.topCustomers.map(customer => ({
      ...customer,
      month: 'August 2025',
      transactions: customer.rentals
    })),
    ...september2025Data.topCustomers.map(customer => ({
      ...customer,
      month: 'September 2025', 
      transactions: customer.rentals
    }))
  ];

  // Combine and deduplicate clients
  const clientMap = new Map();
  
  allTransactions.forEach(transaction => {
    const existing = clientMap.get(transaction.name);
    if (existing) {
      existing.totalRevenue += transaction.revenue;
      existing.totalTransactions += transaction.transactions;
      existing.monthsActive.add(transaction.month);
      existing.recentMonth = transaction.month;
    } else {
      clientMap.set(transaction.name, {
        name: transaction.name,
        totalRevenue: transaction.revenue,
        totalTransactions: transaction.transactions,
        monthsActive: new Set([transaction.month]),
        recentMonth: transaction.month,
        avgRevenuePerTransaction: transaction.revenue / transaction.transactions,
        clientType: getClientType(transaction.name),
        serviceAreas: getServiceAreas(transaction.name),
        firstSeen: transaction.month,
        lastSeen: transaction.month
      });
    }
  });

  return Array.from(clientMap.values()).map(client => ({
    ...client,
    monthsActive: Array.from(client.monthsActive),
    isRepeatCustomer: client.monthsActive.size > 1,
    customerLifetimeValue: client.totalRevenue,
    avgMonthlyRevenue: client.totalRevenue / client.monthsActive.size
  }));
}

// Determine client type based on name patterns
function getClientType(clientName) {
  const name = clientName.toLowerCase();
  
  if (name.includes('construction') || name.includes('excavation') || name.includes('contractor')) {
    return 'Construction Company';
  }
  if (name.includes('pipe') || name.includes('precast') || name.includes('concrete')) {
    return 'Industrial/Manufacturing';
  }
  if (name.includes('waterproofing') || name.includes('exterior') || name.includes('solutions')) {
    return 'Specialized Services';
  }
  if (name.includes('dumpster') || name.includes('rental')) {
    return 'Competitor/Partner';
  }
  if (name.includes('church') || name.includes('market') || name.includes('meat')) {
    return 'Commercial Business';
  }
  if (name.includes('water gardens') || name.includes('cabinet')) {
    return 'Retail Business';
  }
  return 'Residential/Individual';
}

// Extract service areas from client names and known locations
function getServiceAreas(clientName) {
  const serviceAreas = [];
  const name = clientName.toLowerCase();
  
  // Known service areas based on client addresses from CSV data
  const areaMappings = {
    'murray': ['Murray'],
    'salt lake': ['Salt Lake City', 'Salt Lake County'],
    'west valley': ['West Valley City'],
    'west jordan': ['West Jordan'],
    'sandy': ['Sandy'],
    'south jordan': ['South Jordan'],
    'herriman': ['Herriman'],
    'taylorsville': ['Taylorsville'],
    'draper': ['Draper'],
    'cottonwood': ['Cottonwood Heights'],
    'holladay': ['Holladay'],
    'kearns': ['Kearns'],
    'magna': ['Magna'],
    'provo': ['Provo', 'Utah County'],
    'tooele': ['Tooele'],
    'syracuse': ['Syracuse', 'Davis County'],
    'grantsville': ['Grantsville']
  };

  Object.entries(areaMappings).forEach(([keyword, areas]) => {
    if (name.includes(keyword)) {
      serviceAreas.push(...areas);
    }
  });

  // Default to Salt Lake County if no specific area found
  if (serviceAreas.length === 0) {
    serviceAreas.push('Salt Lake County');
  }

  return [...new Set(serviceAreas)]; // Remove duplicates
}

// City performance data
function getCityPerformanceData() {
  const cities = {
    'Salt Lake City': { revenue: 0, rentals: 0, clients: 0, transactions: 0 },
    'Murray': { revenue: 0, rentals: 0, clients: 0, transactions: 0 },
    'West Valley City': { revenue: 0, rentals: 0, clients: 0, transactions: 0 },
    'West Jordan': { revenue: 0, rentals: 0, clients: 0, transactions: 0 },
    'Sandy': { revenue: 0, rentals: 0, clients: 0, transactions: 0 },
    'South Jordan': { revenue: 0, rentals: 0, clients: 0, transactions: 0 },
    'Herriman': { revenue: 0, rentals: 0, clients: 0, transactions: 0 },
    'Taylorsville': { revenue: 0, rentals: 0, clients: 0, transactions: 0 },
    'Draper': { revenue: 0, rentals: 0, clients: 0, transactions: 0 },
    'Cottonwood Heights': { revenue: 0, rentals: 0, clients: 0, transactions: 0 },
    'Holladay': { revenue: 0, rentals: 0, clients: 0, transactions: 0 },
    'Kearns': { revenue: 0, rentals: 0, clients: 0, transactions: 0 },
    'Magna': { revenue: 0, rentals: 0, clients: 0, transactions: 0 },
    'Provo': { revenue: 0, rentals: 0, clients: 0, transactions: 0 },
    'Tooele': { revenue: 0, rentals: 0, clients: 0, transactions: 0 },
    'Syracuse': { revenue: 0, rentals: 0, clients: 0, transactions: 0 },
    'Grantsville': { revenue: 0, rentals: 0, clients: 0, transactions: 0 }
  };

  // Process all clients and aggregate by city
  const clientData = processClientData();
  
  clientData.forEach(client => {
    client.serviceAreas.forEach(area => {
      if (cities[area]) {
        cities[area].revenue += client.totalRevenue;
        cities[area].rentals += client.totalTransactions;
        cities[area].clients += 1;
        cities[area].transactions += client.totalTransactions;
      }
    });
  });

  // Convert to array and add calculated metrics
  return Object.entries(cities)
    .map(([city, data]) => ({
      city,
      ...data,
      avgRevenuePerClient: data.clients > 0 ? data.revenue / data.clients : 0,
      avgRentalsPerClient: data.clients > 0 ? data.rentals / data.clients : 0,
      marketShare: data.revenue / realSalesData.summary.totalRevenue * 100
    }))
    .filter(city => city.revenue > 0) // Only show cities with actual business
    .sort((a, b) => b.revenue - a.revenue);
}

// Enhanced KPI data with geographic breakdown
export const enhancedKPIData = {
  // Overall metrics
  overall: {
    totalRevenue: realSalesData.summary.totalRevenue,
    totalProfit: realSalesData.summary.totalProfit,
    totalRentals: realSalesData.summary.totalRentals,
    totalTransactions: realSalesData.summary.totalTransactions,
    totalClients: processClientData().length,
    repeatCustomers: processClientData().filter(c => c.isRepeatCustomer).length,
    newCustomers: processClientData().filter(c => !c.isRepeatCustomer).length,
    avgRevenuePerClient: realSalesData.summary.totalRevenue / processClientData().length,
    customerRetentionRate: (processClientData().filter(c => c.isRepeatCustomer).length / processClientData().length) * 100
  },

  // Geographic performance
  geographic: {
    cities: getCityPerformanceData(),
    topPerformingCity: getCityPerformanceData()[0],
    totalServiceAreas: getCityPerformanceData().length,
    revenueByCity: getCityPerformanceData().reduce((acc, city) => {
      acc[city.city] = city.revenue;
      return acc;
    }, {})
  },

  // Client insights
  clients: {
    allClients: processClientData(),
    topClients: processClientData().sort((a, b) => b.totalRevenue - a.totalRevenue).slice(0, 10),
    repeatCustomers: processClientData().filter(c => c.isRepeatCustomer),
    newCustomers: processClientData().filter(c => !c.isRepeatCustomer),
    clientTypes: getClientTypeBreakdown(),
    avgCustomerLifetimeValue: processClientData().reduce((sum, c) => sum + c.customerLifetimeValue, 0) / processClientData().length
  },

  // Time-based analysis
  temporal: {
    monthlyComparison: realSalesData.comparison,
    revenueByMonth: realSalesData.revenueByMonth,
    growthTrends: {
      revenueGrowth: realSalesData.comparison.revenueGrowthPercent,
      profitGrowth: realSalesData.comparison.profitGrowthPercent,
      rentalGrowth: realSalesData.comparison.rentalGrowthPercent
    }
  }
};

// Get client type breakdown
function getClientTypeBreakdown() {
  const clientData = processClientData();
  const breakdown = {};
  
  clientData.forEach(client => {
    if (!breakdown[client.clientType]) {
      breakdown[client.clientType] = { count: 0, revenue: 0, avgRevenue: 0 };
    }
    breakdown[client.clientType].count += 1;
    breakdown[client.clientType].revenue += client.totalRevenue;
  });

  // Calculate averages
  Object.keys(breakdown).forEach(type => {
    breakdown[type].avgRevenue = breakdown[type].revenue / breakdown[type].count;
  });

  return breakdown;
}

// Filter functions for dashboard
export function getFilteredData(filters = {}) {
  const {
    city,
    clientType,
    dateRange,
    minRevenue,
    maxRevenue,
    isRepeatCustomer
  } = filters;

  let filteredClients = processClientData();

  // Apply filters
  if (city) {
    filteredClients = filteredClients.filter(client => 
      client.serviceAreas.includes(city)
    );
  }

  if (clientType) {
    filteredClients = filteredClients.filter(client => 
      client.clientType === clientType
    );
  }

  if (minRevenue) {
    filteredClients = filteredClients.filter(client => 
      client.totalRevenue >= minRevenue
    );
  }

  if (maxRevenue) {
    filteredClients = filteredClients.filter(client => 
      client.totalRevenue <= maxRevenue
    );
  }

  if (isRepeatCustomer !== undefined) {
    filteredClients = filteredClients.filter(client => 
      client.isRepeatCustomer === isRepeatCustomer
    );
  }

  // Calculate filtered metrics
  const filteredRevenue = filteredClients.reduce((sum, client) => sum + client.totalRevenue, 0);
  const filteredTransactions = filteredClients.reduce((sum, client) => sum + client.totalTransactions, 0);

  return {
    clients: filteredClients,
    metrics: {
      totalRevenue: filteredRevenue,
      totalTransactions: filteredTransactions,
      totalClients: filteredClients.length,
      avgRevenuePerClient: filteredClients.length > 0 ? filteredRevenue / filteredClients.length : 0,
      avgTransactionsPerClient: filteredClients.length > 0 ? filteredTransactions / filteredClients.length : 0
    }
  };
}

// Export main data
export const clientDatabase = processClientData();
export const cityPerformanceData = getCityPerformanceData();
export const clientTypeBreakdown = getClientTypeBreakdown();

export default enhancedKPIData;
