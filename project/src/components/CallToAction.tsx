import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const CallToAction = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3862618/pexels-photo-3862618.jpeg"
          alt="Car being detailed"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Make Your Car <span className="text-[#f5b900]">Shine?</span>
          </h2>
          
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Book your mobile detailing service today and experience the convenience of professional 
            car care at your doorstep.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button 
              onClick={scrollToContact}
              className="group bg-[#f5b900] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#e6a800] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <a 
              href="tel:2145550123"
              className="group border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-white">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-2xl font-bold text-[#f5b900] mb-2">Same Day</h3>
              <p className="text-gray-200">Service Available</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-2xl font-bold text-[#f5b900] mb-2">100%</h3>
              <p className="text-gray-200">Satisfaction Guarantee</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-2xl font-bold text-[#f5b900] mb-2">5+ Years</h3>
              <p className="text-gray-200">Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;