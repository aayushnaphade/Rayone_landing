import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  Users,
  Calendar,
  MessageSquare
} from 'lucide-react'

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary-50 section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Let's Transform Your 
            <span className="text-primary-600"> Energy Business</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to see how EnergyFlow can help you deliver better results for your clients? 
            Get in touch with our team today.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-primary-50 rounded-2xl">
              <div className="bg-primary-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Schedule a Demo</h3>
              <p className="text-gray-600 mb-6">
                See EnergyFlow in action with a personalized demo tailored to your business needs.
              </p>
              <button className="btn-primary w-full">
                Book Demo Call
              </button>
            </div>

            <div className="text-center p-8 bg-primary-50 rounded-2xl">
              <div className="bg-primary-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Talk to Sales</h3>
              <p className="text-gray-600 mb-6">
                Discuss pricing, features, and how EnergyFlow fits your specific requirements.
              </p>
              <button className="btn-secondary w-full">
                Contact Sales
              </button>
            </div>

            <div className="text-center p-8 bg-primary-50 rounded-2xl">
              <div className="bg-primary-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Support</h3>
              <p className="text-gray-600 mb-6">
                Existing customer? Our support team is here to help you succeed.
              </p>
              <button className="btn-outline w-full">
                Support Center
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your ESCo Company"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                    I'm interested in *
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select an option</option>
                    <option value="demo">Scheduling a demo</option>
                    <option value="pricing">Getting pricing information</option>
                    <option value="trial">Starting a free trial</option>
                    <option value="partnership">Partnership opportunities</option>
                    <option value="support">Technical support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell us about your energy services business and how we can help..."
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="mt-1 mr-3 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    I agree to receive communications from EnergyFlow and understand I can unsubscribe at any time. *
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full inline-flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                We're here to help you succeed. Reach out through any of these channels.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-primary-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                    <p className="text-gray-600 mb-1">General inquiries: info@energyflow.com</p>
                    <p className="text-gray-600 mb-1">Sales: sales@energyflow.com</p>
                    <p className="text-gray-600">Support: support@energyflow.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                    <p className="text-gray-600 mb-1">Sales: +1 (555) 123-4567</p>
                    <p className="text-gray-600">Support: +1 (555) 123-4568</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
                    <p className="text-gray-600 mb-1">123 Energy Plaza</p>
                    <p className="text-gray-600 mb-1">Suite 400</p>
                    <p className="text-gray-600">San Francisco, CA 94105</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
                    <p className="text-gray-600 mb-1">Monday - Friday: 8:00 AM - 6:00 PM PST</p>
                    <p className="text-gray-600 mb-1">Saturday: 9:00 AM - 2:00 PM PST</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12">
                <div className="bg-primary-100 rounded-2xl p-8 text-center">
                  <MapPin className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Interactive Map</h3>
                  <p className="text-gray-600 mb-4">
                    Find us in the heart of San Francisco's financial district.
                  </p>
                  <button className="btn-outline">
                    View on Google Maps
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about EnergyFlow and our services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  question: "How quickly can we get started with EnergyFlow?",
                  answer: "Most clients are up and running within 2-4 weeks. Our implementation team works closely with you to ensure a smooth onboarding process, including data migration, user training, and system configuration."
                },
                {
                  question: "What types of energy data can EnergyFlow integrate with?",
                  answer: "EnergyFlow integrates with virtually any energy data source including utility meters, IoT sensors, building management systems, and existing energy management platforms. We support over 200+ device types and protocols."
                },
                {
                  question: "Is there a free trial available?",
                  answer: "Yes! We offer a 30-day free trial that includes full access to our platform features, sample data, and dedicated support to help you evaluate EnergyFlow for your business needs."
                },
                {
                  question: "How does pricing work?",
                  answer: "Our pricing is based on the number of sites/buildings you manage and the features you need. We offer flexible plans for ESCos of all sizes, from startups to enterprise organizations. Contact us for a custom quote."
                },
                {
                  question: "What kind of support do you provide?",
                  answer: "We provide comprehensive support including 24/7 technical support, dedicated customer success managers, training resources, and regular check-ins to ensure you're getting maximum value from the platform."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8">
                  <div className="flex items-start">
                    <div className="bg-primary-600 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join hundreds of ESCos already using EnergyFlow to deliver better results for their clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}