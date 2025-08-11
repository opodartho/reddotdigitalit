import Image from 'next/image';

const TestimonialSection = () => {
  return (
    <div className="bg-[#FEF5F6] font-sans py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header with Title and Arrows */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-4xl font-bold text-gray-800">What Our Client Say</h2>
            <p className="mt-2 text-gray-600">
              Our cutting-edge Modular Data Center solutions enable to protect mission-critical data.
            </p>
          </div>
          <div className="flex space-x-3 mt-2">
            <button
              aria-label="Previous testimonial"
              className="p-2 w-10 h-10 flex items-center justify-center rounded-md border border-gray-300 text-gray-400 hover:bg-gray-100 transition-colors"
            >
              &larr;
            </button>
            <button
              aria-label="Next testimonial"
              className="p-2 w-10 h-10 flex items-center justify-center rounded-md border border-pink-500 text-pink-500 hover:bg-pink-50 transition-colors"
            >
              &rarr;
            </button>
          </div>
        </div>

        {/* Testimonial Card */}
          <div className="flex flex-col md:flex-row items-center">
            
            {/* Left Side: Client Image */}
            <div className="w-full md:w-1/3 flex-shrink-0 mb-8 md:mb-0 md:mr-12">
              <Image
                src="/client-photo.jpg" 
                alt="Kalyanmoy Debnath"
                width={250}
                height={250}
                className="rounded-lg object-cover shadow-md mx-auto"
              />
            </div>

            {/* Right Side: Testimonial Content */}
            <div className="w-full md:w-2/3">
              <blockquote className="text-gray-600 text-lg leading-relaxed">
                "This is to certify that RedDot Digital Limited has successfully completed the following projects for Robi Axiata Limited Digital Customer Management Solution (dCRM) Enterprise Customer Management Solution (eCRM). The work is completed in September 2020. It is to note that RedDot Digital Limited is also currently developing, managing, and maintaining the platform operations of the above-mentioned solutions."
              </blockquote>
              <div className="mt-8">
                <Image
                  src="/robi-logo.png" 
                  alt="Robi Axiata Limited Logo"
                  width={60}
                  height={20}
                  className="mb-4"
                />
                <p className="font-bold text-gray-900 text-lg">
                  Kalyanmoy Debnath
                </p>
                <p className="text-gray-500">
                  Robi Axiata Limited
                </p>
                <p className="text-gray-500 text-sm">
                  Vice President, Digital Service, IoT & VAS, IT
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
   
  );
};

export default TestimonialSection;