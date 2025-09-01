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
    <section className="relative bg-gradient-to-br from-[#4e37a8] via-purple-700 to-[#4e37a8] text-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-purple-100 leading-relaxed mb-6 sm:mb-8">
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
          <div className="relative flex justify-center lg:justify-end">
            <div className="bg-white rounded-lg shadow-2xl p-4 w-full max-w-md lg:max-w-lg">
              <Image
                src="/images/Icon_Dumpsters_Final.png"
                alt="Icon Dumpsters - Professional Dumpster Rental Services"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
