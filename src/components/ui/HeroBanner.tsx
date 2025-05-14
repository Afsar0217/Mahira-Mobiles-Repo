import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroBannerProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
}) => {
  return (
    <div 
      className="relative h-screen max-h-[800px] min-h-[500px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/40 z-10"></div>
      
      <div className="container-custom relative z-20 py-20">
        <div className="max-w-3xl mx-auto text-center text-white space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="pt-4">
            <Link 
              to={ctaLink} 
              className="btn-primary group"
            >
              {ctaText}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;