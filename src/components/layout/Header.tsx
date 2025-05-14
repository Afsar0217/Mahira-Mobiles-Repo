import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Smartphone } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            onClick={closeMobileMenu}
          >
            <Smartphone size={32} className="text-primary-600" />
            <span className="text-xl font-bold font-display">
              <span className="text-primary-600">Mahira</span>
              <span className={isScrolled ? 'text-secondary-600' : 'text-white'}>Mobiles</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" active={isActive('/')} isScrolled={isScrolled}>Home</NavLink>
            <NavLink to="/services" active={isActive('/services')} isScrolled={isScrolled}>Services</NavLink>
            <NavLink to="/gallery" active={isActive('/gallery')} isScrolled={isScrolled}>Gallery</NavLink>
            <NavLink to="/about" active={isActive('/about')} isScrolled={isScrolled}>About</NavLink>
            <NavLink to="/contact" active={isActive('/contact')} isScrolled={isScrolled}>Contact</NavLink>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-slide-down">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <MobileNavLink to="/" active={isActive('/')} onClick={closeMobileMenu}>Home</MobileNavLink>
            <MobileNavLink to="/services" active={isActive('/services')} onClick={closeMobileMenu}>Services</MobileNavLink>
            <MobileNavLink to="/gallery" active={isActive('/gallery')} onClick={closeMobileMenu}>Gallery</MobileNavLink>
            <MobileNavLink to="/about" active={isActive('/about')} onClick={closeMobileMenu}>About</MobileNavLink>
            <MobileNavLink to="/contact" active={isActive('/contact')} onClick={closeMobileMenu}>Contact</MobileNavLink>
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  active: boolean;
  isScrolled: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, active, isScrolled, children }) => {
  return (
    <Link
      to={to}
      className={`font-medium transition-colors duration-300 ${
        active
          ? 'text-primary-600'
          : isScrolled
            ? 'text-gray-800 hover:text-primary-600'
            : 'text-white hover:text-primary-300'
      }`}
    >
      {children}
    </Link>
  );
};

interface MobileNavLinkProps {
  to: string;
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, active, onClick, children }) => {
  return (
    <Link
      to={to}
      className={`block px-3 py-3 rounded-md font-medium ${
        active
          ? 'text-primary-600 bg-primary-50'
          : 'text-gray-800 hover:text-primary-600 hover:bg-primary-50'
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Header;