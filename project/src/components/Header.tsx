import React, { useState } from 'react';
import { Menu, X, Car, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black/95 backdrop-blur-sm text-white sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Car className="h-8 w-8 text-blue-400" />
            <span className="ml-2 text-xl font-bold">AutoCustom Pro</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
            <a href="#gallery" className="hover:text-blue-400 transition-colors">Gallery</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-sm">
              <Phone className="h-4 w-4 mr-1" />
              <span>(555) 123-CARS</span>
            </div>
            <a 
              href="/login"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors"
            >
              Login
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-blue-400"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95">
              <a href="#home" className="block px-3 py-2 hover:text-blue-400 transition-colors">Home</a>
              <a href="#services" className="block px-3 py-2 hover:text-blue-400 transition-colors">Services</a>
              <a href="#gallery" className="block px-3 py-2 hover:text-blue-400 transition-colors">Gallery</a>
              <a href="#about" className="block px-3 py-2 hover:text-blue-400 transition-colors">About</a>
              <a href="#contact" className="block px-3 py-2 hover:text-blue-400 transition-colors">Contact</a>
              <div className="flex items-center px-3 py-2 text-sm">
                <Phone className="h-4 w-4 mr-1" />
                <span>(555) 123-CARS</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;