'use client';

import React, { useState } from 'react';

interface BackupData {
  timestamp: string;
  data: any;
  type: string;
  size: number;
}

export default function DataBackup() {
  const [backups, setBackups] = useState<BackupData[]>([]);
  const [loading, setLoading] = useState(false);

  const createBackup = async () => {
    setLoading(true);
    try {
      // Collect all dashboard data
      const dashboardData = {
        googleAdsMetrics: localStorage.getItem('googleAdsMetrics'),
        googleAdsCampaigns: localStorage.getItem('googleAdsCampaigns'),
        salesByRentalMetrics: localStorage.getItem('salesByRentalMetrics'),
        salesByRentalData: localStorage.getItem('salesByRentalData'),
        googleAdsKeywordMetrics: localStorage.getItem('googleAdsKeywordMetrics'),
        googleAdsKeywords: localStorage.getItem('googleAdsKeywords'),
        kpiData: localStorage.getItem('iconDumpstersKPI'),
        competitiveKPI: localStorage.getItem('iconDumpstersCompetitiveKPI'),
        timestamp: new Date().toISOString()
      };

      // Create backup entry
      const backup: BackupData = {
        timestamp: new Date().toISOString(),
        data: dashboardData,
        type: 'full_dashboard',
        size: JSON.stringify(dashboardData).length
      };

      // Save to localStorage
      const existingBackups = JSON.parse(localStorage.getItem('dashboardBackups') || '[]');
      existingBackups.unshift(backup);
      
      // Keep only last 10 backups
      if (existingBackups.length > 10) {
        existingBackups.splice(10);
      }
      
      localStorage.setItem('dashboardBackups', JSON.stringify(existingBackups));
      setBackups(existingBackups);

      // Also send to server for cloud backup
      await fetch('/api/backup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(backup)
      });

      alert('Backup created successfully!');
    } catch (error) {
      console.error('Backup failed:', error);
      alert('Backup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const restoreBackup = async (backup: BackupData) => {
    if (!confirm('This will overwrite your current data. Are you sure?')) {
      return;
    }

    try {
      const data = backup.data;
      
      // Restore each data type
      Object.entries(data).forEach(([key, value]) => {
        if (key !== 'timestamp' && value) {
          localStorage.setItem(key, value as string);
        }
      });

      alert('Data restored successfully! Please refresh the page.');
      window.location.reload();
    } catch (error) {
      console.error('Restore failed:', error);
      alert('Restore failed. Please try again.');
    }
  };

  const downloadBackup = (backup: BackupData) => {
    const dataStr = JSON.stringify(backup.data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `dashboard-backup-${backup.timestamp.split('T')[0]}.json`;
    link.click();
    
    URL.revokeObjectURL(url);
  };

  const loadBackups = () => {
    const storedBackups = JSON.parse(localStorage.getItem('dashboardBackups') || '[]');
    setBackups(storedBackups);
  };

  // Load backups on component mount
  React.useEffect(() => {
    loadBackups();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow border p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">🔄 Data Backup & Recovery</h3>
      
      <div className="space-y-4">
        <div className="flex space-x-3">
          <button
            onClick={createBackup}
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {loading ? 'Creating...' : '📦 Create Backup'}
          </button>
          
          <button
            onClick={loadBackups}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            🔄 Refresh List
          </button>
        </div>

        {backups.length > 0 && (
          <div className="mt-6">
            <h4 className="text-md font-medium text-gray-900 mb-3">Available Backups</h4>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {backups.map((backup, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {new Date(backup.timestamp).toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-600">
                      {backup.type} • {(backup.size / 1024).toFixed(1)} KB
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => downloadBackup(backup)}
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      📥 Download
                    </button>
                    <button
                      onClick={() => restoreBackup(backup)}
                      className="text-green-600 hover:text-green-800 text-sm"
                    >
                      🔄 Restore
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h4 className="text-sm font-medium text-yellow-800 mb-2">💡 Backup Tips</h4>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>• Create backups before making major changes</li>
            <li>• Backups are stored locally and in the cloud</li>
            <li>• Only the last 10 backups are kept automatically</li>
            <li>• Download important backups for offline storage</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
