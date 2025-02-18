import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/main.css';
import { useEffect } from 'react';
import { initShootingStar } from './utils/scrollEffects';

export default function App() {
  useEffect(() => {
    const cleanup = initShootingStar();
    return cleanup;
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}