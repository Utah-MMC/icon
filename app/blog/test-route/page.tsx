export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Test Route Working!</h1>
        <p className="text-lg text-gray-600">If you can see this, Next.js routing is working properly.</p>
        <a href="/blog" className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg">
          Back to Blog
        </a>
      </div>
    </div>
  )
}
