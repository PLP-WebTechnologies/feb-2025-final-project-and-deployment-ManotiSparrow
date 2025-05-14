// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navList = document.querySelector('.nav-list');

mobileMenuBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Newsletter Form Submission
const newsletterForm = document.getElementById('newsletterForm');
const formMessage = document.getElementById('formMessage');

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.elements[0].value;
    
    // Simulate form submission
    formMessage.textContent = `Thanks for subscribing with ${email}!`;
    formMessage.style.color = '#4ECDC4';
    formMessage.style.marginTop = '1rem';
    
    // Reset form
    e.target.reset();
    
    // Clear message after 5 seconds
    setTimeout(() => {
        formMessage.textContent = '';
    }, 5000);
});

// Explore Button Animation
const exploreBtn = document.getElementById('exploreBtn');

exploreBtn.addEventListener('click', () => {
    // Scroll to articles section
    document.querySelector('.featured-articles').scrollIntoView({
        behavior: 'smooth'
    });
    
    // Add pulse animation
    exploreBtn.classList.add('pulse');
    setTimeout(() => {
        exploreBtn.classList.remove('pulse');
    }, 1000);
});

// Article hover effect enhancement
const articleCards = document.querySelectorAll('.article-card');

articleCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const accentColor = card.style.getPropertyValue('--accent-color');
        card.style.boxShadow = `0 15px 30px ${accentColor}33`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    });
});

// Lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));
    
    if ('IntersectionObserver' in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove('lazy');
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });
        
        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    }
});