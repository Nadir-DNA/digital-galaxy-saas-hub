
import React from 'react';

const features = [
  {
    icon: '🎯',
    title: 'Expert Curation',
    description: 'Every tool is tested and approved by our productivity experts. Only the best tools make it to our galaxy.',
    keywords: 'productivity tools curation, expert selection, startup tools'
  },
  {
    icon: '💰',
    title: 'Value-Driven',
    description: 'Tools selected for their exceptional value and impact on productivity. Get more done with the right solutions.',
    keywords: 'productivity value, efficiency tools, cost-effective solutions'
  },
  {
    icon: '🚀',
    title: 'Growth Accelerated',
    description: 'Tools specifically chosen to boost your growth: CRM, marketing automation, analytics, productivity and much more.',
    keywords: 'growth tools, productivity boost, CRM, marketing automation'
  }
];

const WhySection = () => {
  return (
    <section id="about" className="py-20 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Why Choose Digital DNA?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The premier platform for discovering the best productivity tools. 
            We curate exceptional tools that help businesses and individuals unlock their full potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <article
              key={index}
              className="cyber-card p-8 rounded-lg text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 neon-text">
                {feature.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {feature.description}
              </p>
              <div className="text-xs text-gray-500 opacity-0">
                {feature.keywords}
              </div>
            </article>
          ))}
        </div>

        {/* SEO Content Section */}
        <div className="bg-medium-blue/30 rounded-2xl p-8 border border-neon-purple/20">
          <h3 className="text-2xl font-bold mb-6 text-center gradient-text">
            Your Productivity Partner
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-neon-purple">🎯 Our Mission</h4>
              <p className="leading-relaxed">
                At Digital DNA, we understand the challenges of modern productivity. That's why we carefully 
                curate the best tools that truly accelerate your workflow and help you achieve more with less effort.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-neon-purple">💡 Our Expertise</h4>
              <p className="leading-relaxed">
                Our team personally tests each tool before adding it to our galaxy. 
                We evaluate quality, innovation, and real-world value for professionals and teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
