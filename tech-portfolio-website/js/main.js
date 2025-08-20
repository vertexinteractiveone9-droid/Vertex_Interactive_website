// Main JavaScript for TechPro Solutions Website
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Initialize all website functionality
function initializeWebsite() {
    initializeNavigation();
    initializeHeroAnimations();
    initializeScrollEffects();
    initializeFormHandlers();
    initializeProgressBars();
    initializeModals();
    initializeCartFunctionality();
    initializeThemeOptions();
    initializeAnimations();
}

// Navigation functionality
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// Hero section animations
function initializeHeroAnimations() {
    const heroTitle = document.getElementById('heroTitle');
    
    if (heroTitle) {
        // Add typing animation on page load
        setTimeout(() => {
            heroTitle.classList.add('typing');
        }, 500);
        
        // Remove typing class after animation completes
        setTimeout(() => {
            heroTitle.classList.remove('typing');
        }, 4000);
    }
}

// Scroll effects
function initializeScrollEffects() {
    const heroTitle = document.getElementById('heroTitle');
    
    if (heroTitle) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            const windowHeight = window.innerHeight;
            
            // Fade out hero title on scroll
            if (scrollPosition > windowHeight * 0.3) {
                heroTitle.classList.add('fade-out');
            } else {
                heroTitle.classList.remove('fade-out');
            }
        });
    }
    
    // Smooth reveal animations for sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.review-card, .goal-card, .project-card, .coming-soon-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Form handlers
function initializeFormHandlers() {
    // Contact form handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Billing form handler
    const billingForm = document.getElementById('billingForm');
    if (billingForm) {
        billingForm.addEventListener('submit', handleBillingForm);
    }
    
    // Enhanced input focus effects
    document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
            if (this.value.trim() === '') {
                this.parentElement.classList.remove('filled');
            } else {
                this.parentElement.classList.add('filled');
            }
        });
        
        // Check initial state
        if (input.value.trim() !== '') {
            input.parentElement.classList.add('filled');
        }
    });
}

// Handle contact form submission
function handleContactForm(e) {
    // For FormSubmit, we let the form submit naturally
    // Just validate before submission
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Validate form
    if (!validateForm(data, ['name', 'email', 'phone', 'message'])) {
        e.preventDefault();
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
    // Show loading state
    const submitBtn = e.target.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    
    submitBtn.classList.add('loading');
    btnText.textContent = 'Sending...';
    
    // Form will submit to FormSubmit automatically
    showNotification('Sending your message...', 'info');
}

// Handle billing form submission
function handleBillingForm(e) {
    // Get form data for validation
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Get selected features and add them to hidden inputs
    const features = [];
    document.querySelectorAll('input[name="features"]:checked').forEach(checkbox => {
        features.push(checkbox.value);
    });
    
    // Add features to form as hidden input for FormSubmit
    const featuresInput = document.createElement('input');
    featuresInput.type = 'hidden';
    featuresInput.name = 'selected_features';
    featuresInput.value = features.length > 0 ? features.join(', ') : 'None';
    e.target.appendChild(featuresInput);
    
    // Validate form
    if (!validateForm(data, ['schoolName', 'phoneNumber', 'address', 'theme'])) {
        e.preventDefault();
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
    // Show loading animation
    const submitBtn = e.target.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const mailAnimation = submitBtn.querySelector('.mail-animation');
    
    submitBtn.classList.add('sending');
    btnText.style.opacity = '0';
    mailAnimation.style.opacity = '1';
    mailAnimation.style.transform = 'scale(1)';
    
    // Form will submit to FormSubmit automatically
    showNotification('Processing your order...', 'info');
    
    // Generate order ID for reference
    const orderId = 'TPS-' + new Date().getFullYear() + '-' + String(Math.floor(Math.random() * 1000)).padStart(3, '0');
    
    // Add order ID to form
    const orderIdInput = document.createElement('input');
    orderIdInput.type = 'hidden';
    orderIdInput.name = 'order_id';
    orderIdInput.value = orderId;
    e.target.appendChild(orderIdInput);
}

// Form validation
function validateForm(data, requiredFields) {
    for (let field of requiredFields) {
        if (!data[field] || data[field].toString().trim() === '') {
            return false;
        }
    }
    
    // Email validation
    if (data.email && !isValidEmail(data.email)) {
        return false;
    }
    
    return true;
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Simulate form submission (replace with actual backend integration)
async function simulateFormSubmission(data, type) {
    console.log(`${type} form submitted:`, data);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Here you would typically send the data to your backend
    // Example:
    // const response = await fetch('/api/submit-form', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ type, data }),
    // });
    
    // For now, just log the data that would be sent
    const emailData = {
        to: 'your-email@example.com',
        subject: type === 'contact' ? 'New Contact Form Submission' : 'New Order Received',
        body: formatEmailContent(data, type)
    };
    
    console.log('Email data to be sent:', emailData);
    
    return { success: true };
}

// Format email content
function formatEmailContent(data, type) {
    if (type === 'contact') {
        return `
New Contact Form Submission:

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Message: ${data.message}

Submitted: ${new Date().toLocaleString()}
        `;
    } else if (type === 'billing') {
        return `
New Order Received:

School Information:
- School Name: ${data.schoolName}
- Phone: ${data.phoneNumber}
- Address: ${data.address}

Product: Inaya School Management Software
Selected Features: ${data.features.length > 0 ? data.features.join(', ') : 'None'}
Theme: ${data.theme}

Total Amount: $2,999

Submitted: ${new Date().toLocaleString()}
        `;
    }
}

// Progress bar animations
function initializeProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    
    const progressObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const targetWidth = progressBar.getAttribute('data-progress') + '%';
                
                setTimeout(() => {
                    progressBar.style.width = targetWidth;
                }, 300);
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });
}

// Modal functionality
function initializeModals() {
    // Close modals when clicking overlay
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                closeModal(overlay.id);
            }
        });
    });
    
    // Close modals with escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal-overlay.show').forEach(modal => {
                closeModal(modal.id);
            });
        }
    });
}

// Open product modal
function openProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

// Close product modal
function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

// Show thank you modal
function showThankYouModal(orderId) {
    const modal = document.getElementById('thankYouModal');
    const orderIdElement = document.getElementById('orderId');
    
    if (modal) {
        if (orderIdElement) {
            orderIdElement.textContent = orderId;
        }
        
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

// Close any modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

// Cart functionality
function initializeCartFunctionality() {
    updateCartDisplay();
}

// Add to cart
function addToCart() {
    const cartData = {
        id: 'inaya-sms',
        name: 'Inaya School Management Software',
        description: 'Comprehensive school management solution with all core features',
        price: 2999,
        image: 'placeholder'
    };
    
    // Store in localStorage
    localStorage.setItem('cart', JSON.stringify([cartData]));
    
    // Update cart display
    updateCartDisplay();
    
    showNotification('Product added to cart!', 'success');
}

// Remove from cart
function removeFromCart() {
    localStorage.removeItem('cart');
    updateCartDisplay();
    showNotification('Product removed from cart.', 'info');
}

// Update cart display
function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const emptyCartMessage = document.getElementById('emptyCartMessage');
    
    if (!cartItems) return;
    
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const hasItems = cart.length > 0;
    
    if (hasItems) {
        const cartItem = cartItems.querySelector('.cart-item');
        if (cartItem) {
            cartItem.style.display = 'grid';
        }
        if (emptyCartMessage) {
            emptyCartMessage.style.display = 'none';
        }
    } else {
        const cartItem = cartItems.querySelector('.cart-item');
        if (cartItem) {
            cartItem.style.display = 'none';
        }
        if (emptyCartMessage) {
            emptyCartMessage.style.display = 'block';
        }
    }
}

// Theme options functionality
function initializeThemeOptions() {
    const themeOptions = document.querySelectorAll('input[name="theme"]');
    
    themeOptions.forEach(option => {
        option.addEventListener('change', function() {
            // Update theme preview or apply theme
            console.log('Theme selected:', this.value);
        });
    });
}

// Redirect to home
function redirectToHome() {
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => {
        notification.remove();
    });
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${getNotificationIcon(type)}</span>
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    // Add notification styles
    const style = `
        <style>
        .notification {
            position: fixed;
            top: 100px;
            right: 20px;
            z-index: 10000;
            max-width: 400px;
            background: var(--bg-secondary);
            border: 1px solid var(--border-primary);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-lg);
            animation: slideIn 0.3s ease;
        }
        
        .notification-success {
            border-left: 4px solid var(--success);
        }
        
        .notification-error {
            border-left: 4px solid var(--error);
        }
        
        .notification-info {
            border-left: 4px solid var(--accent-primary);
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            padding: var(--spacing-lg);
            gap: var(--spacing-md);
        }
        
        .notification-icon {
            font-size: 1.2rem;
            flex-shrink: 0;
        }
        
        .notification-message {
            flex: 1;
            color: var(--text-primary);
            font-size: var(--font-size-sm);
        }
        
        .notification-close {
            background: none;
            border: none;
            color: var(--text-muted);
            font-size: 1.2rem;
            cursor: pointer;
            padding: 0;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.3s ease;
        }
        
        .notification-close:hover {
            background: var(--bg-tertiary);
            color: var(--text-primary);
        }
        
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        </style>
    `;
    
    // Add styles if not already added
    if (!document.querySelector('#notification-styles')) {
        const styleElement = document.createElement('div');
        styleElement.id = 'notification-styles';
        styleElement.innerHTML = style;
        document.head.appendChild(styleElement);
    }
    
    // Add notification to page
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Get notification icon
function getNotificationIcon(type) {
    switch (type) {
        case 'success': return '✓';
        case 'error': return '⚠';
        case 'info': return 'ℹ';
        default: return 'ℹ';
    }
}

// Initialize additional animations
function initializeAnimations() {
    // Stagger animation for cards
    const cardGroups = document.querySelectorAll('.reviews-grid, .goals-grid, .coming-soon-grid');
    
    cardGroups.forEach(group => {
        const cards = group.querySelectorAll('.review-card, .goal-card, .coming-soon-card');
        
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });
    });
    
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            if (scrolled < window.innerHeight) {
                hero.style.transform = `translateY(${rate}px)`;
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization
function optimizePerformance() {
    // Lazy load images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Preload critical resources
    const preloadLinks = [
        'css/style.css',
        'js/main.js'
    ];
    
    preloadLinks.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = href.endsWith('.css') ? 'style' : 'script';
        document.head.appendChild(link);
    });
}

// Initialize performance optimizations
document.addEventListener('DOMContentLoaded', optimizePerformance);

// Handle page visibility change
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Page is hidden, pause animations
        document.body.classList.add('page-hidden');
    } else {
        // Page is visible, resume animations
        document.body.classList.remove('page-hidden');
    }
});

// Global error handling
window.addEventListener('error', function(event) {
    console.error('JavaScript error:', event.error);
    // You could send error reports to your analytics service here
});

// Service worker registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment when you have a service worker file
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}

// Export functions for global access
window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.redirectToHome = redirectToHome;
