import { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiHome, FiUser, FiTool, FiBriefcase, FiMessageSquare, FiMail, FiMenu } from 'react-icons/fi';
import '../styles/main.css';

export default function Nav() {
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Add the missing toggleTheme function
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
  };

  // Add theme initialization
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  const navItems = [
    { name: 'Home', icon: <FiHome />, target: '#hero' },
    { name: 'About', icon: <FiUser />, target: '#about' },
    { name: 'Skills', icon: <FiTool />, target: '#skills' },
    { name: 'Projects', icon: <FiBriefcase />, target: '#projects' },
    { name: 'Testimonials', icon: <FiMessageSquare />, target: '#testimonials' },
    { name: 'Contact', icon: <FiMail />, target: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (target) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`sticky-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <h1 className="nav-title">Fadi Chehadi</h1>
        
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          {navItems.map((item, index) => (
            <button
              key={index}
              className="nav-link"
              onClick={() => scrollToSection(item.target)}
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          ))}
        </div>

        <div className="nav-controls">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="mobile-menu">
            <FiMenu size={24} />
          </button>
          <button onClick={toggleTheme} className="theme-toggle">
            {isDark ? <FiSun size={24} /> : <FiMoon size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}