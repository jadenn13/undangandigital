# Panduan Deployment UndanganMomenDigital.id

## 🚀 Deployment ke Vercel

### 1. Persiapan Repository

Pastikan semua file sudah siap:
```bash
# Cek struktur file
ls -la

# Pastikan file penting ada
- package.json ✅
- next.config.js ✅
- tailwind.config.js ✅
- app/layout.tsx ✅
- app/page.tsx ✅
- components/ ✅
- public/ ✅
```

### 2. Push ke GitHub

```bash
# Inisialisasi git (jika belum)
git init

# Tambahkan semua file
git add .

# Commit pertama
git commit -m "Initial commit: UndanganMomenDigital.id platform"

# Tambahkan remote repository
git remote add origin https://github.com/yourusername/undanganmomendigital.git

# Push ke main branch
git push -u origin main
```

### 3. Deploy ke Vercel

#### Opsi A: Via Vercel Dashboard
1. Buka [vercel.com](https://vercel.com)
2. Sign in dengan GitHub
3. Klik "New Project"
4. Import repository `undanganmomendigital`
5. Konfigurasi:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
6. Klik "Deploy"

#### Opsi B: Via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login ke Vercel
vercel login

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Y
# - Which scope? [your-account]
# - Link to existing project? N
# - What's your project's name? undanganmomendigital
# - In which directory is your code located? ./
# - Want to override the settings? N
```

### 4. Konfigurasi Domain

#### Custom Domain
1. Di Vercel Dashboard, buka project
2. Klik "Settings" → "Domains"
3. Tambahkan domain: `undanganmomendigital.id`
4. Ikuti instruksi DNS:
   ```
   Type: CNAME
   Name: @
   Value: cname.vercel-dns.com
   ```

#### Environment Variables
Di Vercel Dashboard → Settings → Environment Variables:
```env
NEXT_PUBLIC_SITE_URL=https://undanganmomendigital.id
NEXT_PUBLIC_CONTACT_PHONE=+6281234567890
NEXT_PUBLIC_CONTACT_EMAIL=info@undanganmomendigital.id
```

### 5. Testing

Setelah deploy, test fitur-fitur:
- ✅ Landing page responsif
- ✅ Demo template berfungsi
- ✅ Form kontak
- ✅ Navigasi smooth
- ✅ Animasi berjalan
- ✅ Mobile-friendly

### 6. Monitoring

#### Analytics
- Setup Google Analytics
- Monitor performa dengan Vercel Analytics
- Track conversion rate

#### Performance
- Lighthouse score target: 90+
- Core Web Vitals: Good
- Mobile performance: Optimal

### 7. Maintenance

#### Regular Updates
```bash
# Update dependencies
npm update

# Security audit
npm audit fix

# Re-deploy
git add .
git commit -m "Update dependencies"
git push
```

#### Backup Strategy
- Database backup (jika ada)
- File backup di cloud storage
- Version control dengan Git

### 8. SEO Optimization

#### Meta Tags
- Title: "UndanganMomenDigital.id - Platform Undangan Digital Terbaik"
- Description: "Platform undangan digital modern untuk pernikahan, ulang tahun, dan acara spesial lainnya"
- Keywords: "undangan digital, undangan pernikahan, digital invitation"

#### Sitemap
- Otomatis generate di `/sitemap.xml`
- Submit ke Google Search Console

#### Social Media
- Open Graph tags
- Twitter Cards
- Favicon dan app icons

### 9. Security

#### HTTPS
- Otomatis di Vercel
- SSL certificate included

#### Headers
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block

### 10. Troubleshooting

#### Common Issues
1. **Build Error**
   ```bash
   npm run build
   # Check error logs
   ```

2. **Domain Not Working**
   - Check DNS settings
   - Wait 24-48 hours for propagation

3. **Performance Issues**
   - Optimize images
   - Enable compression
   - Use CDN

### 11. Post-Deployment Checklist

- [ ] Website accessible
- [ ] All pages working
- [ ] Mobile responsive
- [ ] Contact form functional
- [ ] SEO meta tags set
- [ ] Analytics tracking
- [ ] Social media links
- [ ] SSL certificate active
- [ ] Performance optimized
- [ ] Backup strategy in place

### 12. Launch Strategy

#### Soft Launch
1. Deploy to staging
2. Test thoroughly
3. Share with beta users
4. Gather feedback

#### Full Launch
1. Deploy to production
2. Announce on social media
3. Submit to directories
4. Start marketing campaign

---

**Status**: Ready for deployment
**Last Updated**: January 2024
**Version**: 1.0.0