import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UndanganMomenDigital.id - Platform Undangan Digital Terbaik',
  description: 'Platform undangan digital modern untuk pernikahan, ulang tahun, dan acara spesial lainnya. Desain elegan dan responsif dengan harga terjangkau.',
  keywords: 'undangan digital, undangan pernikahan, undangan online, digital invitation, wedding invitation',
  authors: [{ name: 'UndanganMomenDigital.id' }],
  openGraph: {
    title: 'UndanganMomenDigital.id - Platform Undangan Digital Terbaik',
    description: 'Platform undangan digital modern untuk pernikahan, ulang tahun, dan acara spesial lainnya.',
    url: 'https://undanganmomendigital.id',
    siteName: 'UndanganMomenDigital.id',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'UndanganMomenDigital.id',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UndanganMomenDigital.id - Platform Undangan Digital Terbaik',
    description: 'Platform undangan digital modern untuk pernikahan, ulang tahun, dan acara spesial lainnya.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}