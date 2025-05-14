import React from 'react';
import Layout from '../components/layout/Layout';
import SectionTitle from '../components/ui/SectionTitle';
import { PhoneCall, Clock, Users, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <Layout>
      {/* Header */}
      <div className="pt-24 pb-12 md:pt-32 md:pb-16 gradient-bg">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Learn more about Mahira Mobiles and our journey to becoming a trusted name in mobile services.
          </p>
        </div>
      </div>
      
      {/* Story Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Mahira Mobiles was founded in 205 with a simple mission: to provide high-quality 
                mobile products and services at affordable prices. What started as a small repair 
                shop has now grown into a comprehensive mobile service center offering a wide range 
                of services.
              </p>
              <p className="text-gray-600 mb-6">
                Over the years, we've built a reputation for reliability, honesty, and expert service. 
                Our team of skilled technicians has helped thousands of customers with their mobile needs, 
                from repairs to finding the perfect new device.
              </p>
              <p className="text-gray-600">
                Today, we continue to grow and expand our services while maintaining our commitment 
                to customer satisfaction and technical excellence.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Team working together" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <div className="text-center">
                  <span className="block text-4xl font-bold text-primary-600">2023</span>
                  <span className="text-gray-600">Established</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                To provide reliable, high-quality mobile products and services that exceed customer 
                expectations while maintaining affordability and technical excellence.
              </p>
              <p className="text-gray-600">
                We strive to be the one-stop solution for all mobile needs, ensuring that our 
                customers stay connected with devices that work perfectly for them.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-4">
                To be the most trusted name in mobile sales and services, known for our integrity, 
                expertise, and customer-focused approach.
              </p>
              <p className="text-gray-600">
                We aim to grow and expand while continuously improving our services and adapting 
                to the evolving technology landscape.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16">
        <div className="container-custom">
          <SectionTitle
            title="Our Impact"
            subtitle="Numbers that speak to our experience and success."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-primary-100 rounded-full">
                <PhoneCall size={30} className="text-primary-600" />
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">5000+</div>
              <div className="text-lg text-gray-600">Devices Repaired</div>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-primary-100 rounded-full">
                <Clock size={30} className="text-primary-600" />
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">5+</div>
              <div className="text-lg text-gray-600">Years of Experience</div>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-primary-100 rounded-full">
                <Users size={30} className="text-primary-600" />
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">3000+</div>
              <div className="text-lg text-gray-600">Happy Customers</div>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-primary-100 rounded-full">
                <Briefcase size={30} className="text-primary-600" />
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">10+</div>
              <div className="text-lg text-gray-600">Brand Partnerships</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Meet Our Team"
            subtitle="The skilled professionals behind our exceptional service."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src="https://i.im.ge/2025/05/14/v8oHmX.6.jpeg"
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-xl font-semibold text-white">Shaik Waheed</h3>
                    <p className="text-gray-300">Owner</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src="https://i.im.ge/2025/05/14/v8SJXF.6.jpeg"
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-xl font-semibold text-white">Repairs</h3>
                    <p className="text-gray-300">All Types of Servics</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src="https://i.im.ge/2025/05/14/v8S8hL.3.jpeg"
                  alt="Team Member" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-xl font-semibold text-white">Sales</h3>
                    <p className="text-gray-300">Products Selling and Retail</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 gradient-bg text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Our Service?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Visit our store or contact us today to discover how we can help with your mobile needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn bg-white text-primary-600 hover:bg-gray-100">
              Contact Us
            </Link>
            <Link to="/services" className="btn bg-transparent border-white text-white hover:bg-white/10">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;