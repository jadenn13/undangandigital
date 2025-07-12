'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Sparkles, ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full opacity-20"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-rose-200 rounded-full opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Sparkles className="h-4 w-4" />
            <span>Platform Undangan Digital Terbaik</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
          >
            <span className="text-gradient">Undangan Digital</span>
            <br />
            <span className="text-gray-800">yang Memukau</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Buat undangan digital yang elegan dan modern untuk pernikahan, ulang tahun, 
            dan acara spesial lainnya. Desain responsif dengan animasi yang memukau.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link href="#demo" className="btn-primary flex items-center space-x-2">
              <span>Lihat Demo Template</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="#contact" className="btn-secondary flex items-center space-x-2">
              <span>Hubungi Kami</span>
              <Heart className="h-5 w-5" />
            </Link>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              {
                icon: Heart,
                title: "Desain Elegan",
                description: "Template yang indah dan profesional"
              },
              {
                icon: Sparkles,
                title: "Responsif",
                description: "Tampil sempurna di semua perangkat"
              },
              {
                icon: Play,
                title: "Interaktif",
                description: "Animasi dan musik yang memukau"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="card p-6 text-center"
              >
                <feature.icon className="h-12 w-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero