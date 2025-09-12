import CityPageTemplate from '../../../components/CityPageTemplate';

export default function CottonwoodHeightsPage() {
  return (
    <CityPageTemplate
      cityName="Cottonwood Heights"
      citySlug="cottonwood-heights"
      state="Utah"
      phoneNumber="801-918-6000"
      latitude="40.6197"
      longitude="-111.8102"
      landmarks={[
        {
                "name": "Big Cottonwood Canyon",
                "address": "Big Cottonwood Canyon, Cottonwood Heights, UT 84121",
                "url": "https://www.fs.usda.gov/recarea/uwcnf/recarea/?recid=9876"
        },
        {
                "name": "Cottonwood Heights City Hall",
                "address": "2277 E Bengal Blvd, Cottonwood Heights, UT 84121",
                "url": "https://www.cottonwoodheights.utah.gov/"
        },
        {
                "name": "Cottonwood Heights Library",
                "address": "2277 E Bengal Blvd, Cottonwood Heights, UT 84121",
                "url": "https://slcolibrary.org/location/cottonwood-heights/"
        },
        {
                "name": "Cottonwood Heights Park",
                "address": "7500 S 2700 E, Cottonwood Heights, UT 84121",
                "url": "https://www.cottonwoodheights.utah.gov/parks-recreation/"
        },
        {
                "name": "Fortune Ridge",
                "address": "Fortune Ridge Dr, Cottonwood Heights, UT 84121",
                "url": "https://www.cottonwoodheights.utah.gov/community/"
        }
]}
      businessDistricts={[
        {
                "name": "Cottonwood Heights Town Center",
                "description": "City government and services",
                "link": "/cottonwood-heights-dumpster-rental-guide-2025"
        },
        {
                "name": "Cottonwood Heights East",
                "description": "Residential neighborhoods",
                "link": "/home-renovation-dumpster-guide"
        },
        {
                "name": "Cottonwood Heights West",
                "description": "Commercial and residential mix",
                "link": "/commercial-dumpsters"
        },
        {
                "name": "Cottonwood Heights Business District",
                "description": "Mixed residential and commercial",
                "link": "/cottonwood-heights-dumpster-rental-guide-2025"
        },
        {
                "name": "Fortune Ridge",
                "description": "Upscale residential area",
                "link": "/home-renovation-dumpster-guide"
        }
]}
      permitInfo={{
        cityName: "Cottonwood Heights",
        phoneNumber: "801-944-7000",
        requirements: "Contact Cottonwood Heights for permit requirements and applications. We can help guide you through the process."
      }}
      contentSections={{
        overview: "Icon Dumpsters provides reliable dumpster rental services throughout Cottonwood Heights, Utah. Whether you're tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.",
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
        whyChooseUs: "Icon Dumpsters is your trusted partner for dumpster rental in Cottonwood Heights. We understand the unique needs of this community and provide reliable, professional service for all your waste management needs.",
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
        localInfo: "Cottonwood Heights is a vibrant community in Utah known for its beautiful surroundings and strong community spirit. From residential neighborhoods to commercial districts, Cottonwood Heights offers a great place to live and work.",
        serviceAreas: "We provide dumpster rental services throughout Cottonwood Heights and surrounding areas. Our service area covers residential neighborhoods, commercial districts, and industrial areas to meet all your waste management needs."
      }}
    />
  );
}