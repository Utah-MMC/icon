import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Icon Dumpsters Utah",
  description: "Privacy Policy for Icon Dumpsters. Learn how we collect, use, and protect your information, including consent for text messages.",
  keywords: "privacy policy, Icon Dumpsters, data protection, text message consent, Utah dumpster rental privacy",
  openGraph: {
    title: "Privacy Policy | Icon Dumpsters Utah",
    description: "Privacy Policy for Icon Dumpsters. Learn how we collect, use, and protect your information.",
    url: 'https://icondumpsters.com/privacy-policy',
  },
  twitter: {
    card: 'summary',
    title: "Privacy Policy | Icon Dumpsters Utah",
    description: "Privacy Policy for Icon Dumpsters. Learn how we collect, use, and protect your information.",
  },
  alternates: {
    canonical: '/privacy-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#4e37a8] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-purple-200">
            Last updated: January 2025
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              Icon Dumpsters ("we," "our," or "us") collects information you provide directly to us, such as when you:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Fill out our quote request forms</li>
              <li>Contact us via phone, email, or text message</li>
              <li>Request our services</li>
              <li>Sign up for our newsletter or promotional communications</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Types of Information We Collect</h2>
            <p className="text-gray-700 mb-4">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Personal Information:</strong> Name, email address, phone number, mailing address</li>
              <li><strong>Service Information:</strong> Project details, dumpster size requirements, delivery preferences</li>
              <li><strong>Communication Records:</strong> Phone calls, text messages, emails, and other correspondence</li>
              <li><strong>Website Usage:</strong> IP address, browser type, pages visited, and other analytics data</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Provide our dumpster rental services</li>
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your account and services</li>
              <li>Send you marketing and promotional materials (with your consent)</li>
              <li>Improve our services and website</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Text Message Communications and Consent</h2>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <p className="text-blue-800 font-semibold mb-2">Important Notice About Text Messages</p>
              <p className="text-blue-700 text-sm">
                By providing your phone number and requesting our services, you consent to receive text messages from Icon Dumpsters 
                through our Grasshopper phone system. These messages may include:
              </p>
              <ul className="list-disc pl-6 mt-2 text-blue-700 text-sm">
                <li>Service confirmations and updates</li>
                <li>Delivery and pickup notifications</li>
                <li>Customer service communications</li>
                <li>Marketing messages (with your explicit consent)</li>
              </ul>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>Consent for Text Messages:</strong> When you provide your phone number to Icon Dumpsters, you expressly consent to receive 
              text messages from us through our Grasshopper phone system. This consent is required for us to provide you with 
              essential service communications.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>Message Frequency:</strong> Message frequency varies based on your service needs. Standard messaging rates may apply.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>Opt-Out:</strong> You may opt out of text messages at any time by replying "STOP" to any message or contacting us directly. 
              However, opting out of text messages may limit our ability to provide you with timely service updates.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Information Sharing</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our business (e.g., Grasshopper for phone services, payment processors)</li>
              <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights and safety</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Data Security</h2>
            <p className="text-gray-700 mb-6">
              We implement appropriate security measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Access and review your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Opt out of text messages (reply "STOP" to any message)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Cookies and Tracking</h2>
            <p className="text-gray-700 mb-6">
              Our website uses cookies and similar technologies to enhance your browsing experience and analyze website usage. 
              You can control cookie settings through your browser preferences.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Children's Privacy</h2>
            <p className="text-gray-700 mb-6">
              Our services are not intended for children under 13 years of age. We do not knowingly collect personal information 
              from children under 13.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Changes to This Policy</h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the 
              new policy on our website and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Icon Dumpsters</strong></p>
              <p className="text-gray-700 mb-2">Phone: (801) 918-6000</p>
              <p className="text-gray-700 mb-2">Email: icondumpsters@gmail.com</p>
              <p className="text-gray-700">Address: Utah, United States</p>
            </div>

            <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400">
              <p className="text-yellow-800 text-sm">
                <strong>Note:</strong> This privacy policy is effective as of January 2025. By using our services, 
                you acknowledge that you have read and understood this Privacy Policy and consent to the collection, 
                use, and disclosure of your information as described herein.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
