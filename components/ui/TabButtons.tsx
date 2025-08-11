'use client';
import { useState } from 'react';
import Image from 'next/image'

export const TabButtons = () => {
  const [activeTab, setActiveTab] = useState<'about' | 'achievement'>('about');

  return (
    <div className= "mt-6">
    <div className="flex justify-center">
      <div className="border rounded-xl overflow-hidden">
        {/* About Us Tab */}
        <button
          onClick={() => setActiveTab('about')}
          className={`px-6 py-2 font-semibold border-r ${
            activeTab === 'about'
              ? 'text-red-600 bg-red-50 border-red-500'
              : 'text-gray-500 bg-white border-gray-300'
          }`}
        >
          About Us
        </button>

        {/* Achievement Tab */}
        <button
          onClick={() => setActiveTab('achievement')}
          className={`px-6 py-2 font-semibold ${
            activeTab === 'achievement'
              ? 'text-red-600 bg-red-50 border-red-500'
              : 'text-gray-500 bg-white border-gray-300'
          }`}
        >
          Achievement
        </button>
        </div>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left column: text */}
        <div className="text-left">
          {activeTab === 'about' && (
            <>
              <h2 className="text-2xl font-semibold mb-4 mt-10">
                We Are Your Partner in Innovation
              </h2>
              <h3 className="text-3xl font-semibold mb-4">
                Adapting to Your Needs for Collaborative Excellence.
              </h3>
              <p className="mb-4">
                RedDot Digital Limited is a 100% Robi Axiata Limited owned subsidiary offering IT & Digital solutions.
                RedDot Digital Limited is currently setting up its own office in Government’s IT Park in Kaliakoir, Gazipur, Dhaka.
                We aim to support the Government of Bangladesh in meeting its digital goals in the country by offering cutting-edge,
                home-grown, cost-optimized IT applications, Cloud DC, IoT solutions among others.
              </p>
              <button className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700">
                Read More →
              </button>
            </>
          )}

          {activeTab === 'achievement' && (
            <>
              <h2 className="text-2xl font-bold mb-4">Our Achievements</h2>
              <p>We have achieved multiple milestones in digital innovation and IT services...</p>
            </>
          )}
        </div>

        {/* Right column: images */}
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/speaker.jpg"
              alt="Speaker"
              width={300}
              height={200}
              className="rounded-lg"
            />
            <Image
              src="/images/event.jpg"
              alt="Event"
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
  );
};