
import React, { useState } from 'react';
import SaasCard from './SaasCard';
import { useSaasData } from '../hooks/useSaasData';
import { Skeleton } from './ui/skeleton';

const GalaxyMap = () => {
  const { saasData, loading, error, getAllTags } = useSaasData();
  const [activeTag, setActiveTag] = useState("All");
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);

  // Update visible cards when saasData changes
  React.useEffect(() => {
    setVisibleCards(new Array(saasData.length).fill(false));
  }, [saasData]);

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
  }, [saasData]);

  const filteredSaas = activeTag === "All" 
    ? saasData 
    : saasData.filter(saas => saas.tags.includes(activeTag));

  const tags = getAllTags();

  if (error) {
    return (
      <section id="saas" className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Galaxy Map
            </h2>
            <p className="text-red-400 mb-8">
              Erreur lors du chargement des données: {error}
            </p>
          </div>
        </div>
      </section>
    );
  }

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

        {loading ? (
          // Loading skeleton
          <div className="space-y-8">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[...Array(6)].map((_, i) => (
                <Skeleton key={i} className="h-10 w-24 rounded-full" />
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Skeleton key={i} className="h-80 rounded-lg" />
              ))}
            </div>
          </div>
        ) : (
          <>
            {/* Filter tags */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                    activeTag === tag
                      ? 'neon-border neon-text bg-neon-purple/10'
                      : 'border-gray-600 text-gray-400 hover:border-neon-purple hover:text-neon-purple'
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
                  key={`${saas.id}-${activeTag}`}
                  data-index={index}
                  className={`saas-card transition-all duration-700 ${
                    visibleCards[index] ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <SaasCard 
                    title={saas.title}
                    url={saas.url}
                    tag={saas.tags[0]} // Use first tag as primary tag
                    description={saas.description}
                    promo={saas.promo_code}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default GalaxyMap;
