import CityPageTemplate from '../components/CityPageTemplate';

export default function OgdenPage() {
  return (
    <CityPageTemplate
      cityName="Ogden"
      citySlug="ogden"
      state="Utah"
      phoneNumber="801-918-6000"
      latitude="41.2230"
      longitude="-111.9738"
      landmarks={[
        {
                "name": "Ogden Union Station",
                "address": "2501 Wall Ave, Ogden, UT 84401",
                "url": "https://www.theunionstation.org/"
        },
        {
                "name": "Ogden City Park",
                "address": "343 E 25th St, Ogden, UT 84401"
        },
        {
                "name": "Ogden Library",
                "address": "2464 Jefferson Ave, Ogden, UT 84401"
        },
        {
                "name": "Ogden Historic District",
                "address": "Main St, Ogden, UT 84401"
        },
        {
                "name": "Ogden Cemetery",
                "address": "343 E 25th St, Ogden, UT 84401"
        }
]}
      businessDistricts={[
        {
                "name": "Ogden Main Street",
                "description": "Historic downtown area",
                "link": "/"
        },
        {
                "name": "Ogden State Street",
                "description": "Major retail and commercial",
                "link": "/"
        },
        {
                "name": "Ogden East",
                "description": "Residential neighborhoods",
                "link": "/"
        },
        {
                "name": "Ogden West",
                "description": "Industrial and commercial mix",
                "link": "/"
        },
        {
                "name": "Ogden South",
                "description": "Growing residential area",
                "link": "/"
        },
        {
                "name": "Ogden North",
                "description": "Established communities",
                "link": "/"
        }
]}
      permitInfo={{
        cityName: "Ogden",
        phoneNumber: "801-629-8000",
        requirements: "Contact Ogden for permit requirements and applications. We can help guide you through the process."
      }}
      contentSections={{
        overview: "Icon Dumpsters provides reliable dumpster rental services throughout Ogden, Utah. Whether you're tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.",
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
        whyChooseUs: "Icon Dumpsters is your trusted partner for dumpster rental in Ogden. We understand the unique needs of this community and provide reliable, professional service for all your waste management needs.",
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
        localInfo: "Ogden is a vibrant community in Utah known for its beautiful surroundings and strong community spirit. From residential neighborhoods to commercial districts, Ogden offers a great place to live and work.",
        serviceAreas: "We provide dumpster rental services throughout Ogden and surrounding areas. Our service area covers residential neighborhoods, commercial districts, and industrial areas to meet all your waste management needs."
      }}
    />
  );
}