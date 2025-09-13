"use client";

import { useEffect, useState } from 'react';
import { kpiSyncService } from '../lib/KPISyncService';
import AdminAuthGuard from '../components/AdminAuthGuard';

interface Dumpster {
  pin: string;
  size: string;
  customer: string;
  location: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  county: string;
  deliveryDate: string;
  deliveryTime: string;
  status: 'active' | 'available' | 'maintenance';
  notes?: string;
}

interface InventoryStats {
  totalDumpsters: number;
  activeRentals: number;
  availableDumpsters: number;
  maintenanceDumpsters: number;
  utilizationRate: number;
  sizeBreakdown: {
    '10 Yard': number;
    '15 Yard': number;
    '20 Yard': number;
    '30 Yard': number;
    'Concrete': number;
  };
}

export default function InventoryPage() {
  const [inventory, setInventory] = useState<Dumpster[]>([]);
  const [stats, setStats] = useState<InventoryStats>({
    totalDumpsters: 0,
    activeRentals: 0,
    availableDumpsters: 0,
    maintenanceDumpsters: 0,
    utilizationRate: 0,
    sizeBreakdown: {
      '10 Yard': 0,
      '15 Yard': 0,
      '20 Yard': 0,
      '30 Yard': 0,
      'Concrete': 0,
    }
  });
  const [filter, setFilter] = useState<'all' | 'active' | 'available' | 'maintenance'>('all');
  const [sizeFilter, setSizeFilter] = useState<string>('all');

  // Initialize with your actual inventory data
  useEffect(() => {
    const initialInventory: Dumpster[] = [
      // Active Rentals (36 total)
      { pin: '30000', size: '30 Yard', customer: 'Geneva Pipe & Precast', location: '3555 Harvey Milk Boulevard', address: '3555 Harvey Milk Boulevard', city: 'Salt Lake City', state: 'Utah', zipCode: '84104', county: 'Salt Lake County', deliveryDate: '2025-09-12', deliveryTime: '1:15 PM', status: 'active' },
      { pin: '30002', size: '30 Yard', customer: 'Gladiola St', location: '586 Gladiola Street', address: '586 Gladiola Street', city: 'Salt Lake City', state: 'Utah', zipCode: '84104', county: 'Salt Lake County', deliveryDate: '2025-09-12', deliveryTime: '12:08 PM', status: 'active' },
      { pin: '15023', size: '15 Yard', customer: 'Mary Dunn', location: '5413 South Copper City Drive', address: '5413 South Copper City Drive', city: 'Kearns', state: 'Utah', zipCode: '84118', county: 'Salt Lake County', deliveryDate: '2025-09-12', deliveryTime: '8:10 AM', status: 'active' },
      { pin: '30005', size: '30 Yard', customer: 'Boyd Smith', location: '969 East 5700 South', address: '969 East 5700 South', city: 'Salt Lake City', state: 'Utah', zipCode: '84121', county: 'Salt Lake County', deliveryDate: '2025-09-12', deliveryTime: '6:58 AM', status: 'active' },
      { pin: '30004', size: '30 Yard', customer: 'All Weather Waterproofing', location: '8th ave C street', address: '8th ave C street', city: 'Salt Lake', state: 'Utah', zipCode: '54143', county: 'Utah County', deliveryDate: '2025-09-12', deliveryTime: '6:09 AM', status: 'active' },
      { pin: '30001', size: '30 Yard', customer: 'All Weather Waterproofing', location: '8th ave C street', address: '8th ave C street', city: 'Salt Lake', state: 'Utah', zipCode: '54143', county: 'Utah County', deliveryDate: '2025-09-12', deliveryTime: '4:13 AM', status: 'active' },
      { pin: '15027', size: '15 Yard', customer: 'Beck St', location: '1515 Beck Street', address: '1515 Beck Street', city: 'Salt Lake City', state: 'Utah', zipCode: '84116', county: 'Salt Lake County', deliveryDate: '2025-09-11', deliveryTime: '8:42 AM', status: 'active' },
      { pin: '20016', size: '20 Yard', customer: 'Beck St', location: '1515 Beck Street', address: '1515 Beck Street', city: 'Salt Lake City', state: 'Utah', zipCode: '84116', county: 'Salt Lake County', deliveryDate: '2025-09-05', deliveryTime: '10:42 AM', status: 'active' },
      { pin: '15024', size: '15 Yard', customer: 'Beck St', location: '1515 Beck Street', address: '1515 Beck Street', city: 'Salt Lake City', state: 'Utah', zipCode: '84116', county: 'Salt Lake County', deliveryDate: '2025-09-05', deliveryTime: '5:52 AM', status: 'active' },
      { pin: '15035', size: '15 Yard', customer: 'Carpenter Paper', location: '2323 South 900 West', address: '2323 South 900 West', city: 'South Salt Lake', state: 'Utah', zipCode: '84119', county: 'Salt Lake County', deliveryDate: '2025-09-04', deliveryTime: '4:59 PM', status: 'active' },
      { pin: '30007', size: '30 Yard', customer: 'James Coleman', location: '4606 Brookshire Circle', address: '4606 Brookshire Circle', city: 'Provo', state: 'Utah', zipCode: '84604', county: 'Utah County', deliveryDate: '2025-09-04', deliveryTime: '9:44 AM', status: 'active' },
      { pin: '30003', size: '30 Yard', customer: 'Utah Water Gardens', location: '5151 Wiley Post Way', address: '5151 Wiley Post Way', city: 'Salt Lake City', state: 'Utah', zipCode: '84116', county: 'Salt Lake County', deliveryDate: '2025-09-03', deliveryTime: '10:33 AM', status: 'active' },
      { pin: '30012', size: '30 Yard', customer: 'Gladiola St', location: '586 Gladiola Street', address: '586 Gladiola Street', city: 'Salt Lake City', state: 'Utah', zipCode: '84104', county: 'Salt Lake County', deliveryDate: '2025-09-03', deliveryTime: '9:26 AM', status: 'active' },
      { pin: '30006', size: '30 Yard', customer: 'Gladiola St', location: '586 Gladiola Street', address: '586 Gladiola Street', city: 'Salt Lake City', state: 'Utah', zipCode: '84104', county: 'Salt Lake County', deliveryDate: '2025-09-02', deliveryTime: '7:58 AM', status: 'active' },
      { pin: '20020', size: '20 Yard', customer: 'Tanya Williams', location: '2651 South 8115 West', address: '2651 South 8115 West', city: 'Magna', state: 'Utah', zipCode: '84044', county: 'Salt Lake County', deliveryDate: '2025-09-01', deliveryTime: '9:00 AM', status: 'active' },
      { pin: '20019', size: '20 Yard', customer: 'Gladiola St', location: '586 Gladiola Street', address: '586 Gladiola Street', city: 'Salt Lake City', state: 'Utah', zipCode: '84104', county: 'Salt Lake County', deliveryDate: '2025-08-29', deliveryTime: '1:37 PM', status: 'active' },
      { pin: '20017', size: '20 Yard', customer: 'David Magana', location: '3886 Atlas Way', address: '3886 Atlas Way', city: 'West Valley City', state: 'Utah', zipCode: '84120', county: 'Salt Lake County', deliveryDate: '2025-08-29', deliveryTime: '12:21 PM', status: 'active' },
      { pin: '30034', size: '30 Yard', customer: 'Exterior Solutions Plus', location: '6447 Wilshire Park Ave Wilshire Place Apartments', address: '6447 Wilshire Park Ave Wilshire Place Apartments', city: 'West Jordan', state: 'Utah', zipCode: '84081', county: 'Salt Lake County', deliveryDate: '2025-08-25', deliveryTime: '8:16 AM', status: 'active' },
      { pin: '20018', size: '20 Yard', customer: 'Gladiola St', location: '586 Gladiola Street', address: '586 Gladiola Street', city: 'Salt Lake City', state: 'Utah', zipCode: '84104', county: 'Salt Lake County', deliveryDate: '2025-08-05', deliveryTime: '8:51 AM', status: 'active' },
      { pin: '20028', size: '20 Yard', customer: 'Beck St', location: '1515 Beck Street', address: '1515 Beck Street', city: 'Salt Lake City', state: 'Utah', zipCode: '84116', county: 'Salt Lake County', deliveryDate: '2025-07-31', deliveryTime: '5:02 AM', status: 'active' },
      { pin: '20015', size: '20 Yard', customer: 'Gladiola St', location: '586 Gladiola Street', address: '586 Gladiola Street', city: 'Salt Lake City', state: 'Utah', zipCode: '84104', county: 'Salt Lake County', deliveryDate: '2025-07-21', deliveryTime: '7:48 AM', status: 'active' },
      { pin: '20021', size: '20 Yard', customer: 'Heather Harling', location: '7886 Abercrombie Lane', address: '7886 Abercrombie Lane', city: 'West Jordan', state: 'Utah', zipCode: '84088', county: 'Salt Lake County', deliveryDate: '2025-05-22', deliveryTime: '12:01 PM', status: 'active' },
      { pin: '30009', size: '30 Yard', customer: 'Gladiola St', location: '586 Gladiola Street', address: '586 Gladiola Street', city: 'Salt Lake City', state: 'Utah', zipCode: '84104', county: 'Salt Lake County', deliveryDate: '2025-05-22', deliveryTime: '9:06 AM', status: 'active' },
      { pin: '20022', size: '20 Yard', customer: 'Richared Denning', location: '4740 Garden Vista Cove', address: '4740 Garden Vista Cove', city: 'West Valley City', state: 'Utah', zipCode: '84120', county: 'Salt Lake County', deliveryDate: '2025-05-16', deliveryTime: '4:08 PM', status: 'active' },
      { pin: '15033', size: '15 Yard', customer: 'Geneva Pipe & Precast', location: 'Backyard', address: '5906 South 1300 East', city: 'Murray', state: 'Utah', zipCode: '84121', county: 'Salt Lake County', deliveryDate: '2025-04-05', deliveryTime: '9:12 AM', status: 'active' },
      { pin: '15032', size: '15 Yard', customer: 'Beck St', location: 'Beck St', address: '1515 Beck Street', city: 'Salt Lake City', state: 'Utah', zipCode: '84116', county: 'Salt Lake County', deliveryDate: '2025-04-02', deliveryTime: '1:43 PM', status: 'active' },
      { pin: '30011', size: '30 Yard', customer: 'Total Interiors Construction', location: '6148 South State Street', address: '6148 South State Street', city: 'Salt Lake City', state: 'Utah', zipCode: '84107', county: 'Salt Lake County', deliveryDate: '2025-03-10', deliveryTime: '1:16 PM', status: 'active' },
      { pin: '30010', size: '30 Yard', customer: 'Total Interiors Construction', location: '6148 South State Street', address: '6148 South State Street', city: 'Salt Lake City', state: 'Utah', zipCode: '84107', county: 'Salt Lake County', deliveryDate: '2025-02-18', deliveryTime: '10:16 AM', status: 'active' },
      { pin: '30008', size: '30 Yard', customer: 'Gladiola St', location: '586 Gladiola Street', address: '586 Gladiola Street', city: 'Salt Lake City', state: 'Utah', zipCode: '84104', county: 'Salt Lake County', deliveryDate: '2025-02-12', deliveryTime: '8:49 AM', status: 'active' },
      { pin: '30014', size: '30 Yard', customer: 'All Weather Waterproofing', location: '212 Hinkley Center', address: '212 Hinkley Center', city: 'Provo', state: 'Utah', zipCode: '84602', county: 'Utah County', deliveryDate: '2025-02-10', deliveryTime: '9:42 AM', status: 'active' },
      { pin: '20030', size: '20 Yard', customer: 'Beck St', location: '1515 Beck Street', address: '1515 Beck Street', city: 'Salt Lake City', state: 'Utah', zipCode: '84116', county: 'Salt Lake County', deliveryDate: '2024-11-13', deliveryTime: '12:05 PM', status: 'active' },
      { pin: '30013', size: '30 Yard', customer: 'Liberty Dumpster Rental Inc', location: '9182 Morning Mist Court', address: '9182 Morning Mist Court', city: 'Sandy', state: 'Utah', zipCode: '84093', county: 'Salt Lake County', deliveryDate: '2024-08-05', deliveryTime: '11:37 AM', status: 'active' },
      { pin: '30037', size: '30 Yard', customer: 'Untracked', location: 'Unknown', address: 'Unknown', city: 'Unknown', state: 'Utah', zipCode: '00000', county: 'Unknown', deliveryDate: '2024-01-01', deliveryTime: '12:00 PM', status: 'active' },
      { pin: 'C0036', size: '15 Yard', customer: 'Untracked', location: 'Unknown', address: 'Unknown', city: 'Unknown', state: 'Utah', zipCode: '00000', county: 'Unknown', deliveryDate: '2024-01-01', deliveryTime: '12:00 PM', status: 'active' },
      { pin: 'C025', size: 'Concrete', customer: 'Untracked', location: 'Unknown', address: 'Unknown', city: 'Unknown', state: 'Utah', zipCode: '00000', county: 'Unknown', deliveryDate: '2024-01-01', deliveryTime: '12:00 PM', status: 'active' },
      { pin: 'C026', size: 'Concrete', customer: 'Untracked', location: 'Unknown', address: 'Unknown', city: 'Unknown', state: 'Utah', zipCode: '00000', county: 'Unknown', deliveryDate: '2024-01-01', deliveryTime: '12:00 PM', status: 'active' },
      
      // Available Dumpsters (8 total)
      { pin: 'AVAIL-001', size: '20 Yard', customer: 'Available', location: 'Warehouse', address: 'Warehouse', city: 'Salt Lake City', state: 'Utah', zipCode: '84101', county: 'Salt Lake County', deliveryDate: '2025-01-01', deliveryTime: '12:00 PM', status: 'available' },
      { pin: 'AVAIL-002', size: '30 Yard', customer: 'Available', location: 'Warehouse', address: 'Warehouse', city: 'Salt Lake City', state: 'Utah', zipCode: '84101', county: 'Salt Lake County', deliveryDate: '2025-01-01', deliveryTime: '12:00 PM', status: 'available' },
      { pin: 'AVAIL-003', size: '15 Yard', customer: 'Available', location: 'Warehouse', address: 'Warehouse', city: 'Salt Lake City', state: 'Utah', zipCode: '84101', county: 'Salt Lake County', deliveryDate: '2025-01-01', deliveryTime: '12:00 PM', status: 'available' },
      { pin: 'AVAIL-004', size: '10 Yard', customer: 'Available', location: 'Warehouse', address: 'Warehouse', city: 'Salt Lake City', state: 'Utah', zipCode: '84101', county: 'Salt Lake County', deliveryDate: '2025-01-01', deliveryTime: '12:00 PM', status: 'available' },
      { pin: 'AVAIL-005', size: '20 Yard', customer: 'Available', location: 'Warehouse', address: 'Warehouse', city: 'Salt Lake City', state: 'Utah', zipCode: '84101', county: 'Salt Lake County', deliveryDate: '2025-01-01', deliveryTime: '12:00 PM', status: 'available' },
      { pin: 'AVAIL-006', size: '30 Yard', customer: 'Available', location: 'Warehouse', address: 'Warehouse', city: 'Salt Lake City', state: 'Utah', zipCode: '84101', county: 'Salt Lake County', deliveryDate: '2025-01-01', deliveryTime: '12:00 PM', status: 'available' },
      { pin: 'AVAIL-007', size: '15 Yard', customer: 'Available', location: 'Warehouse', address: 'Warehouse', city: 'Salt Lake City', state: 'Utah', zipCode: '84101', county: 'Salt Lake County', deliveryDate: '2025-01-01', deliveryTime: '12:00 PM', status: 'available' },
      { pin: 'AVAIL-008', size: '10 Yard', customer: 'Available', location: 'Warehouse', address: 'Warehouse', city: 'Salt Lake City', state: 'Utah', zipCode: '84101', county: 'Salt Lake County', deliveryDate: '2025-01-01', deliveryTime: '12:00 PM', status: 'available' }
    ];

    setInventory(initialInventory);
    calculateStats(initialInventory);
  }, []);

  const calculateStats = (dumpsters: Dumpster[]) => {
    const totalDumpsters = dumpsters.length;
    const activeRentals = dumpsters.filter(d => d.status === 'active').length;
    const availableDumpsters = dumpsters.filter(d => d.status === 'available').length;
    const maintenanceDumpsters = dumpsters.filter(d => d.status === 'maintenance').length;
    const utilizationRate = totalDumpsters > 0 ? (activeRentals / totalDumpsters) * 100 : 0;

    const sizeBreakdown = {
      '10 Yard': dumpsters.filter(d => d.size === '10 Yard').length,
      '15 Yard': dumpsters.filter(d => d.size === '15 Yard').length,
      '20 Yard': dumpsters.filter(d => d.size === '20 Yard').length,
      '30 Yard': dumpsters.filter(d => d.size === '30 Yard').length,
      'Concrete': dumpsters.filter(d => d.size === 'Concrete').length,
    };

    setStats({
      totalDumpsters,
      activeRentals,
      availableDumpsters,
      maintenanceDumpsters,
      utilizationRate,
      sizeBreakdown
    });
  };

  const filteredInventory = inventory.filter(dumpster => {
    const statusMatch = filter === 'all' || dumpster.status === filter;
    const sizeMatch = sizeFilter === 'all' || dumpster.size === sizeFilter;
    return statusMatch && sizeMatch;
  });

  const updateDumpsterStatus = (pin: string, newStatus: 'active' | 'available' | 'maintenance') => {
    setInventory(prev => {
      const updated = prev.map(dumpster => 
        dumpster.pin === pin ? { ...dumpster, status: newStatus } : dumpster
      );
      calculateStats(updated);
      
      // Sync with KPI system
      const newStats = {
        totalDumpsters: updated.length,
        activeRentals: updated.filter(d => d.status === 'active').length,
        availableDumpsters: updated.filter(d => d.status === 'available').length,
        maintenanceDumpsters: updated.filter(d => d.status === 'maintenance').length,
        utilizationRate: updated.length > 0 ? (updated.filter(d => d.status === 'active').length / updated.length) * 100 : 0
      };
      
      kpiSyncService.syncInventoryChange(
        newStats.totalDumpsters,
        newStats.activeRentals,
        newStats.availableDumpsters,
        newStats.maintenanceDumpsters
      );
      
      return updated;
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-100 text-green-800';
      case 'active': return 'bg-blue-100 text-blue-800';
      case 'maintenance': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'available': return '✅';
      case 'active': return '🚛';
      case 'maintenance': return '🔧';
      default: return '❓';
    }
  };

  return (
    <AdminAuthGuard>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Inventory Management</h1>
          <p className="text-gray-600">Manage your dumpster fleet and track availability</p>
        </div>

        {/* Inventory Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow border p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <span className="text-2xl">📦</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Dumpsters</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalDumpsters}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow border p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <span className="text-2xl">✅</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Available</p>
                <p className="text-2xl font-bold text-green-600">{stats.availableDumpsters}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow border p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <span className="text-2xl">🚛</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Rentals</p>
                <p className="text-2xl font-bold text-blue-600">{stats.activeRentals}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow border p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <span className="text-2xl">📊</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Utilization</p>
                <p className="text-2xl font-bold text-purple-600">{stats.utilizationRate.toFixed(1)}%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow border p-6 mb-8">
          <div className="flex flex-wrap items-center gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status Filter</label>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value as any)}
                className="border rounded-lg px-3 py-2"
              >
                <option value="all">All Status</option>
                <option value="active">Active Rentals</option>
                <option value="available">Available</option>
                <option value="maintenance">Maintenance</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Size Filter</label>
              <select
                value={sizeFilter}
                onChange={(e) => setSizeFilter(e.target.value)}
                className="border rounded-lg px-3 py-2"
              >
                <option value="all">All Sizes</option>
                <option value="10 Yard">10 Yard</option>
                <option value="15 Yard">15 Yard</option>
                <option value="20 Yard">20 Yard</option>
                <option value="30 Yard">30 Yard</option>
                <option value="Concrete">Concrete</option>
              </select>
            </div>
          </div>
        </div>

        {/* Inventory Table */}
        <div className="bg-white rounded-xl shadow border overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold">Dumpster Inventory</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Dumpster
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Size
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Delivery Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredInventory.map((dumpster) => (
                  <tr key={dumpster.pin} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-lg mr-2">{getStatusIcon(dumpster.status)}</span>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{dumpster.size} Dumpster</div>
                          <div className="text-sm text-gray-500">PIN: {dumpster.pin}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {dumpster.size}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(dumpster.status)}`}>
                        {dumpster.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div>
                        <div className="font-medium">{dumpster.location}</div>
                        <div className="text-gray-500">{dumpster.city}, {dumpster.state}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {dumpster.customer}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div>
                        <div>{dumpster.deliveryDate}</div>
                        <div className="text-gray-500">{dumpster.deliveryTime}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className="flex space-x-2">
                        <select
                          value={dumpster.status}
                          onChange={(e) => updateDumpsterStatus(dumpster.pin, e.target.value as 'active' | 'available' | 'maintenance')}
                          className="text-xs border rounded px-2 py-1 bg-white"
                        >
                          <option value="active">Active</option>
                          <option value="available">Available</option>
                          <option value="maintenance">Maintenance</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredInventory.length === 0 && (
            <div className="text-center py-12">
              <span className="text-4xl mb-4 block">📦</span>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No dumpsters found</h3>
              <p className="text-gray-500">Try adjusting your filters.</p>
            </div>
          )}
        </div>
        </div>
      </div>
    </AdminAuthGuard>
  );
}