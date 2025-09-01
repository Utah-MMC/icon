import CityPageTemplate from '../components/CityPageTemplate';

export default function FarmingtonPage() {
  return (
    <CityPageTemplate
      cityName="Farmington"
      citySlug="farmington"
      state="Utah"
      phoneNumber="801-918-6000"
      latitude="40.9805"
      longitude="-111.8874"
      landmarks={[
        {
                "name": "Farmington Bay Waterfowl Management Area",
                "address": "1325 W Glover Ln, Farmington, UT 84025",
                "url": "https://wildlife.utah.gov/waterfowl-management-areas/farmington-bay.html"
        },
        {
                "name": "Farmington City Park",
                "address": "200 S 200 W, Farmington, UT 84025",
                "url": "https://www.farmington.utah.gov/parks-recreation/"
        },
        {
                "name": "Farmington Library",
                "address": "200 S 200 W, Farmington, UT 84025",
                "url": "https://slcolibrary.org/location/farmington/"
        },
        {
                "name": "Farmington Historic District",
                "address": "Main St, Farmington, UT 84025",
                "url": "https://www.farmington.utah.gov/community/history/"
        },
        {
                "name": "Farmington Cemetery",
                "address": "200 S 200 W, Farmington, UT 84025",
                "url": "https://www.farmington.utah.gov/cemetery/"
        }
]}
      businessDistricts={[
        {
                "name": "Farmington Town Center",
                "description": "City government and services",
                "link": "/farmington-dumpster-rental-guide-2025"
        },
        {
                "name": "Farmington East",
                "description": "Residential neighborhoods",
                "link": "/home-renovation-dumpster-guide"
        },
        {
                "name": "Farmington West",
                "description": "Commercial and residential mix",
                "link": "/commercial-dumpsters"
        },
        {
                "name": "Farmington Business District",
                "description": "Mixed residential and commercial",
                "link": "/farmington-dumpster-rental-guide-2025"
        },
        {
                "name": "Farmington Bay",
                "description": "Outdoor recreation area",
                "link": "/park-renovation-projects"
        }
]}
      permitInfo={{
        cityName: "Farmington",
        phoneNumber: "801-451-2383",
        requirements: "Contact Farmington for permit requirements and applications. We can help guide you through the process."
      }}
      contentSections={{
        overview: "Icon Dumpsters provides reliable dumpster rental services throughout Farmington, Utah. Whether you're tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.",
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
        whyChooseUs: "Icon Dumpsters is your trusted partner for dumpster rental in Farmington. We understand the unique needs of this community and provide reliable, professional service for all your waste management needs.",
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
        localInfo: "Farmington is a vibrant community in Utah known for its beautiful surroundings and strong community spirit. From residential neighborhoods to commercial districts, Farmington offers a great place to live and work.",
        serviceAreas: "We provide dumpster rental services throughout Farmington and surrounding areas. Our service area covers residential neighborhoods, commercial districts, and industrial areas to meet all your waste management needs."
      }}
    />
  );
}