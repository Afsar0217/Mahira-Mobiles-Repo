import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  comment: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  comment, 
  rating 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* Rating Stars */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={20}
            className={`${
              i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      
      {/* Comment */}
      <p className="text-gray-700 mb-4">"{comment}"</p>
      
      {/* Customer Name */}
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white font-semibold">
          {name.charAt(0)}
        </div>
        <div className="ml-3">
          <p className="font-medium text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">Customer</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;