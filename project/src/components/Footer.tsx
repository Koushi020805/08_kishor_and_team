import React from 'react';
import { Car, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Car className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-2xl font-bold">AutoCustom Pro</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Leading automotive customization specialists, transforming vehicles into masterpieces since 2008. Your vision, our expertise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                <span className="text-white font-bold">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                <span className="text-white font-bold">i</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                <span className="text-white font-bold">t</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Custom Paint Jobs</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Performance Upgrades</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Body Kits & Styling</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Interior Customization</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Engine Modifications</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                (555) 123-CARS
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                info@autocustompro.com
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                1234 Custom Drive, Auto City
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 AutoCustom Pro. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;