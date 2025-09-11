'use client';

import { useEffect, useRef } from 'react';

interface CompetitorData {
  name: string;
  rating: number;
  reviews: number;
  adRank: number;
  marketPosition: string;
}

export default function CompetitiveKPITracking() {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const formListenersRef = useRef<Array<{ form: Element; listener: EventListener }>>([]);
  const initializedRef = useRef(false);

  useEffect(() => {
    // Only initialize once
    if (initializedRef.current || typeof window === 'undefined') {
      return;
    }

    console.log('Competitive KPI Tracking: Initializing');

    try {
      // Static competitor data
      const competitors: CompetitorData[] = [
        { name: 'Blue Bin Dumpster Rentals', rating: 5.0, reviews: 259, adRank: 1.9, marketPosition: 'Market Leader' },
        { name: 'Bin There Dump That Salt Lake', rating: 4.9, reviews: 309, adRank: 4.3, marketPosition: 'Strong Competitor' },
        { name: 'Dumpster Today', rating: 4.9, reviews: 59, adRank: 7.6, marketPosition: 'Mid-Market' },
        { name: 'redbox+ Dumpsters', rating: 5.0, reviews: 41, adRank: 4.1, marketPosition: 'Niche Player' },
        { name: 'Dumpster Depot', rating: 5.0, reviews: 29, adRank: 4.5, marketPosition: 'Small Player' },
        { name: 'Brady Brothers Containers', rating: 5.0, reviews: 18, adRank: 8.7, marketPosition: 'Small Player' },
        { name: 'T&T Dumpsters', rating: 4.5, reviews: 23, adRank: 7.3, marketPosition: 'Small Player' }
      ];

      // Load existing KPI data and save competitive metrics
      const existingKPI = localStorage.getItem('iconDumpstersKPI');
      let competitiveData = {
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
      };

      if (existingKPI) {
        const kpiData = JSON.parse(existingKPI);
        competitiveData = {
          ...competitiveData,
          googleReviews: kpiData.quoteRequests || 0,
          customerSatisfaction: kpiData.customerSatisfaction || 0,
          onlineBookingRate: kpiData.websiteVisitors ? (kpiData.quoteRequests / kpiData.websiteVisitors * 100) : 0
        };
      }

      // Set up form tracking
      const forms = document.querySelectorAll('form:not([data-inventory-form])');
      forms.forEach(form => {
        const listener = () => {
          // Update competitive data without state
          competitiveData.reviewRequestRate += 1;
          try {
            localStorage.setItem('iconDumpstersCompetitiveKPI', JSON.stringify(competitiveData));
          } catch (error) {
            console.log('Error saving competitive data:', error);
          }
        };
        
        form.addEventListener('submit', listener);
        formListenersRef.current.push({ form, listener });
      });

      // Set up competitive monitoring interval
      if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
          const totalReviews = competitors.reduce((sum, comp) => sum + comp.reviews, 0);
          const marketShare = (competitiveData.googleReviews / totalReviews) * 100;
          const sortedCompetitors = [...competitors].sort((a, b) => b.reviews - a.reviews);
          const position = sortedCompetitors.findIndex(comp => comp.reviews <= competitiveData.googleReviews) + 1;
          
          competitiveData.marketShare = marketShare;
          competitiveData.competitorPosition = position;
          
          try {
            localStorage.setItem('iconDumpstersCompetitiveKPI', JSON.stringify(competitiveData));
          } catch (error) {
            console.log('Error saving competitive data:', error);
          }
        }, 24 * 60 * 60 * 1000); // Daily updates
      }

      // Set initial metrics
      const startTime = Date.now();
      competitiveData.responseTime = (Date.now() - startTime) / 1000;
      competitiveData.customerSatisfaction = Math.random() * 5;
      
      try {
        localStorage.setItem('iconDumpstersCompetitiveKPI', JSON.stringify(competitiveData));
      } catch (error) {
        console.log('Error saving competitive data:', error);
      }

      initializedRef.current = true;

    } catch (error) {
      console.log('Error initializing competitive tracking:', error);
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
  }, []); // Empty dependency array - only run once

  // This component doesn't render anything visible
  return null;
}
