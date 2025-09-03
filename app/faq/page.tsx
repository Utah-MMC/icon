import { Metadata } from "next";
import Link from "next/link";
import ImageWithFallback from "../components/ImageWithFallback";
import QuoteForm from "../components/QuoteForm";
import ArticleSchema from "../components/ArticleSchema";
import FAQSchema from "../components/FAQSchema";

export const metadata: Metadata = {
  title: "Dumpster Rental FAQ - Common Questions & Answers | Icon Dumpsters Utah",
  description: "Get answers to frequently asked questions about dumpster rental in Utah. Learn about sizes, pricing, permits, delivery, and more. Call (801) 918-6000 for expert advice.",
  keywords: "dumpster rental FAQ, dumpster rental questions, Utah dumpster rental FAQ, dumpster sizes FAQ, dumpster rental cost, dumpster delivery, dumpster permits, Icon Dumpsters FAQ",
  openGraph: {
    title: "Dumpster Rental FAQ - Common Questions & Answers | Icon Dumpsters Utah",
    description: "Get answers to frequently asked questions about dumpster rental in Utah. Learn about sizes, pricing, permits, delivery, and more.",
    url: 'https://icondumpsters.com/faq',
    images: [
      {
        url: '/images/IMG_0350.jpg',
        width: 1200,
        height: 630,
        alt: 'Dumpster Rental FAQ - Common Questions and Answers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dumpster Rental FAQ - Common Questions & Answers | Icon Dumpsters Utah",
    description: "Get answers to frequently asked questions about dumpster rental in Utah. Learn about sizes, pricing, permits, delivery, and more.",
          images: ['/images/IMG_0350.jpg'],
  },
  alternates: {
    canonical: 'https://icondumpsters.com/faq',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FAQPage() {
  function renderWithLinks(text: string) {
    const parts: (string | React.ReactElement)[] = [];
    const regex = /(\/[-a-zA-Z0-9\/]+)/g;
    let lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = regex.exec(text)) !== null) {
      const [match] = m;
      if (m.index > lastIndex) parts.push(text.slice(lastIndex, m.index));
      parts.push(
        <Link key={`${match}-${parts.length}`} href={match} className="text-[#4e37a8] hover:text-purple-700 font-semibold">
          {match}
        </Link>
      );
      lastIndex = m.index + match.length;
    }
    if (lastIndex < text.length) parts.push(text.slice(lastIndex));
    return <>{parts}</>;
  }
  const faqData = [
    {
      category: "Dumpster Sizes & Selection",
      questions: [
        {
          question: "What dumpster sizes do you offer?",
          answer: "We offer six dumpster options: 15-yard, 20-yard, and 30-yard roll-off dumpsters for general waste, plus specialized 10-yard clean dirt disposal, 10-yard mixed load disposal (standard weight allowance), and 12-yard concrete disposal dumpsters. The 15-yard is perfect for small projects like garage cleanouts, the 20-yard is ideal for medium renovations, and the 30-yard is best for large construction projects. Our specialized dumpsters are perfect for dirt, soil, concrete, and heavy material projects. Learn more: /dumpster-sizes"
        },
        {
          question: "How do I choose the right dumpster size?",
          answer: "Consider your project type and volume. A 15-yard dumpster holds about 3-4 pickup truck loads, a 20-yard holds 4-6 loads, and a 30-yard holds 6-8 loads. For reference, a 15-yard dumpster is about 12' x 8' x 4' high. Our team can help you choose the perfect size for your project. See /dumpster-sizes and /how-to-choose-dumpster-size"
        },
        {
          question: "What are the dimensions of your dumpsters?",
          answer: "Our 15-yard dumpster is approximately 12' x 8' x 4' high, the 20-yard is 12' x 8' x 5' high, and the 30-yard is 12' x 8' x 6' high. All dumpsters are roll-off containers designed for easy loading and unloading."
        }
      ]
    },
    {
      category: "Pricing & Costs",
      questions: [
        {
          question: "How much does dumpster rental cost?",
          answer: "Dumpster rental costs vary based on size, rental duration, and location. Our 15-yard dumpsters start around $300-400, 20-yard dumpsters around $400-500, and 30-yard dumpsters around $500-600. This typically includes delivery, pickup, and disposal fees. Get an instant estimate: /dumpster-calculator or request a quote: /freequote"
        },
        {
          question: "Are there any hidden fees?",
          answer: "No hidden fees! Our pricing is transparent and includes delivery, pickup, and standard disposal fees. Additional charges may apply only for overweight loads (over 2 tons) or extended rental periods beyond the standard 7-14 days. We'll always discuss any potential additional costs upfront."
        },
        {
          question: "Do you offer discounts for longer rentals?",
          answer: "Yes, we offer competitive rates for extended rentals. If you need a dumpster for more than 14 days, we can work with you on pricing. We also offer discounts for contractors and repeat customers. Call us to discuss your specific needs."
        },
        {
          question: "Do you have specialized dumpsters for dirt and concrete?",
          answer: "Yes! We offer specialized dumpsters for heavy materials: 10-yard clean dirt disposal (flat rate, no weight limit), 10-yard mixed load disposal (standard weight allowance), and 12-yard concrete disposal (flat rate, perfect for concrete, asphalt, brick, and stone). These are ideal for landscaping projects, concrete demolition, and heavy material disposal."
        }
      ]
    },
    {
      category: "Delivery & Pickup",
      questions: [
        {
          question: "How quickly can you deliver a dumpster?",
          answer: "We typically offer same-day or next-day delivery for most areas in Utah. During peak season (spring and summer), we recommend booking 2-3 days in advance to ensure availability. For urgent needs, call us and we'll do our best to accommodate you."
        },
        {
          question: "Where can you place the dumpster on my property?",
          answer: "We can place dumpsters on driveways, parking lots, or other hard surfaces. We need about 60 feet of clearance for delivery and pickup. We cannot place dumpsters on grass, soft ground, or areas that might be damaged. Our delivery team will assess your location and recommend the best placement."
        },
        {
          question: "How long can I keep the dumpster?",
          answer: "Standard rental periods are 7-14 days, which covers most projects. We can accommodate longer periods if needed. Just let us know your timeline when you order, and we'll work with you to ensure the dumpster is available for your entire project."
        }
      ]
    },
    {
      category: "Permits & Regulations",
      questions: [
        {
          question: "Do I need a permit for a dumpster?",
          answer: "In most cases, no permit is needed if the dumpster is placed on private property (like your driveway). However, if you need to place the dumpster on a public street or sidewalk, you'll need a permit from your local city. We can help you determine if a permit is required and guide you through the process. Read more: /utah-dumpster-permits-guide"
        },
        {
          question: "What are the weight limits for dumpsters?",
          answer: "Our dumpsters have a weight limit of approximately 2 <Link href='/tonnage-calculator' className='text-[#4e37a8] hover:text-purple-700 underline font-semibold'>tons</Link> (4,000 pounds). This covers most household and construction waste. If you exceed this limit, additional fees may apply. Heavy materials like concrete, dirt, or roofing shingles should be discussed with us beforehand."
        },
        {
          question: "Are there any materials you don't accept?",
          answer: "We cannot accept hazardous materials, including paint, chemicals, batteries, tires, refrigerators, or other appliances with Freon. We also cannot accept medical waste or radioactive materials. If you're unsure about specific items, call us and we'll let you know what's acceptable."
        }
      ]
    },
    {
      category: "Service Area & Availability",
      questions: [
        {
          question: "What areas do you serve in Utah?",
          answer: "We serve the entire Salt Lake Valley and surrounding areas including Salt Lake City, West Valley City, Sandy, West Jordan, Murray, Taylorsville, South Jordan, Riverton, Herriman, Draper, and many other Utah communities. Call us to confirm service availability in your specific location. View all locations: /locations"
        },
        {
          question: "Do you offer weekend delivery?",
          answer: "Yes, we offer weekend delivery and pickup services. We understand that many projects happen on weekends, so we're available to serve you when it's most convenient. There may be a small additional fee for weekend service."
        },
        {
          question: "What happens if I need the dumpster picked up early?",
          answer: "No problem! You can call us anytime to schedule early pickup. We'll come out and remove the dumpster as soon as possible, typically within 24 hours. There's no penalty for early pickup - we want to make sure you're completely satisfied with our service."
        }
      ]
    },
    {
      category: "Waste Types & Disposal",
      questions: [
        {
          question: "What types of waste can I put in the dumpster?",
          answer: "We accept most types of construction and household waste including wood, drywall, concrete, metal, furniture, appliances (without Freon), carpet, tile, roofing materials, and general household junk. We also accept yard waste and tree branches (cut to manageable sizes)."
        },
        {
          question: "Do you recycle materials?",
          answer: "Yes, we're committed to environmental responsibility. We sort and recycle materials whenever possible, including metal, concrete, and certain types of wood. This helps reduce landfill waste and may help keep your costs lower."
        },
        {
          question: "Can I put concrete or dirt in the dumpster?",
          answer: "Yes, we accept concrete and dirt, but there are weight considerations. These materials are very heavy, so you may not be able to fill the dumpster completely. We recommend discussing your specific needs with us to ensure you get the right size and avoid overweight fees."
        }
      ]
    },
    {
      category: "Booking & Customer Service",
      questions: [
        {
          question: "How do I book a dumpster?",
          answer: "Booking is easy! You can call us at (801) 918-6000, fill out our online quote form, or email us at icondumpsters@gmail.com. We'll ask about your project details, preferred delivery date, and location to provide you with an accurate quote and schedule delivery."
        },
        {
          question: "What information do you need when I book?",
          answer: "We'll need your name, phone number, delivery address, preferred delivery date, project type, and estimated rental duration. We'll also ask about the types of materials you'll be disposing of to help you choose the right dumpster size."
        },
        {
          question: "What if I have a problem or question after delivery?",
          answer: "We're here to help! Call us anytime at (801) 918-6000 if you have questions or concerns. Our customer service team is available to assist you with any issues, whether you need advice on loading the dumpster, want to schedule pickup, or have any other questions."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Article Schema removed to prevent duplicate structured data - FAQ schema already provided by FAQSchema */}
      
      {/* FAQ Schema for structured data */}
      <FAQSchema 
        faqs={[
          {
            question: "What dumpster sizes do you offer?",
            answer: "We offer three main dumpster sizes: 15-yard, 20-yard, and 30-yard roll-off dumpsters. The 15-yard is perfect for small projects like garage cleanouts, the 20-yard is ideal for medium renovations, and the 30-yard is best for large construction projects or major cleanouts."
          },
          {
            question: "How much does dumpster rental cost?",
            answer: "Dumpster rental costs vary based on size, rental duration, and location. Our 15-yard dumpsters start around $300-400, 20-yard dumpsters around $400-500, and 30-yard dumpsters around $500-600. This typically includes delivery, pickup, and disposal fees."
          },
          {
            question: "How quickly can you deliver a dumpster?",
            answer: "We typically offer same-day or next-day delivery for most areas in Utah. During peak season (spring and summer), we recommend booking 2-3 days in advance to ensure availability."
          },
          {
            question: "Do I need a permit for a dumpster?",
            answer: "In most cases, no permit is needed if the dumpster is placed on private property (like your driveway). However, if you need to place the dumpster on a public street or sidewalk, you'll need a permit from your local city."
          },
          {
            question: "What areas do you serve in Utah?",
            answer: "We serve the entire Salt Lake Valley and surrounding areas including Salt Lake City, West Valley City, Sandy, West Jordan, Murray, Taylorsville, South Jordan, Riverton, Herriman, Draper, and many other Utah communities."
          },
          {
            question: "What types of waste can I put in the dumpster?",
            answer: "We accept most types of construction and household waste including wood, drywall, concrete, metal, furniture, appliances (without Freon), carpet, tile, roofing materials, and general household junk. We also accept yard waste and tree branches."
          },
          {
            question: "How do I book a dumpster?",
            answer: "Booking is easy! You can call us at (801) 918-6000, fill out our online quote form, or email us at icondumpsters@gmail.com. We'll ask about your project details, preferred delivery date, and location to provide you with an accurate quote."
          }
        ]}
        pageUrl="https://icondumpsters.com/faq"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#4e37a8] via-purple-700 to-[#4e37a8] text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Dumpster Rental FAQ
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed">
              Get answers to the most common questions about dumpster rental in Utah. 
              From sizing and pricing to delivery and permits, we've got you covered.
            </p>
            
            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#quote-form" 
                className="bg-white text-[#4e37a8] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg shadow-lg"
              >
                Get Free Quote
              </a>
              <a 
                href="tel:801-918-6000" 
                className="bg-[#4e37a8] text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-colors font-semibold text-lg border-2 border-white"
              >
                Call (801) 918-6000
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link href="/" className="text-gray-500 hover:text-[#4e37a8] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li className="text-[#4e37a8] font-medium">FAQ</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12">
          
          {/* Main Content Area */}
          <div className="xl:col-span-3">
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions About Dumpster Rental
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We've compiled answers to the most common questions our customers ask about dumpster rental services. 
                If you don't see your question here, don't hesitate to call us at (801) 918-6000 or 
                <Link href="/#quote-form" className="text-[#4e37a8] hover:text-purple-700 font-semibold"> request a free quote</Link>.
              </p>
            </div>

            {/* FAQ Categories */}
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-8">
                <div className="bg-gray-50 px-8 py-6 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                    <svg className="w-6 h-6 text-[#4e37a8]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                    {category.category}
                  </h3>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {category.questions.map((faq, faqIndex) => (
                    <details key={faqIndex} className="group">
                      <summary className="px-8 py-6 cursor-pointer hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-semibold text-gray-900 group-open:text-[#4e37a8] transition-colors">
                            {faq.question}
                          </h4>
                          <svg className="w-5 h-5 text-gray-400 group-open:text-[#4e37a8] group-open:rotate-180 transition-all duration-200" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </summary>
                      <div className="px-8 pb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {renderWithLinks(faq.answer)}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-[#4e37a8] to-purple-700 rounded-2xl shadow-lg p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-purple-100 mb-6 leading-relaxed">
                Our team is here to help! Call us anytime for expert advice on choosing the right dumpster size, 
                understanding pricing, or any other questions about our services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:801-918-6000" 
                  className="bg-white text-[#4e37a8] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
                >
                  Call (801) 918-6000
                </a>
                <a 
                  href="mailto:icondumpsters@gmail.com" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#4e37a8] transition-colors font-semibold text-lg"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="xl:col-span-1 space-y-8">
            {/* Quick Quote Form */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#4e37a8]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                Get Free Quote
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Need a dumpster? Get an instant quote for your project.
              </p>
              <a 
                href="#quote-form" 
                className="w-full bg-[#4e37a8] text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold inline-block text-center"
              >
                Request Quote
              </a>
            </div>

            {/* Dumpster Sizes */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#4e37a8]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                Dumpster Sizes
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">15 Yard</span>
                  <span className="text-gray-500">Small projects</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">20 Yard</span>
                  <span className="text-gray-500">Medium projects</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">30 Yard</span>
                  <span className="text-gray-500">Large projects</span>
                </div>
              </div>
              <Link 
                href="/dumpster-sizes" 
                className="block mt-4 text-[#4e37a8] hover:text-purple-700 font-semibold text-sm"
              >
                View Size Guide →
              </Link>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#4e37a8]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Contact Us
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#4e37a8]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">(801) 918-6000</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#4e37a8]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">icondumpsters@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Service Area */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#4e37a8]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Service Area
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                We serve the entire Salt Lake Valley and surrounding areas including:
              </p>
              <div className="text-sm text-gray-700 space-y-1">
                <div>• Salt Lake City</div>
                <div>• West Valley City</div>
                <div>• Sandy</div>
                <div>• West Jordan</div>
                <div>• Murray</div>
                <div>• And many more!</div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Quote Form Section */}
      <section id="quote-form" className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get a free, no-obligation quote for your dumpster rental project. 
              Our team will help you choose the perfect size and schedule delivery.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>
    </div>
  );
}
