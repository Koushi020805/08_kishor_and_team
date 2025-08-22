import React from 'react';
import { Users, Award, Clock, Wrench } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '50+', label: 'Expert Technicians' },
    { icon: Award, number: '500+', label: 'Projects Completed' },
    { icon: Clock, number: '15+', label: 'Years in Business' },
    { icon: Wrench, number: '10k+', label: 'Parts Installed' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Crafting Automotive Excellence Since 2008
            </h2>
            <p className="text-lg text-gray-400 mb-6">
              AutoCustom Pro has been at the forefront of automotive customization, transforming ordinary vehicles into extraordinary machines. Our team of skilled technicians and designers bring decades of combined experience to every project.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              From subtle modifications to complete ground-up builds, we use only the finest materials and cutting-edge techniques to ensure your vision becomes reality. Our state-of-the-art facility is equipped with the latest tools and technology to handle any customization challenge.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <Icon className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-white">{stat.number}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Our workshop"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-lg"></div>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Why Choose AutoCustom Pro?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Premium Quality</h4>
              <p className="text-gray-400">We use only the highest quality parts and materials, ensuring your customization lasts for years to come.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Expert Team</h4>
              <p className="text-gray-400">Our certified technicians have extensive experience working on all makes and models of vehicles.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Timely Delivery</h4>
              <p className="text-gray-400">We respect your time and deliver projects on schedule without compromising on quality.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;