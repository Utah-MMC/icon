"use client";

import ImageWithFallback from "../components/ImageWithFallback";
import Link from "next/link";
import Analytics from "../components/Analytics";
import ArticleSchema from "../components/ArticleSchema";
import FAQSchema from "../components/FAQSchema";
import { useMemo, useState } from "react";
import { zipToCity } from "../config/serviceAreas";

export default function LocationsClient() {
  const utahCities = {
    "Salt Lake Valley": [
      { name: "Salt Lake City", url: "/salt-lake-city", guideUrl: "/salt-lake-city-dumpster-rental-guide-2025" },
      { name: "West Valley City", url: "/west-valley-city", guideUrl: "/west-valley-city-dumpster-rental-guide-2025" },
      { name: "Sandy", url: "/sandy", guideUrl: "/sandy-dumpster-rental-guide-2025" },
      { name: "West Jordan", url: "/west-jordan", guideUrl: "/west-jordan-dumpster-rental-guide-2025" },
      { name: "Murray", url: "/murray", guideUrl: "/murray-dumpster-rental-guide-2025" },
      { name: "Taylorsville", url: "/taylorsville", guideUrl: "/taylorsville-dumpster-rental-guide-2025" },
      { name: "South Jordan", url: "/south-jordan", guideUrl: "/south-jordan-dumpster-rental-guide-2025" },
      { name: "Riverton", url: "/riverton", guideUrl: "/riverton-dumpster-rental-guide-2025" },
      { name: "Draper", url: "/draper", guideUrl: "/draper-dumpster-rental-guide-2025" },
      { name: "Midvale", url: "/midvale", guideUrl: "/midvale-dumpster-rental-guide-2025" },
      { name: "Cottonwood Heights", url: "/cottonwood-heights", guideUrl: "/cottonwood-heights-dumpster-rental-guide-2025" },
      { name: "Holladay", url: "/holladay", guideUrl: "/holladay-dumpster-rental-guide-2025" },
      { name: "South Salt Lake", url: "/south-salt-lake", guideUrl: "/south-salt-lake-dumpster-rental-guide-2025" },
      { name: "Sugar House", url: "/sugar-house", guideUrl: "/sugar-house-dumpster-rental-guide-2025" },
      { name: "Millcreek", url: "/millcreek", guideUrl: "/millcreek-dumpster-rental-guide-2025" },
      { name: "Kearns", url: "/kearns", guideUrl: "/kearns-dumpster-rental-guide-2025" },
      { name: "Magna", url: "/magna", guideUrl: "/magna-dumpster-rental-guide-2025" },
      { name: "Fairpark", url: "/fairpark", guideUrl: "/fairpark-dumpster-rental-guide-2025" },
      { name: "Downtown Salt Lake", url: "/downtown-salt-lake", guideUrl: "/downtown-salt-lake-dumpster-rental-guide-2025" },
      { name: "Poplar Grove", url: "/poplar-grove", guideUrl: "/poplar-grove-dumpster-rental-guide-2025" },
      { name: "Glendale", url: "/glendale", guideUrl: "/glendale-dumpster-rental-guide-2025" },
      { name: "Rose Park", url: "/rose-park" }
    ],
    "Utah County": [
      { name: "Provo", url: "/provo", guideUrl: "/provo-dumpster-rental-guide-2025" },
      { name: "Orem", url: "/orem", guideUrl: "/orem-dumpster-rental-guide-2025" },
      { name: "Lehi", url: "/lehi", guideUrl: "/lehi-dumpster-rental-guide-2025" },
      { name: "American Fork", url: "/american-fork", guideUrl: "/american-fork-dumpster-rental-guide-2025" },
      { name: "Pleasant Grove", url: "/pleasant-grove", guideUrl: "/pleasant-grove-dumpster-rental-guide-2025" },
      { name: "Eagle Mountain", url: "/eagle-mountain", guideUrl: "/eagle-mountain-dumpster-rental-guide-2025" },
      { name: "Saratoga Springs", url: "/saratoga-springs", guideUrl: "/saratoga-springs-dumpster-rental-guide-2025" },
      { name: "Bluffdale", url: "/bluffdale", guideUrl: "/bluffdale-dumpster-rental-guide-2025" },
      { name: "Herriman", url: "/herriman", guideUrl: "/herriman-dumpster-rental-guide-2025" }
    ],
    "Davis County": [
      { name: "Layton", url: "/layton", guideUrl: "/layton-dumpster-rental-guide-2025" },
      { name: "Bountiful", url: "/bountiful", guideUrl: "/bountiful-dumpster-rental-guide-2025" },
      { name: "Clearfield", url: "/clearfield", guideUrl: "/clearfield-dumpster-rental-guide-2025" },
      { name: "Centerville", url: "/centerville", guideUrl: "/centerville-dumpster-rental-guide-2025" },
      { name: "Kaysville", url: "/kaysville", guideUrl: "/kaysville-dumpster-rental-guide-2025" },
      { name: "Syracuse", url: "/syracuse", guideUrl: "/syracuse-dumpster-rental-guide-2025" },
      { name: "North Salt Lake", url: "/north-salt-lake", guideUrl: "/north-salt-lake-dumpster-rental-guide-2025" },
      { name: "Farmington", url: "/farmington", guideUrl: "/farmington-dumpster-rental-guide-2025" },
      { name: "Woods Cross", url: "/woods-cross", guideUrl: "/woods-cross-dumpster-rental-guide-2025" },
      { name: "Roy", url: "/roy", guideUrl: "/roy-dumpster-rental-guide-2025" }
    ],
    "Weber County": [
      { name: "Ogden", url: "/ogden", guideUrl: "/ogden-dumpster-rental-guide-2025" }
    ],
    "Summit County": [
      { name: "Park City", url: "/park-city", guideUrl: "/park-city-dumpster-rental-guide-2025" }
    ],
    "Tooele County": [
      { name: "Tooele", url: "/tooele", guideUrl: "/tooel-dumpster-rental-guide-2025" }
    ]
  } as const;

  const [search, setSearch] = useState<string>("");
  const [callbackPhone, setCallbackPhone] = useState<string>("");
  const [callbackStatus, setCallbackStatus] = useState<'idle' | 'sent' | 'error'>("idle");

  const zipMatchedCityNames = useMemo(() => {
    const term = search.trim();
    const isZipLike = /^\d{5}$/.test(term);
    if (!isZipLike) return new Set<string>();
    const lowerCaseMatches = new Set<string>();
    Object.entries(zipToCity).forEach(([zip, city]) => {
      if (zip.startsWith(term)) {
        lowerCaseMatches.add(city.toLowerCase());
      }
    });
    return lowerCaseMatches;
  }, [search]);

  const unknownZip = useMemo(() => {
    const z = search.trim();
    if (!/^\d{5}$/.test(z)) return false;
    return !zipToCity[z];
  }, [search]);

  async function submitZipCallback() {
    try {
      const z = search.trim();
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone: callbackPhone,
          zipCode: z,
          source: 'locations-zip-callback',
          subject: `Callback request for ZIP ${z}`,
        }),
      });
      setCallbackStatus('sent');
      setCallbackPhone('');
    } catch {
      setCallbackStatus('error');
    }
  }

  function cityMatches(name: string): boolean {
    const term = search.trim().toLowerCase();
    if (!term) return true;
    if (name.toLowerCase().includes(term)) return true;
    if (zipMatchedCityNames.has(name.toLowerCase())) return true;
    return false;
  }

  return <div className="min-h-screen bg-white" />;
}


