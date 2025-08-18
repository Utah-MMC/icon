'use client';

import React, { useState, useEffect } from 'react';

// TypeScript declaration for KPI integration
declare global {
  interface Window {
    iconDumpstersKPI?: {
      updateUtilization: (active: number, total: number) => void;
    };
  }
}

interface Dumpster {
  id: string;
  binId: string;
  size: '10yd' | '15yd' | '20yd' | '30yd';
  status: 'Available' | 'Out for Delivery' | 'In Use' | 'Maintenance';
  customerName?: string;
  customerPhone?: string;
  deliveryDate?: string;
  expectedPickupDate?: string;
  location?: string;
  notes?: string;
  lastUpdated: string;
}

export default function InventoryTracker() {
  const [dumpsters, setDumpsters] = useState<Dumpster[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingDumpster, setEditingDumpster] = useState<Dumpster | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Initialize with sample data
  useEffect(() => {
    try {
      console.log('Initializing inventory tracker...');
      const savedDumpsters = localStorage.getItem('dumpsterInventory');
      if (savedDumpsters) {
        const parsed = JSON.parse(savedDumpsters);
        console.log('Loaded saved dumpsters:', parsed);
        setDumpsters(parsed);
      } else {
        // Initialize with sample inventory
        const sampleDumpsters: Dumpster[] = [
          { id: 'D001', binId: 'BIN-001', size: '15yd', status: 'Available', lastUpdated: new Date().toISOString() },
          { id: 'D002', binId: 'BIN-002', size: '20yd', status: 'In Use', customerName: 'John Smith', deliveryDate: '2024-01-15', expectedPickupDate: '2024-01-22', location: '123 Main St, Salt Lake City', lastUpdated: new Date().toISOString() },
          { id: 'D003', binId: 'BIN-003', size: '30yd', status: 'Out for Delivery', customerName: 'Jane Doe', deliveryDate: '2024-01-16', expectedPickupDate: '2024-01-23', location: '456 Oak Ave, Sandy', lastUpdated: new Date().toISOString() },
          { id: 'D004', binId: 'BIN-004', size: '10yd', status: 'Maintenance', notes: 'Needs repair - hydraulic issue', lastUpdated: new Date().toISOString() },
          { id: 'D005', binId: 'BIN-005', size: '15yd', status: 'Available', lastUpdated: new Date().toISOString() },
        ];
        console.log('Setting sample dumpsters:', sampleDumpsters);
        setDumpsters(sampleDumpsters);
        localStorage.setItem('dumpsterInventory', JSON.stringify(sampleDumpsters));
      }
    } catch (error) {
      console.error('Error initializing inventory:', error);
      setError(error instanceof Error ? error.message : 'Unknown error');
      // Fallback to empty array if there's an error
      setDumpsters([]);
    } finally {
      console.log('Setting loading to false');
      setIsLoading(false);
    }
  }, []);

  const saveDumpsters = (newDumpsters: Dumpster[]) => {
    setDumpsters(newDumpsters);
    
    // Save to localStorage with error handling
    try {
      localStorage.setItem('dumpsterInventory', JSON.stringify(newDumpsters));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
    
    // Update KPI system with utilization data (optional)
    try {
      const availableCount = newDumpsters.filter(d => d.status === 'Available').length;
      const totalCount = newDumpsters.length;
      const utilizationRate = ((totalCount - availableCount) / totalCount) * 100;
      
      if (typeof window !== 'undefined' && window.iconDumpstersKPI) {
        window.iconDumpstersKPI.updateUtilization(totalCount - availableCount, totalCount);
      }
    } catch (error) {
      console.log('KPI integration not available:', error);
    }
  };

  const addDumpster = (dumpster: Omit<Dumpster, 'id' | 'lastUpdated'>) => {
    const newDumpster: Dumpster = {
      ...dumpster,
      id: `D${String(dumpsters.length + 1).padStart(3, '0')}`,
      binId: dumpster.binId || `BIN-${String(dumpsters.length + 1).padStart(3, '0')}`,
      lastUpdated: new Date().toISOString()
    };
    saveDumpsters([...dumpsters, newDumpster]);
    setShowAddForm(false);
  };

  const updateDumpster = (id: string, updates: Partial<Dumpster>) => {
    const updatedDumpsters = dumpsters.map(d => 
      d.id === id ? { ...d, ...updates, lastUpdated: new Date().toISOString() } : d
    );
    saveDumpsters(updatedDumpsters);
    setEditingDumpster(null);
  };

  const deleteDumpster = (id: string) => {
    if (confirm('Are you sure you want to delete this dumpster?')) {
      saveDumpsters(dumpsters.filter(d => d.id !== id));
    }
  };

  const filteredDumpsters = filterStatus === 'All' 
    ? dumpsters 
    : dumpsters.filter(d => d.status === filterStatus);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available': return 'bg-green-100 text-green-800';
      case 'In Use': return 'bg-blue-100 text-blue-800';
      case 'Out for Delivery': return 'bg-yellow-100 text-yellow-800';
      case 'Maintenance': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSizeColor = (size: string) => {
    switch (size) {
      case '10yd': return 'bg-purple-100 text-purple-800';
      case '15yd': return 'bg-indigo-100 text-indigo-800';
      case '20yd': return 'bg-blue-100 text-blue-800';
      case '30yd': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (error) {
    return (
      <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center items-center h-64">
          <div className="text-center">
            <div className="text-red-600 text-xl mb-4">⚠️ Error Loading Inventory</div>
            <p className="text-gray-600 mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Reload Page
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center items-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading inventory...</p>
          </div>
        </div>
      </div>
    );
  }

  console.log('Rendering inventory tracker with dumpsters:', dumpsters);
  
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Dumpster Inventory Tracker</h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Add Dumpster
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
          <div className="text-2xl font-bold text-green-600">
            {dumpsters.filter(d => d.status === 'Available').length}
          </div>
          <div className="text-sm text-green-700">Available</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <div className="text-2xl font-bold text-blue-600">
            {dumpsters.filter(d => d.status === 'In Use').length}
          </div>
          <div className="text-sm text-blue-700">In Use</div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <div className="text-2xl font-bold text-yellow-600">
            {dumpsters.filter(d => d.status === 'Out for Delivery').length}
          </div>
          <div className="text-sm text-yellow-700">Out for Delivery</div>
        </div>
        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <div className="text-2xl font-bold text-red-600">
            {dumpsters.filter(d => d.status === 'Maintenance').length}
          </div>
          <div className="text-sm text-red-700">Maintenance</div>
        </div>
      </div>

      {/* Filter */}
      <div className="mb-4">
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All Statuses</option>
          <option value="Available">Available</option>
          <option value="In Use">In Use</option>
          <option value="Out for Delivery">Out for Delivery</option>
          <option value="Maintenance">Maintenance</option>
        </select>
      </div>

      {/* Inventory Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bin ID</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delivery Date</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pickup Date</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredDumpsters.map((dumpster) => (
              <tr key={dumpster.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm font-medium text-gray-900">{dumpster.id}</td>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">{dumpster.binId}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getSizeColor(dumpster.size)}`}>
                    {dumpster.size}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(dumpster.status)}`}>
                    {dumpster.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-900">
                  {dumpster.customerName || '-'}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900">
                  {dumpster.location || '-'}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900">
                  {dumpster.deliveryDate ? new Date(dumpster.deliveryDate).toLocaleDateString() : '-'}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900">
                  {dumpster.expectedPickupDate ? new Date(dumpster.expectedPickupDate).toLocaleDateString() : '-'}
                </td>
                <td className="px-4 py-3 text-sm font-medium">
                  <button
                    onClick={() => setEditingDumpster(dumpster)}
                    className="text-blue-600 hover:text-blue-900 mr-3"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteDumpster(dumpster.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Dumpster Form */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4">Add New Dumpster</h3>
            <AddDumpsterForm
              onAdd={addDumpster}
              onCancel={() => setShowAddForm(false)}
            />
          </div>
        </div>
      )}

      {/* Edit Dumpster Form */}
      {editingDumpster && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4">Edit Dumpster {editingDumpster.id}</h3>
            <EditDumpsterForm
              dumpster={editingDumpster}
              onUpdate={updateDumpster}
              onCancel={() => setEditingDumpster(null)}
            />
          </div>
        </div>
             )}
     </div>
   );
 }

// Add Dumpster Form Component
function AddDumpsterForm({ onAdd, onCancel }: { onAdd: (dumpster: Omit<Dumpster, 'id' | 'lastUpdated'>) => void; onCancel: () => void }) {
  const [formData, setFormData] = useState({
    binId: '',
    size: '15yd' as const,
    status: 'Available' as const,
    customerName: '',
    customerPhone: '',
    deliveryDate: '',
    expectedPickupDate: '',
    location: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" data-inventory-form>
      <div>
        <label className="block text-sm font-medium text-gray-700">Bin ID</label>
        <input
          type="text"
          value={formData.binId}
          onChange={(e) => setFormData({ ...formData, binId: e.target.value })}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g., BIN-001"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Size</label>
        <select
          value={formData.size}
          onChange={(e) => setFormData({ ...formData, size: e.target.value as any })}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="10yd">10 Yard</option>
          <option value="15yd">15 Yard</option>
          <option value="20yd">20 Yard</option>
          <option value="30yd">30 Yard</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Status</label>
        <select
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="Available">Available</option>
          <option value="Out for Delivery">Out for Delivery</option>
          <option value="In Use">In Use</option>
          <option value="Maintenance">Maintenance</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Customer Name</label>
        <input
          type="text"
          value={formData.customerName}
          onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Customer Phone</label>
        <input
          type="tel"
          value={formData.customerPhone}
          onChange={(e) => setFormData({ ...formData, customerPhone: e.target.value })}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Location</label>
        <input
          type="text"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Delivery Date</label>
        <input
          type="date"
          value={formData.deliveryDate}
          onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Expected Pickup Date</label>
        <input
          type="date"
          value={formData.expectedPickupDate}
          onChange={(e) => setFormData({ ...formData, expectedPickupDate: e.target.value })}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Notes</label>
        <textarea
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
        />
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-blue-700"
        >
          Add Dumpster
        </button>
      </div>
    </form>
  );
}

// Edit Dumpster Form Component
function EditDumpsterForm({ 
  dumpster, 
  onUpdate, 
  onCancel 
}: { 
  dumpster: Dumpster; 
  onUpdate: (id: string, updates: Partial<Dumpster>) => void; 
  onCancel: () => void; 
}) {
  const [formData, setFormData] = useState({
    binId: dumpster.binId || '',
    size: dumpster.size,
    status: dumpster.status,
    customerName: dumpster.customerName || '',
    customerPhone: dumpster.customerPhone || '',
    deliveryDate: dumpster.deliveryDate || '',
    expectedPickupDate: dumpster.expectedPickupDate || '',
    location: dumpster.location || '',
    notes: dumpster.notes || ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(dumpster.id, formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" data-inventory-form>
      <div>
        <label className="block text-sm font-medium text-gray-700">Bin ID</label>
        <input
          type="text"
          value={formData.binId}
          onChange={(e) => setFormData({ ...formData, binId: e.target.value })}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g., BIN-001"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Size</label>
        <select
          value={formData.size}
          onChange={(e) => setFormData({ ...formData, size: e.target.value as any })}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="10yd">10 Yard</option>
          <option value="15yd">15 Yard</option>
          <option value="20yd">20 Yard</option>
          <option value="30yd">30 Yard</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Status</label>
        <select
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="Available">Available</option>
          <option value="Out for Delivery">Out for Delivery</option>
          <option value="In Use">In Use</option>
          <option value="Maintenance">Maintenance</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Customer Name</label>
        <input
          type="text"
          value={formData.customerName}
          onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Customer Phone</label>
        <input
          type="tel"
          value={formData.customerPhone}
          onChange={(e) => setFormData({ ...formData, customerPhone: e.target.value })}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Location</label>
        <input
          type="text"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Delivery Date</label>
        <input
          type="date"
          value={formData.deliveryDate}
          onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Expected Pickup Date</label>
        <input
          type="date"
          value={formData.expectedPickupDate}
          onChange={(e) => setFormData({ ...formData, expectedPickupDate: e.target.value })}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Notes</label>
        <textarea
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
        />
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-blue-700"
        >
          Update Dumpster
        </button>
      </div>
    </form>
  );
}
