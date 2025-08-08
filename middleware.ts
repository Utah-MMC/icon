import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Security headers configuration
const securityHeaders = {
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'X-XSS-Protection': '1; mode=block',
  'X-DNS-Prefetch-Control': 'on',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://www.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com https://www.google.com https://formspree.io; frame-src 'self' https://www.google.com; object-src 'none'; base-uri 'self'; form-action 'self';",
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
}

// Bot detection patterns
const botPatterns = [
  /bot/i,
  /crawler/i,
  /spider/i,
  /scraper/i,
  /scraping/i,
  /curl/i,
  /wget/i,
  /python/i,
  /php/i,
  /java/i,
  /perl/i,
  /ruby/i,
  /go-http-client/i,
  /httpclient/i,
  /okhttp/i,
  /apache-httpclient/i,
  /libwww-perl/i,
  /lwp-request/i,
  /lwp-simple/i,
  /mechanize/i,
  /scrapy/i,
  /selenium/i,
  /phantomjs/i,
  /headless/i,
  /chrome-lighthouse/i,
  /lighthouse/i,
  /pagespeed/i,
  /gtmetrix/i,
  /webpagetest/i,
  /pingdom/i,
  /uptimerobot/i,
  /monitor/i,
  /uptime/i,
  /availability/i,
  /status/i,
  /health/i,
  /check/i,
  /test/i,
  /debug/i,
  /development/i,
  /staging/i,
  /preview/i,
  /beta/i,
  /alpha/i,
  /dev/i,
  /stage/i,
  /prod/i,
  /production/i,
  /live/i,
  /demo/i,
  /example/i,
  /sample/i,
  /fake/i,
  /dummy/i,
  /testbot/i,
  /testcrawler/i,
  /testspider/i,
  /testscraper/i,
  /testscraping/i,
  /testcurl/i,
  /testwget/i,
  /testpython/i,
  /testphp/i,
  /testjava/i,
  /testperl/i,
  /testruby/i,
  /testgo-http-client/i,
  /testhttpclient/i,
  /testokhttp/i,
  /testapache-httpclient/i,
  /testlibwww-perl/i,
  /testlwp-request/i,
  /testlwp-simple/i,
  /testmechanize/i,
  /testscrapy/i,
  /testselenium/i,
  /testphantomjs/i,
  /testheadless/i,
  /testchrome-lighthouse/i,
  /testlighthouse/i,
  /testpagespeed/i,
  /testgtmetrix/i,
  /testwebpagetest/i,
  /testpingdom/i,
  /testuptimerobot/i,
  /testmonitor/i,
  /testuptime/i,
  /testavailability/i,
  /teststatus/i,
  /testhealth/i,
  /testcheck/i,
  /testtest/i,
  /testdebug/i,
  /testdevelopment/i,
  /teststaging/i,
  /testpreview/i,
  /testbeta/i,
  /testalpha/i,
  /testdev/i,
  /teststage/i,
  /testprod/i,
  /testproduction/i,
  /testlive/i,
  /testdemo/i,
  /testexample/i,
  /testsample/i,
  /testfake/i,
  /testdummy/i,
]

// Suspicious IP patterns (basic examples - you should expand this)
const suspiciousIPs: string[] = [
  // Add known spam IPs here
  // '192.168.1.1',
  // '10.0.0.1',
]

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 100 // 100 requests per minute
const RATE_LIMIT_MAX_FORM_SUBMISSIONS = 5 // 5 form submissions per minute

function isBot(userAgent: string): boolean {
  return botPatterns.some(pattern => pattern.test(userAgent))
}

function isSuspiciousIP(ip: string): boolean {
  return suspiciousIPs.includes(ip)
}

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  const cfConnectingIP = request.headers.get('cf-connecting-ip')
  
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  if (realIP) {
    return realIP
  }
  if (cfConnectingIP) {
    return cfConnectingIP
  }
  
  return 'unknown'
}

function checkRateLimit(ip: string, path: string): boolean {
  const now = Date.now()
  const key = `${ip}:${path}`
  const record = rateLimitStore.get(key)
  
  if (!record || now > record.resetTime) {
    rateLimitStore.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }
  
  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false
  }
  
  record.count++
  return true
}

function checkFormSubmissionRateLimit(ip: string): boolean {
  const now = Date.now()
  const key = `${ip}:form`
  const record = rateLimitStore.get(key)
  
  if (!record || now > record.resetTime) {
    rateLimitStore.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }
  
  if (record.count >= RATE_LIMIT_MAX_FORM_SUBMISSIONS) {
    return false
  }
  
  record.count++
  return true
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const userAgent = request.headers.get('user-agent') || ''
  const ip = getClientIP(request)
  
  // Bot detection
  if (isBot(userAgent)) {
    console.log(`Bot detected: ${userAgent} from IP: ${ip}`)
    return NextResponse.json(
      { error: 'Access denied' },
      { status: 403 }
    )
  }
  
  // Suspicious IP check
  if (isSuspiciousIP(ip)) {
    console.log(`Suspicious IP blocked: ${ip}`)
    return NextResponse.json(
      { error: 'Access denied' },
      { status: 403 }
    )
  }
  
  // Rate limiting for all requests
  if (!checkRateLimit(ip, pathname)) {
    console.log(`Rate limit exceeded for IP: ${ip} on path: ${pathname}`)
    return NextResponse.json(
      { error: 'Too many requests' },
      { status: 429 }
    )
  }
  
  // Special rate limiting for form submissions
  if (pathname.includes('/api/') || pathname.includes('quote-form')) {
    if (!checkFormSubmissionRateLimit(ip)) {
      console.log(`Form submission rate limit exceeded for IP: ${ip}`)
      return NextResponse.json(
        { error: 'Too many form submissions' },
        { status: 429 }
      )
    }
  }
  
  // Security headers
  const response = NextResponse.next()
  
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value)
  })
  
  // Additional security measures
  response.headers.set('X-Robots-Tag', 'noindex, nofollow')
  
  // Block common spam patterns
  const url = request.nextUrl.toString()
  const spamPatterns = [
    /viagra/i,
    /cialis/i,
    /casino/i,
    /poker/i,
    /loan/i,
    /mortgage/i,
    /debt/i,
    /credit/i,
    /insurance/i,
    /pharmacy/i,
    /medication/i,
    /prescription/i,
    /weight-loss/i,
    /diet/i,
    /supplement/i,
    /vitamin/i,
    /herbal/i,
    /natural/i,
    /organic/i,
    /green/i,
    /eco/i,
    /environmental/i,
    /renewable/i,
    /solar/i,
    /wind/i,
    /energy/i,
    /power/i,
    /electric/i,
    /gas/i,
    /oil/i,
    /fuel/i,
    /petroleum/i,
    /chemical/i,
    /industrial/i,
    /manufacturing/i,
    /factory/i,
    /plant/i,
    /facility/i,
    /warehouse/i,
    /storage/i,
    /logistics/i,
    /shipping/i,
    /delivery/i,
    /transport/i,
    /freight/i,
    /cargo/i,
    /container/i,
    /trucking/i,
    /hauling/i,
    /moving/i,
    /relocation/i,
    /storage/i,
    /warehouse/i,
    /facility/i,
    /plant/i,
    /factory/i,
    /manufacturing/i,
    /industrial/i,
    /chemical/i,
    /petroleum/i,
    /fuel/i,
    /oil/i,
    /gas/i,
    /electric/i,
    /power/i,
    /energy/i,
    /wind/i,
    /solar/i,
    /renewable/i,
    /environmental/i,
    /eco/i,
    /green/i,
    /organic/i,
    /natural/i,
    /herbal/i,
    /vitamin/i,
    /supplement/i,
    /diet/i,
    /weight-loss/i,
    /prescription/i,
    /medication/i,
    /pharmacy/i,
    /insurance/i,
    /credit/i,
    /debt/i,
    /mortgage/i,
    /loan/i,
    /poker/i,
    /casino/i,
    /cialis/i,
    /viagra/i,
  ]
  
  if (spamPatterns.some(pattern => pattern.test(url))) {
    console.log(`Spam pattern detected in URL: ${url} from IP: ${ip}`)
    return NextResponse.json(
      { error: 'Access denied' },
      { status: 403 }
    )
  }
  
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (image files)
     * - public (public files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images|public).*)',
  ],
}
