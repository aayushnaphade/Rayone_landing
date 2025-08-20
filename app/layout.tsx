import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EnergyFlow - ESCo SaaS Platform',
  description: 'Empowering Energy Services Companies with Intelligent SaaS Solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}