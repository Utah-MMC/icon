import CityPageTemplate from '../components/CityPageTemplate';

export default function BountifulPage() {
  return (
    <CityPageTemplate
      cityName="Bountiful"
      citySlug="bountiful"
      state="Utah"
      phoneNumber="801-918-6000"
      latitude="40.8894"
      longitude="-111.8808"
      landmarks={[
        {
                "name": "Bountiful Temple",
                "address": "640 S Bountiful Blvd, Bountiful, UT 84010",
                "url": "https://www.churchofjesuschrist.org/temples/details/bountiful-utah-temple"
        },
        {
                "name": "Bountiful City Park",
                "address": "400 N 200 W, Bountiful, UT 84010"
        },
        {
                "name": "Bountiful Ridge Golf Course",
                "address": "1350 N 400 E, Bountiful, UT 84010"
        },
        {
                "name": "Bountiful Library",
                "address": "725 S Main St, Bountiful, UT 84010"
        },
        {
                "name": "Bountiful Historic District",
                "address": "Main St, Bountiful, UT 84010"
        }
]}
      businessDistricts={[
        {
                "name": "Bountiful Main Street",
                "description": "Historic downtown area",
                "link": "/"
        },
        {
                "name": "Bountiful Boulevard",
                "description": "Major retail and commercial",
                "link": "/"
        },
        {
                "name": "Bountiful East",
                "description": "Residential neighborhoods",
                "link": "/"
        },
        {
                "name": "Bountiful West",
                "description": "Industrial and commercial mix",
                "link": "/"
        },
        {
                "name": "Bountiful South",
                "description": "Growing residential area",
                "link": "/"
        },
        {
                "name": "Bountiful North",
                "description": "Established communities",
                "link": "/"
        }
]}
      permitInfo={{
        cityName: "Bountiful",
        phoneNumber: "801-298-6000",
        requirements: "Contact Bountiful for permit requirements and applications. We can help guide you through the process."
      }}
      contentSections={{
        overview: "Icon Dumpsters provides reliable dumpster rental services throughout Bountiful, Utah. Whether you're tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.",
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
        whyChooseUs: "Icon Dumpsters is your trusted partner for dumpster rental in Bountiful. We understand the unique needs of this community and provide reliable, professional service for all your waste management needs.",
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
        localInfo: "Bountiful is a vibrant community in Utah known for its beautiful surroundings and strong community spirit. From residential neighborhoods to commercial districts, Bountiful offers a great place to live and work.",
        serviceAreas: "We provide dumpster rental services throughout Bountiful and surrounding areas. Our service area covers residential neighborhoods, commercial districts, and industrial areas to meet all your waste management needs."
      }}
    />
  );
}