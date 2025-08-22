'use client';

import { usePathname } from 'next/navigation';
import CalculatorBanner from './CalculatorBanner';

const ALLOWED_PREFIXES = [
  '/dumpster-calculator',
  '/demolition-dumpster-calculator',
  '/dumpster-calculator-for-concrete',
  '/30-yard-dumpster-rental-calculator',
  '/dumpster-volume-calculator',
];

export default function ConditionalCalculatorBanner() {
  const pathname = usePathname() || '/';
  const shouldShow = ALLOWED_PREFIXES.some((p) => pathname.startsWith(p));
  if (!shouldShow) return null;
  return <CalculatorBanner />;
}


