const thumbnails = document.querySelectorAll('.product-thumb');
        const mainImage = document.querySelector('.product-main-image .product-placeholder');
        
        // Enhanced Product Section JS
        if (thumbnails && mainImage) {
            thumbnails.forEach((thumb, index) => {
                thumb.addEventListener('click', () => {
                    thumbnails.forEach(t => t.classList.remove('active'));
                    thumb.classList.add('active');
                    // Add a subtle animation effect
                    mainImage.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        mainImage.style.transform = 'scale(1)';
                    }, 150);
                });
            });
        }
        const purchaseButtons = document.querySelectorAll('.purchase-btn');
        purchaseButtons.forEach(btn => {
            btn.addEventListener('click', (event) => {
                const isPremium = btn.classList.contains('premium-btn');
                const modalId = isPremium ? 'premiumModal' : 'standardModal';
                // Open modal
                openModal(modalId);
                // Add ripple effect
                const ripple = document.createElement('div');
                ripple.style.cssText = `
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 190, 152, 0.6);
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                `;
                const rect = btn.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = (event.clientX - rect.left - size / 2) + 'px';
                ripple.style.top = (event.clientY - rect.top - size / 2) + 'px';
                btn.appendChild(ripple);
                setTimeout(() => ripple.remove(), 600);
            });
        });
        function openModal(modalId) {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }
        function closeModal(modalId) {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        }
        document.querySelectorAll('.modal-overlay').forEach(overlay => {
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    overlay.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            });
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                document.querySelectorAll('.modal-overlay').forEach(modal => {
                    modal.classList.remove('active');
                    document.body.style.overflow = 'auto';
                });
            }
        });
        // Add CSS for ripple animation if not present
        if (!document.getElementById('ripple-keyframes')) {
            const style = document.createElement('style');
            style.id = 'ripple-keyframes';
            style.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }

        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                if (window.scrollY > 0) {
                    navbar.classList.add('sticky');
                } else {
                    navbar.classList.remove('sticky');
                }
            }
        });

        // Smooth scroll for nav and footer links
        const scrollLinks = document.querySelectorAll('a[href^="#"]');
        scrollLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = link.getAttribute('href');
                if (href && href.startsWith('#') && href.length > 1) {
                    const target = document.querySelector(href);
                    if (target) {
                        e.preventDefault();
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });
        // Learn More buttons scroll to features section
        const learnMoreBtns = document.querySelectorAll('.learn-more-button');
        learnMoreBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const features = document.querySelector('.features-section');
                if (features) features.scrollIntoView({ behavior: 'smooth' });
            });
        });
        // App download buttons open store links in new tab
        const appStoreBtn = document.querySelectorAll('a[href="#"] img[alt*="Apple App Store"]');
        const playStoreBtn = document.querySelectorAll('a[href="#"] img[alt*="Google Play"]');
        appStoreBtn.forEach(img => {
            const a = img.closest('a');
            if (a) {
                a.addEventListener('click', function(e) {
                    e.preventDefault();
                    window.open('https://apps.apple.com/', '_blank');
                });
            }
        });
        playStoreBtn.forEach(img => {
            const a = img.closest('a');
            if (a) {
                a.addEventListener('click', function(e) {
                    e.preventDefault();
                    window.open('https://play.google.com/store', '_blank');
                });
            }
        });
        // Footer About Us links scroll to sections
        const aboutLinks = document.querySelectorAll('.footer-column ul li a');
        aboutLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const text = link.textContent.toLowerCase();
                if (text.includes('learn')) {
                    e.preventDefault();
                    const section = document.querySelector('.culture-section');
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                } else if (text.includes('careers')) {
                    e.preventDefault();
                    const section = document.querySelector('.our-advantage-section');
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                } else if (text.includes('press')) {
                    e.preventDefault();
                    const section = document.querySelector('.testimonials-section');
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                } else if (text.includes('subscriptions')) {
                    e.preventDefault();
                    const section = document.querySelector('.pricing-section');
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
        // Footer contact mailto is already set
        // Add to Cart buttons show alert
        const addToCartBtns = document.querySelectorAll('.cta-button');
        addToCartBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                if (btn.closest('.modal-cta')) {
                    e.preventDefault();
                    alert('Added to cart! (Demo)');
                }
            });
        });
        // Contact Us button scrolls to footer
        const contactBtn = document.querySelector('.contact-button');
        if (contactBtn) {
            contactBtn.addEventListener('click', function(e) {
                e.preventDefault();
                const footer = document.querySelector('footer.footer');
                if (footer) footer.scrollIntoView({ behavior: 'smooth' });
            });
        }