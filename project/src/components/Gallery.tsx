import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const projects = [
    {
      image: 'https://images.pexels.com/photos/3593921/pexels-photo-3593921.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Lamborghini Huracán Custom',
      category: 'Supercar Customization'
    },
    {
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'BMW M3 Performance Build',
      category: 'Performance Tuning'
    },
    {
      image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Ford Mustang GT Custom',
      category: 'Muscle Car Build'
    },
    {
      image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Porsche 911 Turbo S',
      category: 'Luxury Sports Car'
    },
    {
      image: 'https://images.pexels.com/photos/1429775/pexels-photo-1429775.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Mercedes AMG GT',
      category: 'German Engineering'
    },
    {
      image: 'https://images.pexels.com/photos/1637859/pexels-photo-1637859.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Audi R8 V10 Plus',
      category: 'Supercar Excellence'
    },
    {
      image: 'https://images.pexels.com/photos/2882234/pexels-photo-2882234.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Chevrolet Corvette C8',
      category: 'American Supercar'
    },
    {
      image: 'https://images.pexels.com/photos/1545920/pexels-photo-1545920.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'McLaren 720S Custom',
      category: 'British Excellence'
    },
    {
      image: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Ferrari 488 GTB',
      category: 'Italian Masterpiece'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Work
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our portfolio of stunning automotive transformations. Each project showcases our commitment to excellence and attention to detail.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(index)}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-bold text-lg">{project.title}</h3>
                  <p className="text-blue-400 text-sm">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <X className="h-8 w-8" />
          </button>
          
          <button 
            onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : projects.length - 1)}
            className="absolute left-4 text-white hover:text-gray-300 z-10"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          
          <button 
            onClick={() => setSelectedImage(selectedImage < projects.length - 1 ? selectedImage + 1 : 0)}
            className="absolute right-4 text-white hover:text-gray-300 z-10"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
          
          <div className="max-w-4xl max-h-[80vh]">
            <img 
              src={projects[selectedImage].image} 
              alt={projects[selectedImage].title}
              className="max-w-full max-h-full object-contain"
            />
            <div className="text-center mt-4">
              <h3 className="text-white font-bold text-xl">{projects[selectedImage].title}</h3>
              <p className="text-blue-400">{projects[selectedImage].category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;