import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">HotelHub</h3>
            <p className="text-gray-400">
              Your trusted partner for seamless hotel bookings and management.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>+91 1234567890</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>support@hotelhub.com</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>123 Business District, City</span>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-blue-400">About Us</a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-blue-400">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms" className="hover:text-blue-400">Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 HotelHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;