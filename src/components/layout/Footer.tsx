import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Smartphone,
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter 
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Smartphone size={28} className="text-primary-500" />
              <span className="text-xl font-bold font-display">
                <span className="text-primary-500">Mahira</span>
                <span className="text-white">Mobiles</span>
              </span>
            </div>
            <p className="text-gray-400">
              Your one-stop destination for mobile sales, repairs, and services. 
              Providing quality products and services since 2015.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/waheed_x.x/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-primary-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Mobile Sales</li>
              <li className="text-gray-400">Hardware Repair</li>
              <li className="text-gray-400">Software Updates</li>
              <li className="text-gray-400">Mobile Accessories</li>
              <li className="text-gray-400">Money Transfers</li>
              <li className="text-gray-400">Mobile Recharges</li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-primary-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">+91 9912308214</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-primary-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">mahiramobile89@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  59V5+PPJ, Leela Sundaraiah Nagar, Duddepudi, Wyra, Telangana 507165
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-primary-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Mon-Sat: 9:00 AM - 9:00 PM<br />
                  Sunday: 10:00 AM - 5:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-500">
            &copy; {currentYear} Mahira Mobiles. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;