import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryItems = [
    {
      before: 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg',
      after: 'https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg',
      title: 'Complete Exterior Restoration',
      description: 'Full exterior detailing with premium finish'
    },
    {
      before: 'https://images.pexels.com/photos/3862618/pexels-photo-3862618.jpeg',
      after: 'https://images.pexels.com/photos/1236678/pexels-photo-1236678.jpeg',
      title: 'Paint Correction & Polish',
      description: 'Removing years of swirl marks and scratches'
    },
    {
      before: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg',
      after: 'https://images.pexels.com/photos/3354365/pexels-photo-3354365.jpeg',
      title: 'Ceramic Coating Application',
      description: 'Premium protection with stunning shine'
    },
    {
      before: 'https://images.pexels.com/photos/3862618/pexels-photo-3862618.jpeg',
      after: 'https://images.pexels.com/photos/3354365/pexels-photo-3354365.jpeg',
      title: 'Interior Deep Cleaning',
      description: 'Leather conditioning and fabric protection'
    },
    {
      before: 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg',
      after: 'https://images.pexels.com/photos/1236678/pexels-photo-1236678.jpeg',
      title: 'Headlight Restoration',
      description: 'Crystal clear visibility restored'
    }
  ];

  const BeforeAfterSlider = ({ item }: { item: any }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDragging) return;
      
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      setSliderPosition(Math.max(0, Math.min(100, percentage)));
    };

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    return (
      <div 
        className="relative overflow-hidden rounded-2xl cursor-grab active:cursor-grabbing group h-96 md:h-[500px]"
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* After Image (Background) */}
        <img
          src={item.after}
          alt={`${item.title} - After`}
          className="w-full h-full object-cover"
        />
        
        {/* Before Image (Overlay) */}
        <div 
          className="absolute top-0 left-0 h-full overflow-hidden transition-all duration-100"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={item.before}
            alt={`${item.title} - Before`}
            className="w-full h-full object-cover"
            style={{ width: `${100 * (100 / sliderPosition)}%` }}
          />
        </div>

        {/* Slider Line */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg transition-all duration-100"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-200">
            <div className="flex space-x-0.5">
              <ChevronLeft className="w-3 h-3 text-gray-600" />
              <ChevronRight className="w-3 h-3 text-gray-600" />
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-6 left-6">
          <div className="bg-gray-800/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
            Before
          </div>
        </div>
        <div className="absolute top-6 right-6">
          <div className="bg-[#f5b900]/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
            After
          </div>
        </div>

        {/* Bottom Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
          <h3 className="text-white text-2xl font-bold mb-2">
            {item.title}
          </h3>
          <p className="text-gray-200 text-lg">
            {item.description}
          </p>
        </div>
      </div>
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="gallery" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900">Transformation</span>{' '}
            <span className="text-[#f5b900]">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            See the remarkable difference our precision detailing makes. Every vehicle tells a 
            story of transformation.
          </p>
          <p className="text-[#f5b900] text-lg font-medium">
            <span className="text-[#f5b900]">Drag the slider</span> <span className="text-gray-600">to reveal the stunning transformation</span>
          </p>
        </div>

        {/* Main Gallery Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Gallery Slider */}
          <div className="relative">
            <BeforeAfterSlider item={galleryItems[currentSlide]} />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 text-gray-700 hover:text-[#f5b900] z-10 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 text-gray-700 hover:text-[#f5b900] z-10 shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dot Navigation */}
          <div className="flex justify-center mt-8 space-x-3">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-[#f5b900] scale-125'
                    : 'bg-gray-400 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* View Gallery Button */}
        <div className="text-center mt-16">
          <button className="bg-[#f5b900] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#e6a800] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            View Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;