import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const dataPath = path.join(process.cwd(), 'data', 'competitor-data.json');
    
    if (!fs.existsSync(dataPath)) {
      return NextResponse.json({
        error: 'No competitor data available'
      }, { status: 404 });
    }
    
    const rawData = fs.readFileSync(dataPath, 'utf8');
    const competitorData = JSON.parse(rawData);
    
    return NextResponse.json({
      competitors: competitorData.competitors,
      analytics: competitorData.analytics,
      summary: competitorData.summary
    });
  } catch (error) {
    console.error('Error loading competitor data:', error);
    return NextResponse.json({
      error: 'Failed to load competitor data'
    }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { action } = await request.json();
    
    if (action === 'analyze_competitors') {
      // Simulate competitor analysis process
      const dataPath = path.join(process.cwd(), 'data', 'competitor-data.json');
      
      if (!fs.existsSync(dataPath)) {
        return NextResponse.json({
          error: 'No competitor data available. Please run the data processing script first.'
        }, { status: 404 });
      }
      
      const rawData = fs.readFileSync(dataPath, 'utf8');
      const competitorData = JSON.parse(rawData);
      
      // Add some analysis insights
      const insights = generateCompetitorInsights(competitorData);
      
      return NextResponse.json({
        competitors: competitorData.competitors,
        analytics: competitorData.analytics,
        insights: insights,
        summary: competitorData.summary,
        message: 'Competitor analysis completed successfully'
      });
    }
    
    return NextResponse.json({
      error: 'Invalid action'
    }, { status: 400 });
  } catch (error) {
    console.error('Error in competitor analysis:', error);
    return NextResponse.json({
      error: 'Failed to analyze competitors'
    }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { action, competitorIds } = await request.json();
    
    if (action === 'delete_competitors' && competitorIds && Array.isArray(competitorIds)) {
      const dataPath = path.join(process.cwd(), 'data', 'competitor-data.json');
      
      if (!fs.existsSync(dataPath)) {
        return NextResponse.json({
          error: 'Competitor data file not found'
        }, { status: 404 });
      }

      // Read current data
      const rawData = fs.readFileSync(dataPath, 'utf8');
      const competitorData = JSON.parse(rawData);
      
      // Get all competitors first to map indices to actual competitors
      const allCompetitors = competitorData.competitors;
      
      // Map frontend indices to actual competitors
      const competitorsToDelete = [];
      for (const index of competitorIds) {
        if (0 <= index && index < allCompetitors.length) {
          competitorsToDelete.push(allCompetitors[index]);
        }
      }
      
      if (competitorsToDelete.length === 0) {
        return NextResponse.json({
          error: 'No valid competitors to delete',
          deletedCount: 0
        }, { status: 400 });
      }
      
      // Remove the selected competitors
      const updatedCompetitors = allCompetitors.filter((competitor: any, index: number) => 
        !competitorIds.includes(index)
      );
      
      // Update the data
      competitorData.competitors = updatedCompetitors;
      
      // Recalculate analytics and summary
      competitorData.analytics = recalculateAnalytics(updatedCompetitors);
      competitorData.summary = recalculateSummary(updatedCompetitors);
      
      // Write back to file
      fs.writeFileSync(dataPath, JSON.stringify(competitorData, null, 2));
      
      return NextResponse.json({
        message: `Successfully deleted ${competitorsToDelete.length} competitors`,
        deletedCount: competitorsToDelete.length,
        deletedCompetitors: competitorsToDelete.map(c => c.company_name)
      });
    }

    return NextResponse.json({
      error: 'Invalid delete request'
    }, { status: 400 });
  } catch (error) {
    console.error('Error deleting competitors:', error);
    return NextResponse.json({
      error: 'Failed to delete competitors'
    }, { status: 500 });
  }
}

function generateCompetitorInsights(data: any) {
  const insights = {
    market_analysis: {
      total_competitors: data.competitors.length,
      industry_dominance: getTopIndustry(data.analytics.industries),
      service_coverage: getTopServiceAreas(data.analytics.service_areas),
      market_gaps: identifyMarketGaps(data.competitors)
    },
    competitive_intelligence: {
      strongest_competitors: identifyStrongestCompetitors(data.competitors),
      pricing_insights: analyzePricing(data.competitors),
      service_differentiation: analyzeServiceDifferentiation(data.competitors)
    },
    digital_presence: {
      social_media_leaders: getSocialMediaLeaders(data.competitors),
      website_quality: analyzeWebsiteQuality(data.competitors),
      contact_accessibility: analyzeContactAccessibility(data.competitors)
    },
    opportunities: {
      underserved_areas: identifyUnderservedAreas(data.analytics.service_areas),
      service_gaps: identifyServiceGaps(data.competitors),
      digital_opportunities: identifyDigitalOpportunities(data.competitors)
    }
  };
  
  return insights;
}

function getTopIndustry(industries: any) {
  const sorted = Object.entries(industries).sort(([,a], [,b]) => (b as number) - (a as number));
  return sorted[0] ? { industry: sorted[0][0], count: sorted[0][1], percentage: ((sorted[0][1] as number) / Object.values(industries).reduce((a: number, b: any) => a + (b as number), 0) * 100).toFixed(1) } : null;
}

function getTopServiceAreas(serviceAreas: any) {
  const sorted = Object.entries(serviceAreas)
    .sort(([,a], [,b]) => (b as any).count - (a as any).count)
    .slice(0, 5);
  return sorted.map(([area, data]) => ({ area, ...(data as any) }));
}

function identifyMarketGaps(competitors: any[]) {
  const allAreas = new Set();
  competitors.forEach(comp => {
    if (comp.service_areas) {
      comp.service_areas.split(',').forEach((area: string) => allAreas.add(area.trim()));
    }
  });
  
  // Common Utah areas that might be underserved
  const utahAreas = ['Park City', 'St. George', 'Cedar City', 'Moab', 'Vernal', 'Price', 'Richfield'];
  return utahAreas.filter(area => !allAreas.has(area));
}

function identifyStrongestCompetitors(competitors: any[]) {
  return competitors
    .filter(comp => comp.has_phone && comp.has_email && comp.has_social_media && comp.has_about_us)
    .sort((a, b) => b.service_area_count - a.service_area_count)
    .slice(0, 5)
    .map(comp => ({
      name: comp.company_name,
      domain: comp.domain,
      service_areas: comp.service_area_count,
      contact_score: (comp.has_phone ? 1 : 0) + (comp.has_email ? 1 : 0) + (comp.has_social_media ? 1 : 0)
    }));
}

function analyzePricing(competitors: any[]) {
  const withPricing = competitors.filter(comp => comp.pricing_info && comp.pricing_info.length > 10);
  return {
    competitors_with_pricing: withPricing.length,
    percentage: ((withPricing.length / competitors.length) * 100).toFixed(1),
    transparency_level: withPricing.length > competitors.length * 0.3 ? 'High' : 'Low'
  };
}

function analyzeServiceDifferentiation(competitors: any[]) {
  const specializations = new Map();
  competitors.forEach(comp => {
    if (comp.specializations) {
      comp.specializations.split('|').forEach((spec: string) => {
        const cleanSpec = spec.trim();
        if (cleanSpec) {
          specializations.set(cleanSpec, (specializations.get(cleanSpec) || 0) + 1);
        }
      });
    }
  });
  
  const sorted = Array.from(specializations.entries()).sort(([,a], [,b]) => (b as number) - (a as number));
  return sorted.slice(0, 5).map(([spec, count]) => ({ specialization: spec, count, percentage: ((count as number) / competitors.length * 100).toFixed(1) }));
}

function getSocialMediaLeaders(competitors: any[]) {
  return competitors
    .filter(comp => comp.has_social_media)
    .sort((a, b) => {
      const aCount = (a.social_media.match(/facebook/g) || []).length + (a.social_media.match(/instagram/g) || []).length + (a.social_media.match(/twitter/g) || []).length;
      const bCount = (b.social_media.match(/facebook/g) || []).length + (b.social_media.match(/instagram/g) || []).length + (b.social_media.match(/twitter/g) || []).length;
      return bCount - aCount;
    })
    .slice(0, 5)
    .map(comp => ({
      name: comp.company_name,
      domain: comp.domain,
      social_platforms: comp.social_media.split('|').length
    }));
}

function analyzeWebsiteQuality(competitors: any[]) {
  const withAbout = competitors.filter(comp => comp.has_about_us).length;
  const withServices = competitors.filter(comp => comp.services && comp.services.length > 10).length;
  
  return {
    with_about_page: withAbout,
    with_services_page: withServices,
    about_percentage: ((withAbout / competitors.length) * 100).toFixed(1),
    services_percentage: ((withServices / competitors.length) * 100).toFixed(1)
  };
}

function analyzeContactAccessibility(competitors: any[]) {
  const phoneOnly = competitors.filter(comp => comp.has_phone && !comp.has_email).length;
  const emailOnly = competitors.filter(comp => comp.has_email && !comp.has_phone).length;
  const both = competitors.filter(comp => comp.has_phone && comp.has_email).length;
  const neither = competitors.filter(comp => !comp.has_phone && !comp.has_email).length;
  
  return {
    phone_only: phoneOnly,
    email_only: emailOnly,
    both_contact_methods: both,
    no_contact_info: neither,
    accessibility_score: ((both + phoneOnly + emailOnly) / competitors.length * 100).toFixed(1)
  };
}

function identifyUnderservedAreas(serviceAreas: any) {
  const sorted = Object.entries(serviceAreas)
    .sort(([,a], [,b]) => (a as any).count - (b as any).count)
    .slice(0, 5);
  return sorted.map(([area, data]) => ({ area, ...(data as any), opportunity: 'Low competition' }));
}

function identifyServiceGaps(competitors: any[]) {
  const allServices = new Set();
  competitors.forEach(comp => {
    if (comp.services) {
      comp.services.split(',').forEach((service: string) => allServices.add(service.trim()));
    }
  });
  
  // Common dumpster rental services that might be missing
  const commonServices = ['Same Day Delivery', 'Weekend Service', 'Emergency Pickup', 'Eco-Friendly Disposal', 'Bulk Pricing'];
  return commonServices.filter(service => !Array.from(allServices).some(existing => (existing as string).toLowerCase().includes(service.toLowerCase())));
}

function identifyDigitalOpportunities(competitors: any[]) {
  const withoutSocial = competitors.filter(comp => !comp.has_social_media).length;
  const withoutEmail = competitors.filter(comp => !comp.has_email).length;
  const withoutAbout = competitors.filter(comp => !comp.has_about_us).length;
  
  return {
    no_social_media: withoutSocial,
    no_email_contact: withoutEmail,
    no_about_page: withoutAbout,
    digital_gaps: {
      social_media_opportunity: ((withoutSocial / competitors.length) * 100).toFixed(1),
      email_marketing_opportunity: ((withoutEmail / competitors.length) * 100).toFixed(1),
      content_marketing_opportunity: ((withoutAbout / competitors.length) * 100).toFixed(1)
    }
  };
}

function recalculateAnalytics(competitors: any[]) {
  const industries: any = {};
  const serviceAreas: any = {};
  const socialMediaPresence: any = {};
  const contactInfo = {
    has_phone: 0,
    has_email: 0,
    has_both: 0,
    has_neither: 0
  };
  
  competitors.forEach(comp => {
    // Industries
    if (comp.industry) {
      industries[comp.industry] = (industries[comp.industry] || 0) + 1;
    }
    
    // Service areas
    if (comp.service_areas) {
      const areas = comp.service_areas.split(',').map((area: string) => area.trim());
      areas.forEach((area: string) => {
        if (area) {
          serviceAreas[area] = {
            count: (serviceAreas[area]?.count || 0) + 1,
            percentage: 0 // Will be calculated below
          };
        }
      });
    }
    
    // Social media presence
    if (comp.social_media) {
      const platforms = comp.social_media.split('|').map((p: string) => p.trim());
      platforms.forEach((platform: string) => {
        if (platform) {
          socialMediaPresence[platform] = (socialMediaPresence[platform] || 0) + 1;
        }
      });
    }
    
    // Contact info
    const hasPhone = comp.has_phone || comp.phone;
    const hasEmail = comp.has_email || comp.email;
    
    if (hasPhone && hasEmail) {
      contactInfo.has_both++;
    } else if (hasPhone) {
      contactInfo.has_phone++;
    } else if (hasEmail) {
      contactInfo.has_email++;
    } else {
      contactInfo.has_neither++;
    }
  });
  
  // Calculate percentages for service areas
  Object.keys(serviceAreas).forEach(area => {
    serviceAreas[area].percentage = ((serviceAreas[area].count / competitors.length) * 100).toFixed(1);
  });
  
  return {
    industries,
    service_areas: serviceAreas,
    social_media_presence: socialMediaPresence,
    contact_info: contactInfo
  };
}

function recalculateSummary(competitors: any[]) {
  const totalCompetitors = competitors.length;
  const industries = new Set(competitors.map(comp => comp.industry).filter(Boolean)).size;
  const serviceAreas = new Set();
  
  competitors.forEach(comp => {
    if (comp.service_areas) {
      comp.service_areas.split(',').forEach((area: string) => {
        if (area.trim()) serviceAreas.add(area.trim());
      });
    }
  });
  
  const hasPhone = competitors.filter(comp => comp.has_phone || comp.phone).length;
  const phoneCoverage = totalCompetitors > 0 ? Math.round((hasPhone / totalCompetitors) * 100) : 0;
  
  return {
    totalCompetitors,
    industries,
    serviceAreas: serviceAreas.size,
    dataQuality: {
      hasPhone: phoneCoverage,
      qualityDistribution: {
        excellent: competitors.filter(comp => comp.quality_score >= 80).length,
        good: competitors.filter(comp => comp.quality_score >= 60 && comp.quality_score < 80).length,
        fair: competitors.filter(comp => comp.quality_score >= 40 && comp.quality_score < 60).length,
        poor: competitors.filter(comp => comp.quality_score < 40).length
      }
    },
    lastUpdated: new Date().toISOString()
  };
}