"use client";

import { useEffect, useState } from 'react';
import ReviewAnalytics from '../components/ReviewAnalytics';

type Counts = { byType: Record<string, number>; byName: Record<string, number>; total: number };
type Summary = { sessions: number; utmSources: Record<string, number>; referrers: Record<string, number>; paths: Record<string, number>; sessionsWithCTA: number; sessionsWithForm: number; conversionRate: number; topCTAs: Record<string, number> };

export default function KPIDashboard() {
  const [counts, setCounts] = useState<Counts>({ byType: {}, byName: {}, total: 0 });
  const [status, setStatus] = useState<{ online: boolean; queueSize: number; etaMinutes: number } | null>(null);
  const [lastUpdated, setLastUpdated] = useState<number>(0);
  const [summary, setSummary] = useState<Summary | null>(null);

  async function refresh() {
    try {
      const res = await fetch('/api/analytics', { cache: 'no-store' });
      const data = await res.json();
      if (data?.counts) setCounts(data.counts);
      if (data?.status) setStatus(data.status);
      if (data?.summary) setSummary(data.summary);
      setLastUpdated(Date.now());
    } catch {}
  }


  useEffect(() => {
    refresh();
    const id = setInterval(refresh, 10000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Icon Dumpsters - Analytics Dashboard</h1>
              <p className="text-gray-600">Business intelligence, performance analytics, and customer insights</p>
              <p className="text-sm text-gray-500 mt-1">Last updated: {lastUpdated ? new Date(lastUpdated).toLocaleTimeString() : 'Never'}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={refresh}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                🔄 Refresh Data
              </button>
              <a
                href="https://icondumpsters.com/admin-dashboard"
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm"
              >
                🔧 Admin Controls
              </a>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="mt-4 flex flex-wrap gap-4">
            <a
              href="https://icondumpsters.com/scraper-dashboard"
              className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors text-sm"
            >
              🕷️ Scraper Dashboard
            </a>
            <a
              href="https://icondumpsters.com/admin-dashboard"
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm"
            >
              🔧 Admin Dashboard
            </a>
            <a
              href="https://icondumpsters.com/inventory"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              📦 Inventory Management
            </a>
            <a
              href="https://icondumpsters.com/email-outreach"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm"
            >
              📧 Email Outreach
            </a>
            <a
              href="https://icondumpsters.com/admin"
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm"
            >
              🔐 Admin Login
            </a>
            <a
              href="https://icondumpsters.com/api-test"
              className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors text-sm"
            >
              🧪 API Testing
            </a>
          </div>
        </div>
        {/* Key Performance Metrics */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Performance Metrics (Last 24h)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl shadow border p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500">Total Events</div>
                  <div className="text-2xl font-bold text-[#4e37a8]">{counts.total}</div>
                </div>
                <div className="text-2xl">📊</div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow border p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500">Unique Sessions</div>
                  <div className="text-2xl font-bold text-[#4e37a8]">{summary?.sessions ?? 0}</div>
                </div>
                <div className="text-2xl">👥</div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow border p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500">Lead Conversion</div>
                  <div className="text-2xl font-bold text-[#4e37a8]">{summary?.conversionRate ?? 0}%</div>
                </div>
                <div className="text-2xl">🎯</div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow border p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500">Live Agent</div>
                  <div className="text-lg font-semibold text-gray-800">{status?.online ? 'Online' : 'Offline'}</div>
                  <div className="text-xs text-gray-600">Queue: {status?.queueSize ?? 0}</div>
                </div>
                <div className="text-2xl">{status?.online ? '🟢' : '🔴'}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Website Analytics */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Website Analytics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl shadow border p-6">
              <h3 className="text-lg font-semibold mb-4">Top Traffic Sources</h3>
              <ul className="space-y-2">
                {Object.entries(summary?.utmSources || {}).sort((a,b)=>b[1]-a[1]).slice(0,5).map(([k,v]) => (
                  <li key={k} className="flex items-center justify-between text-sm">
                    <span className="text-gray-700">{k || 'direct'}</span>
                    <span className="font-semibold text-[#4e37a8]">{v}</span>
                  </li>
                ))}
                {Object.keys(summary?.utmSources || {}).length === 0 && <li className="text-gray-500 text-sm">No source data</li>}
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow border p-6">
              <h3 className="text-lg font-semibold mb-4">Top Referrers</h3>
              <ul className="space-y-2">
                {Object.entries(summary?.referrers || {}).sort((a,b)=>b[1]-a[1]).slice(0,5).map(([k,v]) => (
                  <li key={k} className="flex items-center justify-between text-sm">
                    <span className="text-gray-700">{k}</span>
                    <span className="font-semibold text-[#4e37a8]">{v}</span>
                  </li>
                ))}
                {Object.keys(summary?.referrers || {}).length === 0 && <li className="text-gray-500 text-sm">No referrers</li>}
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow border p-6">
              <h3 className="text-lg font-semibold mb-4">Top Pages</h3>
              <ul className="space-y-2">
                {Object.entries(summary?.paths || {}).sort((a,b)=>b[1]-a[1]).slice(0,5).map(([k,v]) => (
                  <li key={k} className="flex items-center justify-between text-sm">
                    <span className="text-gray-700">{k}</span>
                    <span className="font-semibold text-[#4e37a8]">{v}</span>
                  </li>
                ))}
                {Object.keys(summary?.paths || {}).length === 0 && <li className="text-gray-500 text-sm">No page data</li>}
              </ul>
            </div>
          </div>
        </div>

        {/* Event Analytics */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Event Analytics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow border p-6">
              <h3 className="text-lg font-semibold mb-4">Events by Type</h3>
              <ul className="space-y-2">
                {Object.entries(counts.byType).map(([k, v]) => (
                  <li key={k} className="flex items-center justify-between text-sm">
                    <span className="text-gray-700">{k}</span>
                    <span className="font-semibold text-[#4e37a8]">{v}</span>
                  </li>
                ))}
                {Object.keys(counts.byType).length === 0 && <li className="text-gray-500 text-sm">No events yet</li>}
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow border p-6">
              <h3 className="text-lg font-semibold mb-4">Top CTAs</h3>
              <ul className="space-y-2">
                {Object.entries(summary?.topCTAs || {}).sort((a,b)=>b[1]-a[1]).slice(0,6).map(([k,v]) => (
                  <li key={k} className="flex items-center justify-between text-sm">
                    <span className="text-gray-700">{k}</span>
                    <span className="font-semibold text-[#4e37a8]">{v}</span>
                  </li>
                ))}
                {Object.keys(summary?.topCTAs || {}).length === 0 && <li className="text-gray-500 text-sm">No CTA data</li>}
              </ul>
            </div>
          </div>
        </div>

        
        {/* Business Intelligence Sections */}
        <div className="space-y-8">
          {/* Email Outreach & Client Management Link */}
          <div className="bg-white rounded-xl shadow border p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Email Outreach & Client Management</h2>
            <p className="text-gray-600 mb-4">Manage your client database and send targeted email campaigns</p>
            <a 
              href="/email-outreach" 
              className="inline-flex items-center px-4 py-2 bg-[#4e37a8] text-white rounded-lg hover:bg-[#3d2d8a] transition-colors"
            >
              <span className="mr-2">📧</span>
              View Email Outreach Dashboard
            </a>
          </div>

          {/* Review Analytics */}
          <div className="bg-white rounded-xl shadow border p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Review Analytics</h2>
            <ReviewAnalytics />
          </div>
        </div>
      </div>
    </div>
  );
}


