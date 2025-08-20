import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { 
  BarChart3, 
  FileText, 
  TrendingUp, 
  Shield, 
  Brain, 
  Users,
  Zap,
  Database,
  Globe,
  Smartphone,
  Clock,
  CheckCircle
} from 'lucide-react'

export default function Features() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary-50 section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            RayoneAI: AI-Powered ESCO Management
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The all-in-one SaaS platform for Energy Service Companies to automate contract tracking, compliance, and sustainability reporting with actionable AI insights.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="bg-primary-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">AI-Driven Reporting & Dashboards</h2>
              <p className="text-lg text-gray-600 mb-6">
                Instantly generate compliance-ready reports, sustainability disclosures, and client dashboards with AI-powered insights and visualizations.
              </p>
              <ul className="space-y-3">
                {[
                  "Automated contract and savings reports",
                  "ESG & regulatory compliance dashboards",
                  "Customizable client portals",
                  "Real-time performance analytics",
                  "Export to PDF, Excel, or PowerPoint"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-secondary-600 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary-100 rounded-2xl p-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-4">AI Report Preview</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Contract Savings</span>
                    <span className="text-sm font-semibold text-secondary-600">$120,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">CO2 Reduction</span>
                    <span className="text-sm font-semibold text-secondary-600">320 tons</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Compliance Status</span>
                    <span className="text-sm font-semibold text-green-600">100% Complete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="bg-primary-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contract Automation & Management</h2>
              <p className="text-lg text-gray-600 mb-6">
                Automate contract lifecycle management for ESCOs: digital signatures, milestone tracking, and compliance alerts—all in one place.
              </p>
              <ul className="space-y-3">
                {[
                  "Digital contract creation & e-signature",
                  "Automated milestone and renewal reminders",
                  "Centralized contract repository",
                  "Audit trails for compliance",
                  "Role-based access control"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-secondary-600 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary-100 rounded-2xl p-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-4">Contract Workflow Example</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Contract Signed</span>
                    <span className="text-sm font-semibold text-green-600">Complete</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Milestone 1: Baseline Audit</span>
                    <span className="text-sm font-semibold text-secondary-600">In Progress</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Milestone 2: Savings Verification</span>
                    <span className="text-sm font-semibold text-gray-600">Pending</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-primary-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Compliance & Sustainability</h2>
              <p className="text-lg text-gray-600 mb-6">
                Ensure your ESCO meets all regulatory, ESG, and sustainability requirements with automated compliance tracking and reporting.
              </p>
              <ul className="space-y-3">
                {[
                  "Automated compliance alerts & reminders",
                  "Sustainability and ESG reporting",
                  "Audit-ready documentation",
                  "Multi-standard support (ISO, GHG, etc.)",
                  "Grant & incentive tracking"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-secondary-600 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary-100 rounded-2xl p-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-4">Compliance Dashboard</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">ESG Report</span>
                    <span className="text-sm font-semibold text-green-600">Ready</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">ISO Audit</span>
                    <span className="text-sm font-semibold text-secondary-600">In Progress</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Grant Application</span>
                    <span className="text-sm font-semibold text-gray-600">Pending</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              All-in-One ESCO SaaS Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage, automate, and grow your ESCO business—powered by AI.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI Insights & Forecasting",
                description: "Predict savings, detect anomalies, and get actionable recommendations."
              },
              {
                icon: FileText,
                title: "Automated Reporting",
                description: "Generate branded, compliance-ready reports in one click."
              },
              {
                icon: Shield,
                title: "Compliance Automation",
                description: "Track, document, and prove compliance with all major standards."
              },
              {
                icon: Users,
                title: "Client & Contract Management",
                description: "Centralize all client contracts, milestones, and communications."
              },
              {
                icon: Globe,
                title: "Multi-Site & Multi-User",
                description: "Manage projects across locations and teams with granular permissions."
              },
              {
                icon: Smartphone,
                title: "Mobile & Cloud Access",
                description: "Work from anywhere—secure, cloud-based, and mobile-friendly."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
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

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Experience RayoneAI for ESCOs
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Book a demo or start your free trial to see how RayoneAI can transform your ESCO operations with AI and automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              Book a Demo
            </a>
            <a href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
              Start Free Trial
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}