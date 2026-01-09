import React from 'react';
import ConsultingHero from '../components/ConsultingHero';
import DoubleExpertise from '../components/DoubleExpertise';
import TIHSection from '../components/TIHSection';
import ConsultingAbout from '../components/ConsultingAbout';
import ConsultingFooter from '../components/ConsultingFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-brand-blue text-white overflow-x-hidden selection:bg-brand-gold selection:text-brand-blue font-sans">
      <main>
        <ConsultingHero />
        <DoubleExpertise />
        <TIHSection />
        <ConsultingAbout />
      </main>
      <ConsultingFooter />
    </div>
  );
};

export default Index;
