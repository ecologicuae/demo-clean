# Ecologic Cleaning Services - Website

A professional, responsive website for environmental cleaning services in UAE.

## 🚀 Quick Deployment Options

### Option 1: GitHub Pages (Recommended - FREE)
**Best for:** Personal projects, learning, free hosting
- ✅ Completely FREE
- ✅ Easy to set up
- ✅ Automatic HTTPS
- ✅ Custom domain support
- ✅ Version control

**Quick Start:**
1. Create GitHub repository
2. Upload all files
3. Enable GitHub Pages in Settings
4. Your site is live!

📖 **[View Complete GitHub Deployment Guide](GITHUB_DEPLOYMENT.md)**

### Option 2: Netlify
**Best for:** Professional projects, advanced features
- ✅ Drag & drop deployment
- ✅ Form handling
- ✅ Edge functions
- ✅ Split testing

**Quick Start:**
1. Go to netlify.com
2. Drag folder to deploy area
3. Your site is live!

📖 **[View Netlify Deployment Guide](README.md#deployment-instructions)**

---

## Features

- **4 Complete Pages**: Home, Services, Contact, About
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Components**: Service explorer, contact forms, emergency contact system
- **Advanced Animations**: Using Anime.js, Typed.js, Matter.js, p5.js
- **WhatsApp Integration**: Floating chat button with click-to-chat
- **Service Area Map**: Interactive UAE coverage visualization
- **Emergency Contact System**: 24/7 contact with phone numbers

## File Structure

```
├── index.html              # Landing page with hero section
├── services.html           # Service listings with interactive explorer
├── contact.html            # Contact forms and service area map
├── about.html              # Company information and certifications
├── main.js                 # JavaScript functionality and animations
├── resources/              # Images and media files
│   ├── hero-cleaning.png   # Hero section background image
│   ├── staff-manager.png   # Team member photo
│   ├── staff-technician.png # Team member photo
│   └── staff-service.png   # Team member photo
├── _redirects             # Netlify redirects configuration
├── netlify.toml           # Netlify deployment configuration
├── .gitignore             # Git ignore rules
├── GITHUB_DEPLOYMENT.md   # GitHub Pages deployment guide
└── README.md              # This file
```

## Services Included

1. **Emergency Jetting Unit** - 24/7 emergency response
2. **Drain Unblocking & Cleaning** - Professional drainage solutions
3. **Drain Line Jetting Services** - High-pressure cleaning
4. **Liquid Waste Collection & Disposal** - Environmental compliance
5. **Sump Pit / Lift Station Cleaning** - Maintenance services
6. **Septic Tank Cleaning** - Residential & commercial
7. **Sewage-Treatment Plant Cleaning** - Industrial services
8. **Warehouse Floors Cleaning** - Commercial maintenance
9. **Waste Water Removal** - Emergency flood response
10. **Streets Cleaning Services** - Municipal services
11. **Sewage Water Transport** - Pumping tanker services
12. **Grease Traps Cleaning** - Restaurant & commercial kitchen

## Contact Information

- **Primary Phone**: +971 52 419 2236
- **Secondary Phone**: +971 58 616 0989
- **Email**: ecologichelp@gmail.com
- **Service Areas**: All UAE Emirates (Dubai, Abu Dhabi, Sharjah, Ajman, UAQ, RAK, Fujairah)

## Deployment Instructions

### Option 1: Netlify (Recommended)

1. **Create Netlify Account**: Go to [netlify.com](https://netlify.com) and sign up
2. **Upload Files**: 
   - Drag and drop all files from this folder to Netlify
   - Or connect to Git repository
3. **Deploy**: Netlify will automatically deploy your site
4. **Custom Domain**: Add your custom domain if needed

### Option 2: Manual Upload

1. **Zip All Files**: Create a ZIP archive containing all files and folders
2. **Upload to Netlify**: Use Netlify's drag-and-drop interface
3. **Deploy**: Site will be live instantly

### Option 3: Git Deployment

1. **Initialize Git**: `git init`
2. **Add Files**: `git add .`
3. **Commit**: `git commit -m "Initial commit"`
4. **Connect to Netlify**: Link your Git repository
5. **Auto Deploy**: Every push will auto-deploy

## Configuration Files

### _redirects
Handles client-side routing for SPA-like behavior:
- `/services` → `/services.html`
- `/contact` → `/contact.html`
- `/about` → `/about.html`
- All other routes → `/index.html`

### netlify.toml
Advanced configuration including:
- Security headers (X-Frame-Options, XSS protection)
- Cache control for assets
- Build configuration
- Redirect rules

## Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **CSS Framework**: Tailwind CSS
- **Animations**: Anime.js, Typed.js, Matter.js, p5.js
- **Charts**: ECharts.js
- **Icons**: Font Awesome 6
- **Fonts**: Google Fonts (Playfair Display, Inter, Roboto Mono)
- **Deployment**: Netlify (static hosting)

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- Optimized images (WebP/PNG)
- Lazy loading for images
- Minified CSS and JavaScript
- Efficient animations with hardware acceleration
- Responsive images with proper sizing

## Security Features

- Security headers configured
- No external dependencies on CDN (all bundled)
- XSS protection enabled
- Content type validation

## SEO Features

- Semantic HTML structure
- Meta tags for description and keywords
- Open Graph tags for social sharing
- Structured data markup ready
- Clean URL structure

## Customization

### Colors
Edit the Tailwind config in each HTML file to change the color scheme:
```javascript
colors: {
    'eco-green': '#2E7D32',
    'eco-green-light': '#4CAF50',
    'eco-blue': '#1976D2',
    'eco-blue-light': '#E3F2FD',
    'eco-gray': '#F5F5F5'
}
```

### Contact Information
Update phone numbers and email in:
- All HTML files (header and footer)
- main.js (for WhatsApp integration)
- Contact page forms

### Content
All content is editable in the HTML files. Service descriptions, team information, and company details can be modified directly.

## Support

For technical support or customization requests:
- Email: ecologichelp@gmail.com
- Phone: +971 58 616 0989

---

**Ready to deploy!** 🚀

This website is production-ready and optimized for performance, security, and SEO. Simply upload to Netlify and your site will be live instantly.
