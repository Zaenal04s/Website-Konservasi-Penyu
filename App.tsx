
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import NewsSection from './components/NewsSection';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import AIChatExpert from './components/AIChatExpert';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Education />
        <NewsSection />
        <Gallery />
      </main>
      <Footer />
      
      {/* Floating AI expert consultation feature */}
      <AIChatExpert />
      
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
