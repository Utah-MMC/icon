'use client';

import { useState } from 'react';
import ReCaptcha from './ReCaptcha';
import Honeypot from './Honeypot';

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string>('');
  const [spamDetected, setSpamDetected] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submission started');
    
    // Temporarily disabled spam detection for testing
    // if (spamDetected) {
    //   console.log('Spam detected - form submission blocked');
    //   return;
    // }

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Log all form data for debugging
    console.log('Form data:', {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      zipCode: formData.get('zipCode'),
      wasteType: formData.get('wasteType'),
      dumpsterSize: formData.get('dumpsterSize'),
      deliveryDate: formData.get('deliveryDate'),
      pickupDate: formData.get('pickupDate'),
      additionalInfo: formData.get('additionalInfo'),
      smsConsent: formData.get('smsConsent'),
    });
    
    // Basic validation
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    
    if (!email || !phone) {
      alert('Please fill in all required fields');
      return;
    }

    console.log('Form validation passed, starting submission');
    setIsSubmitting(true);
    const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Submitting...';
    }

    try {
      console.log('Preparing form data for submission');
      
      // Use FormData for faster submission
      const formDataToSend = new FormData();
      formDataToSend.append('firstName', formData.get('firstName') as string);
      formDataToSend.append('lastName', formData.get('lastName') as string);
      formDataToSend.append('email', email);
      formDataToSend.append('phone', phone);
      formDataToSend.append('zipCode', formData.get('zipCode') as string);
      formDataToSend.append('wasteType', formData.get('wasteType') as string);
      formDataToSend.append('dumpsterSize', formData.get('dumpsterSize') as string);
      formDataToSend.append('deliveryDate', formData.get('deliveryDate') as string);
      formDataToSend.append('pickupDate', formData.get('pickupDate') as string);
      formDataToSend.append('additionalInfo', formData.get('additionalInfo') as string);
      formDataToSend.append('smsConsent', formData.get('smsConsent') as string);

      // Submit to Formspree - don't wait for response to avoid CORS issues
      fetch('https://formspree.io/f/xanblnyj', {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors', // This prevents CORS issues
      }).then(() => {
        // Assume success if no error
        alert('Thank you! Your quote request has been submitted successfully.');
        form.reset();
        setRecaptchaToken('');
      }).catch((error) => {
        console.error('Form submission error:', error);
        alert('There was an error submitting your request. Please try again.');
      });
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = 'Get Free Quote';
      }
    }
  };

  const handleRecaptchaVerify = (token: string) => {
    setRecaptchaToken(token);
    console.log('reCAPTCHA verified successfully');
  };

  const handleRecaptchaExpired = () => {
    setRecaptchaToken('');
    console.log('reCAPTCHA expired');
  };

  const handleRecaptchaError = () => {
    setRecaptchaToken('');
    console.log('reCAPTCHA error occurred');
  };

  const handleSpamDetected = () => {
    setSpamDetected(true);
    console.log('Spam detected in form');
  };

  return (
    <div id="quote-form" className="bg-gray-800 text-white p-6 sm:p-8 rounded-lg">
      <h3 className="text-xl sm:text-2xl font-bold text-[#4e37a8] mb-6">Get a Free Quote</h3>
      
      <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
        {/* Temporarily disabled honeypot for testing */}
        {/* <Honeypot onSpamDetected={handleSpamDetected} /> */}
        {/* Name Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">First Name</label>
            <input 
              type="text" 
              name="firstName"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-[#4e37a8] text-white text-sm sm:text-base"
              placeholder="First Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Last Name</label>
            <input 
              type="text" 
              name="lastName"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-[#4e37a8] text-white text-sm sm:text-base"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        
        {/* Contact Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input 
              type="email" 
              name="email"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-[#4e37a8] text-white text-sm sm:text-base"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Phone</label>
            <input 
              type="tel" 
              name="phone"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-[#4e37a8] text-white text-sm sm:text-base"
              placeholder="Phone"
              required
            />
          </div>
        </div>
        
        {/* Location and Waste Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Zip</label>
            <input 
              type="text" 
              name="zipCode"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-[#4e37a8] text-white text-sm sm:text-base"
              placeholder="Zip Code"
              required
            />
          </div>
                             <div>
                     <label className="block text-sm font-medium mb-2">Waste Type</label>
                     <select name="wasteType" className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-[#4e37a8] text-white text-sm sm:text-base" required>
                       <option value="">Select Waste Type</option>
                       <option value="Household Waste">Household Waste</option>
                       <option value="Construction Debris">Construction Debris</option>
                       <option value="Yard Waste">Yard Waste</option>
                       <option value="Recyclable Materials">Recyclable Materials</option>
                       <option value="Concrete">Concrete</option>
                       <option value="Other/Misc">Other/Misc</option>
                     </select>
                   </div>
        </div>
        
        {/* Dumpster Size Selection */}
        <div>
          <label className="block text-sm font-medium mb-3">Dumpster Size</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="radio" name="dumpsterSize" value="15" className="text-[#4e37a8] focus:ring-[#4e37a8]" required />
              <span className="text-xs sm:text-sm">15 Yard Dumpster</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="radio" name="dumpsterSize" value="20" className="text-[#4e37a8] focus:ring-[#4e37a8]" required />
              <span className="text-xs sm:text-sm">20 Yard Dumpster</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="radio" name="dumpsterSize" value="30" className="text-[#4e37a8] focus:ring-[#4e37a8]" required />
              <span className="text-xs sm:text-sm">30 Yard Dumpster</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="radio" name="dumpsterSize" value="10-dirt" className="text-[#4e37a8] focus:ring-[#4e37a8]" required />
              <span className="text-xs sm:text-sm">10 Yard Clean Dirt</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="radio" name="dumpsterSize" value="10-mixed" className="text-[#4e37a8] focus:ring-[#4e37a8]" required />
              <span className="text-xs sm:text-sm">10 Yard Mixed Load</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="radio" name="dumpsterSize" value="12-concrete" className="text-[#4e37a8] focus:ring-[#4e37a8]" required />
              <span className="text-xs sm:text-sm">12 Yard Concrete</span>
            </label>
          </div>
        </div>
        
                         {/* Date Selection */}
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <div>
                     <label className="block text-sm font-medium mb-2">Delivery Date</label>
                     <div className="relative">
                       <input 
                         type="date" 
                         name="deliveryDate"
                         className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-[#4e37a8] text-white text-sm sm:text-base cursor-pointer"
                         required
                         min={new Date().toISOString().split('T')[0]} // Prevent past dates
                       />
                       <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 pointer-events-none" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                       </svg>
                     </div>
                   </div>
                   <div>
                     <label className="block text-sm font-medium mb-2">Pickup Date</label>
                     <div className="relative">
                       <input 
                         type="date" 
                         name="pickupDate"
                         className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-[#4e37a8] text-white text-sm sm:text-base cursor-pointer"
                         required
                         min={new Date().toISOString().split('T')[0]} // Prevent past dates
                       />
                       <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 pointer-events-none" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                       </svg>
                     </div>
                   </div>
                 </div>
        
        {/* Additional Information */}
        <div>
          <label className="block text-sm font-medium mb-2">Additional Information</label>
          <textarea 
            name="additionalInfo"
            rows={4}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-[#4e37a8] text-white text-sm sm:text-base resize-none"
            placeholder="Tell us about your project, special requirements, or any questions you have..."
          ></textarea>
        </div>

        {/* SMS Consent Checkbox */}
        <div className="bg-gray-700 p-4 rounded-lg">
          <div className="flex items-start space-x-3">
            <input 
              type="checkbox" 
              name="smsConsent"
              id="smsConsent"
              className="mt-1 text-[#4e37a8] focus:ring-[#4e37a8] rounded"
              required
            />
            <label htmlFor="smsConsent" className="text-sm text-gray-300 leading-relaxed">
              By checking this box, you agree to receive quote confirmations, delivery updates, service reminders, and promotional offers via SMS from Icon Dumpsters. 
              Message frequency varies. Message and data rates may apply. For help, reply HELP. To opt out, reply STOP. 
              We do not share your information with third parties. See our privacy policy at https://www.icondumpsters.com/privacy-policy and terms and conditions at https://www.icondumpsters.com/terms-of-service.
            </label>
          </div>
        </div>
        
        {/* reCAPTCHA */}
        <ReCaptcha 
          siteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
          onVerify={handleRecaptchaVerify}
          onExpired={handleRecaptchaExpired}
          onError={handleRecaptchaError}
        />
        
        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-[#4e37a8] text-white py-3 sm:py-4 rounded-lg hover:bg-purple-700 transition-colors font-semibold text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Get Free Quote'}
        </button>
      </form>
    </div>
  );
}
