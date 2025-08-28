export interface DumpsterInventory {
  id: string;
  binId: string;
  size: '10yd' | '12yd' | '15yd' | '20yd' | '30yd';
  status: 'Available' | 'Out for Delivery' | 'In Use' | 'Maintenance' | 'Reserved';
  customerName?: string;
  customerPhone?: string;
  deliveryDate?: string;
  expectedPickupDate?: string;
  location?: string;
  notes?: string;
  lastUpdated: string;
}

// Alias for compatibility with existing InventoryTracker
export type Dumpster = DumpsterInventory;

export interface AvailabilityCheck {
  size: string;
  date: string;
  available: boolean;
  count: number;
  alternativeSizes?: string[];
  nextAvailableDate?: string;
}

export interface InventoryStatus {
  totalDumpsters: number;
  availableDumpsters: number;
  utilizationRate: number;
  bySize: {
    [key: string]: {
      total: number;
      available: number;
      utilization: number;
    };
  };
}

class InventoryService {
  private inventory: DumpsterInventory[] = [];
  private readonly STORAGE_KEY = 'dumpsterInventory';

  constructor() {
    this.loadInventory();
  }

  private loadInventory(): void {
    try {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem(this.STORAGE_KEY);
        if (saved) {
          this.inventory = JSON.parse(saved);
        } else {
          // Initialize with default inventory
          this.initializeDefaultInventory();
        }
      }
    } catch (error) {
      console.error('Error loading inventory:', error);
      this.initializeDefaultInventory();
    }
  }

  private initializeDefaultInventory(): void {
    // Check if existing inventory data exists from InventoryTracker
    const existingInventory = localStorage.getItem('dumpsterInventory');
    if (existingInventory) {
      try {
        this.inventory = JSON.parse(existingInventory);
        console.log('Loaded existing inventory from InventoryTracker:', this.inventory.length, 'dumpsters');
        return;
      } catch (error) {
        console.error('Error parsing existing inventory, using default:', error);
      }
    }

    // Initialize with default inventory if no existing data
    this.inventory = [
      // 15-yard dumpsters
      { id: 'D001', binId: 'BIN-001', size: '15yd', status: 'Available', lastUpdated: new Date().toISOString() },
      { id: 'D002', binId: 'BIN-002', size: '15yd', status: 'Available', lastUpdated: new Date().toISOString() },
      { id: 'D003', binId: 'BIN-003', size: '15yd', status: 'Available', lastUpdated: new Date().toISOString() },
      { id: 'D004', binId: 'BIN-004', size: '15yd', status: 'In Use', customerName: 'John Smith', deliveryDate: '2024-01-15', expectedPickupDate: '2024-01-22', location: '123 Main St, Salt Lake City', lastUpdated: new Date().toISOString() },
      
      // 20-yard dumpsters
      { id: 'D005', binId: 'BIN-005', size: '20yd', status: 'Available', lastUpdated: new Date().toISOString() },
      { id: 'D006', binId: 'BIN-006', size: '20yd', status: 'Available', lastUpdated: new Date().toISOString() },
      { id: 'D007', binId: 'BIN-007', size: '20yd', status: 'Out for Delivery', customerName: 'Jane Doe', deliveryDate: '2024-01-16', expectedPickupDate: '2024-01-23', location: '456 Oak Ave, Sandy', lastUpdated: new Date().toISOString() },
      
      // 30-yard dumpsters
      { id: 'D008', binId: 'BIN-008', size: '30yd', status: 'Available', lastUpdated: new Date().toISOString() },
      { id: 'D009', binId: 'BIN-009', size: '30yd', status: 'Available', lastUpdated: new Date().toISOString() },
      { id: 'D010', binId: 'BIN-010', size: '30yd', status: 'Maintenance', notes: 'Needs repair - hydraulic issue', lastUpdated: new Date().toISOString() },
      
      // Specialized dumpsters
      { id: 'D011', binId: 'BIN-011', size: '10yd', status: 'Available', notes: 'Clean dirt only', lastUpdated: new Date().toISOString() },
      { id: 'D012', binId: 'BIN-012', size: '10yd', status: 'Available', notes: 'Mixed load', lastUpdated: new Date().toISOString() },
      { id: 'D013', binId: 'BIN-013', size: '12yd', status: 'Available', notes: 'Concrete only', lastUpdated: new Date().toISOString() },
    ];
    this.saveInventory();
  }

  private saveInventory(): void {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.inventory));
        
        // Update KPI system with utilization data
        const availableCount = this.inventory.filter(d => d.status === 'Available').length;
        const totalCount = this.inventory.length;
        
        if (window.iconDumpstersKPI) {
          window.iconDumpstersKPI.updateUtilization(totalCount - availableCount, totalCount);
        }
      }
    } catch (error) {
      console.error('Error saving inventory:', error);
    }
  }

  public checkAvailability(size: string, date: string): AvailabilityCheck {
    const requestedSize = size.includes('yd') ? size : `${size}yd`;
    const availableDumpsters = this.inventory.filter(dumpster => 
      dumpster.size === requestedSize && 
      dumpster.status === 'Available'
    );

    const isAvailable = availableDumpsters.length > 0;
    
    // Find alternative sizes if requested size is not available
    let alternativeSizes: string[] = [];
    if (!isAvailable) {
      const allAvailableSizes = this.inventory
        .filter(d => d.status === 'Available')
        .map(d => d.size)
        .filter((size, index, arr) => arr.indexOf(size) === index);
      
      alternativeSizes = allAvailableSizes.filter(s => s !== requestedSize);
    }

    // Find next available date if not available on requested date
    let nextAvailableDate: string | undefined;
    if (!isAvailable) {
      const today = new Date();
      for (let i = 1; i <= 7; i++) {
        const checkDate = new Date(today);
        checkDate.setDate(today.getDate() + i);
        
        // Check if any dumpsters will be available on this date
        const willBeAvailable = this.inventory.some(dumpster => 
          dumpster.size === requestedSize && 
          dumpster.expectedPickupDate === checkDate.toISOString().split('T')[0]
        );
        
        if (willBeAvailable) {
          nextAvailableDate = checkDate.toISOString().split('T')[0];
          break;
        }
      }
    }

    return {
      size: requestedSize,
      date,
      available: isAvailable,
      count: availableDumpsters.length,
      alternativeSizes,
      nextAvailableDate
    };
  }

  public reserveDumpster(size: string, customerName: string, deliveryDate: string, duration: number): { success: boolean; dumpsterId?: string } {
    const requestedSize = size.includes('yd') ? size : `${size}yd`;
    const availableDumpster = this.inventory.find(dumpster => 
      dumpster.size === requestedSize && 
      dumpster.status === 'Available'
    );

    if (availableDumpster) {
      const pickupDate = new Date(deliveryDate);
      pickupDate.setDate(pickupDate.getDate() + duration);
      
      availableDumpster.status = 'Reserved';
      availableDumpster.customerName = customerName;
      availableDumpster.deliveryDate = deliveryDate;
      availableDumpster.expectedPickupDate = pickupDate.toISOString().split('T')[0];
      availableDumpster.lastUpdated = new Date().toISOString();
      
      this.saveInventory();
      return { success: true, dumpsterId: availableDumpster.id };
    }

    return { success: false };
  }

  public getInventoryStatus(): InventoryStatus {
    const totalDumpsters = this.inventory.length;
    const availableDumpsters = this.inventory.filter(d => d.status === 'Available').length;
    const utilizationRate = ((totalDumpsters - availableDumpsters) / totalDumpsters) * 100;

    const bySize: { [key: string]: { total: number; available: number; utilization: number } } = {};
    
    this.inventory.forEach(dumpster => {
      if (!bySize[dumpster.size]) {
        bySize[dumpster.size] = { total: 0, available: 0, utilization: 0 };
      }
      bySize[dumpster.size].total++;
      if (dumpster.status === 'Available') {
        bySize[dumpster.size].available++;
      }
    });

    // Calculate utilization by size
    Object.keys(bySize).forEach(size => {
      bySize[size].utilization = ((bySize[size].total - bySize[size].available) / bySize[size].total) * 100;
    });

    return {
      totalDumpsters,
      availableDumpsters,
      utilizationRate,
      bySize
    };
  }

  public getAvailableSizes(): string[] {
    const availableSizes = this.inventory
      .filter(d => d.status === 'Available')
      .map(d => d.size)
      .filter((size, index, arr) => arr.indexOf(size) === index);
    
    return availableSizes;
  }

  public updateDumpsterStatus(dumpsterId: string, status: DumpsterInventory['status'], customerData?: Partial<DumpsterInventory>): boolean {
    const dumpster = this.inventory.find(d => d.id === dumpsterId);
    if (dumpster) {
      dumpster.status = status;
      dumpster.lastUpdated = new Date().toISOString();
      
      if (customerData) {
        Object.assign(dumpster, customerData);
      }
      
      this.saveInventory();
      return true;
    }
    return false;
  }

  public getDumpsterById(id: string): DumpsterInventory | undefined {
    return this.inventory.find(d => d.id === id);
  }

  public getAllDumpsters(): DumpsterInventory[] {
    return [...this.inventory];
  }

  public addDumpster(dumpster: Omit<DumpsterInventory, 'id' | 'lastUpdated'>): string {
    const newId = `D${String(this.inventory.length + 1).padStart(3, '0')}`;
    const newDumpster: DumpsterInventory = {
      ...dumpster,
      id: newId,
      lastUpdated: new Date().toISOString()
    };
    
    this.inventory.push(newDumpster);
    this.saveInventory();
    return newId;
  }

  public removeDumpster(id: string): boolean {
    const index = this.inventory.findIndex(d => d.id === id);
    if (index !== -1) {
      this.inventory.splice(index, 1);
      this.saveInventory();
      return true;
    }
    return false;
  }
}

export const inventoryService = new InventoryService();
