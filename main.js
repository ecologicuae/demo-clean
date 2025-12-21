// Ecologic Cleaning Services - Main JavaScript File
// Advanced animations and interactive features

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeInteractiveComponents();
    initializeScrollEffects();
    initializeContactFeatures();
    initializeServiceExplorer();
    initializeMobileMenu();
    initializeScrollAnimations();
});

// Animation Initialization
function initializeAnimations() {
    // Typewriter effect for hero text
    if (document.querySelector('.hero-title')) {
        new Typed('.hero-title', {
            strings: ['Ecologic Cleaning Services', '24/7 Emergency Services', 'Professional Drain Solutions'],
            typeSpeed: 60,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }

    // Animate service cards on load
    anime({
        targets: '.service-card',
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(100),
        duration: 800,
        easing: 'easeOutExpo'
    });

    // Animate statistics counters
    if (document.querySelector('.stat-number')) {
        animateCounters();
    }
}

// Mobile Menu Functionality
function initializeMobileMenu() {
    // Mobile menu toggle
    window.toggleMobileMenu = function() {
        const mobileMenu = document.getElementById('mobile-menu');
        const overlay = document.getElementById('mobile-menu-overlay');
        const hamburger = document.querySelector('.hamburger');
        
        if (mobileMenu && overlay) {
            const isActive = mobileMenu.classList.contains('active');
            
            if (isActive) {
                mobileMenu.classList.remove('active');
                overlay.classList.add('hidden');
                if (hamburger) hamburger.classList.remove('active');
                document.body.style.overflow = 'auto';
            } else {
                mobileMenu.classList.add('active');
                overlay.classList.remove('hidden');
                if (hamburger) hamburger.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }
    };

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        const mobileMenu = document.getElementById('mobile-menu');
        const overlay = document.getElementById('mobile-menu-overlay');
        const hamburger = document.querySelector('.hamburger');
        
        if (mobileMenu && overlay && !mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
            mobileMenu.classList.remove('active');
            overlay.classList.add('hidden');
            if (hamburger) hamburger.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Close mobile menu on window resize (desktop)
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) {
            const mobileMenu = document.getElementById('mobile-menu');
            const overlay = document.getElementById('mobile-menu-overlay');
            const hamburger = document.querySelector('.hamburger');
            
            if (mobileMenu && overlay) {
                mobileMenu.classList.remove('active');
                overlay.classList.add('hidden');
                if (hamburger) hamburger.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        }
    });
}

// Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
        observer.observe(el);
    });
}

// Interactive Components
function initializeInteractiveComponents() {
    // Service request form
    initializeServiceForm();
    
    // Floating WhatsApp button
    initializeWhatsAppButton();
    
    // Emergency contact popup
    initializeEmergencyContact();
    
    // Service area map
    initializeServiceMap();
}

// Service Request Form with Multi-Step Functionality
function initializeServiceForm() {
    const form = document.getElementById('service-form');
    if (!form) return;

    let currentStep = 1;
    const totalSteps = 3;

    // Step navigation
    window.nextStep = function() {
        if (currentStep < totalSteps) {
            document.getElementById(`step-${currentStep}`).style.display = 'none';
            currentStep++;
            document.getElementById(`step-${currentStep}`).style.display = 'block';
            updateProgressBar();
        }
    };

    window.prevStep = function() {
        if (currentStep > 1) {
            document.getElementById(`step-${currentStep}`).style.display = 'none';
            currentStep--;
            document.getElementById(`step-${currentStep}`).style.display = 'block';
            updateProgressBar();
        }
    };

    function updateProgressBar() {
        const progress = (currentStep / totalSteps) * 100;
        document.querySelector('.progress-fill').style.width = `${progress}%`;
    }

    // Form validation
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            submitServiceRequest();
        }
    });
}

// WhatsApp Integration
function initializeWhatsAppButton() {
    const whatsappBtn = document.querySelector('.whatsapp-float');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function() {
            const phoneNumber = '+971589076688'; // Primary contact number
            const message = encodeURIComponent('Hello, I need cleaning services. Can you help?');
            window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
        });

        // Animate WhatsApp button on scroll
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                whatsappBtn.style.transform = 'scale(1)';
            } else {
                whatsappBtn.style.transform = 'scale(0.8)';
            }
        });
    }
}

// Emergency Contact System
function initializeEmergencyContact() {
    const emergencyBtn = document.querySelector('.emergency-contact');
    if (emergencyBtn) {
        emergencyBtn.addEventListener('click', function() {
            showEmergencyModal();
        });
    }
}

function showEmergencyModal() {
    const modal = document.createElement('div');
    modal.className = 'emergency-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>Emergency Contact</h2>
            <div class="emergency-numbers">
                <a href="tel:+971589076688" class="emergency-number">
                    <i class="fas fa-phone"></i>
                    +971 58 907 6688
                    <span>Primary Emergency</span>
                </a>
                <a href="tel:+971582658191" class="emergency-number">
                    <i class="fas fa-phone"></i>
                    +971 58 265 8191
                    <span>Secondary Emergency</span>
                </a>
                <a href="https://wa.me/971589076688" class="emergency-number whatsapp">
                    <i class="fab fa-whatsapp"></i>
                    WhatsApp Emergency
                    <span>24/7 Available</span>
                </a>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    // Close modal functionality
    modal.querySelector('.close-modal').addEventListener('click', function() {
        document.body.removeChild(modal);
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// Service Explorer with Filtering
function initializeServiceExplorer() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const serviceCards = document.querySelectorAll('.service-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Filter services
            serviceCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                    anime({
                        targets: card,
                        opacity: [0, 1],
                        scale: [0.8, 1],
                        duration: 400,
                        easing: 'easeOutExpo'
                    });
                } else {
                    anime({
                        targets: card,
                        opacity: [1, 0],
                        scale: [1, 0.8],
                        duration: 200,
                        easing: 'easeInExpo',
                        complete: function() {
                            card.style.display = 'none';
                        }
                    });
                }
            });
        });
    });
}

// Scroll Effects and Parallax
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                if (element.classList.contains('fade-in')) {
                    anime({
                        targets: element,
                        translateY: [30, 0],
                        opacity: [0, 1],
                        duration: 600,
                        easing: 'easeOutExpo'
                    });
                }
                
                if (element.classList.contains('slide-in-left')) {
                    anime({
                        targets: element,
                        translateX: [-50, 0],
                        opacity: [0, 1],
                        duration: 800,
                        easing: 'easeOutExpo'
                    });
                }
                
                if (element.classList.contains('slide-in-right')) {
                    anime({
                        targets: element,
                        translateX: [50, 0],
                        opacity: [0, 1],
                        duration: 800,
                        easing: 'easeOutExpo'
                    });
                }
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
        observer.observe(el);
    });
}

// Service Area Map using ECharts
function initializeServiceMap() {
    const mapContainer = document.getElementById('service-map');
    if (!mapContainer) return;

    const chart = echarts.init(mapContainer);
    
    const option = {
        title: {
            text: 'Service Coverage Areas',
            left: 'center',
            textStyle: {
                color: '#2E7D32',
                fontSize: 24,
                fontWeight: 'bold'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                return `${params.name}<br/>Response Time: ${params.data.responseTime}<br/>Coverage: ${params.data.coverage}`;
            }
        },
        series: [{
            type: 'map',
            map: 'UAE',
            roam: true,
            itemStyle: {
                areaColor: '#E3F2FD',
                borderColor: '#1976D2'
            },
            emphasis: {
                itemStyle: {
                    areaColor: '#4CAF50'
                }
            },
            data: [
                {name: 'Dubai', value: 1, responseTime: '30-60 min', coverage: 'Full Coverage'},
                {name: 'Abu Dhabi', value: 2, responseTime: '45-90 min', coverage: 'Full Coverage'},
                {name: 'Sharjah', value: 3, responseTime: '30-45 min', coverage: 'Full Coverage'},
                {name: 'Ajman', value: 4, responseTime: '45-60 min', coverage: 'Full Coverage'},
                {name: 'Umm Al Quwain', value: 5, responseTime: '60-90 min', coverage: 'Limited Coverage'},
                {name: 'Ras Al Khaimah', value: 6, responseTime: '90-120 min', coverage: 'Limited Coverage'},
                {name: 'Fujairah', value: 7, responseTime: '120-150 min', coverage: 'Limited Coverage'}
            ]
        }]
    };

    chart.setOption(option);
    
    // Handle map clicks
    chart.on('click', function(params) {
        showAreaDetails(params.name, params.data.responseTime, params.data.coverage);
    });
}

// Contact Features
function initializeContactFeatures() {
    // Click-to-call functionality
    document.querySelectorAll('.click-to-call').forEach(element => {
        element.addEventListener('click', function() {
            const phoneNumber = this.dataset.phone;
            window.location.href = `tel:${phoneNumber}`;
        });
    });

    // Email contact
    document.querySelectorAll('.email-contact').forEach(element => {
        element.addEventListener('click', function() {
            const email = this.dataset.email;
            window.location.href = `mailto:${email}`;
        });
    });
}

// Utility Functions
function animateCounters() {
    document.querySelectorAll('.stat-number').forEach(counter => {
        const target = parseInt(counter.dataset.target);
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counter.textContent = Math.floor(current);
        }, 16);
    });
}

function validateForm() {
    const requiredFields = document.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('error');
            isValid = false;
        } else {
            field.classList.remove('error');
        }
    });

    return isValid;
}

function submitServiceRequest() {
    // Simulate form submission
    const modal = document.createElement('div');
    modal.className = 'success-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>Request Submitted Successfully!</h2>
            <p>Thank you for your service request. Our team will contact you within 30 minutes.</p>
            <p>Emergency? Call us directly at:</p>
            <a href="tel:+971589076688" class="emergency-call">+971 58 907 6688</a>
            <button onclick="closeModal()" class="close-btn">Close</button>
        </div>
    `;
    document.body.appendChild(modal);

    setTimeout(() => {
        if (document.body.contains(modal)) {
            document.body.removeChild(modal);
        }
    }, 5000);
}

function closeModal() {
    const modal = document.querySelector('.success-modal');
    if (modal) {
        document.body.removeChild(modal);
    }
}

function showAreaDetails(area, responseTime, coverage) {
    const modal = document.createElement('div');
    modal.className = 'area-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>${area}</h2>
            <div class="area-details">
                <p><strong>Response Time:</strong> ${responseTime}</p>
                <p><strong>Coverage:</strong> ${coverage}</p>
                <p><strong>Services Available:</strong> All emergency and scheduled services</p>
                <a href="tel:+971589076688" class="call-now">Call Now</a>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.close-modal').addEventListener('click', function() {
        document.body.removeChild(modal);
    });
}

// Particle System for Hero Background
function initializeParticleSystem() {
    if (typeof p5 === 'undefined' || !document.getElementById('particle-canvas')) return;

    new p5(function(p) {
        let particles = [];
        
        p.setup = function() {
            const canvas = p.createCanvas(window.innerWidth, window.innerHeight);
            canvas.parent('particle-canvas');
            
            // Create water droplet particles
            for (let i = 0; i < 50; i++) {
                particles.push({
                    x: p.random(p.width),
                    y: p.random(p.height),
                    size: p.random(2, 8),
                    speedX: p.random(-0.5, 0.5),
                    speedY: p.random(-0.5, 0.5),
                    opacity: p.random(0.3, 0.8)
                });
            }
        };
        
        p.draw = function() {
            p.clear();
            
            // Draw and update particles
            particles.forEach(particle => {
                p.fill(25, 118, 210, particle.opacity * 255);
                p.noStroke();
                p.ellipse(particle.x, particle.y, particle.size);
                
                // Update position
                particle.x += particle.speedX;
                particle.y += particle.speedY;
                
                // Wrap around screen
                if (particle.x < 0) particle.x = p.width;
                if (particle.x > p.width) particle.x = 0;
                if (particle.y < 0) particle.y = p.height;
                if (particle.y > p.height) particle.y = 0;
            });
        };
        
        p.windowResized = function() {
            p.resizeCanvas(window.innerWidth, window.innerHeight);
        };
    });
}

// Initialize particle system when libraries are loaded
setTimeout(initializeParticleSystem, 1000);