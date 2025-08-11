import React from 'react';
import Image from 'next/image';

interface AboutProps {
  activeTab: 'about' | 'achievement';
}

const About: React.FC<AboutProps> = ({ activeTab }) => {
  if (activeTab !== 'about') return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-15 px-10">
      {/* Left text section */}
      <div className="text-left">
        <h2 className="text-2xl mb-6">
          We Are Your Partner in Innovation
        </h2>
        <h3 className="text-3xl font-semibold mb-7">
          Adapting to Your Needs for Collaborative Excellence.
        </h3>
        <p className="mb-6 leading-relaxed">
          RedDot Digital Limited is a 100% Robi Axiata Limited owned subsidiary offering IT & Digital solutions.
          RedDot Digital Limited is currently setting up its own office in Government’s IT Park in Kaliakoir, Gazipur, Dhaka.
          We aim to support the Government of Bangladesh in meeting its digital goals in the country by offering cutting-edge,
          home-grown, cost-optimized IT applications, Cloud DC, IoT solutions among others.
        </p>
        <button className="px-8 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700">
          Read More →
        </button>
      </div>

      {/* Right images section */}
      <div className="grid grid-rows-[auto_auto] gap-4 pt-2">
        {/* Large image on top */}
        <div className="row-span-1">
          <Image
            src="/group2.jpg"
            alt="Group"
            width={200}
            height={250}
            className="rounded-lg object-cover w-full h-40"
          />
        </div>

        {/* Two smaller images side by side */}
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/speaker.jpg"
            alt="Speaker"
            width={200}
            height={250}  
            className="rounded-lg object-cover w-full h-40"
          />
          <Image
            src="/discussion.jpg"
            alt="Event"
            width={200}
            height={250} 
            className="rounded-lg object-cover w-full h-40"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
