
import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import SaasCard from './SaasCard';
import { useSaasData } from '../hooks/useSaasData';
import { Skeleton } from './ui/skeleton';

const GalaxyMap = () => {
  const { saasData, loading, error, getAllTags } = useSaasData();
  const [activeTag, setActiveTag] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
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

    const cards = document.querySelectorAll('.tool-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [saasData]);

  // Enhanced filtering logic that combines tag filter and search
  const filteredTools = saasData.filter(tool => {
    // First apply tag filter with partial matching
    const matchesTag = activeTag === "All" || tool.tags.some(tag => tag.includes(activeTag));
    
    // Then apply search filter
    const matchesSearch = searchTerm === "" || 
      tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesTag && matchesSearch;
  });

  const tags = getAllTags();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    
    // Track search analytics
    if (typeof window !== 'undefined' && window.gtag && e.target.value.length > 2) {
      window.gtag('event', 'search', {
        'event_category': 'engagement',
        'event_label': e.target.value,
        'custom_parameters': {
          'search_term': e.target.value
        }
      });
    }
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  if (error) {
    return (
      <section id="tools" className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Productivity Tools
            </h2>
            <p className="text-red-400 mb-8">
              Error loading data: {error}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="tools" className="py-20 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        {/* Section title - SEO optimized */}
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Productivity Tools Galaxy
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover our curated collection of premium productivity tools. 
            From CRM and marketing automation to design and development tools: find the perfect solution 
            to boost your efficiency and accelerate your success.
          </p>
          
          {/* SEO keywords section */}
          <div className="mt-6 text-sm text-gray-400">
            <p>
              <strong>Popular Categories:</strong> CRM • Marketing • Productivity • Analytics • E-commerce • Customer Support • Design • Development
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
            {/* Search Bar */}
            <div className="flex justify-center mb-8">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search productivity tools..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full pl-12 pr-12 py-3 rounded-full border border-gray-600 bg-dark-blue/50 backdrop-blur-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/20 transition-all duration-300"
                />
                {searchTerm && (
                  <button
                    onClick={clearSearch}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-neon-purple transition-colors"
                    aria-label="Clear search"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Results counter */}
            {(searchTerm || activeTag !== "All") && (
              <div className="text-center mb-6">
                <p className="text-gray-400 text-sm">
                  {filteredTools.length} tool{filteredTools.length !== 1 ? 's' : ''} found
                  {searchTerm && ` for "${searchTerm}"`}
                  {activeTag !== "All" && ` in ${activeTag}`}
                </p>
              </div>
            )}

            {/* Filter tags - SEO optimized */}
            <nav className="flex flex-wrap justify-center gap-4 mb-12" aria-label="Filter by tool category">
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
                  title={`Filter tools by ${tag} category`}
                >
                  {tag}
                </button>
              ))}
            </nav>

            {/* Tools grid with structured data */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTools.map((tool, index) => (
                <article
                  key={`${tool.id}-${activeTag}-${searchTerm}`}
                  data-index={index}
                  className={`tool-card transition-all duration-700 ${
                    visibleCards[index] ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <SaasCard 
                    title={tool.title}
                    url={tool.url}
                    tag={tool.tags[0]}
                    description={tool.description}
                    promo={tool.promo_code}
                  />
                  
                  {/* Structured data for each tool */}
                  <script type="application/ld+json">
                    {JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "SoftwareApplication",
                      "name": tool.title,
                      "description": tool.description,
                      "url": tool.url,
                      "applicationCategory": tool.tags[0],
                      "offers": tool.promo_code ? {
                        "@type": "Offer",
                        "description": `Exclusive promo code: ${tool.promo_code}`,
                        "promoCode": tool.promo_code,
                        "availability": "https://schema.org/InStock"
                      } : undefined
                    })}
                  </script>
                </article>
              ))}
            </div>

            {filteredTools.length === 0 && (
              <div className="text-center text-gray-400 mt-12">
                <div className="max-w-md mx-auto">
                  <Search className="h-16 w-16 mx-auto mb-4 text-gray-500" />
                  <h3 className="text-xl font-semibold mb-2">No tools found</h3>
                  <p className="text-gray-500 mb-4">
                    {searchTerm 
                      ? `No tools match "${searchTerm}"${activeTag !== "All" ? ` in ${activeTag} category` : ''}.`
                      : `No tools found in ${activeTag} category.`
                    }
                  </p>
                  {searchTerm && (
                    <button
                      onClick={clearSearch}
                      className="text-neon-purple hover:text-bright-purple transition-colors"
                    >
                      Clear search and show all tools
                    </button>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default GalaxyMap;
