# 📧 Bulk Email Outreach Setup Guide

## ✅ What's Been Added

Your KPI dashboard now includes a comprehensive bulk email outreach system that allows you to send targeted emails to your entire client base. Here's what's been implemented:

### 🚀 New Features

1. **Bulk Email API** (`/api/bulk-email`)
   - Send emails to filtered client segments
   - Batch processing to avoid email service limits
   - Personalization with client data
   - Error handling and reporting

2. **Email Templates**
   - **Newsletter**: Monthly updates and company news
   - **Promotion**: Special offers and discounts
   - **Follow-up**: Re-engagement campaigns
   - **Seasonal**: Time-sensitive campaigns (spring cleaning, etc.)
   - **Custom**: Your own HTML templates

3. **Client Filtering**
   - Filter by client type (Residential/Commercial)
   - Filter by county/location
   - Filter by creation date range
   - Filter by tags/lead sources

4. **Dashboard Integration**
   - Added to your KPI dashboard at `/kpi-dashboard`
   - Real-time client statistics
   - Email campaign results tracking

## 🎯 How to Use

### Step 1: Access the Bulk Email Tool
1. Go to your KPI dashboard: `https://your-domain.com/kpi-dashboard`
2. Scroll down to the "Email Outreach Campaigns" section
3. You'll see client statistics and the email configuration panel

### Step 2: Choose Your Email Type
- **Newsletter**: Perfect for monthly updates, company news, service updates
- **Promotion**: Great for special offers, discounts, limited-time deals
- **Follow-up**: Ideal for re-engaging past customers
- **Seasonal**: Use for time-sensitive campaigns (spring cleaning, holiday specials)
- **Custom**: Create your own HTML email content

### Step 3: Configure Your Campaign
1. **Select Template**: Choose from pre-built templates or create custom
2. **Write Subject**: Keep it under 50 characters for better open rates
3. **Set Filters**: Target specific client segments
4. **Review Recipients**: See how many clients will receive your email

### Step 4: Send Your Campaign
1. Click "Send to X Clients" button
2. Monitor the progress in real-time
3. Review results and any failed deliveries

## 📊 Client Data Available

Your system has access to client data including:
- **Total Clients**: {totalClients} in your database
- **Email Addresses**: {clientsWithEmail} clients with valid emails
- **Client Types**: Residential and Commercial segments
- **Geographic Data**: County and city information
- **Lead Sources**: How clients found you
- **Creation Dates**: When clients were added

## 🎨 Email Personalization

Use these tokens in your email content for personalization:
- `{firstName}` - Client's first name
- `{lastName}` - Client's last name
- `{companyName}` - Company name (for commercial clients)
- `{city}` - Client's city
- `{county}` - Client's county
- `{month}` - Current month
- `{year}` - Current year

## 📈 Best Practices

### Email Content
- Keep subject lines under 50 characters
- Include a clear call-to-action
- Use personalization tokens
- Test with a small group first
- Include unsubscribe options

### Targeting
- Start with broad campaigns, then narrow down
- Use geographic filters for local promotions
- Segment by client type for relevant messaging
- Consider timing (avoid weekends/holidays)

### Compliance
- Respect unsubscribe requests
- Include your business contact information
- Follow CAN-SPAM guidelines
- Keep email frequency reasonable

## 🔧 Technical Details

### Email Service Integration
- Uses your existing SMTP configuration
- Sends emails in batches of 10 to avoid rate limits
- Includes error handling and retry logic
- Tracks delivery success/failure rates

### Performance
- Processes emails asynchronously
- Includes delays between batches
- Provides real-time progress updates
- Handles large client lists efficiently

## 🚨 Important Notes

1. **Email Limits**: Your SMTP service may have daily sending limits
2. **Rate Limiting**: The system includes delays to prevent being flagged as spam
3. **Testing**: Always test with a small group before full campaigns
4. **Compliance**: Ensure you have permission to email your clients
5. **Backup**: Your client data is stored locally and in your existing system

## 🆘 Troubleshooting

### Common Issues
- **No clients found**: Check your filters - they might be too restrictive
- **Email sending fails**: Verify your SMTP configuration in environment variables
- **Low delivery rates**: Check spam folders, verify email addresses are valid
- **Template not loading**: Ensure you've selected a template type

### Getting Help
- Check the browser console for error messages
- Verify your SMTP settings in the email setup guide
- Test email configuration at `/test-email`
- Review the email service logs for delivery issues

## 🎉 Ready to Start!

Your bulk email outreach system is now ready to use! Start with a simple newsletter to your residential clients, then expand to more targeted campaigns as you get comfortable with the system.

**Next Steps:**
1. Test the system with a small group
2. Create your first campaign
3. Monitor results and optimize
4. Scale up to larger campaigns

Happy emailing! 📧✨
