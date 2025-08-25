import type { Metadata } from 'next';
import FeesAndSurcharges from '../components/FeesAndSurcharges';
import PageHero from '../components/PageHero';

export const metadata: Metadata = {
  title: 'Fees & Surcharges | Icon Dumpsters',
  description: 'Transparent dumpster rental fees in Utah: weight billed at $55/ton after pickup, plus optional item surcharges (mattress, fridge, tires). No hidden fees.',
  alternates: { canonical: '/fees' },
  robots: { index: true, follow: true }
};

export default function FeesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title="Fees & Surcharges"
        subtitle="We keep pricing simple and transparent. Below are the typical weight rates and item fees. Call us with any questions at (801) 918‑6000."
        primaryCtaText="Get Free Quote"
        primaryCtaLink="/free-quote"
        secondaryCtaText="Call Now"
        secondaryCtaLink="tel:(801) 918-6000"
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FeesAndSurcharges />
      </div>
    </div>
  );
}


