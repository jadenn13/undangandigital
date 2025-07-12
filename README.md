# UndanganMomenDigital.id

Platform undangan digital modern untuk pernikahan, ulang tahun, dan acara spesial lainnya. Dibangun dengan Next.js, TypeScript, dan Tailwind CSS.

## 🚀 Fitur Utama

- **Landing Page Responsif** - Desain modern dan elegan
- **Demo Template** - Pilihan template undangan digital
- **Sistem Pembelian** - Proses pemesanan yang mudah
- **Panel Admin** - Manajemen undangan digital
- **Animasi Interaktif** - Efek visual yang memukau
- **Musik Background** - Suasana yang lebih hidup

## 🛠️ Teknologi

- **Next.js 14** - Framework React modern
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling utility-first
- **Framer Motion** - Animasi yang smooth
- **Lucide React** - Icon library
- **Vercel** - Deployment platform

## 📦 Instalasi

1. **Clone repository**
```bash
git clone https://github.com/yourusername/undanganmomendigital.git
cd undanganmomendigital
```

2. **Install dependencies**
```bash
npm install
# atau
yarn install
```

3. **Run development server**
```bash
npm run dev
# atau
yarn dev
```

4. **Buka browser**
```
http://localhost:3000
```

## 🏗️ Struktur Proyek

```
undanganmomendigital/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── DemoSection.tsx
│   ├── PricingSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── public/
│   └── images/
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## 🎨 Komponen

### Header
- Navigasi responsif
- Logo dan branding
- Menu mobile-friendly

### Hero Section
- Call-to-action utama
- Animasi background
- Fitur highlights

### Demo Section
- Showcase template
- Carousel template
- Informasi harga

### Pricing Section
- Paket layanan
- Perbandingan fitur
- CTA pembelian

### Contact Section
- Form kontak
- Informasi kontak
- Quick actions

### Footer
- Informasi perusahaan
- Social media links
- Copyright

## 🚀 Deployment

### Vercel (Recommended)

1. **Push ke GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy ke Vercel**
- Buka [vercel.com](https://vercel.com)
- Import repository dari GitHub
- Klik "Deploy"

3. **Custom Domain**
- Tambahkan domain `undanganmomendigital.id`
- Konfigurasi DNS sesuai instruksi Vercel

### Manual Deployment

1. **Build production**
```bash
npm run build
```

2. **Start production server**
```bash
npm start
```

## 📱 Responsivitas

Website sudah dioptimalkan untuk:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎯 SEO

- Meta tags lengkap
- Open Graph tags
- Twitter Cards
- Structured data
- Sitemap (otomatis)

## 🔧 Konfigurasi

### Environment Variables
```env
NEXT_PUBLIC_SITE_URL=https://undanganmomendigital.id
NEXT_PUBLIC_CONTACT_PHONE=+6281234567890
NEXT_PUBLIC_CONTACT_EMAIL=info@undanganmomendigital.id
```

### Customization
1. **Warna**: Edit `tailwind.config.js`
2. **Font**: Ganti di `globals.css`
3. **Konten**: Update komponen sesuai kebutuhan

## 📞 Kontak

- **WhatsApp**: +62 812-3456-7890
- **Email**: info@undanganmomendigital.id
- **Website**: https://undanganmomendigital.id

## 📄 Lisensi

MIT License - lihat file [LICENSE](LICENSE) untuk detail.

## 🤝 Kontribusi

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buka Pull Request

## 📈 Roadmap

- [ ] Panel admin dashboard
- [ ] Sistem pembayaran online
- [ ] Template builder
- [ ] Analytics tracking
- [ ] Multi-language support
- [ ] PWA features

---

© 2024 UndanganMomenDigital.id. All rights reserved.