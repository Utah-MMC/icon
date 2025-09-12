import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function GET() {
  try {
    // Check if leads database exists
    const leadsDbPath = path.join(process.cwd(), 'scraper', 'dumpster_leads.db');
    
    if (!fs.existsSync(leadsDbPath)) {
      return NextResponse.json({
        leads: [],
        summary: {
          totalLeads: 0,
          highPriorityLeads: 0,
          newLeads: 0,
          averageScore: 0,
          lastUpdated: new Date().toISOString()
        }
      });
    }

    // Get leads data directly from database
    const leadsData = await getLeadsData(leadsDbPath);
    
    return NextResponse.json({
      leads: leadsData.leads,
      summary: leadsData.summary
    });
  } catch (error) {
    console.error('Error loading leads data:', error);
    return NextResponse.json({
      error: 'Failed to load leads data',
      leads: [],
      summary: {
        totalLeads: 0,
        highPriorityLeads: 0,
        newLeads: 0,
        averageScore: 0,
        lastUpdated: new Date().toISOString()
      }
    }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { action } = await request.json();
    
    if (action === 'generate_leads') {
      // Run the lead generation process
      const pythonScript = path.join(process.cwd(), 'scraper', 'main_lead_generator.py');
      const { stdout, stderr } = await execAsync(`python "${pythonScript}" --mode generate`);
      
      if (stderr) {
        console.error('Lead generation error:', stderr);
        return NextResponse.json({
          error: 'Lead generation failed',
          message: stderr
        }, { status: 500 });
      }

      // Parse the output
      const result = parsePythonOutput(stdout);
      
      return NextResponse.json({
        message: 'Lead generation completed successfully',
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
    console.error('Error in lead generation:', error);
    return NextResponse.json({
      error: 'Failed to generate leads'
    }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { action, leadIds } = await request.json();
    
    if (action === 'delete_leads' && leadIds && Array.isArray(leadIds)) {
      const leadsDbPath = path.join(process.cwd(), 'scraper', 'dumpster_leads.db');
      
      if (!fs.existsSync(leadsDbPath)) {
        return NextResponse.json({
          error: 'Leads database not found'
        }, { status: 404 });
      }

      // Delete leads using Python script
      const result = await deleteLeadsFromDatabase(leadsDbPath, leadIds);
      
      if (result.error) {
        return NextResponse.json({
          error: 'Failed to delete leads',
          message: result.error
        }, { status: 500 });
      }
      
      return NextResponse.json({
        message: `Successfully deleted ${result.deletedCount} leads`,
        deletedCount: result.deletedCount
      });
    }
    
    return NextResponse.json({
      error: 'Invalid delete request'
    }, { status: 400 });
  } catch (error) {
    console.error('Error deleting leads:', error);
    return NextResponse.json({
      error: 'Failed to delete leads'
    }, { status: 500 });
  }
}

function parsePythonOutput(output: string) {
  const stats: any = {};
  
  // Parse the output for key statistics
  const lines = output.split('\n');
  for (const line of lines) {
    if (line.includes('Total Leads:')) {
      stats.total_leads = parseInt(line.split(':')[1].trim()) || 0;
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

async function getLeadsData(dbPath: string) {
  try {
    // Use a Python script to read the SQLite database
    const pythonScript = `
import sqlite3
import json
import sys

def get_leads_data():
    try:
        conn = sqlite3.connect('${dbPath}')
        cursor = conn.cursor()
        
        # Get all leads
        cursor.execute('SELECT * FROM leads ORDER BY lead_score DESC, created_date DESC')
        columns = [description[0] for description in cursor.description]
        leads = [dict(zip(columns, row)) for row in cursor.fetchall()]
        
        # Get statistics
        cursor.execute('SELECT COUNT(*) FROM leads')
        total_leads = cursor.fetchone()[0]
        
        cursor.execute('SELECT COUNT(*) FROM leads WHERE lead_score >= 70')
        high_priority = cursor.fetchone()[0]
        
        cursor.execute('SELECT COUNT(*) FROM leads WHERE created_date >= datetime("now", "-7 days")')
        new_leads = cursor.fetchone()[0]
        
        cursor.execute('SELECT AVG(lead_score) FROM leads')
        avg_score = cursor.fetchone()[0] or 0
        
        conn.close()
        
        return {
            'leads': leads,
            'summary': {
                'totalLeads': total_leads,
                'highPriorityLeads': high_priority,
                'newLeads': new_leads,
                'averageScore': round(avg_score, 1),
                'lastUpdated': '${new Date().toISOString()}'
            }
        }
    except Exception as e:
        return {'error': str(e), 'leads': [], 'summary': {'totalLeads': 0, 'highPriorityLeads': 0, 'newLeads': 0, 'averageScore': 0, 'lastUpdated': '${new Date().toISOString()}'}}

if __name__ == '__main__':
    result = get_leads_data()
    print(json.dumps(result))
`;

    // Write the Python script to a temporary file
    const tempScriptPath = path.join(process.cwd(), 'temp_leads_reader.py');
    fs.writeFileSync(tempScriptPath, pythonScript);
    
    // Execute the Python script
    const { stdout, stderr } = await execAsync(`python "${tempScriptPath}"`);
    
    // Clean up the temporary file
    fs.unlinkSync(tempScriptPath);
    
    if (stderr) {
      console.error('Python script error:', stderr);
    }
    
    // Parse the JSON output
    const result = JSON.parse(stdout);
    return result;
    
  } catch (error) {
    console.error('Error getting leads data:', error);
    return { 
      leads: [], 
      summary: {
        totalLeads: 0,
        highPriorityLeads: 0,
        newLeads: 0,
        averageScore: 0,
        lastUpdated: new Date().toISOString()
      }
    };
  }
}

async function deleteLeadsFromDatabase(dbPath: string, leadIds: number[]) {
  try {
    // Use a Python script to delete leads from the SQLite database
    const pythonScript = `
import sqlite3
import json
import sys

def delete_leads():
    try:
        conn = sqlite3.connect('${dbPath}')
        cursor = conn.cursor()
        
        # Get all leads first to map indices to IDs
        cursor.execute('SELECT id FROM leads ORDER BY lead_score DESC, created_date DESC')
        all_ids = [row[0] for row in cursor.fetchall()]
        
        # Map frontend indices to actual database IDs
        ids_to_delete = []
        for index in ${JSON.stringify(leadIds)}:
            if 0 <= index < len(all_ids):
                ids_to_delete.append(all_ids[index])
        
        if not ids_to_delete:
            return {'error': 'No valid leads to delete', 'deletedCount': 0}
        
        # Delete the leads
        placeholders = ','.join(['?' for _ in ids_to_delete])
        cursor.execute(f'DELETE FROM leads WHERE id IN ({placeholders})', ids_to_delete)
        
        deleted_count = cursor.rowcount
        conn.commit()
        conn.close()
        
        return {
            'deletedCount': deleted_count,
            'deletedIds': ids_to_delete
        }
    except Exception as e:
        return {'error': str(e), 'deletedCount': 0}

if __name__ == '__main__':
    result = delete_leads()
    print(json.dumps(result))
`;

    // Write the Python script to a temporary file
    const tempScriptPath = path.join(process.cwd(), 'temp_leads_deleter.py');
    fs.writeFileSync(tempScriptPath, pythonScript);
    
    // Execute the Python script
    const { stdout, stderr } = await execAsync(`python "${tempScriptPath}"`);
    
    // Clean up the temporary file
    fs.unlinkSync(tempScriptPath);
    
    if (stderr) {
      console.error('Python script error:', stderr);
    }
    
    // Parse the JSON output
    const result = JSON.parse(stdout);
    return result;
    
  } catch (error) {
    console.error('Error deleting leads:', error);
    return { 
      error: (error as Error).message,
      deletedCount: 0
    };
  }
}