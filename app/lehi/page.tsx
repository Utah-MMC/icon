import CityPageTemplate from '../components/CityPageTemplate';

export default function LehiPage() {
  return (
    <CityPageTemplate
      cityName="Lehi"
      citySlug="lehi"
      state="Utah"
      phoneNumber="801-918-6000"
      latitude="40.3916"
      longitude="-111.8507"
      landmarks={[
        {
                "name": "Thanksgiving Point",
                "address": "3003 N Thanksgiving Way, Lehi, UT 84043",
                "url": "https://thanksgivingpoint.org/"
        },
        {
                "name": "Lehi City Park",
                "address": "100 N Center St, Lehi, UT 84043"
        },
        {
                "name": "Lehi Library",
                "address": "120 N Center St, Lehi, UT 84043"
        },
        {
                "name": "Lehi Historic District",
                "address": "Main St, Lehi, UT 84043"
        },
        {
                "name": "Lehi Cemetery",
                "address": "100 N Center St, Lehi, UT 84043"
        }
]}
      businessDistricts={[
        {
                "name": "Lehi Main Street",
                "description": "Historic downtown area",
                "link": "/"
        },
        {
                "name": "Thanksgiving Point",
                "description": "Major retail and entertainment center",
                "link": "/"
        },
        {
                "name": "Lehi East",
                "description": "Residential neighborhoods",
                "link": "/"
        },
        {
                "name": "Lehi West",
                "description": "Industrial and commercial mix",
                "link": "/"
        },
        {
                "name": "Lehi South",
                "description": "Growing residential area",
                "link": "/"
        },
        {
                "name": "Lehi North",
                "description": "Established communities",
                "link": "/"
        }
]}
      permitInfo={{
        cityName: "Lehi",
        phoneNumber: "801-768-7100",
        requirements: "Contact Lehi for permit requirements and applications. We can help guide you through the process."
      }}
      contentSections={{
        overview: "Icon Dumpsters provides reliable dumpster rental services throughout Lehi, Utah. Whether you're tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.",
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
        whyChooseUs: "Icon Dumpsters is your trusted partner for dumpster rental in Lehi. We understand the unique needs of this community and provide reliable, professional service for all your waste management needs.",
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
        localInfo: "Lehi is a vibrant community in Utah known for its beautiful surroundings and strong community spirit. From residential neighborhoods to commercial districts, Lehi offers a great place to live and work.",
        serviceAreas: "We provide dumpster rental services throughout Lehi and surrounding areas. Our service area covers residential neighborhoods, commercial districts, and industrial areas to meet all your waste management needs."
      }}
    />
  );
}