import React from 'react';
import Layout from '../components/layout/Layout';
import SectionTitle from '../components/ui/SectionTitle';
import GalleryGrid from '../components/ui/GalleryGrid';

const Gallery: React.FC = () => {
  return (
    <Layout>
      {/* Header */}
      <div className="pt-24 pb-12 md:pt-32 md:pb-16 gradient-bg">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Browse through images of our shop, products, and repair services.
          </p>
        </div>
      </div>
      
      {/* Gallery Section */}
      <section className="py-16">
        <div className="container-custom">
          <SectionTitle
            title="Explore Our Space"
            subtitle="Take a visual journey through our products, services, and facilities."
          />
          
          <GalleryGrid />
        </div>
      </section>
      
      {/* Featured Image */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mobile Service Center</h2>
              <p className="text-gray-600 mb-6">
                Our state-of-the-art service center is equipped with the latest tools and technology
                to diagnose and fix all types of mobile issues. Our experienced technicians work diligently
                to ensure your device is repaired to perfection.
              </p>
              <p className="text-gray-600">
                Visit our store to experience our professional service firsthand. We're conveniently
                located and ready to assist you with all your mobile needs.
              </p>
            </div>
            <div>
              <img 
                src="https://i.im.ge/2025/05/14/v8SRYG.4.jpeg"
                alt="Mahira Mobiles Service Center" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Visit Our Store Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience our services and products in person. Our team is ready to assist you.
          </p>
          <a 
            href="https://maps.app.goo.gl/crLnRT4bPq9V4xLp9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Get Directions
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;