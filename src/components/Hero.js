import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-primary-50 to-white pt-20 hero-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight text-shadow">
                Reimagining
                <span className="text-primary-600 gradient-text"> Medical Diagnostics</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Turning images into insights — with mobile, AI-powered healthcare tools.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                VirtusVision.ai develops contactless, image-based medical diagnostic tools using LiDAR, computer vision, and AI. Our first solution modernizes allergy testing with a touchless mobile app.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                We're building the future of diagnostics — smarter, faster, greener.
              </p>
            </div>

            {/* Key Features */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Real-time Processing</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">AI-Powered Analytics</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">European Standards</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                Explore Solutions
              </button>
              <button className="btn-secondary border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">99.8%</div>
                <div className="text-sm text-gray-600">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">50+</div>
                <div className="text-sm text-gray-600">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">24/7</div>
                <div className="text-sm text-gray-600">Monitoring</div>
              </div>
            </div>
          </div>

          {/* Right Content - Modern Dashboard */}
          <div className="relative">
            {/* Main Dashboard Container */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-2xl border border-gray-200">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 gradient-bg-blue rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">VV</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Virtus Vision</h3>
                    <p className="text-xs text-gray-500">AI Analytics Platform</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-600">Live</span>
                </div>
              </div>

              {/* Modern Terminal Interface */}
              <div className="terminal bg-gray-900 rounded-xl overflow-hidden shadow-inner">
                <div className="terminal-header">
                  <div className="terminal-dot dot-red"></div>
                  <div className="terminal-dot dot-yellow"></div>
                  <div className="terminal-dot dot-green"></div>
                  <span className="text-gray-400 text-xs ml-3">Vision Analytics Dashboard</span>
                </div>
                
                <div className="p-4 space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">Initializing vision model...</span>
                    <span className="text-green-400 ml-auto">200ms</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">Loading neural network weights...</span>
                    <span className="text-green-400 ml-auto">450ms</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-400">⚡</span>
                    <span className="text-gray-300">Processing image data...</span>
                    <span className="text-blue-400 ml-auto">Real-time</span>
                  </div>
                  
                  <div className="bg-blue-900 bg-opacity-30 rounded-lg p-3 my-3">
                    <div className="flex items-center justify-between">
                      <span className="text-blue-300">🎯 Object Detection</span>
                      <span className="text-blue-300 font-bold">97.3%</span>
                    </div>
                    <div className="text-xs text-blue-200 mt-1">Person detected in frame</div>
                  </div>
                  
                  <div className="bg-yellow-900 bg-opacity-30 rounded-lg p-3 my-3">
                    <div className="flex items-center justify-between">
                      <span className="text-yellow-300">🚗 Motion Analysis</span>
                      <span className="text-yellow-300 font-bold">94.1%</span>
                    </div>
                    <div className="text-xs text-yellow-200 mt-1">Vehicle movement tracked</div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-green-400">✅</span>
                    <span className="text-green-300">Analysis complete</span>
                    <span className="text-green-400 ml-auto">Total: 1.2s</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 animate-pulse">
                    <span className="text-purple-400">⟳</span>
                    <span className="text-purple-300">Ready for next frame...</span>
                  </div>
                </div>
              </div>
              
              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="stat-card bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary-600">99.8%</div>
                  <div className="text-xs text-gray-500">Accuracy</div>
                </div>
                <div className="stat-card bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">&lt;1s</div>
                  <div className="text-xs text-gray-500">Response</div>
                </div>
                <div className="stat-card bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">24/7</div>
                  <div className="text-xs text-gray-500">Active</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 