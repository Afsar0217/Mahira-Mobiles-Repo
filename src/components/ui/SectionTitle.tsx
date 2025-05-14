import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  align = 'center' 
}) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-primary-500 mt-4 ${align === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;