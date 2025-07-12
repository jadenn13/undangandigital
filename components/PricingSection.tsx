'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check, Star, Heart, Sparkles, Music, Smartphone } from 'lucide-react'
import Link from 'next/link'

const PricingSection = () => {
  const features = [
    "Template Premium Pilihan",
    "Setup & Konfigurasi",
    "Hosting 1 Tahun",
    "Domain Custom",
    "Musik Background",
    "Animasi Interaktif",
    "Responsif Mobile",
    "Support WhatsApp",
    "Revisi 3x",
    "Backup Data"
  ]

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Paket <span className="text-gradient">Layanan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dapatkan undangan digital yang memukau dengan harga terjangkau. 
            Semua paket sudah termasuk setup lengkap dan support.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Basic Package */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="card p-8 relative"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Heart className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Paket Basic</h3>
              <p className="text-gray-600">Untuk acara sederhana</p>
            </div>

            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <span className="text-4xl font-bold text-gray-900">Rp 100.000</span>
                <span className="text-lg text-gray-500 line-through">150.000</span>
              </div>
              <p className="text-sm text-gray-600">Hemat 33% dari harga normal</p>
            </div>

            <div className="space-y-4 mb-8">
              {features.slice(0, 6).map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Link href="#contact" className="btn-primary w-full text-center block">
              Pilih Paket Ini
            </Link>
          </motion.div>

          {/* Premium Package */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="card p-8 relative border-2 border-primary-500 bg-gradient-to-br from-primary-50 to-white"
          >
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-primary-500 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center space-x-2">
                <Star className="h-4 w-4" />
                <span>Paling Populer</span>
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-full mb-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Paket Premium</h3>
              <p className="text-gray-600">Untuk acara spesial</p>
            </div>

            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <span className="text-4xl font-bold text-gray-900">Rp 150.000</span>
                <span className="text-lg text-gray-500 line-through">200.000</span>
              </div>
              <p className="text-sm text-gray-600">Hemat 25% dari harga normal</p>
            </div>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Link href="#contact" className="btn-primary w-full text-center block">
              Pilih Paket Ini
            </Link>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-rose-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Mengapa Memilih Kami?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Music,
                  title: "Musik Custom",
                  description: "Pilih musik sesuai tema acara"
                },
                {
                  icon: Smartphone,
                  title: "Responsif",
                  description: "Tampil sempurna di semua perangkat"
                },
                {
                  icon: Heart,
                  title: "Support 24/7",
                  description: "Bantuan via WhatsApp kapan saja"
                }
              ].map((item, index) => (
                <div key={item.title} className="text-center">
                  <item.icon className="h-12 w-12 text-primary-500 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingSection