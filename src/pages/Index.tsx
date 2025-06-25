
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import GalaxyMap from '../components/GalaxyMap';
import WhySection from '../components/WhySection';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Background from '../components/Background';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-white relative overflow-x-hidden">
      <Background />
      <Header />
      <main>
        <Hero />
        <GalaxyMap />
        <WhySection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
