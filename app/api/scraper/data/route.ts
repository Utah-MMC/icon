import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Read the processed competitor data
    const dataPath = path.join(process.cwd(), 'data', 'competitor-data.json');
    
    if (!fs.existsSync(dataPath)) {
      return NextResponse.json({
        error: 'No competitor data available. Please run the data processing script first.'
      }, { status: 404 });
    }
    
    const rawData = fs.readFileSync(dataPath, 'utf8');
    const competitorData = JSON.parse(rawData);
    
    // Create a comprehensive response with all scraper data
    const scraperData = {
      leads: [], // Will be populated when lead generation is implemented
      competitors: competitorData.competitors,
      analytics: competitorData.analytics,
      summary: {
        totalLeads: 0,
        totalCompetitors: competitorData.summary.totalCompetitors,
        lastUpdated: competitorData.summary.lastUpdated,
        dataQuality: competitorData.summary.dataQuality,
        industries: competitorData.summary.totalIndustries,
        serviceAreas: competitorData.summary.totalServiceAreas
      },
      lastRun: competitorData.summary.lastUpdated
    };
    
    return NextResponse.json(scraperData);
  } catch (error) {
    console.error('Error loading scraper data:', error);
    return NextResponse.json({
      error: 'Failed to load scraper data'
    }, { status: 500 });
  }
}

export async function POST() {
  try {
    // This endpoint can be used to trigger data refresh
    const dataPath = path.join(process.cwd(), 'data', 'competitor-data.json');
    
    if (!fs.existsSync(dataPath)) {
      return NextResponse.json({
        error: 'No competitor data available. Please run the data processing script first.'
      }, { status: 404 });
    }
    
    const rawData = fs.readFileSync(dataPath, 'utf8');
    const competitorData = JSON.parse(rawData);
    
    // Update the last updated timestamp
    competitorData.summary.lastUpdated = new Date().toISOString();
    
    // Write back the updated data
    fs.writeFileSync(dataPath, JSON.stringify(competitorData, null, 2));
    
    return NextResponse.json({
      message: 'Data refreshed successfully',
      lastUpdated: competitorData.summary.lastUpdated
    });
  } catch (error) {
    console.error('Error refreshing scraper data:', error);
    return NextResponse.json({
      error: 'Failed to refresh scraper data'
    }, { status: 500 });
  }
}