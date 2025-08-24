import type { Metadata } from "next";
import LocationsClient from "./LocationsClient";

export const metadata: Metadata = {
  title: "Utah Dumpster Rental Locations | Icon Dumpsters",
  description: "Find dumpster rental services across Utah: Salt Lake City, Utah County, Davis County, Weber, Summit, Tooele and more. Same‑day delivery, transparent pricing.",
  alternates: { canonical: "/locations" }
};

export default function UtahDumpsterRentalLocations() {
  return <LocationsClient />;
}
