"use client";

import { useEffect, useState } from 'react';
import ClientDatabase from '../components/ClientDatabase';
import ClientInsights from '../components/ClientInsights';
import BulkEmailOutreach from '../components/BulkEmailOutreach';
import ReviewAnalytics from '../components/ReviewAnalytics';

export default function EmailOutreachPage() {
  const [showClientDatabase, setShowClientDatabase] = useState(true);
  const [activeTab, setActiveTab] = useState<'outreach' | 'database' | 'analytics'>('outreach');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Email Outreach & Client Management</h1>
              <p className="text-gray-600">Manage your client database and send targeted email campaigns</p>
            </div>
            <div className="flex gap-2">
              <a
                href="https://icondumpsters.com/kpi-dashboard"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                📊 KPI Dashboard
              </a>
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
              href="https://icondumpsters.com/inventory"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              📦 Inventory Management
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

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('outreach')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'outreach'
                    ? 'border-[#4e37a8] text-[#4e37a8]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                📧 Email Outreach
              </button>
              <button
                onClick={() => setActiveTab('database')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'database'
                    ? 'border-[#4e37a8] text-[#4e37a8]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                👥 Client Database
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'analytics'
                    ? 'border-[#4e37a8] text-[#4e37a8]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                📊 Analytics
              </button>
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-8">
          {/* Email Outreach Tab */}
          {activeTab === 'outreach' && (
            <div className="bg-white rounded-xl shadow border p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Email Outreach Campaigns</h2>
                <button
                  onClick={() => setShowClientDatabase(!showClientDatabase)}
                  className="bg-[#4e37a8] text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm"
                >
                  {showClientDatabase ? 'Hide' : 'Show'} Client Database
                </button>
              </div>
              
              {/* Client Database - Conditionally Rendered */}
              {showClientDatabase && (
                <div className="mb-6 border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Client Database Management</h3>
                  <ClientDatabase />
                </div>
              )}
              
              {/* Email Outreach */}
              <BulkEmailOutreach />
            </div>
          )}

          {/* Client Database Tab */}
          {activeTab === 'database' && (
            <div className="bg-white rounded-xl shadow border p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Client Database Management</h2>
              <ClientDatabase />
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="space-y-8">
              {/* Client Database Analytics */}
              <div className="bg-white rounded-xl shadow border p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Client Database Analytics</h2>
                <ClientInsights />
              </div>
              
              {/* Review Analytics */}
              <div className="bg-white rounded-xl shadow border p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Review Analytics</h2>
                <ReviewAnalytics />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
