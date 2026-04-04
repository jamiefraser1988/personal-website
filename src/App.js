import React, { useState, useEffect } from 'react';
import './Styles/App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WorkSection from './components/WorkSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div className="App">
      <Navigation theme={theme} onToggleTheme={toggleTheme} />
      <main className="main-content">
        <Hero />
        <WorkSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
