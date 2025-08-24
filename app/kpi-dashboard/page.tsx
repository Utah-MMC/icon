"use client";

import { useEffect, useState } from 'react';

type Counts = { byType: Record<string, number>; byName: Record<string, number>; total: number };

export default function KPIDashboard() {
  const [counts, setCounts] = useState<Counts>({ byType: {}, byName: {}, total: 0 });
  const [status, setStatus] = useState<{ online: boolean; queueSize: number; etaMinutes: number } | null>(null);
  const [lastUpdated, setLastUpdated] = useState<number>(0);

  async function refresh() {
    try {
      const res = await fetch('/api/analytics', { cache: 'no-store' });
      const data = await res.json();
      if (data?.counts) setCounts(data.counts);
      if (data?.status) setStatus(data.status);
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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

        <div className="mt-8 text-sm text-gray-500">Tip: events are collected via POST /api/analytics with a JSON body like {`{ type: 'cta', name: 'book_hero' }`}.</div>
      </div>
    </div>
  );
}


