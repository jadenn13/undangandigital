import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import DemoSection from '../components/DemoSection'
import PricingSection from '../components/PricingSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <DemoSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  )
}