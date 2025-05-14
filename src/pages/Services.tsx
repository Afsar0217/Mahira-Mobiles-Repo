import React from 'react';
import Layout from '../components/layout/Layout';
import SectionTitle from '../components/ui/SectionTitle';
import ServiceCard from '../components/ui/ServiceCard';
import { services } from '../data/services';
import { Phone } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <Layout>
      {/* Header */}
      <div className="pt-24 pb-12 md:pt-32 md:pb-16 gradient-bg">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive mobile services to keep you connected. From sales to repairs, 
            we've got all your mobile needs covered.
          </p>
        </div>
      </div>
      
      {/* Services Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* What We Offer */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="What We Offer"
            subtitle="At Mahira Mobiles, we provide a comprehensive range of mobile services to meet all your needs."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Expert Mobile Services</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-lg">Sales of Latest Smartphones</h4>
                    <p className="text-gray-600">
                      Browse and purchase the latest mobile phones from top brands like Apple, Samsung, Xiaomi, and more.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-lg">Expert Repair Services</h4>
                    <p className="text-gray-600">
                      Fast and reliable repair services for all types of mobile issues, from screen replacement to water damage.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-lg">Wide Range of Accessories</h4>
                    <p className="text-gray-600">
                      Find the perfect accessories for your device, including cases, chargers, screen protectors, and more.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">
                    ✓
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-lg">Quick Money Transfers & Recharges</h4>
                    <p className="text-gray-600">
                      Fast and secure money transfer services, along with instant mobile recharges for all network providers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1447254/pexels-photo-1447254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Mobile services" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-xl hidden md:block">
                <div className="flex items-center">
                  <div className="bg-primary-100 p-3 rounded-full mr-4">
                    <Phone className="text-primary-600 w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-gray-600">Need help?</p>
                    <a href="tel:+919912308214" className="text-xl font-bold text-primary-600">+91 9912308214</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Process */}
      <section className="py-16">
        <div className="container-custom">
          <SectionTitle
            title="Our Service Process"
            subtitle="We follow a simple and effective process to ensure you get the best service experience."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Diagnosis</h3>
              <p className="text-gray-600">
                Our experts diagnose the issue with your device and provide a detailed assessment.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Solution</h3>
              <p className="text-gray-600">
                We offer a transparent quote and explain the recommended solution for your device.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Repair & Return</h3>
              <p className="text-gray-600">
                Our skilled technicians fix your device and return it in perfect working condition.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our services."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-600">How long does a typical repair take?</h3>
              <p className="text-gray-600">
                Most basic repairs like screen replacements can be completed within 1-2 hours. 
                More complex repairs might take 24-48 hours depending on the issue and part availability.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-600">Do you provide warranty on repairs?</h3>
              <p className="text-gray-600">
                Yes, all our repair services come with a 30-day warranty. If you face any issues 
                with the repaired component within this period, we'll fix it for free.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-600">Do you buy old or damaged phones?</h3>
              <p className="text-gray-600">
                Yes, we offer buyback services for old or damaged phones. The value depends on 
                the model, condition, and age of the device. Visit our store for a free evaluation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-600">Can you recover data from a damaged phone?</h3>
              <p className="text-gray-600">
                In many cases, yes. Our data recovery service can help retrieve data from phones with 
                various issues, though success rates vary depending on the type and extent of damage.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 gradient-bg text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Our Services?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your requirements or visit our store.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:+919912308214" 
              className="btn bg-white text-primary-600 hover:bg-gray-100"
            >
              Call: +91 9912308214
            </a>
            <a 
              href="https://wa.me/919912308214" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn bg-transparent border-white text-white hover:bg-white/10"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;