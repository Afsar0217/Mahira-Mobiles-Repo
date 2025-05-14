import React from 'react';
import { XIcon as LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

type IconName = keyof typeof Icons;

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  // Type assertion to make TypeScript happy
  const IconComponent = (Icons[icon as IconName] || Icons.HelpCircle) as LucideIcon;
  
  return (
    <div className="service-card group">
      <div className="service-icon p-4 bg-primary-50 rounded-full group-hover:bg-primary-100 transition-colors">
        <IconComponent size={32} className="text-primary-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-primary-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;