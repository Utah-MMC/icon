import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface RatingVisit {
  id: string;
  timestamp: string;
  userAgent?: string;
  referrer?: string;
  ip?: string;
  source?: string; // 'email', 'website', 'direct', etc.
}

// File path for storing visit data
const visitsFilePath = path.join(process.cwd(), 'data', 'rating-visits.json');

// Ensure data directory exists
function ensureDataDirectory() {
  const dataDir = path.dirname(visitsFilePath);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

// Load visits from file
function loadVisits(): RatingVisit[] {
  try {
    ensureDataDirectory();
    if (fs.existsSync(visitsFilePath)) {
      const data = fs.readFileSync(visitsFilePath, 'utf8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error loading visits:', error);
  }
  return [];
}

// Save visits to file
function saveVisits(visits: RatingVisit[]): void {
  try {
    ensureDataDirectory();
    fs.writeFileSync(visitsFilePath, JSON.stringify(visits, null, 2));
  } catch (error) {
    console.error('Error saving visits:', error);
  }
}

// Generate unique ID
function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// POST - Track a visit to the rating page
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Load existing visits
    const visits = loadVisits();
    
    // Create new visit record
    const newVisit: RatingVisit = {
      id: generateId(),
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || undefined,
      referrer: request.headers.get('referer') || body.referrer || undefined,
      ip: request.ip || request.headers.get('x-forwarded-for') || undefined,
      source: body.source || 'direct'
    };
    
    // Add to visits
    visits.push(newVisit);
    
    // Keep only last 1000 visits to prevent file from growing too large
    if (visits.length > 1000) {
      visits.splice(0, visits.length - 1000);
    }
    
    // Save visits
    saveVisits(visits);
    
    // Log the visit for analytics
    console.log('Rating page visit tracked:', {
      id: newVisit.id,
      source: newVisit.source,
      timestamp: newVisit.timestamp
    });
    
    return NextResponse.json({
      success: true,
      message: 'Visit tracked successfully'
    });
    
  } catch (error) {
    console.error('Error tracking visit:', error);
    return NextResponse.json(
      { error: 'Failed to track visit', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

// GET - Retrieve visit statistics
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const days = parseInt(searchParams.get('days') || '7');
    
    // Load visits
    const visits = loadVisits();
    
    // Filter by date range
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);
    
    const recentVisits = visits.filter(visit => 
      new Date(visit.timestamp) >= cutoffDate
    );
    
    // Calculate statistics
    const stats = {
      totalVisits: visits.length,
      recentVisits: recentVisits.length,
      visitsBySource: recentVisits.reduce((acc, visit) => {
        acc[visit.source || 'unknown'] = (acc[visit.source || 'unknown'] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      visitsByDay: recentVisits.reduce((acc, visit) => {
        const date = new Date(visit.timestamp).toISOString().split('T')[0];
        acc[date] = (acc[date] || 0) + 1;
        return acc;
      }, {} as Record<string, number>)
    };
    
    return NextResponse.json({
      success: true,
      stats,
      recentVisits: recentVisits.slice(-10) // Last 10 visits
    });
    
  } catch (error) {
    console.error('Error retrieving visit stats:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve visit statistics', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
