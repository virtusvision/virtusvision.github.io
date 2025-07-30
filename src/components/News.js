import React from 'react';

const News = () => {
  const newsItems = [
    {
      id: 1,
      type: 'Prize',
      title: 'First Prize at International Allergy Congress',
      excerpt: 'Our AI-powered allergy test solution received the 1st prize at the International Scientific Congress organized by the Turkish Society of Pediatric Allergy and Immunology.',
      date: '2024-01-15',
      featured: true,
      category: 'Healthcare',
      image: '🏆'
    },
    {
      id: 2,
      type: 'Academic Collaboration',
      title: 'Two R&D Projects Completed',
      excerpt: 'We successfully completed two national R&D projects (KOSGEB and university-funded SRP) developing AI-based diagnostic systems, supported by strong academic-clinical collaboration.',
      date: '2024-01-10',
      featured: true,
      category: 'Technology',
      image: '🚀'
    },
    {
      id: 3,
      type: 'Industry Recognition',
      title: 'Skin Imaging Research Submitted to Q1 Journal',
      excerpt: 'Our large-scale image classification study using the ISIC dataset has been submitted to a high-impact Q1 journal.',
      date: '2024-01-08',
      readTime: '2 min read',
      featured: false,
      category: 'R&D',
      image: '📊'
    },
    {
      id: 4,
      type: 'Application',
      title: 'Women TechEU Application Submitted',
      excerpt: 'We applied to the prestigious Women TechEU program to scale our AI-powered diagnostic platform across Europe.',
      date: '2024-01-05',
      readTime: '7 min read',
      featured: false,
      category: 'Project Application',
      image: '📊'
    }
    
  ];

  const featuredNews = newsItems.filter(item => item.featured);
  const regularNews = newsItems.filter(item => !item.featured);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-EU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Healthcare': 'bg-red-100 text-red-800',
      'Technology': 'bg-blue-100 text-blue-800',
      'Awards': 'bg-yellow-100 text-yellow-800',
      'Research': 'bg-purple-100 text-purple-800',
      'Expansion': 'bg-green-100 text-green-800',
      'Events': 'bg-indigo-100 text-indigo-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Latest News & Updates
          </h2>
        </div>

        {/* Featured News */}
        {featuredNews.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Stories</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((news) => (
                <article key={news.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-3xl">{news.image}</div>
                        <div>
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(news.category)}`}>
                            {news.category}
                          </span>
                          <div className="text-sm text-gray-500 mt-1">{news.type}</div>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      {news.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {news.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{formatDate(news.date)}</span>
                        <span>•</span>
                        <span>{news.readTime}</span>
                      </div>
                      
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Regular News */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Recent Updates</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularNews.map((news) => (
              <article key={news.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-2xl">{news.image}</div>
                    <div>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(news.category)}`}>
                        {news.category}
                      </span>
                      <div className="text-xs text-gray-500 mt-1">{news.type}</div>
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                    {news.title}
                  </h4>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {news.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      {formatDate(news.date)}
                    </div>
                    
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12">
          <div className="bg-primary-600 rounded-2xl p-8 lg:p-12 text-center text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Stay Ahead of the Curve
            </h3>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights, product updates, 
              and industry trends in computer vision and AI.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-primary-200 text-sm mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        {/* View All News Button */}
        <div className="text-center mt-12">
          <button className="bg-white text-primary-600 border border-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
            View All News & Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default News; 