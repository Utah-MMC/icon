export interface CityData {
  cityName: string;
  citySlug: string;
  state: string;
  phoneNumber: string;
  latitude: string;
  longitude: string;
  landmarks: Array<{
    name: string;
    address: string;
    url?: string;
    description?: string;
  }>;
  businessDistricts: Array<{
    name: string;
    description: string;
    link: string;
  }>;
  permitInfo: {
    cityName: string;
    phoneNumber: string;
    requirements: string;
  };
  contentSections: {
    overview: string;
    residentialServices: string[];
    commercialServices: string[];
    whyChooseUs: string;
    dumpsterSizes: Array<{
      size: string;
      description: string;
      useCases: string[];
    }>;
    localInfo: string;
    serviceAreas: string;
  };
}

export const cityData: Record<string, CityData> = {
  'draper': {
    cityName: 'Draper',
    citySlug: 'draper',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.5247',
    longitude: '-111.8638',
    landmarks: [
      {
        name: 'Draper City Hall',
        address: '1020 E Pioneer Rd',
        url: 'https://www.draper.utah.gov/',
      },
      {
        name: 'Corner Canyon',
        address: '1300 E Corner Canyon Dr',
        url: 'https://www.google.com/maps/place/Corner+Canyon/@40.6669,-111.8878,15z',
      },
      {
        name: 'Draper Park',
        address: '12500 S 1300 E',
        url: 'https://www.draper.utah.gov/parks/draper-park/',
      },
      {
        name: 'Loveland Living Planet Aquarium',
        address: '12033 S Lone Peak Pkwy',
        url: 'https://thelivingplanet.com/',
      },
      {
        name: 'Draper Library',
        address: '1136 E Pioneer Rd',
        url: 'https://www.draper.utah.gov/library/',
      },
      {
        name: 'Porter Rockwell Trail',
        address: 'Along Jordan River',
        url: 'https://www.google.com/maps/place/Porter+Rockwell+Trail/@40.6669,-111.8878,15z',
      },
    ],
    businessDistricts: [
      {
        name: 'Draper Central',
        description: 'Major retail and dining',
        link: '/draper',
      },
      {
        name: 'Draper East',
        description: 'Government and civic center',
        link: '/draper',
      },
      {
        name: 'Draper West',
        description: 'Residential and commercial mix',
        link: '/draper',
      },
      {
        name: 'Draper South',
        description: 'Industrial and commercial',
        link: '/draper',
      },
      {
        name: 'Draper North',
        description: 'Growing residential area',
        link: '/draper',
      },
      {
        name: 'Downtown Draper',
        description: 'Established neighborhoods',
        link: '/draper',
      },
    ],
    permitInfo: {
      cityName: 'Draper',
      phoneNumber: '801-576-6500',
      requirements: 'Contact Draper for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Draper, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Draper, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Draper\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Draper is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Draper, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'salt-lake-city': {
    cityName: 'Salt Lake City',
    citySlug: 'salt-lake-city',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.7608',
    longitude: '-111.8910',
    landmarks: [
      {
        name: 'Temple Square',
        address: '50 N Temple',
        url: 'https://www.templesquare.com/',
      },
      {
        name: 'Utah State Capitol',
        address: '350 N State St',
        url: 'https://utahstatecapitol.utah.gov/',
      },
      {
        name: 'Liberty Park',
        address: '600 E 900 S',
        url: 'https://www.slc.gov/parks/parks-division/liberty-park/',
      },
      {
        name: 'Red Butte Garden',
        address: '300 Wakara Way',
        url: 'https://redbuttegarden.org/',
      },
      {
        name: 'Natural History Museum of Utah',
        address: '301 Wakara Way',
        url: 'https://nhmu.utah.edu/',
      },
      {
        name: 'Hogle Zoo',
        address: '2600 E Sunnyside Ave',
        url: 'https://www.hoglezoo.org/',
      },
    ],
    businessDistricts: [
      {
        name: 'Downtown Salt Lake',
        description: 'Business and government center',
        link: '/salt-lake-city',
      },
      {
        name: 'Sugar House',
        description: 'Shopping and entertainment district',
        link: '/salt-lake-city',
      },
      {
        name: 'The Avenues',
        description: 'Historic residential area',
        link: '/salt-lake-city',
      },
      {
        name: 'University District',
        description: 'University of Utah area',
        link: '/salt-lake-city',
      },
      {
        name: 'Central City',
        description: 'Mixed residential and commercial',
        link: '/salt-lake-city',
      },
      {
        name: 'East Bench',
        description: 'Upscale residential neighborhoods',
        link: '/salt-lake-city',
      },
    ],
    permitInfo: {
      cityName: 'Salt Lake City',
      phoneNumber: '801-535-6000',
      requirements: 'Contact Salt Lake City for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Salt Lake City, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Salt Lake City, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Salt Lake City\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Salt Lake City is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Salt Lake City, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  // Add more cities here following the same pattern
  'murray': {
    cityName: 'Murray',
    citySlug: 'murray',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.6669',
    longitude: '-111.8878',
    landmarks: [
      {
        name: 'Murray City Hall',
        address: '5025 S State St',
        url: 'https://www.murray.utah.gov/',
      },
      {
        name: 'Murray Park',
        address: '296 E Murray Park Ave',
        url: 'https://www.murray.utah.gov/parks-recreation/parks/murray-park/',
      },
      {
        name: 'Murray Library',
        address: '166 E 5300 S',
        url: 'https://www.murray.utah.gov/parks-recreation/library/',
      },
      {
        name: 'Murray Theater',
        address: '4959 S State St',
        url: 'https://www.murraytheater.com/',
      },
      {
        name: 'Murray Golf Course',
        address: '5600 S 900 E',
        url: 'https://www.murray.utah.gov/parks-recreation/golf/',
      },
    ],
    businessDistricts: [
      {
        name: 'Murray Central',
        description: 'Major retail and dining district',
        link: '/murray',
      },
      {
        name: 'Murray East',
        description: 'Residential and commercial mix',
        link: '/murray',
      },
      {
        name: 'Murray West',
        description: 'Industrial and commercial area',
        link: '/murray',
      },
      {
        name: 'Murray South',
        description: 'Growing residential area',
        link: '/murray',
      },
    ],
    permitInfo: {
      cityName: 'Murray',
      phoneNumber: '801-264-2660',
      requirements: 'Contact Murray for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Murray, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Murray, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Murray\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Murray is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Murray, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'sandy': {
    cityName: 'Sandy',
    citySlug: 'sandy',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.5649',
    longitude: '-111.8389',
    landmarks: [
      {
        name: 'Sandy City Hall',
        address: '10000 Centennial Pkwy',
        url: 'https://www.sandy.utah.gov/',
      },
      {
        name: 'South Towne Expo Center',
        address: '9575 S State St',
        url: 'https://www.southtowneexpo.com/',
      },
      {
        name: 'Sandy Amphitheater',
        address: '1245 E 9400 S',
        url: 'https://www.sandy.utah.gov/amphitheater/',
      },
      {
        name: 'Dimple Dell Regional Park',
        address: '10600 S 1000 E',
        url: 'https://www.sandy.utah.gov/parks/dimple-dell-regional-park/',
      },
    ],
    businessDistricts: [
      {
        name: 'Sandy Central',
        description: 'Major retail and dining district',
        link: '/sandy',
      },
      {
        name: 'Sandy East',
        description: 'Residential and commercial mix',
        link: '/sandy',
      },
      {
        name: 'Sandy West',
        description: 'Industrial and commercial area',
        link: '/sandy',
      },
    ],
    permitInfo: {
      cityName: 'Sandy',
      phoneNumber: '801-568-7100',
      requirements: 'Contact Sandy for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Sandy, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Sandy, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Sandy\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Sandy is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Sandy, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'west-jordan': {
    cityName: 'West Jordan',
    citySlug: 'west-jordan',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.6097',
    longitude: '-112.0007',
    landmarks: [
      {
        name: 'West Jordan City Hall',
        address: '8000 S Redwood Rd',
        url: 'https://www.westjordan.utah.gov/',
      },
      {
        name: 'Jordan Landing',
        address: '7200 S Jordan Landing Blvd',
        url: 'https://www.jordanlanding.com/',
      },
      {
        name: 'West Jordan Library',
        address: '8030 S 1825 W',
        url: 'https://www.westjordan.utah.gov/library/',
      },
    ],
    businessDistricts: [
      {
        name: 'West Jordan Central',
        description: 'Major retail and dining district',
        link: '/west-jordan',
      },
      {
        name: 'West Jordan East',
        description: 'Residential and commercial mix',
        link: '/west-jordan',
      },
      {
        name: 'West Jordan West',
        description: 'Industrial and commercial area',
        link: '/west-jordan',
      },
    ],
    permitInfo: {
      cityName: 'West Jordan',
      phoneNumber: '801-569-5100',
      requirements: 'Contact West Jordan for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout West Jordan, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in West Jordan, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of West Jordan\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'West Jordan is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout West Jordan, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'american-fork': {
    cityName: 'American Fork',
    citySlug: 'american-fork',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.3769',
    longitude: '-111.7958',
    landmarks: [
      {
        name: 'American Fork City Hall',
        address: 'City Hall Address',
        url: 'https://www.americanfork.utah.gov/',
      },
      {
        name: 'American Fork Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/American%20Fork%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'American Fork Central',
        description: 'Major retail and dining district',
        link: '/american-fork',
      },
      {
        name: 'American Fork East',
        description: 'Residential and commercial mix',
        link: '/american-fork',
      },
      {
        name: 'American Fork West',
        description: 'Industrial and commercial area',
        link: '/american-fork',
      },
    ],
    permitInfo: {
      cityName: 'American Fork',
      phoneNumber: '801-918-6000',
      requirements: 'Contact American Fork for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout American Fork, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in American Fork, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of American Fork\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'American Fork is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout American Fork, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'bountiful': {
    cityName: 'Bountiful',
    citySlug: 'bountiful',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.8894',
    longitude: '-111.8808',
    landmarks: [
      {
        name: 'Bountiful City Hall',
        address: 'City Hall Address',
        url: 'https://www.bountiful.utah.gov/',
      },
      {
        name: 'Bountiful Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Bountiful%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Bountiful Central',
        description: 'Major retail and dining district',
        link: '/bountiful',
      },
      {
        name: 'Bountiful East',
        description: 'Residential and commercial mix',
        link: '/bountiful',
      },
      {
        name: 'Bountiful West',
        description: 'Industrial and commercial area',
        link: '/bountiful',
      },
    ],
    permitInfo: {
      cityName: 'Bountiful',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Bountiful for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Bountiful, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Bountiful, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Bountiful\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Bountiful is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Bountiful, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'centerville': {
    cityName: 'Centerville',
    citySlug: 'centerville',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.9180',
    longitude: '-111.8722',
    landmarks: [
      {
        name: 'Centerville City Hall',
        address: 'City Hall Address',
        url: 'https://www.centerville.utah.gov/',
      },
      {
        name: 'Centerville Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Centerville%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Centerville Central',
        description: 'Major retail and dining district',
        link: '/centerville',
      },
      {
        name: 'Centerville East',
        description: 'Residential and commercial mix',
        link: '/centerville',
      },
      {
        name: 'Centerville West',
        description: 'Industrial and commercial area',
        link: '/centerville',
      },
    ],
    permitInfo: {
      cityName: 'Centerville',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Centerville for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Centerville, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Centerville, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Centerville\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Centerville is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Centerville, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'clearfield': {
    cityName: 'Clearfield',
    citySlug: 'clearfield',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '41.1108',
    longitude: '-112.0261',
    landmarks: [
      {
        name: 'Clearfield City Hall',
        address: 'City Hall Address',
        url: 'https://www.clearfield.utah.gov/',
      },
      {
        name: 'Clearfield Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Clearfield%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Clearfield Central',
        description: 'Major retail and dining district',
        link: '/clearfield',
      },
      {
        name: 'Clearfield East',
        description: 'Residential and commercial mix',
        link: '/clearfield',
      },
      {
        name: 'Clearfield West',
        description: 'Industrial and commercial area',
        link: '/clearfield',
      },
    ],
    permitInfo: {
      cityName: 'Clearfield',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Clearfield for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Clearfield, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Clearfield, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Clearfield\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Clearfield is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Clearfield, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'cottonwood-heights': {
    cityName: 'Cottonwood Heights',
    citySlug: 'cottonwood-heights',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.6197',
    longitude: '-111.8102',
    landmarks: [
      {
        name: 'Cottonwood Heights City Hall',
        address: 'City Hall Address',
        url: 'https://www.cottonwoodheights.utah.gov/',
      },
      {
        name: 'Cottonwood Heights Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Cottonwood%20Heights%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Cottonwood Heights Central',
        description: 'Major retail and dining district',
        link: '/cottonwood-heights',
      },
      {
        name: 'Cottonwood Heights East',
        description: 'Residential and commercial mix',
        link: '/cottonwood-heights',
      },
      {
        name: 'Cottonwood Heights West',
        description: 'Industrial and commercial area',
        link: '/cottonwood-heights',
      },
    ],
    permitInfo: {
      cityName: 'Cottonwood Heights',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Cottonwood Heights for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Cottonwood Heights, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Cottonwood Heights, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Cottonwood Heights\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Cottonwood Heights is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Cottonwood Heights, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'downtown-salt-lake': {
    cityName: 'Downtown Salt Lake',
    citySlug: 'downtown-salt-lake',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.7608',
    longitude: '-111.8910',
    landmarks: [
      {
        name: 'Downtown Salt Lake City Hall',
        address: 'City Hall Address',
        url: 'https://www.downtownsalt-lake.utah.gov/',
      },
      {
        name: 'Downtown Salt Lake Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Downtown%20Salt%20Lake%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Downtown Salt Lake Central',
        description: 'Major retail and dining district',
        link: '/downtown-salt-lake',
      },
      {
        name: 'Downtown Salt Lake East',
        description: 'Residential and commercial mix',
        link: '/downtown-salt-lake',
      },
      {
        name: 'Downtown Salt Lake West',
        description: 'Industrial and commercial area',
        link: '/downtown-salt-lake',
      },
    ],
    permitInfo: {
      cityName: 'Downtown Salt Lake',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Downtown Salt Lake for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Downtown Salt Lake, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Downtown Salt Lake, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Downtown Salt Lake\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Downtown Salt Lake is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Downtown Salt Lake, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'eagle-mountain': {
    cityName: 'Eagle Mountain',
    citySlug: 'eagle-mountain',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.3141',
    longitude: '-112.0069',
    landmarks: [
      {
        name: 'Eagle Mountain City Hall',
        address: 'City Hall Address',
        url: 'https://www.eaglemountain.utah.gov/',
      },
      {
        name: 'Eagle Mountain Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Eagle%20Mountain%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Eagle Mountain Central',
        description: 'Major retail and dining district',
        link: '/eagle-mountain',
      },
      {
        name: 'Eagle Mountain East',
        description: 'Residential and commercial mix',
        link: '/eagle-mountain',
      },
      {
        name: 'Eagle Mountain West',
        description: 'Industrial and commercial area',
        link: '/eagle-mountain',
      },
    ],
    permitInfo: {
      cityName: 'Eagle Mountain',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Eagle Mountain for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Eagle Mountain, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Eagle Mountain, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Eagle Mountain\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Eagle Mountain is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Eagle Mountain, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'fairpark': {
    cityName: 'Fairpark',
    citySlug: 'fairpark',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.7608',
    longitude: '-111.8910',
    landmarks: [
      {
        name: 'Fairpark City Hall',
        address: 'City Hall Address',
        url: 'https://www.fairpark.utah.gov/',
      },
      {
        name: 'Fairpark Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Fairpark%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Fairpark Central',
        description: 'Major retail and dining district',
        link: '/fairpark',
      },
      {
        name: 'Fairpark East',
        description: 'Residential and commercial mix',
        link: '/fairpark',
      },
      {
        name: 'Fairpark West',
        description: 'Industrial and commercial area',
        link: '/fairpark',
      },
    ],
    permitInfo: {
      cityName: 'Fairpark',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Fairpark for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Fairpark, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Fairpark, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Fairpark\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Fairpark is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Fairpark, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'farmington': {
    cityName: 'Farmington',
    citySlug: 'farmington',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.9805',
    longitude: '-111.8874',
    landmarks: [
      {
        name: 'Farmington City Hall',
        address: 'City Hall Address',
        url: 'https://www.farmington.utah.gov/',
      },
      {
        name: 'Farmington Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Farmington%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Farmington Central',
        description: 'Major retail and dining district',
        link: '/farmington',
      },
      {
        name: 'Farmington East',
        description: 'Residential and commercial mix',
        link: '/farmington',
      },
      {
        name: 'Farmington West',
        description: 'Industrial and commercial area',
        link: '/farmington',
      },
    ],
    permitInfo: {
      cityName: 'Farmington',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Farmington for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Farmington, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Farmington, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Farmington\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Farmington is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Farmington, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'glendale': {
    cityName: 'Glendale',
    citySlug: 'glendale',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.7608',
    longitude: '-111.8910',
    landmarks: [
      {
        name: 'Glendale City Hall',
        address: 'City Hall Address',
        url: 'https://www.glendale.utah.gov/',
      },
      {
        name: 'Glendale Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Glendale%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Glendale Central',
        description: 'Major retail and dining district',
        link: '/glendale',
      },
      {
        name: 'Glendale East',
        description: 'Residential and commercial mix',
        link: '/glendale',
      },
      {
        name: 'Glendale West',
        description: 'Industrial and commercial area',
        link: '/glendale',
      },
    ],
    permitInfo: {
      cityName: 'Glendale',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Glendale for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Glendale, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Glendale, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Glendale\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Glendale is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Glendale, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'herriman': {
    cityName: 'Herriman',
    citySlug: 'herriman',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.5141',
    longitude: '-112.0329',
    landmarks: [
      {
        name: 'Herriman City Hall',
        address: 'City Hall Address',
        url: 'https://www.herriman.utah.gov/',
      },
      {
        name: 'Herriman Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Herriman%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Herriman Central',
        description: 'Major retail and dining district',
        link: '/herriman',
      },
      {
        name: 'Herriman East',
        description: 'Residential and commercial mix',
        link: '/herriman',
      },
      {
        name: 'Herriman West',
        description: 'Industrial and commercial area',
        link: '/herriman',
      },
    ],
    permitInfo: {
      cityName: 'Herriman',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Herriman for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Herriman, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Herriman, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Herriman\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Herriman is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Herriman, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'holladay': {
    cityName: 'Holladay',
    citySlug: 'holladay',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.6688',
    longitude: '-111.8247',
    landmarks: [
      {
        name: 'Holladay City Hall',
        address: 'City Hall Address',
        url: 'https://www.holladay.utah.gov/',
      },
      {
        name: 'Holladay Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Holladay%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Holladay Central',
        description: 'Major retail and dining district',
        link: '/holladay',
      },
      {
        name: 'Holladay East',
        description: 'Residential and commercial mix',
        link: '/holladay',
      },
      {
        name: 'Holladay West',
        description: 'Industrial and commercial area',
        link: '/holladay',
      },
    ],
    permitInfo: {
      cityName: 'Holladay',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Holladay for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Holladay, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Holladay, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Holladay\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Holladay is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Holladay, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'kaysville': {
    cityName: 'Kaysville',
    citySlug: 'kaysville',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '41.0352',
    longitude: '-111.9386',
    landmarks: [
      {
        name: 'Kaysville City Hall',
        address: 'City Hall Address',
        url: 'https://www.kaysville.utah.gov/',
      },
      {
        name: 'Kaysville Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Kaysville%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Kaysville Central',
        description: 'Major retail and dining district',
        link: '/kaysville',
      },
      {
        name: 'Kaysville East',
        description: 'Residential and commercial mix',
        link: '/kaysville',
      },
      {
        name: 'Kaysville West',
        description: 'Industrial and commercial area',
        link: '/kaysville',
      },
    ],
    permitInfo: {
      cityName: 'Kaysville',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Kaysville for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Kaysville, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Kaysville, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Kaysville\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Kaysville is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Kaysville, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'kearns': {
    cityName: 'Kearns',
    citySlug: 'kearns',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.6599',
    longitude: '-112.0093',
    landmarks: [
      {
        name: 'Kearns City Hall',
        address: 'City Hall Address',
        url: 'https://www.kearns.utah.gov/',
      },
      {
        name: 'Kearns Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Kearns%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Kearns Central',
        description: 'Major retail and dining district',
        link: '/kearns',
      },
      {
        name: 'Kearns East',
        description: 'Residential and commercial mix',
        link: '/kearns',
      },
      {
        name: 'Kearns West',
        description: 'Industrial and commercial area',
        link: '/kearns',
      },
    ],
    permitInfo: {
      cityName: 'Kearns',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Kearns for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Kearns, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Kearns, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Kearns\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Kearns is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Kearns, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'layton': {
    cityName: 'Layton',
    citySlug: 'layton',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '41.0602',
    longitude: '-111.9711',
    landmarks: [
      {
        name: 'Layton City Hall',
        address: 'City Hall Address',
        url: 'https://www.layton.utah.gov/',
      },
      {
        name: 'Layton Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Layton%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Layton Central',
        description: 'Major retail and dining district',
        link: '/layton',
      },
      {
        name: 'Layton East',
        description: 'Residential and commercial mix',
        link: '/layton',
      },
      {
        name: 'Layton West',
        description: 'Industrial and commercial area',
        link: '/layton',
      },
    ],
    permitInfo: {
      cityName: 'Layton',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Layton for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Layton, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Layton, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Layton\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Layton is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Layton, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'lehi': {
    cityName: 'Lehi',
    citySlug: 'lehi',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.3916',
    longitude: '-111.8508',
    landmarks: [
      {
        name: 'Lehi City Hall',
        address: 'City Hall Address',
        url: 'https://www.lehi.utah.gov/',
      },
      {
        name: 'Lehi Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Lehi%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Lehi Central',
        description: 'Major retail and dining district',
        link: '/lehi',
      },
      {
        name: 'Lehi East',
        description: 'Residential and commercial mix',
        link: '/lehi',
      },
      {
        name: 'Lehi West',
        description: 'Industrial and commercial area',
        link: '/lehi',
      },
    ],
    permitInfo: {
      cityName: 'Lehi',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Lehi for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Lehi, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Lehi, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Lehi\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Lehi is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Lehi, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'magna': {
    cityName: 'Magna',
    citySlug: 'magna',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.7091',
    longitude: '-112.1016',
    landmarks: [
      {
        name: 'Magna City Hall',
        address: 'City Hall Address',
        url: 'https://www.magna.utah.gov/',
      },
      {
        name: 'Magna Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Magna%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Magna Central',
        description: 'Major retail and dining district',
        link: '/magna',
      },
      {
        name: 'Magna East',
        description: 'Residential and commercial mix',
        link: '/magna',
      },
      {
        name: 'Magna West',
        description: 'Industrial and commercial area',
        link: '/magna',
      },
    ],
    permitInfo: {
      cityName: 'Magna',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Magna for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Magna, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Magna, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Magna\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Magna is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Magna, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'midvale': {
    cityName: 'Midvale',
    citySlug: 'midvale',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.6110',
    longitude: '-111.8995',
    landmarks: [
      {
        name: 'Midvale City Hall',
        address: 'City Hall Address',
        url: 'https://www.midvale.utah.gov/',
      },
      {
        name: 'Midvale Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Midvale%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Midvale Central',
        description: 'Major retail and dining district',
        link: '/midvale',
      },
      {
        name: 'Midvale East',
        description: 'Residential and commercial mix',
        link: '/midvale',
      },
      {
        name: 'Midvale West',
        description: 'Industrial and commercial area',
        link: '/midvale',
      },
    ],
    permitInfo: {
      cityName: 'Midvale',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Midvale for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Midvale, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Midvale, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Midvale\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Midvale is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Midvale, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'millcreek': {
    cityName: 'Millcreek',
    citySlug: 'millcreek',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.6895',
    longitude: '-111.8291',
    landmarks: [
      {
        name: 'Millcreek City Hall',
        address: 'City Hall Address',
        url: 'https://www.millcreek.utah.gov/',
      },
      {
        name: 'Millcreek Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Millcreek%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Millcreek Central',
        description: 'Major retail and dining district',
        link: '/millcreek',
      },
      {
        name: 'Millcreek East',
        description: 'Residential and commercial mix',
        link: '/millcreek',
      },
      {
        name: 'Millcreek West',
        description: 'Industrial and commercial area',
        link: '/millcreek',
      },
    ],
    permitInfo: {
      cityName: 'Millcreek',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Millcreek for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Millcreek, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Millcreek, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Millcreek\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Millcreek is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Millcreek, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'north-salt-lake': {
    cityName: 'North Salt Lake',
    citySlug: 'north-salt-lake',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.8486',
    longitude: '-111.9069',
    landmarks: [
      {
        name: 'North Salt Lake City Hall',
        address: 'City Hall Address',
        url: 'https://www.northsalt-lake.utah.gov/',
      },
      {
        name: 'North Salt Lake Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/North%20Salt%20Lake%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'North Salt Lake Central',
        description: 'Major retail and dining district',
        link: '/north-salt-lake',
      },
      {
        name: 'North Salt Lake East',
        description: 'Residential and commercial mix',
        link: '/north-salt-lake',
      },
      {
        name: 'North Salt Lake West',
        description: 'Industrial and commercial area',
        link: '/north-salt-lake',
      },
    ],
    permitInfo: {
      cityName: 'North Salt Lake',
      phoneNumber: '801-918-6000',
      requirements: 'Contact North Salt Lake for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout North Salt Lake, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in North Salt Lake, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of North Salt Lake\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'North Salt Lake is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout North Salt Lake, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'ogden': {
    cityName: 'Ogden',
    citySlug: 'ogden',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '41.2230',
    longitude: '-111.9738',
    landmarks: [
      {
        name: 'Ogden City Hall',
        address: 'City Hall Address',
        url: 'https://www.ogden.utah.gov/',
      },
      {
        name: 'Ogden Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Ogden%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Ogden Central',
        description: 'Major retail and dining district',
        link: '/ogden',
      },
      {
        name: 'Ogden East',
        description: 'Residential and commercial mix',
        link: '/ogden',
      },
      {
        name: 'Ogden West',
        description: 'Industrial and commercial area',
        link: '/ogden',
      },
    ],
    permitInfo: {
      cityName: 'Ogden',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Ogden for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Ogden, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Ogden, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Ogden\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Ogden is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Ogden, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'orem': {
    cityName: 'Orem',
    citySlug: 'orem',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.2969',
    longitude: '-111.6946',
    landmarks: [
      {
        name: 'Orem City Hall',
        address: 'City Hall Address',
        url: 'https://www.orem.utah.gov/',
      },
      {
        name: 'Orem Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Orem%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Orem Central',
        description: 'Major retail and dining district',
        link: '/orem',
      },
      {
        name: 'Orem East',
        description: 'Residential and commercial mix',
        link: '/orem',
      },
      {
        name: 'Orem West',
        description: 'Industrial and commercial area',
        link: '/orem',
      },
    ],
    permitInfo: {
      cityName: 'Orem',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Orem for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Orem, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Orem, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Orem\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Orem is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Orem, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'park-city': {
    cityName: 'Park City',
    citySlug: 'park-city',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.6461',
    longitude: '-111.4980',
    landmarks: [
      {
        name: 'Park City City Hall',
        address: 'City Hall Address',
        url: 'https://www.parkcity.utah.gov/',
      },
      {
        name: 'Park City Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Park%20City%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Park City Central',
        description: 'Major retail and dining district',
        link: '/park-city',
      },
      {
        name: 'Park City East',
        description: 'Residential and commercial mix',
        link: '/park-city',
      },
      {
        name: 'Park City West',
        description: 'Industrial and commercial area',
        link: '/park-city',
      },
    ],
    permitInfo: {
      cityName: 'Park City',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Park City for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Park City, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Park City, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Park City\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Park City is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Park City, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'pleasant-grove': {
    cityName: 'Pleasant Grove',
    citySlug: 'pleasant-grove',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.3641',
    longitude: '-111.7385',
    landmarks: [
      {
        name: 'Pleasant Grove City Hall',
        address: 'City Hall Address',
        url: 'https://www.pleasantgrove.utah.gov/',
      },
      {
        name: 'Pleasant Grove Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Pleasant%20Grove%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Pleasant Grove Central',
        description: 'Major retail and dining district',
        link: '/pleasant-grove',
      },
      {
        name: 'Pleasant Grove East',
        description: 'Residential and commercial mix',
        link: '/pleasant-grove',
      },
      {
        name: 'Pleasant Grove West',
        description: 'Industrial and commercial area',
        link: '/pleasant-grove',
      },
    ],
    permitInfo: {
      cityName: 'Pleasant Grove',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Pleasant Grove for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Pleasant Grove, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Pleasant Grove, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Pleasant Grove\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Pleasant Grove is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Pleasant Grove, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'poplar-grove': {
    cityName: 'Poplar Grove',
    citySlug: 'poplar-grove',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.7608',
    longitude: '-111.8910',
    landmarks: [
      {
        name: 'Poplar Grove City Hall',
        address: 'City Hall Address',
        url: 'https://www.poplargrove.utah.gov/',
      },
      {
        name: 'Poplar Grove Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Poplar%20Grove%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Poplar Grove Central',
        description: 'Major retail and dining district',
        link: '/poplar-grove',
      },
      {
        name: 'Poplar Grove East',
        description: 'Residential and commercial mix',
        link: '/poplar-grove',
      },
      {
        name: 'Poplar Grove West',
        description: 'Industrial and commercial area',
        link: '/poplar-grove',
      },
    ],
    permitInfo: {
      cityName: 'Poplar Grove',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Poplar Grove for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Poplar Grove, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Poplar Grove, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Poplar Grove\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Poplar Grove is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Poplar Grove, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'provo': {
    cityName: 'Provo',
    citySlug: 'provo',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.2338',
    longitude: '-111.6585',
    landmarks: [
      {
        name: 'Provo City Hall',
        address: 'City Hall Address',
        url: 'https://www.provo.utah.gov/',
      },
      {
        name: 'Provo Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Provo%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Provo Central',
        description: 'Major retail and dining district',
        link: '/provo',
      },
      {
        name: 'Provo East',
        description: 'Residential and commercial mix',
        link: '/provo',
      },
      {
        name: 'Provo West',
        description: 'Industrial and commercial area',
        link: '/provo',
      },
    ],
    permitInfo: {
      cityName: 'Provo',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Provo for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Provo, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Provo, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Provo\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Provo is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Provo, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'riverton': {
    cityName: 'Riverton',
    citySlug: 'riverton',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.5219',
    longitude: '-111.9391',
    landmarks: [
      {
        name: 'Riverton City Hall',
        address: 'City Hall Address',
        url: 'https://www.riverton.utah.gov/',
      },
      {
        name: 'Riverton Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Riverton%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Riverton Central',
        description: 'Major retail and dining district',
        link: '/riverton',
      },
      {
        name: 'Riverton East',
        description: 'Residential and commercial mix',
        link: '/riverton',
      },
      {
        name: 'Riverton West',
        description: 'Industrial and commercial area',
        link: '/riverton',
      },
    ],
    permitInfo: {
      cityName: 'Riverton',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Riverton for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Riverton, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Riverton, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Riverton\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Riverton is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Riverton, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'roy': {
    cityName: 'Roy',
    citySlug: 'roy',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '41.1616',
    longitude: '-112.0263',
    landmarks: [
      {
        name: 'Roy City Hall',
        address: 'City Hall Address',
        url: 'https://www.roy.utah.gov/',
      },
      {
        name: 'Roy Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Roy%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Roy Central',
        description: 'Major retail and dining district',
        link: '/roy',
      },
      {
        name: 'Roy East',
        description: 'Residential and commercial mix',
        link: '/roy',
      },
      {
        name: 'Roy West',
        description: 'Industrial and commercial area',
        link: '/roy',
      },
    ],
    permitInfo: {
      cityName: 'Roy',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Roy for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Roy, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Roy, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Roy\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Roy is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Roy, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'saratoga-springs': {
    cityName: 'Saratoga Springs',
    citySlug: 'saratoga-springs',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.3491',
    longitude: '-111.9047',
    landmarks: [
      {
        name: 'Saratoga Springs City Hall',
        address: 'City Hall Address',
        url: 'https://www.saratogasprings.utah.gov/',
      },
      {
        name: 'Saratoga Springs Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Saratoga%20Springs%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Saratoga Springs Central',
        description: 'Major retail and dining district',
        link: '/saratoga-springs',
      },
      {
        name: 'Saratoga Springs East',
        description: 'Residential and commercial mix',
        link: '/saratoga-springs',
      },
      {
        name: 'Saratoga Springs West',
        description: 'Industrial and commercial area',
        link: '/saratoga-springs',
      },
    ],
    permitInfo: {
      cityName: 'Saratoga Springs',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Saratoga Springs for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Saratoga Springs, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Saratoga Springs, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Saratoga Springs\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Saratoga Springs is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Saratoga Springs, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'south-jordan': {
    cityName: 'South Jordan',
    citySlug: 'south-jordan',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.5622',
    longitude: '-111.9297',
    landmarks: [
      {
        name: 'South Jordan City Hall',
        address: 'City Hall Address',
        url: 'https://www.southjordan.utah.gov/',
      },
      {
        name: 'South Jordan Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/South%20Jordan%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'South Jordan Central',
        description: 'Major retail and dining district',
        link: '/south-jordan',
      },
      {
        name: 'South Jordan East',
        description: 'Residential and commercial mix',
        link: '/south-jordan',
      },
      {
        name: 'South Jordan West',
        description: 'Industrial and commercial area',
        link: '/south-jordan',
      },
    ],
    permitInfo: {
      cityName: 'South Jordan',
      phoneNumber: '801-918-6000',
      requirements: 'Contact South Jordan for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout South Jordan, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in South Jordan, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of South Jordan\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'South Jordan is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout South Jordan, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'south-salt-lake': {
    cityName: 'South Salt Lake',
    citySlug: 'south-salt-lake',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.7608',
    longitude: '-111.8910',
    landmarks: [
      {
        name: 'South Salt Lake City Hall',
        address: 'City Hall Address',
        url: 'https://www.southsalt-lake.utah.gov/',
      },
      {
        name: 'South Salt Lake Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/South%20Salt%20Lake%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'South Salt Lake Central',
        description: 'Major retail and dining district',
        link: '/south-salt-lake',
      },
      {
        name: 'South Salt Lake East',
        description: 'Residential and commercial mix',
        link: '/south-salt-lake',
      },
      {
        name: 'South Salt Lake West',
        description: 'Industrial and commercial area',
        link: '/south-salt-lake',
      },
    ],
    permitInfo: {
      cityName: 'South Salt Lake',
      phoneNumber: '801-918-6000',
      requirements: 'Contact South Salt Lake for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout South Salt Lake, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in South Salt Lake, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of South Salt Lake\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'South Salt Lake is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout South Salt Lake, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'sugar-house': {
    cityName: 'Sugar House',
    citySlug: 'sugar-house',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.7608',
    longitude: '-111.8910',
    landmarks: [
      {
        name: 'Sugar House City Hall',
        address: 'City Hall Address',
        url: 'https://www.sugarhouse.utah.gov/',
      },
      {
        name: 'Sugar House Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Sugar%20House%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Sugar House Central',
        description: 'Major retail and dining district',
        link: '/sugar-house',
      },
      {
        name: 'Sugar House East',
        description: 'Residential and commercial mix',
        link: '/sugar-house',
      },
      {
        name: 'Sugar House West',
        description: 'Industrial and commercial area',
        link: '/sugar-house',
      },
    ],
    permitInfo: {
      cityName: 'Sugar House',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Sugar House for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Sugar House, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Sugar House, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Sugar House\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Sugar House is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Sugar House, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'syracuse': {
    cityName: 'Syracuse',
    citySlug: 'syracuse',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '41.0894',
    longitude: '-112.0647',
    landmarks: [
      {
        name: 'Syracuse City Hall',
        address: 'City Hall Address',
        url: 'https://www.syracuse.utah.gov/',
      },
      {
        name: 'Syracuse Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Syracuse%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Syracuse Central',
        description: 'Major retail and dining district',
        link: '/syracuse',
      },
      {
        name: 'Syracuse East',
        description: 'Residential and commercial mix',
        link: '/syracuse',
      },
      {
        name: 'Syracuse West',
        description: 'Industrial and commercial area',
        link: '/syracuse',
      },
    ],
    permitInfo: {
      cityName: 'Syracuse',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Syracuse for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Syracuse, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Syracuse, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Syracuse\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Syracuse is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Syracuse, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'taylorsville': {
    cityName: 'Taylorsville',
    citySlug: 'taylorsville',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.6677',
    longitude: '-111.9388',
    landmarks: [
      {
        name: 'Taylorsville City Hall',
        address: 'City Hall Address',
        url: 'https://www.taylorsville.utah.gov/',
      },
      {
        name: 'Taylorsville Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Taylorsville%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Taylorsville Central',
        description: 'Major retail and dining district',
        link: '/taylorsville',
      },
      {
        name: 'Taylorsville East',
        description: 'Residential and commercial mix',
        link: '/taylorsville',
      },
      {
        name: 'Taylorsville West',
        description: 'Industrial and commercial area',
        link: '/taylorsville',
      },
    ],
    permitInfo: {
      cityName: 'Taylorsville',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Taylorsville for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Taylorsville, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Taylorsville, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Taylorsville\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Taylorsville is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Taylorsville, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'tooele': {
    cityName: 'Tooele',
    citySlug: 'tooele',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.5308',
    longitude: '-112.2983',
    landmarks: [
      {
        name: 'Tooele City Hall',
        address: 'City Hall Address',
        url: 'https://www.tooele.utah.gov/',
      },
      {
        name: 'Tooele Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Tooele%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Tooele Central',
        description: 'Major retail and dining district',
        link: '/tooele',
      },
      {
        name: 'Tooele East',
        description: 'Residential and commercial mix',
        link: '/tooele',
      },
      {
        name: 'Tooele West',
        description: 'Industrial and commercial area',
        link: '/tooele',
      },
    ],
    permitInfo: {
      cityName: 'Tooele',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Tooele for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Tooele, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Tooele, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Tooele\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Tooele is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Tooele, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'tooel': {
    cityName: 'Tooele',
    citySlug: 'tooel',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.5308',
    longitude: '-112.2983',
    landmarks: [
      {
        name: 'Tooele City Hall',
        address: 'City Hall Address',
        url: 'https://www.tooele.utah.gov/',
      },
      {
        name: 'Tooele Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Tooele%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Tooele Central',
        description: 'Major retail and dining district',
        link: '/tooel',
      },
      {
        name: 'Tooele East',
        description: 'Residential and commercial mix',
        link: '/tooel',
      },
      {
        name: 'Tooele West',
        description: 'Industrial and commercial area',
        link: '/tooel',
      },
    ],
    permitInfo: {
      cityName: 'Tooele',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Tooele for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Tooele, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Tooele, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Tooele\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Tooele is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Tooele, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'west-valley-city': {
    cityName: 'West Valley City',
    citySlug: 'west-valley-city',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.6916',
    longitude: '-112.0011',
    landmarks: [
      {
        name: 'West Valley City City Hall',
        address: 'City Hall Address',
        url: 'https://www.westvalley-city.utah.gov/',
      },
      {
        name: 'West Valley City Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/West%20Valley%20City%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'West Valley City Central',
        description: 'Major retail and dining district',
        link: '/west-valley-city',
      },
      {
        name: 'West Valley City East',
        description: 'Residential and commercial mix',
        link: '/west-valley-city',
      },
      {
        name: 'West Valley City West',
        description: 'Industrial and commercial area',
        link: '/west-valley-city',
      },
    ],
    permitInfo: {
      cityName: 'West Valley City',
      phoneNumber: '801-918-6000',
      requirements: 'Contact West Valley City for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout West Valley City, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in West Valley City, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of West Valley City\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'West Valley City is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout West Valley City, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'woods-cross': {
    cityName: 'Woods Cross',
    citySlug: 'woods-cross',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.8716',
    longitude: '-111.8927',
    landmarks: [
      {
        name: 'Woods Cross City Hall',
        address: 'City Hall Address',
        url: 'https://www.woodscross.utah.gov/',
      },
      {
        name: 'Woods Cross Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Woods%20Cross%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Woods Cross Central',
        description: 'Major retail and dining district',
        link: '/woods-cross',
      },
      {
        name: 'Woods Cross East',
        description: 'Residential and commercial mix',
        link: '/woods-cross',
      },
      {
        name: 'Woods Cross West',
        description: 'Industrial and commercial area',
        link: '/woods-cross',
      },
    ],
    permitInfo: {
      cityName: 'Woods Cross',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Woods Cross for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Woods Cross, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Woods Cross, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Woods Cross\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Woods Cross is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Woods Cross, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'spanish-fork': {
    cityName: 'Spanish Fork',
    citySlug: 'spanish-fork',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.1149',
    longitude: '-111.6549',
    landmarks: [
      {
        name: 'Spanish Fork City Hall',
        address: '40 S Main St',
        url: 'https://www.spanishfork.org/',
      },
      {
        name: 'Spanish Fork Library',
        address: '49 S Main St',
        url: 'https://www.spanishfork.org/departments/library',
      },
      {
        name: 'Spanish Fork Sports Park',
        address: '295 Volunteer Dr',
        url: 'https://www.spanishfork.org/departments/parks-recreation',
      },
      {
        name: 'Spanish Fork River Trail',
        address: 'Along Spanish Fork River',
        url: 'https://www.google.com/maps/search/Spanish%20Fork%20River%20Trail',
      },
    ],
    businessDistricts: [
      {
        name: 'Spanish Fork Central',
        description: 'Major retail and dining district',
        link: '/spanish-fork',
      },
      {
        name: 'Spanish Fork East',
        description: 'Residential and commercial mix',
        link: '/spanish-fork',
      },
      {
        name: 'Spanish Fork West',
        description: 'Industrial and commercial area',
        link: '/spanish-fork',
      },
    ],
    permitInfo: {
      cityName: 'Spanish Fork',
      phoneNumber: '801-804-4500',
      requirements: 'Contact Spanish Fork for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Spanish Fork, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Spanish Fork, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Spanish Fork\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Spanish Fork is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Spanish Fork, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'springville': {
    cityName: 'Springville',
    citySlug: 'springville',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.1652',
    longitude: '-111.6107',
    landmarks: [
      {
        name: 'Springville City Hall',
        address: '110 S Main St',
        url: 'https://www.springville.org/',
      },
      {
        name: 'Springville Museum of Art',
        address: '126 E 400 S',
        url: 'https://www.sma.nebo.edu/',
      },
      {
        name: 'Springville Library',
        address: '45 S Main St',
        url: 'https://www.springville.org/departments/library',
      },
      {
        name: 'Springville High School',
        address: '1205 E 900 S',
        url: 'https://www.nebo.edu/shs',
      },
    ],
    businessDistricts: [
      {
        name: 'Springville Central',
        description: 'Major retail and dining district',
        link: '/springville',
      },
      {
        name: 'Springville East',
        description: 'Residential and commercial mix',
        link: '/springville',
      },
      {
        name: 'Springville West',
        description: 'Industrial and commercial area',
        link: '/springville',
      },
    ],
    permitInfo: {
      cityName: 'Springville',
      phoneNumber: '801-489-2700',
      requirements: 'Contact Springville for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Springville, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Springville, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Springville\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Springville is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Springville, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'lindon': {
    cityName: 'Lindon',
    citySlug: 'lindon',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.3433',
    longitude: '-111.7208',
    landmarks: [
      {
        name: 'Lindon City Hall',
        address: '100 N State St',
        url: 'https://www.lindoncity.org/',
      },
      {
        name: 'Lindon City Park',
        address: '200 N State St',
        url: 'https://www.lindoncity.org/departments/parks-recreation',
      },
      {
        name: 'Lindon Library',
        address: '25 W Main St',
        url: 'https://www.lindoncity.org/departments/library',
      },
      {
        name: 'Lindon Golf Course',
        address: '1080 N 1200 E',
        url: 'https://www.lindongolf.com/',
      },
    ],
    businessDistricts: [
      {
        name: 'Lindon Central',
        description: 'Major retail and dining district',
        link: '/lindon',
      },
      {
        name: 'Lindon East',
        description: 'Residential and commercial mix',
        link: '/lindon',
      },
      {
        name: 'Lindon West',
        description: 'Industrial and commercial area',
        link: '/lindon',
      },
    ],
    permitInfo: {
      cityName: 'Lindon',
      phoneNumber: '801-785-5043',
      requirements: 'Contact Lindon for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Lindon, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Lindon, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Lindon\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Lindon is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Lindon, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'bluffdale': {
    cityName: 'Bluffdale',
    citySlug: 'bluffdale',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.4897',
    longitude: '-111.9388',
    landmarks: [
      {
        name: 'Bluffdale City Hall',
        address: 'City Hall Address',
        url: 'https://www.bluffdale.utah.gov/',
      },
      {
        name: 'Bluffdale Park',
        address: 'Local Park Address',
        url: 'https://www.google.com/maps/search/Bluffdale%20Park',
      },
    ],
    businessDistricts: [
      {
        name: 'Bluffdale Central',
        description: 'Major retail and dining district',
        link: '/bluffdale',
      },
      {
        name: 'Bluffdale East',
        description: 'Residential and commercial mix',
        link: '/bluffdale',
      },
      {
        name: 'Bluffdale West',
        description: 'Industrial and commercial area',
        link: '/bluffdale',
      },
    ],
    permitInfo: {
      cityName: 'Bluffdale',
      phoneNumber: '801-918-6000',
      requirements: 'Contact Bluffdale for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Bluffdale, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Bluffdale, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Bluffdale\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Bluffdale is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Bluffdale, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  // Add other missing cities that were skipped
  'cheapestsalt-lake-city': {
    cityName: 'Salt Lake City',
    citySlug: 'cheapestsalt-lake-city',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.7608',
    longitude: '-111.8910',
    landmarks: [
      {
        name: 'Temple Square',
        address: '50 W North Temple, Salt Lake City, UT 84150',
        url: 'https://www.templesquare.com/',
      },
      {
        name: 'Utah State Capitol',
        address: '350 State St, Salt Lake City, UT 84103',
        url: 'https://utahstatecapitol.utah.gov/',
      },
    ],
    businessDistricts: [
      {
        name: 'Downtown Salt Lake City',
        description: 'Central business district with offices, restaurants, and entertainment',
        link: '/cheapestsalt-lake-city',
      },
      {
        name: 'Sugar House',
        description: 'Historic shopping district with local businesses and restaurants',
        link: '/cheapestsalt-lake-city',
      },
    ],
    permitInfo: {
      cityName: 'Salt Lake City',
      phoneNumber: '801-535-6000',
      requirements: 'Contact Salt Lake City for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Salt Lake City, Utah. Whether you\'re tackling a home renovation, construction project, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services in Salt Lake City, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of Salt Lake City\'s unique needs makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Salt Lake City is home to several popular attractions and landmarks. Whether you\'re working on a project near these areas or just exploring the city, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services throughout Salt Lake City, including areas near popular attractions and business districts. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'commercialbusiness-solutions': {
    cityName: 'Commercial Business Solutions',
    citySlug: 'commercialbusiness-solutions',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.7608',
    longitude: '-111.8910',
    landmarks: [
      {
        name: 'Business District',
        address: 'Commercial Area',
        url: 'https://www.google.com/maps/search/commercial+business+area',
      },
    ],
    businessDistricts: [
      {
        name: 'Commercial Central',
        description: 'Major business and industrial district',
        link: '/commercialbusiness-solutions',
      },
    ],
    permitInfo: {
      cityName: 'Commercial Business Solutions',
      phoneNumber: '801-918-6000',
      requirements: 'Contact local authorities for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services for commercial and business projects throughout Utah. Whether you\'re tackling a construction project, renovation, or major cleanup, we have the right dumpster size for your needs.',
      residentialServices: [
        'Commercial renovations and remodeling',
        'Office cleanouts',
        'Retail space organization',
        'Industrial waste removal',
        'Business cleanouts',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services for your commercial project, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and deep understanding of business needs makes us the preferred choice for companies and contractors alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Office remodel', 'Retail renovation', 'Small construction', 'Business cleanout'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full business renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Our commercial business solutions are available throughout Utah. Whether you\'re working on a project in a business district or industrial area, we\'re here to help with your dumpster rental needs.',
      serviceAreas: 'We provide dumpster rental services for commercial and business projects throughout Utah, including all major business districts and industrial areas. Our same-day delivery ensures you get your dumpster when and where you need it.',
    },
  },
  'complete': {
    cityName: 'Complete Dumpster Rental Guide',
    citySlug: 'complete',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.7608',
    longitude: '-111.8910',
    landmarks: [
      {
        name: 'Utah State',
        address: 'Statewide Service',
        url: 'https://www.utah.gov/',
      },
    ],
    businessDistricts: [
      {
        name: 'Statewide Coverage',
        description: 'Complete coverage across all Utah cities and counties',
        link: '/complete',
      },
    ],
    permitInfo: {
      cityName: 'Complete Dumpster Rental Guide',
      phoneNumber: '801-918-6000',
      requirements: 'Contact local authorities for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services throughout Utah. This complete guide covers everything you need to know about dumpster rental, from choosing the right size to understanding local regulations.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
        'Moving and relocation',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
        'Property management',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services anywhere in Utah, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and statewide coverage makes us the preferred choice for residents and businesses alike.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'This complete guide covers dumpster rental services across all of Utah, from the major cities to rural areas. Whether you\'re working on a project in Salt Lake City, Provo, Ogden, or anywhere else in the state, we\'re here to help.',
      serviceAreas: 'We provide dumpster rental services throughout Utah, including all major cities, suburbs, and rural areas. Our statewide coverage and same-day delivery ensure you get your dumpster when and where you need it, no matter where your project is located.',
    },
  },
  'utahlocations': {
    cityName: 'Utah Dumpster Rental Locations',
    citySlug: 'utahlocations',
    state: 'UT',
    phoneNumber: '801-918-6000',
    latitude: '40.7608',
    longitude: '-111.8910',
    landmarks: [
      {
        name: 'Utah State',
        address: 'Statewide Service',
        url: 'https://www.utah.gov/',
      },
    ],
    businessDistricts: [
      {
        name: 'Statewide Coverage',
        description: 'Complete coverage across all Utah cities and counties',
        link: '/utahlocations',
      },
    ],
    permitInfo: {
      cityName: 'Utah Dumpster Rental Locations',
      phoneNumber: '801-918-6000',
      requirements: 'Contact local authorities for permit requirements and applications. We can help guide you through the process.',
    },
    contentSections: {
      overview: 'Icon Dumpsters provides reliable dumpster rental services at multiple locations throughout Utah. Find the nearest location to your project and get fast, reliable service with competitive pricing.',
      residentialServices: [
        'Home renovations and remodeling',
        'Basement cleanouts',
        'Garage organization',
        'Yard waste removal',
        'Estate cleanouts',
        'Moving and relocation',
      ],
      commercialServices: [
        'Construction and demolition',
        'Office renovations',
        'Retail store cleanouts',
        'Industrial waste removal',
        'Event cleanup',
        'Property management',
      ],
      whyChooseUs: 'When you need reliable dumpster rental services at any of our Utah locations, Icon Dumpsters stands out as your trusted local partner. Our commitment to excellence and multiple service locations makes us the preferred choice for residents and businesses throughout the state.',
      dumpsterSizes: [
        {
          size: '15 Yard',
          description: 'Perfect for small to medium projects',
          useCases: ['Kitchen remodel', 'Bathroom renovation', 'Garage cleanout', 'Small construction'],
        },
        {
          size: '20 Yard',
          description: 'Great for medium to large projects',
          useCases: ['Full home renovation', 'Large construction', 'Commercial projects', 'Major cleanouts'],
        },
        {
          size: '30 Yard',
          description: 'For major projects and construction',
          useCases: ['Large construction', 'Commercial demolition', 'Major renovations', 'Industrial projects'],
        },
      ],
      localInfo: 'Our Utah dumpster rental locations are strategically placed to serve communities throughout the state. Whether you\'re in the Salt Lake Valley, Utah County, Davis County, or anywhere else in Utah, we have a location near you.',
      serviceAreas: 'We provide dumpster rental services at multiple locations throughout Utah, ensuring convenient access for all our customers. Our strategic placement and same-day delivery ensure you get your dumpster when and where you need it, no matter which location serves your area.',
    },
  },
  // Continue with more cities...
};

// Helper function to get city data
export function getCityData(citySlug: string): CityData | null {
  return cityData[citySlug] || null;
}

// Helper function to get all city slugs
export function getAllCitySlugs(): string[] {
  return Object.keys(cityData);
}
