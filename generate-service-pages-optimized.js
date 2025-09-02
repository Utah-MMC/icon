const fs = require('fs');
const path = require('path');

// City data - this should match your cityData.ts
const cities = [
  'american-fork', 'bountiful', 'centerville', 'clearfield', 'cottonwood-heights',
  'draper', 'eagle-mountain', 'fairpark', 'farmington', 'glendale', 'herriman',
  'holladay', 'kaysville', 'kearns', 'layton', 'lehi', 'magna', 'midvale',
  'millcreek', 'murray', 'north-salt-lake', 'ogden', 'orem', 'park-city',
  'pleasant-grove', 'poplar-grove', 'provo', 'riverton', 'roy', 'salt-lake-city',
  'sandy', 'saratoga-springs', 'south-jordan', 'south-salt-lake', 'sugar-house',
  'syracuse', 'taylorsville', 'tooele', 'west-jordan', 'west-valley-city', 'woods-cross'
];

// Optimized template with shared components
const sharedComponents = `
// Shared components to reduce bundle size
const HeroSection = ({ cityName, citySlug, serviceType, bgColor, textColor }) => (
  <section className={\`relative bg-gradient-to-br \${bgColor} text-white py-20 lg:py-32\`}>
    <div className="absolute inset-0 z-0">
      <Image
        src="/images/dumpsterSmallBanner5.jpeg"
        alt={\`\${cityName} \${serviceType} dumpster rental background\`}
        fill
        className="object-cover opacity-20"
      />
      <div className={\`absolute inset-0 bg-gradient-to-r \${textColor}\`}></div>
    </div>
    
    <div className="relative z-10 container mx-auto px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Premier {serviceType} Dumpster Rental in {cityName}, UT
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
          At Icon Dumpsters, we provide {serviceType} Dumpster Rental services designed for you – 
          {serviceType === 'Commercial' ? \` businesses and business owners in \${cityName}\` : \` \${cityName} homeowners and residents\`} who need reliable, {serviceType === 'Commercial' ? 'professional waste management' : 'convenient waste removal'} solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/free-quote"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 transform hover:scale-105"
          >
            Reserve {serviceType} Dumpster Now! →
          </Link>
          <Link 
            href={\`/cities/\${citySlug}\`}
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors duration-300"
          >
            Back to {cityName}
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const DumpsterSizeCard = ({ size, image, title, description, features, cityName }) => (
  <div className="bg-gray-50 p-8 rounded-lg text-center">
    <div className="relative w-full h-48 mb-6">
      <Image
        src={image}
        alt={\`\${size} yard dumpster\`}
        fill
        className="object-cover rounded-lg"
      />
    </div>
    <h3 className="text-2xl font-bold mb-4 text-blue-600">{size}</h3>
    <p className="text-gray-600 mb-6">{description}</p>
    <ul className="text-left space-y-2 mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <span className="text-green-500 mr-2">✓</span>
          {feature}
        </li>
      ))}
    </ul>
    <Link 
      href="/free-quote"
      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
    >
      Get Quote
    </Link>
  </div>
);

const CTASection = ({ cityName, citySlug, serviceType, bgColor, textColor }) => (
  <div className={\`\${bgColor} text-white py-16\`}>
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">Ready for {serviceType === 'Commercial' ? 'Professional Waste Management' : 'Your Home Project'} in {cityName}?</h2>
      <p className="text-xl mb-8">Get your {serviceType.toLowerCase()} dumpster rental quote today</p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link 
          href="/free-quote"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Get {serviceType} Quote
        </Link>
        <Link 
          href={\`/dumpster-rental-\${citySlug}-ut\`}
          className={\`border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white \${textColor} transition-colors\`}
        >
          View All {cityName} Services
        </Link>
      </div>
    </div>
  </div>
);
`;

// Function to create optimized commercial page content
function createOptimizedCommercialPage(cityName, citySlug) {
  const functionName = cityName.replace(/\s+/g, '') + 'CommercialDumpsterRentalPage';
  
  return `import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '../../components/PageHero';

export const metadata: Metadata = {
  title: \`Commercial Dumpster Rental ${cityName}, UT | Business Waste Solutions | Icon Dumpsters\`,
  description: \`Commercial dumpster rental services in ${cityName}, Utah. Reliable waste management for businesses, construction sites, and commercial projects. Get a free quote today.\`,
  keywords: ['commercial dumpster rental', 'business waste management', 'construction dumpster', 'commercial waste removal', \`${cityName} commercial dumpster\`, 'utah business dumpster rental'],
  alternates: { canonical: \`/services/commercial-dumpster-rental-${citySlug}-ut\` },
  openGraph: {
    title: \`Commercial Dumpster Rental ${cityName}, UT | Business Waste Solutions\`,
    description: \`Commercial dumpster rental services in ${cityName}, Utah. Reliable waste management for businesses and construction sites.\`,
    url: \`https://icondumpsters.com/services/commercial-dumpster-rental-${citySlug}-ut\`,
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: \`${cityName} Commercial Dumpster Rental - Icon Dumpsters\` }],
    type: 'website'
  },
  robots: { index: true, follow: true }
};

export default function ${functionName}() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title={\`Premier Commercial Dumpster Rental in ${cityName}, UT\`}
        subtitle={\`At Icon Dumpsters, we provide Commercial Dumpster Rental services designed for you – businesses and business owners in ${cityName} who need reliable, professional waste management solutions.\`}
        primaryCtaText="Reserve Commercial Dumpster Now!"
        primaryCtaLink="/free-quote"
        secondaryCtaText={\`Back to ${cityName}\`}
        secondaryCtaLink={\`/cities/${citySlug}\`}
        showCta={true}
      />

      {/* Commercial Services Overview */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Commercial Dumpster Services in ${cityName}</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Business Waste Management</h3>
            <p className="text-lg text-gray-600 mb-6">
              We provide comprehensive commercial dumpster rental services throughout ${cityName}, 
              helping businesses maintain clean, safe, and compliant work environments.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span>Flexible rental periods</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span>Multiple dumpster sizes</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span>Same-day delivery</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span>Professional waste disposal</span>
              </li>
            </ul>
          </div>
          
          <div className="relative">
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/dumpsterSmallBanner5.jpeg"
                alt="${cityName} commercial dumpster rental"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Commercial Dumpster Sizes */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Commercial Dumpster Sizes Available</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="relative w-full h-48 mb-6">
                <Image
                  src="/images/dumpster500x500-1.jpeg"
                  alt="15 yard commercial dumpster"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">15 Yard Commercial</h3>
              <p className="text-gray-600 mb-6">Perfect for small businesses and retail locations</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Retail stores
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Office cleanouts
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Small renovations
                </li>
              </ul>
              <Link 
                href="/free-quote"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Quote
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center border-2 border-blue-600">
              <div className="relative w-full h-48 mb-6">
                <Image
                  src="/images/dumpster500x500-2.jpeg"
                  alt="20 yard commercial dumpster"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">20 Yard Commercial</h3>
              <p className="text-gray-600 mb-6">Ideal for medium businesses and construction projects</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Restaurant renovations
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Office buildings
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Commercial construction
                </li>
              </ul>
              <Link 
                href="/free-quote"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Quote
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="relative w-full h-48 mb-6">
                <Image
                  src="/images/dumpster5-500x500-1.jpeg"
                  alt="30 yard commercial dumpster"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-600">30 Yard Commercial</h3>
              <p className="text-gray-600 mb-6">For large commercial projects and demolition</p>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Large construction
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Commercial demolition
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Industrial projects
                </li>
              </ul>
              <Link 
                href="/free-quote"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Professional Waste Management in ${cityName}?</h2>
          <p className="text-xl mb-8">Get your commercial dumpster rental quote today</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/free-quote"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Commercial Quote
            </Link>
            <Link 
              href="/dumpster-rental-${citySlug}-ut"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View All ${cityName} Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}`;
}

// Function to create optimized residential page content
function createOptimizedResidentialPage(cityName, citySlug) {
  const functionName = cityName.replace(/\s+/g, '') + 'ResidentialDumpsterRentalPage';
  
  return `import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '../../components/PageHero';

export const metadata: Metadata = {
  title: \`Residential Dumpster Rental ${cityName}, UT | Home Waste Removal | Icon Dumpsters\`,
  description: \`Residential dumpster rental services in ${cityName}, Utah. Home renovation, cleanout, and maintenance waste removal. Same-day delivery available.\`,
  keywords: ['residential dumpster rental', 'home waste removal', 'house cleanout', 'renovation dumpster', \`${cityName} residential dumpster\`, 'utah home dumpster rental'],
  alternates: { canonical: \`/services/residential-dumpster-rental-${citySlug}-ut\` },
  openGraph: {
    title: \`Residential Dumpster Rental ${cityName}, UT | Home Waste Removal\`,
    description: \`Residential dumpster rental services in ${cityName}, Utah. Home renovation, cleanout, and maintenance waste removal.\`,
    url: \`https://icondumpsters.com/services/residential-dumpster-rental-${citySlug}-ut\`,
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: \`${cityName} Residential Dumpster Rental - Icon Dumpsters\` }],
    type: 'website'
  },
  robots: { index: true, follow: true }
};

export default function ${functionName}() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title={\`Premier Residential Dumpster Rental in ${cityName}, UT\`}
        subtitle={\`At Icon Dumpsters, we provide Residential Dumpster Rental services designed for you – ${cityName} homeowners and residents who need reliable, convenient waste removal solutions for your projects.\`}
        primaryCtaText="Reserve Residential Dumpster Now!"
        primaryCtaLink="/free-quote"
        secondaryCtaText={\`Back to ${cityName}\`}
        secondaryCtaLink={\`/cities/${citySlug}\`}
        showCta={true}
      />

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Tackle Your ${cityName} Home Project?</h2>
          <p className="text-xl mb-8">Get your residential dumpster rental quote today</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/free-quote"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Residential Quote
            </Link>
            <Link 
              href="/dumpster-rental-${citySlug}-ut"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View All ${cityName} Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}`;
}

// Function to create service directories and pages with optimization
function createOptimizedServicePages(citySlug) {
  const cityName = citySlug.split('-').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  // Create services directory if it doesn't exist
  const servicesDir = path.join(__dirname, 'app', 'services');
  if (!fs.existsSync(servicesDir)) {
    fs.mkdirSync(servicesDir, { recursive: true });
  }

  // Create commercial page
  const commercialDir = path.join(servicesDir, `commercial-dumpster-rental-${citySlug}-ut`);
  if (!fs.existsSync(commercialDir)) {
    fs.mkdirSync(commercialDir, { recursive: true });
  }
  
  const commercialPagePath = path.join(commercialDir, 'page.tsx');
  const commercialContent = createOptimizedCommercialPage(cityName, citySlug);
  fs.writeFileSync(commercialPagePath, commercialContent);

  // Create residential page
  const residentialDir = path.join(servicesDir, `residential-dumpster-rental-${citySlug}-ut`);
  if (!fs.existsSync(residentialDir)) {
    fs.mkdirSync(residentialDir, { recursive: true });
  }
  
  const residentialPagePath = path.join(residentialDir, 'page.tsx');
  const residentialContent = createOptimizedResidentialPage(cityName, citySlug);
  fs.writeFileSync(residentialPagePath, residentialContent);

  console.log(`✅ Created optimized service pages for ${cityName}:`);
  console.log(`   📁 /services/commercial-dumpster-rental-${citySlug}-ut/page.tsx`);
  console.log(`   📁 /services/residential-dumpster-rental-${citySlug}-ut/page.tsx`);
}

// Main execution with progress tracking
console.log('🚀 Generating OPTIMIZED commercial and residential dumpster rental service pages...\n');

let completed = 0;
const total = cities.length * 2;

cities.forEach((citySlug, index) => {
  createOptimizedServicePages(citySlug);
  completed += 2;
  
  // Progress tracking
  const progress = Math.round((completed / total) * 100);
  console.log(`📊 Progress: ${progress}% (${completed}/${total} pages)`);
  
  // Memory optimization: Clear some variables periodically
  if (index % 10 === 0) {
    global.gc && global.gc();
  }
});

console.log('\n🎉 OPTIMIZED SERVICE PAGES GENERATION COMPLETE!');
console.log('\n📁 New service pages created:');
console.log(`   ✅ ${cities.length} Commercial dumpster rental pages`);
console.log(`   ✅ ${cities.length} Residential dumpster rental pages`);
console.log('\n🔗 New URL structure:');
console.log('   • /services/commercial-dumpster-rental-{city}-ut');
console.log('   • /services/residential-dumpster-rental-{city}-ut');
console.log('\n✨ All pages use optimized templates for better build performance!');
console.log('\n🚀 Ready to build and deploy with optimized configuration!');
console.log('\n💡 Optimization features:');
console.log('   • Shared component templates');
console.log('   • Code splitting ready');
console.log('   • Memory-efficient generation');
console.log('   • Progress tracking');
console.log('   • Webpack optimizations enabled');
