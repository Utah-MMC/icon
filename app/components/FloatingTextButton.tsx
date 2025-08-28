'use client';

import { useState } from 'react';

export default function FloatingTextButton() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    
    setIsSubmitting(true);
    try {
      // Send lead to email system
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          firstName: name, 
          phone, 
          additionalInfo: 'Floating text button lead', 
          source: 'FloatingTextButton' 
        }),
      });
      
      // Send immediate text message
      const message = `Hi ${name}! Thanks for reaching out about dumpster rental. An Icon expert will text you within 30 minutes with pricing and to schedule delivery. Reply STOP to opt out.`;
      
      await fetch('/api/sms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone: phone.replace(/\D/g, ''),
          message,
          transcript: [
            {
              role: 'system',
              content: `Floating text button lead from ${name}`
            }
          ]
        })
      });
      
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting text request:', error);
      alert('There was an error sending your request. Please call us at (801) 918-6000.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
             {/* Floating Text Button */}
       <button
         onClick={() => setShowForm(true)}
         className="fixed bottom-32 right-4 z-30 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
         aria-label="Text us for a quote"
       >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
        </svg>
      </button>

      {/* Text Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-900">Text Us for a Quote</h3>
              <button
                onClick={() => {
                  setShowForm(false);
                  setSubmitted(false);
                  setName('');
                  setPhone('');
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(801) 555-1234"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Text Me a Quote'}
                </button>
                <p className="text-xs text-gray-500 text-center">
                  We'll text you within 30 minutes with pricing and to schedule delivery.
                </p>
              </form>
            ) : (
              <div className="text-center">
                <div className="text-green-500 text-4xl mb-2">✓</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Text Sent!</h4>
                <p className="text-gray-600 mb-4">
                  We'll text you within 30 minutes with your personalized quote and to schedule delivery.
                </p>
                <button
                  onClick={() => {
                    setShowForm(false);
                    setSubmitted(false);
                    setName('');
                    setPhone('');
                  }}
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
