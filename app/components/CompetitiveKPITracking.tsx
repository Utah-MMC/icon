'use client';

import { useEffect, useState, useRef } from 'react';

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

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const formListenersRef = useRef<Array<{ form: Element; listener: EventListener }>>([]);

  useEffect(() => {
    console.log('Competitive KPI Tracking: Active');
    
    // Only initialize if we're in the browser
    if (typeof window !== 'undefined') {
      initializeCompetitiveTracking();
    }

    // Cleanup function
    return () => {
      console.log('Competitive KPI Tracking: Cleaning up');
      
      // Clear interval
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      
      // Remove form listeners
      formListenersRef.current.forEach(({ form, listener }) => {
        try {
          form.removeEventListener('submit', listener);
        } catch (error) {
          console.log('Error removing form listener:', error);
        }
      });
      formListenersRef.current = [];
    };
  }, []);

  const initializeCompetitiveTracking = () => {
    try {
      // Load existing KPI data
      loadExistingKPIData();
      
      // Set up competitive monitoring
      setupCompetitiveMonitoring();
      
      // Start automated tracking
      startAutomatedTracking();
    } catch (error) {
      console.log('Error initializing competitive tracking:', error);
    }
  };

  const loadExistingKPIData = () => {
    try {
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
    } catch (error) {
      console.log('Error loading existing KPI data:', error);
    }
  };

  const setupCompetitiveMonitoring = () => {
    try {
      // Track competitor changes - only set up one interval
      if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
          updateCompetitivePosition();
        }, 24 * 60 * 60 * 1000); // Daily updates
      }
    } catch (error) {
      console.log('Error setting up competitive monitoring:', error);
    }
  };

  const startAutomatedTracking = () => {
    try {
      // Track review requests
      trackReviewRequests();
      
      // Track response times
      trackResponseTimes();
      
      // Track service quality
      trackServiceQuality();
    } catch (error) {
      console.log('Error starting automated tracking:', error);
    }
  };

  const trackReviewRequests = () => {
    try {
      // Only track forms that are not part of the inventory system
      const forms = document.querySelectorAll('form:not([data-inventory-form])');
      forms.forEach(form => {
        const listener = () => {
          const currentMetrics = { ...metrics };
          currentMetrics.reviewRequestRate += 1;
          setMetrics(currentMetrics);
          saveCompetitiveData(currentMetrics);
        };
        
        form.addEventListener('submit', listener);
        formListenersRef.current.push({ form, listener });
      });
    } catch (error) {
      console.log('Error tracking review requests:', error);
    }
  };

  const trackResponseTimes = () => {
    try {
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
    } catch (error) {
      console.log('Error tracking response times:', error);
    }
  };

  const trackServiceQuality = () => {
    try {
      // Track customer satisfaction and service quality
      const satisfactionScore = Math.random() * 5; // Simulate satisfaction score
      const currentMetrics = { ...metrics };
      currentMetrics.customerSatisfaction = satisfactionScore;
      setMetrics(currentMetrics);
      saveCompetitiveData(currentMetrics);
    } catch (error) {
      console.log('Error tracking service quality:', error);
    }
  };

  const updateCompetitivePosition = () => {
    try {
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
    } catch (error) {
      console.log('Error updating competitive position:', error);
    }
  };

  const saveCompetitiveData = (data: CompetitiveMetrics) => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('iconDumpstersCompetitiveKPI', JSON.stringify(data));
      }
    } catch (error) {
      console.log('Error saving competitive data:', error);
    }
  };

  // This component doesn't render anything visible
  return null;
}
