"use client";

// Zip code to city mapping for Utah
const zipCodeToCity: { [key: string]: string } = {
  // Salt Lake City area
  '84101': '/cities/salt-lake-city/dumpster-rental',
  '84102': '/cities/salt-lake-city/dumpster-rental',
  '84103': '/cities/salt-lake-city/dumpster-rental',
  '84104': '/cities/salt-lake-city/dumpster-rental',
  '84105': '/cities/salt-lake-city/dumpster-rental',
  '84106': '/cities/salt-lake-city/dumpster-rental',
  '84107': '/cities/salt-lake-city/dumpster-rental',
  '84108': '/cities/salt-lake-city/dumpster-rental',
  '84109': '/cities/salt-lake-city/dumpster-rental',
  '84110': '/cities/salt-lake-city/dumpster-rental',
  '84111': '/cities/salt-lake-city/dumpster-rental',
  '84112': '/cities/salt-lake-city/dumpster-rental',
  '84113': '/cities/salt-lake-city/dumpster-rental',
  '84114': '/cities/salt-lake-city/dumpster-rental',
  '84115': '/cities/salt-lake-city/dumpster-rental',
  '84116': '/cities/salt-lake-city/dumpster-rental',
  '84117': '/cities/salt-lake-city/dumpster-rental',
  '84118': '/cities/salt-lake-city/dumpster-rental',
  '84119': '/cities/salt-lake-city/dumpster-rental',
  '84120': '/cities/salt-lake-city/dumpster-rental',
  '84121': '/cities/salt-lake-city/dumpster-rental',
  '84122': '/cities/salt-lake-city/dumpster-rental',
  '84123': '/cities/salt-lake-city/dumpster-rental',
  '84124': '/cities/salt-lake-city/dumpster-rental',
  '84125': '/cities/salt-lake-city/dumpster-rental',
  '84126': '/cities/salt-lake-city/dumpster-rental',
  '84127': '/cities/salt-lake-city/dumpster-rental',
  '84128': '/cities/salt-lake-city/dumpster-rental',
  '84129': '/cities/salt-lake-city/dumpster-rental',
  '84130': '/cities/salt-lake-city/dumpster-rental',
  '84131': '/cities/salt-lake-city/dumpster-rental',
  '84132': '/cities/salt-lake-city/dumpster-rental',
  '84133': '/cities/salt-lake-city/dumpster-rental',
  '84134': '/cities/salt-lake-city/dumpster-rental',
  '84135': '/cities/salt-lake-city/dumpster-rental',
  '84136': '/cities/salt-lake-city/dumpster-rental',
  '84137': '/cities/salt-lake-city/dumpster-rental',
  '84138': '/cities/salt-lake-city/dumpster-rental',
  '84139': '/cities/salt-lake-city/dumpster-rental',
  '84140': '/cities/salt-lake-city/dumpster-rental',
  '84141': '/cities/salt-lake-city/dumpster-rental',
  '84142': '/cities/salt-lake-city/dumpster-rental',
  '84143': '/cities/salt-lake-city/dumpster-rental',
  '84144': '/cities/salt-lake-city/dumpster-rental',
  '84145': '/cities/salt-lake-city/dumpster-rental',
  '84146': '/cities/salt-lake-city/dumpster-rental',
  '84147': '/cities/salt-lake-city/dumpster-rental',
  '84148': '/cities/salt-lake-city/dumpster-rental',
  '84149': '/cities/salt-lake-city/dumpster-rental',
  '84150': '/cities/salt-lake-city/dumpster-rental',
  '84151': '/cities/salt-lake-city/dumpster-rental',
  '84152': '/cities/salt-lake-city/dumpster-rental',
  '84153': '/cities/salt-lake-city/dumpster-rental',
  '84154': '/cities/salt-lake-city/dumpster-rental',
  '84155': '/cities/salt-lake-city/dumpster-rental',
  '84156': '/cities/salt-lake-city/dumpster-rental',
  '84157': '/cities/salt-lake-city/dumpster-rental',
  '84158': '/cities/salt-lake-city/dumpster-rental',
  '84159': '/cities/salt-lake-city/dumpster-rental',
  '84160': '/cities/salt-lake-city/dumpster-rental',
  '84161': '/cities/salt-lake-city/dumpster-rental',
  '84162': '/cities/salt-lake-city/dumpster-rental',
  '84163': '/cities/salt-lake-city/dumpster-rental',
  '84164': '/cities/salt-lake-city/dumpster-rental',
  '84165': '/cities/salt-lake-city/dumpster-rental',
  '84166': '/cities/salt-lake-city/dumpster-rental',
  '84167': '/cities/salt-lake-city/dumpster-rental',
  '84168': '/cities/salt-lake-city/dumpster-rental',
  '84169': '/cities/salt-lake-city/dumpster-rental',
  '84170': '/cities/salt-lake-city/dumpster-rental',
  '84171': '/cities/salt-lake-city/dumpster-rental',
  '84172': '/cities/salt-lake-city/dumpster-rental',
  '84173': '/cities/salt-lake-city/dumpster-rental',
  '84174': '/cities/salt-lake-city/dumpster-rental',
  '84175': '/cities/salt-lake-city/dumpster-rental',
  '84176': '/cities/salt-lake-city/dumpster-rental',
  '84177': '/cities/salt-lake-city/dumpster-rental',
  '84178': '/cities/salt-lake-city/dumpster-rental',
  '84179': '/cities/salt-lake-city/dumpster-rental',
  '84180': '/cities/salt-lake-city/dumpster-rental',
  '84181': '/cities/salt-lake-city/dumpster-rental',
  '84182': '/cities/salt-lake-city/dumpster-rental',
  '84183': '/cities/salt-lake-city/dumpster-rental',
  '84184': '/cities/salt-lake-city/dumpster-rental',
  '84185': '/cities/salt-lake-city/dumpster-rental',
  '84186': '/cities/salt-lake-city/dumpster-rental',
  '84187': '/cities/salt-lake-city/dumpster-rental',
  '84188': '/cities/salt-lake-city/dumpster-rental',
  '84189': '/cities/salt-lake-city/dumpster-rental',
  '84190': '/cities/salt-lake-city/dumpster-rental',
  '84191': '/cities/salt-lake-city/dumpster-rental',
  '84192': '/cities/salt-lake-city/dumpster-rental',
  '84193': '/cities/salt-lake-city/dumpster-rental',
  '84194': '/cities/salt-lake-city/dumpster-rental',
  '84195': '/cities/salt-lake-city/dumpster-rental',
  '84196': '/cities/salt-lake-city/dumpster-rental',
  '84197': '/cities/salt-lake-city/dumpster-rental',
  '84198': '/cities/salt-lake-city/dumpster-rental',
  '84199': '/cities/salt-lake-city/dumpster-rental',
  
  // Other major cities
  '84070': '/cities/sandy/dumpster-rental',
  '84081': '/cities/west-valley-city/dumpster-rental',
  '84084': '/cities/west-valley-city/dumpster-rental',
  '84088': '/cities/west-valley-city/dumpster-rental',
  '84092': '/cities/sandy/dumpster-rental',
  '84093': '/cities/sandy/dumpster-rental',
  '84094': '/cities/sandy/dumpster-rental',
  '84095': '/cities/south-jordan/dumpster-rental',
  '84096': '/cities/south-jordan/dumpster-rental',
  '84097': '/cities/orem/dumpster-rental',
  '84098': '/cities/orem/dumpster-rental',
  '84020': '/cities/draper/dumpster-rental',
  '84047': '/cities/midvale/dumpster-rental',
  '84044': '/cities/kearns/dumpster-rental',
  '84040': '/cities/layton/dumpster-rental',
  '84041': '/cities/layton/dumpster-rental',
  '84401': '/cities/ogden/dumpster-rental',
  '84402': '/cities/ogden/dumpster-rental',
  '84403': '/cities/ogden/dumpster-rental',
  '84404': '/cities/ogden/dumpster-rental',
  '84405': '/cities/ogden/dumpster-rental',
  '84408': '/cities/ogden/dumpster-rental',
  '84409': '/cities/ogden/dumpster-rental',
  '84412': '/cities/ogden/dumpster-rental',
  '84414': '/cities/ogden/dumpster-rental',
  '84415': '/cities/ogden/dumpster-rental',
  '84601': '/cities/provo/dumpster-rental',
  '84602': '/cities/provo/dumpster-rental',
  '84603': '/cities/provo/dumpster-rental',
  '84604': '/cities/provo/dumpster-rental',
  '84605': '/cities/provo/dumpster-rental',
  '84606': '/cities/provo/dumpster-rental',
  '84057': '/cities/orem/dumpster-rental',
  '84058': '/cities/orem/dumpster-rental',
  '84059': '/cities/orem/dumpster-rental',
  '84010': '/cities/bountiful/dumpster-rental',
  '84014': '/cities/centerville/dumpster-rental',
  '84015': '/cities/clearfield/dumpster-rental',
  '84025': '/cities/farmington/dumpster-rental',
  '84043': '/cities/kaysville/dumpster-rental',
  '84045': '/cities/layton/dumpster-rental',
  '84054': '/cities/magnum/dumpster-rental',
  '84055': '/cities/magna/dumpster-rental',
  '84060': '/cities/park-city/dumpster-rental',
  '84062': '/cities/pleasant-grove/dumpster-rental',
  '84065': '/cities/saratoga-springs/dumpster-rental',
  '84067': '/cities/south-jordan/dumpster-rental',
  '84074': '/cities/syracuse/dumpster-rental',
  '84075': '/cities/taylorsville/dumpster-rental',
  '84087': '/cities/west-jordan/dumpster-rental',
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
    window.location.href = 'https://icondumpsters.com/locations';
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
              <a href="https://icondumpsters.com/locations" onClick={() => { try { (window as any).dataLayer?.push({ event:'nav_click', link:'footer_locations' }); fetch('/api/analytics',{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ type:'nav', name:'footer_locations' })}); } catch {} }} className="text-gray-300 hover:text-white transition-colors block">View All Locations</a>
              <a href="https://icondumpsters.com/dumpster-sizes" onClick={() => { try { (window as any).dataLayer?.push({ event:'nav_click', link:'footer_sizes' }); fetch('/api/analytics',{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ type:'nav', name:'footer_sizes' })}); } catch {} }} className="text-gray-300 hover:text-white transition-colors block">Dumpster Sizes</a>
              <a href="https://icondumpsters.com/dumpster-prices" onClick={() => { try { (window as any).dataLayer?.push({ event:'nav_click', link:'footer_pricing' }); fetch('/api/analytics',{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ type:'nav', name:'footer_pricing' })}); } catch {} }} className="text-gray-300 hover:text-white transition-colors block">Pricing</a>
            </div>
          </div>

          {/* Top Cities */}
          <div>
            <h4 className="text-white font-semibold mb-3">Top Cities</h4>
            <div className="grid grid-cols-2 gap-1 text-sm">
              <a href="/cities/salt-lake-city/dumpster-rental" className="text-purple-200 hover:text-white transition-colors">Salt Lake City</a>
              <a href="/cities/west-valley-city/dumpster-rental" className="text-purple-200 hover:text-white transition-colors">West Valley City</a>
              <a href="/cities/sandy/dumpster-rental" className="text-purple-200 hover:text-white transition-colors">Sandy</a>
              <a href="/cities/west-jordan/dumpster-rental" className="text-purple-200 hover:text-white transition-colors">West Jordan</a>
              <a href="/cities/murray/dumpster-rental" className="text-purple-200 hover:text-white transition-colors">Murray</a>
              <a href="/cities/south-jordan/dumpster-rental" className="text-purple-200 hover:text-white transition-colors">South Jordan</a>
              <a href="/cities/draper/dumpster-rental" className="text-purple-200 hover:text-white transition-colors">Draper</a>
              <a href="/cities/midvale/dumpster-rental" className="text-purple-200 hover:text-white transition-colors">Midvale</a>
              <a href="/cities/holladay/dumpster-rental" className="text-purple-200 hover:text-white transition-colors">Holladay</a>
              <a href="/cities/taylorsville/dumpster-rental" className="text-purple-200 hover:text-white transition-colors">Taylorsville</a>
              <a href="/cities/kearns/dumpster-rental" className="text-purple-200 hover:text-white transition-colors">Kearns</a>
              <a href="/cities/millcreek/dumpster-rental" className="text-purple-200 hover:text-white transition-colors">Millcreek</a>
            </div>
          </div>

          {/* Helpful Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Helpful Links</h4>
            <div className="grid grid-cols-1 gap-1 text-sm">
              <a href="/transparent-pricing" className="text-purple-200 hover:text-white transition-colors">Transparent Pricing</a>
              <a href="/same-day-delivery" className="text-purple-200 hover:text-white transition-colors">Same-Day Delivery</a>
              <a href="/residential-dumpsters" className="text-purple-200 hover:text-white transition-colors">Residential Dumpsters</a>
              <a href="/construction-dumpsters" className="text-purple-200 hover:text-white transition-colors">Construction Dumpsters</a>
              <a href="/dumpster-sizes-1" className="text-purple-200 hover:text-white transition-colors">Dumpster Sizes Guide</a>
              <a href="/responsible-disposal" className="text-purple-200 hover:text-white transition-colors">Responsible Disposal</a>
              <a href="/local-pros" className="text-purple-200 hover:text-white transition-colors">Local Pros</a>
              <a href="/blog/home-renovation-waste-disposal-guide" className="text-purple-200 hover:text-white transition-colors">Renovation Guide</a>
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
                src="https://icondumpsters.com/google-review-barcode.png" 
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
              ©2025 Icon Dumpsters. All Rights Reserved | <a href="https://icondumpsters.com/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a> | <a href="https://icondumpsters.com/sitemap" className="hover:text-white transition-colors">Sitemap</a>
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
