export default function TestPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">✅ Deployment Successful!</h1>
        <p className="text-xl text-gray-600 mb-8">The Icon Dumpsters website is working correctly.</p>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Site Status</h2>
          <ul className="text-left space-y-2 text-gray-600">
            <li>✅ Next.js 15.4.6 - Working</li>
            <li>✅ Image Components - Fixed</li>
            <li>✅ Form Handling - Fixed</li>
            <li>✅ Error Boundaries - Implemented</li>
            <li>✅ Custom Error Pages - Added</li>
            <li>✅ Health Check API - Available</li>
          </ul>
        </div>
        <a 
          href="/" 
          className="mt-6 inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
}
