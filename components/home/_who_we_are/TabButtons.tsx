'use client';
import { useState } from 'react';
export const TabButtons = ({about, achievement}) => {
  const [activeTab, setActiveTab] = useState<'about' | 'achievement'>('about');

  return (
    <div className="mt-6">
      {/* Tab Buttons */}
      <div className="flex justify-center">
        <div className="overflow-hidden rounded-xl border">
          {/* About Us Tab */}
          <button
            onClick={() => setActiveTab('about')}
            className={`border-r px-6 py-2 font-semibold ${activeTab === 'about'
              ? 'rounded-2xl border-t-2 border-b-2 border-l-2 border-red-500 bg-red-50 text-red-600'
              : 'border border-gray-300 bg-white text-gray-500'
              }`}
          >
            About Us
          </button>

          {/* Achievement Tab */}
          <button
            onClick={() => setActiveTab('achievement')}
            className={`px-6 py-2 font-semibold ${activeTab === 'achievement'
              ? 'rounded-2xl border-t-2 border-r-2 border-b-2 border-red-500 bg-red-50 text-red-600'
              : 'border-gray-300 bg-white text-gray-500'
              }`}
          >
            Achievement
          </button>
        </div>
      </div>
      {activeTab === 'about' && about}
      {/* Achievement Tab Content */}
      {activeTab === 'achievement' && achievement}
    </div>
  );
};
