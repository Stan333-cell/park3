import React from 'react';
import { Users, Award, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Users,
      title: 'Professional Team',
      description: 'Certified detailing specialists with years of experience and passion for automotive care.'
    },
    {
      icon: Award,
      title: 'Premium Products',
      description: 'We use only the highest quality products from trusted brands to ensure exceptional results.'
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: '100% satisfaction guarantee on all our services. Your happiness is our top priority.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-[#f5b900]">Us?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Park Cities Mobile Detail, we bring professional car detailing services directly to you. 
            Our mission is to provide exceptional automotive care with unmatched convenience and quality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-[#f5b900] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-md max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded in Dallas, we've been serving the Park Cities and greater DFW area with mobile detailing services 
              that exceed expectations. Our team combines traditional craftsmanship with modern techniques to deliver 
              results that will make your vehicle look better than new.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;