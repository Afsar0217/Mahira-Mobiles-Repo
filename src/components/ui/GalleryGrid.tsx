import React, { useState } from 'react';
import { galleryItems } from '../../data/gallery';

type CategoryType = 'all' | 'shop' | 'products' | 'repairs' | 'accessories';

const GalleryGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  
  const categories: { value: CategoryType; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'shop', label: 'Our Shop' },
    { value: 'products', label: 'Products' },
    { value: 'repairs', label: 'Repairs' },
    { value: 'accessories', label: 'Accessories' }
  ];
  
  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);
  
  return (
    <div>
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map(category => (
          <button
            key={category.value}
            onClick={() => setActiveCategory(category.value)}
            className={`px-5 py-2 rounded-full transition-all ${
              activeCategory === category.value
                ? 'bg-primary-500 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
      
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map(item => (
          <div
            key={item.id}
            className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-300 text-sm capitalize">{item.category}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryGrid;