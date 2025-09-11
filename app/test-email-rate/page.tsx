'use client';

import { useState } from 'react';

export default function TestEmailRatePage() {
  const [testResult, setTestResult] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [emailCount, setEmailCount] = useState(5);

  const testEmailRate = async () => {
    setLoading(true);
    setTestResult('Testing email rate limiting...\n');
    
    try {
      const emails = [];
      for (let i = 1; i <= emailCount; i++) {
        emails.push(`test${i}@example.com`);
      }
      
      const response = await fetch('/api/manual-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          emailType: 'review-request',
          subject: 'Rate Limit Test Email',
          content: 'This is a test email to verify rate limiting is working correctly.',
          manualEmails: emails.join(',')
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setTestResult(prev => prev + `\n✅ Test completed successfully!\n`);
        setTestResult(prev => prev + `📊 Results:\n`);
        setTestResult(prev => prev + `- Total emails: ${data.results.totalEmails}\n`);
        setTestResult(prev => prev + `- Emails sent: ${data.results.emailsSent}\n`);
        setTestResult(prev => prev + `- Emails failed: ${data.results.emailsFailed}\n`);
        setTestResult(prev => prev + `- Success rate: ${((data.results.emailsSent / data.results.totalEmails) * 100).toFixed(1)}%\n`);
        
        if (data.results.failedEmails.length > 0) {
          setTestResult(prev => prev + `\n❌ Failed emails:\n`);
          data.results.failedEmails.forEach((failed: any) => {
            setTestResult(prev => prev + `- ${failed.email}: ${failed.error}\n`);
          });
        }
      } else {
        setTestResult(prev => prev + `\n❌ Test failed: ${data.error}\n`);
      }
    } catch (error) {
      setTestResult(prev => prev + `\n❌ Error: ${error}\n`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Email Rate Limit Test</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Test Email Rate Limiting</h2>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of test emails to send
            </label>
            <input
              type="number"
              min="1"
              max="20"
              value={emailCount}
              onChange={(e) => setEmailCount(parseInt(e.target.value) || 5)}
              className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4e37a8] focus:border-transparent"
            />
            <p className="text-sm text-gray-500 mt-1">
              This will send {emailCount} test emails with 2-second delays between each.
            </p>
          </div>
          
          <button
            onClick={testEmailRate}
            disabled={loading}
            className="px-6 py-3 bg-[#4e37a8] text-white rounded-lg hover:bg-purple-700 disabled:opacity-50"
          >
            {loading ? 'Testing...' : `Test ${emailCount} Emails`}
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Test Results</h2>
          
          {testResult && (
            <div className="bg-gray-50 rounded-lg p-4">
              <pre className="text-sm whitespace-pre-wrap font-mono">{testResult}</pre>
            </div>
          )}
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">💡 Rate Limiting Improvements</h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Reduced batch size from 10 to 5 emails</li>
              <li>• Added 2-second delay between individual emails</li>
              <li>• Added 10-second delay between batches</li>
              <li>• Implemented exponential backoff retry logic</li>
              <li>• Added Gmail-specific SMTP configuration</li>
              <li>• Limited to 1 SMTP connection to avoid authentication issues</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
