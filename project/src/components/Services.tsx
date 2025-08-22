import React from 'react';
import { Palette, Zap, Wrench, Sparkles, Settings, Car } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Custom Paint Jobs',
      description: 'From subtle color changes to wild artistic designs, we create stunning paint finishes that make your car unique.',
      features: ['Metallic & Pearl finishes', 'Custom color matching', 'Airbrushing & graphics', 'Protective clear coats']
    },
    {
      icon: Zap,
      title: 'Performance Upgrades',
      description: 'Boost your car\'s power and handling with professional performance modifications and tuning.',
      features: ['Engine tuning', 'Exhaust systems', 'Suspension upgrades', 'Brake enhancements']
    },
    {
      icon: Car,
      title: 'Body Kits & Styling',
      description: 'Transform your car\'s appearance with aerodynamic body kits, spoilers, and styling components.',
      features: ['Front & rear bumpers', 'Side skirts & spoilers', 'Hood & fender flares', 'Custom fabrication']
    },
    {
      icon: Sparkles,
      title: 'Interior Customization',
      description: 'Luxury interior upgrades including custom upholstery, trim, and modern technology integration.',
      features: ['Leather & Alcantara', 'Custom stitching', 'Carbon fiber trim', 'Audio system upgrades']
    },
    {
      icon: Settings,
      title: 'Engine Modifications',
      description: 'Professional engine work including turbocharging, supercharging, and internal modifications.',
      features: ['Forced induction', 'Internal engine work', 'ECU tuning', 'Fuel system upgrades']
    },
    {
      icon: Wrench,
      title: 'Maintenance & Repair',
      description: 'Complete automotive services to keep your custom car running perfectly and looking its best.',
      features: ['Regular maintenance', 'Diagnostic services', 'Bodywork repair', 'Paint correction']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive automotive customization services delivered by expert technicians using cutting-edge techniques and premium materials.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <Icon className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                
                <p className="text-gray-400 mb-4">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors">
                  Learn More
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;