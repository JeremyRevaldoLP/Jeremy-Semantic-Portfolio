import { useState, useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import { getJsonLdScript } from './lib/jsonld';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Organizations from './components/sections/Organizations';
import SemanticDemo from './components/sections/SemanticDemo';
import StructuredDataPage from './components/sections/StructuredDataPage';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [currentRoute, setCurrentRoute] = useState(window.location.hash);

  // Simple hash-based routing
  useEffect(() => {
    const handleHashChange = () => setCurrentRoute(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Inject JSON-LD structured data
  useEffect(() => {
    const existingScript = document.getElementById('jsonld-structured-data');
    if (existingScript) existingScript.remove();

    const script = document.createElement('script');
    script.id = 'jsonld-structured-data';
    script.type = 'application/ld+json';
    script.textContent = getJsonLdScript();
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('jsonld-structured-data');
      if (el) el.remove();
    };
  }, []);

  const isStructuredDataPage = currentRoute === '#/structured-data';

  if (isStructuredDataPage) {
    return (
      <>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main>
          <StructuredDataPage />
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Organizations />
        <SemanticDemo />
      </main>
      <Footer />
    </>
  );
}

export default App;
