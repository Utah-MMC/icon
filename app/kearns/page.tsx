import CityPageTemplate from '../components/CityPageTemplate';

export default function KearnsPage() {
  return (
    <CityPageTemplate
      cityName="Kearns"
      citySlug="kearns"
      state="Utah"
      phoneNumber="801-918-6000"
      latitude="40.6599"
      longitude="-112.0093"
      landmarks={[
        {
                "name": "Kearns Oquirrh Park Fitness Center",
                "address": "5624 S 4800 W, Kearns, UT 84118",
                "url": "https://www.slco.org/parks/kearns-oquirrh-park-fitness-center/"
        },
        {
                "name": "Kearns Library",
                "address": "5350 S 4220 W, Kearns, UT 84118",
                "url": "https://slcolibrary.org/location/kearns/"
        },
        {
                "name": "Kearns Park",
                "address": "5624 S 4800 W, Kearns, UT 84118",
                "url": "https://www.slco.org/parks/kearns-oquirrh-park/"
        },
        {
                "name": "Kearns Historic District",
                "address": "Main St, Kearns, UT 84118",
                "url": "https://www.slco.org/planning/historic-preservation/"
        },
        {
                "name": "Kearns Cemetery",
                "address": "5624 S 4800 W, Kearns, UT 84118",
                "url": "https://www.slco.org/cemetery/"
        }
]}
      businessDistricts={[
        {
                "name": "Kearns Town Center",
                "description": "City government and services",
                "link": "/kearns-dumpster-rental-guide-2025"
        },
        {
                "name": "Kearns East",
                "description": "Residential neighborhoods",
                "link": "/home-renovation-dumpster-guide"
        },
        {
                "name": "Kearns West",
                "description": "Commercial and residential mix",
                "link": "/commercial-dumpsters"
        },
        {
                "name": "Kearns Business District",
                "description": "Mixed residential and commercial",
                "link": "/kearns-dumpster-rental-guide-2025"
        },
        {
                "name": "Kearns Oquirrh Park",
                "description": "Recreation and fitness center",
                "link": "/park-renovation-projects"
        }
]}
      permitInfo={{
        cityName: "Kearns",
        phoneNumber: "801-535-6000",
        requirements: "Contact Kearns for permit requirements and applications. We can help guide you through the process."
      }}
      contentSections={{
        overview: "Icon Dumpsters provides reliable dumpster rental services throughout Kearns, Utah. Whether you're tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.",
        residentialServices: [
          "Home renovations and remodeling",
          "Basement cleanouts",
          "Garage organization",
          "Yard waste removal",
          "Estate cleanouts"
        ],
        commercialServices: [
          "Construction and demolition",
          "Office renovations",
          "Retail store cleanouts",
          "Industrial waste removal",
          "Event cleanup"
        ],
        whyChooseUs: "Icon Dumpsters is your trusted partner for dumpster rental in Kearns. We understand the unique needs of this community and provide reliable, professional service for all your waste management needs.",
        dumpsterSizes: [
          {
            size: "15 Yard",
            description: "Perfect for small to medium projects",
            useCases: [
              "Kitchen remodel",
              "Bathroom renovation",
              "Garage cleanout",
              "Small construction"
            ]
          },
          {
            size: "20 Yard",
            description: "Great for medium to large projects",
            useCases: [
              "Full home renovation",
              "Large construction",
              "Commercial projects",
              "Major cleanouts"
            ]
          },
          {
            size: "30 Yard",
            description: "For major projects and construction",
            useCases: [
              "Large construction",
              "Commercial demolition",
              "Major renovations",
              "Industrial projects"
            ]
          }
        ],
        localInfo: "Kearns is a vibrant community in Utah known for its beautiful surroundings and strong community spirit. From residential neighborhoods to commercial districts, Kearns offers a great place to live and work.",
        serviceAreas: "We provide dumpster rental services throughout Kearns and surrounding areas. Our service area covers residential neighborhoods, commercial districts, and industrial areas to meet all your waste management needs."
      }}
    />
  );
}