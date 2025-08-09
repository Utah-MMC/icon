"use client";

import { useState } from 'react';
import NewsletterSubscription from '../components/NewsletterSubscription';

export default function TestFormspree() {
  const [testMessage, setTestMessage] = useState("");

  const testFormspreeConnection = async () => {
    setTestMessage("Testing Formspree connection...");
    
    try {
      const formData = new FormData();
      formData.append('email', 'test@example.com');
      formData.append('_subject', 'Test Message - Formspree Connection');
      formData.append('message', 'This is a test message to verify Formspree connection is working.');

      const response = await fetch("https://formspree.io/f/xanblnyj", {
        method: "POST",
        body: formData,
        mode: 'no-cors',
      });

      setTestMessage("✅ Formspree connection test successful! Check your Formspree dashboard for the test message.");
      console.log('Formspree test successful:', response);
    } catch (error) {
      setTestMessage("❌ Formspree connection test failed. Error: " + error);
      console.error('Formspree test failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Formspree Integration Test</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Test Formspree Connection</h2>
          <button 
            onClick={testFormspreeConnection}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Test Formspree Connection
          </button>
          {testMessage && (
            <div className="mt-4 p-4 rounded-lg bg-gray-100">
              <p className="text-sm">{testMessage}</p>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Newsletter Subscription Test</h2>
          <p className="text-gray-600 mb-4">
            Test the newsletter subscription component below:
          </p>
          <div className="max-w-md">
            <NewsletterSubscription />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Formspree Configuration</h2>
          <div className="space-y-2 text-sm text-gray-600">
            <p><strong>Endpoint:</strong> https://formspree.io/f/xanblnyj</p>
            <p><strong>Method:</strong> POST</p>
            <p><strong>Mode:</strong> no-cors</p>
            <p><strong>Content Type:</strong> multipart/form-data</p>
          </div>
        </div>
      </div>
    </div>
  );
}
