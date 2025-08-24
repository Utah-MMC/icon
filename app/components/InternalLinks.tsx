'use client';

import Link from 'next/link';
import { track } from './analytics';
import { usePathname } from 'next/navigation';

interface InternalLinksProps {
  currentPath?: string;
  exclude?: string[];
  className?: string;
}

const ALL_LINKS = {
  services: [
    { label: 'Dumpster Sizes', href: '/dumpster-sizes' },
    { label: 'Dumpster Calculator', href: '/dumpster-calculator' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
    { label: 'Blog', href: '/blog' },
  ],
  guides: [
    { label: 'Complete Dumpster Rental Guide 2025', href: '/dumpster-rental-guide-2025' },
    { label: 'Dumpster Rentals Near Me 2025', href: '/dumpster-rentals-near-me-2025' },
    { label: 'Construction Waste Management 2025', href: '/construction-waste-management-2025' },
    { label: 'Home Renovation Waste Disposal', href: '/home-renovation-waste-disposal-guide' },
    { label: 'Commercial Dumpster Rental Solutions', href: '/commercial-dumpster-rental-business-solutions' },
  ],
  areas: [
    { label: 'Salt Lake City', href: '/salt-lake-city' },
    { label: 'West Valley City', href: '/west-valley-city' },
    { label: 'Sandy', href: '/sandy' },
    { label: 'West Jordan', href: '/west-jordan' },
    { label: 'Murray', href: '/murray' },
    { label: 'South Jordan', href: '/south-jordan' },
  ],
};

export default function InternalLinks({ currentPath, exclude = [], className }: InternalLinksProps) {
  const pathname = usePathname();
  const excludeSet = new Set<string>([...(exclude || []), currentPath || pathname || '/']);

  function filterList(list: { label: string; href: string }[]) {
    const seen = new Set<string>();
    return list.filter((item) => {
      if (excludeSet.has(item.href)) return false;
      if (seen.has(item.href)) return false;
      seen.add(item.href);
      return true;
    });
  }

  const services = filterList(ALL_LINKS.services);
  const guides = filterList(ALL_LINKS.guides);
  const areas = filterList(ALL_LINKS.areas);

  return (
    <section className={`bg-white rounded-xl shadow-md p-8 ${className || ''}`}>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore More With Icon Dumpsters</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Popular Services</h3>
          <ul className="space-y-2 text-gray-700">
            {services.map((l) => (
              <li key={l.href}>• <Link href={l.href} onClick={() => { try { track('nav','internal_link',{ href: l.href, label: l.label, group: 'services' }); } catch {} }} className="text-[#4e37a8] hover:underline">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Helpful Guides</h3>
          <ul className="space-y-2 text-gray-700">
            {guides.map((l) => (
              <li key={l.href}>• <Link href={l.href} onClick={() => { try { track('nav','internal_link',{ href: l.href, label: l.label, group: 'guides' }); } catch {} }} className="text-[#4e37a8] hover:underline">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Top Areas</h3>
          <ul className="space-y-2 text-gray-700">
            {areas.map((l) => (
              <li key={l.href}>• <Link href={l.href} onClick={() => { try { track('nav','internal_link',{ href: l.href, label: l.label, group: 'areas' }); } catch {} }} className="text-[#4e37a8] hover:underline">{l.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}


