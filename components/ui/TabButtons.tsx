'use client';
import { useState } from 'react';
import Achievement from '../Achievement';
import About from '../About';

export const TabButtons = () => {
  const [activeTab, setActiveTab] = useState<'about' | 'achievement'>('about');

  return (
    <div className="mt-6">
      {/* Tab Buttons */}
      <div className="flex justify-center">
        <div className="border rounded-xl overflow-hidden">
          {/* About Us Tab */}
          <button
            onClick={() => setActiveTab('about')}
            className={`px-6 py-2 font-semibold border-r ${
             activeTab === 'about'
           ? 'text-red-600 bg-red-50 border-red-500 border-t-2 border-l-2 rounded-2xl border-b-2'
           : 'text-gray-500 bg-white border border-gray-300'
            }`}
          >
            About Us
          </button>

          {/* Achievement Tab */}
          <button
            onClick={() => setActiveTab('achievement')}
            className={`px-6 py-2 font-semibold ${
              activeTab === 'achievement'
                ? 'text-red-600 bg-red-50 border-red-500 border-t-2 border-r-2 rounded-2xl border-b-2 rounded-l-0'
                : 'text-gray-500 bg-white border-gray-300'
            }`}
          >
            Achievement
          </button>
        </div>
      </div>
      {activeTab === 'about' && <About activeTab={activeTab} />}
      {/* Achievement Tab Content */}
      {activeTab === 'achievement' && <Achievement activeTab={activeTab} />}
    </div>
  );
};
