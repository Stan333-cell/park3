import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Highland Park',
      rating: 5,
      text: 'Absolutely amazing service! They came right to my office and my car looked brand new when they finished. The attention to detail was incredible.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
    },
    {
      name: 'Michael Chen',
      location: 'University Park',
      rating: 5,
      text: 'I\'ve used many detailing services before, but Park Cities Mobile Detail is in a league of their own. Professional, punctual, and the results speak for themselves.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
    },
    {
      name: 'Jennifer Davis',
      location: 'Preston Hollow',
      rating: 5,
      text: 'The ceramic coating service was worth every penny. My car still looks amazing months later, and the water just beads right off. Highly recommend!',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg'
    },
    {
      name: 'Robert Martinez',
      location: 'Lakewood',
      rating: 5,
      text: 'They removed scratches I thought were permanent and brought back the original shine of my paint. The mobile service is so convenient too.',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg'
    },
    {
      name: 'Lisa Thompson',
      location: 'Plano',
      rating: 5,
      text: 'Outstanding customer service and incredible results. They treated my car like it was their own. Will definitely be using them again.',
      image: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg'
    },
    {
      name: 'David Wilson',
      location: 'Frisco',
      rating: 5,
      text: 'Professional team, fair pricing, and exceptional quality. My luxury vehicle has never looked better. Five stars all the way!',
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg'
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'text-[#f5b900] fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-[#f5b900]">Customers</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers across DFW have to say 
            about our mobile detailing services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 left-6">
                <div className="w-8 h-8 bg-[#f5b900] rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="mb-4 pt-2">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Happy Customers
            </h3>
            <p className="text-gray-600 mb-6">
              Experience the same level of service and quality that has earned us hundreds of 5-star reviews.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#f5b900] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#e6a800] transition-colors duration-200"
            >
              Book Your Service
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;