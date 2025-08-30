import CityPageTemplate from '../components/CityPageTemplate';

export default function LaytonPage() {
  return (
    <CityPageTemplate
      cityName="Layton"
      citySlug="layton"
      state="Utah"
      phoneNumber="801-918-6000"
      latitude="41.0602"
      longitude="-111.9711"
      landmarks={[
        {
                "name": "Layton City Park",
                "address": "437 N Wasatch Dr, Layton, UT 84041"
        },
        {
                "name": "Layton Library",
                "address": "155 N Wasatch Dr, Layton, UT 84041"
        },
        {
                "name": "Layton Historic District",
                "address": "Main St, Layton, UT 84041"
        },
        {
                "name": "Layton Cemetery",
                "address": "437 N Wasatch Dr, Layton, UT 84041"
        },
        {
                "name": "Layton Golf Course",
                "address": "437 N Wasatch Dr, Layton, UT 84041"
        }
]}
      businessDistricts={[
        {
                "name": "Layton Main Street",
                "description": "Historic downtown area",
                "link": "/"
        },
        {
                "name": "Layton Hills Mall",
                "description": "Major retail and commercial center",
                "link": "/"
        },
        {
                "name": "Layton East",
                "description": "Residential neighborhoods",
                "link": "/"
        },
        {
                "name": "Layton West",
                "description": "Industrial and commercial mix",
                "link": "/"
        },
        {
                "name": "Layton South",
                "description": "Growing residential area",
                "link": "/"
        },
        {
                "name": "Layton North",
                "description": "Established communities",
                "link": "/"
        }
]}
      permitInfo={{
        cityName: "Layton",
        phoneNumber: "801-336-3900",
        requirements: "Contact Layton for permit requirements and applications. We can help guide you through the process."
      }}
      contentSections={{
        overview: "Icon Dumpsters provides reliable dumpster rental services throughout Layton, Utah. Whether you're tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.",
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
        whyChooseUs: "Icon Dumpsters is your trusted partner for dumpster rental in Layton. We understand the unique needs of this community and provide reliable, professional service for all your waste management needs.",
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
        localInfo: "Layton is a vibrant community in Utah known for its beautiful surroundings and strong community spirit. From residential neighborhoods to commercial districts, Layton offers a great place to live and work.",
        serviceAreas: "We provide dumpster rental services throughout Layton and surrounding areas. Our service area covers residential neighborhoods, commercial districts, and industrial areas to meet all your waste management needs."
      }}
    />
  );
}