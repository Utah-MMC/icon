import { NextRequest, NextResponse } from 'next/server';

// IndexNow API endpoint for submitting URLs to search engines
export async function POST(request: NextRequest) {
  try {
    const { urls, action = 'update' } = await request.json();
    
    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json(
        { error: 'URLs array is required' },
        { status: 400 }
      );
    }

    // IndexNow configuration
    const apiKey = 'icondumpsters-2024-seo-key';
    const host = 'icondumpsters.com';
    const keyLocation = 'https://icondumpsters.com/indexnow-key.txt';
    
    // Validate URLs are from our domain
    const validUrls = urls.filter(url => 
      typeof url === 'string' && 
      url.startsWith('https://icondumpsters.com/')
    );
    
    if (validUrls.length === 0) {
      return NextResponse.json(
        { error: 'No valid URLs provided' },
        { status: 400 }
      );
    }

    // Submit to IndexNow API
    const indexNowPayload = {
      host,
      key: apiKey,
      keyLocation,
      urlList: validUrls
    };

    const results = [];
    
    // Submit to multiple IndexNow endpoints
    const endpoints = [
      'https://api.indexnow.org/indexnow',
      'https://www.bing.com/indexnow',
      'https://yandex.com/indexnow'
    ];

    for (const endpoint of endpoints) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'IconDumpsters-IndexNow/1.0'
          },
          body: JSON.stringify(indexNowPayload)
        });

        results.push({
          endpoint: endpoint.replace('https://', '').replace('/indexnow', ''),
          status: response.status,
          success: response.status === 200 || response.status === 202,
          message: response.status === 200 ? 'Success' : 
                   response.status === 202 ? 'Accepted' : 
                   response.status === 403 ? 'Forbidden (key not verified)' :
                   'Failed'
        });
      } catch (error) {
        results.push({
          endpoint: endpoint.replace('https://', '').replace('/indexnow', ''),
          status: 0,
          success: false,
          message: 'Network error'
        });
      }
    }

    return NextResponse.json({
      success: true,
      submittedUrls: validUrls.length,
      results,
      message: 'IndexNow submission completed'
    });

  } catch (error) {
    console.error('IndexNow API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET endpoint to check IndexNow status
export async function GET() {
  return NextResponse.json({
    service: 'IndexNow API',
    status: 'active',
    key: 'icondumpsters-2024-seo-key',
    keyLocation: 'https://icondumpsters.com/indexnow-key.txt',
    endpoints: [
      'https://api.indexnow.org/indexnow',
      'https://www.bing.com/indexnow',
      'https://yandex.com/indexnow'
    ],
    instructions: [
      '1. Ensure indexnow-key.txt is accessible at https://icondumpsters.com/indexnow-key.txt',
      '2. Use POST /api/indexnow with {"urls": ["https://icondumpsters.com/page1", "https://icondumpsters.com/page2"]}',
      '3. Monitor results in Google Search Console and Bing Webmaster Tools'
    ]
  });
}
