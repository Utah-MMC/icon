'use client';

import { useEffect, useState } from 'react';

interface CompetitiveMetrics {
  // Review Metrics
  googleReviews: number;
  googleRating: number;
  reviewResponseTime: number;
  reviewRequestRate: number;
  
  // Market Position
  adRank: number;
  marketShare: number;
  competitorPosition: number;
  
  // Service Quality
  responseTime: number;
  customerSatisfaction: number;
  serviceGuaranteeClaims: number;
  
  // Technology Adoption
  onlineBookingRate: number;
  mobileAppUsage: number;
  digitalServiceAdoption: number;
}

interface CompetitorData {
  name: string;
  rating: number;
  reviews: number;
  adRank: number;
  marketPosition: string;
}

export default function CompetitiveKPITracking() {
  const [metrics, setMetrics] = useState<CompetitiveMetrics>({
    googleReviews: 0,
    googleRating: 5.0,
    reviewResponseTime: 0,
    reviewRequestRate: 0,
    adRank: 0,
    marketShare: 0,
    competitorPosition: 7,
    responseTime: 0,
    customerSatisfaction: 0,
    serviceGuaranteeClaims: 0,
    onlineBookingRate: 0,
    mobileAppUsage: 0,
    digitalServiceAdoption: 0
  });

  const [competitors, setCompetitors] = useState<CompetitorData[]>([
    { name: 'Blue Bin Dumpster Rentals', rating: 5.0, reviews: 259, adRank: 1.9, marketPosition: 'Market Leader' },
    { name: 'Bin There Dump That Salt Lake', rating: 4.9, reviews: 309, adRank: 4.3, marketPosition: 'Strong Competitor' },
    { name: 'Dumpster Today', rating: 4.9, reviews: 59, adRank: 7.6, marketPosition: 'Mid-Market' },
    { name: 'redbox+ Dumpsters', rating: 5.0, reviews: 41, adRank: 4.1, marketPosition: 'Niche Player' },
    { name: 'Dumpster Depot', rating: 5.0, reviews: 29, adRank: 4.5, marketPosition: 'Small Player' },
    { name: 'Brady Brothers Containers', rating: 5.0, reviews: 18, adRank: 8.7, marketPosition: 'Small Player' },
    { name: 'T&T Dumpsters', rating: 4.5, reviews: 23, adRank: 7.3, marketPosition: 'Small Player' }
  ]);

  useEffect(() => {
    initializeCompetitiveTracking();
  }, []);

  const initializeCompetitiveTracking = () => {
    // Load existing KPI data
    loadExistingKPIData();
    
    // Set up competitive monitoring
    setupCompetitiveMonitoring();
    
    // Start automated tracking
    startAutomatedTracking();
  };

  const loadExistingKPIData = () => {
    if (typeof window !== 'undefined') {
      const existingKPI = localStorage.getItem('iconDumpstersKPI');
      if (existingKPI) {
        const kpiData = JSON.parse(existingKPI);
        setMetrics(prev => ({
          ...prev,
          googleReviews: kpiData.quoteRequests || 0,
          customerSatisfaction: kpiData.customerSatisfaction || 0,
          onlineBookingRate: kpiData.websiteVisitors ? (kpiData.quoteRequests / kpiData.websiteVisitors * 100) : 0
        }));
      }
    }
  };

  const setupCompetitiveMonitoring = () => {
    // Track competitor changes
    setInterval(() => {
      updateCompetitivePosition();
    }, 24 * 60 * 60 * 1000); // Daily updates
  };

  const startAutomatedTracking = () => {
    // Track review requests
    trackReviewRequests();
    
    // Track response times
    trackResponseTimes();
    
    // Track service quality
    trackServiceQuality();
  };

  const trackReviewRequests = () => {
    // Monitor form submissions for review requests
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      form.addEventListener('submit', () => {
        const currentMetrics = { ...metrics };
        currentMetrics.reviewRequestRate += 1;
        setMetrics(currentMetrics);
        saveCompetitiveData(currentMetrics);
      });
    });
  };

  const trackResponseTimes = () => {
    // Track customer service response times
    const startTime = Date.now();
    
    // Simulate response time tracking
    setTimeout(() => {
      const responseTime = Date.now() - startTime;
      const currentMetrics = { ...metrics };
      currentMetrics.responseTime = responseTime / 1000; // Convert to seconds
      setMetrics(currentMetrics);
      saveCompetitiveData(currentMetrics);
    }, 1000);
  };

  const trackServiceQuality = () => {
    // Track customer satisfaction and service quality
    const satisfactionScore = Math.random() * 5; // Simulate satisfaction score
    const currentMetrics = { ...metrics };
    currentMetrics.customerSatisfaction = satisfactionScore;
    setMetrics(currentMetrics);
    saveCompetitiveData(currentMetrics);
  };

  const updateCompetitivePosition = () => {
    // Calculate market position based on metrics
    const totalReviews = competitors.reduce((sum, comp) => sum + comp.reviews, 0);
    const marketShare = (metrics.googleReviews / totalReviews) * 100;
    
    // Calculate position ranking
    const sortedCompetitors = [...competitors].sort((a, b) => b.reviews - a.reviews);
    const position = sortedCompetitors.findIndex(comp => comp.reviews <= metrics.googleReviews) + 1;
    
    const currentMetrics = { ...metrics };
    currentMetrics.marketShare = marketShare;
    currentMetrics.competitorPosition = position;
    setMetrics(currentMetrics);
    saveCompetitiveData(currentMetrics);
  };

  const saveCompetitiveData = (data: CompetitiveMetrics) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('iconDumpstersCompetitiveKPI', JSON.stringify(data));
    }
  };

  const generateCompetitiveReport = () => {
    const report = {
      timestamp: new Date().toISOString(),
      metrics: metrics,
      competitors: competitors,
      recommendations: generateRecommendations()
    };
    
    console.log('Competitive KPI Report:', report);
    return report;
  };

  const generateRecommendations = () => {
    const recommendations = [];
    
    // Review generation recommendations
    if (metrics.googleReviews < 50) {
      recommendations.push('Implement aggressive review generation campaign');
    }
    
    // Ad rank recommendations
    if (metrics.adRank > 5) {
      recommendations.push('Optimize Google Ads to improve ad rank');
    }
    
    // Market position recommendations
    if (metrics.competitorPosition > 3) {
      recommendations.push('Focus on market penetration strategies');
    }
    
    // Service quality recommendations
    if (metrics.customerSatisfaction < 4.5) {
      recommendations.push('Improve customer service and satisfaction');
    }
    
    return recommendations;
  };

  const getCompetitiveAdvantage = () => {
    const advantages = [];
    
    // Technology advantages
    if (metrics.onlineBookingRate > 30) {
      advantages.push('Strong online booking system');
    }
    
    // Service advantages
    if (metrics.responseTime < 7200) { // 2 hours in seconds
      advantages.push('Fast response times');
    }
    
    // Quality advantages
    if (metrics.customerSatisfaction > 4.5) {
      advantages.push('High customer satisfaction');
    }
    
    return advantages;
  };

  const getCompetitiveThreats = () => {
    const threats = [];
    
    // Review volume threats
    const topCompetitor = competitors[0];
    if (metrics.googleReviews < topCompetitor.reviews * 0.5) {
      threats.push(`Low review volume compared to ${topCompetitor.name}`);
    }
    
    // Ad rank threats
    if (metrics.adRank > 5) {
      threats.push('Poor ad positioning affecting visibility');
    }
    
    // Market share threats
    if (metrics.marketShare < 10) {
      threats.push('Low market share in competitive landscape');
    }
    
    return threats;
  };

  // Auto-generate report every hour
  useEffect(() => {
    const interval = setInterval(() => {
      generateCompetitiveReport();
    }, 60 * 60 * 1000); // Hourly
    
    return () => clearInterval(interval);
  }, [metrics]);

  return (
    <div className="competitive-kpi-tracking" style={{ display: 'none' }}>
      {/* This component runs in background for tracking */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Competitive KPI Tracking Active
            console.log('Competitive KPI Tracking: Active');
            
            // Track review requests
            document.addEventListener('DOMContentLoaded', function() {
              const forms = document.querySelectorAll('form');
              forms.forEach(form => {
                form.addEventListener('submit', function() {
                  console.log('Form submission tracked for competitive analysis');
                });
              });
            });
            
            // Track phone calls
            const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
            phoneLinks.forEach(link => {
              link.addEventListener('click', function() {
                console.log('Phone call tracked for competitive analysis');
              });
            });
          `
        }}
      />
    </div>
  );
}
