"use client";

import { useState } from 'react';

export default function TestIndexNowPage() {
  const [urls, setUrls] = useState('https://icondumpsters.com/\nhttps://icondumpsters.com/about\nhttps://icondumpsters.com/dumpster-sizes');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setResults(null);

    try {
      const urlList = urls.split('\n').filter(url => url.trim());
      
      const response = await fetch('/api/indexnow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ urls: urlList }),
      });

      const data = await response.json();
      setResults(data);
    } catch (error) {
      setResults({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  const checkStatus = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/indexnow');
      const data = await response.json();
      setResults(data);
    } catch (error) {
      setResults({ error: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            IndexNow Test Page
          </h1>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Test IndexNow API
            </h2>
            <p className="text-gray-600 mb-4">
              This page allows you to test the IndexNow API integration for submitting URLs to search engines.
            </p>
          </div>

          <div className="space-y-6">
            {/* Status Check */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Check IndexNow Status
              </h3>
              <button
                onClick={checkStatus}
                disabled={loading}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
              >
                {loading ? 'Checking...' : 'Check Status'}
              </button>
            </div>

            {/* URL Submission */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Submit URLs to IndexNow
              </h3>
              
              <div className="mb-4">
                <label htmlFor="urls" className="block text-sm font-medium text-gray-700 mb-2">
                  URLs (one per line):
                </label>
                <textarea
                  id="urls"
                  value={urls}
                  onChange={(e) => setUrls(e.target.value)}
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter URLs, one per line..."
                />
              </div>
              
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50"
              >
                {loading ? 'Submitting...' : 'Submit to IndexNow'}
              </button>
            </div>

            {/* Results */}
            {results && (
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Results
                </h3>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-auto text-sm">
                  {JSON.stringify(results, null, 2)}
                </pre>
              </div>
            )}
          </div>

          {/* Instructions */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">
              Setup Instructions
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-blue-800">
              <li>Upload <code>indexnow-key.txt</code> to your website root</li>
              <li>Verify the key file is accessible at <code>https://icondumpsters.com/indexnow-key.txt</code></li>
              <li>Add your key to Google Search Console and Bing Webmaster Tools</li>
              <li>Test the submission with a few URLs first</li>
              <li>Monitor results in search console tools</li>
            </ol>
          </div>

          {/* Key Information */}
          <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              IndexNow Configuration
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong>API Key:</strong> icondumpsters-2024-seo-key
              </div>
              <div>
                <strong>Key Location:</strong> https://icondumpsters.com/indexnow-key.txt
              </div>
              <div>
                <strong>Host:</strong> icondumpsters.com
              </div>
              <div>
                <strong>Endpoints:</strong> IndexNow, Bing, Yandex
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
