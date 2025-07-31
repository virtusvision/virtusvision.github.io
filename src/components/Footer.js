import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Virtus R&D Software Inc.</h3>
            <p className="text-gray-300 mb-3">
              Pioneering the future of mobile medical diagnostics through innovative AI solutions that empower healthcare professionals.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div>📧 info@virtusrnd.com</div>
              <div>🏢 Muğla Teknokent, 48000, Kötekli, Muğla, Türkiye</div>
              <div>🌐 www.virtusrnd.com</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/solutions" className="hover:text-white">Allergy Testing</Link></li>
              <li><Link to="/solutions" className="hover:text-white">Ptosis Assessment</Link></li>
              <li><Link to="/solutions" className="hover:text-white">Medical Imaging</Link></li>
              <li><Link to="/rd" className="hover:text-white">R&D Projects</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/team" className="hover:text-white">Team</Link></li>
              <li><Link to="/news" className="hover:text-white">News</Link></li>
              <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Virtus R&D Software Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 