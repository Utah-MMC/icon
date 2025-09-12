import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function GET() {
  try {
    // Check if Facebook leads file exists
    const facebookLeadsPath = path.join(process.cwd(), 'scraper', 'working_facebook_leads.json');
    
    if (!fs.existsSync(facebookLeadsPath)) {
      return NextResponse.json({
        leads: [],
        summary: {
          totalLeads: 0,
          highPriorityLeads: 0,
          newLeads: 0,
          averageScore: 0,
          totalEstimatedValue: 0,
          lastUpdated: new Date().toISOString()
        }
      });
    }

    // Read Facebook leads data
    const leadsData = JSON.parse(fs.readFileSync(facebookLeadsPath, 'utf8'));
    
    // Calculate summary statistics
    const leads = leadsData.leads || [];
    const totalLeads = leads.length;
    const highPriorityLeads = leads.filter((lead: any) => lead.lead_score >= 80).length;
    const newLeads = leads.filter((lead: any) => {
      const scrapedDate = new Date(lead.scraped_date);
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return scrapedDate >= weekAgo;
    }).length;
    const averageScore = leads.length > 0 ? leads.reduce((sum: number, lead: any) => sum + lead.lead_score, 0) / leads.length : 0;
    const totalEstimatedValue = leads.reduce((sum: number, lead: any) => sum + (lead.estimated_value || 0), 0);
    
    return NextResponse.json({
      leads: leads,
      summary: {
        totalLeads,
        highPriorityLeads,
        newLeads,
        averageScore: Math.round(averageScore * 10) / 10,
        totalEstimatedValue,
        lastUpdated: leadsData.metadata?.scraped_date || new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('Error loading Facebook leads data:', error);
    return NextResponse.json({
      error: 'Failed to load Facebook leads data',
      leads: [],
      summary: {
        totalLeads: 0,
        highPriorityLeads: 0,
        newLeads: 0,
        averageScore: 0,
        totalEstimatedValue: 0,
        lastUpdated: new Date().toISOString()
      }
    }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { action } = await request.json();
    
    if (action === 'generate_facebook_leads') {
      // Run the Facebook lead generation process
      const pythonScript = path.join(process.cwd(), 'scraper', 'working_facebook_scraper.py');
      const { stdout, stderr } = await execAsync(`python "${pythonScript}"`);
      
      if (stderr) {
        console.error('Facebook lead generation error:', stderr);
        return NextResponse.json({
          error: 'Facebook lead generation failed',
          message: stderr
        }, { status: 500 });
      }

      // Parse the output
      const result = parseFacebookOutput(stdout);
      
      return NextResponse.json({
        message: 'Facebook lead generation completed successfully',
        totalLeads: result.total_leads || 0,
        newLeads: result.new_leads || 0,
        highPriorityLeads: result.high_priority_leads || 0,
        output: stdout
      });
    }
    
    return NextResponse.json({
      error: 'Invalid action'
    }, { status: 400 });
  } catch (error) {
    console.error('Error in Facebook lead generation:', error);
    return NextResponse.json({
      error: 'Failed to generate Facebook leads'
    }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { action, leadIds } = await request.json();
    
    if (action === 'delete_facebook_leads' && leadIds && Array.isArray(leadIds)) {
      const facebookLeadsPath = path.join(process.cwd(), 'scraper', 'working_facebook_leads.json');
      
      if (!fs.existsSync(facebookLeadsPath)) {
        return NextResponse.json({
          error: 'Facebook leads file not found'
        }, { status: 404 });
      }

      // Read current leads
      const leadsData = JSON.parse(fs.readFileSync(facebookLeadsPath, 'utf8'));
      const leads = leadsData.leads || [];
      
      // Filter out deleted leads
      const remainingLeads = leads.filter((_: any, index: number) => !leadIds.includes(index));
      
      // Update the file
      const updatedData = {
        ...leadsData,
        leads: remainingLeads,
        metadata: {
          ...leadsData.metadata,
          total_leads: remainingLeads.length,
          last_updated: new Date().toISOString()
        }
      };
      
      fs.writeFileSync(facebookLeadsPath, JSON.stringify(updatedData, null, 2));
      
      return NextResponse.json({
        message: `Successfully deleted ${leadIds.length} Facebook leads`,
        deletedCount: leadIds.length
      });
    }
    
    return NextResponse.json({
      error: 'Invalid delete request'
    }, { status: 400 });
  } catch (error) {
    console.error('Error deleting Facebook leads:', error);
    return NextResponse.json({
      error: 'Failed to delete Facebook leads'
    }, { status: 500 });
  }
}

function parseFacebookOutput(output: string) {
  const stats: any = {};
  
  // Parse the output for key statistics
  const lines = output.split('\n');
  for (const line of lines) {
    if (line.includes('Found') && line.includes('total leads')) {
      const match = line.match(/Found (\d+) total leads/);
      if (match) {
        stats.total_leads = parseInt(match[1]) || 0;
      }
    } else if (line.includes('High Priority:')) {
      stats.high_priority_leads = parseInt(line.split(':')[1].trim()) || 0;
    } else if (line.includes('New Leads:')) {
      stats.new_leads = parseInt(line.split(':')[1].trim()) || 0;
    } else if (line.includes('Average Score:')) {
      stats.average_lead_score = parseFloat(line.split(':')[1].trim()) || 0;
    }
  }
  
  stats.last_updated = new Date().toISOString();
  return stats;
}
