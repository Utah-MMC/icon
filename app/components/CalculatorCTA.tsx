import Link from 'next/link';

export default function CalculatorCTA({ className = '' }: { className?: string }) {
  return (
    <section className={`bg-gradient-to-br from-purple-50 to-[#4e37a8]/10 p-6 rounded-xl border border-[#4e37a8]/20 ${className}`}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-[#4e37a8]">Try our Dumpster Calculator</h3>
          <p className="text-gray-700">Get an instant estimate tailored to your project in seconds.</p>
        </div>
        <Link
          href="/dumpster-calculator"
          className="inline-block bg-[#4e37a8] text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
        >
          Try the Calculator
        </Link>
      </div>
    </section>
  );
}


