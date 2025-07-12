'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight, Calendar, MapPin, Clock, Users } from 'lucide-react'

const DemoInvitation = () => {
  const [currentSection, setCurrentSection] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [showMusicControls, setShowMusicControls] = useState(true)

  const sections = [
    {
      id: 'cover',
      title: 'Ahmad & Siti',
      subtitle: 'The Wedding',
      date: 'Sabtu, 15 Juni 2024',
      time: '18:00 WIB',
      location: 'Gedung Serbaguna Jakarta',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop'
    },
    {
      id: 'couple',
      title: 'Mempelai',
      subtitle: 'Ahmad & Siti',
      description: 'Dengan sukacita mengundang Bapak/Ibu/Saudara/i untuk hadir di acara pernikahan kami',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop'
    },
    {
      id: 'schedule',
      title: 'Jadwal Acara',
      events: [
        { time: '17:00', event: 'Akad Nikah' },
        { time: '18:00', event: 'Resepsi' },
        { time: '19:00', event: 'Makan Malam' },
        { time: '20:00', event: 'Hiburan' }
      ]
    },
    {
      id: 'location',
      title: 'Lokasi Acara',
      venue: 'Gedung Serbaguna Jakarta',
      address: 'Jl. Sudirman No. 123, Jakarta Pusat',
      mapUrl: 'https://maps.google.com'
    },
    {
      id: 'rsvp',
      title: 'RSVP',
      description: 'Konfirmasi kehadiran Anda',
      contact: '+62 812-3456-7890'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % sections.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [sections.length])

  const nextSection = () => {
    setCurrentSection((prev) => (prev + 1) % sections.length)
  }

  const prevSection = () => {
    setCurrentSection((prev) => (prev - 1 + sections.length) % sections.length)
  }

  const toggleMusic = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-rose-50 relative overflow-hidden">
      {/* Background Music Controls */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-4 right-4 z-50"
      >
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleMusic}
              className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white hover:bg-primary-600 transition-colors"
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </button>
            <button
              onClick={toggleMute}
              className="w-8 h-8 text-gray-600 hover:text-primary-500 transition-colors"
            >
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Navigation */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
          <button
            onClick={prevSection}
            className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white hover:bg-primary-600 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          
          <div className="flex space-x-1">
            {sections.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSection(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSection
                    ? 'bg-primary-500 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSection}
            className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white hover:bg-primary-600 transition-colors"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen flex items-center justify-center p-4"
        >
          {sections[currentSection].id === 'cover' && (
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-2xl mb-8">
                  <img
                    src={sections[currentSection].image}
                    alt="Cover"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-full" />
              </motion.div>
              
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-dancing font-bold text-gray-900 mb-4"
              >
                {sections[currentSection].title}
              </motion.h1>
              
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xl md:text-2xl text-primary-600 mb-6"
              >
                {sections[currentSection].subtitle}
              </motion.p>
              
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="space-y-2 text-gray-600"
              >
                <p className="flex items-center justify-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>{sections[currentSection].date}</span>
                </p>
                <p className="flex items-center justify-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>{sections[currentSection].time}</span>
                </p>
                <p className="flex items-center justify-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>{sections[currentSection].location}</span>
                </p>
              </motion.div>
            </div>
          )}

          {sections[currentSection].id === 'couple' && (
            <div className="text-center max-w-2xl">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <div className="w-64 h-64 mx-auto rounded-full overflow-hidden shadow-2xl">
                  <img
                    src={sections[currentSection].image}
                    alt="Couple"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              
              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-5xl font-dancing font-bold text-gray-900 mb-4"
              >
                {sections[currentSection].title}
              </motion.h2>
              
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xl text-primary-600 mb-6"
              >
                {sections[currentSection].subtitle}
              </motion.p>
              
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                {sections[currentSection].description}
              </motion.p>
            </div>
          )}

          {sections[currentSection].id === 'schedule' && (
            <div className="text-center max-w-2xl">
              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-3xl md:text-5xl font-dancing font-bold text-gray-900 mb-8"
              >
                {sections[currentSection].title}
              </motion.h2>
              
              <div className="space-y-4">
                {sections[currentSection].events?.map((event, index) => (
                  <motion.div
                    key={event.time}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-left">
                        <p className="text-2xl font-bold text-primary-600">{event.time}</p>
                        <p className="text-lg text-gray-700">{event.event}</p>
                      </div>
                      <Clock className="h-8 w-8 text-primary-500" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {sections[currentSection].id === 'location' && (
            <div className="text-center max-w-2xl">
              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-3xl md:text-5xl font-dancing font-bold text-gray-900 mb-8"
              >
                {sections[currentSection].title}
              </motion.h2>
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg"
              >
                <MapPin className="h-16 w-16 text-primary-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {sections[currentSection].venue}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {sections[currentSection].address}
                </p>
                <a
                  href={sections[currentSection].mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <MapPin className="h-5 w-5" />
                  <span>Lihat di Maps</span>
                </a>
              </motion.div>
            </div>
          )}

          {sections[currentSection].id === 'rsvp' && (
            <div className="text-center max-w-2xl">
              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-3xl md:text-5xl font-dancing font-bold text-gray-900 mb-8"
              >
                {sections[currentSection].title}
              </motion.h2>
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg"
              >
                <Users className="h-16 w-16 text-primary-500 mx-auto mb-6" />
                <p className="text-lg text-gray-600 mb-6">
                  {sections[currentSection].description}
                </p>
                <a
                  href={`https://wa.me/${sections[currentSection].contact}?text=Halo, saya akan hadir di acara pernikahan Ahmad & Siti`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <Heart className="h-5 w-5" />
                  <span>Konfirmasi Kehadiran</span>
                </a>
              </motion.div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default DemoInvitation