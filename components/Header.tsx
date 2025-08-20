'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="header-container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logopng.png"
              alt="Company Logo"
              width={50}
              height={60}
              className="h-12 w-auto sm:h-14 md:h-16"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/features" className="nav-link">
              Features
            </Link>
            <Link href="/solutions" className="nav-link">
              Solutions
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/resources" className="nav-link">
              Resources
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contact" className="btn-outline">
              Request Demo
            </Link>
            <Link href="/contact" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="nav-link">
                Home
              </Link>
              <Link href="/features" className="nav-link">
                Features
              </Link>
              <Link href="/solutions" className="nav-link">
                Solutions
              </Link>
              <Link href="/about" className="nav-link">
                About
              </Link>
              <Link href="/resources" className="nav-link">
                Resources
              </Link>
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Link href="/contact" className="btn-outline text-center">
                  Request Demo
                </Link>
                <Link href="/contact" className="btn-primary text-center">
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}