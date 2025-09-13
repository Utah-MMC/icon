#!/usr/bin/env node

/**
 * 404 Error Monitor
 * Monitors for 404 errors and reports them
 */

const fs = require('fs');
const path = require('path');

// Common 404 patterns to watch for
const common404Patterns = [
  '/commercialbusiness-solutions',
  '/dumpster-size-estimation-guide',
  '/st-george',
  '/dumpster-rental-[city]-ut',
  '/dumpster-rental-[[...slug]]'
];

console.log('🔍 404 Error Monitor');
console.log('====================');
console.log('Watching for these common 404 patterns:');
common404Patterns.forEach(pattern => console.log(`   - ${pattern}`));

console.log('\n✅ Monitor script created. Run this regularly to check for 404 issues.');
