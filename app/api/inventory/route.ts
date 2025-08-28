import { NextRequest, NextResponse } from 'next/server';
import { inventoryService } from '../../services/InventoryService';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get('action');
    
    switch (action) {
      case 'status':
        const status = inventoryService.getInventoryStatus();
        return NextResponse.json(status);
        
      case 'available':
        const availableSizes = inventoryService.getAvailableSizes();
        return NextResponse.json(availableSizes);
        
      case 'check':
        const size = searchParams.get('size');
        const date = searchParams.get('date');
        if (!size || !date) {
          return NextResponse.json({ error: 'Size and date are required' }, { status: 400 });
        }
        const availability = inventoryService.checkAvailability(size, date);
        return NextResponse.json(availability);
        
      default:
        const allDumpsters = inventoryService.getAllDumpsters();
        return NextResponse.json(allDumpsters);
    }
  } catch (error) {
    console.error('Inventory API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, ...data } = body;
    
    switch (action) {
             case 'reserve':
         const { size, customerName, deliveryDate, duration } = data;
         if (!size || !customerName || !deliveryDate || !duration) {
           return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
         }
         const reserved = inventoryService.reserveDumpster(size, customerName, deliveryDate, duration);
         if (reserved.success) {
           return NextResponse.json({ success: true, dumpsterId: reserved.dumpsterId });
         }
         return NextResponse.json({ success: false });
        
      case 'update':
        const { dumpsterId, status, customerData } = data;
        if (!dumpsterId || !status) {
          return NextResponse.json({ error: 'Dumpster ID and status are required' }, { status: 400 });
        }
        const updated = inventoryService.updateDumpsterStatus(dumpsterId, status, customerData);
        return NextResponse.json({ success: updated });
        
      case 'add':
        const newDumpster = data;
        const newDumpsterId = inventoryService.addDumpster(newDumpster);
        return NextResponse.json({ success: true, id: newDumpsterId });
        
      case 'remove':
        const { id } = data;
        if (!id) {
          return NextResponse.json({ error: 'Dumpster ID is required' }, { status: 400 });
        }
        const removed = inventoryService.removeDumpster(id);
        return NextResponse.json({ success: removed });
        
      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }
  } catch (error) {
    console.error('Inventory API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
