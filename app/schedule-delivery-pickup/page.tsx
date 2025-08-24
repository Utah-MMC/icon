import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schedule Delivery & Pickup | Icon Dumpsters',
  description: 'How to schedule your roll-off dumpster delivery and pickup in Utah, with timing tips and site readiness checklist.',
  alternates: { canonical: '/schedule-delivery-pickup' },
};

export default function ScheduleDeliveryPickupPage() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-4">
          <a href="/" className="text-[#4e37a8] hover:underline">Home</a>
          <span className="mx-2">/</span>
          <span>Schedule Delivery & Pickup</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Schedule Delivery & Pickup</h1>
        <p className="text-lg text-gray-700 mb-6">Plan delivery windows, placement, access, and pickup timing to keep your project on schedule.</p>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700">
          <li>Confirm driveway/placement clearance and permits if needed</li>
          <li>Choose delivery window and contact preferences</li>
          <li>Schedule pickup when the dumpster is ready</li>
        </ol>
      </div>
    </div>
  );
}


