import CityPageTemplate from '../components/CityPageTemplate';

export default function ClearfieldPage() {
  return (
    <CityPageTemplate
      cityName="Clearfield"
      citySlug="clearfield"
      state="Utah"
      phoneNumber="801-918-6000"
      latitude="41.1038"
      longitude="-112.0261"
      landmarks={[
        {
                "name": "Clearfield City Park",
                "address": "200 S State St, Clearfield, UT 84015"
        },
        {
                "name": "Clearfield Library",
                "address": "80 S Center St, Clearfield, UT 84015"
        },
        {
                "name": "Clearfield Aquatic Center",
                "address": "825 S State St, Clearfield, UT 84015"
        },
        {
                "name": "Clearfield Golf Course",
                "address": "825 S State St, Clearfield, UT 84015"
        },
        {
                "name": "Clearfield Cemetery",
                "address": "1050 S State St, Clearfield, UT 84015"
        }
]}
      businessDistricts={[
        {
                "name": "Clearfield Main Street",
                "description": "Historic downtown area",
                "link": "/"
        },
        {
                "name": "Clearfield State Street",
                "description": "Major retail and commercial",
                "link": "/"
        },
        {
                "name": "Clearfield East",
                "description": "Residential neighborhoods",
                "link": "/"
        },
        {
                "name": "Clearfield West",
                "description": "Industrial and commercial mix",
                "link": "/"
        },
        {
                "name": "Clearfield South",
                "description": "Growing residential area",
                "link": "/"
        },
        {
                "name": "Clearfield North",
                "description": "Established communities",
                "link": "/"
        }
]}
      permitInfo={{
        cityName: "Clearfield",
        phoneNumber: "801-525-2700",
        requirements: "Contact Clearfield for permit requirements and applications. We can help guide you through the process."
      }}
      contentSections={{
        overview: "Icon Dumpsters provides reliable dumpster rental services throughout Clearfield, Utah. Whether you're tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.",
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
        whyChooseUs: "Icon Dumpsters is your trusted partner for dumpster rental in Clearfield. We understand the unique needs of this community and provide reliable, professional service for all your waste management needs.",
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
        localInfo: "Clearfield is a vibrant community in Utah known for its beautiful surroundings and strong community spirit. From residential neighborhoods to commercial districts, Clearfield offers a great place to live and work.",
        serviceAreas: "We provide dumpster rental services throughout Clearfield and surrounding areas. Our service area covers residential neighborhoods, commercial districts, and industrial areas to meet all your waste management needs."
      }}
    />
  );
}