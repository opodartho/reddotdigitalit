'use client';
import { useState } from 'react';
import Image from 'next/image';

export const TabButtons = () => {
  const [activeTab, setActiveTab] = useState<'about' | 'achievement'>('about');

  // Card component for achievements
  const AchievementCard = ({ title, value, description, icon, bgGradient}) => (
    <div className="flex flex-col items-center p-6 bg from-blue-100 via-pink-100 to-purple-100 rounded-xl shadow-md text-center ${bgGradient}">
      <div className="mb-4 text-3xl">{icon}</div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-5xl font-extrabold mb-4">{value}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );

  return (
    <div className="mt-6">
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
      {/* Tab content section */}
      {activeTab === 'about' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8">
          <div className="text-left">
            <h2 className="text-2xl font-semibold mb-4 mt-10 ml-5">
              We Are Your Partner in Innovation
            </h2>
            <h3 className="text-3xl font-semibold mb-4 ml-5">
              Adapting to Your Needs for Collaborative Excellence.
            </h3>
            <p className="mb-4 ml-5">
              RedDot Digital Limited is a 100% Robi Axiata Limited owned subsidiary offering IT & Digital solutions.
              RedDot Digital Limited is currently setting up its own office in Government’s IT Park in Kaliakoir, Gazipur, Dhaka.
              We aim to support the Government of Bangladesh in meeting its digital goals in the country by offering cutting-edge,
              home-grown, cost-optimized IT applications, Cloud DC, IoT solutions among others.
            </p>
            <button className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 ml-5">
              Read More →
            </button>
          </div>
          <div className="grid grid-cols-2">
            <Image
              src="/images/speaker.jpg"
              alt="Speaker"
              width={1000}
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
      )}

      {activeTab === 'achievement' && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 p-4">
          <AchievementCard
            icon="❄️" // You can use an icon component or an emoji here
            title="Professionals"
            value="200+"
            description="Our cutting-edge Modular Data Center solutions enable to protect mission-critical data."
            bgGradient= "bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
          />
          <AchievementCard
            icon="⚙️"
            title="Tech Stack"
            value="80+"
            description="Our cutting-edge Modular Data Center solutions enable to protect mission-critical data."
          />
          <AchievementCard
            icon="📋"
            title="Projects"
            value="30+"
            description="Our cutting-edge Modular Data Center solutions enable to protect mission-critical data."
          />
          <AchievementCard
            icon="⭐"
            title="Experience"
            value="7 Years"
            description="Our cutting-edge Modular Data Center solutions enable to protect mission-critical data."
          />
        </div>
      )}
    </div>
  );
};