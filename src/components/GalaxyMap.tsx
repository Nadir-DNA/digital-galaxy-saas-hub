
import React, { useState } from 'react';
import SaasCard from './SaasCard';

const saasData = [
  {
    title: "Notion",
    url: "https://notion.so",
    tag: "Productivity",
    description: "All-in-one workspace for notes, docs, and collaboration.",
    promo: "DNA20"
  },
  {
    title: "Figma",
    url: "https://figma.com",
    tag: "Design",
    description: "Collaborative interface design tool for teams.",
    promo: "DNA15"
  },
  {
    title: "Linear",
    url: "https://linear.app",
    tag: "Project Management",
    description: "Modern issue tracking for software development.",
    promo: "DNA25"
  },
  {
    title: "Midjourney",
    url: "https://midjourney.com",
    tag: "AI",
    description: "AI-powered image generation for creative projects.",
    promo: "DNA30"
  },
  {
    title: "Vercel",
    url: "https://vercel.com",
    tag: "Development",
    description: "Frontend cloud platform for modern web projects.",
    promo: "DNA10"
  },
  {
    title: "Supabase",
    url: "https://supabase.com",
    tag: "Development",
    description: "Open source Firebase alternative with PostgreSQL.",
    promo: "DNA20"
  }
];

const tags = ["All", "AI", "Productivity", "Design", "Project Management", "Development"];

const GalaxyMap = () => {
  const [activeTag, setActiveTag] = useState("All");
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(saasData.length).fill(false));

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.saas-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const filteredSaas = activeTag === "All" 
    ? saasData 
    : saasData.filter(saas => saas.tag === activeTag);

  return (
    <section id="saas" className="py-20 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Galaxy Map
          </h2>
          <p className="text-xl text-gray-300">
            Navigate through our curated collection of premium SaaS tools
          </p>
        </div>

        {/* Filter tags */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                activeTag === tag
                  ? 'neon-border neon-text bg-neon-cyan/10'
                  : 'border-gray-600 text-gray-400 hover:border-neon-cyan hover:text-neon-cyan'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* SaaS grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSaas.map((saas, index) => (
            <div
              key={`${saas.title}-${activeTag}`}
              data-index={index}
              className={`saas-card transition-all duration-700 ${
                visibleCards[index] ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <SaasCard {...saas} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalaxyMap;
