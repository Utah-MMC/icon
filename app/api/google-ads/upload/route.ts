import { NextRequest, NextResponse } from 'next/server';

interface GoogleAdsReportData {
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
  date: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { data, fileName } = body;

    if (!data || !Array.isArray(data)) {
      return NextResponse.json({
        success: false,
        error: 'Invalid data format'
      }, { status: 400 });
    }

    // Process and validate the data
    const processedData = data.map((row: any) => ({
      campaignName: row.campaignName || 'Unknown Campaign',
      impressions: parseInt(row.impressions) || 0,
      clicks: parseInt(row.clicks) || 0,
      cost: parseFloat(row.cost) || 0,
      conversions: parseInt(row.conversions) || 0,
      conversionValue: parseFloat(row.conversionValue) || 0,
      ctr: parseFloat(row.ctr) || 0,
      cpc: parseFloat(row.cpc) || 0,
      cpa: parseFloat(row.cpa) || 0,
      roas: parseFloat(row.roas) || 0,
      date: row.date || new Date().toISOString().split('T')[0]
    }));

    // Calculate summary metrics
    const summary = processedData.reduce((acc, row) => ({
      totalImpressions: acc.totalImpressions + row.impressions,
      totalClicks: acc.totalClicks + row.clicks,
      totalCost: acc.totalCost + row.cost,
      totalConversions: acc.totalConversions + row.conversions,
      totalConversionValue: acc.totalConversionValue + row.conversionValue,
      campaignCount: acc.campaignCount + 1
    }), {
      totalImpressions: 0,
      totalClicks: 0,
      totalCost: 0,
      totalConversions: 0,
      totalConversionValue: 0,
      campaignCount: 0
    });

    // Calculate derived metrics
    const overallCTR = summary.totalImpressions > 0 ? (summary.totalClicks / summary.totalImpressions) * 100 : 0;
    const overallCPC = summary.totalClicks > 0 ? summary.totalCost / summary.totalClicks : 0;
    const overallCPA = summary.totalConversions > 0 ? summary.totalCost / summary.totalConversions : 0;
    const overallROAS = summary.totalCost > 0 ? summary.totalConversionValue / summary.totalCost : 0;

    const result = {
      success: true,
      data: {
        campaigns: processedData,
        summary: {
          ...summary,
          overallCTR,
          overallCPC,
          overallCPA,
          overallROAS
        },
        metadata: {
          fileName,
          uploadedAt: new Date().toISOString(),
          recordCount: processedData.length
        }
      }
    };

    // Store in a simple file-based storage (you could use a database here)
    // For now, we'll just return the processed data
    console.log('Google Ads report uploaded:', {
      fileName,
      recordCount: processedData.length,
      totalCost: summary.totalCost,
      totalConversions: summary.totalConversions
    });

    return NextResponse.json(result);

  } catch (error) {
    console.error('Google Ads upload error:', error);
    
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
      message: 'Google Ads upload endpoint ready',
      instructions: {
        method: 'POST',
        body: {
          data: 'Array of campaign data',
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
