'use client';

import { useState, useEffect } from 'react';

interface SecurityStatus {
  authentication: boolean;
  sessionValid: boolean;
  rateLimitActive: boolean;
  securityHeaders: boolean;
  lastLogin: string | null;
  sessionExpires: string | null;
}

export default function SecurityStatus() {
  const [securityStatus, setSecurityStatus] = useState<SecurityStatus | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSecurityStatus = async () => {
      try {
        const response = await fetch('/api/admin/security-status', {
          credentials: 'include',
        });

        if (response.ok) {
          const data = await response.json();
          setSecurityStatus(data);
        }
      } catch (error) {
        console.error('Failed to check security status:', error);
      } finally {
        setLoading(false);
      }
    };

    checkSecurityStatus();
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow border p-4">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (!securityStatus) {
    return null;
  }

  return (
    <div className="bg-white rounded-xl shadow border p-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">🔒 Security Status</h3>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Authentication</span>
          <span className={`text-sm font-medium ${securityStatus.authentication ? 'text-green-600' : 'text-red-600'}`}>
            {securityStatus.authentication ? '✅ Active' : '❌ Inactive'}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Session</span>
          <span className={`text-sm font-medium ${securityStatus.sessionValid ? 'text-green-600' : 'text-red-600'}`}>
            {securityStatus.sessionValid ? '✅ Valid' : '❌ Expired'}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Rate Limiting</span>
          <span className={`text-sm font-medium ${securityStatus.rateLimitActive ? 'text-green-600' : 'text-yellow-600'}`}>
            {securityStatus.rateLimitActive ? '✅ Active' : '⚠️ Limited'}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Security Headers</span>
          <span className={`text-sm font-medium ${securityStatus.securityHeaders ? 'text-green-600' : 'text-red-600'}`}>
            {securityStatus.securityHeaders ? '✅ Enabled' : '❌ Missing'}
          </span>
        </div>
        {securityStatus.lastLogin && (
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Last Login</span>
            <span className="text-sm text-gray-500">
              {new Date(securityStatus.lastLogin).toLocaleString()}
            </span>
          </div>
        )}
        {securityStatus.sessionExpires && (
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Session Expires</span>
            <span className="text-sm text-gray-500">
              {new Date(securityStatus.sessionExpires).toLocaleString()}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
