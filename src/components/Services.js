import React from 'react';

const Services = () => {
  const solutions = [
    {
      title: "Allergy Testing",
      description: "Touchless, LiDAR-enhanced skin prick test analysis",
      features: ["Contactless measurement", "Real-time analysis", "Probabilistic results", "Clinical validation"]
    },
    {
      title: "Eyelid Ptosis Assessment", 
      description: "Ongoing project for image-based pre-surgical evaluation",
      features: ["Pre-surgical planning", "Standardized evaluation", "Contactless assessment", "Clinical decision support"]
    },
    {
      title: "Visual Medical Imaging Tools",
      description: "Targeting aesthetic, orthopedic, and dermatological evaluations",
      features: ["Aesthetic analysis", "Orthopedic assessment", "Dermatological screening", "Symmetry analysis"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering medical diagnostics through intelligent tools
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-4">
            We develop scalable, AI-powered mobile solutions that support clinical decision-making in fields where traditional diagnostics rely on subjective or manual measurements. Our tools help doctors make faster, more consistent, and data-driven decisions — right from a tablet.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Current focus areas:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                {/* Solution Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6">
                    <button className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We combine AI, 2D/3D image analysis, and ethical data storage in every solution we build.
          </p>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-primary-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Join over 50 European companies already leveraging our computer vision technology 
              to drive innovation and increase efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Consultation
              </button>
              <button className="border border-primary-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 