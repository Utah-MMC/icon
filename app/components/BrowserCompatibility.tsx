'use client';

import { useEffect, useState } from 'react';

export default function BrowserCompatibility() {
  const [isCompatible, setIsCompatible] = useState(true);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const checkCompatibility = () => {
      const userAgent = navigator.userAgent;
      const isIE = /MSIE|Trident/.test(userAgent);
      const isOldChrome = /Chrome\/([0-9]+)/.test(userAgent) && parseInt(RegExp.$1) < 80;
      const isOldFirefox = /Firefox\/([0-9]+)/.test(userAgent) && parseInt(RegExp.$1) < 75;
      const isOldSafari = /Safari\/([0-9]+)/.test(userAgent) && parseInt(RegExp.$1) < 13;

      // Check for required features
      const hasFetch = typeof fetch !== 'undefined';
      const hasPromise = typeof Promise !== 'undefined';
      const hasES6 = typeof Symbol !== 'undefined';
      const hasLocalStorage = typeof localStorage !== 'undefined';

      const isIncompatible = isIE || isOldChrome || isOldFirefox || isOldSafari || 
                            !hasFetch || !hasPromise || !hasES6 || !hasLocalStorage;

      if (isIncompatible) {
        setIsCompatible(false);
        setShowWarning(true);
      }
    };

    checkCompatibility();
  }, []);

  if (!isCompatible && showWarning) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-md w-full p-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 19.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Browser Compatibility Issue</h2>
            <p className="text-gray-600 mb-4">
              Your browser may not be fully compatible with our website. For the best experience, please use:
            </p>
            <ul className="text-left text-sm text-gray-600 mb-6 space-y-1">
              <li>• Chrome 80+ or Firefox 75+ or Safari 13+</li>
              <li>• Enable JavaScript</li>
              <li>• Allow cookies and local storage</li>
            </ul>
            <div className="space-y-2">
              <button
                onClick={() => setShowWarning(false)}
                className="w-full bg-[#4e37a8] text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Continue Anyway
              </button>
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Reload Page
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
