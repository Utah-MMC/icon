import type { Metadata } from "next";
import DumpsterCalculator from "../../components/DumpsterCalculator";

export const metadata: Metadata = {
  title: "Dumpster Quote Calculator - Get Instant Pricing | Icon Dumpsters",
  description: "Get instant pricing estimates for your dumpster rental. Our advanced calculator includes veteran discounts, special rates, and accurate Utah pricing.",
  keywords: "dumpster quote calculator, dumpster pricing calculator, Utah dumpster rental cost, dumpster rental estimate",
  alternates: { canonical: "/dumpster-calculator/quote" }
};

export default function DumpsterQuoteCalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-[#4e37a8] to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Dumpster Quote Calculator</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Get instant pricing estimates for your dumpster rental with our advanced cost calculator. 
            Includes veteran discounts, special rates, and accurate Utah pricing.
          </p>
        </div>
      </div>

      <DumpsterCalculator />
    </div>
  );
}
