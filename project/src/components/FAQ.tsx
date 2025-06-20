import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqItems = [
    {
      question: 'How long does a full detail take?',
      answer: 'A complete detail typically takes 2-4 hours depending on the size of your vehicle and the services selected. We work efficiently while maintaining our high standards of quality.'
    },
    {
      question: 'What areas do you service?',
      answer: 'We proudly serve the entire DFW metroplex including Dallas, Highland Park, University Park, Plano, Frisco, Richardson, Addison, and surrounding areas. Contact us to confirm service availability in your location.'
    },
    {
      question: 'Do I need to provide water or electricity?',
      answer: 'No! We come fully equipped with our own water tanks, generators, and all necessary equipment. All we need is a parking space and permission to work on your property.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, credit cards, and digital payments including Venmo and Zelle. Payment is due upon completion of service.'
    },
    {
      question: 'Do you offer any guarantees?',
      answer: 'Yes! We stand behind our work with a 100% satisfaction guarantee. If you\'re not completely happy with our service, we\'ll make it right or refund your money.'
    },
    {
      question: 'Can you remove all types of scratches?',
      answer: 'We can remove or significantly reduce most surface scratches and swirl marks. Deep scratches that go through the paint may require touch-up work, which we can discuss during our assessment.'
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-[#f5b900]">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to the most common questions about our mobile detailing services.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItem === index ? (
                    <ChevronUp className="w-5 h-5 text-[#f5b900]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              <div className={`transition-all duration-300 ${
                openItem === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700">
            Still have questions?{' '}
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-[#f5b900] hover:text-[#e6a800] font-semibold underline transition-colors duration-200"
            >
              Contact us
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;