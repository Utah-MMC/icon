interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
  pageUrl: string;
}

export default function FAQSchema({ faqs, pageUrl }: FAQSchemaProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq, index) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema),
      }}
    />
  );
}

// Common FAQ data for dumpster rental topics
export const dumpsterRentalFAQs = [
  {
    question: "What size dumpster do I need for my project?",
    answer: "Dumpster size depends on your project type. For home cleanouts, a 10-15 yard dumpster usually works. For construction projects, 20-30 yards is common. For large renovations, consider 40 yards. Contact us for a free consultation to determine the right size for your specific project."
  },
  {
    question: "How much does dumpster rental cost?",
    answer: "Dumpster rental costs vary by size and location. 10-yard dumpsters typically cost $200-400, 20-yard dumpsters $300-500, and 40-yard dumpsters $400-700. Prices include delivery, pickup, and disposal fees. Contact us for a free quote based on your specific needs."
  },
  {
    question: "Do I need a permit for a dumpster?",
    answer: "Permit requirements vary by location. In most residential areas, you don't need a permit if the dumpster is on your property. If placing on the street or sidewalk, you'll likely need a permit from your city. We can help you determine permit requirements for your location."
  },
  {
    question: "How long can I keep the dumpster?",
    answer: "Most dumpster rentals include 7-14 days of rental time. Extended rentals are usually available for an additional fee. We offer flexible rental periods to accommodate your project timeline. Contact us to discuss your specific needs."
  },
  {
    question: "What can I put in a dumpster?",
    answer: "You can put most construction debris, household items, furniture, appliances, and general waste. Prohibited items include hazardous materials, chemicals, tires, batteries, and medical waste. Contact us for a complete list of acceptable and prohibited items."
  }
];

export const constructionWasteFAQs = [
  {
    question: "How do I sort construction waste?",
    answer: "Separate materials by type: wood, metal, concrete, drywall, and general debris. This helps with recycling and can reduce disposal costs. Some materials like concrete and metal can be recycled. Contact us for guidance on proper sorting for your project."
  },
  {
    question: "Can construction waste be recycled?",
    answer: "Yes, many construction materials can be recycled. Concrete, metal, wood, and drywall are commonly recycled. Recycling can reduce disposal costs and environmental impact. We work with recycling facilities to maximize the amount of waste diverted from landfills."
  },
  {
    question: "What's the difference between C&D waste and regular waste?",
    answer: "Construction and demolition (C&D) waste includes materials from construction, renovation, and demolition projects. This differs from regular household waste and requires special handling and disposal methods. C&D waste often has higher recycling potential."
  }
];

export const homeRenovationFAQs = [
  {
    question: "How do I estimate renovation waste?",
    answer: "Estimate waste by calculating the volume of materials being removed. A general rule is 1-2 cubic yards per 100 square feet of renovation. Kitchen remodels typically generate 2-4 yards, bathroom remodels 1-2 yards. Contact us for a detailed estimate."
  },
  {
    question: "Should I rent multiple small dumpsters or one large one?",
    answer: "One large dumpster is usually more cost-effective than multiple small ones. However, consider space constraints and project timeline. If you have limited space, multiple smaller dumpsters might work better. We can help you determine the best approach."
  },
  {
    question: "How do I prepare for dumpster delivery?",
    answer: "Clear the delivery area of vehicles and obstacles. Ensure there's enough space for the truck to maneuver. The area should be level and accessible. We'll contact you before delivery to confirm the location and any special requirements."
  }
];

export const residentialWasteFAQs = [
  {
    question: "What size dumpster do I need for my home project?",
    answer: "Dumpster size depends on your project type and scope. For garage cleanouts, 15 yards is usually sufficient. For kitchen remodels, 20 yards is common. For major renovations, 30 yards may be needed. Contact us for a free consultation to determine the right size for your specific project."
  },
  {
    question: "How much does residential dumpster rental cost?",
    answer: "Residential dumpster rental costs vary by size, location, and rental duration. 15-yard dumpsters typically cost $200-400, 20-yard dumpsters $300-500, and 30-yard dumpsters $400-700. Prices include delivery, pickup, and disposal fees. We offer competitive pricing for homeowners."
  },
  {
    question: "Do I need a permit for a residential dumpster?",
    answer: "Permit requirements vary by location and placement. If placing on your private property (driveway, yard), permits are usually not required. If placing on the street, you'll need a permit from your city. We can help you determine permit requirements and assist with the application process."
  },
  {
    question: "How long can I keep the dumpster for my home project?",
    answer: "Most residential dumpster rentals include 7-14 days of rental time. Extended rentals are available for longer projects. We offer flexible rental periods to accommodate your project timeline. Contact us to discuss your specific needs and we'll create a rental schedule that works for you."
  },
  {
    question: "What types of waste can I put in a residential dumpster?",
    answer: "Residential dumpsters can accept most household items, furniture, appliances, construction debris, yard waste, and general trash. Prohibited items include hazardous materials, chemicals, tires, batteries, and medical waste. Contact us for a complete list of acceptable and prohibited items for your specific project."
  },
  {
    question: "Do you offer same-day delivery for residential projects?",
    answer: "Yes, we offer same-day delivery throughout Utah when available. Call us early in the day to check availability and schedule same-day service. We understand that residential projects often have urgent timelines and we do our best to accommodate your needs."
  },
  {
    question: "Can I place the dumpster on my driveway?",
    answer: "Yes, you can typically place the dumpster on your driveway. This is often the preferred location as it doesn't require a permit and is easily accessible. Make sure the area is clear of vehicles and obstacles before delivery. We'll work with you to find the best placement option."
  },
  {
    question: "What if I need to extend my rental period?",
    answer: "We offer flexible rental periods and can extend your rental if needed. Simply contact us before your scheduled pickup date and we'll arrange for an extension. Additional fees may apply for extended rentals, but we'll always be transparent about costs."
  }
];
