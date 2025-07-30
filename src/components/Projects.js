import React, { useState } from 'react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'manufacturing', name: 'Manufacturing' },
    { id: 'automotive', name: 'Automotive' },
    { id: 'security', name: 'Security' }
  ];

  const projects = [
    {
      id: 1,
      category: 'healthcare',
      title: 'Digital Diagnostic Platform',
      description: 'AI-powered medical imaging analysis system for European hospitals',
      image: '🏥',
      stats: { accuracy: '99.2%', processing: '< 2s', hospitals: '15+' },
      technologies: ['TensorFlow', 'OpenCV', 'React', 'Python'],
      status: 'Completed'
    },
    {
      id: 2,
      category: 'manufacturing',
      title: 'Quality Control Automation',
      description: 'Real-time defect detection system for automotive parts manufacturing',
      image: '🔧',
      stats: { accuracy: '99.8%', reduction: '75%', plants: '8' },
      technologies: ['PyTorch', 'OpenCV', 'FastAPI', 'Docker'],
      status: 'Active'
    },
    {
      id: 3,
      category: 'automotive',
      title: 'Autonomous Fleet Management',
      description: 'Computer vision system for autonomous vehicle navigation and safety',
      image: '🚗',
      stats: { vehicles: '200+', miles: '1M+', accuracy: '99.9%' },
      technologies: ['YOLO', 'ROS', 'C++', 'CUDA'],
      status: 'Active'
    },
    {
      id: 4,
      category: 'security',
      title: 'Smart Surveillance Network',
      description: 'GDPR-compliant intelligent monitoring system for critical infrastructure',
      image: '🛡️',
      stats: { cameras: '500+', detection: '< 1s', uptime: '99.9%' },
      technologies: ['OpenCV', 'TensorFlow', 'Redis', 'MongoDB'],
      status: 'Completed'
    },
    {
      id: 5,
      category: 'healthcare',
      title: 'Surgical Assistance AI',
      description: 'Real-time surgical guidance system with computer vision integration',
      image: '⚕️',
      stats: { surgeries: '1000+', precision: '99.5%', hospitals: '5' },
      technologies: ['PyTorch', 'OpenCV', 'WebRTC', 'Node.js'],
      status: 'Development'
    },
    {
      id: 6,
      category: 'manufacturing',
      title: 'Predictive Maintenance System',
      description: 'Vision-based equipment monitoring for predictive maintenance',
      image: '⚙️',
      stats: { downtime: '-60%', savings: '€2M+', facilities: '12' },
      technologies: ['TensorFlow', 'OpenCV', 'Kafka', 'Kubernetes'],
      status: 'Active'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Active': return 'bg-blue-100 text-blue-800';
      case 'Development': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Projects
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
              {/* Project Header */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 text-center">
                <div className="text-6xl mb-4">{project.image}</div>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                  {project.status}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(project.stats).map(([key, value], index) => (
                    <div key={index} className="text-center">
                      <div className="text-lg font-bold text-primary-600">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-primary-50 text-primary-700 py-3 px-4 rounded-lg font-medium hover:bg-primary-100 transition-colors">
                  View Case Study
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Have a Computer Vision Challenge?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Every project starts with understanding your unique requirements. 
              Let's discuss how our computer vision expertise can solve your specific challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                Start Your Project
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                View All Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 