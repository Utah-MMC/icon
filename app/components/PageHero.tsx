'use client';

import Image from 'next/image';
import Link from 'next/link';

interface PageHeroProps {
  title: string;
  subtitle: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  showCta?: boolean;
}

export default function PageHero({
  title,
  subtitle,
  primaryCtaText = "Get Free Quote",
  primaryCtaLink = "/free-quote",
  secondaryCtaText,
  secondaryCtaLink,
  showCta = true
}: PageHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#4e37a8] via-purple-700 to-[#4e37a8] text-white py-20">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-purple-100 leading-relaxed mb-8">
              {subtitle}
            </p>
            {showCta && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href={primaryCtaLink} 
                  className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  {primaryCtaText}
                </Link>
                {secondaryCtaText && secondaryCtaLink && (
                  <Link 
                    href={secondaryCtaLink} 
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-700 transition-colors"
                  >
                    {secondaryCtaText}
                  </Link>
                )}
              </div>
            )}
          </div>
          <div className="relative">
            <Image
              src="/images/Icon_Dumpsters_Final.png"
              alt="Icon Dumpsters - Professional Dumpster Rental Services"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
