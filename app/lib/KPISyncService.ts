/**
 * KPI Sync Service
 * Syncs inventory data with KPI tracking system
 */

interface InventoryStats {
  totalDumpsters: number;
  activeRentals: number;
  availableDumpsters: number;
  maintenanceDumpsters: number;
  utilizationRate: number;
}

class KPISyncService {
  private static instance: KPISyncService;

  private constructor() {}

  public static getInstance(): KPISyncService {
    if (!KPISyncService.instance) {
      KPISyncService.instance = new KPISyncService();
    }
    return KPISyncService.instance;
  }

  /**
   * Update KPI system with current inventory stats
   */
  public updateKPIsWithInventory(stats: InventoryStats): void {
    try {
      // Update localStorage with current inventory data
      if (typeof window !== 'undefined') {
        const kpiData = {
          utilization: stats.utilizationRate,
          activeRentals: stats.activeRentals,
          totalDumpsters: stats.totalDumpsters,
          availableDumpsters: stats.availableDumpsters,
          lastUpdated: new Date().toISOString()
        };

        localStorage.setItem('kpi-inventory-sync', JSON.stringify(kpiData));
        
        // Update the main KPI data (iconDumpstersKPI)
        const existingKPIData = localStorage.getItem('iconDumpstersKPI');
        if (existingKPIData) {
          const parsed = JSON.parse(existingKPIData);
          parsed.utilization = stats.utilizationRate;
          parsed.rentals = stats.activeRentals;
          localStorage.setItem('iconDumpstersKPI', JSON.stringify(parsed));
        } else {
          // Create new KPI data with current inventory stats
          const newKPIData = {
            revenue: 0,
            rentals: stats.activeRentals,
            utilization: stats.utilizationRate,
            websiteVisitors: 0,
            quoteRequests: 0,
            phoneCalls: 0,
            conversionRate: 0,
            customerSatisfaction: 0
          };
          localStorage.setItem('iconDumpstersKPI', JSON.stringify(newKPIData));
        }
      }
    } catch (error) {
      console.error('KPISyncService: Failed to update KPIs:', error);
    }
  }

  /**
   * Get current inventory stats from KPI system
   */
  public getInventoryStatsFromKPI(): InventoryStats | null {
    try {
      if (typeof window !== 'undefined') {
        const kpiData = localStorage.getItem('kpi-inventory-sync');
        if (kpiData) {
          const parsed = JSON.parse(kpiData);
          return {
            totalDumpsters: parsed.totalDumpsters || 44,
            activeRentals: parsed.activeRentals || 36,
            availableDumpsters: parsed.availableDumpsters || 8,
            maintenanceDumpsters: 0,
            utilizationRate: parsed.utilization || 81.8
          };
        }
      }
    } catch (error) {
      console.error('KPISyncService: Failed to get inventory stats:', error);
    }
    return null;
  }

  /**
   * Sync inventory changes to KPI dashboard
   */
  public syncInventoryChange(
    totalDumpsters: number,
    activeRentals: number,
    availableDumpsters: number,
    maintenanceDumpsters: number = 0
  ): void {
    const utilizationRate = totalDumpsters > 0 ? (activeRentals / totalDumpsters) * 100 : 0;
    
    const stats: InventoryStats = {
      totalDumpsters,
      activeRentals,
      availableDumpsters,
      maintenanceDumpsters,
      utilizationRate
    };

    this.updateKPIsWithInventory(stats);
    
    // Dispatch custom event to notify other components
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('inventory-updated', {
        detail: stats
      }));
    }
  }

  /**
   * Get utilization rate for KPI dashboard
   */
  public getUtilizationRate(): number {
    const stats = this.getInventoryStatsFromKPI();
    return stats ? stats.utilizationRate : 81.8;
  }

  /**
   * Get active rentals count for KPI dashboard
   */
  public getActiveRentals(): number {
    const stats = this.getInventoryStatsFromKPI();
    return stats ? stats.activeRentals : 36;
  }

  /**
   * Get total dumpsters count for KPI dashboard
   */
  public getTotalDumpsters(): number {
    const stats = this.getInventoryStatsFromKPI();
    return stats ? stats.totalDumpsters : 44;
  }
}

export default KPISyncService;

// Export singleton instance
export const kpiSyncService = KPISyncService.getInstance();
