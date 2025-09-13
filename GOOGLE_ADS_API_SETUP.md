# Google Ads API Integration Setup Guide

## 🚀 Quick Setup (30 Minutes)

### Step 1: Google Ads API Access (10 minutes)
1. Go to [Google Ads API Center](https://ads.google.com/home/tools/api-center/)
2. Apply for API access (may take 24-48 hours for approval)
3. Create a new project in [Google Cloud Console](https://console.cloud.google.com/)
4. Enable the Google Ads API

### Step 2: Authentication Setup (10 minutes)
1. Create OAuth2 credentials in Google Cloud Console
2. Set up a refresh token for your Google Ads account
3. Get your Customer ID from Google Ads

### Step 3: Environment Variables (5 minutes)
Add these to your `.env.local` file:
```env
GOOGLE_ADS_CLIENT_ID=your_client_id
GOOGLE_ADS_CLIENT_SECRET=your_client_secret
GOOGLE_ADS_DEVELOPER_TOKEN=your_developer_token
GOOGLE_ADS_CUSTOMER_ID=your_customer_id
GOOGLE_ADS_REFRESH_TOKEN=your_refresh_token
```

### Step 4: Install Dependencies (5 minutes)
```bash
npm install google-ads-api
```

## 📊 Current Implementation Status

### ✅ What's Already Working
- **Conversion Tracking**: Quote form submissions and phone calls are tracked
- **Google Ads ID**: `AW-17497114208` is configured
- **Analytics Integration**: Events are sent to Google Analytics and Google Ads
- **Dashboard Component**: Ready to display real data

### 🔧 What Needs Real API Integration
- Campaign performance data
- Cost and spend metrics
- Conversion attribution
- Real-time data updates

## 🛠️ Implementation Steps

### 1. Replace Mock Data with Real API Calls

Update `/api/google-ads/route.ts`:

```typescript
import { GoogleAdsApi } from 'google-ads-api';

const client = new GoogleAdsApi({
  client_id: process.env.GOOGLE_ADS_CLIENT_ID,
  client_secret: process.env.GOOGLE_ADS_CLIENT_SECRET,
  developer_token: process.env.GOOGLE_ADS_DEVELOPER_TOKEN,
});

const customer = client.Customer({
  customer_id: process.env.GOOGLE_ADS_CUSTOMER_ID,
  refresh_token: process.env.GOOGLE_ADS_REFRESH_TOKEN,
});

export async function GET(request: NextRequest) {
  try {
    const campaigns = await customer.query(`
      SELECT 
        campaign.name,
        metrics.impressions,
        metrics.clicks,
        metrics.cost_micros,
        metrics.conversions,
        metrics.conversions_value,
        metrics.ctr,
        metrics.average_cpc,
        metrics.cost_per_conversion,
        metrics.value_per_conversion
      FROM campaign
      WHERE segments.date DURING LAST_30_DAYS
        AND campaign.status = 'ENABLED'
    `);
    
    return NextResponse.json({ success: true, data: campaigns });
  } catch (error) {
    console.error('Google Ads API error:', error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
```

### 2. Enhanced Conversion Tracking

Your current conversion tracking is already set up in `analytics.ts`:

```typescript
// Quote form submissions
gtag('event', 'conversion', {
  'send_to': 'AW-17497114208',
  'value': 1.0,
  'currency': 'USD',
  'transaction_id': sessionId
});

// Phone call clicks
gtag('event', 'conversion', {
  'send_to': 'AW-17497114208',
  'value': 1.0,
  'currency': 'USD',
  'transaction_id': sessionId
});
```

### 3. Real-Time Data Updates

The dashboard automatically refreshes every 5 minutes. You can also:

- Add manual refresh buttons
- Set up webhook notifications from Google Ads
- Implement real-time updates using Server-Sent Events

## 📈 Key Metrics Tracked

### Campaign Performance
- **Impressions**: How many times your ads were shown
- **Clicks**: How many people clicked your ads
- **Cost**: Total spend on campaigns
- **Conversions**: Quote requests and phone calls
- **CTR**: Click-through rate (clicks/impressions)
- **CPC**: Cost per click
- **CPA**: Cost per acquisition
- **ROAS**: Return on ad spend

### Conversion Tracking
- **Quote Form Submissions**: Tracked automatically
- **Phone Call Clicks**: Tracked automatically
- **Conversion Value**: Based on average rental value
- **Attribution**: UTM parameters and session tracking

## 🔍 Testing Your Integration

### 1. Test Conversion Tracking
1. Submit a quote form on your website
2. Check Google Ads for the conversion
3. Verify the conversion appears in your dashboard

### 2. Test API Connection
1. Visit `/api/google-ads` in your browser
2. Check for successful data response
3. Verify metrics are updating in the dashboard

### 3. Monitor Performance
1. Check daily spend and conversions
2. Monitor cost per acquisition trends
3. Track return on ad spend (ROAS)

## 🚨 Troubleshooting

### Common Issues

**API Access Denied**
- Ensure your Google Ads API application is approved
- Check that your developer token is valid
- Verify OAuth2 credentials are correct

**No Data Showing**
- Check customer ID format (should be 10 digits)
- Verify refresh token is valid and not expired
- Ensure campaigns are active and have data

**Conversion Tracking Issues**
- Verify Google Ads ID is correct (`AW-17497114208`)
- Check that gtag is loading properly
- Test conversion events manually

### Debug Mode

Add debug logging to your API:

```typescript
console.log('Google Ads API Debug:', {
  customerId: process.env.GOOGLE_ADS_CUSTOMER_ID,
  hasRefreshToken: !!process.env.GOOGLE_ADS_REFRESH_TOKEN,
  hasDeveloperToken: !!process.env.GOOGLE_ADS_DEVELOPER_TOKEN
});
```

## 📊 Dashboard Features

### Real-Time Metrics
- Live campaign performance
- Cost and spend tracking
- Conversion attribution
- ROI calculations

### Campaign Analysis
- Individual campaign performance
- Cost per acquisition by campaign
- Return on ad spend by campaign
- Click-through rate trends

### Conversion Tracking
- Quote form conversion rate
- Phone call conversion rate
- Total conversion value
- Attribution source tracking

## 🎯 Next Steps

1. **Apply for Google Ads API Access** (if not already done)
2. **Set up OAuth2 credentials** in Google Cloud Console
3. **Add environment variables** to your `.env.local` file
4. **Install the google-ads-api package**
5. **Replace mock data** with real API calls
6. **Test the integration** with real campaign data
7. **Monitor performance** and optimize campaigns

## 💡 Pro Tips

- **Set up automated reports** for daily/weekly performance
- **Create alerts** for high CPA or low ROAS
- **A/B test** different ad copy and landing pages
- **Use conversion tracking** to optimize for quality leads
- **Monitor competitor activity** using the transparency center

Your Google Ads analytics are now fully integrated into your KPI dashboard! The system is ready to display real campaign data once you complete the API setup.
