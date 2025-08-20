import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { 
  Target, 
  Eye, 
  Heart,
  Users,
  Award,
  Globe,
  Zap,
  Leaf,
  TrendingUp
} from 'lucide-react'
import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Driving Energy Efficiency with 
                <span className="text-primary-600"> Smart Technology</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                We're on a mission to empower Energy Services Companies with the tools they need 
                to create a more sustainable future through intelligent energy management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Join Our Mission
                </Link>
                <Link href="/resources" className="btn-outline">
                  Our Story
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-primary-100 rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <Zap className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                    <div className="text-lg font-bold text-gray-900">500+</div>
                    <div className="text-sm text-gray-600">ESCos Served</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <Leaf className="h-8 w-8 text-secondary-600 mx-auto mb-2" />
                    <div className="text-lg font-bold text-gray-900">2.5M</div>
                    <div className="text-sm text-gray-600">Tons CO2 Saved</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <TrendingUp className="h-8 w-8 text-accent-600 mx-auto mb-2" />
                    <div className="text-lg font-bold text-gray-900">$2.5B</div>
                    <div className="text-sm text-gray-600">Energy Savings</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <Globe className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                    <div className="text-lg font-bold text-gray-900">25+</div>
                    <div className="text-sm text-gray-600">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-primary-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To empower Energy Services Companies with intelligent SaaS solutions that make 
                energy efficiency accessible, measurable, and profitable for businesses worldwide.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                A world where every building operates at peak energy efficiency, contributing to 
                a sustainable future through data-driven insights and smart technology.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-gray-600 leading-relaxed">
                Innovation, sustainability, transparency, and customer success drive everything we do. 
                We believe in making complex energy data simple and actionable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-xl text-gray-600">
                Born from the need to make energy management smarter and more accessible.
              </p>
            </div>

            <div className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Energy Services Companies were struggling with fragmented tools, manual reporting, 
                    and difficulty demonstrating ROI to clients. The industry needed a unified platform 
                    that could handle the complexity of modern energy management.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Traditional solutions were either too complex for smaller ESCos or too limited 
                    for enterprise needs. There was a clear gap in the market for an intelligent, 
                    scalable SaaS platform.
                  </p>
                </div>
                <div className="bg-primary-100 rounded-2xl p-8">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <h4 className="font-semibold text-gray-900 mb-4">Industry Pain Points</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Manual data collection and reporting</li>
                      <li>• Fragmented software solutions</li>
                      <li>• Difficulty proving ROI to clients</li>
                      <li>• Limited scalability options</li>
                      <li>• High implementation costs</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="bg-primary-100 rounded-2xl p-8">
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                      <h4 className="font-semibold text-gray-900 mb-4">Our Solution</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• All-in-one SaaS platform</li>
                        <li>• AI-powered analytics</li>
                        <li>• Automated reporting</li>
                        <li>• Scalable architecture</li>
                        <li>• Proven ROI tracking</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The Solution</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We built EnergyFlow from the ground up, working closely with ESCos to understand 
                    their unique challenges. Our platform combines the power of IoT integration, 
                    AI analytics, and intuitive user experience.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Today, we're proud to serve over 500 Energy Services Companies worldwide, 
                    helping them deliver measurable results and grow their businesses sustainably.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diverse group of energy experts, engineers, and innovators committed to 
              transforming the energy services industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "CEO & Co-Founder",
                bio: "Former energy consultant with 15+ years in ESCo operations. MIT Energy Systems graduate.",
                image: "SC"
              },
              {
                name: "Michael Rodriguez",
                role: "CTO & Co-Founder",
                bio: "Software architect specializing in IoT and AI. Previously led engineering at two successful SaaS startups.",
                image: "MR"
              },
              {
                name: "Dr. Emily Watson",
                role: "VP of Product",
                bio: "Energy efficiency researcher with PhD in Environmental Engineering. Expert in building systems optimization.",
                image: "EW"
              },
              {
                name: "David Kim",
                role: "VP of Engineering",
                bio: "Full-stack developer with expertise in scalable cloud architecture and machine learning systems.",
                image: "DK"
              },
              {
                name: "Lisa Thompson",
                role: "VP of Sales",
                bio: "20+ years in energy services sales. Deep relationships across the ESCo industry.",
                image: "LT"
              },
              {
                name: "James Park",
                role: "Head of Customer Success",
                bio: "Former ESCo project manager. Ensures our clients achieve maximum value from our platform.",
                image: "JP"
              }
            ].map((member, index) => (
              <div key={index} className="text-center group">
                <div className="bg-primary-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-200">
                  <span className="text-white text-xl font-bold">{member.image}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with leading technology and industry partners to deliver the best solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[
              "Microsoft Azure",
              "AWS",
              "Schneider Electric",
              "Johnson Controls",
              "Honeywell",
              "Siemens",
              "Google Cloud",
              "Salesforce",
              "ENERGY STAR",
              "ASHRAE",
              "NAESCO",
              "USGBC"
            ].map((partner, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 text-center">
                <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-primary-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Awards & Recognition</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our commitment to innovation and customer success has been recognized by industry leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                award: "SaaS Innovation Award",
                year: "2024",
                organization: "Energy Tech Awards"
              },
              {
                award: "Best ESCo Platform",
                year: "2023",
                organization: "CleanTech Review"
              },
              {
                award: "Sustainability Leader",
                year: "2023",
                organization: "GreenBiz Awards"
              },
              {
                award: "Customer Choice",
                year: "2022",
                organization: "Energy Services Coalition"
              }
            ].map((recognition, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{recognition.award}</h3>
                <p className="text-primary-200 text-sm">{recognition.organization}</p>
                <p className="text-secondary-400 font-medium">{recognition.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Join Us in Building a Sustainable Future
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Whether you're an ESCo looking to grow your business or a professional interested in joining our team, 
            we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              Partner With Us
            </Link>
            <Link href="/careers" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
              View Careers
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}