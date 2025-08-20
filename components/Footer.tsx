import React from 'react'
import Link from 'next/link'
import { Zap, Twitter, Linkedin, Facebook, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">EnergyFlow</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering Energy Services Companies with intelligent SaaS solutions to optimize energy savings, 
              manage projects, and deliver measurable impact to clients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/features" className="text-gray-300 hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/solutions" className="text-gray-300 hover:text-white transition-colors">Solutions</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/resources" className="text-gray-300 hover:text-white transition-colors">Resources</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/security" className="text-gray-300 hover:text-white transition-colors">Security</Link></li>
              <li><Link href="/compliance" className="text-gray-300 hover:text-white transition-colors">Compliance</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 EnergyFlow. All rights reserved. | Driving energy efficiency with smart technology.
          </p>
        </div>
      </div>
    </footer>
  )
}