import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { 
  BookOpen, 
  FileText, 
  Video, 
  Download,
  Calendar,
  ArrowRight,
  TrendingUp,
  Lightbulb,
  Users,
  Target
} from 'lucide-react'
import Link from 'next/link'

export default function Resources() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary-50 section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Energy Efficiency 
            <span className="text-primary-600"> Knowledge Hub</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with the latest insights, trends, and best practices in energy services and ESCo management.
          </p>
        </div>
      </section>

      {/* Featured Content */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular guides and insights to help you succeed in the energy services industry.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-primary-100 rounded-2xl p-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">Guide</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Complete Guide to ESCo Project Management
                </h3>
                <p className="text-gray-600 mb-6">
                  A comprehensive 50-page guide covering everything from project initiation to 
                  performance verification. Includes templates and checklists.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Updated: January 2024</span>
                  <Link href="#" className="btn-primary inline-flex items-center">
                    Download Free
                    <Download className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-primary-100 rounded-2xl p-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <span className="bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-sm font-medium">Report</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  2024 Energy Services Industry Report
                </h3>
                <p className="text-gray-600 mb-6">
                  Market trends, growth opportunities, and technology adoption insights 
                  from 500+ ESCos worldwide.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Published: March 2024</span>
                  <Link href="#" className="btn-secondary inline-flex items-center">
                    Read Report
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the resources most relevant to your role and interests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "ESCo Best Practices",
                count: "24 Resources",
                description: "Project management, client relations, and operational excellence guides."
              },
              {
                icon: TrendingUp,
                title: "Industry Trends",
                count: "18 Resources", 
                description: "Market analysis, technology trends, and future outlook reports."
              },
              {
                icon: Lightbulb,
                title: "Technology Insights",
                count: "32 Resources",
                description: "IoT, AI, and software solutions for energy management."
              },
              {
                icon: Users,
                title: "Case Studies",
                count: "15 Resources",
                description: "Real-world success stories and lessons learned."
              }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                <div className="bg-primary-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-primary-600 font-medium text-sm mb-3">{category.count}</p>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fresh perspectives and actionable advice from our energy experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "5 Ways AI is Transforming Energy Audits",
                excerpt: "Discover how artificial intelligence is making energy audits faster, more accurate, and more comprehensive.",
                date: "March 15, 2024",
                readTime: "5 min read",
                category: "Technology"
              },
              {
                title: "Maximizing ROI in Commercial HVAC Projects",
                excerpt: "Best practices for ESCos to deliver exceptional returns on HVAC optimization projects.",
                date: "March 12, 2024", 
                readTime: "7 min read",
                category: "Best Practices"
              },
              {
                title: "The Future of Energy Performance Contracts",
                excerpt: "How EPCs are evolving and what ESCos need to know to stay competitive.",
                date: "March 8, 2024",
                readTime: "6 min read", 
                category: "Industry Trends"
              },
              {
                title: "Building Client Trust Through Transparent Reporting",
                excerpt: "Why clear, visual reporting is crucial for long-term ESCo-client relationships.",
                date: "March 5, 2024",
                readTime: "4 min read",
                category: "Client Relations"
              },
              {
                title: "IoT Sensors: A Game Changer for Energy Monitoring",
                excerpt: "How smart sensors are revolutionizing real-time energy data collection and analysis.",
                date: "March 1, 2024",
                readTime: "8 min read",
                category: "Technology"
              },
              {
                title: "Navigating Energy Efficiency Incentives in 2024",
                excerpt: "A comprehensive guide to federal, state, and utility incentives for energy projects.",
                date: "February 28, 2024",
                readTime: "10 min read",
                category: "Policy"
              }
            ].map((post, index) => (
              <article key={index} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Link href="#" className="text-primary-600 hover:text-primary-700 font-medium text-sm inline-flex items-center">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="#" className="btn-outline">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Webinars & Events */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Upcoming Webinars & Events</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Join our experts for live discussions on the latest trends and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "AI-Powered Energy Analytics: What's Next?",
                date: "April 15, 2024",
                time: "2:00 PM EST",
                type: "Webinar",
                description: "Explore the latest developments in AI for energy management and what they mean for ESCos."
              },
              {
                title: "ESCo Success Summit 2024",
                date: "May 20-22, 2024",
                time: "Chicago, IL",
                type: "Conference",
                description: "Three days of networking, learning, and innovation with industry leaders."
              }
            ].map((event, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-secondary-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    {event.type === 'Webinar' ? <Video className="h-6 w-6 text-white" /> : <Calendar className="h-6 w-6 text-white" />}
                  </div>
                  <span className="bg-secondary-500/20 text-secondary-300 px-3 py-1 rounded-full text-sm font-medium">
                    {event.type}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                <p className="text-primary-200 mb-4">{event.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{event.date}</div>
                    <div className="text-primary-200 text-sm">{event.time}</div>
                  </div>
                  <Link href="#" className="bg-secondary-600 hover:bg-secondary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                    Register
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Stay Updated with Energy Insights
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get the latest industry trends, best practices, and product updates delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                Subscribe
              </button>
            </div>
            <p className="text-sm opacity-75 mt-3">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}