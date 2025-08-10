'use client';
import { useState } from 'react';

export const TabButtons = () => {
  const [activeTab, setActiveTab] = useState<'about' | 'achievement'>('about');

  return (
    <div className="flex items-center justify-center mt-6">
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
  );
}
