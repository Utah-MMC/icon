# SEMrush Integration Guide for Icon Dumpsters KPI System

## 🎯 **What Data You Can Import from SEMrush**

### **Competitor Analysis Data:**
- **Organic Keywords**: Number of keywords each competitor ranks for
- **Organic Traffic**: Monthly organic search traffic
- **Domain Authority**: SEO strength score (0-100)
- **Backlinks**: Number of referring domains
- **Keyword Rankings**: Position for specific keywords
- **Ad Rank**: Paid search position
- **Ad Spend**: Estimated monthly ad spend

### **Keyword Research Data:**
- **Search Volume**: Monthly searches for "dumpster rental utah"
- **Keyword Difficulty**: How hard it is to rank for each keyword
- **CPC (Cost Per Click)**: Average cost for paid ads
- **Competition Level**: How many advertisers compete for the keyword

## 📊 **How to Add SEMrush Data to Your KPI**

### **Step 1: Access Your KPI Dashboard**
1. Go to: `http://localhost:3000/kpi-dashboard`
2. Use the manual data entry form to add SEMrush data

### **Step 2: Key Metrics to Track from SEMrush**

#### **Competitor Metrics (Update Monthly):**
```
Blue Bin Dumpster Rentals:
- Organic Keywords: 1,200
- Organic Traffic: 8,500
- Domain Authority: 45
- Backlinks: 150
- Ad Rank: 1.9

Bin There Dump That Salt Lake:
- Organic Keywords: 980
- Organic Traffic: 7,200
- Domain Authority: 42
- Backlinks: 120
- Ad Rank: 4.3
```

#### **Your Target Metrics:**
```
Icon Dumpsters Goals:
- Organic Keywords: 500+ (currently tracking)
- Organic Traffic: 3,000+ monthly visitors
- Domain Authority: 35+ (build backlinks)
- Backlinks: 50+ referring domains
- Ad Rank: Top 3 for paid search
```

### **Step 3: Manual Data Entry Process**

#### **Weekly Updates:**
1. **Google Reviews & Rating**: Check your Google Business Profile
2. **Ad Spend**: Check your Google Ads dashboard
3. **Website Visitors**: Check Google Analytics
4. **Quote Requests**: Count form submissions

#### **Monthly Updates:**
1. **SEMrush Competitor Data**: Export competitor reports
2. **Revenue & Rentals**: Business financial data
3. **Market Position**: Update based on competitor analysis

## 🔧 **SEMrush API Integration (Advanced)**

### **Option 1: Manual Export (Recommended for now)**
1. Log into SEMrush
2. Go to "Domain Analytics" → "Overview"
3. Search for each competitor:
   - Blue Bin Dumpster Rentals
   - Bin There Dump That Salt Lake
   - Dumpster Today
   - redbox+ Dumpsters
   - Dumpster Depot
   - Brady Brothers Containers
   - T&T Dumpsters
4. Export data to CSV
5. Manually enter key metrics into KPI dashboard

### **Option 2: SEMrush API (Future Enhancement)**
```javascript
// Example API integration (we can build this later)
const semrushData = {
  competitors: [
    {
      name: "Blue Bin Dumpster Rentals",
      organicKeywords: 1200,
      organicTraffic: 8500,
      domainAuthority: 45,
      adRank: 1.9
    }
  ]
};
```

## 📈 **Competitive Intelligence Strategy**

### **Track These Key Metrics:**
1. **Market Share**: Your rentals vs. total market
2. **Digital Presence**: Your organic traffic vs. competitors
3. **Customer Acquisition Cost**: Ad spend per new customer
4. **Brand Authority**: Domain authority vs. competitors
5. **Local SEO Performance**: Google My Business optimization

### **Action Items Based on Data:**
- **If competitors have more organic keywords**: Focus on content marketing
- **If competitors have higher domain authority**: Build more backlinks
- **If competitors spend more on ads**: Optimize your ad campaigns
- **If competitors have better reviews**: Improve customer service

## 🎯 **Recommended SEMrush Reports**

### **Weekly Reports:**
1. **Domain Overview**: Your site performance
2. **Keyword Rankings**: Track target keywords
3. **Backlink Analysis**: New referring domains

### **Monthly Reports:**
1. **Competitor Analysis**: All 7 competitors
2. **Keyword Research**: New opportunities
3. **Traffic Analytics**: Visitor trends

## 💡 **Pro Tips for SEMrush Data**

### **Focus on These Keywords:**
- "dumpster rental utah"
- "dumpster rental salt lake city"
- "roll off dumpster utah"
- "construction dumpster rental"
- "dumpster rental near me"

### **Track Competitor Changes:**
- New keywords they're ranking for
- Changes in ad spend
- New backlinks they're getting
- Review count increases

## 🚀 **Next Steps**

1. **Start with manual data entry** using the KPI dashboard
2. **Set up weekly SEMrush checks** for competitor monitoring
3. **Track your progress** against competitive benchmarks
4. **Use insights to improve** your marketing strategy

## 📞 **Need Help?**

- **KPI Dashboard**: `http://localhost:3000/kpi-dashboard`
- **Email System**: `http://localhost:3000/test-email`
- **Competitive Analysis**: Check the `competitor-analysis.md` file

---

**Remember**: The goal is to use SEMrush data to understand your competitive position and make data-driven decisions to improve your market share in the Utah dumpster rental market!
