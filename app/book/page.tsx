import type { Metadata } from 'next';
import BookClient from './BookClient';

export const metadata: Metadata = {
  title: 'Book Now | Icon Dumpsters',
  description: 'Reserve your dumpster in minutes. Choose size, dates, and location. An Icon expert will confirm scheduling.',
  alternates: { canonical: '/book' }
};

export default function Page() {
  return <BookClient />;
}


