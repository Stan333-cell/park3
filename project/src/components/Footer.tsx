import React from 'react';
import { Car, Phone, Mail, MapPin, Clock, Star } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'FAQ', id: 'faq' }
  ];

  const services = [
    'Car Detailing',
    'Ceramic Coating',
    'Paint Correction',
    'Scratch Removal',
    'Car Polishing',
    'Mobile Wash'
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-[#f5b900] rounded-full flex items-center justify-center">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Park Cities</h3>
                <p className="text-sm text-gray-400">Mobile Detail</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional mobile car detailing services across the DFW area. 
              We bring premium automotive care directly to your doorstep.
            </p>
            <div className="flex items-center space-x-2 text-[#f5b900]">
              <Star className="w-5 h-5 fill-current" />
              <span className="font-semibold">500+ 5-Star Reviews</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-[#f5b900] transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 hover:text-[#f5b900] transition-colors duration-200 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a 
                href="tel:2145550123"
                className="flex items-center space-x-3 text-gray-400 hover:text-[#f5b900] transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                <span>(214) 555-0123</span>
              </a>
              <a 
                href="mailto:info@parkcitiesdetail.com"
                className="flex items-center space-x-3 text-gray-400 hover:text-[#f5b900] transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                <span>info@parkcitiesdetail.com</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>Serving DFW Metro Area</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Clock className="w-5 h-5" />
                <span>Mon - Sat: 8AM - 6PM</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <a 
                href="tel:2145550123"
                className="inline-flex items-center bg-[#f5b900] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#e6a800] transition-colors duration-200"
              >
                <Phone className="w-4 h-4 mr-2" />
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Park Cities Mobile Detail. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#f5b900] transition-colors duration-200 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#f5b900] transition-colors duration-200 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#f5b900] transition-colors duration-200 text-sm">
                Service Areas
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;