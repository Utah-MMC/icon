"use client";

import { useState } from 'react';

interface TestResult {
  endpoint: string;
  status: 'pending' | 'success' | 'error';
  message: string;
  response?: any;
}

export default function APITestPage() {
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const testEndpoint = async (endpoint: string, method: string = 'GET', body?: any): Promise<TestResult> => {
    try {
      const options: RequestInit = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      };

      if (body && method !== 'GET') {
        options.body = JSON.stringify(body);
      }

      const response = await fetch(endpoint, options);
      const data = await response.json();

      return {
        endpoint,
        status: response.ok ? 'success' : 'error',
        message: response.ok ? 'Success' : `Error: ${response.status}`,
        response: data
      };
    } catch (error) {
      return {
        endpoint,
        status: 'error',
        message: `Failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
        response: null
      };
    }
  };

  const runAllTests = async () => {
    setIsRunning(true);
    setTestResults([]);

    const tests = [
      // Health check
      { endpoint: '/api/health', method: 'GET' },
      
      // Analytics
      { endpoint: '/api/analytics', method: 'GET' },
      { endpoint: '/api/analytics', method: 'POST', body: { type: 'test', name: 'api_test', ts: Date.now() } },
      
      // Email system
      { endpoint: '/api/test-email', method: 'GET' },
      { endpoint: '/api/test-email', method: 'POST', body: { action: 'send_test_email' } },
      { endpoint: '/api/test-email', method: 'POST', body: { 
        action: 'send_kpi_email', 
        emailData: { 
          type: 'rating_request', 
          customerData: { 
            customerName: 'Test Customer', 
            customerEmail: 'test@example.com', 
            dumpsterSize: '20', 
            rentalId: 'test-123' 
          } 
        } 
      }},
      
      // Lead system
      { endpoint: '/api/lead', method: 'POST', body: { 
        firstName: 'Test', 
        lastName: 'Customer', 
        email: 'test@example.com', 
        phone: '555-1234', 
        zipCode: '84101', 
        dumpsterSize: '20' 
      }},
      
      // Review system
      { endpoint: '/api/send-review-notification', method: 'POST', body: { 
        customerName: 'Test Customer', 
        customerEmail: 'test@example.com', 
        rating: 5, 
        review: 'Great service!', 
        dumpsterSize: '20', 
        rentalDate: new Date().toISOString() 
      }},
      
      // Inventory system
      { endpoint: '/api/inventory', method: 'GET' },
      { endpoint: '/api/inventory', method: 'POST', body: { 
        action: 'add', 
        name: 'Test Dumpster', 
        size: '20', 
        location: 'Test Location', 
        status: 'available' 
      }},
      
      // Admin system
      { endpoint: '/api/admin/login', method: 'POST', body: { password: 'IconDumpsters2024!' }},
      
      // reCAPTCHA
      { endpoint: '/api/verify-recaptcha', method: 'POST', body: { token: 'test-token' }},
    ];

    const results: TestResult[] = [];

    for (const test of tests) {
      const result = await testEndpoint(test.endpoint, test.method, test.body);
      results.push(result);
      setTestResults([...results]);
      
      // Small delay between tests
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    setIsRunning(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'text-green-600 bg-green-100';
      case 'error': return 'text-red-600 bg-red-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success': return '✅';
      case 'error': return '❌';
      case 'pending': return '⏳';
      default: return '❓';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">API Endpoint Testing</h1>
          <p className="text-gray-600">Test all API endpoints to ensure they're working properly</p>
        </div>

        {/* Test Controls */}
        <div className="bg-white rounded-xl shadow border p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">Run API Tests</h2>
              <p className="text-gray-600">Test all API endpoints for functionality and email delivery</p>
            </div>
            <button
              onClick={runAllTests}
              disabled={isRunning}
              className="bg-[#4e37a8] text-white px-6 py-3 rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isRunning ? 'Running Tests...' : 'Run All Tests'}
            </button>
          </div>
        </div>

        {/* Test Results */}
        {testResults.length > 0 && (
          <div className="bg-white rounded-xl shadow border overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold">Test Results</h2>
              <p className="text-gray-600">
                {testResults.filter(r => r.status === 'success').length} passed, {' '}
                {testResults.filter(r => r.status === 'error').length} failed
              </p>
            </div>
            
            <div className="divide-y divide-gray-200">
              {testResults.map((result, index) => (
                <div key={index} className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-lg">{getStatusIcon(result.status)}</span>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(result.status)}`}>
                          {result.status.toUpperCase()}
                        </span>
                        <span className="font-mono text-sm text-gray-600">{result.endpoint}</span>
                      </div>
                      <p className="text-gray-700 mb-2">{result.message}</p>
                      {result.response && (
                        <details className="mt-2">
                          <summary className="cursor-pointer text-sm text-gray-600 hover:text-gray-800">
                            View Response
                          </summary>
                          <pre className="mt-2 p-3 bg-gray-100 rounded text-xs overflow-x-auto">
                            {JSON.stringify(result.response, null, 2)}
                          </pre>
                        </details>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* API Endpoints List */}
        <div className="mt-8 bg-white rounded-xl shadow border p-6">
          <h2 className="text-xl font-semibold mb-4">Available API Endpoints</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Core APIs</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li><code className="bg-gray-100 px-2 py-1 rounded">GET /api/health</code> - Health check</li>
                <li><code className="bg-gray-100 px-2 py-1 rounded">GET /api/analytics</code> - Analytics data</li>
                <li><code className="bg-gray-100 px-2 py-1 rounded">POST /api/analytics</code> - Track events</li>
                <li><code className="bg-gray-100 px-2 py-1 rounded">POST /api/lead</code> - Lead submissions</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Email & Communication</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li><code className="bg-gray-100 px-2 py-1 rounded">POST /api/test-email</code> - Email system</li>
                <li><code className="bg-gray-100 px-2 py-1 rounded">POST /api/send-review-notification</code> - Review notifications</li>
                <li><code className="bg-gray-100 px-2 py-1 rounded">POST /api/verify-recaptcha</code> - reCAPTCHA verification</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Inventory & Admin</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li><code className="bg-gray-100 px-2 py-1 rounded">GET /api/inventory</code> - Inventory data</li>
                <li><code className="bg-gray-100 px-2 py-1 rounded">POST /api/inventory</code> - Inventory management</li>
                <li><code className="bg-gray-100 px-2 py-1 rounded">POST /api/admin/login</code> - Admin authentication</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Types</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li><code className="bg-gray-100 px-2 py-1 rounded">rating_request</code> - Customer rating requests</li>
                <li><code className="bg-gray-100 px-2 py-1 rounded">review_request</code> - Review requests with incentives</li>
                <li><code className="bg-gray-100 px-2 py-1 rounded">reminder</code> - Follow-up reminders</li>
                <li><code className="bg-gray-100 px-2 py-1 rounded">kpi_report</code> - Weekly KPI reports</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Email Configuration Status */}
        <div className="mt-8 bg-white rounded-xl shadow border p-6">
          <h2 className="text-xl font-semibold mb-4">Email Configuration Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Required Environment Variables</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li><code className="bg-gray-100 px-2 py-1 rounded">SMTP_HOST</code> - smtp.gmail.com</li>
                <li><code className="bg-gray-100 px-2 py-1 rounded">SMTP_PORT</code> - 587</li>
                <li><code className="bg-gray-100 px-2 py-1 rounded">SMTP_USER</code> - icondumpsters@gmail.com</li>
                <li><code className="bg-gray-100 px-2 py-1 rounded">SMTP_PASS</code> - Your Gmail app password</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Features</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>✅ Lead form notifications</li>
                <li>✅ Customer auto-replies</li>
                <li>✅ Rating request emails</li>
                <li>✅ Review request emails</li>
                <li>✅ KPI report emails</li>
                <li>✅ Follow-up reminders</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
