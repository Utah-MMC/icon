export const chatKnowledge = {
  contact: {
    phone: '(801) 918-6000',
    email: 'icondumpsters@gmail.com',
    site: 'icondumpsters.com',
  },
  business: {
    timezone: 'America/Denver',
    support: '24/7',
    sameDayCutoffHourLocal: 15, // 3 PM local time for same-day delivery window
    windows: {
      todayAfternoon: '2–5pm',
      tomorrowMorning: '8–11am',
      tomorrowAfternoon: '12–3pm',
    },
  },
  sizes: {
    general: ['15 yd', '20 yd', '30 yd'],
    dimensions: {
      // Using FAQ dimensions for consistency across the site
      '15': "≈ 12' x 8' x 4' high",
      '20': "≈ 12' x 8' x 5' high",
      '30': "≈ 12' x 8' x 6' high",
    },
    quickUses: {
      '15': 'Small cleanouts, garage cleanups',
      '20': 'Basement cleanouts, small renovations',
      '30': 'Large cleanouts, home renovations',
    },
    specialized: ['10 yd Clean Dirt (flat rate)', '10 yd Mixed Load', '12 yd Concrete (flat rate)'],
  },
  pricing: {
    base: { '15': 350, '20': 375, '30': 450 },
    thirtyDay: { '15': 500, '20': 525, '30': 600 },
    oneDayDiscountRate: 0.3, // 30% off base
    weightPerTon: 55, // billed per ton
    specialItemFee: 25, // mattresses, tires, some appliances
    exampleBundles: {
      // From city guide cards
      general: {
        '15': { bundle3to7: 300, oneDay: 180, thirtyDay: 500 },
        '20': { bundle3to7: 350, oneDay: 210, thirtyDay: 525 },
        '30': { bundle3to7: 400, oneDay: 240, thirtyDay: 600 },
      },
      specialized: {
        cleanDirt10: { bundle3to7: 375, oneDay: 280, thirtyDay: 600 },
        mixed10: { bundle3to7: 375, oneDay: 280, thirtyDay: 600 },
        concrete12: { bundle3to7: 375, oneDay: 280, thirtyDay: 600 },
      },
    },
  },
  processSteps: [
    'Get a quote (form or phone)',
    'Schedule delivery',
    'Fill your dumpster',
    'Pickup and disposal',
  ],
  accepted: [
    'Construction debris (wood, drywall, concrete)',
    'Household junk and furniture',
    'Yard waste and landscaping debris',
    'Roofing materials and shingles',
    'Demolition waste',
  ],
  prohibited: [
    'Hazardous materials and chemicals',
    'Paint and liquids',
    'Batteries',
    'Electronics (varies by facility)',
    'Items with freon unless properly tagged',
    'Medical waste',
    'Asbestos',
    'Tires (special handling fee applies)',
  ],
};


