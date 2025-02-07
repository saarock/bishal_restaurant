import React from 'react';

const Footer = () => {
  return (
    <div>
      {/* Footer start */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and Tagline */}
            <div>
              <h2 className="text-3xl font-bold text-yellow-500 mb-4">Bishal Lumbini Tandoori Bhojanalaya</h2>
              <p className="text-gray-300">
                Experience the finest dining with the best flavors from around the world.
                Where every meal is a memory.
              </p>
            </div>
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#menu" className="hover:text-yellow-500">Menu</a></li>
                <li><a href="#about" className="hover:text-yellow-500">About Us</a></li>
                <li><a href="#reservations" className="hover:text-yellow-500">Reservations</a></li>
                <li><a href="#contact" className="hover:text-yellow-500">Contact Us</a></li>
              </ul>
            </div>
            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">Contact Us</h3>
              <p className="text-gray-300">
                Chabel<br />
                9768887770<br />
                01-5922928<br />
                {/* info@restaurantname.com */}
              </p>
              <div className="flex space-x-4 mt-4">
                {/* Social Icons */}
                <a href="#" className="text-yellow-400 hover:text-yellow-500"><i className="fab fa-facebook fa-lg"></i></a>
                <a href="#" className="text-yellow-400 hover:text-yellow-500"><i className="fab fa-twitter fa-lg"></i></a>
                <a href="#" className="text-yellow-400 hover:text-yellow-500"><i className="fab fa-instagram fa-lg"></i></a>
              </div>
            </div>
          </div>
          {/* Bottom Section */}
          <div className="mt-8 border-t border-gray-700 pt-4 text-center">
            <p className="text-gray-400 text-sm">© 2024 Lumbini Tandoori Bhojanalaya. All rights reserved.</p>
            <p className="text-gray-400 text-sm">
              Designed and developed by <a href="https://aayush-theta.vercel.app/" className="text-yellow-500 hover:text-yellow-600" target="_blank" rel="noopener noreferrer">Saarock</a> and
              <a href="https://www.instagram.com/pratiksinghrathour/" className="text-yellow-500 hover:text-yellow-600" target="_blank" rel="noopener noreferrer">Pratik</a>
            </p>
          </div>
        </div>
      </footer>
      {/* Footer end */}
    </div>
  );
};

export default Footer;
