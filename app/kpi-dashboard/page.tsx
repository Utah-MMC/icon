"use client";

import { useEffect, useState } from 'react';
import ClientDatabase from '../components/ClientDatabase';
import ClientInsights from '../components/ClientInsights';
import BulkEmailOutreach from '../components/BulkEmailOutreach';
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Analytics Dashboard (Last 24h)</h1>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow border p-6">
            <div className="text-sm text-gray-500">Total Events</div>
            <div className="text-3xl font-bold text-[#4e37a8]">{counts.total}</div>
          </div>
          <div className="bg-white rounded-xl shadow border p-6">
            <div className="text-sm text-gray-500">Live Agent</div>
            <div className="text-gray-800">{status?.online ? 'Online' : 'Offline'}</div>
            <div className="text-sm text-gray-600">Queue: {status?.queueSize ?? 0} • ETA: {status?.etaMinutes ?? 0}m</div>
          </div>
          <div className="bg-white rounded-xl shadow border p-6">
            <div className="text-sm text-gray-500">Last Updated</div>
            <div className="text-gray-800">{lastUpdated ? new Date(lastUpdated).toLocaleTimeString() : '-'}</div>
          </div>
          <div className="bg-white rounded-xl shadow border p-6">
            <div className="text-sm text-gray-500">Unique Sessions</div>
            <div className="text-3xl font-bold text-[#4e37a8]">{summary?.sessions ?? 0}</div>
          </div>
          <div className="bg-white rounded-xl shadow border p-6">
            <div className="text-sm text-gray-500">Lead Conversion</div>
            <div className="text-3xl font-bold text-[#4e37a8]">{summary?.conversionRate ?? 0}%</div>
            <div className="text-sm text-gray-600">CTA sessions: {summary?.sessionsWithCTA ?? 0} • Forms: {summary?.sessionsWithForm ?? 0}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow border p-6">
            <h2 className="text-lg font-semibold mb-4">Events by Type</h2>
            <ul className="space-y-2">
              {Object.entries(counts.byType).map(([k, v]) => (
                <li key={k} className="flex items-center justify-between text-sm"><span className="text-gray-700">{k}</span><span className="font-semibold">{v}</span></li>
              ))}
              {Object.keys(counts.byType).length === 0 && <li className="text-gray-500 text-sm">No events yet</li>}
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow border p-6">
            <h2 className="text-lg font-semibold mb-4">Events by Name</h2>
            <ul className="space-y-2 max-h-96 overflow-y-auto">
              {Object.entries(counts.byName).map(([k, v]) => (
                <li key={k} className="flex items-center justify-between text-sm"><span className="text-gray-700">{k}</span><span className="font-semibold">{v}</span></li>
              ))}
              {Object.keys(counts.byName).length === 0 && <li className="text-gray-500 text-sm">No events yet</li>}
            </ul>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow border p-6">
            <h2 className="text-lg font-semibold mb-4">Top Sources</h2>
            <ul className="space-y-2">
              {Object.entries(summary?.utmSources || {}).sort((a,b)=>b[1]-a[1]).slice(0,5).map(([k,v]) => (
                <li key={k} className="flex items-center justify-between text-sm"><span className="text-gray-700">{k || 'direct'}</span><span className="font-semibold">{v}</span></li>
              ))}
              {Object.keys(summary?.utmSources || {}).length === 0 && <li className="text-gray-500 text-sm">No source data</li>}
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow border p-6">
            <h2 className="text-lg font-semibold mb-4">Top Referrers</h2>
            <ul className="space-y-2">
              {Object.entries(summary?.referrers || {}).sort((a,b)=>b[1]-a[1]).slice(0,5).map(([k,v]) => (
                <li key={k} className="flex items-center justify-between text-sm"><span className="text-gray-700">{k}</span><span className="font-semibold">{v}</span></li>
              ))}
              {Object.keys(summary?.referrers || {}).length === 0 && <li className="text-gray-500 text-sm">No referrers</li>}
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow border p-6">
            <h2 className="text-lg font-semibold mb-4">Top Pages</h2>
            <ul className="space-y-2">
              {Object.entries(summary?.paths || {}).sort((a,b)=>b[1]-a[1]).slice(0,5).map(([k,v]) => (
                <li key={k} className="flex items-center justify-between text-sm"><span className="text-gray-700">{k}</span><span className="font-semibold">{v}</span></li>
              ))}
              {Object.keys(summary?.paths || {}).length === 0 && <li className="text-gray-500 text-sm">No page data</li>}
            </ul>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow border p-6">
            <h2 className="text-lg font-semibold mb-4">Top CTAs</h2>
            <ul className="space-y-2">
              {Object.entries(summary?.topCTAs || {}).sort((a,b)=>b[1]-a[1]).slice(0,6).map(([k,v]) => (
                <li key={k} className="flex items-center justify-between text-sm"><span className="text-gray-700">{k}</span><span className="font-semibold">{v}</span></li>
              ))}
              {Object.keys(summary?.topCTAs || {}).length === 0 && <li className="text-gray-500 text-sm">No CTA data</li>}
            </ul>
          </div>
        </div>

        <div className="mt-8 text-sm text-gray-500">Tip: Events automatically attach UTM, session, referrer, and path for attribution.</div>
        
        {/* Client Database Section */}
        <div className="mt-12">
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Client Database Analytics</h2>
            <ClientInsights />
          </div>
        </div>
        
        <div className="mt-8">
          <ClientDatabase />
        </div>
        
        {/* Bulk Email Outreach Section */}
        <div className="mt-12">
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Email Outreach Campaigns</h2>
            <BulkEmailOutreach />
          </div>
        </div>

        {/* Review Analytics Section */}
        <div className="mt-12">
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Review Analytics</h2>
            <ReviewAnalytics />
          </div>
        </div>
      </div>
    </div>
  );
}


