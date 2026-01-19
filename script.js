// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80; // Fixed navigation height
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Highlight active navigation section
function highlightNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Activation offset
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Update navbar style on scroll
function updateNavbar() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
        navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
    }
}

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.feature-card, .step, .security-item, .contact-item');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;

        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize animations
function initAnimations() {
    const elements = document.querySelectorAll('.feature-card, .step, .security-item, .contact-item');

    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
}

// Logo visibility check in hero section
function checkHeroLogoVisibility() {
    const heroLogo = document.querySelector('.hero-main-logo');
    if (heroLogo) {
        const rect = heroLogo.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
            heroLogo.style.animation = 'pulse 2s infinite';
        } else {
            heroLogo.style.animation = 'none';
        }
    }
}

// Add pulse animation for logo
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

// Window resize handler
function handleResize() {
    // Recalculate section positions on resize
    highlightNavigation();
}

// Initialize all functions
document.addEventListener('DOMContentLoaded', function() {
    initAnimations();
    animateOnScroll();
});

// Event listeners
window.addEventListener('scroll', function() {
    highlightNavigation();
    updateNavbar();
    animateOnScroll();
    checkHeroLogoVisibility();
});

window.addEventListener('resize', handleResize);

// Scroll to top button
function createScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'scroll-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, rgba(0, 212, 255, 0.8), rgba(0, 212, 255, 0.6));
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 8px 32px rgba(0, 212, 255, 0.3);
    `;

    button.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    document.body.appendChild(button);

    // Show/hide button on scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });

    // Hover effects
    button.addEventListener('mouseenter', function() {
        button.style.background = 'linear-gradient(135deg, rgba(0, 212, 255, 0.9), rgba(0, 212, 255, 0.7))';
        button.style.transform = 'scale(1.1)';
        button.style.boxShadow = '0 12px 40px rgba(0, 212, 255, 0.4)';
    });

    button.addEventListener('mouseleave', function() {
        button.style.background = 'linear-gradient(135deg, rgba(0, 212, 255, 0.8), rgba(0, 212, 255, 0.6))';
        button.style.transform = 'scale(1)';
        button.style.boxShadow = '0 8px 32px rgba(0, 212, 255, 0.3)';
    });
}

// Create scroll to top button on page load
document.addEventListener('DOMContentLoaded', createScrollToTopButton);

// Preload images
function preloadImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        const image = new Image();
        image.src = img.src;
    });
}

preloadImages();

// Add glassmorphism effect enhancement
function enhanceGlassmorphism() {
    const glassElements = document.querySelectorAll('.navbar, .feature-card, .platform, .feature-item, .download-links, .security-item, .contact-item');

    glassElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.4)';
        });

        element.addEventListener('mouseleave', function() {
            this.style.boxShadow = this.classList.contains('navbar') ?
                '0 8px 32px rgba(0, 0, 0, 0.3)' :
                '0 8px 32px rgba(0, 0, 0, 0.2)';
        });
    });
}

// Initialize glassmorphism enhancements
document.addEventListener('DOMContentLoaded', enhanceGlassmorphism);

// Parallax effect for hero section
function parallaxHero() {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;

    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
}

// Add parallax effect
window.addEventListener('scroll', parallaxHero);

// Theme switcher (optional dark/light mode toggle)
function createThemeToggle() {
    const toggle = document.createElement('button');
    toggle.innerHTML = '🌙';
    toggle.className = 'theme-toggle';
    toggle.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
        background: rgba(255, 255, 255, 0.1);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 18px;
        cursor: pointer;
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        z-index: 1001;
        transition: all 0.3s ease;
    `;

    let isDark = true;

    toggle.addEventListener('click', function() {
        isDark = !isDark;
        toggle.innerHTML = isDark ? '🌙' : '☀️';

        const body = document.body;
        if (isDark) {
            body.style.background = 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #2a2a2a 100%)';
            body.style.color = '#e0e0e0';
        } else {
            body.style.background = 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)';
            body.style.color = '#333';
        }
    });

    document.body.appendChild(toggle);
}

// Uncomment to add theme toggle
// document.addEventListener('DOMContentLoaded', createThemeToggle);
