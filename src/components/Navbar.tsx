import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import GojoImg from '../imgs/gojo.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Services', path: '/services' },
  { name: 'Experience', path: '/experience' },
  { name: 'Contact', path: '/contact' },
  { name: 'Resume', path: '/resume' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="logo-png">
            <img src={GojoImg} alt="Gojo Profili" width="60" />
          </div>
          
          <ul className="nav-links">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.path} style={{ position: 'relative' }}>
                  <Link 
                    to={link.path} 
                    className={`nav-link ${isActive ? 'active' : ''}`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="nav-indicator"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <Link 
            key={link.path}
            to={link.path} 
            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </>
  );
}
