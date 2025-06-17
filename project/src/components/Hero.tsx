import React from 'react';
import { Star, MapPin, Clock } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg"
          alt="Professional car detailing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            That New Car Feeling?{' '} 
            <span className="text-[#f5b900]">We Bring It to You.</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Premium Mobile Detailing for Busy Drivers Who Love a Clean Ride
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button 
              onClick={scrollToContact}
              className="bg-[#f5b900] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#e6a800] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book Now
            </button>
            <a 
              href="tel:2145550123"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              (214) 555-0123
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-[#f5b900] fill-current" />
              <span>500+ Happy Customers</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-[#f5b900]" />
              <span>DFW Metro Area</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-[#f5b900]" />
              <span>Same Day Service</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;