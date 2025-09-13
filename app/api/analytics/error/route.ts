import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const errorData = await request.json();
    
    // Log the error for monitoring
    console.error('Dashboard Error:', {
      error: errorData.error,
      stack: errorData.stack,
      componentStack: errorData.componentStack,
      timestamp: errorData.timestamp,
      url: request.url
    });

    // In production, you would:
    // 1. Send to error monitoring service (Sentry, LogRocket, etc.)
    // 2. Store in database for analysis
    // 3. Send alerts for critical errors
    // 4. Track error patterns and trends

    return NextResponse.json({
      success: true,
      message: 'Error logged successfully'
    });

  } catch (error) {
    console.error('Error logging failed:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to log error'
    }, { status: 500 });
  }
}
