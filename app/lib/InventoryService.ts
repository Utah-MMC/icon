interface InventoryItem {
  id: string;
  name: string;
  quantity: number;
  location: string;
  lastUpdated: Date;
}

class InventoryService {
  private inventory: InventoryItem[] = [];

  constructor() {
    // Only load inventory on client-side
    if (typeof window !== 'undefined') {
      this.loadInventory();
    }
  }

  private loadInventory() {
    // Load inventory from localStorage or database
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const stored = localStorage.getItem('inventory');
        if (stored) {
          this.inventory = JSON.parse(stored);
        }
      }
    } catch (error) {
      console.error('InventoryService: Failed to load inventory:', error);
    }
  }

  private saveInventory() {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('inventory', JSON.stringify(this.inventory));
      }
    } catch (error) {
      console.error('InventoryService: Failed to save inventory:', error);
    }
  }

  getAllItems(): InventoryItem[] {
    return [...this.inventory];
  }

  getItem(id: string): InventoryItem | undefined {
    return this.inventory.find(item => item.id === id);
  }

  addItem(item: Omit<InventoryItem, 'id' | 'lastUpdated'>): InventoryItem {
    const newItem: InventoryItem = {
      ...item,
      id: Date.now().toString(),
      lastUpdated: new Date()
    };
    
    this.inventory.push(newItem);
    this.saveInventory();
    return newItem;
  }

  updateItem(id: string, updates: Partial<InventoryItem>): InventoryItem | null {
    const index = this.inventory.findIndex(item => item.id === id);
    if (index === -1) return null;

    this.inventory[index] = {
      ...this.inventory[index],
      ...updates,
      lastUpdated: new Date()
    };

    this.saveInventory();
    return this.inventory[index];
  }

  deleteItem(id: string): boolean {
    const index = this.inventory.findIndex(item => item.id === id);
    if (index === -1) return false;

    this.inventory.splice(index, 1);
    this.saveInventory();
    return true;
  }

  searchItems(query: string): InventoryItem[] {
    const lowerQuery = query.toLowerCase();
    return this.inventory.filter(item =>
      item.name.toLowerCase().includes(lowerQuery) ||
      item.location.toLowerCase().includes(lowerQuery)
    );
  }

  getInventoryStatus() {
    const totalItems = this.inventory.length;
    const availableItems = this.inventory.filter(item => item.quantity > 0).length;
    const utilizationRate = totalItems > 0 ? ((totalItems - availableItems) / totalItems) * 100 : 0;
    
    return {
      totalDumpsters: totalItems,
      availableDumpsters: availableItems,
      utilizationRate: utilizationRate
    };
  }
}

export default InventoryService;

// Export a singleton instance
export const inventoryService = new InventoryService();
