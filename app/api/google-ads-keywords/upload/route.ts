import { NextRequest, NextResponse } from 'next/server';

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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { data, metrics, fileName } = body;

    if (!data || !Array.isArray(data)) {
      return NextResponse.json({
        success: false,
        error: 'Invalid data format'
      }, { status: 400 });
    }

    // Process and validate the data
    const processedData = data.map((row: any) => ({
      keyword: row.keyword || '',
      matchType: row.matchType || '',
      status: row.status || '',
      statusReasons: row.statusReasons || '',
      conversions: parseFloat(row.conversions) || 0,
      clicks: parseInt(row.clicks) || 0,
      impressions: parseInt(row.impressions) || 0,
      ctr: parseFloat(row.ctr) || 0,
      avgCpc: parseFloat(row.avgCpc) || 0,
      cost: parseFloat(row.cost) || 0,
      costPerConversion: parseFloat(row.costPerConversion) || 0,
      finalUrl: row.finalUrl || ''
    }));

    // Calculate summary metrics
    const summary = {
      totalKeywords: processedData.length,
      totalClicks: metrics?.totalClicks || 0,
      totalImpressions: metrics?.totalImpressions || 0,
      totalCost: metrics?.totalCost || 0,
      totalConversions: metrics?.totalConversions || 0,
      overallCTR: metrics?.overallCTR || 0,
      overallCPC: metrics?.overallCPC || 0,
      overallCPA: metrics?.overallCPA || 0,
      topPerformingCount: metrics?.topPerformingKeywords?.length || 0,
      matchTypes: Object.keys(metrics?.matchTypePerformance || {}).length,
      statuses: Object.keys(metrics?.statusBreakdown || {}).length
    };

    const result = {
      success: true,
      data: {
        keywords: processedData,
        metrics,
        summary,
        metadata: {
          fileName,
          uploadedAt: new Date().toISOString(),
          recordCount: processedData.length
        }
      }
    };

    // Store in a simple file-based storage (you could use a database here)
    console.log('Google Ads Keywords report uploaded:', {
      fileName,
      recordCount: processedData.length,
      totalClicks: summary.totalClicks,
      totalCost: summary.totalCost,
      totalConversions: summary.totalConversions,
      overallCTR: summary.overallCTR
    });

    return NextResponse.json(result);

  } catch (error) {
    console.error('Google Ads Keywords upload error:', error);
    
    return NextResponse.json({
      success: false,
      error: 'Failed to process uploaded data'
    }, { status: 500 });
  }
}

export async function GET() {
  try {
    // Return any stored data or summary
    return NextResponse.json({
      success: true,
      message: 'Google Ads Keywords upload endpoint ready',
      instructions: {
        method: 'POST',
        body: {
          data: 'Array of keyword data',
          metrics: 'Calculated metrics object',
          fileName: 'Original filename'
        }
      }
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Failed to get upload status'
    }, { status: 500 });
  }
}
