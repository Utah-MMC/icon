"use client";

// Zip code to city mapping for Utah
const zipCodeToCity: { [key: string]: string } = {
  // Salt Lake City area
  '84101': '/salt-lake-city',
  '84102': '/salt-lake-city',
  '84103': '/salt-lake-city',
  '84104': '/salt-lake-city',
  '84105': '/salt-lake-city',
  '84106': '/salt-lake-city',
  '84107': '/salt-lake-city',
  '84108': '/salt-lake-city',
  '84109': '/salt-lake-city',
  '84110': '/salt-lake-city',
  '84111': '/salt-lake-city',
  '84112': '/salt-lake-city',
  '84113': '/salt-lake-city',
  '84114': '/salt-lake-city',
  '84115': '/salt-lake-city',
  '84116': '/salt-lake-city',
  '84117': '/salt-lake-city',
  '84118': '/salt-lake-city',
  '84119': '/salt-lake-city',
  '84120': '/salt-lake-city',
  '84121': '/salt-lake-city',
  '84122': '/salt-lake-city',
  '84123': '/salt-lake-city',
  '84124': '/salt-lake-city',
  '84125': '/salt-lake-city',
  '84126': '/salt-lake-city',
  '84127': '/salt-lake-city',
  '84128': '/salt-lake-city',
  '84129': '/salt-lake-city',
  '84130': '/salt-lake-city',
  '84131': '/salt-lake-city',
  '84132': '/salt-lake-city',
  '84133': '/salt-lake-city',
  '84134': '/salt-lake-city',
  '84135': '/salt-lake-city',
  '84136': '/salt-lake-city',
  '84137': '/salt-lake-city',
  '84138': '/salt-lake-city',
  '84139': '/salt-lake-city',
  '84140': '/salt-lake-city',
  '84141': '/salt-lake-city',
  '84142': '/salt-lake-city',
  '84143': '/salt-lake-city',
  '84144': '/salt-lake-city',
  '84145': '/salt-lake-city',
  '84146': '/salt-lake-city',
  '84147': '/salt-lake-city',
  '84148': '/salt-lake-city',
  '84149': '/salt-lake-city',
  '84150': '/salt-lake-city',
  '84151': '/salt-lake-city',
  '84152': '/salt-lake-city',
  '84153': '/salt-lake-city',
  '84154': '/salt-lake-city',
  '84155': '/salt-lake-city',
  '84156': '/salt-lake-city',
  '84157': '/salt-lake-city',
  '84158': '/salt-lake-city',
  '84159': '/salt-lake-city',
  '84160': '/salt-lake-city',
  '84161': '/salt-lake-city',
  '84162': '/salt-lake-city',
  '84163': '/salt-lake-city',
  '84164': '/salt-lake-city',
  '84165': '/salt-lake-city',
  '84166': '/salt-lake-city',
  '84167': '/salt-lake-city',
  '84168': '/salt-lake-city',
  '84169': '/salt-lake-city',
  '84170': '/salt-lake-city',
  '84171': '/salt-lake-city',
  '84172': '/salt-lake-city',
  '84173': '/salt-lake-city',
  '84174': '/salt-lake-city',
  '84175': '/salt-lake-city',
  '84176': '/salt-lake-city',
  '84177': '/salt-lake-city',
  '84178': '/salt-lake-city',
  '84179': '/salt-lake-city',
  '84180': '/salt-lake-city',
  '84181': '/salt-lake-city',
  '84182': '/salt-lake-city',
  '84183': '/salt-lake-city',
  '84184': '/salt-lake-city',
  '84185': '/salt-lake-city',
  '84186': '/salt-lake-city',
  '84187': '/salt-lake-city',
  '84188': '/salt-lake-city',
  '84189': '/salt-lake-city',
  '84190': '/salt-lake-city',
  '84191': '/salt-lake-city',
  '84192': '/salt-lake-city',
  '84193': '/salt-lake-city',
  '84194': '/salt-lake-city',
  '84195': '/salt-lake-city',
  '84196': '/salt-lake-city',
  '84197': '/salt-lake-city',
  '84198': '/salt-lake-city',
  '84199': '/salt-lake-city',
  
  // Other major cities
  '84070': '/sandy',
  '84081': '/west-valley-city',
  '84084': '/west-valley-city',
  '84088': '/west-valley-city',
  '84092': '/sandy',
  '84093': '/sandy',
  '84094': '/sandy',
  '84095': '/south-jordan',
  '84096': '/south-jordan',
  '84097': '/orem',
  '84098': '/orem',
  '84020': '/draper',
  '84047': '/midvale',
  '84044': '/kearns',
  '84040': '/layton',
  '84041': '/layton',
  '84401': '/ogden',
  '84402': '/ogden',
  '84403': '/ogden',
  '84404': '/ogden',
  '84405': '/ogden',
  '84408': '/ogden',
  '84409': '/ogden',
  '84412': '/ogden',
  '84414': '/ogden',
  '84415': '/ogden',
  '84601': '/provo',
  '84602': '/provo',
  '84603': '/provo',
  '84604': '/provo',
  '84605': '/provo',
  '84606': '/provo',
  '84057': '/orem',
  '84058': '/orem',
  '84059': '/orem',
  '84010': '/bountiful',
  '84014': '/centerville',
  '84015': '/clearfield',
  '84025': '/farmington',
  '84043': '/kaysville',
  '84045': '/layton',
  '84054': '/magnum',
  '84055': '/magna',
  '84060': '/park-city',
  '84062': '/pleasant-grove',
  '84065': '/saratoga-springs',
  '84067': '/south-jordan',
  '84074': '/syracuse',
  '84075': '/taylorsville',
  '84087': '/west-jordan',
};

// Function to handle zip code search
function handleZipCodeSearch() {
  const zipCodeInput = document.getElementById('zipCodeInput') as HTMLInputElement;
  const zipCode = zipCodeInput?.value?.trim();
  
  if (!zipCode) {
    alert('Please enter a zip code');
    return;
  }
  
  // Check if zip code exists in our mapping
  const cityPath = zipCodeToCity[zipCode];
  
  if (cityPath) {
    // Redirect to the city page
    window.location.href = cityPath;
  } else {
    // If zip code not found, redirect to locations page
    alert('Zip code not found in our service area. Please visit our locations page to see all areas we serve.');
    window.location.href = '/locations';
  }
}

export default function Footer() {
  return (
    <footer className="bg-[#4e37a8] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-start">
          {/* Search & Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Find Your Location</h4>
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-2 mb-3">
              <input
                type="text"
                id="zipCodeInput"
                placeholder="Enter Zip Code"
                aria-label="Zip code"
                className="w-full sm:min-w-0 px-3 py-2 rounded text-sm text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/60"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleZipCodeSearch();
                  }
                }}
              />
              <button 
                onClick={handleZipCodeSearch}
                className="bg-green-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-green-700 transition-colors w-full sm:w-auto"
              >
                Search
              </button>
            </div>
            <div className="space-y-2 text-sm">
              <a href="/locations" onClick={() => { try { (window as any).dataLayer?.push({ event:'nav_click', link:'footer_locations' }); fetch('/api/analytics',{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ type:'nav', name:'footer_locations' })}); } catch {} }} className="text-gray-300 hover:text-white transition-colors block">View All Locations</a>
              <a href="/dumpster-sizes" onClick={() => { try { (window as any).dataLayer?.push({ event:'nav_click', link:'footer_sizes' }); fetch('/api/analytics',{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ type:'nav', name:'footer_sizes' })}); } catch {} }} className="text-gray-300 hover:text-white transition-colors block">Dumpster Sizes</a>
              <a href="/dumpster-prices" onClick={() => { try { (window as any).dataLayer?.push({ event:'nav_click', link:'footer_pricing' }); fetch('/api/analytics',{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ type:'nav', name:'footer_pricing' })}); } catch {} }} className="text-gray-300 hover:text-white transition-colors block">Pricing</a>
            </div>
          </div>

          {/* Top Cities */}
          <div>
            <h4 className="text-white font-semibold mb-3">Top Cities</h4>
            <div className="grid grid-cols-2 gap-1 text-sm">
              <a href="/salt-lake-city" className="text-purple-200 hover:text-white transition-colors">Salt Lake City</a>
              <a href="/west-valley-city" className="text-purple-200 hover:text-white transition-colors">West Valley City</a>
              <a href="/sandy" className="text-purple-200 hover:text-white transition-colors">Sandy</a>
              <a href="/west-jordan" className="text-purple-200 hover:text-white transition-colors">West Jordan</a>
              <a href="/murray" className="text-purple-200 hover:text-white transition-colors">Murray</a>
              <a href="/south-jordan" className="text-purple-200 hover:text-white transition-colors">South Jordan</a>
              <a href="/draper" className="text-purple-200 hover:text-white transition-colors">Draper</a>
              <a href="/midvale" className="text-purple-200 hover:text-white transition-colors">Midvale</a>
              <a href="/holladay" className="text-purple-200 hover:text-white transition-colors">Holladay</a>
              <a href="/taylorsville" className="text-purple-200 hover:text-white transition-colors">Taylorsville</a>
              <a href="/kearns" className="text-purple-200 hover:text-white transition-colors">Kearns</a>
              <a href="/millcreek" className="text-purple-200 hover:text-white transition-colors">Millcreek</a>
            </div>
          </div>

          {/* Helpful Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Helpful Links</h4>
            <div className="grid grid-cols-1 gap-1 text-sm">
              <a href="/dumpster-rental-guide-2025" onClick={() => { try { (window as any).dataLayer?.push({ event:'nav_click', link:'footer_guide' }); fetch('/api/analytics',{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ type:'nav', name:'footer_guide' })}); } catch {} }} className="text-purple-200 hover:text-white transition-colors">Dumpster Rental Guide 2025</a>
              <a href="/dumpster-rentals-near-me-2025" className="text-purple-200 hover:text-white transition-colors">Dumpster Rentals Near Me</a>
              <a href="/construction-waste-management-2025" className="text-purple-200 hover:text-white transition-colors">Construction Waste Management</a>
              <a href="/home-renovation-waste-disposal-guide" className="text-purple-200 hover:text-white transition-colors">Home Renovation Waste Disposal</a>
              <a href="/commercial-dumpster-rental-business-solutions" className="text-purple-200 hover:text-white transition-colors">Commercial Solutions</a>
              <a href="/fees" onClick={() => { try { (window as any).dataLayer?.push({ event:'nav_click', link:'footer_fees' }); fetch('/api/analytics',{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ type:'nav', name:'footer_fees' })}); } catch {} }} className="text-purple-200 hover:text-white transition-colors">Fees & Surcharges</a>
              <a href="/frequent-buyers" onClick={() => { try { (window as any).dataLayer?.push({ event:'nav_click', link:'footer_frequent' }); fetch('/api/analytics',{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ type:'nav', name:'footer_frequent' })}); } catch {} }} className="text-purple-200 hover:text-white transition-colors">Frequent Buyers Program</a>
              <a href="/locations" onClick={() => { try { (window as any).dataLayer?.push({ event:'nav_click', link:'footer_service_area' }); fetch('/api/analytics',{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ type:'nav', name:'footer_service_area' })}); } catch {} }} className="text-purple-200 hover:text-white transition-colors">Service Area</a>
            </div>
          </div>

          {/* Offices & Yards (NAP) */}
          <div>
            <h4 className="text-white font-semibold mb-3">Offices & Yards</h4>
            <div className="space-y-2 text-sm">
              <div>
                <div className="text-purple-200">Salt Lake City Yard</div>
                <div className="text-gray-300">Salt Lake City, UT</div>
                <a href="tel:(801) 918-6000" onClick={() => { try { (window as any).dataLayer?.push({ event:'cta_click', cta:'footer_call' }); fetch('/api/analytics',{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ type:'cta', name:'footer_call' })}); } catch {} }} className="text-white">(801) 918-6000</a>
              </div>
              <div>
                <div className="text-purple-200">Millcreek Office</div>
                <div className="text-gray-300">Millcreek, UT</div>
                <a href="tel:(801) 918-6000" onClick={() => { try { (window as any).dataLayer?.push({ event:'cta_click', cta:'footer_call' }); fetch('/api/analytics',{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ type:'cta', name:'footer_call' })}); } catch {} }} className="text-white">(801) 918-6000</a>
              </div>
            </div>
          </div>

          {/* Review & Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3">Leave a Review</h4>
            <div className="mb-4">
              <img 
                src="/google-review-barcode.png" 
                alt="Google Review QR Code - Scan to leave a review for Icon Dumpsters"
                className="w-16 h-16 object-contain border border-gray-300 rounded-lg mb-2"
              />
              <p className="text-xs text-gray-300 mb-2">Scan for Google Review</p>
              <button
                onClick={() => {
                  const searchUrl = 'https://www.google.com/search?q=Icon+Dumpsters+dumpster+rental+Salt+Lake+City+UT';
                  window.open(searchUrl, '_blank');
                }}
                className="text-xs text-purple-200 hover:text-white transition-colors underline"
              >
                Or Click Here
              </button>
            </div>
            <div className="text-sm space-y-1">
              <p className="text-gray-300">Questions? Call us:</p>
              <a href="tel:(801) 918-6000" className="text-white font-semibold">(801) 918-6000</a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-300">
              ©2025 Icon Dumpsters. All Rights Reserved | <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a> | <a href="/sitemap" className="hover:text-white transition-colors">Sitemap</a>
            </p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <a href="https://facebook.com/icondumpsters" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
