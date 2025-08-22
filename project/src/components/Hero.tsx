import React from 'react';
import { ArrowRight, Zap, Shield, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop")'
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Transform Your
          <span className="block text-blue-400">Dream Car</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
          Premium automotive customization services. From performance upgrades to complete visual transformations, we bring your vision to life.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300">
            View Portfolio
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-3">
            <Zap className="h-8 w-8 text-blue-400" />
            <div>
              <div className="text-2xl font-bold">500+</div>
              <div className="text-gray-400">Cars Customized</div>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Shield className="h-8 w-8 text-blue-400" />
            <div>
              <div className="text-2xl font-bold">15+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Award className="h-8 w-8 text-blue-400" />
            <div>
              <div className="text-2xl font-bold">100%</div>
              <div className="text-gray-400">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;