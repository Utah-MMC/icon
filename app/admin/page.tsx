"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch('/api/admin/login', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        credentials: 'include',
        body: JSON.stringify({ password }) 
      });
      const data = await res.json();
      
      if (!res.ok || !data?.ok) {
        if (res.status === 429) {
          setError("Too many login attempts. Please try again in 15 minutes.");
        } else {
          setError("Invalid password");
        }
        return;
      }
      
      // Use router.push instead of window.location.href to preserve cookies
      router.push('/admin-dashboard');
    } catch (error) {
      console.error('Login error:', error);
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white border rounded-xl shadow p-6">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Admin Login</h1>
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
            <p className="text-sm text-red-800">
              <strong>🔒 Secure Access Only</strong><br/>
              Authorized personnel only. All access is logged and monitored.
            </p>
          </div>
        </div>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full border rounded-lg px-3 py-2" placeholder="Enter admin password" autoComplete="new-password" aria-autocomplete="list" />
          </div>
          {error && <div className="text-sm text-red-600">{error}</div>}
          <button disabled={loading} className="w-full bg-[#4e37a8] text-white rounded-lg px-3 py-2 font-semibold hover:bg-purple-700 disabled:opacity-60">{loading ? 'Signing in…' : 'Sign In'}</button>
        </form>
      </div>
    </div>
  );
}
