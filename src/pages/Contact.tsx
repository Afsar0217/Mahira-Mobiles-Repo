import React from 'react';
import Layout from '../components/layout/Layout';
import SectionTitle from '../components/ui/SectionTitle';
import ContactForm from '../components/ui/ContactForm';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Layout>
      {/* Header */}
      <div className="pt-24 pb-12 md:pt-32 md:pb-16 gradient-bg">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Have questions or need assistance? Reach out to us using any of the methods below.
          </p>
        </div>
      </div>
      
      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle 
                title="Get In Touch" 
                subtitle="We're here to help with all your mobile needs."
                align="left"
              />
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <Phone className="text-primary-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-gray-600">+91 9912308214</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <Mail className="text-primary-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">mahiramobile89@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <MapPin className="text-primary-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Address</h3>
                    <p className="text-gray-600">
                      59V5+PPJ, Leela Sundaraiah Nagar, Duddepudi, Wyra, <br />
                      Telangana 507165
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <Clock className="text-primary-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 9:00 AM - 9:00 PM<br />
                      Sunday: 10:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://wa.me/919912308214" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-3 bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    WhatsApp
                  </a>
                  <a 
                    href="tel:+919912308214" 
                    className="inline-flex items-center px-5 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                                    <a 
                    href="https://maps.app.goo.gl/crLnRT4bPq9V4xLp9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-3 bg-secondary-500 hover:bg-secondary-600 text-white rounded-md transition-colors"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Google Maps
                  </a>

                </div>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Visit Our Store"
            subtitle="Find us at our convenient location in Hyderabad."
          />
          
          <div className="aspect-[16/9] overflow-hidden rounded-lg shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3139234933!2d78.24323279678122!3d17.41290039643534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1634900050562!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Mahira Mobiles Location"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container-custom">
          <SectionTitle
            title="Common Questions"
            subtitle="Quick answers to frequently asked questions."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-600">What are your service hours?</h3>
              <p className="text-gray-600">
                We're open Monday through Saturday from 9:00 AM to 9:00 PM, and Sundays from 10:00 AM to 5:00 PM.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-600">Do I need an appointment for repairs?</h3>
              <p className="text-gray-600">
                While walk-ins are welcome, we recommend calling ahead for complex repairs to ensure we have the necessary parts available.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-600">How do I track my repair status?</h3>
              <p className="text-gray-600">
                You can check your repair status by calling our store with your repair receipt number or by contacting us on WhatsApp.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary-600">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept cash, all major credit/debit cards, UPI payments, and select mobile wallets.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;