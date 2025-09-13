import { NextRequest, NextResponse } from 'next/server';

interface RentalData {
  dropOffDate: string;
  size: string;
  client: string;
  address: string;
  invoiceTotal: number;
  county: string;
  month: string;
  year: number;
}

interface SalesMetrics {
  totalRevenue: number;
  totalRentals: number;
  averageRentalValue: number;
  revenueBySize: Record<string, { count: number; revenue: number; average: number }>;
  revenueByMonth: Record<string, { count: number; revenue: number }>;
  topClients: Array<{ client: string; count: number; revenue: number }>;
  revenueByCounty: Record<string, { count: number; revenue: number }>;
  unpaidRentals: number;
  unpaidRevenue: number;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { data, metrics, fileName } = body;

    if (!data || !Array.isArray(data)) {
      return NextResponse.json({
        success: false,
        error: 'Invalid data format'
      }, { status: 400 });
    }

    // Process and validate the data
    const processedData = data.map((row: any) => ({
      dropOffDate: row.dropOffDate || '',
      size: row.size || 'Unknown',
      client: row.client || 'Unknown Client',
      address: row.address || '',
      invoiceTotal: parseFloat(row.invoiceTotal) || 0,
      county: row.county || 'Unknown',
      month: row.month || '',
      year: parseInt(row.year) || new Date().getFullYear()
    }));

    // Calculate summary metrics
    const summary = {
      totalRecords: processedData.length,
      totalRevenue: metrics?.totalRevenue || 0,
      totalRentals: metrics?.totalRentals || 0,
      averageRentalValue: metrics?.averageRentalValue || 0,
      unpaidRentals: metrics?.unpaidRentals || 0,
      dateRange: {
        earliest: processedData.reduce((earliest, rental) => {
          const date = new Date(rental.dropOffDate);
          return !earliest || date < earliest ? date : earliest;
        }, null as Date | null),
        latest: processedData.reduce((latest, rental) => {
          const date = new Date(rental.dropOffDate);
          return !latest || date > latest ? date : latest;
        }, null as Date | null)
      }
    };

    const result = {
      success: true,
      data: {
        rentals: processedData,
        metrics,
        summary,
        metadata: {
          fileName,
          uploadedAt: new Date().toISOString(),
          recordCount: processedData.length
        }
      }
    };

    // Store in a simple file-based storage (you could use a database here)
    console.log('Sales by Rental report uploaded:', {
      fileName,
      recordCount: processedData.length,
      totalRevenue: summary.totalRevenue,
      totalRentals: summary.totalRentals,
      unpaidRentals: summary.unpaidRentals
    });

    return NextResponse.json(result);

  } catch (error) {
    console.error('Sales by Rental upload error:', error);
    
    return NextResponse.json({
      success: false,
      error: 'Failed to process uploaded data'
    }, { status: 500 });
  }
}

export async function GET() {
  try {
    // Return any stored data or summary
    return NextResponse.json({
      success: true,
      message: 'Sales by Rental upload endpoint ready',
      instructions: {
        method: 'POST',
        body: {
          data: 'Array of rental data',
          metrics: 'Calculated metrics object',
          fileName: 'Original filename'
        }
      }
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Failed to get upload status'
    }, { status: 500 });
  }
}
