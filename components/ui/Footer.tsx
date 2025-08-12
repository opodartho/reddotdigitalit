import Image from 'next/image';
const Footer = () => {
  return (
    <footer className="bg-[#E9E8F8] border-t-4">
      <div className="container mx-auto px-6 py-12">
        {/* Logo Section */}
        <div className="flex justify-center mb-12">
      
          <Image
            src="/redDot-logo.png"
            alt="RedDot Digital - Your Digital Transformation Partner"
            width={110}
            height={37.72}
            priority // Preloads the logo since it's likely visible on page load
          />
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-800">
          {/* Who we are */}
          <div>
            <h3 className="text-xl font-bold mb-4">Who we are</h3>
            <p className="text-gray-600 leading-relaxed">
              RedDot Digital Limited is a 100% subsidiary company of Robi Axiata Limited, the second
              largest mobile network operator in Bangladesh offering IT & Digital solutions.
            </p>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-red-600 transition-colors">About Company</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">News</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Area of operations */}
          <div>
            <h3 className="text-xl font-bold mb-4">Area of operations</h3>
            <ul className="space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-red-600 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Privacy Notice</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <address className="not-italic text-gray-600 leading-relaxed">
              57 & 57/A, Uday Tower (15th Floor),<br />
              Gulshan 1, Gulshan Avenue, Dhaka 1212,<br />
              Bangladesh
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
