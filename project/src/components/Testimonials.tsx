import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Michael Chen',
      location: 'Beverly Hills, CA',
      rating: 5,
      text: 'XIONGS transformed my Tesla Model S beyond recognition. The ceramic coating is incredible - water beads off like magic. Absolutely worth every penny.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
    },
    {
      name: 'Sarah Rodriguez',
      location: 'Manhattan Beach, CA',
      rating: 5,
      text: 'The attention to detail is unmatched. My BMW looks better than the day I bought it. The mobile service was convenient and professional.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
    },
    {
      name: 'David Thompson',
      location: 'Malibu, CA',
      rating: 5,
      text: 'Paint correction on my vintage Porsche was flawless. These guys are true artists. I trust no one else with my collection.',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg'
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'text-orange-500 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const GoogleLogo = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" className="w-6 h-6">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Client <span className="text-[#f5b900]">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients say about our work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              {/* Profile Section */}
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <StarRating rating={testimonial.rating} />

              {/* Quote */}
              <div className="relative">
                <span className="text-6xl text-red-200 font-serif absolute -top-2 -left-2">"</span>
                <p className="text-gray-600 leading-relaxed italic pl-6">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <div className="flex justify-center">
          <div className="bg-white rounded-full px-8 py-4 shadow-md border border-gray-100 flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <GoogleLogo />
              <span className="font-semibold text-gray-900">Google Reviews</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-orange-500 fill-current"
                  />
                ))}
              </div>
              <span className="font-bold text-gray-900">4.9</span>
              <span className="text-gray-500">(127 reviews)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;