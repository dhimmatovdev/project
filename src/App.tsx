import React from 'react';
import { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import EntryEffect from './components/EntryEffect';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Mentors from './components/Mentors';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showEntryEffect, setShowEntryEffect] = useState(true);

  const handleEntryComplete = () => {
    setShowEntryEffect(false);
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        {showEntryEffect && <EntryEffect onComplete={handleEntryComplete} />}
        <div className="min-h-screen bg-white dark:bg-gray-900">
          <Header />
          <Hero />
          <About />
          <Services />
          <HowItWorks />
          <Testimonials />
          <Mentors />
          <Gallery />
          <FAQ />
          <Contact />
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;