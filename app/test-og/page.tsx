import { Metadata } from "next";
import Image from "next/image";

import OptimizedImage from '../components/OptimizedImage';
export const metadata: Metadata = {
  title: "Open Graph Image Test - Icon Dumpsters",
  description: "Test page for Open Graph image configuration",
  robots: {
    index: false,
    follow: false,
  },
};

export default function TestOGPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Open Graph Image Test</h1>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <h2 className="text-lg font-semibold text-blue-800 mb-2">Test Information</h2>
            <div className="text-blue-700 space-y-1">
              <p><strong>Image URL:</strong> /images/og-image.png</p>
              <p><strong>Dimensions:</strong> 1200x630 pixels</p>
              <p><strong>Format:</strong> PNG</p>
              <p><strong>Purpose:</strong> Social media sharing (Facebook, Twitter, LinkedIn)</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Preview of Open Graph Image:</h2>
          <div className="border-2 border-[#4e37a8] rounded-lg p-4 mb-6">
            <OptimizedImage src="/images/optimized/og-image.jpg" 
              alt="Icon Dumpsters Open Graph Image" 
              width={600}
              height={315}
              className="w-full h-auto rounded"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 border-l-4 border-green-400 p-4">
              <h3 className="text-lg font-semibold text-green-800 mb-2">To Test on Facebook:</h3>
              <ol className="text-green-700 space-y-1 list-decimal list-inside">
                <li>Go to <a href="https://developers.facebook.com/tools/debug/" target="_blank" rel="noopener noreferrer" className="text-green-600 underline">Facebook Sharing Debugger</a></li>
                <li>Enter your website URL: <code className="bg-green-100 px-1 rounded">https://icondumpsters.com/</code></li>
                <li>Click "Debug" to see how it will appear when shared</li>
                <li>If needed, click "Scrape Again" to refresh the cache</li>
              </ol>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">To Test on Twitter:</h3>
              <ol className="text-blue-700 space-y-1 list-decimal list-inside">
                <li>Go to <a href="https://cards-dev.twitter.com/validator" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Twitter Card Validator</a></li>
                <li>Enter your website URL: <code className="bg-blue-100 px-1 rounded">https://icondumpsters.com/</code></li>
                <li>Click "Preview card" to see how it will appear</li>
              </ol>
            </div>
          </div>
          
          <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Notes:</h3>
            <ul className="text-yellow-700 space-y-1 list-disc list-inside">
              <li>Facebook caches images, so it might take a few minutes to update</li>
              <li>Use the Facebook Sharing Debugger to force a cache refresh</li>
              <li>The image is optimized for all social media platforms</li>
              <li>This test page is not indexed by search engines</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


