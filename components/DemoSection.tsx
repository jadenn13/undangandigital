'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Star, Eye, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const DemoSection = () => {
  const [currentTemplate, setCurrentTemplate] = useState(0)

  const templates = [
    {
      id: 1,
      name: "Elegant Rose",
      category: "Pernikahan",
      price: "100.000",
      originalPrice: "150.000",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
      features: ["Desain Elegan", "Animasi Halus", "Musik Background", "Responsif"],
      description: "Template pernikahan dengan tema rose yang elegan dan romantis"
    },
    {
      id: 2,
      name: "Modern Minimalist",
      category: "Pernikahan",
      price: "100.000",
      originalPrice: "150.000",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=400&fit=crop",
      features: ["Desain Minimalis", "Clean Layout", "Fast Loading", "Responsif"],
      description: "Template minimalis dengan fokus pada konten dan kecepatan"
    },
    {
      id: 3,
      name: "Birthday Celebration",
      category: "Ulang Tahun",
      price: "100.000",
      originalPrice: "150.000",
      image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&h=400&fit=crop",
      features: ["Desain Ceria", "Animasi Birthday", "Musik Upbeat", "Responsif"],
      description: "Template ulang tahun yang ceria dan penuh warna"
    },
    {
      id: 4,
      name: "Corporate Event",
      category: "Acara Kantor",
      price: "100.000",
      originalPrice: "150.000",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop",
      features: ["Desain Profesional", "Layout Formal", "Easy Navigation", "Responsif"],
      description: "Template untuk acara corporate yang profesional dan formal"
    }
  ]

  const nextTemplate = () => {
    setCurrentTemplate((prev) => (prev + 1) % templates.length)
  }

  const prevTemplate = () => {
    setCurrentTemplate((prev) => (prev - 1 + templates.length) % templates.length)
  }

  return (
    <section id="demo" className="py-20 bg-gray-50">
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
            Demo <span className="text-gradient">Template</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pilih template yang sesuai dengan acara Anda. Semua template responsif dan dapat disesuaikan dengan kebutuhan.
          </p>
        </motion.div>

        {/* Template Showcase */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevTemplate}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          
          <button
            onClick={nextTemplate}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>

          {/* Template Display */}
          <motion.div
            key={currentTemplate}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Template Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={templates[currentTemplate].image}
                  alt={templates[currentTemplate].name}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900">{templates[currentTemplate].name}</h3>
                        <p className="text-sm text-gray-600">{templates[currentTemplate].category}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Template Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {templates[currentTemplate].name}
                </h3>
                <p className="text-lg text-gray-600 mb-4">
                  {templates[currentTemplate].description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Fitur Template:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {templates[currentTemplate].features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <Heart className="h-4 w-4 text-primary-500" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-gradient-to-r from-primary-50 to-rose-50 p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Harga Promo</p>
                    <div className="flex items-center space-x-2">
                      <span className="text-3xl font-bold text-primary-600">
                        Rp {templates[currentTemplate].price}
                      </span>
                      <span className="text-lg text-gray-500 line-through">
                        Rp {templates[currentTemplate].originalPrice}
                      </span>
                    </div>
                  </div>
                  <div className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Hemat 33%
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  *Harga sudah termasuk setup dan hosting selama 1 tahun
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#contact" className="btn-primary flex items-center justify-center space-x-2">
                  <span>Pesan Template Ini</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <button className="btn-secondary flex items-center justify-center space-x-2">
                  <Eye className="h-5 w-5" />
                  <span>Lihat Demo Lengkap</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Template Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {templates.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTemplate(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTemplate
                    ? 'bg-primary-500 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default DemoSection