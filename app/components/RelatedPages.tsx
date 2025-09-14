import Link from 'next/link';

interface RelatedPagesProps {
  currentPage?: string;
  cityName?: string;
  pageType?: 'city' | 'service' | 'blog' | 'general';
}

export default function RelatedPages({ currentPage, cityName, pageType = 'general' }: RelatedPagesProps) {
  // Define related pages based on page type
  const getRelatedPages = () => {
    switch (pageType) {
      case 'city':
        return [
          { title: 'Dumpster Sizes Guide', url: '/dumpster-sizes', description: 'Learn about our 15, 20, and 30-yard dumpster options' },
          { title: 'Utah Dumpster Permits', url: '/blog/utah-dumpster-permits-guide', description: 'Do you need a permit? Check city requirements' },
          { title: 'Construction Waste Guide', url: '/construction-waste-management-guide', description: 'Complete guide to construction waste disposal' },
          { title: 'Home Renovation Guide', url: '/home-renovation-waste-disposal-guide', description: 'Waste management for home renovation projects' },
          { title: 'Commercial Services', url: '/services', description: 'Professional dumpster rental for businesses' },
          { title: 'Dumpster Rental Calculator', url: '/dumpster-calculator', description: 'Calculate the right dumpster size for your project' }
        ];
      
      case 'service':
        return [
          { title: 'Dumpster Sizes', url: '/dumpster-sizes', description: 'Choose the right size for your project' },
          { title: 'Utah Locations', url: '/utah-dumpster-rental-locations', description: 'We serve all major Utah cities' },
          { title: 'Pricing Information', url: '/dumpster-prices', description: 'Transparent pricing with no hidden fees' },
          { title: 'Permits Guide', url: '/blog/utah-dumpster-permits-guide', description: 'City permit requirements' },
          { title: 'Waste Management Tips', url: '/blog/how-to-choose-dumpster-size', description: 'Expert tips for waste disposal' },
          { title: 'Contact Us', url: '/contact', description: 'Get in touch with our team' }
        ];
      
      case 'blog':
        return [
          { title: 'Dumpster Sizes Guide', url: '/dumpster-sizes', description: 'Complete guide to choosing the right dumpster' },
          { title: 'Services Overview', url: '/services', description: 'All our dumpster rental services' },
          { title: 'Utah Locations', url: '/utah-dumpster-rental-locations', description: 'Cities we serve in Utah' },
          { title: 'Construction Guide', url: '/construction-waste-management-guide', description: 'Construction waste management tips' },
          { title: 'Home Renovation Guide', url: '/home-renovation-waste-disposal-guide', description: 'Home renovation waste disposal' },
          { title: 'Get Free Quote', url: '/#quote-form', description: 'Get an instant quote for your project' }
        ];
      
      default:
        return [
          { title: 'Dumpster Sizes', url: '/dumpster-sizes', description: '15, 20, and 30-yard options available' },
          { title: 'Services', url: '/services', description: 'Residential and commercial dumpster rental' },
          { title: 'Utah Locations', url: '/utah-dumpster-rental-locations', description: 'We serve all major Utah cities' },
          { title: 'Pricing', url: '/dumpster-prices', description: 'Transparent pricing with no hidden fees' },
          { title: 'Contact', url: '/contact', description: 'Get in touch with our team' },
          { title: 'Book Now', url: '/book', description: 'Schedule your dumpster delivery' }
        ];
    }
  };

  const relatedPages = getRelatedPages();

  return (
    <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {cityName ? `Related Services in ${cityName}` : 'Related Services & Resources'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPages.map((page, index) => (
          <Link 
            key={index}
            href={page.url}
            className="group block p-6 border border-gray-200 rounded-lg hover:border-[#4e37a8] hover:shadow-md transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#4e37a8] mb-2">
              {page.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {page.description}
            </p>
            <div className="mt-3 text-[#4e37a8] font-medium text-sm group-hover:underline">
              Learn More →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
