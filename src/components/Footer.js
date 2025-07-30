import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">VirtusVision.ai</h3>
            <p className="text-gray-300 mb-3">
              Pioneering the future of mobile medical diagnostics through innovative AI solutions that empower healthcare professionals.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div>📧 info@virtusvision.ai</div>
              <div>🏢 Muğla Teknokent, 48000, Kötekli, Muğla, Türkiye</div>
              <div>🌐 www.virtusvision.ai</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-white">Allergy Testing</a></li>
              <li><a href="#services" className="hover:text-white">Ptosis Assessment</a></li>
              <li><a href="#services" className="hover:text-white">Medical Imaging</a></li>
              <li><a href="#rd" className="hover:text-white">R&D Projects</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#team" className="hover:text-white">Team</a></li>
              <li><a href="#news" className="hover:text-white">News</a></li>
              <li><a href="#careers" className="hover:text-white">Careers</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 VirtusVision.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 