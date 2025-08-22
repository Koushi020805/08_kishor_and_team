import React from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to transform your vehicle? Contact us today for a consultation and let's discuss your dream customization project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-blue-400 mr-4" />
                <div>
                  <div className="text-white font-semibold">Phone</div>
                  <div className="text-gray-400">(555) 123-CARS (2277)</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-blue-400 mr-4" />
                <div>
                  <div className="text-white font-semibold">Email</div>
                  <div className="text-gray-400">info@autocustompro.com</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-blue-400 mr-4" />
                <div>
                  <div className="text-white font-semibold">Address</div>
                  <div className="text-gray-400">1234 Custom Drive, Auto City, AC 12345</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-blue-400 mr-4" />
                <div>
                  <div className="text-white font-semibold">Business Hours</div>
                  <div className="text-gray-400">
                    Mon-Fri: 8:00 AM - 6:00 PM<br />
                    Sat: 9:00 AM - 4:00 PM<br />
                    Sun: Closed
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-xl font-bold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                  <span className="text-white font-bold">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                  <span className="text-white font-bold">i</span>
                </a>
                <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                  <span className="text-white font-bold">t</span>
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="(555) 123-4567"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Vehicle Information</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Year, Make, Model"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Project Details</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your customization project..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-semibold transition-colors flex items-center justify-center"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;