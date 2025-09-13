const fs = require('fs');
const path = require('path');

// Template for the comprehensive service page content
const generateServicePageContent = (cityName, citySlug, phoneNumber = "(801) 918-6000") => {
  return `import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '../../components/PageHero';
import PageTemplate from '../../components/PageTemplate';

export const metadata: Metadata = {
  title: "${cityName} Dumpster Rental Services - Residential & Commercial | Icon Dumpsters",
  description: "Comprehensive dumpster rental services in ${cityName}, Utah. Residential, commercial, construction, and demolition services. Same-day delivery available. 15-30 yard roll-off dumpsters. Call ${phoneNumber}.",
  keywords: "${cityName} dumpster rental services, residential dumpster ${cityName}, commercial dumpster ${cityName}, construction dumpster ${cityName}, waste management ${cityName}, roll-off dumpster ${cityName}",
  openGraph: {
    title: "${cityName} Dumpster Rental Services - Residential & Commercial | Icon Dumpsters",
    description: "Comprehensive dumpster rental services in ${cityName}, Utah. Residential, commercial, construction, and demolition services. Same-day delivery available.",
    url: 'https://icondumpsters.com/${citySlug}/services',
    siteName: 'Icon Dumpsters',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: '${cityName} Dumpster Rental Services - Icon Dumpsters',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: '/${citySlug}/services',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ${cityName.replace(/[^a-zA-Z0-9]/g, '')}ServicesPage() {
  return (
    <PageTemplate>
      <PageHero
        title="${cityName} Dumpster Rental Services"
        subtitle="Comprehensive waste management solutions for residential and commercial projects in ${cityName}, Utah"
        primaryCtaText="Get Free Quote"
        primaryCtaLink="/${citySlug}#quote-form"
        secondaryCtaText="Call ${phoneNumber}"
        secondaryCtaLink="tel:${phoneNumber.replace(/[^0-9]/g, '')}"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Service Overview */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Professional Dumpster Rental Services in ${cityName}, Utah
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
            At Icon Dumpsters, we provide comprehensive dumpster rental services throughout ${cityName} and surrounding areas. Our mission is to deliver hassle-free, professional waste management solutions for homeowners, contractors, and businesses alike.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Whether you're tackling a home renovation project, managing construction debris, or need commercial waste disposal, our team of experts is here to help. With same-day delivery, transparent pricing, and exceptional customer service, we make waste management simple and efficient.
          </p>
        </div>

        {/* Service Types Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Residential Services */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-6">
              <Image
                src="/images/IMG_3190.jpg"
                alt="Residential dumpster rental services in ${cityName}, Utah"
                width={600}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🏠 Residential Services</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our residential dumpster rental services in ${cityName} are designed to handle all your home improvement and cleanup needs. From small renovation projects to major home overhauls, we provide the right dumpster size for your specific requirements.
            </p>
            <ul className="space-y-3 text-lg text-gray-700 mb-6">
              <li>• <strong>Home renovations and remodeling</strong> - Kitchen, bathroom, and whole-house projects</li>
              <li>• <strong>Basement cleanouts</strong> - Remove old furniture, appliances, and accumulated items</li>
              <li>• <strong>Garage organization</strong> - Clear out years of stored items and debris</li>
              <li>• <strong>Yard waste removal</strong> - Landscaping debris, tree branches, and garden waste</li>
              <li>• <strong>Estate cleanouts</strong> - Compassionate service for property transitions</li>
              <li>• <strong>Spring cleaning projects</strong> - Seasonal home decluttering and organization</li>
              <li>• <strong>Moving and relocation</strong> - Dispose of unwanted items before or after moving</li>
            </ul>
            <p className="text-gray-600 mb-6">
              Our residential-friendly approach means we work around your schedule and provide clear communication throughout the rental process. We understand that home projects can be stressful, so we make the waste management aspect as simple as possible.
            </p>
            <Link 
              href="/${citySlug}"
              className="inline-block bg-[#4e37a8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              View Residential Options →
            </Link>
          </div>

          {/* Commercial Services */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-6">
              <Image
                src="/images/commercial.jpg"
                alt="Commercial dumpster rental services in ${cityName}, Utah"
                width={600}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">🏢 Commercial Services</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our commercial dumpster rental services in ${cityName} support businesses of all sizes with reliable waste management solutions. We understand the unique needs of commercial projects and provide flexible rental terms to accommodate your business operations.
            </p>
            <ul className="space-y-3 text-lg text-gray-700 mb-6">
              <li>• <strong>Construction and demolition</strong> - New builds, remodels, and tear-down projects</li>
              <li>• <strong>Office renovations</strong> - Commercial space updates and improvements</li>
              <li>• <strong>Retail store cleanouts</strong> - Inventory disposal and space preparation</li>
              <li>• <strong>Industrial waste removal</strong> - Manufacturing and production waste management</li>
              <li>• <strong>Event cleanup</strong> - Post-event waste collection and disposal</li>
              <li>• <strong>Restaurant renovations</strong> - Kitchen equipment and fixture disposal</li>
              <li>• <strong>Warehouse cleanouts</strong> - Large-scale inventory and equipment removal</li>
            </ul>
            <p className="text-gray-600 mb-6">
              We work closely with project managers and business owners to ensure minimal disruption to operations. Our commercial services include flexible scheduling, volume discounts, and detailed waste tracking for compliance purposes.
            </p>
            <Link 
              href="/${citySlug}"
              className="inline-block bg-[#4e37a8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              View Commercial Options →
            </Link>
          </div>
        </div>

        {/* Dumpster Sizes Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Available Dumpster Sizes for ${cityName} Projects</h2>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-4xl mx-auto">
            Choose the perfect dumpster size for your ${cityName} project. All rentals include delivery, pickup, and landfill fees. Weight is billed at $55/ton after pickup.
          </p>
          
          <div className="mb-8">
            <Image
              src="/images/20-yard-roll-off-dumpster-rental-graphic-labeled.jpg"
              alt="Dumpster size comparison for ${cityName} projects"
              width={800}
              height={300}
              className="w-full h-auto rounded-lg shadow-lg mx-auto"
            />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">15 Yard Dumpster</h3>
              <p className="text-gray-600 mb-4">Perfect for small to medium projects</p>
              <ul className="text-sm text-gray-700 space-y-1 text-left">
                <li>• Kitchen or bathroom remodel</li>
                <li>• Basement cleanout</li>
                <li>• Garage organization</li>
                <li>• Small deck removal</li>
                <li>• Yard waste collection</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">20 Yard Dumpster</h3>
              <p className="text-gray-600 mb-4">Ideal for medium to large projects</p>
              <ul className="text-sm text-gray-700 space-y-1 text-left">
                <li>• Whole house renovation</li>
                <li>• Roof replacement</li>
                <li>• Large deck removal</li>
                <li>• Commercial renovation</li>
                <li>• Estate cleanout</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">30 Yard Dumpster</h3>
              <p className="text-gray-600 mb-4">Best for large construction projects</p>
              <ul className="text-sm text-gray-700 space-y-1 text-left">
                <li>• New construction</li>
                <li>• Major demolition</li>
                <li>• Commercial build-out</li>
                <li>• Large-scale cleanout</li>
                <li>• Industrial projects</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our ${cityName} Service Process</h2>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-4xl mx-auto">
            Our streamlined process makes dumpster rental in ${cityName} simple and stress-free. From initial consultation to final pickup, we handle every detail professionally.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4e37a8] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Size</h3>
              <p className="text-gray-600 text-sm">Select the appropriate dumpster size based on your project scope and requirements.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4e37a8] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Schedule Delivery</h3>
              <p className="text-gray-600 text-sm">Choose your delivery date and time. We offer same-day delivery when available.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4e37a8] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Delivery</h3>
              <p className="text-gray-600 text-sm">Our experienced drivers deliver and place your dumpster with precision and care.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4e37a8] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pickup & Disposal</h3>
              <p className="text-gray-600 text-sm">When finished, we promptly pick up and handle proper disposal and recycling.</p>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">🚚 Same-Day Delivery</h3>
            <p className="text-gray-700 mb-4">Fast, reliable delivery throughout ${cityName} and surrounding areas. Order by 3 PM for next-day delivery.</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Professional drivers</li>
              <li>• Flexible scheduling</li>
              <li>• Emergency service available</li>
            </ul>
          </div>
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-green-900 mb-4">💰 Competitive Pricing</h3>
            <p className="text-gray-700 mb-4">Transparent pricing with no hidden fees. Best rates in ${cityName} and the surrounding area.</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• No hidden fees</li>
              <li>• Transparent pricing</li>
              <li>• Flexible rental periods</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-purple-900 mb-4">📞 Expert Support</h3>
            <p className="text-gray-700 mb-4">Professional customer service and project consultation available 7 days a week.</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Live customer support</li>
              <li>• Project consultation</li>
              <li>• Permit assistance</li>
            </ul>
          </div>
        </div>

        {/* Local Information */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Serving ${cityName} and Surrounding Areas</h2>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-4xl mx-auto">
            Icon Dumpsters proudly serves ${cityName}, Utah, and the surrounding communities. We understand the local area and can help you navigate any permit requirements or local regulations.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🏛️ ${cityName} Permit Information</h3>
              <p className="text-gray-700 mb-4">
                ${cityName} may require permits for dumpster placement on public streets or certain locations. Contact ${cityName} City to check specific requirements for your address.
              </p>
              <p className="text-gray-600 text-sm">
                We can help guide you through the permit process and ensure compliance with local regulations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">📍 Service Areas</h3>
              <p className="text-gray-700 mb-4">
                We provide dumpster rental services throughout ${cityName} and surrounding areas.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• ${cityName} City limits</li>
                <li>• Surrounding communities</li>
                <li>• Extended service area</li>
                <li>• Same-day delivery available</li>
                <li>• Professional service guaranteed</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions - ${cityName} Dumpster Rental</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do I need a permit for dumpster rental in ${cityName}?</h3>
              <p className="text-gray-700">
                Permit requirements vary by location in ${cityName}. Contact ${cityName} City to check specific requirements for your address. We can help guide you through the permit process and ensure compliance with local regulations.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How long can I keep the dumpster?</h3>
              <p className="text-gray-700">
                Our standard rental period is 7 days, but we offer flexible terms to accommodate your project timeline. Extended rentals are available for longer projects at competitive rates.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What can I put in the dumpster?</h3>
              <p className="text-gray-700">
                We accept most construction debris, household waste, and yard waste. Prohibited items include hazardous materials, electronics, and certain appliances. Contact us for specific guidelines and restrictions.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you offer same-day delivery in ${cityName}?</h3>
              <p className="text-gray-700">
                Yes, we offer same-day delivery throughout ${cityName} when available. Call us early in the day to check availability and schedule same-day service for urgent projects.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What are your delivery and pickup times?</h3>
              <p className="text-gray-700">
                We typically deliver and pick up between 7 AM and 5 PM, Monday through Saturday. We can accommodate specific timing requests when possible to minimize disruption to your project.
              </p>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Related Services and Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Nearby Cities</h3>
              <div className="space-y-2">
                <Link href="/salt-lake-city" className="block text-[#4e37a8] hover:text-purple-700 transition-colors">Salt Lake City Dumpster Rental</Link>
                <Link href="/west-valley-city" className="block text-[#4e37a8] hover:text-purple-700 transition-colors">West Valley City Dumpster Rental</Link>
                <Link href="/murray" className="block text-[#4e37a8] hover:text-purple-700 transition-colors">Murray Dumpster Rental</Link>
                <Link href="/west-jordan" className="block text-[#4e37a8] hover:text-purple-700 transition-colors">West Jordan Dumpster Rental</Link>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Helpful Resources</h3>
              <div className="space-y-2">
                <Link href="/dumpster-sizes-1" className="block text-[#4e37a8] hover:text-purple-700 transition-colors">Dumpster Sizes Guide</Link>
                <Link href="/transparent-pricing" className="block text-[#4e37a8] hover:text-purple-700 transition-colors">Transparent Pricing</Link>
                <Link href="/same-day-delivery" className="block text-[#4e37a8] hover:text-purple-700 transition-colors">Same-Day Delivery</Link>
                <Link href="/responsible-disposal" className="block text-[#4e37a8] hover:text-purple-700 transition-colors">Responsible Disposal</Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started with Your ${cityName} Project?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get your ${cityName} dumpster rental quote today. Fast delivery, competitive pricing, and professional service you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:${phoneNumber.replace(/[^0-9]/g, '')}"
              className="bg-[#4e37a8] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors"
            >
              Call Now: ${phoneNumber}
            </a>
            <Link 
              href="/${citySlug}#quote-form"
              className="bg-transparent border-2 border-[#4e37a8] text-[#4e37a8] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#4e37a8] hover:text-white transition-colors"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}`;
};

// Function to find all city service pages
function findCityServicePages() {
  const appDir = path.join(process.cwd(), 'app');
  const servicePages = [];
  
  function walkDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const fullPath = path.join(dir, entry.name);
        
        // Check if this directory has a services subdirectory with page.tsx
        const servicesPath = path.join(fullPath, 'services');
        if (fs.existsSync(servicesPath) && fs.statSync(servicesPath).isDirectory()) {
          const pagePath = path.join(servicesPath, 'page.tsx');
          if (fs.existsSync(pagePath)) {
            // Extract city name from directory name
            const citySlug = entry.name;
            const cityName = citySlug
              .split('-')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ')
              .replace('Dumpster Rentals', '');
            
            servicePages.push({
              path: pagePath,
              cityName: cityName.trim(),
              citySlug: citySlug
            });
          }
        }
        
        // Recursively search subdirectories
        walkDir(fullPath);
      }
    }
  }
  
  walkDir(appDir);
  return servicePages;
}

// Function to check if a page needs updating (has minimal content)
function needsUpdate(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if it's the old minimal template
    const hasMinimalContent = content.includes('bg-gradient-to-r from-[#4e37a8] to-purple-700') && 
                             content.includes('🏠 Residential Services') &&
                             content.includes('🏢 Commercial Services') &&
                             !content.includes('Service Overview') &&
                             !content.includes('Available Dumpster Sizes');
    
    return hasMinimalContent;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error.message);
    return false;
  }
}

// Main function to update all city service pages
async function updateAllCityServicePages() {
  console.log('🔍 Finding all city service pages...');
  
  const servicePages = findCityServicePages();
  console.log(`Found ${servicePages.length} city service pages`);
  
  const pagesToUpdate = servicePages.filter(page => needsUpdate(page.path));
  console.log(`Found ${pagesToUpdate.length} pages that need updating`);
  
  if (pagesToUpdate.length === 0) {
    console.log('✅ All pages are already updated!');
    return;
  }
  
  console.log('\\n📝 Updating pages...');
  
  let updatedCount = 0;
  let errorCount = 0;
  
  for (const page of pagesToUpdate) {
    try {
      console.log(`Updating ${page.cityName}...`);
      
      const newContent = generateServicePageContent(page.cityName, page.citySlug);
      
      // Create backup
      const backupPath = page.path + '.backup';
      fs.copyFileSync(page.path, backupPath);
      
      // Write new content
      fs.writeFileSync(page.path, newContent, 'utf8');
      
      updatedCount++;
      console.log(`✅ Updated ${page.cityName}`);
      
    } catch (error) {
      errorCount++;
      console.error(`❌ Error updating ${page.cityName}:`, error.message);
    }
  }
  
  console.log('\\n🎉 Update complete!');
  console.log(`✅ Successfully updated: ${updatedCount} pages`);
  if (errorCount > 0) {
    console.log(`❌ Errors: ${errorCount} pages`);
  }
  
  console.log('\\n📊 Summary:');
  console.log(`- Total pages found: ${servicePages.length}`);
  console.log(`- Pages updated: ${updatedCount}`);
  console.log(`- Pages already up-to-date: ${servicePages.length - pagesToUpdate.length}`);
  console.log(`- Errors: ${errorCount}`);
  
  if (updatedCount > 0) {
    console.log('\\n💡 Next steps:');
    console.log('1. Test the build: npm run build');
    console.log('2. Check for any linting errors');
    console.log('3. Review a few pages to ensure quality');
    console.log('4. Deploy when ready');
  }
}

// Run the script
if (require.main === module) {
  updateAllCityServicePages().catch(console.error);
}

module.exports = { updateAllCityServicePages, generateServicePageContent };
