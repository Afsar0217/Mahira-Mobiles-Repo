import React from 'react';
import Layout from '../components/layout/Layout';
import HeroBanner from '../components/ui/HeroBanner';
import SectionTitle from '../components/ui/SectionTitle';
import ServiceCard from '../components/ui/ServiceCard';
import WhyChooseUs from '../components/ui/WhyChooseUs';
import Testimonials from '../components/ui/Testimonials';
import { services } from '../data/services';
import { ArrowRight, PhoneCall, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  // Display only first 4 services on homepage
  const featuredServices = services.slice(0, 4);
  
  return (
    <Layout>
      {/* Hero Banner */}
      <HeroBanner
        title="Your One-Stop Mobile Service Destination"
        subtitle="Expert sales and service for all your mobile needs. From repairs to accessories, we've got you covered."
        ctaText="Explore Our Services"
        ctaLink="/services"
        backgroundImage="https://i.im.ge/2025/05/14/v8oRYS.1.jpeg"
      />
      
      {/* Featured Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Our Services"
            subtitle="Offering a wide range of mobile services to meet all your needs."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="btn-primary inline-flex items-center group"
            >
              View All Services
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container-custom">
          <SectionTitle
            title="Why Choose Us"
            subtitle="We pride ourselves on providing top-notch service and quality products to our customers."
          />
          
          <WhyChooseUs />
        </div>
      </section>
      
      {/* About Quick Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Mahira Mobiles</h2>
              <p className="text-gray-300 mb-6 text-lg">
                With over 5 years of experience in the mobile industry, Mahira Mobiles has 
                established itself as a trusted name for mobile sales and services. We provide 
                comprehensive solutions for all your mobile needs, from the latest smartphones 
                to quick repairs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary-500/20 p-3 rounded-lg mr-4">
                    <PhoneCall size={24} className="text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Expert Support</h3>
                    <p className="text-gray-400">Skilled technicians to assist with all repairs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-500/20 p-3 rounded-lg mr-4">
                    <BarChart3 size={24} className="text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Best Prices</h3>
                    <p className="text-gray-400">Competitive pricing on all products and services</p>
                  </div>
                </div>
              </div>
              <Link to="/about" className="btn-primary inline-flex items-center group">
                Learn More
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://i.im.ge/2025/05/14/v8SRYG.4.jpeg"
                alt="Mobile repair technician" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-4 rounded-lg shadow-lg font-semibold">
                <span className="block text-4xl text-primary-600">5+</span>
                <span>Years of Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Customer Testimonials"
            subtitle="Don't take our word for it. Here's what our customers have to say about us."
          />
          
          <Testimonials />
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 gradient-bg text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Visit our store today or contact us to learn more about our services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn bg-white text-primary-600 hover:bg-gray-100">
              Contact Us
            </Link>
            <a 
              href="tel:+919912308214" 
              className="btn bg-transparent border-white text-white hover:bg-white/10"
            >
              Call: +91 9912308214
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;