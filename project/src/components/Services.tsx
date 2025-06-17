import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Shield, Droplets, Palette, Wrench, Gem } from 'lucide-react';

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const services = [
    {
      icon: Sparkles,
      title: 'Complete Detailing',
      description: 'Full interior and exterior transformation with comprehensive wash, wax, interior cleaning, leather conditioning, and tire shine.',
      price: 'Starting at $149',
      image: 'https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg'
    },
    {
      icon: Shield,
      title: 'Ceramic Coating',
      description: 'Professional-grade ceramic coating that provides years of protection against UV rays, water spots, and contaminants.',
      price: 'Starting at $599',
      image: 'https://images.pexels.com/photos/1236678/pexels-photo-1236678.jpeg'
    },
    {
      icon: Droplets,
      title: 'Premium Wash',
      description: 'Gentle hand washing using the two-bucket method with premium soaps and microfiber towels for optimal care.',
      price: 'Starting at $49',
      image: 'https://images.pexels.com/photos/3862618/pexels-photo-3862618.jpeg'
    },
    {
      icon: Palette,
      title: 'Paint Correction',
      description: 'Multi-stage polishing process to eliminate imperfections and restore your paint to showroom condition.',
      price: 'Starting at $299',
      image: 'https://images.pexels.com/photos/3354365/pexels-photo-3354365.jpeg'
    },
    {
      icon: Wrench,
      title: 'Scratch Removal',
      description: 'Professional scratch removal techniques for both minor surface scratches and deeper paint damage.',
      price: 'Starting at $99',
      image: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg'
    },
    {
      icon: Gem,
      title: 'Paint Polishing',
      description: 'High-quality polishing compounds and techniques to achieve a deep, glossy finish that turns heads.',
      price: 'Starting at $199',
      image: 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Check if section is in view
      const sectionInView = scrollY + windowHeight > sectionTop && scrollY < sectionTop + sectionHeight;

      if (sectionInView) {
        const scrollProgress = Math.max(0, Math.min(1, (scrollY + windowHeight - sectionTop - 200) / (sectionHeight - 400)));
        const totalCards = services.length;
        const cardsToShow = Math.floor(scrollProgress * totalCards) + 1;
        
        const newVisibleCards = Array.from({ length: Math.min(cardsToShow, totalCards) }, (_, i) => i);
        setVisibleCards(newVisibleCards);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [services.length]);

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-white relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-[#f5b900]">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From basic washes to premium ceramic coatings, we offer comprehensive automotive care services 
            tailored to your vehicle's needs.
          </p>
        </div>

        {/* Stacking Cards Container */}
        <div className="relative max-w-4xl mx-auto" style={{ height: `${services.length * 120}vh` }}>
          {services.map((service, index) => {
            const isVisible = visibleCards.includes(index);
            const stackPosition = visibleCards.length - 1 - visibleCards.indexOf(index);
            const isTopCard = visibleCards.indexOf(index) === visibleCards.length - 1;
            
            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`sticky transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  top: `${120 + stackPosition * 15}px`, // Start at 120px from top (below nav) and stack upward
                  transform: isVisible 
                    ? `translateY(0px) scale(${1 - stackPosition * 0.03})` 
                    : 'translateY(100px) scale(0.9)',
                  zIndex: 40 + index, // Keep z-index below navigation (which is typically 50)
                }}
              >
                <div className={`bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 mx-4 transition-all duration-500 ${
                  !isTopCard && isVisible ? 'brightness-95' : ''
                }`}>
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image Side */}
                    <div className="relative h-64 md:h-auto overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                      
                      {/* Icon Overlay */}
                      <div className="absolute top-6 left-6">
                        <div className="w-16 h-16 bg-[#f5b900] rounded-full flex items-center justify-center shadow-lg">
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Price Badge */}
                      <div className="absolute bottom-6 right-6">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                          <span className="text-[#f5b900] font-bold text-lg">
                            {service.price}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        {service.title}
                      </h3>
                      
                      <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        {service.description}
                      </p>

                      <div className="flex justify-start">
                        <button className="bg-[#f5b900] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#e6a800] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#f5b900]/5 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#f5b900]/10 rounded-full translate-y-12 -translate-x-12"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress Indicator */}
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 hidden lg:block" style={{ zIndex: 45 }}>
          <div className="flex flex-col space-y-3">
            {services.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  visibleCards.includes(index)
                    ? 'bg-[#f5b900] scale-125'
                    : 'bg-gray-300'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;