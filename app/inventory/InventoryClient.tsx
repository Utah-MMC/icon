
'use client';

import InventoryTracker from '../components/InventoryTracker';
import { inventoryService } from '../lib/InventoryService';
import { useState, useEffect } from 'react';

export default function InventoryClient() {
  const [inventoryStatus, setInventoryStatus] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadInventoryStatus = () => {
      try {
        const status = inventoryService.getInventoryStatus();
        setInventoryStatus(status);
      } catch (error) {
        console.error('Error loading inventory status:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadInventoryStatus();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dumpster Inventory Management</h1>
          <p className="mt-2 text-gray-600">
            Track your dumpster fleet, manage rentals, and monitor utilization rates in real-time
          </p>
        </div>

        {/* Quick Status Overview */}
        {!isLoading && inventoryStatus && (
          <div className="mb-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Fleet Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="text-2xl font-bold text-blue-600">{inventoryStatus.totalDumpsters}</div>
                <div className="text-sm text-blue-700">Total Dumpsters</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="text-2xl font-bold text-green-600">{inventoryStatus.availableDumpsters}</div>
                <div className="text-sm text-green-700">Available</div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <div className="text-2xl font-bold text-yellow-600">{inventoryStatus.totalDumpsters - inventoryStatus.availableDumpsters}</div>
                <div className="text-sm text-yellow-700">In Use</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <div className="text-2xl font-bold text-purple-600">{inventoryStatus.utilizationRate.toFixed(1)}%</div>
                <div className="text-sm text-purple-700">Utilization Rate</div>
              </div>
            </div>
          </div>
        )}
        
        <InventoryTracker />
      </div>
    </div>
  );
}

