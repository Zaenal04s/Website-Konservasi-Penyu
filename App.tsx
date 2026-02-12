
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import StatsSection from './components/StatsSection';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Education />
        <StatsSection />
        <Gallery />
      </main>
      <Footer />
      
      {/* Smooth Scroll Utility for Anchors */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default App;
