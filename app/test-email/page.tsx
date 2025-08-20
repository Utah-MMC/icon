'use client';

import { useState } from 'react';

export default function TestEmailPage() {
  const [testResult, setTestResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [emailConfig, setEmailConfig] = useState({
    smtpHost: 'smtp.gmail.com',
    smtpPort: '587',
    smtpUser: 'jeremyuwg@gmail.com',
    smtpPass: '',
  });

  const testEmailConfiguration = async () => {
    setIsLoading(true);
    setTestResult('Testing email configuration...');

    try {
      const response = await fetch('/api/test-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'test_configuration'
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setTestResult('✅ Email configuration test successful! Check your email (jeremyuwg@gmail.com) for the test message.');
      } else {
        setTestResult('❌ Email configuration test failed. Please check your SMTP settings.');
      }
    } catch (error) {
      setTestResult('❌ Error testing email configuration: ' + error);
    } finally {
      setIsLoading(false);
    }
  };

  const sendTestKPIEmail = async () => {
    setIsLoading(true);
    setTestResult('Sending test KPI email...');

    try {
      const response = await fetch('/api/test-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'send_kpi_email',
          emailData: {
            type: 'kpi_report',
            kpiMetrics: {
              revenue: 25000,
              rentals: 45,
              utilization: 78,
              websiteVisitors: 1800,
              quoteRequests: 85,
              phoneCalls: 165,
              conversionRate: 22,
              customerSatisfaction: 4.8,
              googleReviews: 25,
              adRank: 4.2,
              marketShare: 12,
              competitorPosition: 6
            }
          }
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setTestResult('✅ Test KPI email sent successfully! Check your email for the KPI report.');
      } else {
        setTestResult('❌ Failed to send test KPI email: ' + result.message);
      }
    } catch (error) {
      setTestResult('❌ Error sending test KPI email: ' + error);
    } finally {
      setIsLoading(false);
    }
  };

  const sendTestCustomerEmail = async () => {
    setIsLoading(true);
    setTestResult('Sending test customer email...');

    try {
      const response = await fetch('/api/test-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'send_kpi_email',
          emailData: {
            type: 'review_request',
            customerData: {
              customerName: 'John Doe',
              customerEmail: 'jeremyuwg@gmail.com', // Send to your email for testing
              customerPhone: '(801) 555-0123',
              rentalDate: '2025-01-15',
              dumpsterSize: '20 Yard',
              rentalId: 'test_rental_123'
            }
          }
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setTestResult('✅ Test customer email sent successfully! Check your email for the review request.');
      } else {
        setTestResult('❌ Failed to send test customer email: ' + result.message);
      }
    } catch (error) {
      setTestResult('❌ Error sending test customer email: ' + error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Icon Dumpsters - Email Configuration Test</h1>
            <p className="text-lg text-gray-600">
              Test and configure your SMTP email settings for the KPI system
            </p>
          </div>

          {/* Email Configuration Section */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">SMTP Configuration</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">SMTP Host</label>
                <input
                  type="text"
                  value={emailConfig.smtpHost}
                  onChange={(e) => setEmailConfig({...emailConfig, smtpHost: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="smtp.gmail.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">SMTP Port</label>
                <input
                  type="text"
                  value={emailConfig.smtpPort}
                  onChange={(e) => setEmailConfig({...emailConfig, smtpPort: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="587"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  value={emailConfig.smtpUser}
                  onChange={(e) => setEmailConfig({...emailConfig, smtpUser: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="jeremyuwg@gmail.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">App Password</label>
                <input
                  type="password"
                  value={emailConfig.smtpPass}
                  onChange={(e) => setEmailConfig({...emailConfig, smtpPass: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter your app password"
                />
              </div>
            </div>
            <div className="mt-4 p-4 bg-blue-50 rounded-md">
              <h3 className="text-sm font-medium text-blue-900 mb-2">📧 Gmail Setup Instructions:</h3>
              <ol className="text-sm text-blue-800 space-y-1">
                <li>1. Enable 2-factor authentication on your Gmail account</li>
                <li>2. Generate an App Password: Google Account → Security → App Passwords</li>
                <li>3. Use the generated password (not your regular Gmail password)</li>
                <li>4. Set environment variables: SMTP_USER and SMTP_PASS</li>
              </ol>
            </div>
          </div>

          {/* Test Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <button
              onClick={testEmailConfiguration}
              disabled={isLoading}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Testing...' : 'Test Email Configuration'}
            </button>
            
            <button
              onClick={sendTestKPIEmail}
              disabled={isLoading}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Sending...' : 'Send Test KPI Report'}
            </button>
            
            <button
              onClick={sendTestCustomerEmail}
              disabled={isLoading}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Sending...' : 'Send Test Customer Email'}
            </button>
          </div>

          {/* Test Results */}
          {testResult && (
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Test Results</h3>
              <div className="bg-white rounded-md p-4 border">
                <p className="text-gray-800 whitespace-pre-wrap">{testResult}</p>
              </div>
            </div>
          )}

          {/* KPI Integration Info */}
          <div className="mt-8 bg-purple-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-purple-900 mb-4">🎯 KPI Email Integration</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-purple-800 mb-2">Automated Email Types</h3>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Rating Request (3 days after rental)</li>
                  <li>• Review Request (7 days after rental)</li>
                  <li>• Reminder Email (14 days after rental)</li>
                  <li>• Thank You Email (after rating)</li>
                  <li>• Improvement Email (low ratings)</li>
                  <li>• KPI Reports (weekly/monthly)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-purple-800 mb-2">Competitive Strategy</h3>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Automated review generation</li>
                  <li>• Customer satisfaction tracking</li>
                  <li>• Performance monitoring</li>
                  <li>• Market position analysis</li>
                  <li>• Competitor benchmarking</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Environment Variables */}
          <div className="mt-8 bg-yellow-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-yellow-900 mb-4">🔧 Environment Variables</h2>
            <p className="text-sm text-yellow-800 mb-4">
              Add these to your .env.local file or Vercel environment variables:
            </p>
            <div className="bg-gray-900 text-green-400 p-4 rounded-md font-mono text-sm">
              <div>SMTP_HOST=smtp.gmail.com</div>
              <div>SMTP_PORT=587</div>
              <div>SMTP_USER=jeremyuwg@gmail.com</div>
              <div>SMTP_PASS=your_app_password_here</div>
              <div>NEXT_PUBLIC_SITE_URL=https://www.icondumpsters.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
