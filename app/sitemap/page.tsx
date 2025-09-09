import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sitemap | Icon Dumpsters - Find All Our Pages',
  description: 'Complete sitemap of Icon Dumpsters website. Find all our dumpster rental services, city pages, and resources.',
  robots: 'noindex, follow',
};

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Sitemap</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Pages */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Main Pages</h2>
            <ul className="space-y-2">
              <li><Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link></li>
              <li><Link href="/about" className="text-blue-600 hover:text-blue-800">About Us</Link></li>
              <li><Link href="/services" className="text-blue-600 hover:text-blue-800">Services</Link></li>
              <li><Link href="/dumpster-prices" className="text-blue-600 hover:text-blue-800">Pricing</Link></li>
              <li><Link href="/dumpster-sizes" className="text-blue-600 hover:text-blue-800">Dumpster Sizes</Link></li>
              <li><Link href="/contact" className="text-blue-600 hover:text-blue-800">Contact</Link></li>
              <li><Link href="/faq" className="text-blue-600 hover:text-blue-800">FAQ</Link></li>
            </ul>
          </div>

          {/* City Pages */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">City Pages</h2>
            <ul className="space-y-2">
              <li><Link href="/salt-lake-city" className="text-blue-600 hover:text-blue-800">Salt Lake City</Link></li>
              <li><Link href="/west-valley-city" className="text-blue-600 hover:text-blue-800">West Valley City</Link></li>
              <li><Link href="/provo" className="text-blue-600 hover:text-blue-800">Provo</Link></li>
              <li><Link href="/west-jordan" className="text-blue-600 hover:text-blue-800">West Jordan</Link></li>
              <li><Link href="/orem" className="text-blue-600 hover:text-blue-800">Orem</Link></li>
              <li><Link href="/sandy" className="text-blue-600 hover:text-blue-800">Sandy</Link></li>
              <li><Link href="/ogden" className="text-blue-600 hover:text-blue-800">Ogden</Link></li>
              <li><Link href="/st-george" className="text-blue-600 hover:text-blue-800">St. George</Link></li>
              <li><Link href="/layton" className="text-blue-600 hover:text-blue-800">Layton</Link></li>
              <li><Link href="/taylorsville" className="text-blue-600 hover:text-blue-800">Taylorsville</Link></li>
            </ul>
          </div>

          {/* Service Pages */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Service Pages</h2>
            <ul className="space-y-2">
              <li><Link href="/services/residential-dumpster-rentals" className="text-blue-600 hover:text-blue-800">Residential Dumpster Rentals</Link></li>
              <li><Link href="/services/commercial-dumpster-rentals" className="text-blue-600 hover:text-blue-800">Commercial Dumpster Rentals</Link></li>
              <li><Link href="/services/construction-dumpster-rentals" className="text-blue-600 hover:text-blue-800">Construction Dumpster Rentals</Link></li>
              <li><Link href="/services/yard-waste-debris-bin-rental" className="text-blue-600 hover:text-blue-800">Yard Waste & Debris</Link></li>
              <li><Link href="/services/garbage-junk-bin-rentals" className="text-blue-600 hover:text-blue-800">Garbage & Junk Removal</Link></li>
            </ul>
          </div>

          {/* Guide Pages */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Guide Pages</h2>
            <ul className="space-y-2">
              <li><Link href="/complete-dumpster-rental-guide-2025" className="text-blue-600 hover:text-blue-800">Complete Dumpster Rental Guide</Link></li>
              <li><Link href="/home-renovation-dumpster-guide" className="text-blue-600 hover:text-blue-800">Home Renovation Guide</Link></li>
              <li><Link href="/park-renovation-projects" className="text-blue-600 hover:text-blue-800">Park Renovation Projects</Link></li>
              <li><Link href="/retail-renovation-dumpster-guide" className="text-blue-600 hover:text-blue-800">Retail Renovation Guide</Link></li>
              <li><Link href="/rolloff-dumpster-guide-2025" className="text-blue-600 hover:text-blue-800">Roll-off Dumpster Guide</Link></li>
            </ul>
          </div>

          {/* Blog Pages */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Blog & Resources</h2>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-blue-600 hover:text-blue-800">Blog</Link></li>
              <li><Link href="/blog/utah-dumpster-permits-guide" className="text-blue-600 hover:text-blue-800">Utah Dumpster Permits Guide</Link></li>
              <li><Link href="/blog/how-to-choose-dumpster-size" className="text-blue-600 hover:text-blue-800">How to Choose Dumpster Size</Link></li>
              <li><Link href="/blog/case-study-home-renovation-sandy" className="text-blue-600 hover:text-blue-800">Case Study: Home Renovation</Link></li>
            </ul>
          </div>

          {/* Tools & Calculators */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Tools & Calculators</h2>
            <ul className="space-y-2">
              <li><Link href="/dumpster-calculator" className="text-blue-600 hover:text-blue-800">Dumpster Calculator</Link></li>
              <li><Link href="/dumpster-calculator/quote" className="text-blue-600 hover:text-blue-800">Get Quote</Link></li>
              <li><Link href="/tonnage-calculator" className="text-blue-600 hover:text-blue-800">Tonnage Calculator</Link></li>
              <li><Link href="/estimate-right-dumpster-size-home-cleanout" className="text-blue-600 hover:text-blue-800">Size Estimator</Link></li>
            </ul>
          </div>

          {/* Legal Pages */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Legal & Policies</h2>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-blue-600 hover:text-blue-800">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-blue-600 hover:text-blue-800">Terms of Service</Link></li>
              <li><Link href="/fees" className="text-blue-600 hover:text-blue-800">Fees & Policies</Link></li>
            </ul>
          </div>

          {/* Company Info */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Company Info</h2>
            <ul className="space-y-2">
              <li><Link href="/locations" className="text-blue-600 hover:text-blue-800">Locations</Link></li>
              <li><Link href="/reviews" className="text-blue-600 hover:text-blue-800">Reviews</Link></li>
              <li><Link href="/rating" className="text-blue-600 hover:text-blue-800">Rating</Link></li>
              <li><Link href="/free-quote" className="text-blue-600 hover:text-blue-800">Free Quote</Link></li>
              <li><Link href="/book" className="text-blue-600 hover:text-blue-800">Book Online</Link></li>
            </ul>
          </div>

          {/* Features */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us</h2>
            <ul className="space-y-2">
              <li><Link href="/competitive-pricing" className="text-blue-600 hover:text-blue-800">Competitive Pricing</Link></li>
              <li><Link href="/no-hidden-fees" className="text-blue-600 hover:text-blue-800">No Hidden Fees</Link></li>
              <li><Link href="/on-time-dumpster-delivery" className="text-blue-600 hover:text-blue-800">On-Time Delivery</Link></li>
              <li><Link href="/expert-customer-service" className="text-blue-600 hover:text-blue-800">Expert Customer Service</Link></li>
              <li><Link href="/friendly-live-help" className="text-blue-600 hover:text-blue-800">Friendly Live Help</Link></li>
              <li><Link href="/property-protection" className="text-blue-600 hover:text-blue-800">Property Protection</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
