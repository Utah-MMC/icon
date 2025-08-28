import { NextRequest, NextResponse } from 'next/server';
import { inventoryService } from '../../../services/InventoryService';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const status = inventoryService.getInventoryStatus();
    const allDumpsters = inventoryService.getAllDumpsters();
    const availableSizes = inventoryService.getAvailableSizes();
    
    return NextResponse.json({
      success: true,
      status,
      totalDumpsters: allDumpsters.length,
      availableSizes,
      sampleDumpster: allDumpsters[0] || null
    });
  } catch (error) {
    console.error('Inventory test error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to test inventory system' 
    }, { status: 500 });
  }
}
