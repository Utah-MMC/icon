import { Metadata } from "next";
import EnhancedKPIDashboard from "../components/EnhancedKPIDashboard";

export const metadata: Metadata = {
  title: "Enhanced KPI Dashboard - Icon Dumpsters Analytics",
  description: "Comprehensive business analytics with geographic insights, client database, and performance metrics for Icon Dumpsters.",
  keywords: "KPI dashboard, business analytics, client database, geographic analysis, Icon Dumpsters analytics",
  openGraph: {
    title: "Enhanced KPI Dashboard - Icon Dumpsters Analytics",
    description: "Comprehensive business analytics with geographic insights and client database.",
    url: 'https://icondumpsters.com/enhanced-dashboard',
    images: [
      {
        url: '/images/dashboard-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Enhanced KPI Dashboard - Icon Dumpsters Analytics',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EnhancedDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <EnhancedKPIDashboard />
    </div>
  );
}
