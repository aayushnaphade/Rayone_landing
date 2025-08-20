import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {
  Building2,
  Factory,
  Cross,
  Landmark,
  TrendingUp,
  DollarSign,
  Leaf,
  Users,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

export default function Solutions() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary-50 section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Tailored Solutions for
            <span className="text-primary-600"> Every Industry</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From corporate offices to manufacturing facilities, our platform adapts to your industry's
            unique energy management needs and compliance requirements.
          </p>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="section-padding bg-white">
        <div className="container-max">
          {/* Corporate/Real Estate */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="bg-primary-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Corporate & Real Estate</h2>
              <p className="text-lg text-gray-600 mb-6">
                Help office buildings, retail spaces, and commercial real estate portfolios
                achieve significant energy savings and sustainability goals.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <TrendingUp className="h-8 w-8 text-primary-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Average Savings</h3>
                  <p className="text-2xl font-bold text-primary-600">25-35%</p>
                  <p className="text-sm text-gray-600">Energy cost reduction</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Leaf className="h-8 w-8 text-secondary-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">CO2 Reduction</h3>
                  <p className="text-2xl font-bold text-secondary-600">40%</p>
                  <p className="text-sm text-gray-600">Carbon footprint</p>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "HVAC optimization and scheduling",
                  "Lighting control and LED retrofits",
                  "Building automation integration",
                  "Tenant billing and sub-metering",
                  "ENERGY STAR benchmarking"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-secondary-600 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="btn-primary inline-flex items-center">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="bg-primary-100 rounded-2xl p-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-4">Corporate Portfolio Dashboard</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Downtown Office Tower</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">-28% Usage</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Retail Complex A</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">-31% Usage</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Business Park B</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">-22% Usage</span>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex justify-between">
                      <span className="text-sm font-semibold text-gray-900">Total Savings</span>
                      <span className="text-sm font-bold text-secondary-600">$2.4M annually</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Manufacturing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1">
              <div className="bg-primary-100 rounded-2xl p-8">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="font-semibold text-gray-900 mb-4">Manufacturing Analytics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Production Line 1</span>
                      <span className="text-sm font-semibold text-primary-600">85% Efficiency</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Compressed Air System</span>
                      <span className="text-sm font-semibold text-accent-600">Optimization Needed</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Motor Drives</span>
                      <span className="text-sm font-semibold text-secondary-600">Peak Performance</span>
                    </div>
                    <div className="pt-4 border-t">
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary-600">$180K</div>
                        <div className="text-xs text-gray-500">Potential Annual Savings</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="bg-primary-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Factory className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Manufacturing & Industrial</h2>
              <p className="text-lg text-gray-600 mb-6">
                Optimize energy-intensive manufacturing processes, reduce peak demand charges,
                and improve overall operational efficiency.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <DollarSign className="h-8 w-8 text-primary-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Cost Savings</h3>
                  <p className="text-2xl font-bold text-primary-600">15-25%</p>
                  <p className="text-sm text-gray-600">Energy expenses</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <TrendingUp className="h-8 w-8 text-secondary-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Efficiency Gain</h3>
                  <p className="text-2xl font-bold text-secondary-600">20%</p>
                  <p className="text-sm text-gray-600">Process optimization</p>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Motor and drive optimization",
                  "Compressed air system efficiency",
                  "Process heating and cooling",
                  "Peak demand management",
                  "Power factor correction"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-secondary-600 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="btn-primary inline-flex items-center">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Healthcare */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="bg-primary-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Cross className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Healthcare Facilities</h2>
              <p className="text-lg text-gray-600 mb-6">
                Ensure patient comfort and safety while achieving significant energy savings
                in hospitals, clinics, and medical facilities.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Users className="h-8 w-8 text-primary-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Patient Comfort</h3>
                  <p className="text-2xl font-bold text-primary-600">100%</p>
                  <p className="text-sm text-gray-600">Maintained standards</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <DollarSign className="h-8 w-8 text-secondary-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Cost Reduction</h3>
                  <p className="text-2xl font-bold text-secondary-600">30%</p>
                  <p className="text-sm text-gray-600">Energy costs</p>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Critical system monitoring",
                  "Operating room climate control",
                  "Medical equipment optimization",
                  "Emergency backup systems",
                  "Infection control compliance"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-secondary-600 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="btn-primary inline-flex items-center">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="bg-primary-100 rounded-2xl p-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-4">Hospital Energy Monitor</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">ICU Climate Control</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Optimal</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Operating Rooms</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Stable</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">General Wards</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Optimizing</span>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex justify-between">
                      <span className="text-sm font-semibold text-gray-900">Monthly Savings</span>
                      <span className="text-sm font-bold text-secondary-600">$45,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Government */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-primary-100 rounded-2xl p-8">
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="font-semibold text-gray-900 mb-4">Government Portfolio</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">City Hall</span>
                      <span className="text-sm font-semibold text-secondary-600">-35% Usage</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Public Library</span>
                      <span className="text-sm font-semibold text-secondary-600">-28% Usage</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Community Center</span>
                      <span className="text-sm font-semibold text-secondary-600">-42% Usage</span>
                    </div>
                    <div className="pt-4 border-t">
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary-600">$850K</div>
                        <div className="text-xs text-gray-500">Taxpayer Savings</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="bg-primary-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Landmark className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Government & Public Sector</h2>
              <p className="text-lg text-gray-600 mb-6">
                Help government agencies meet sustainability mandates, reduce taxpayer burden,
                and demonstrate environmental leadership.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Leaf className="h-8 w-8 text-primary-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Sustainability</h3>
                  <p className="text-2xl font-bold text-primary-600">50%</p>
                  <p className="text-sm text-gray-600">Carbon reduction</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <DollarSign className="h-8 w-8 text-secondary-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Budget Savings</h3>
                  <p className="text-2xl font-bold text-secondary-600">$2M+</p>
                  <p className="text-sm text-gray-600">Annual savings</p>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "ENERGY STAR compliance",
                  "Federal mandate reporting",
                  "Public transparency dashboards",
                  "Multi-building management",
                  "Utility incentive tracking"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-secondary-600 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="btn-primary inline-flex items-center">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Stats */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Proven Results Across Industries</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our clients consistently achieve significant energy savings and ROI improvements.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary-400 mb-2">500+</div>
              <div className="text-primary-200">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary-400 mb-2">$2.5B</div>
              <div className="text-primary-200">Energy Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary-400 mb-2">30%</div>
              <div className="text-primary-200">Average Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary-400 mb-2">18 Mo</div>
              <div className="text-primary-200">Average Payback</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            See how EnergyFlow can deliver results specific to your industry and business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              Schedule Industry Demo
            </Link>
            <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}