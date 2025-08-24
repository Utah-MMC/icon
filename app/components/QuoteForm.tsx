'use client';

import { useState } from 'react';
import ReCaptcha from './ReCaptcha';
import { track } from './analytics';
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

      // Submit to internal API (can forward to CRM/email provider)
      fetch('/api/lead', {
        method: 'POST',
        body: formDataToSend as any,
      }).then(() => {
        // Assume success if no error
        alert('Thank you! Your quote request has been submitted successfully. Please check your email.');
        try { track('form','quote_submit'); } catch {}
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
    <div id="quote-form" className="w-full">
      {/* Form content will be styled by the parent container */}
      
      <div className="bg-gradient-to-r from-[#4e37a8] to-purple-700 rounded-xl shadow-2xl p-6 md:p-8">
        <form className="space-y-5" onSubmit={handleSubmit}>
        {/* Temporarily disabled honeypot for testing */}
        {/* <Honeypot onSpamDetected={handleSpamDetected} /> */}
        {/* Name Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-base font-semibold text-white mb-2 flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              First Name
            </label>
            <input 
              type="text" 
              name="firstName"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4e37a8] focus:border-transparent transition-all duration-300 shadow-sm text-black text-base font-medium placeholder-gray-500"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div>
            <label className="block text-base font-semibold text-white mb-2 flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Last Name
            </label>
            <input 
              type="text" 
              name="lastName"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4e37a8] focus:border-transparent transition-all duration-300 shadow-sm text-black text-base font-medium placeholder-gray-500"
              placeholder="Enter your last name"
              required
            />
          </div>
        </div>
        
        {/* Contact Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-base font-semibold text-white mb-2 flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Email Address
            </label>
            <input 
              type="email" 
              name="email"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4e37a8] focus:border-transparent transition-all duration-300 shadow-sm text-black text-base font-medium placeholder-gray-500"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div>
            <label className="block text-base font-semibold text-white mb-2 flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Phone Number
            </label>
            <input 
              type="tel" 
              name="phone"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4e37a8] focus:border-transparent transition-all duration-300 shadow-sm text-black text-base font-medium placeholder-gray-500"
              placeholder="Enter your phone number"
              required
            />
          </div>
        </div>
        
        {/* Location and Waste Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-base font-semibold text-white mb-2 flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Zip Code
            </label>
            <input 
              type="text" 
              name="zipCode"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4e37a8] focus:border-transparent transition-all duration-300 shadow-sm text-black text-base font-medium placeholder-gray-500"
              placeholder="Enter your zip code"
              required
            />
          </div>
          <div>
            <label className="block text-base font-semibold text-white mb-2 flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Waste Type
            </label>
            <select name="wasteType" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4e37a8] focus:border-transparent transition-all duration-300 shadow-sm text-black text-base font-medium" required>
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
          <label className="block text-base font-semibold text-white mb-3 flex items-center">
            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
            Dumpster Size
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <label className="flex items-center space-x-3 cursor-pointer p-3 border border-gray-200 rounded-lg hover:border-[#4e37a8] hover:bg-[#4e37a8]/5 transition-all duration-300">
              <input type="radio" name="dumpsterSize" value="15" className="text-[#4e37a8] focus:ring-[#4e37a8]" required />
              <span className="text-sm font-medium text-gray-900">15 Yard Dumpster</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer p-3 border border-gray-200 rounded-lg hover:border-[#4e37a8] hover:bg-[#4e37a8]/5 transition-all duration-300">
              <input type="radio" name="dumpsterSize" value="20" className="text-[#4e37a8] focus:ring-[#4e37a8]" required />
              <span className="text-sm font-medium text-gray-900">20 Yard Dumpster</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer p-3 border border-gray-200 rounded-lg hover:border-[#4e37a8] hover:bg-[#4e37a8]/5 transition-all duration-300">
              <input type="radio" name="dumpsterSize" value="30" className="text-[#4e37a8] focus:ring-[#4e37a8]" required />
              <span className="text-sm font-medium text-gray-900">30 Yard Dumpster</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer p-3 border border-gray-200 rounded-lg hover:border-[#4e37a8] hover:bg-[#4e37a8]/5 transition-all duration-300">
              <input type="radio" name="dumpsterSize" value="10-dirt" className="text-[#4e37a8] focus:ring-[#4e37a8]" required />
              <span className="text-sm font-medium text-gray-900">10 Yard Clean Dirt</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer p-3 border border-gray-200 rounded-lg hover:border-[#4e37a8] hover:bg-[#4e37a8]/5 transition-all duration-300">
              <input type="radio" name="dumpsterSize" value="10-mixed" className="text-[#4e37a8] focus:ring-[#4e37a8]" required />
              <span className="text-sm font-medium text-gray-900">10 Yard Mixed Load</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer p-3 border border-gray-200 rounded-lg hover:border-[#4e37a8] hover:bg-[#4e37a8]/5 transition-all duration-300">
              <input type="radio" name="dumpsterSize" value="12-concrete" className="text-[#4e37a8] focus:ring-[#4e37a8]" required />
              <span className="text-sm font-medium text-gray-900">12 Yard Concrete</span>
            </label>
          </div>
        </div>
        
        {/* Date Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-base font-semibold text-white mb-2 flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Delivery Date
            </label>
            <div className="relative">
              <input 
                type="date" 
                name="deliveryDate"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4e37a8] focus:border-transparent transition-all duration-300 shadow-sm text-black text-base font-medium cursor-pointer"
                required
                min={new Date().toISOString().split('T')[0]} // Prevent past dates
              />
              <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div>
            <label className="block text-base font-semibold text-white mb-2 flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Pickup Date
            </label>
            <div className="relative">
              <input 
                type="date" 
                name="pickupDate"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4e37a8] focus:border-transparent transition-all duration-300 shadow-sm text-black text-base font-medium cursor-pointer"
                required
                min={new Date().toISOString().split('T')[0]} // Prevent past dates
              />
              <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Additional Information */}
        <div>
          <label className="block text-base font-semibold text-white mb-2 flex items-center">
            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
            Additional Information
          </label>
          <textarea 
            name="additionalInfo"
            rows={3}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4e37a8] focus:border-transparent transition-all duration-300 shadow-sm text-black text-base font-medium resize-none placeholder-gray-500"
            placeholder="Tell us about your project, special requirements, or any questions you have..."
          ></textarea>
        </div>

        {/* SMS Consent Checkbox */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-5">
          <div className="flex items-start space-x-4">
            <input 
              type="checkbox" 
              name="smsConsent"
              id="smsConsent"
              className="mt-1 text-white focus:ring-white rounded"
              required
            />
            <label htmlFor="smsConsent" className="text-sm text-white leading-relaxed">
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
          className="w-full bg-gradient-to-r from-[#4e37a8] to-purple-600 text-white py-3 rounded-lg hover:from-purple-600 hover:to-[#4e37a8] transition-all duration-300 font-semibold text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {isSubmitting ? 'Submitting...' : 'Get Free Quote'}
        </button>
        </form>
      </div>
    </div>
  );
}
