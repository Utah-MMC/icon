import CityPageTemplate from '../components/CityPageTemplate';

export default function ParkCityPage() {
  return (
    <CityPageTemplate
      cityName="Park City"
      citySlug="park-city"
      state="Utah"
      phoneNumber="801-918-6000"
      latitude="40.7608"
      longitude="-111.8910"
      landmarks={[
        {
          name: "Park City Mountain Resort",
          address: "1345 Lowell Ave, Park City, UT 84060",
          url: "https://www.parkcitymountain.com/",
          description: "World-class ski resort and summer activities"
        },
        {
          name: "Deer Valley Resort",
          address: "2250 Deer Valley Dr S, Park City, UT 84060",
          url: "https://www.deervalley.com/",
          description: "Luxury ski resort with fine dining"
        },
        {
          name: "Utah Olympic Park",
          address: "3419 Olympic Pkwy, Park City, UT 84098",
          url: "https://utaholympiclegacy.org/",
          description: "Olympic training facility and museum"
        },
        {
          name: "Main Street Historic District",
          address: "Main St, Park City, UT 84060",
          url: "https://www.visitparkcity.com/listing/main-street/",
          description: "Historic mining town with shops and restaurants"
        },
        {
          name: "Sundance Film Festival",
          address: "136 Heber Ave, Park City, UT 84060",
          url: "https://www.sundance.org/",
          description: "Annual international film festival"
        }
      ]}
      businessDistricts={[
        {
          name: "Park City Main Street",
          description: "Historic downtown with shops and restaurants",
          link: "/"
        },
        {
          name: "Kimball Junction",
          description: "Major retail and commercial center",
          link: "/"
        },
        {
          name: "Canyons Village",
          description: "Resort area with hotels and dining",
          link: "/"
        },
        {
          name: "Deer Valley",
          description: "Luxury resort and residential area",
          link: "/"
        },
        {
          name: "Old Town",
          description: "Historic residential and commercial mix",
          link: "/"
        },
        {
          name: "Prospector Square",
          description: "Business and office district",
          link: "/"
        }
      ]}
      permitInfo={{
        cityName: "Park City",
        phoneNumber: "435-615-5000",
        requirements: "Contact Park City for permit requirements and applications. We can help guide you through the process."
      }}
      contentSections={{
        overview: "Icon Dumpsters provides reliable dumpster rental services throughout Park City, Utah. Whether you're tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.",
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
        whyChooseUs: "Icon Dumpsters is your trusted partner for dumpster rental in Park City. We understand the unique needs of this mountain community and provide reliable, professional service for all your waste management needs.",
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
        localInfo: "Park City is a world-renowned mountain resort town known for its skiing, outdoor recreation, and cultural events. From the historic Main Street to the modern resort areas, Park City offers a unique blend of old-world charm and contemporary luxury.",
        serviceAreas: "We provide dumpster rental services throughout Park City and surrounding areas, including Kimball Junction, Canyons Village, Deer Valley, and the historic Old Town district. Our service area covers both the mountain resort areas and the valley below."
      }}
    />
  );
}




