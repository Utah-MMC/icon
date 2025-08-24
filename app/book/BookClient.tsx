"use client";

import { useState } from 'react';
import { track } from '../components/track';

type Step = 1 | 2 | 3 | 4;

export default function BookClient() {
  const [step, setStep] = useState<Step>(1);
  const [size, setSize] = useState<string>('');
  const [delivery, setDelivery] = useState<string>('');
  const [pickup, setPickup] = useState<string>('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const canNext1 = Boolean(size);
  const canNext2 = Boolean(delivery && pickup);
  const canNext3 = Boolean(name && phone && address);

  async function submit() {
    await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        dumpsterSize: size,
        deliveryDate: delivery,
        pickupDate: pickup,
        firstName: name,
        phone,
        additionalInfo: `Booking request via /book. Address: ${address}`,
        source: 'BookNow',
      }),
    });
    setStep(4);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Book Your Dumpster</h1>
        <div className="mb-6 text-sm text-gray-600">Step {step} of 4</div>

        {step === 1 && (
          <div className="bg-white rounded-xl shadow border p-6">
            <h2 className="text-xl font-semibold mb-4">Select Dumpster Size</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {['15', '20', '30'].map((s) => (
                <label
                  key={s}
                  className={`border rounded-lg p-4 cursor-pointer ${
                    size === s ? 'border-[#4e37a8] bg-purple-50' : 'border-gray-200'
                  }`}
                >
                  <input
                    type="radio"
                    name="size"
                    className="sr-only"
                    checked={size === s}
                    onChange={() => setSize(s)}
                  />
                  <div className="font-semibold text-gray-900">{s} Yard</div>
                  <div className="text-xs text-gray-600">Popular choice</div>
                </label>
              ))}
            </div>
            <div className="mt-6 flex justify-end">
              <button
                disabled={!canNext1}
                onClick={() => {
                  setStep(2);
                  try {
                    track('funnel', 'book_step_1_next', { size });
                  } catch {}
                }}
                className="px-5 py-2 rounded-lg bg-[#4e37a8] text-white disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="bg-white rounded-xl shadow border p-6">
            <h2 className="text-xl font-semibold mb-4">Choose Dates</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Date</label>
                <input
                  type="date"
                  value={delivery}
                  onChange={(e) => setDelivery(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Date</label>
                <input
                  type="date"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-between">
              <button onClick={() => setStep(1)} className="px-5 py-2 rounded-lg border">
                Back
              </button>
              <button
                disabled={!canNext2}
                onClick={() => {
                  setStep(3);
                  try {
                    track('funnel', 'book_step_2_next', { delivery, pickup });
                  } catch {}
                }}
                className="px-5 py-2 rounded-lg bg-[#4e37a8] text-white disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="bg-white rounded-xl shadow border p-6">
            <h2 className="text-xl font-semibold mb-4">Your Info</h2>
            <div className="space-y-3">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                className="w-full border rounded-lg px-3 py-2"
              />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
                className="w-full border rounded-lg px-3 py-2"
              />
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Delivery address"
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>
            <div className="mt-6 flex justify-between">
              <button onClick={() => setStep(2)} className="px-5 py-2 rounded-lg border">
                Back
              </button>
              <button
                disabled={!canNext3}
                onClick={async () => {
                  try {
                    track('form', 'book_submit', { size, delivery, pickup });
                  } catch {}
                  await submit();
                }}
                className="px-5 py-2 rounded-lg bg-[#4e37a8] text-white disabled:opacity-50"
              >
                Submit
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="bg-white rounded-xl shadow border p-6 text-center">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">Request Received</h2>
            <p className="text-gray-700">
              An Icon expert will get back to you, usually within 30 minutes. For immediate help call{' '}
              <a href="tel:801-918-6000" className="text-[#4e37a8] underline">
                (801) 918‑6000
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
