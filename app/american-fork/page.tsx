import CityPageTemplate from '../components/CityPageTemplate';

export default function AmericanForkPage() {
  return (
    <CityPageTemplate
      cityName="American Fork"
      citySlug="american-fork"
      state="Utah"
      phoneNumber="801-918-6000"
      latitude="40.3769"
      longitude="-111.7958"
      landmarks={[
        {
                "name": "Timpanogos Cave National Monument",
                "address": "2038 Alpine Loop Rd, American Fork, UT 84003",
                "url": "https://www.nps.gov/tica/"
        },
        {
                "name": "American Fork Canyon",
                "address": "American Fork Canyon, UT 84003",
                "url": "https://www.fs.usda.gov/recarea/uwcnf/recarea/?recid=9875"
        },
        {
                "name": "Utah Lake State Park",
                "address": "4400 W Center St, Provo, UT 84601",
                "url": "https://stateparks.utah.gov/parks/utah-lake/"
        },
        {
                "name": "Mountain View Corridor",
                "address": "Mountain View Corridor, American Fork, UT 84003",
                "url": "https://www.udot.utah.gov/connect/mountain-view-corridor/"
        },
        {
                "name": "American Fork Library",
                "address": "64 S 100 E, American Fork, UT 84003",
                "url": "https://afcity.org/library"
        }
]}
      businessDistricts={[
        {
                "name": "American Fork Downtown",
                "description": "Historic downtown area",
                "link": "/american-fork-dumpster-rental-guide-2025"
        },
        {
                "name": "American Fork Canyon",
                "description": "Outdoor recreation area",
                "link": "/park-renovation-projects"
        },
        {
                "name": "American Fork East",
                "description": "Residential neighborhoods",
                "link": "/home-renovation-dumpster-guide"
        },
        {
                "name": "American Fork West",
                "description": "Commercial and industrial",
                "link": "/commercial-dumpsters"
        },
        {
                "name": "American Fork Business District",
                "description": "Mixed commercial area",
                "link": "/american-fork-dumpster-rental-guide-2025"
        }
]}
      permitInfo={{
        cityName: "American Fork",
        phoneNumber: "801-763-3020",
        requirements: "Contact American Fork for permit requirements and applications. We can help guide you through the process."
      }}
      contentSections={{
        overview: "Icon Dumpsters provides reliable dumpster rental services throughout American Fork, Utah. Whether you're tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.",
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
        whyChooseUs: "Icon Dumpsters is your trusted partner for dumpster rental in American Fork. We understand the unique needs of this community and provide reliable, professional service for all your waste management needs.",
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
        localInfo: "American Fork is a vibrant community in Utah known for its beautiful surroundings and strong community spirit. From residential neighborhoods to commercial districts, American Fork offers a great place to live and work.",
        serviceAreas: "We provide dumpster rental services throughout American Fork and surrounding areas. Our service area covers residential neighborhoods, commercial districts, and industrial areas to meet all your waste management needs."
      }}
    />
  );
}