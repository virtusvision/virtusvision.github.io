import React from 'react';

const Careers = () => {
  const opportunities = [
    "AI & Computer Vision Researchers",
    "Medical Imaging Specialists", 
    "Frontend & Mobile Developers",
    "Clinical Trial Coordinators",
    "Students interested in healthcare innovation"
  ];

  return (
    <section id="careers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Careers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us to build the future of digital diagnostics.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-12">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We are always on the lookout for passionate, curious, and driven individuals who want to shape the future of healthcare.
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Opportunities for:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {opportunities.map((opportunity, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white rounded-lg p-4">
                    <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium">{opportunity}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Whether you're a student, a researcher, or an experienced professional, we welcome you to contribute to real-world impact.
            </p>

            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                <span>📧</span>
                <span>Contact us at team@virtusvision.ai</span>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Make an Impact?</h3>
              <p className="text-primary-100 mb-6">
                Join our mission to revolutionize medical diagnostics with cutting-edge AI technology.
              </p>
              <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers; 