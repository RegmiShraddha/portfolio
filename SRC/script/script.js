let menu = document.querySelector('#menu-icon-js');
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navtc = document.querySelector('#nav-tc-js');

menu.onclick = () => {
	menuicon.classList.toggle('bx-x');
	navbar.classList.toggle('open');
	navtc.classList.toggle("nav-touch-close-open");
}

navtc.onclick = () => {
	menuicon.classList.toggle('bx-x');
	navbar.classList.remove('open');
	navtc.classList.remove('nav-touch-close-open');
	navtc.classList.remove("nav-tc-z");
	navtc.classList.remove("nav-LR-TC");
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var currentScrollPos = window.pageYOffset;

	document.getElementById("header").classList.add('scrolled');
	if (currentScrollPos === 0) {
		// console.log("Hello");
		document.getElementById("header").classList.remove('scrolled');
	}
	if (navtc.classList.contains('nav-touch-close-open')) {
		return;
	}
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("header").style.top = "0";
	} else {
		document.getElementById("header").style.top = "-100px";
	}
	prevScrollpos = currentScrollPos;
}


const contactSection = document.querySelector('.contact-section');
const formSection = document.querySelector('.form-section');
const contactSubmitAfter = document.querySelector('.contact-submit-after');
const csaOK = document.querySelector('.csa-ok');


const contactForm = document.querySelector('.contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const errorDiv = document.querySelector('.error');
const emailErrorDiv = document.querySelector('.email-error');
const contactButton = document.querySelector('.contact-button');
const contactLoad = document.querySelector('.contact-load');
const submitText = document.querySelector('.submit-text');

if (csaOK) {
	csaOK.onclick = () => {
		contactSubmitAfter.classList.remove('show');
		formSection.classList.remove('hide');
		contactSection.classList.remove('csa-cs');
		contactForm.classList.remove('csa-cf');
		contactButton.classList.remove('loading');
		contactLoad.classList.remove('show');
		submitText.classList.remove('hide');
		// contactSubmitAfter.classList.add('hide');
	}
}

// Function to validate the form
function validateForm(event) {
	event.preventDefault(); // Prevent the form from submitting
	let isValid = true;
	emailIsValid = true;
	nameIsValid = true;
	messageIsValid = true;

	// Check if Name field is empty
	if (nameInput.value.trim() === '') {
		isValid = false;
		nameIsValid = false;
	}

	// Check if Email field is empty or not a valid email address
	if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
		isValid = false;
		if (emailInput.value.trim() !== '' && !isValidEmail(emailInput.value)) {
			emailIsValid = false;
		}
	}

	// Check if Message field is empty
	if (messageInput.value.trim() === '') {
		isValid = false;
		messageIsValid = false;
	}

	if (!isValid) {
		// Display the error message
		errorDiv.classList.add('error-show');
		emailErrorDiv.classList.remove('error-show');
		if (nameIsValid && messageIsValid && !emailIsValid) {
			errorDiv.classList.remove('error-show');
			emailErrorDiv.classList.add('error-show');
		}
	} else {
		// Form is valid, it can be sumbitted now
		emailErrorDiv.classList.remove('error-show');
		errorDiv.classList.remove('error-show');
		contactButton.classList.add('loading');
		contactLoad.classList.add('show');
		submitText.classList.add('hide');
		setTimeout(function () {
			sendMail();
		}, 2000);
	}
}

// Function to validate email format using a regular expression
function isValidEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

// Event listener for form submission
if (contactForm) {
	contactForm.addEventListener('submit', validateForm);
}


// After adding the Email Js APi key in the script tag of the contact.html, uncomment this function section

function sendMail() {

	// TODO: Configure EmailJS for Shraddha's account
	// 1. Sign up at https://www.emailjs.com/
	// 2. Create a new service (e.g., Gmail, Outlook)
	// 3. Create an email template
	// 4. Update the API key in contact.html
	// 5. Uncomment the code below and update serviceID and templateID

	// Current implementation just shows success message without sending email
	contactSubmitAfter.classList.add('show');
	formSection.classList.add('hide');
	contactSection.classList.add('csa-cs');
	contactForm.classList.add('csa-cf');

	// Once EmailJS is configured, replace the above code with:
	// var params = {
	// 	name: document.getElementById('name').value,
	// 	email: document.getElementById('email').value,
	// 	message: document.getElementById('message').value
	// }

	// const serviceID = "YOUR_SERVICE_ID";  // Update this with Shraddha's service ID
	// const templateID = "YOUR_TEMPLATE_ID"; // Update this with Shraddha's template ID

	// emailjs.send(serviceID, templateID, params)
	// 	.then(
	// 		res => {
	// 			document.getElementById('name').value = "";
	// 			document.getElementById('email').value = "";
	// 			document.getElementById('message').value = "";

	// 			contactSubmitAfter.classList.add('show');
	// 			formSection.classList.add('hide');
	// 			contactSection.classList.add('csa-cs');
	// 			contactForm.classList.add('csa-cf');

	// 		}
	// 	)
	// 	.catch((error) => {
	// 		console.log(error);
	// 	})
}

// Flutter App Projects Information
const flutterProjects = [
    {
        name: "EcoShop",
        description: "A sustainable e-commerce mobile application built with Flutter and Firebase",
        technologies: ["Flutter", "Dart", "Firebase", "Stripe API"],
        features: ["Product browsing", "Cart management", "Payment processing", "Order tracking"]
    },
    {
        name: "FitTracker",
        description: "Health and fitness tracking app with personalized workout plans",
        technologies: ["Flutter", "Provider", "SQLite", "Chart libraries"],
        features: ["Workout scheduling", "Progress tracking", "Nutrition log", "Analytics dashboard"]
    },
    {
        name: "ConnectMe",
        description: "Social networking platform for professionals with real-time chat",
        technologies: ["Flutter", "Firebase", "Bloc pattern", "Cloud Functions"],
        features: ["User profiles", "Real-time messaging", "Post sharing", "Connection management"] 
    }
];

// Function to display app projects (can be integrated with gallery page in future updates)
function displayAppProjects() {
    // This function can be implemented when adding dynamic content loading to the gallery page
    console.log("Flutter projects available for display:", flutterProjects.length);
}

// Note for implementation: This data can be used to dynamically populate the gallery page
// by selecting DOM elements and adding content with technologies and screenshots

// Advanced Interactive Features for Enhanced User Experience

// 1. Particle Background Animation
function createParticleBackground() {
    const canvas = document.createElement('canvas');
    canvas.id = 'particle-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let particles = [];
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    function createParticle() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 3 + 1,
            opacity: Math.random() * 0.5 + 0.3
        };
    }
    
    function initParticles() {
        particles = [];
        const particleCount = Math.min(50, window.innerWidth / 20);
        for (let i = 0; i < particleCount; i++) {
            particles.push(createParticle());
        }
    }
    
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
            
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(238, 174, 202, ${particle.opacity})`;
            ctx.fill();
        });
        
        requestAnimationFrame(animateParticles);
    }
    
    resizeCanvas();
    initParticles();
    animateParticles();
    
    window.addEventListener('resize', () => {
        resizeCanvas();
        initParticles();
    });
}

// 2. Floating Action Button for Quick Actions
function createFloatingActionButton() {
    const fab = document.createElement('div');
    fab.className = 'floating-action-button';
    fab.innerHTML = `
        <div class="fab-main">
            <i class="fas fa-plus"></i>
        </div>
        <div class="fab-menu">
            <a href="#about" class="fab-item" title="About Me">
                <i class="fas fa-user"></i>
            </a>
            <a href="SRC/pages/skills.html" class="fab-item" title="Skills">
                <i class="fas fa-code"></i>
            </a>
            <a href="SRC/pages/career.html" class="fab-item" title="Projects">
                <i class="fas fa-briefcase"></i>
            </a>
            <a href="SRC/pages/contact.html" class="fab-item" title="Contact">
                <i class="fas fa-envelope"></i>
            </a>
        </div>
    `;
    
    document.body.appendChild(fab);
    
    const fabMain = fab.querySelector('.fab-main');
    const fabMenu = fab.querySelector('.fab-menu');
    
    fabMain.addEventListener('click', () => {
        fab.classList.toggle('active');
    });
    
    // Close FAB when clicking outside
    document.addEventListener('click', (e) => {
        if (!fab.contains(e.target)) {
            fab.classList.remove('active');
        }
    });
}

// 3. Advanced Scroll Animations
function initAdvancedScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
    };
    
    const slideInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in-active');
                slideInObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Add slide-in animation to various elements
    const animatedElements = document.querySelectorAll('.about-content, .stats-container, .portfolio-grid');
    animatedElements.forEach(el => {
        el.classList.add('slide-in');
        slideInObserver.observe(el);
    });
}

// 4. Interactive Skills Progress Animation (for skills page)
function initSkillsProgressAnimation() {
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.progress-per');
                const progressBlocks = entry.target.querySelectorAll('.progress-block');
                
                progressBars.forEach((bar, index) => {
                    const percentage = progressBlocks[index].textContent;
                    const numericValue = parseInt(percentage);
                    
                    setTimeout(() => {
                        bar.style.width = percentage;
                        bar.style.transition = 'width 2s ease-in-out';
                    }, index * 200);
                });
                
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    const skillsSection = document.querySelector('.skills-section');
    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }
}

// 5. Dynamic Theme Switcher
function createThemeSwitcher() {
    const themeSwitcher = document.createElement('div');
    themeSwitcher.className = 'theme-switcher';
    themeSwitcher.innerHTML = `
        <i class="fas fa-palette"></i>
        <div class="theme-options">
            <div class="theme-option" data-theme="default">
                <div class="theme-preview" style="background: linear-gradient(45deg, rgba(238,174,202,1), rgb(145,167,192))"></div>
            </div>
            <div class="theme-option" data-theme="dark">
                <div class="theme-preview" style="background: linear-gradient(45deg, #1a1a2e, #16213e)"></div>
            </div>
            <div class="theme-option" data-theme="nature">
                <div class="theme-preview" style="background: linear-gradient(45deg, #a8e6cf, #88d8c0)"></div>
            </div>
            <div class="theme-option" data-theme="sunset">
                <div class="theme-preview" style="background: linear-gradient(45deg, #ff9a56, #ff6b6b)"></div>
            </div>
        </div>
    `;
    
    document.body.appendChild(themeSwitcher);
    
    const themeOptions = themeSwitcher.querySelectorAll('.theme-option');
    themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            const theme = option.dataset.theme;
            document.body.className = `theme-${theme}`;
            localStorage.setItem('selectedTheme', theme);
        });
    });
    
    // Load saved theme
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
        document.body.className = `theme-${savedTheme}`;
    }
}

// 6. Enhanced Mobile Navigation with Gestures
function initMobileGestures() {
    if (window.innerWidth <= 768) {
        let startY = 0;
        let currentY = 0;
        
        document.addEventListener('touchstart', (e) => {
            startY = e.touches[0].clientY;
        });
        
        document.addEventListener('touchmove', (e) => {
            currentY = e.touches[0].clientY;
            const diff = startY - currentY;
            
            // Hide/show header based on scroll direction
            const header = document.querySelector('.header');
            if (diff > 50) {
                header.style.transform = 'translateY(-100%)';
            } else if (diff < -50) {
                header.style.transform = 'translateY(0)';
            }
        });
    }
}

// 7. Loading Animation for Page Transitions
function createLoadingAnimation() {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-spinner"></div>
            <div class="loader-text">Loading...</div>
        </div>
    `;
    
    document.body.appendChild(loader);
    
    // Show loader on page navigation
    document.querySelectorAll('a[href$=".html"]').forEach(link => {
        link.addEventListener('click', (e) => {
            if (!e.ctrlKey && !e.metaKey) {
                loader.classList.add('active');
            }
        });
    });
    
    // Hide loader when page loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.remove('active');
        }, 1000);
    });
}

// 8. Interactive Cursor Effect
function createInteractiveCursor() {
    if (window.innerWidth > 768) {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        document.body.appendChild(cursor);
        
        const cursorFollower = document.createElement('div');
        cursorFollower.className = 'cursor-follower';
        document.body.appendChild(cursorFollower);
        
        let mouseX = 0;
        let mouseY = 0;
        let followerX = 0;
        let followerY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            cursor.style.left = mouseX + 'px';
            cursor.style.top = mouseY + 'px';
        });
        
        function animateFollower() {
            followerX += (mouseX - followerX) * 0.1;
            followerY += (mouseY - followerY) * 0.1;
            
            cursorFollower.style.left = followerX + 'px';
            cursorFollower.style.top = followerY + 'px';
            
            requestAnimationFrame(animateFollower);
        }
        animateFollower();
        
        // Add hover effects
        document.querySelectorAll('a, button, .project-card').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-hover');
                cursorFollower.classList.add('cursor-hover');
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-hover');
                cursorFollower.classList.remove('cursor-hover');
            });
        });
    }
}

// Initialize all enhanced features when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {    // Only create particle background on larger screens to preserve performance
    if (window.innerWidth > 768) {
        createParticleBackground();
        createInteractiveCursor();
    }
    
    createFloatingActionButton();
    createScrollProgressIndicator();
    initAdvancedScrollAnimations();
    initSkillsProgressAnimation();
    createThemeSwitcher();
    initMobileGestures();
    createLoadingAnimation();
    
    // Add stagger animation to existing elements
    const cards = document.querySelectorAll('.project-card, .stat-item');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// Performance optimization: Debounced scroll handler
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

// Enhanced scroll performance
const optimizedScrollHandler = debounce(() => {
    const scrolled = window.pageYOffset;
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (inView) {
            section.classList.add('in-viewport');
        }
    });
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// ==== ENHANCED SKILLS COMPARISON FUNCTIONS ===
function toggleSkillsComparison() {
    const comparisonContainer = document.getElementById('skillsComparison');
    const button = document.querySelector('.toggle-comparison');
    
    if (comparisonContainer.classList.contains('skills-comparison-hidden')) {
        comparisonContainer.classList.remove('skills-comparison-hidden');
        comparisonContainer.classList.add('skills-comparison-visible');
        button.innerHTML = '<i class="fas fa-chart-bar"></i> Hide Analysis';
        
        // Animate skill bars with a delay
        setTimeout(() => {
            animateSkillBars();
        }, 300);
    } else {
        comparisonContainer.classList.remove('skills-comparison-visible');
        comparisonContainer.classList.add('skills-comparison-hidden');
        button.innerHTML = '<i class="fas fa-chart-bar"></i> Show Analysis';
    }
}

function toggleCertifications() {
    const certificationsContainer = document.getElementById('certificationsContainer');
    const button = document.querySelector('.toggle-certs');
    
    if (certificationsContainer.classList.contains('certifications-hidden')) {
        certificationsContainer.classList.remove('certifications-hidden');
        certificationsContainer.classList.add('certifications-visible');
        button.innerHTML = '<i class="fas fa-certificate"></i> Hide Certificates';
        
        // Animate timeline items
        setTimeout(() => {
            animateCertTimeline();
        }, 300);
    } else {
        certificationsContainer.classList.remove('certifications-visible');
        certificationsContainer.classList.add('certifications-hidden');
        button.innerHTML = '<i class="fas fa-certificate"></i> View Certificates';
    }
}

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.level-fill');
    skillBars.forEach((bar, index) => {
        setTimeout(() => {
            bar.style.animation = 'fillBar 2s ease-in-out forwards';
        }, index * 200);
    });
}

function animateCertTimeline() {
    const certItems = document.querySelectorAll('.cert-item');
    certItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, index * 150);
    });
}

// ==== ENHANCED GALLERY FILTERING ===
function initGalleryFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter gallery items
            galleryItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.classList.remove('hidden');
                    item.classList.add('show');
                } else {
                    item.classList.add('hidden');
                    item.classList.remove('show');
                }
            });
        });
    });
}

// ==== SMOOTH PAGE TRANSITIONS ===
function initPageTransitions() {
    const links = document.querySelectorAll('a[href$=".html"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            if (!e.ctrlKey && !e.metaKey && !link.target) {
                e.preventDefault();
                
                // Show loading animation
                const loader = document.querySelector('.page-loader');
                if (loader) {
                    loader.classList.add('active');
                }
                
                // Navigate after a short delay for smooth transition
                setTimeout(() => {
                    window.location.href = link.href;
                }, 300);
            }
        });
    });
}

// ==== ENHANCED CONTACT FORM WITH REAL-TIME VALIDATION ===
function initEnhancedContactForm() {
    const contactForm = document.querySelector('.contact-form');
    const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
    
    if (contactForm) {
        inputs.forEach(input => {
            // Real-time validation
            input.addEventListener('input', () => {
                validateField(input);
            });
            
            // Enhanced focus effects
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', () => {
                input.parentElement.classList.remove('focused');
                validateField(input);
            });
        });
    }
}

function validateField(field) {
    const value = field.value.trim();
    const fieldContainer = field.parentElement;
    
    // Remove previous validation classes
    fieldContainer.classList.remove('valid', 'invalid');
    
    if (field.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value && emailRegex.test(value)) {
            fieldContainer.classList.add('valid');
        } else if (value) {
            fieldContainer.classList.add('invalid');
        }
    } else if (field.required) {
        if (value.length > 0) {
            fieldContainer.classList.add('valid');
        } else {
            fieldContainer.classList.add('invalid');
        }
    }
}

// ==== ENHANCED TESTIMONIALS CAROUSEL ===
function initTestimonialsCarousel() {
    const carousel = document.querySelector('.testimonials-carousel');
    if (!carousel) return;
    
    const testimonials = carousel.querySelectorAll('.testimonial-item');
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');
    const indicators = carousel.querySelector('.carousel-indicators');
    
    let currentSlide = 0;
    
    // Create indicators
    if (indicators) {
        testimonials.forEach((_, index) => {
            const indicator = document.createElement('button');
            indicator.classList.add('indicator');
            if (index === 0) indicator.classList.add('active');
            indicator.addEventListener('click', () => goToSlide(index));
            indicators.appendChild(indicator);
        });
    }
    
    function goToSlide(slideIndex) {
        testimonials[currentSlide].classList.remove('active');
        indicators?.children[currentSlide].classList.remove('active');
        
        currentSlide = slideIndex;
        
        testimonials[currentSlide].classList.add('active');
        indicators?.children[currentSlide].classList.add('active');
    }
    
    function nextSlide() {
        const nextIndex = (currentSlide + 1) % testimonials.length;
        goToSlide(nextIndex);
    }
    
    function prevSlide() {
        const prevIndex = (currentSlide - 1 + testimonials.length) % testimonials.length;
        goToSlide(prevIndex);
    }
    
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    
    // Auto-advance testimonials
    setInterval(nextSlide, 5000);
}

// ==== PERFORMANCE MONITORING ===
function initPerformanceMonitoring() {
    // Monitor page load performance
    window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log('Page Load Time:', perfData.loadEventEnd - perfData.fetchStart, 'ms');
        
        // Report Core Web Vitals if available
        if ('web-vital' in window) {
            import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
                getCLS(console.log);
                getFID(console.log);
                getFCP(console.log);
                getLCP(console.log);
                getTTFB(console.log);
            });
        }
    });
}

// ==== ADVANCED INTERSECTION OBSERVER ===
function initAdvancedAnimations() {
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Add specific animations based on element type
                if (element.classList.contains('stat-item')) {
                    element.style.animation = 'bounceIn 0.6s ease forwards';
                } else if (element.classList.contains('project-card')) {
                    element.style.animation = 'slideInUp 0.8s ease forwards';
                } else if (element.classList.contains('skill')) {
                    element.style.animation = 'fadeInLeft 0.6s ease forwards';
                }
                
                animationObserver.unobserve(element);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe all animatable elements
    const animatableElements = document.querySelectorAll('.stat-item, .project-card, .skill, .insight-card');
    animatableElements.forEach(el => {
        el.style.opacity = '0';
        animationObserver.observe(el);
    });
}

// Initialize all enhanced features
document.addEventListener('DOMContentLoaded', () => {
    // Initialize existing features
    if (window.innerWidth > 768) {
        createParticleBackground();
        createInteractiveCursor();
    }
    
    createFloatingActionButton();
    initAdvancedScrollAnimations();
    initSkillsProgressAnimation();
    createThemeSwitcher();
    initMobileGestures();
    createLoadingAnimation();
    
    // Initialize new enhanced features
    initGalleryFiltering();
    initPageTransitions();
    initEnhancedContactForm();
    initTestimonialsCarousel();
    initPerformanceMonitoring();
    initAdvancedAnimations();
      // Add skills comparison and certification container hidden class
    const skillsComparison = document.getElementById('skillsComparison');
    const certificationsContainer = document.getElementById('certificationsContainer');
    
    if (skillsComparison && !skillsComparison.classList.contains('skills-comparison-hidden')) {
        skillsComparison.classList.add('skills-comparison-hidden');
    }
    if (certificationsContainer && !certificationsContainer.classList.contains('certifications-hidden')) {
        certificationsContainer.classList.add('certifications-hidden');
    }
});

// ==== SCROLL PROGRESS INDICATOR ===
function createScrollProgressIndicator() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    function updateProgress() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    }
    
    window.addEventListener('scroll', updateProgress);
    updateProgress(); // Initialize
}

// Initialize scroll progress indicator
document.addEventListener('DOMContentLoaded', createScrollProgressIndicator);

// ==== ACCESSIBILITY ENHANCEMENTS ====
// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close any open modals or dropdowns
        const activeDropdowns = document.querySelectorAll('.floating-action-button.active');
        activeDropdowns.forEach(dropdown => dropdown.classList.remove('active'));
    }
});

// Reduce motion for users who prefer it
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.scrollBehavior = 'auto';
}
