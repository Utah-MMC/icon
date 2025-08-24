import type { Metadata } from "next";
import TonnageCalculatorClient from "./TonnageCalculatorClient";

export const metadata: Metadata = {
  title: "Tonnage Calculator – Estimate Material Weights | Icon Dumpsters",
  description: "Estimate tons from volume and material type to choose the right dumpster and avoid overweight charges. $55/ton billed after weighing.",
  alternates: { canonical: "/tonnage-calculator" }
};

export default function TonnageCalculatorPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-r from-[#4e37a8] to-purple-700 text-white py-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tonnage Calculator</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">Estimate material weights to choose the right dumpster and avoid overweight charges.</p>
        </div>
      </section>

      <TonnageCalculatorClient />
    </div>
  );
}


