# Project Outline - Ecologic Cleaning Services Website

## File Structure

### HTML Pages (4 pages total)
1. **index.html** - Landing page with hero section and service overview
2. **services.html** - Detailed service listings with interactive explorer
3. **contact.html** - Contact information, forms, and company details
4. **about.html** - Company information, team, and certifications

### Supporting Files
- **main.js** - Core JavaScript functionality and animations
- **resources/** - Directory for all images and media assets

## Page-by-Page Breakdown

### 1. index.html - Landing Page
**Purpose**: Create immediate impact and guide visitors to key actions

**Sections**:
- **Navigation Bar**: Logo, menu items (Home, Services, About, Contact), emergency contact
- **Hero Section**: 
  - Animated background with water particle effects (p5.js)
  - Company name with typewriter effect (Typed.js)
  - Emergency contact numbers prominently displayed
  - "Request Service" CTA button
- **Service Overview**: 
  - 6 primary service cards with hover effects
  - Quick service selector with icons
- **Why Choose Us**: 
  - Key differentiators with animated counters
  - Environmental commitment highlights
- **Emergency Contact Section**: 
  - 24/7 availability indicator
  - Phone numbers with click-to-call
  - WhatsApp integration button
- **Footer**: Contact info, social links, copyright

### 2. services.html - Service Explorer
**Purpose**: Detailed service information with interactive selection

**Sections**:
- **Navigation Bar**: Consistent across all pages
- **Page Header**: 
  - Service-focused hero image
  - Breadcrumb navigation
- **Interactive Service Grid**:
  - 13+ service cards with unique icons and images
  - Filter by service type (Emergency, Regular, Industrial)
  - Search functionality
  - Click to expand detailed service information
- **Service Details Modal**:
  - Comprehensive service description
  - Process explanation
  - Equipment used
  - Service areas covered
  - Direct contact form for that service
- **Service Request Form**:
  - Multi-step form with service selection
  - Urgency level selector
  - Location and contact details
  - File upload for problem photos
- **Related Services**: Suggestions based on user selection

### 3. contact.html - Contact & Information
**Purpose**: Multiple contact methods and company information

**Sections**:
- **Navigation Bar**: Consistent design
- **Contact Hero**: 
  - Office image or map integration
  - "Get in Touch" headline
- **Contact Methods**:
  - Phone numbers (main, emergency, WhatsApp)
  - Email address
  - Office address with directions
  - Business hours
- **Interactive Service Area Map**:
  - UAE coverage visualization using ECharts.js
  - Clickable regions showing service availability
  - Response time estimates by area
- **Contact Form**:
  - General inquiry form
  - Service-specific contact options
  - Emergency service request
- **Company Information**:
  - Business license details
  - Certifications and approvals
  - Environmental compliance
- **Staff Information**: Key team members with contact details

### 4. about.html - Company Information
**Purpose**: Build trust and showcase company credentials

**Sections**:
- **Navigation Bar**: Consistent design
- **Company Story**:
  - Mission and vision statements
  - Company history and growth
  - Environmental commitment
- **Services Overview**:
  - All 13+ services with brief descriptions
  - Equipment and technology used
  - Service standards and guarantees
- **Certifications & Compliance**:
  - Dubai Municipality approval
  - Environmental certifications
  - Safety standards
- **Team Section**:
  - Key staff members with photos
  - Experience and qualifications
  - Contact information
- **Coverage Areas**:
  - Detailed UAE service map
  - Response time information
  - Service availability by emirate

## Interactive Components Implementation

### 1. Service Request Form (Main Feature)
- **Location**: Index and Services pages
- **Technology**: Vanilla JS with form validation
- **Features**: Multi-step, service selection, file upload, real-time validation

### 2. Service Explorer with Modals
- **Location**: Services page
- **Technology**: CSS Grid with JavaScript modal system
- **Features**: Filter, search, detailed service information

### 3. Live Chat & Emergency Contact
- **Location**: All pages (floating widget)
- **Technology**: CSS animations with click handlers
- **Features**: WhatsApp integration, emergency contact popup

### 4. Interactive Service Area Map
- **Location**: Contact page
- **Technology**: ECharts.js for UAE map visualization
- **Features**: Clickable regions, service coverage display

## Content Requirements

### Images Needed:
- Hero background (generated): Environmental cleaning theme
- Service icons (searched): 13+ unique service-related images
- Equipment photos (searched): Jetting units, tankers, cleaning tools
- Staff photos (generated): Professional team member portraits
- Office/location images (searched): UAE business environment
- Certification badges (searched): Municipality and environmental approvals

### Text Content:
- Company description and mission
- Detailed service descriptions (13+ services)
- Staff member information and contact details
- Emergency procedures and contact information
- Environmental compliance information
- Service area coverage details

## Technical Implementation

### Animation Libraries:
- Anime.js for smooth transitions
- Matter.js for physics effects
- p5.js for particle systems
- ECharts.js for data visualization
- Pixi.js for advanced effects
- Splide.js for carousels
- Typed.js for text animations

### Responsive Design:
- Mobile-first approach
- Breakpoints: 768px (tablet), 1024px (desktop)
- Touch-friendly interface elements
- Optimized WhatsApp integration for mobile

### Performance Optimization:
- Lazy loading for images
- Minified CSS and JavaScript
- Optimized animations for mobile devices
- Progressive enhancement approach