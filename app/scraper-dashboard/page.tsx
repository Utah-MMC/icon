"use client";

import { useEffect, useState } from 'react';
import AdminAuthGuard from '../components/AdminAuthGuard';

interface ScraperData {
  leads?: any[];
  competitors?: any[];
  analytics?: any;
  insights?: any;
  lastRun?: string;
  summary?: {
    totalLeads: number;
    totalCompetitors: number;
    lastUpdated: string;
    dataQuality?: any;
    industries?: number;
    serviceAreas?: number;
    highPriorityLeads?: number;
    newLeads?: number;
    averageScore?: number;
  };
}

export default function ScraperDashboard() {
  const [scraperData, setScraperData] = useState<ScraperData | null>(null);
  const [scraperStatus, setScraperStatus] = useState<'idle' | 'running' | 'completed' | 'error'>('idle');
  const [scraperLogs, setScraperLogs] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'leads' | 'competitors' | 'analytics' | 'insights' | 'facebook-leads' | 'logs'>('analytics');
  
  // Pagination and selection state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [selectedLeads, setSelectedLeads] = useState<Set<number>>(new Set());
  const [selectedCompetitors, setSelectedCompetitors] = useState<Set<number>>(new Set());
  const [selectedFacebookLeads, setSelectedFacebookLeads] = useState<Set<number>>(new Set());
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteType, setDeleteType] = useState<'leads' | 'competitors' | 'facebook-leads'>('leads');
  const [facebookLeads, setFacebookLeads] = useState<any[]>([]);
  const [facebookLeadsSummary, setFacebookLeadsSummary] = useState<any>(null);

  async function runLeadGeneration() {
    setScraperStatus('running');
    setScraperLogs(['Starting lead generation...']);
    
    try {
      const response = await fetch('/api/scraper/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'generate_leads' })
      });
      
      if (response.ok) {
        const data = await response.json();
        setScraperStatus('completed');
        setScraperLogs(prev => [...prev, 'Lead generation completed successfully!', `Generated ${data.totalLeads || 0} total leads`, `High priority: ${data.highPriorityLeads || 0}`]);
        setActiveTab('leads');
        
        // Refresh the data to show the new leads
        await loadScraperData();
      } else {
        throw new Error('Failed to generate leads');
      }
    } catch (error) {
      setScraperStatus('error');
      setScraperLogs(prev => [...prev, `Error: ${error}`]);
    }
  }

  async function runFacebookLeadGeneration() {
    setScraperStatus('running');
    setScraperLogs(['Starting Facebook lead generation...']);
    
    try {
      const response = await fetch('/api/scraper/facebook-leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'generate_facebook_leads' })
      });
      
      if (response.ok) {
        const data = await response.json();
        setScraperLogs(prev => [...prev, 'Facebook lead generation completed successfully!', `Generated ${data.totalLeads || 0} Facebook leads`, `High priority: ${data.highPriorityLeads || 0}`]);
        setActiveTab('facebook-leads');
        
        // Refresh the Facebook leads data
        await loadFacebookLeads();
      } else {
        throw new Error('Failed to generate Facebook leads');
      }
    } catch (error) {
      setScraperStatus('error');
      setScraperLogs(prev => [...prev, `Error: ${error}`]);
    }
  }

  async function runCompetitorAnalysis() {
    setScraperStatus('running');
    setScraperLogs(['Starting competitor analysis...']);
    
    try {
      const response = await fetch('/api/scraper/competitors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'analyze_competitors' })
      });
      
      if (response.ok) {
        const data = await response.json();
        setScraperData(prev => ({ 
          ...prev, 
          competitors: data.competitors, 
          analytics: data.analytics,
          insights: data.insights,
          lastRun: new Date().toISOString() 
        }));
        setScraperStatus('completed');
        setScraperLogs(prev => [...prev, 'Competitor analysis completed successfully!', `Analyzed ${data.competitors?.length || 0} competitors`, 'Generated advanced insights and analytics']);
        setActiveTab('insights');
      } else {
        throw new Error('Failed to analyze competitors');
      }
    } catch (error) {
      setScraperStatus('error');
      setScraperLogs(prev => [...prev, `Error: ${error}`]);
    }
  }

  async function loadScraperData() {
    try {
      // Load competitor data
      const competitorResponse = await fetch('/api/scraper/data');
      let competitorData = null;
      if (competitorResponse.ok) {
        competitorData = await competitorResponse.json();
      }
      
      // Load lead data
      const leadResponse = await fetch('/api/scraper/leads');
      let leadData = null;
      if (leadResponse.ok) {
        leadData = await leadResponse.json();
      }
      
      // Combine the data
      const combinedData = {
        ...competitorData,
        leads: leadData?.leads || [],
        summary: {
          ...competitorData?.summary,
          totalLeads: leadData?.summary?.totalLeads || 0,
          highPriorityLeads: leadData?.summary?.highPriorityLeads || 0,
          newLeads: leadData?.summary?.newLeads || 0,
          averageScore: leadData?.summary?.averageScore || 0
        }
      };
      
      setScraperData(combinedData);
      setScraperLogs(prev => [...prev, 'Scraper data loaded successfully', `Loaded ${leadData?.leads?.length || 0} leads`]);
    } catch (error) {
      setScraperLogs(prev => [...prev, `Error loading data: ${error}`]);
    }
  }

  async function loadFacebookLeads() {
    try {
      const response = await fetch('/api/scraper/facebook-leads');
      if (response.ok) {
        const data = await response.json();
        setFacebookLeads(data.leads || []);
        setFacebookLeadsSummary(data.summary || {});
        setScraperLogs(prev => [...prev, 'Facebook leads loaded successfully', `Loaded ${data.leads?.length || 0} Facebook leads`]);
      } else {
        setScraperLogs(prev => [...prev, 'Error loading Facebook leads']);
      }
    } catch (error) {
      setScraperLogs(prev => [...prev, `Error loading Facebook leads: ${error}`]);
    }
  }

  function exportData(format: 'csv' | 'json') {
    if (!scraperData) return;
    
    let dataToExport: any;
    let filename: string;
    let mimeType: string;
    
    if (format === 'csv') {
      // Export competitors as CSV
      const headers = ['Company Name', 'Website', 'Phone', 'Email', 'Industry', 'Service Areas', 'Specializations', 'Social Media', 'Year Established', 'Certifications'];
      const csvContent = [
        headers.join(','),
        ...(scraperData.competitors || []).map(comp => [
          `"${comp.company_name || ''}"`,
          `"${comp.url || ''}"`,
          `"${comp.phone || ''}"`,
          `"${comp.email || ''}"`,
          `"${comp.industry || ''}"`,
          `"${comp.service_areas || ''}"`,
          `"${comp.specializations || ''}"`,
          `"${comp.social_media || ''}"`,
          `"${comp.year_established || ''}"`,
          `"${comp.certifications || ''}"`
        ].join(','))
      ].join('\n');
      
      dataToExport = csvContent;
      filename = `competitor-analysis-${new Date().toISOString().split('T')[0]}.csv`;
      mimeType = 'text/csv';
    } else {
      // Export full data as JSON
      dataToExport = JSON.stringify(scraperData, null, 2);
      filename = `scraper-data-${new Date().toISOString().split('T')[0]}.json`;
      mimeType = 'application/json';
    }
    
    const blob = new Blob([dataToExport], { type: mimeType });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    setScraperLogs(prev => [...prev, `Data exported as ${format.toUpperCase()}: ${filename}`]);
  }

  // Pagination functions
  function getCurrentPageData() {
    if (!scraperData?.leads) return [];
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return scraperData.leads.slice(startIndex, endIndex);
  }

  function getCurrentPageCompetitors() {
    if (!scraperData?.competitors) return [];
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return scraperData.competitors.slice(startIndex, endIndex);
  }

  function getCurrentPageFacebookLeads() {
    if (!facebookLeads) return [];
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return facebookLeads.slice(startIndex, endIndex);
  }

  function getTotalPages() {
    if (activeTab === 'leads') {
      if (!scraperData?.leads) return 0;
      return Math.ceil(scraperData.leads.length / itemsPerPage);
    } else if (activeTab === 'competitors') {
      if (!scraperData?.competitors) return 0;
      return Math.ceil(scraperData.competitors.length / itemsPerPage);
    } else if (activeTab === 'facebook-leads') {
      if (!facebookLeads) return 0;
      return Math.ceil(facebookLeads.length / itemsPerPage);
    }
    return 0;
  }

  // Selection functions
  function toggleLeadSelection(index: number) {
    const newSelected = new Set(selectedLeads);
    if (newSelected.has(index)) {
      newSelected.delete(index);
    } else {
      newSelected.add(index);
    }
    setSelectedLeads(newSelected);
  }

  function toggleCompetitorSelection(index: number) {
    const newSelected = new Set(selectedCompetitors);
    if (newSelected.has(index)) {
      newSelected.delete(index);
    } else {
      newSelected.add(index);
    }
    setSelectedCompetitors(newSelected);
  }

  function selectAllLeads() {
    const currentPageData = getCurrentPageData();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const allIndices = currentPageData.map((_, i) => startIndex + i);
    setSelectedLeads(new Set(allIndices));
  }

  function selectAllCompetitors() {
    const currentPageData = getCurrentPageCompetitors();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const allIndices = currentPageData.map((_, i) => startIndex + i);
    setSelectedCompetitors(new Set(allIndices));
  }

  function toggleFacebookLeadSelection(index: number) {
    const newSelected = new Set(selectedFacebookLeads);
    if (newSelected.has(index)) {
      newSelected.delete(index);
    } else {
      newSelected.add(index);
    }
    setSelectedFacebookLeads(newSelected);
  }

  function selectAllFacebookLeads() {
    const currentPageData = getCurrentPageFacebookLeads();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const allIndices = currentPageData.map((_, i) => startIndex + i);
    setSelectedFacebookLeads(new Set(allIndices));
  }

  function clearSelection() {
    setSelectedLeads(new Set());
    setSelectedCompetitors(new Set());
    setSelectedFacebookLeads(new Set());
  }

  function getSelectedCount() {
    if (activeTab === 'leads') return selectedLeads.size;
    if (activeTab === 'competitors') return selectedCompetitors.size;
    if (activeTab === 'facebook-leads') return selectedFacebookLeads.size;
    return 0;
  }

  function getSelectedItems() {
    if (activeTab === 'leads') return selectedLeads;
    if (activeTab === 'competitors') return selectedCompetitors;
    if (activeTab === 'facebook-leads') return selectedFacebookLeads;
    return new Set();
  }

  // Delete function
  async function deleteSelectedItems() {
    const selectedCount = getSelectedCount();
    if (selectedCount === 0) return;
    
    try {
      if (deleteType === 'leads') {
        const response = await fetch('/api/scraper/leads', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            action: 'delete_leads',
            leadIds: Array.from(selectedLeads)
          })
        });
        
        if (response.ok) {
          setScraperLogs(prev => [...prev, `Deleted ${selectedLeads.size} leads successfully`]);
          setSelectedLeads(new Set());
          setShowDeleteConfirm(false);
          // Refresh the data
          await loadScraperData();
        } else {
          throw new Error('Failed to delete leads');
        }
      } else if (deleteType === 'competitors') {
        const response = await fetch('/api/scraper/competitors', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            action: 'delete_competitors',
            competitorIds: Array.from(selectedCompetitors)
          })
        });
        
        if (response.ok) {
          setScraperLogs(prev => [...prev, `Deleted ${selectedCompetitors.size} competitors successfully`]);
          setSelectedCompetitors(new Set());
          setShowDeleteConfirm(false);
          // Refresh the data
          await loadScraperData();
        } else {
          throw new Error('Failed to delete competitors');
        }
      } else if (deleteType === 'facebook-leads') {
        const response = await fetch('/api/scraper/facebook-leads', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            action: 'delete_facebook_leads',
            leadIds: Array.from(selectedFacebookLeads)
          })
        });
        
        if (response.ok) {
          setScraperLogs(prev => [...prev, `Deleted ${selectedFacebookLeads.size} Facebook leads successfully`]);
          setSelectedFacebookLeads(new Set());
          setShowDeleteConfirm(false);
          // Refresh the Facebook leads data
          await loadFacebookLeads();
        } else {
          throw new Error('Failed to delete Facebook leads');
        }
      }
    } catch (error) {
      setScraperLogs(prev => [...prev, `Error deleting ${deleteType}: ${error}`]);
    }
  }

  useEffect(() => {
    loadScraperData();
    loadFacebookLeads();
  }, []);

  // Reset pagination when switching tabs
  useEffect(() => {
    setCurrentPage(1);
    clearSelection();
  }, [activeTab]);

  return (
    <AdminAuthGuard>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Icon Dumpsters - Scraper Dashboard</h1>
              <p className="text-gray-600">Lead generation and competitor analysis tools</p>
              <p className="text-sm text-gray-500 mt-1">Last updated: {scraperData?.lastRun ? new Date(scraperData.lastRun).toLocaleString() : 'Never'}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={loadScraperData}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                🔄 Refresh Data
              </button>
              <button
                onClick={() => exportData('csv')}
                disabled={!scraperData?.competitors?.length}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 disabled:bg-gray-400 transition-colors text-sm"
              >
                📊 Export CSV
              </button>
              <button
                onClick={() => exportData('json')}
                disabled={!scraperData}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 disabled:bg-gray-400 transition-colors text-sm"
              >
                💾 Export JSON
              </button>
              <a
                href="https://icondumpsters.com/admin-dashboard"
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm"
              >
                🔧 Admin Dashboard
              </a>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="mt-4 flex flex-wrap gap-4">
            <a
              href="https://icondumpsters.com/admin-dashboard"
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm"
            >
              🔧 Admin Dashboard
            </a>
            <a
              href="https://icondumpsters.com/kpi-dashboard"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
            >
              📊 Analytics Dashboard
            </a>
            <a
              href="https://icondumpsters.com/inventory"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              📦 Inventory Management
            </a>
          </div>
        </div>

        {/* Advanced Stats Summary */}
        {scraperData?.summary && (
          <div className="mb-8">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-lg p-6 text-white">
              <h2 className="text-2xl font-bold mb-4">🚀 Advanced Scraper Performance</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">{scraperData.summary.totalCompetitors}</div>
                  <div className="text-sm opacity-90">Competitors Analyzed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">{scraperData.summary.industries}</div>
                  <div className="text-sm opacity-90">Industries Mapped</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">{scraperData.summary.serviceAreas}</div>
                  <div className="text-sm opacity-90">Service Areas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">{scraperData.summary.dataQuality?.hasPhone}%</div>
                  <div className="text-sm opacity-90">Phone Coverage</div>
                </div>
              </div>
              <div className="mt-4 text-sm opacity-90">
                Last Analysis: {new Date(scraperData.summary.lastUpdated).toLocaleString()}
              </div>
            </div>
          </div>
        )}

        {/* Scraper Controls */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Scraper Operations</h2>
          <div className="bg-white rounded-xl shadow border p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={runLeadGeneration}
                disabled={scraperStatus === 'running'}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 disabled:bg-gray-400 transition-colors text-sm font-medium"
              >
                {scraperStatus === 'running' ? '🔄 Running...' : '🎯 Generate Leads'}
              </button>
              <button
                onClick={runCompetitorAnalysis}
                disabled={scraperStatus === 'running'}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition-colors text-sm font-medium"
              >
                {scraperStatus === 'running' ? '🔄 Running...' : '🏢 Analyze Competitors'}
              </button>
              <button
                onClick={loadScraperData}
                className="bg-[#4e37a8] text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
              >
                📊 Load Data
              </button>
            </div>
            
            {/* Status Indicator */}
            <div className="mt-4 p-4 rounded-lg bg-gray-50">
              <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full ${
                  scraperStatus === 'idle' ? 'bg-gray-400' :
                  scraperStatus === 'running' ? 'bg-yellow-400 animate-pulse' :
                  scraperStatus === 'completed' ? 'bg-green-400' :
                  'bg-red-400'
                }`}></div>
                <span className="text-sm font-medium">
                  Status: {scraperStatus.charAt(0).toUpperCase() + scraperStatus.slice(1)}
                </span>
                {scraperData?.summary && (
                  <div className="ml-auto flex gap-4 text-sm text-gray-600">
                    <span>Leads: {scraperData.summary.totalLeads}</span>
                    <span>Competitors: {scraperData.summary.totalCompetitors}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Data Tabs */}
        <div className="mb-8">
          <div className="bg-white rounded-xl shadow border">
            {/* Tab Navigation */}
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                <button
                  onClick={() => setActiveTab('leads')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'leads'
                      ? 'border-[#4e37a8] text-[#4e37a8]'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  🎯 Leads ({scraperData?.leads?.length || 0})
                </button>
                <button
                  onClick={() => setActiveTab('competitors')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'competitors'
                      ? 'border-[#4e37a8] text-[#4e37a8]'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  🏢 Competitors ({scraperData?.competitors?.length || 0})
                </button>
                <button
                  onClick={() => setActiveTab('facebook-leads')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'facebook-leads'
                      ? 'border-[#4e37a8] text-[#4e37a8]'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  📘 Facebook Leads ({facebookLeads?.length || 0})
                </button>
                <button
                  onClick={() => setActiveTab('analytics')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'analytics'
                      ? 'border-[#4e37a8] text-[#4e37a8]'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  📊 Analytics
                </button>
                <button
                  onClick={() => setActiveTab('insights')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'insights'
                      ? 'border-[#4e37a8] text-[#4e37a8]'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  🧠 Insights
                </button>
                <button
                  onClick={() => setActiveTab('logs')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'logs'
                      ? 'border-[#4e37a8] text-[#4e37a8]'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  📋 Logs ({scraperLogs.length})
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'leads' && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Generated Leads</h3>
                  {scraperData?.leads && scraperData.leads.length > 0 ? (
                    <div className="space-y-6">
                      {/* Lead Statistics */}
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="bg-green-50 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-green-600">{scraperData.summary?.totalLeads || 0}</div>
                          <div className="text-sm text-green-800">Total Leads</div>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">{scraperData.summary?.highPriorityLeads || 0}</div>
                          <div className="text-sm text-blue-800">High Priority</div>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-purple-600">{scraperData.summary?.newLeads || 0}</div>
                          <div className="text-sm text-purple-800">New This Week</div>
                        </div>
                        <div className="bg-orange-50 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-orange-600">{scraperData.summary?.averageScore || 0}</div>
                          <div className="text-sm text-orange-800">Avg Score</div>
                        </div>
                      </div>

                      {/* Selection Controls */}
                      {scraperData.leads.length > 0 && (
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center gap-4">
                            <button
                              onClick={selectAllLeads}
                              className="text-sm text-blue-600 hover:text-blue-800"
                            >
                              Select All on Page
                            </button>
                            <button
                              onClick={clearSelection}
                              className="text-sm text-gray-600 hover:text-gray-800"
                            >
                              Clear Selection
                            </button>
                            {selectedLeads.size > 0 && (
                              <span className="text-sm text-gray-600">
                                {selectedLeads.size} selected
                              </span>
                            )}
                          </div>
                          {selectedLeads.size > 0 && (
                            <button
                              onClick={() => {
                                setDeleteType('leads');
                                setShowDeleteConfirm(true);
                              }}
                              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm"
                            >
                              🗑️ Delete Selected ({selectedLeads.size})
                            </button>
                          )}
                        </div>
                      )}

                      {/* Leads Table */}
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                <input
                                  type="checkbox"
                                  className="rounded border-gray-300"
                                  onChange={(e) => {
                                    if (e.target.checked) {
                                      selectAllLeads();
                                    } else {
                                      clearSelection();
                                    }
                                  }}
                                  checked={getCurrentPageData().length > 0 && getCurrentPageData().every((_, i) => selectedLeads.has((currentPage - 1) * itemsPerPage + i))}
                                />
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {getCurrentPageData().map((lead, index) => {
                              const globalIndex = (currentPage - 1) * itemsPerPage + index;
                              return (
                                <tr key={globalIndex} className={selectedLeads.has(globalIndex) ? 'bg-blue-50' : ''}>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <input
                                      type="checkbox"
                                      className="rounded border-gray-300"
                                      checked={selectedLeads.has(globalIndex)}
                                      onChange={() => toggleLeadSelection(globalIndex)}
                                    />
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{lead.contact_name || lead.name || 'N/A'}</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.company_name || lead.company || 'N/A'}</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.phone || 'N/A'}</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.address || lead.location || 'N/A'}</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.lead_source || lead.source || 'N/A'}</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.services || lead.lead_type || 'N/A'}</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                      lead.lead_score >= 80 ? 'bg-green-100 text-green-800' :
                                      lead.lead_score >= 60 ? 'bg-blue-100 text-blue-800' :
                                      lead.lead_score >= 40 ? 'bg-yellow-100 text-yellow-800' :
                                      'bg-red-100 text-red-800'
                                    }`}>
                                      {lead.lead_score}/100
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {lead.estimated_value ? `$${lead.estimated_value.toLocaleString()}` : 'N/A'}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>

                      {/* Pagination */}
                      {getTotalPages() > 1 && (
                        <div className="flex items-center justify-between mt-6">
                          <div className="text-sm text-gray-700">
                            Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, scraperData.leads.length)} of {scraperData.leads.length} leads
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                              disabled={currentPage === 1}
                              className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              Previous
                            </button>
                            
                            {/* Page Numbers */}
                            {Array.from({ length: Math.min(5, getTotalPages()) }, (_, i) => {
                              const pageNum = Math.max(1, Math.min(getTotalPages() - 4, currentPage - 2)) + i;
                              if (pageNum > getTotalPages()) return null;
                              
                              return (
                                <button
                                  key={pageNum}
                                  onClick={() => setCurrentPage(pageNum)}
                                  className={`px-3 py-2 text-sm font-medium rounded-md ${
                                    currentPage === pageNum
                                      ? 'bg-[#4e37a8] text-white'
                                      : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50'
                                  }`}
                                >
                                  {pageNum}
                                </button>
                              );
                            })}
                            
                            <button
                              onClick={() => setCurrentPage(prev => Math.min(getTotalPages(), prev + 1))}
                              disabled={currentPage === getTotalPages()}
                              className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <div className="text-4xl mb-4">🎯</div>
                      <p className="text-lg font-medium mb-2">No leads data available</p>
                      <p className="text-sm">Run lead generation to discover potential customers</p>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'competitors' && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Competitor Analysis</h3>
                  {scraperData?.competitors && scraperData.competitors.length > 0 ? (
                    <div className="space-y-6">
                      {/* Selection Controls */}
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-4">
                          <button
                            onClick={selectAllCompetitors}
                            className="text-sm text-blue-600 hover:text-blue-800"
                          >
                            Select All on Page
                          </button>
                          <button
                            onClick={clearSelection}
                            className="text-sm text-gray-600 hover:text-gray-800"
                          >
                            Clear Selection
                          </button>
                          {selectedCompetitors.size > 0 && (
                            <span className="text-sm text-gray-600">
                              {selectedCompetitors.size} selected
                            </span>
                          )}
                        </div>
                        {selectedCompetitors.size > 0 && (
                          <button
                            onClick={() => {
                              setDeleteType('competitors');
                              setShowDeleteConfirm(true);
                            }}
                            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm"
                          >
                            🗑️ Delete Selected ({selectedCompetitors.size})
                          </button>
                        )}
                      </div>

                      {/* Competitors Table */}
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                <input
                                  type="checkbox"
                                  className="rounded border-gray-300"
                                  onChange={(e) => {
                                    if (e.target.checked) {
                                      selectAllCompetitors();
                                    } else {
                                      clearSelection();
                                    }
                                  }}
                                  checked={getCurrentPageCompetitors().length > 0 && getCurrentPageCompetitors().every((_, i) => selectedCompetitors.has((currentPage - 1) * itemsPerPage + i))}
                                />
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Website</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quality Score</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service Areas</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specializations</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {getCurrentPageCompetitors().map((competitor, index) => {
                              const globalIndex = (currentPage - 1) * itemsPerPage + index;
                              return (
                                <tr key={globalIndex} className={selectedCompetitors.has(globalIndex) ? 'bg-blue-50' : ''}>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <input
                                      type="checkbox"
                                      className="rounded border-gray-300"
                                      checked={selectedCompetitors.has(globalIndex)}
                                      onChange={() => toggleCompetitorSelection(globalIndex)}
                                    />
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{competitor.company_name}</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <a href={competitor.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                                      {competitor.domain}
                                    </a>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{competitor.phone}</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                      competitor.quality_score >= 80 ? 'bg-green-100 text-green-800' :
                                      competitor.quality_score >= 60 ? 'bg-blue-100 text-blue-800' :
                                      competitor.quality_score >= 40 ? 'bg-yellow-100 text-yellow-800' :
                                      'bg-red-100 text-red-800'
                                    }`}>
                                      {competitor.quality_score}/100
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 text-sm text-gray-500">{competitor.service_area_count}</td>
                                  <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{competitor.specializations}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>

                      {/* Pagination */}
                      {getTotalPages() > 1 && (
                        <div className="flex items-center justify-between mt-6">
                          <div className="text-sm text-gray-700">
                            Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, scraperData.competitors.length)} of {scraperData.competitors.length} competitors
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                              disabled={currentPage === 1}
                              className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              Previous
                            </button>
                            
                            {/* Page Numbers */}
                            {Array.from({ length: Math.min(5, getTotalPages()) }, (_, i) => {
                              const pageNum = Math.max(1, Math.min(getTotalPages() - 4, currentPage - 2)) + i;
                              if (pageNum > getTotalPages()) return null;
                              
                              return (
                                <button
                                  key={pageNum}
                                  onClick={() => setCurrentPage(pageNum)}
                                  className={`px-3 py-2 text-sm font-medium rounded-md ${
                                    currentPage === pageNum
                                      ? 'bg-[#4e37a8] text-white'
                                      : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50'
                                  }`}
                                >
                                  {pageNum}
                                </button>
                              );
                            })}
                            
                            <button
                              onClick={() => setCurrentPage(prev => Math.min(getTotalPages(), prev + 1))}
                              disabled={currentPage === getTotalPages()}
                              className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      No competitor data available. Run competitor analysis to see results.
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'facebook-leads' && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Facebook Leads</h3>
                  {facebookLeads && facebookLeads.length > 0 ? (
                    <div className="space-y-6">
                      {/* Facebook Lead Statistics */}
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">{facebookLeadsSummary?.totalLeads || 0}</div>
                          <div className="text-sm text-blue-800">Total Facebook Leads</div>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-green-600">{facebookLeadsSummary?.highPriorityLeads || 0}</div>
                          <div className="text-sm text-green-800">High Priority</div>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-purple-600">{facebookLeadsSummary?.newLeads || 0}</div>
                          <div className="text-sm text-purple-800">New This Week</div>
                        </div>
                        <div className="bg-orange-50 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-orange-600">{facebookLeadsSummary?.averageScore || 0}</div>
                          <div className="text-sm text-orange-800">Avg Score</div>
                        </div>
                      </div>

                      {/* Selection Controls */}
                      {facebookLeads.length > 0 && (
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center gap-4">
                            <button
                              onClick={selectAllFacebookLeads}
                              className="text-sm text-blue-600 hover:text-blue-800"
                            >
                              Select All on Page
                            </button>
                            <button
                              onClick={clearSelection}
                              className="text-sm text-gray-600 hover:text-gray-800"
                            >
                              Clear Selection
                            </button>
                            {selectedFacebookLeads.size > 0 && (
                              <button
                                onClick={() => {
                                  setDeleteType('facebook-leads');
                                  setShowDeleteConfirm(true);
                                }}
                                className="text-sm text-red-600 hover:text-red-800"
                              >
                                Delete Selected ({selectedFacebookLeads.size})
                              </button>
                            )}
                          </div>
                          <button
                            onClick={runFacebookLeadGeneration}
                            disabled={scraperStatus === 'running'}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {scraperStatus === 'running' ? 'Generating...' : '📘 Generate Facebook Leads'}
                          </button>
                        </div>
                      )}

                      {/* Facebook Leads Table */}
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                <input
                                  type="checkbox"
                                  onChange={(e) => {
                                    if (e.target.checked) {
                                      selectAllFacebookLeads();
                                    } else {
                                      setSelectedFacebookLeads(new Set());
                                    }
                                  }}
                                  className="rounded"
                                />
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project Type</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estimated Value</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Post Link</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {getCurrentPageFacebookLeads().map((lead: any, index: number) => {
                              const actualIndex = (currentPage - 1) * itemsPerPage + index;
                              return (
                                <tr key={actualIndex} className="hover:bg-gray-50">
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <input
                                      type="checkbox"
                                      checked={selectedFacebookLeads.has(actualIndex)}
                                      onChange={() => toggleFacebookLeadSelection(actualIndex)}
                                      className="rounded"
                                    />
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">{lead.name}</div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <div>{lead.phone || 'No phone'}</div>
                                    <div>{lead.email || 'No email'}</div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.location}</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.lead_type}</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                      lead.lead_score >= 80 ? 'bg-green-100 text-green-800' :
                                      lead.lead_score >= 70 ? 'bg-blue-100 text-blue-800' :
                                      lead.lead_score >= 60 ? 'bg-yellow-100 text-yellow-800' :
                                      'bg-red-100 text-red-800'
                                    }`}>
                                      {lead.lead_score}/100
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${lead.estimated_value?.toLocaleString() || 0}</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.source}</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {lead.post_url ? (
                                      <a 
                                        href={lead.post_url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800 underline"
                                      >
                                        View Post
                                      </a>
                                    ) : (
                                      <span className="text-gray-400">No link</span>
                                    )}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>

                      {/* Pagination */}
                      {getTotalPages() > 1 && (
                        <div className="flex items-center justify-between mt-6">
                          <div className="text-sm text-gray-700">
                            Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, facebookLeads.length)} of {facebookLeads.length} Facebook leads
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                              disabled={currentPage === 1}
                              className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              Previous
                            </button>
                            
                            {/* Page Numbers */}
                            {Array.from({ length: Math.min(5, getTotalPages()) }, (_, i) => {
                              const pageNum = Math.max(1, Math.min(getTotalPages() - 4, currentPage - 2)) + i;
                              if (pageNum > getTotalPages()) return null;
                              
                              return (
                                <button
                                  key={pageNum}
                                  onClick={() => setCurrentPage(pageNum)}
                                  className={`px-3 py-2 text-sm font-medium rounded-md ${
                                    currentPage === pageNum
                                      ? 'bg-[#4e37a8] text-white'
                                      : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50'
                                  }`}
                                >
                                  {pageNum}
                                </button>
                              );
                            })}
                            
                            <button
                              onClick={() => setCurrentPage(prev => Math.min(getTotalPages(), prev + 1))}
                              disabled={currentPage === getTotalPages()}
                              className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <p className="mb-4">No Facebook leads available.</p>
                      <button
                        onClick={runFacebookLeadGeneration}
                        disabled={scraperStatus === 'running'}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {scraperStatus === 'running' ? 'Generating...' : '📘 Generate Facebook Leads'}
                      </button>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'analytics' && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Market Analytics</h3>
                  {scraperData?.analytics ? (
                    <div className="space-y-6">
                      {/* Key Metrics */}
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">{scraperData.summary?.totalCompetitors || 0}</div>
                          <div className="text-sm text-blue-800">Total Competitors</div>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-green-600">{scraperData.summary?.industries || 0}</div>
                          <div className="text-sm text-green-800">Industries</div>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-purple-600">{scraperData.summary?.serviceAreas || 0}</div>
                          <div className="text-sm text-purple-800">Service Areas</div>
                        </div>
                        <div className="bg-orange-50 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-orange-600">{scraperData.summary?.dataQuality?.hasPhone || 0}%</div>
                          <div className="text-sm text-orange-800">Phone Coverage</div>
                        </div>
                      </div>

                      {/* Industry Breakdown */}
                      <div className="bg-white border rounded-lg p-4">
                        <h4 className="font-semibold mb-3">Industry Distribution</h4>
                        <div className="space-y-2">
                          {Object.entries(scraperData.analytics.industries || {}).map(([industry, count]) => (
                            <div key={industry} className="flex justify-between items-center">
                              <span className="text-sm font-medium capitalize">{industry.replace('_', ' ')}</span>
                              <div className="flex items-center gap-2">
                                <div className="w-32 bg-gray-200 rounded-full h-2">
                                  <div 
                                    className="bg-blue-600 h-2 rounded-full" 
                                    style={{ width: `${((count as number) / (scraperData.summary?.totalCompetitors || 1) * 100)}%` }}
                                  ></div>
                                </div>
                                <span className="text-sm text-gray-600 w-8">{count as number}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Service Areas */}
                      <div className="bg-white border rounded-lg p-4">
                        <h4 className="font-semibold mb-3">Top Service Areas</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {Object.entries(scraperData.analytics.service_areas || {})
                            .sort(([,a], [,b]) => (b as any).count - (a as any).count)
                            .slice(0, 10)
                            .map(([area, data]) => (
                            <div key={area} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                              <span className="text-sm font-medium">{area}</span>
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-gray-500">{(data as any).percentage}%</span>
                                <span className="text-sm text-gray-600">{(data as any).count}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Social Media Presence */}
                      <div className="bg-white border rounded-lg p-4">
                        <h4 className="font-semibold mb-3">Social Media Presence</h4>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                          {Object.entries(scraperData.analytics.social_media_presence || {}).map(([platform, count]) => (
                            <div key={platform} className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="text-lg font-bold text-gray-800">{count as number}</div>
                              <div className="text-xs text-gray-600 capitalize">{platform}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Contact Information Quality */}
                      <div className="bg-white border rounded-lg p-4">
                        <h4 className="font-semibold mb-3">Contact Information Quality</h4>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                          <div className="text-center p-4 bg-green-50 rounded-lg">
                            <div className="text-2xl font-bold text-green-600">{scraperData.analytics.contact_info?.has_phone || 0}</div>
                            <div className="text-sm text-green-800">Have Phone</div>
                          </div>
                          <div className="text-center p-4 bg-blue-50 rounded-lg">
                            <div className="text-2xl font-bold text-blue-600">{scraperData.analytics.contact_info?.has_email || 0}</div>
                            <div className="text-sm text-blue-800">Have Email</div>
                          </div>
                          <div className="text-center p-4 bg-purple-50 rounded-lg">
                            <div className="text-2xl font-bold text-purple-600">{scraperData.analytics.contact_info?.has_both || 0}</div>
                            <div className="text-sm text-purple-800">Have Both</div>
                          </div>
                          <div className="text-center p-4 bg-red-50 rounded-lg">
                            <div className="text-2xl font-bold text-red-600">{scraperData.analytics.contact_info?.has_neither || 0}</div>
                            <div className="text-sm text-red-800">No Contact Info</div>
                          </div>
                        </div>
                      </div>

                      {/* Data Quality Distribution */}
                      {scraperData.summary?.dataQuality?.qualityDistribution && (
                        <div className="bg-white border rounded-lg p-4">
                          <h4 className="font-semibold mb-3">Data Quality Distribution</h4>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="text-center p-4 bg-green-50 rounded-lg">
                              <div className="text-2xl font-bold text-green-600">{scraperData.summary.dataQuality.qualityDistribution.excellent || 0}</div>
                              <div className="text-sm text-green-800">Excellent (80-100)</div>
                            </div>
                            <div className="text-center p-4 bg-blue-50 rounded-lg">
                              <div className="text-2xl font-bold text-blue-600">{scraperData.summary.dataQuality.qualityDistribution.good || 0}</div>
                              <div className="text-sm text-blue-800">Good (60-79)</div>
                            </div>
                            <div className="text-center p-4 bg-yellow-50 rounded-lg">
                              <div className="text-2xl font-bold text-yellow-600">{scraperData.summary.dataQuality.qualityDistribution.fair || 0}</div>
                              <div className="text-sm text-yellow-800">Fair (40-59)</div>
                            </div>
                            <div className="text-center p-4 bg-red-50 rounded-lg">
                              <div className="text-2xl font-bold text-red-600">{scraperData.summary.dataQuality.qualityDistribution.poor || 0}</div>
                              <div className="text-sm text-red-800">Poor (0-39)</div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      No analytics data available. Run competitor analysis to see results.
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'insights' && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Competitive Intelligence Insights</h3>
                  {scraperData?.insights ? (
                    <div className="space-y-6">
                      {/* Market Analysis */}
                      <div className="bg-white border rounded-lg p-4">
                        <h4 className="font-semibold mb-3 text-blue-600">📊 Market Analysis</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <div className="text-sm text-gray-600 mb-1">Industry Dominance</div>
                            <div className="font-medium">{scraperData.insights.market_analysis?.industry_dominance?.industry || 'N/A'}</div>
                            <div className="text-xs text-gray-500">{scraperData.insights.market_analysis?.industry_dominance?.percentage || 0}% market share</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600 mb-1">Market Gaps</div>
                            <div className="text-sm">
                              {scraperData.insights.market_analysis?.market_gaps?.slice(0, 3).map((gap: string) => (
                                <span key={gap} className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded mr-1 mb-1">{gap}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Strongest Competitors */}
                      <div className="bg-white border rounded-lg p-4">
                        <h4 className="font-semibold mb-3 text-red-600">🏆 Strongest Competitors</h4>
                        <div className="space-y-2">
                          {scraperData.insights.competitive_intelligence?.strongest_competitors?.slice(0, 5).map((competitor: any, index: number) => (
                            <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                              <div>
                                <div className="font-medium">{competitor.name}</div>
                                <div className="text-xs text-gray-500">{competitor.domain}</div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-medium">{competitor.service_areas} areas</div>
                                <div className="text-xs text-gray-500">Score: {competitor.contact_score}/3</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Digital Presence Leaders */}
                      <div className="bg-white border rounded-lg p-4">
                        <h4 className="font-semibold mb-3 text-green-600">📱 Digital Presence Leaders</h4>
                        <div className="space-y-2">
                          {scraperData.insights.digital_presence?.social_media_leaders?.slice(0, 5).map((leader: any, index: number) => (
                            <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                              <div>
                                <div className="font-medium">{leader.name}</div>
                                <div className="text-xs text-gray-500">{leader.domain}</div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-medium">{leader.social_platforms} platforms</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Opportunities */}
                      <div className="bg-white border rounded-lg p-4">
                        <h4 className="font-semibold mb-3 text-purple-600">🚀 Market Opportunities</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <div className="text-sm text-gray-600 mb-2">Underserved Areas</div>
                            <div className="space-y-1">
                              {scraperData.insights.opportunities?.underserved_areas?.slice(0, 5).map((area: any, index: number) => (
                                <div key={index} className="text-sm bg-green-50 p-2 rounded">
                                  <span className="font-medium">{area.area}</span>
                                  <span className="text-xs text-gray-500 ml-2">({area.count} competitors)</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600 mb-2">Service Gaps</div>
                            <div className="space-y-1">
                              {scraperData.insights.opportunities?.service_gaps?.slice(0, 5).map((gap: string, index: number) => (
                                <div key={index} className="text-sm bg-blue-50 p-2 rounded">
                                  {gap}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Digital Opportunities */}
                      <div className="bg-white border rounded-lg p-4">
                        <h4 className="font-semibold mb-3 text-orange-600">💻 Digital Opportunities</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="text-center p-3 bg-orange-50 rounded-lg">
                            <div className="text-lg font-bold text-orange-600">{scraperData.insights.opportunities?.digital_opportunities?.no_social_media || 0}</div>
                            <div className="text-xs text-orange-800">No Social Media</div>
                            <div className="text-xs text-gray-500">{scraperData.insights.opportunities?.digital_opportunities?.digital_gaps?.social_media_opportunity || 0}% opportunity</div>
                          </div>
                          <div className="text-center p-3 bg-blue-50 rounded-lg">
                            <div className="text-lg font-bold text-blue-600">{scraperData.insights.opportunities?.digital_opportunities?.no_email_contact || 0}</div>
                            <div className="text-xs text-blue-800">No Email Contact</div>
                            <div className="text-xs text-gray-500">{scraperData.insights.opportunities?.digital_opportunities?.digital_gaps?.email_marketing_opportunity || 0}% opportunity</div>
                          </div>
                          <div className="text-center p-3 bg-green-50 rounded-lg">
                            <div className="text-lg font-bold text-green-600">{scraperData.insights.opportunities?.digital_opportunities?.no_about_page || 0}</div>
                            <div className="text-xs text-green-800">No About Page</div>
                            <div className="text-xs text-gray-500">{scraperData.insights.opportunities?.digital_opportunities?.digital_gaps?.content_marketing_opportunity || 0}% opportunity</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      No insights available. Run competitor analysis to generate insights.
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'logs' && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Operation Logs</h3>
                  {scraperLogs.length > 0 ? (
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm font-mono max-h-96 overflow-y-auto">
                      {scraperLogs.map((log, index) => (
                        <div key={index} className="mb-1">
                          [{new Date().toLocaleTimeString()}] {log}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      No logs available. Run a scraper operation to see logs.
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Confirm Delete</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete {getSelectedCount()} selected {deleteType === 'leads' ? 'lead' : 'competitor'}{getSelectedCount() > 1 ? 's' : ''}? 
              This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={deleteSelectedItems}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700"
              >
                Delete {getSelectedCount()} {deleteType === 'leads' ? 'Lead' : 'Competitor'}{getSelectedCount() > 1 ? 's' : ''}
              </button>
            </div>
          </div>
        </div>
      )}
        </div>
      </div>
    </AdminAuthGuard>
  );
}
