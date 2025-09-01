import CityPageTemplate from '../components/CityPageTemplate';

export default function DraperPage() {
  return (
    <CityPageTemplate
      cityName="Draper"
      citySlug="draper"
      state="Utah"
      phoneNumber="801-918-6000"
      latitude="40.5247"
      longitude="-111.8638"
      landmarks={[
        {
                "name": "Draper Temple",
                "address": "14065 S Canyon Vista Ln, Draper, UT 84020",
                "url": "https://www.churchofjesuschrist.org/temples/details/draper-utah-temple"
        },
        {
                "name": "Loveland Living Planet Aquarium",
                "address": "12033 S Lone Peak Pkwy, Draper, UT 84020",
                "url": "https://thelivingplanet.com/"
        },
        {
                "name": "Draper City Park",
                "address": "12500 S 1300 E, Draper, UT 84020",
                "url": "https://www.draperutah.gov/parks-recreation/"
        },
        {
                "name": "Corner Canyon",
                "address": "Corner Canyon Rd, Draper, UT 84020",
                "url": "https://www.draperutah.gov/parks-recreation/trails/"
        },
        {
                "name": "Draper Library",
                "address": "1136 E Pioneer Rd, Draper, UT 84020",
                "url": "https://slcolibrary.org/location/draper/"
        }
]}
      businessDistricts={[
        {
                "name": "Draper Town Center",
                "description": "City government and services",
                "link": "/draper-dumpster-rental-guide-2025"
        },
        {
                "name": "Draper East",
                "description": "Residential neighborhoods",
                "link": "/home-renovation-dumpster-guide"
        },
        {
                "name": "Draper West",
                "description": "Commercial and industrial",
                "link": "/commercial-dumpsters"
        },
        {
                "name": "Draper Business District",
                "description": "Mixed commercial area",
                "link": "/draper-dumpster-rental-guide-2025"
        },
        {
                "name": "Corner Canyon",
                "description": "Outdoor recreation area",
                "link": "/park-renovation-projects"
        }
]}
      permitInfo={{
        cityName: "Draper",
        phoneNumber: "801-576-6500",
        requirements: "Contact Draper for permit requirements and applications. We can help guide you through the process."
      }}
      contentSections={{
        overview: "Icon Dumpsters provides reliable dumpster rental services throughout Draper, Utah. Whether you're tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.",
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
        whyChooseUs: "Icon Dumpsters is your trusted partner for dumpster rental in Draper. We understand the unique needs of this community and provide reliable, professional service for all your waste management needs.",
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
        localInfo: "Draper is a vibrant community in Utah known for its beautiful surroundings and strong community spirit. From residential neighborhoods to commercial districts, Draper offers a great place to live and work.",
        serviceAreas: "We provide dumpster rental services throughout Draper and surrounding areas. Our service area covers residential neighborhoods, commercial districts, and industrial areas to meet all your waste management needs."
      }}
    />
  );
}