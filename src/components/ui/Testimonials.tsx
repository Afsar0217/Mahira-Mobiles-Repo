// import React from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { testimonials } from '../../data/testimonials';
// import TestimonialCard from './TestimonialCard';
// import { useEffect, useRef, useState } from 'react';

// const Testimonials: React.FC = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);
//   const containerRef = useRef<HTMLDivElement>(null);
  
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
    
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);
  
//   const handlePrev = () => {
//     setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
//   };
  
//   const handleNext = () => {
//     setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
//   };
  
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 5000);
    
//     return () => clearInterval(interval);
//   }, [activeIndex]);
  
//   useEffect(() => {
//     if (containerRef.current) {
//       containerRef.current.style.transform = `translateX(-${activeIndex * 100}%)`;
//     }
//   }, [activeIndex]);
  
//   return (
//     <div className="relative">
//       <div className="overflow-hidden">
//         <div 
//           ref={containerRef}
//           className="flex transition-transform duration-500 ease-in-out"
//           style={{ width: `${testimonials.length * 100}%` }}
//         >
//           {testimonials.map((testimonial) => (
//             <div 
//               key={testimonial.id} 
//               className="w-full md:w-1/3 px-4"
//               style={{ flexBasis: isMobile ? '100%' : '33.333%' }}
//             >
//               <TestimonialCard
//                 name={testimonial.name}
//                 comment={testimonial.comment}
//                 rating={testimonial.rating}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
      
//       {/* Navigation Buttons */}
//       <div className="flex justify-center mt-8 space-x-2">
//         <button
//           onClick={handlePrev}
//           className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
//           aria-label="Previous testimonial"
//         >
//           <ChevronLeft size={24} className="text-primary-600" />
//         </button>
//         <div className="flex space-x-2 items-center">
//           {testimonials.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveIndex(index)}
//               className={`w-3 h-3 rounded-full transition-all ${
//                 activeIndex === index 
//                   ? 'bg-primary-500 w-6' 
//                   : 'bg-gray-300 hover:bg-gray-400'
//               }`}
//               aria-label={`Go to testimonial ${index + 1}`}
//             />
//           ))}
//         </div>
//         <button
//           onClick={handleNext}
//           className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
//           aria-label="Next testimonial"
//         >
//           <ChevronRight size={24} className="text-primary-600" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;

// src/components/ui/Testimonials.tsx

import React from 'react';
import { testimonials } from '../../data/testimonials';
import TestimonialCard from './TestimonialCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials: React.FC = () => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {testimonials.map((t) => (
        <SwiperSlide key={t.id}>
          <TestimonialCard
            name={t.name}
            comment={t.comment}
            rating={t.rating}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Testimonials;

