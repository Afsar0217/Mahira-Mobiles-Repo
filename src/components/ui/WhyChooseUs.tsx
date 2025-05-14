import React from 'react';
import { 
  Clock, 
  ThumbsUp, 
  BadgeCheck, 
  Headphones 
} from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <Clock size={36} className="text-primary-500" />,
      title: 'Quick Service',
      description: 'Most repairs completed within 24 hours, with many same-day services available.',
    },
    {
      icon: <ThumbsUp size={36} className="text-primary-500" />,
      title: 'Quality Guarantee',
      description: 'All parts and services come with a warranty. We stand behind our work.',
    },
    {
      icon: <BadgeCheck size={36} className="text-primary-500" />,
      title: 'Genuine Products',
      description: 'We sell only authentic mobile phones and accessories from authorized dealers.',
    },
    {
      icon: <Headphones size={36} className="text-primary-500" />,
      title: '24/7 Support',
      description: 'Our team is always available to help with your queries and concerns.',
    },
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {reasons.map((reason, index) => (
        <div 
          key={index} 
          className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
        >
          <div className="flex justify-center mb-4">
            {reason.icon}
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            {reason.title}
          </h3>
          <p className="text-gray-600">
            {reason.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default WhyChooseUs;