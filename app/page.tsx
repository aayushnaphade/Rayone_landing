import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { 
  BarChart3, 
  FileText, 
  TrendingUp, 
  Shield, 
  Brain, 
  Users, 
  Building2, 
  Factory, 
  Cross, 
  Landmark,
  ArrowRight,
  Star
} from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 lg:space-y-8">
              <h1 className="hero-title">
                Empowering Energy Services Companies with 
                <span className="text-primary-600"> Intelligent SaaS Solutions</span>
              </h1>
              <p className="hero-subtitle">
                Optimize energy savings, manage projects, and deliver measurable impact to clients 
                with our all-in-one ESCo software platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary inline-flex items-center justify-center">
                  Request a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/features" className="btn-outline inline-flex items-center justify-center">
                  Learn More
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">500+</div>
                  <div className="text-sm text-gray-600">ESCos Served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary-600">$2.5B</div>
                  <div className="text-sm text-gray-600">Energy Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-600">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
              </div>
            </div>
            
            {/* Hero Image/Illustration */}
            <div className="relative">
              <div className="bg-primary-100 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Energy Dashboard</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Energy Savings</span>
                      <span className="text-sm font-semibold text-secondary-600">+23.5%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary-600 h-2 rounded-full w-3/4"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 pt-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary-600">1.2M</div>
                        <div className="text-xs text-gray-500">kWh Saved</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-secondary-600">$45K</div>
                        <div className="text-xs text-gray-500">Cost Savings</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-accent-600">15%</div>
                        <div className="text-xs text-gray-500">ROI</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="section-title">
              Everything You Need to Scale Your ESCo Business
            </h2>
            <p className="section-subtitle">
              Our comprehensive platform provides all the tools and insights you need to deliver 
              exceptional energy services to your clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Energy Project Tracking",
                description: "Monitor project progress, track energy consumption, and measure performance in real-time with advanced analytics."
              },
              {
                icon: FileText,
                title: "Client Reporting & Dashboards",
                description: "Generate professional reports and interactive dashboards that showcase energy savings and ROI to your clients."
              },
              {
                icon: TrendingUp,
                title: "Savings Forecasting",
                description: "Predict future energy savings with AI-powered forecasting models and optimize project outcomes."
              },
              {
                icon: Shield,
                title: "Compliance & Documentation",
                description: "Stay compliant with industry regulations and maintain comprehensive documentation for all projects."
              },
              {
                icon: Brain,
                title: "AI-based Analytics",
                description: "Leverage machine learning to identify energy waste patterns and optimization opportunities."
              },
              {
                icon: Users,
                title: "Client Management",
                description: "Manage client relationships, track communications, and streamline project collaboration."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-primary-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="section-title">
              Trusted by Leading Industries
            </h2>
            <p className="section-subtitle">
              Our platform serves diverse sectors, helping organizations achieve their energy efficiency goals.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Building2, title: "Corporate", desc: "Office Buildings" },
              { icon: Factory, title: "Manufacturing", desc: "Industrial Facilities" },
              { icon: Cross, title: "Healthcare", desc: "Hospitals & Clinics" },
              { icon: Landmark, title: "Government", desc: "Public Buildings" }
            ].map((solution, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="bg-white rounded-xl p-8 shadow-sm group-hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <solution.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{solution.title}</h3>
                  <p className="text-gray-600 text-sm">{solution.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl lg:text-3xl font-light leading-relaxed mb-8">
              "EnergyFlow has transformed how we manage our energy projects. The AI-powered insights 
              have helped us identify 30% more savings opportunities for our clients."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">JS</span>
              </div>
              <div className="text-left">
                <div className="font-semibold">John Smith</div>
                <div className="text-primary-200">CEO, GreenTech ESCo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="section-title text-white">
            Ready to Transform Your Energy Business?
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join hundreds of ESCos already using EnergyFlow to deliver better results for their clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              Start Free Trial
            </Link>
            <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}