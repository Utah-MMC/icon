'use client';

import { useState, useRef } from 'react';

interface KeywordData {
  keyword: string;
  matchType: string;
  status: string;
  statusReasons: string;
  conversions: number;
  clicks: number;
  impressions: number;
  ctr: number;
  avgCpc: number;
  cost: number;
  costPerConversion: number;
  finalUrl: string;
}

interface KeywordMetrics {
  totalClicks: number;
  totalImpressions: number;
  totalCost: number;
  totalConversions: number;
  overallCTR: number;
  overallCPC: number;
  overallCPA: number;
  topPerformingKeywords: Array<{ keyword: string; clicks: number; conversions: number; cost: number; ctr: number; cpc: number }>;
  keywordPerformance: Record<string, { clicks: number; impressions: number; cost: number; conversions: number; ctr: number; cpc: number }>;
  matchTypePerformance: Record<string, { clicks: number; impressions: number; cost: number; conversions: number }>;
  statusBreakdown: Record<string, number>;
}

export default function GoogleAdsKeywordAnalytics() {
  const [keywordData, setKeywordData] = useState<KeywordData[]>([]);
  const [metrics, setMetrics] = useState<KeywordMetrics | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const parseCSV = (csvText: string): KeywordData[] => {
    const lines = csvText.split('\n');
    
    // Find the header row (usually line 3 in Google Ads reports)
    let headerIndex = -1;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('Keyword') && lines[i].includes('Clicks')) {
        headerIndex = i;
        break;
      }
    }
    
    if (headerIndex === -1) {
      throw new Error('Could not find header row in CSV file');
    }
    
    const headers = lines[headerIndex].split(',').map(h => h.trim().replace(/"/g, ''));
    
    // Find column indices
    const getColumnIndex = (name: string) => {
      return headers.findIndex(h => 
        h.toLowerCase().includes(name.toLowerCase())
      );
    };

    const keywordIndex = getColumnIndex('keyword');
    const matchTypeIndex = getColumnIndex('match type');
    const statusIndex = getColumnIndex('status');
    const statusReasonsIndex = getColumnIndex('status reasons');
    const conversionsIndex = getColumnIndex('conversions');
    const clicksIndex = getColumnIndex('clicks');
    const impressionsIndex = getColumnIndex('impr');
    const ctrIndex = getColumnIndex('ctr');
    const avgCpcIndex = getColumnIndex('avg. cpc');
    const costIndex = getColumnIndex('cost');
    const costPerConversionIndex = getColumnIndex('cost / conv');
    const finalUrlIndex = getColumnIndex('final url');

    const data: KeywordData[] = [];

    for (let i = headerIndex + 1; i < lines.length; i++) {
      if (lines[i].trim() && !lines[i].includes('Total:')) {
        const values = lines[i].split(',').map(v => v.trim().replace(/"/g, ''));
        
        if (values.length > Math.max(keywordIndex, clicksIndex, impressionsIndex, costIndex)) {
          const keyword = values[keywordIndex] || '';
          const matchType = values[matchTypeIndex] || '';
          const status = values[statusIndex] || '';
          const statusReasons = values[statusReasonsIndex] || '';
          const conversions = parseFloat(values[conversionsIndex] || '0');
          const clicks = parseInt(values[clicksIndex] || '0');
          const impressions = parseInt(values[impressionsIndex] || '0');
          const ctr = parseFloat(values[ctrIndex]?.replace('%', '') || '0');
          const avgCpc = parseFloat(values[avgCpcIndex] || '0');
          const cost = parseFloat(values[costIndex] || '0');
          const costPerConversion = parseFloat(values[costPerConversionIndex] || '0');
          const finalUrl = values[finalUrlIndex] || '';

          // Only include actual keywords (not totals or empty rows)
          if (keyword && keyword !== '--' && !keyword.includes('Total:')) {
            data.push({
              keyword,
              matchType,
              status,
              statusReasons,
              conversions,
              clicks,
              impressions,
              ctr,
              avgCpc,
              cost,
              costPerConversion,
              finalUrl
            });
          }
        }
      }
    }

    return data;
  };

  const calculateMetrics = (data: KeywordData[]): KeywordMetrics => {
    const totalClicks = data.reduce((sum, keyword) => sum + keyword.clicks, 0);
    const totalImpressions = data.reduce((sum, keyword) => sum + keyword.impressions, 0);
    const totalCost = data.reduce((sum, keyword) => sum + keyword.cost, 0);
    const totalConversions = data.reduce((sum, keyword) => sum + keyword.conversions, 0);
    
    const overallCTR = totalImpressions > 0 ? (totalClicks / totalImpressions) * 100 : 0;
    const overallCPC = totalClicks > 0 ? totalCost / totalClicks : 0;
    const overallCPA = totalConversions > 0 ? totalCost / totalConversions : 0;

    // Top performing keywords (by clicks)
    const topPerformingKeywords = data
      .filter(k => k.clicks > 0)
      .sort((a, b) => b.clicks - a.clicks)
      .slice(0, 10)
      .map(k => ({
        keyword: k.keyword,
        clicks: k.clicks,
        conversions: k.conversions,
        cost: k.cost,
        ctr: k.ctr,
        cpc: k.avgCpc
      }));

    // Keyword performance summary
    const keywordPerformance: Record<string, { clicks: number; impressions: number; cost: number; conversions: number; ctr: number; cpc: number }> = {};
    data.forEach(k => {
      const cleanKeyword = k.keyword.replace(/[\[\]"]/g, '').toLowerCase();
      if (!keywordPerformance[cleanKeyword]) {
        keywordPerformance[cleanKeyword] = { clicks: 0, impressions: 0, cost: 0, conversions: 0, ctr: 0, cpc: 0 };
      }
      keywordPerformance[cleanKeyword].clicks += k.clicks;
      keywordPerformance[cleanKeyword].impressions += k.impressions;
      keywordPerformance[cleanKeyword].cost += k.cost;
      keywordPerformance[cleanKeyword].conversions += k.conversions;
    });

    // Calculate averages for keyword performance
    Object.keys(keywordPerformance).forEach(keyword => {
      const perf = keywordPerformance[keyword];
      perf.ctr = perf.impressions > 0 ? (perf.clicks / perf.impressions) * 100 : 0;
      perf.cpc = perf.clicks > 0 ? perf.cost / perf.clicks : 0;
    });

    // Match type performance
    const matchTypePerformance: Record<string, { clicks: number; impressions: number; cost: number; conversions: number }> = {};
    data.forEach(k => {
      if (!matchTypePerformance[k.matchType]) {
        matchTypePerformance[k.matchType] = { clicks: 0, impressions: 0, cost: 0, conversions: 0 };
      }
      matchTypePerformance[k.matchType].clicks += k.clicks;
      matchTypePerformance[k.matchType].impressions += k.impressions;
      matchTypePerformance[k.matchType].cost += k.cost;
      matchTypePerformance[k.matchType].conversions += k.conversions;
    });

    // Status breakdown
    const statusBreakdown: Record<string, number> = {};
    data.forEach(k => {
      statusBreakdown[k.status] = (statusBreakdown[k.status] || 0) + 1;
    });

    return {
      totalClicks,
      totalImpressions,
      totalCost,
      totalConversions,
      overallCTR,
      overallCPC,
      overallCPA,
      topPerformingKeywords,
      keywordPerformance,
      matchTypePerformance,
      statusBreakdown
    };
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const text = await file.text();
      const parsedData = parseCSV(text);
      
      if (parsedData.length === 0) {
        throw new Error('No valid keyword data found in CSV file');
      }

      const calculatedMetrics = calculateMetrics(parsedData);
      
      setKeywordData(parsedData);
      setMetrics(calculatedMetrics);
      
      // Save to localStorage for persistence
      localStorage.setItem('googleAdsKeywordData', JSON.stringify({
        data: parsedData,
        metrics: calculatedMetrics,
        uploadedAt: new Date().toISOString(),
        fileName: file.name
      }));

      setSuccess(`Successfully uploaded ${parsedData.length} keyword records from ${file.name}`);
      
      // Send to API for processing
      await fetch('/api/google-ads-keywords/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: parsedData, metrics: calculatedMetrics, fileName: file.name })
      });

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to process CSV file');
    } finally {
      setLoading(false);
    }
  };

  const loadStoredData = () => {
    const stored = localStorage.getItem('googleAdsKeywordData');
    if (stored) {
      try {
        const { data, metrics: storedMetrics, uploadedAt, fileName } = JSON.parse(stored);
        setKeywordData(data);
        setMetrics(storedMetrics);
        setSuccess(`Loaded ${data.length} records from ${fileName} (uploaded ${new Date(uploadedAt).toLocaleString()})`);
      } catch (err) {
        setError('Failed to load stored data');
      }
    }
  };

  const clearData = () => {
    setKeywordData([]);
    setMetrics(null);
    localStorage.removeItem('googleAdsKeywordData');
    setSuccess(null);
    setError(null);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const getPerformanceColor = (value: number, good: number, excellent: number) => {
    if (value >= excellent) return 'text-green-600';
    if (value >= good) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      {/* Upload Section */}
      <div className="bg-white rounded-xl shadow border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">🔍 Google Ads Keyword Analytics</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Google Ads Search Keyword Report
            </label>
            <input
              ref={fileInputRef}
              type="file"
              accept=".csv"
              onChange={handleFileUpload}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#4e37a8] file:text-white hover:file:bg-purple-700"
            />
          </div>

          <div className="flex space-x-3">
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={loading}
              className="bg-[#4e37a8] text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
            >
              {loading ? 'Processing...' : '📁 Choose File'}
            </button>
            
            <button
              onClick={loadStoredData}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              📂 Load Stored Data
            </button>
            
            {keywordData.length > 0 && (
              <button
                onClick={clearData}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                🗑️ Clear Data
              </button>
            )}
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <div className="text-red-800 text-sm">⚠️ {error}</div>
            </div>
          )}

          {success && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <div className="text-green-800 text-sm">✅ {success}</div>
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-medium text-blue-900 mb-2">📋 How to Export from Google Ads:</h4>
          <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
            <li>Go to Google Ads → Keywords</li>
            <li>Click "Reports" → "Search keywords"</li>
            <li>Select date range and columns:
              <ul className="ml-4 mt-1 space-y-1 list-disc">
                <li>Keyword</li>
                <li>Match type</li>
                <li>Status</li>
                <li>Conversions</li>
                <li>Clicks</li>
                <li>Impressions</li>
                <li>CTR</li>
                <li>Avg. CPC</li>
                <li>Cost</li>
              </ul>
            </li>
            <li>Export as CSV</li>
            <li>Upload the file above</li>
          </ol>
        </div>
      </div>

      {/* Metrics Display */}
      {metrics && (
        <div className="space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl shadow border p-4">
              <h3 className="text-sm font-medium text-[#4e37a8] mb-1">Total Clicks</h3>
              <p className="text-2xl font-bold text-gray-900">{formatNumber(metrics.totalClicks)}</p>
              <p className="text-xs text-gray-600">{formatNumber(metrics.totalImpressions)} impressions</p>
            </div>
            
            <div className="bg-white rounded-xl shadow border p-4">
              <h3 className="text-sm font-medium text-[#4e37a8] mb-1">Total Cost</h3>
              <p className="text-2xl font-bold text-gray-900">{formatCurrency(metrics.totalCost)}</p>
              <p className="text-xs text-gray-600">{formatCurrency(metrics.overallCPC)} avg CPC</p>
            </div>
            
            <div className="bg-white rounded-xl shadow border p-4">
              <h3 className="text-sm font-medium text-[#4e37a8] mb-1">Conversions</h3>
              <p className="text-2xl font-bold text-gray-900">{metrics.totalConversions}</p>
              <p className="text-xs text-gray-600">{formatCurrency(metrics.overallCPA)} cost per conversion</p>
            </div>
            
            <div className="bg-white rounded-xl shadow border p-4">
              <h3 className="text-sm font-medium text-[#4e37a8] mb-1">CTR</h3>
              <p className={`text-2xl font-bold ${getPerformanceColor(metrics.overallCTR, 2, 5)}`}>
                {metrics.overallCTR.toFixed(2)}%
              </p>
              <p className="text-xs text-gray-600">Click-through rate</p>
            </div>
          </div>

          {/* Top Performing Keywords */}
          <div className="bg-white rounded-xl shadow border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Keywords</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Keyword</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Clicks</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Impressions</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CTR</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CPC</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conversions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {metrics.topPerformingKeywords.map((keyword, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {keyword.keyword}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {keyword.clicks}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatNumber(keyword.clicks / (keyword.ctr / 100))}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className={getPerformanceColor(keyword.ctr, 2, 5)}>
                          {keyword.ctr.toFixed(2)}%
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatCurrency(keyword.cpc)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatCurrency(keyword.cost)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className={keyword.conversions > 0 ? 'text-green-600 font-semibold' : 'text-gray-500'}>
                          {keyword.conversions}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Match Type Performance */}
          <div className="bg-white rounded-xl shadow border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance by Match Type</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(metrics.matchTypePerformance).map(([matchType, data]) => (
                <div key={matchType} className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">{matchType}</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Clicks:</span>
                      <span className="font-semibold">{data.clicks}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Impressions:</span>
                      <span className="font-semibold">{formatNumber(data.impressions)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cost:</span>
                      <span className="font-semibold text-green-600">{formatCurrency(data.cost)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Conversions:</span>
                      <span className="font-semibold">{data.conversions}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Status Breakdown */}
          <div className="bg-white rounded-xl shadow border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Keyword Status Breakdown</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(metrics.statusBreakdown).map(([status, count]) => (
                <div key={status} className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">{status}</h4>
                  <p className="text-2xl font-bold text-[#4e37a8]">{count}</p>
                  <p className="text-xs text-gray-600">keywords</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
