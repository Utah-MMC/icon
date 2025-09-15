'use client';

import { useEffect, useState, useCallback } from 'react';
import GoogleAdsReportUpload from './GoogleAdsReportUpload';

interface GoogleAdsMetrics {
  impressions: number;
  clicks: number;
  cost: number;
  conversions: number;
  conversionValue: number;
  ctr: number;
  cpc: number;
  cpa: number;
  roas: number;
  lastUpdated: string;
}

interface CampaignData {
  campaignName: string;
  impressions: number;
  clicks: number;
  cost: number;
  conversions: number;
  conversionValue: number;
  ctr: number;
  cpc: number;
  cpa: number;
  roas: number;
}

export default function GoogleAdsAnalytics() {
  const [metrics, setMetrics] = useState<GoogleAdsMetrics>({
    impressions: 0,
    clicks: 0,
    cost: 0,
    conversions: 0,
    conversionValue: 0,
    ctr: 0,
    cpc: 0,
    cpa: 0,
    roas: 0,
    lastUpdated: ''
  });

  const [campaigns, setCampaigns] = useState<CampaignData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [timeRange, setTimeRange] = useState('last_30_days');

  // Fetch Google Ads data from API
  const fetchGoogleAdsData = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`/api/google-ads?timeRange=${timeRange}`);
      const result = await response.json();
      
      if (result.success) {
        const { metrics, campaigns, lastUpdated } = result.data;
        setMetrics({ ...metrics, lastUpdated });
        setCampaigns(campaigns);
      } else {
        throw new Error(result.error || 'Failed to fetch data');
      }
    } catch (err) {
      setError('Failed to fetch Google Ads data');
      console.error('Google Ads API error:', err);
      
      // Fallback to mock data on error
      const mockData = {
        metrics: {
          impressions: 15420,
          clicks: 892,
          cost: 2847.50,
          conversions: 23,
          conversionValue: 9200,
          ctr: 5.78,
          cpc: 3.19,
          cpa: 123.80,
          roas: 3.23,
          lastUpdated: new Date().toISOString()
        },
        campaigns: [
          {
            campaignName: 'Dumpster Rental - Salt Lake City',
            impressions: 8230,
            clicks: 456,
            cost: 1456.20,
            conversions: 12,
            conversionValue: 4800,
            ctr: 5.54,
            cpc: 3.19,
            cpa: 121.35,
            roas: 3.30
          },
          {
            campaignName: 'Roll Off Dumpster - Utah',
            impressions: 4560,
            clicks: 234,
            cost: 748.30,
            conversions: 7,
            conversionValue: 2800,
            ctr: 5.13,
            cpc: 3.20,
            cpa: 106.90,
            roas: 3.74
          },
          {
            campaignName: 'Construction Dumpster Rental',
            impressions: 2630,
            clicks: 202,
            cost: 642.00,
            conversions: 4,
            conversionValue: 1600,
            ctr: 7.68,
            cpc: 3.18,
            cpa: 160.50,
            roas: 2.49
          }
        ]
      };
      
      setMetrics(mockData.metrics);
      setCampaigns(mockData.campaigns);
    } finally {
      setLoading(false);
    }
  }, [timeRange]);

  useEffect(() => {
    fetchGoogleAdsData();
    
    // Refresh data every 5 minutes
    const interval = setInterval(fetchGoogleAdsData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [timeRange, fetchGoogleAdsData]);

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

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow border p-6">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#4e37a8]"></div>
          <span className="ml-2 text-gray-600">Loading Google Ads data...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-xl shadow border p-6">
        <div className="text-center">
          <div className="text-red-600 mb-2">⚠️ {error}</div>
          <button
            onClick={fetchGoogleAdsData}
            className="bg-[#4e37a8] text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow border p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Google Ads Performance</h2>
            <p className="text-gray-600">Campaign performance and conversion tracking</p>
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="border rounded-lg px-3 py-2 text-sm"
            >
              <option value="last_7_days">Last 7 days</option>
              <option value="last_30_days">Last 30 days</option>
              <option value="last_90_days">Last 90 days</option>
            </select>
            <button
              onClick={fetchGoogleAdsData}
              className="bg-[#4e37a8] text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm"
            >
              🔄 Refresh
            </button>
          </div>
        </div>
        
        <div className="text-sm text-gray-500">
          Last updated: {new Date(metrics.lastUpdated).toLocaleString()}
        </div>
      </div>

      {/* Key Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow border p-4">
          <h3 className="text-sm font-medium text-[#4e37a8] mb-1">Total Spend</h3>
          <p className="text-2xl font-bold text-gray-900">{formatCurrency(metrics.cost)}</p>
          <p className="text-xs text-gray-600">Last 30 days</p>
        </div>
        
        <div className="bg-white rounded-xl shadow border p-4">
          <h3 className="text-sm font-medium text-[#4e37a8] mb-1">Conversions</h3>
          <p className="text-2xl font-bold text-gray-900">{metrics.conversions}</p>
          <p className="text-xs text-gray-600">Quote requests & calls</p>
        </div>
        
        <div className="bg-white rounded-xl shadow border p-4">
          <h3 className="text-sm font-medium text-[#4e37a8] mb-1">Cost Per Acquisition</h3>
          <p className={`text-2xl font-bold ${getPerformanceColor(metrics.cpa, 100, 80)}`}>
            {formatCurrency(metrics.cpa)}
          </p>
          <p className="text-xs text-gray-600">Target: &lt;$100</p>
        </div>
        
        <div className="bg-white rounded-xl shadow border p-4">
          <h3 className="text-sm font-medium text-[#4e37a8] mb-1">ROAS</h3>
          <p className={`text-2xl font-bold ${getPerformanceColor(metrics.roas, 2, 3)}`}>
            {metrics.roas.toFixed(2)}x
          </p>
          <p className="text-xs text-gray-600">Target: &gt;3x</p>
        </div>
      </div>

      {/* Detailed Performance Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Impressions</span>
              <span className="font-semibold">{formatNumber(metrics.impressions)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Clicks</span>
              <span className="font-semibold">{formatNumber(metrics.clicks)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Click-through Rate</span>
              <span className={`font-semibold ${getPerformanceColor(metrics.ctr, 3, 5)}`}>
                {metrics.ctr.toFixed(2)}%
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Cost Per Click</span>
              <span className="font-semibold">{formatCurrency(metrics.cpc)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Conversion Value</span>
              <span className="font-semibold text-green-600">{formatCurrency(metrics.conversionValue)}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Campaign Performance</h3>
          <div className="space-y-3">
            {campaigns.map((campaign, index) => (
              <div key={index} className="border rounded-lg p-3">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-900 text-sm">{campaign.campaignName}</h4>
                  <span className="text-xs text-gray-500">{formatCurrency(campaign.cost)}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Clicks:</span>
                    <span>{campaign.clicks}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Conv:</span>
                    <span>{campaign.conversions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">CPA:</span>
                    <span className={getPerformanceColor(campaign.cpa, 100, 80)}>
                      {formatCurrency(campaign.cpa)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">ROAS:</span>
                    <span className={getPerformanceColor(campaign.roas, 2, 3)}>
                      {campaign.roas.toFixed(1)}x
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Conversion Tracking Status */}
      <div className="bg-white rounded-xl shadow border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Conversion Tracking Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div>
              <div className="font-medium text-gray-900">Quote Form Submissions</div>
              <div className="text-sm text-gray-600">Tracking active</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div>
              <div className="font-medium text-gray-900">Phone Call Clicks</div>
              <div className="text-sm text-gray-600">Tracking active</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <div>
              <div className="font-medium text-gray-900">Google Ads ID</div>
              <div className="text-sm text-gray-600">AW-17497114208</div>
            </div>
          </div>
        </div>
      </div>

      {/* Report Upload Section */}
      <GoogleAdsReportUpload />

      {/* Integration Instructions */}
      <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">📊 Google Ads Data Integration</h3>
        <div className="text-sm text-blue-800 space-y-2">
          <p><strong>Current Status:</strong> Using mock data for demonstration</p>
          <p><strong>Easy Data Import Options:</strong></p>
          <ol className="list-decimal list-inside space-y-1 ml-4">
            <li><strong>CSV Upload:</strong> Export reports from Google Ads and upload above</li>
            <li><strong>Email Reports:</strong> Set up automated reports in Google Ads</li>
            <li><strong>Google Sheets:</strong> Export to Sheets and connect via API</li>
            <li><strong>Direct API:</strong> Full Google Ads API integration (complex)</li>
          </ol>
          <p className="mt-3"><strong>Note:</strong> Conversion tracking is already active and working with your current setup.</p>
        </div>
      </div>
    </div>
  );
}
