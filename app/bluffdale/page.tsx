import CityPageTemplate from '../components/CityPageTemplate';

export default function BluffdalePage() {
  return (
    <CityPageTemplate
      cityName="Bluffdale"
      citySlug="bluffdale"
      state="Utah"
      phoneNumber="801-918-6000"
      latitude="40.4897"
      longitude="-111.9388"
      landmarks={[
        {
                "name": "Bluffdale City Park",
                "address": "2400 W 14400 S, Bluffdale, UT 84065",
                "url": "https://www.bluffdale.com/parks-recreation/"
        },
        {
                "name": "Jordan River Parkway",
                "address": "Jordan River Parkway Trail, Bluffdale, UT 84065",
                "url": "https://www.slc.gov/parks/parks-division/jordan-river-parkway/"
        },
        {
                "name": "Camp Williams",
                "address": "17800 Camp Williams Rd, Bluffdale, UT 84065",
                "url": "https://ut.ng.mil/Installations/Camp-Williams/"
        },
        {
                "name": "Bluffdale Cemetery",
                "address": "14229 S Redwood Rd, Bluffdale, UT 84065",
                "url": "https://www.bluffdale.com/cemetery/"
        },
        {
                "name": "Bluffdale Library",
                "address": "14350 S Redwood Rd, Bluffdale, UT 84065",
                "url": "https://slcolibrary.org/location/bluffdale/"
        }
]}
      businessDistricts={[
        {
                "name": "Bluffdale Town Center",
                "description": "City government and services",
                "link": "/bluffdale-dumpster-rental-guide-2025"
        },
        {
                "name": "Bluffdale East",
                "description": "Residential neighborhoods",
                "link": "/home-renovation-dumpster-guide"
        },
        {
                "name": "Bluffdale West",
                "description": "Commercial and residential mix",
                "link": "/commercial-dumpsters"
        },
        {
                "name": "Bluffdale South",
                "description": "Growing residential area",
                "link": "/home-renovation-dumpster-guide"
        },
        {
                "name": "Bluffdale Business District",
                "description": "Mixed residential and commercial",
                "link": "/bluffdale-dumpster-rental-guide-2025"
        }
]}
      permitInfo={{
        cityName: "Bluffdale",
        phoneNumber: "801-254-2200",
        requirements: "Contact Bluffdale for permit requirements and applications. We can help guide you through the process."
      }}
      contentSections={{
        overview: "Icon Dumpsters provides reliable dumpster rental services throughout Bluffdale, Utah. Whether you're tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.",
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
        whyChooseUs: "Icon Dumpsters is your trusted partner for dumpster rental in Bluffdale. We understand the unique needs of this community and provide reliable, professional service for all your waste management needs.",
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
        localInfo: "Bluffdale is a vibrant community in Utah known for its beautiful surroundings and strong community spirit. From residential neighborhoods to commercial districts, Bluffdale offers a great place to live and work.",
        serviceAreas: "We provide dumpster rental services throughout Bluffdale and surrounding areas. Our service area covers residential neighborhoods, commercial districts, and industrial areas to meet all your waste management needs."
      }}
    />
  );
}