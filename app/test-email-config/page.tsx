'use client';

import { useState } from 'react';

export default function TestEmailConfigPage() {
  const [testResult, setTestResult] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const testEmailConfig = async () => {
    setLoading(true);
    setTestResult('Testing email configuration...');

    try {
      // Test the bulk email API
      const response = await fetch('/api/bulk-email');
      const data = await response.json();
      
      if (data.success) {
        setTestResult(`✅ Bulk Email API working! Found ${data.stats.totalClients} clients, ${data.stats.clientsWithEmail} with emails.`);
      } else {
        setTestResult('❌ Bulk Email API failed: ' + JSON.stringify(data));
      }
    } catch (error) {
      setTestResult('❌ Error testing bulk email API: ' + error);
    } finally {
      setLoading(false);
    }
  };

  const testEmailSending = async () => {
    setLoading(true);
    setTestResult('Testing newsletter email to jeremyuwg@gmail.com...');

    try {
      const response = await fetch('/api/manual-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'jeremyuwg@gmail.com',
          subject: 'Icon Dumpsters Monthly Newsletter - {month} {year}',
          content: '',
          emailType: 'newsletter',
          manualEmails: 'jeremyuwg@gmail.com'
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setTestResult(`✅ Newsletter test email sent successfully to jeremyuwg@gmail.com! Check your inbox for the full newsletter with all content and links.`);
      } else {
        setTestResult('❌ Newsletter test failed: ' + JSON.stringify(data));
      }
    } catch (error) {
      setTestResult('❌ Error testing newsletter: ' + error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Email Configuration Test</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Test Email System</h2>
          
          <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>⚠️ Important:</strong> The "Send Newsletter Test" button will send the full newsletter template to jeremyuwg@gmail.com for testing purposes. 
              The bulk email system (for sending to all customers) is separate and can be accessed from the KPI Dashboard.
            </p>
          </div>
          
          <div className="space-y-4">
            <button
              onClick={testEmailConfig}
              disabled={loading}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'Testing...' : 'Test Bulk Email API'}
            </button>
            
            <button
              onClick={testEmailSending}
              disabled={loading}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 ml-4"
            >
              {loading ? 'Testing...' : 'Send Newsletter Test (jeremyuwg@gmail.com only)'}
            </button>
          </div>
          
          {testResult && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Test Result:</h3>
              <p className="text-sm whitespace-pre-wrap">{testResult}</p>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Environment Check</h2>
          <div className="space-y-2 text-sm">
            <p><strong>Note:</strong> Environment variables are loaded server-side. The EmailService will use the values from your .env.local file.</p>
            <p><strong>Expected SMTP_HOST:</strong> smtp.gmail.com</p>
            <p><strong>Expected SMTP_PORT:</strong> 587</p>
            <p><strong>Expected SMTP_USER:</strong> jeremyuwg@gmail.com</p>
            <p><strong>Expected SMTP_PASS:</strong> ***Set***</p>
            <p className="text-xs text-gray-500 mt-4">Check the server console logs when testing email sending to see the actual values being used.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
