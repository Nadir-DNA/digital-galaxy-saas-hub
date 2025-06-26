
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
              Codes Promo SaaS
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
        {/* Section title - SEO optimized */}
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Codes Promo SaaS Exclusifs
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explorez notre collection premium d'outils SaaS avec des codes promo exclusifs. 
            CRM, marketing automation, outils de productivité : trouvez le SaaS parfait pour votre startup 
            et économisez jusqu'à 50% sur votre premier abonnement.
          </p>
          
          {/* SEO keywords section */}
          <div className="mt-6 text-sm text-gray-400">
            <p>
              <strong>Catégories populaires :</strong> CRM • Marketing • Productivité • Analytics • E-commerce • Support Client
            </p>
          </div>
        </header>

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
            {/* Filter tags - SEO optimized */}
            <nav className="flex flex-wrap justify-center gap-4 mb-12" aria-label="Filtres par catégorie SaaS">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                    activeTag === tag
                      ? 'neon-border neon-text bg-neon-purple/10'
                      : 'border-gray-600 text-gray-400 hover:border-neon-purple hover:text-neon-purple'
                  }`}
                  aria-pressed={activeTag === tag}
                  title={`Filtrer les SaaS par catégorie ${tag}`}
                >
                  {tag}
                </button>
              ))}
            </nav>

            {/* SaaS grid with structured data */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSaas.map((saas, index) => (
                <article
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
                    tag={saas.tags[0]}
                    description={saas.description}
                    promo={saas.promo_code}
                  />
                  
                  {/* Structured data for each SaaS */}
                  <script type="application/ld+json">
                    {JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "Product",
                      "name": saas.title,
                      "description": saas.description,
                      "url": saas.url,
                      "category": saas.tags[0],
                      "offers": {
                        "@type": "Offer",
                        "description": `Code promo exclusif: ${saas.promo_code}`,
                        "promoCode": saas.promo_code,
                        "availability": "https://schema.org/InStock"
                      }
                    })}
                  </script>
                </article>
              ))}
            </div>

            {filteredSaas.length === 0 && (
              <div className="text-center text-gray-400 mt-12">
                <p>Aucun SaaS trouvé pour cette catégorie.</p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default GalaxyMap;
