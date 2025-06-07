// Sample car data
const carsData = [
    {
        id: 1,
        make: 'Declasse',
        model: 'Burrito',
        year: 2008,
        price: 21000,
        mileage: 98000,
        type: 'van',
        fuel: 'Benzyna',
        transmission: 'Automatyczna',
        image: 'https://static.wikia.nocookie.net/gtawiki/images/8/80/Burrito3-GTAV-front.png/revision/latest?cb=20160929164143',
        featured: true
    },
    {
        id: 2,
        make: 'Karin',
        model: 'Sultan',
        year: 2005,
        price: 99000,
        mileage: 20000,
        type: 'sedan',
        fuel: 'Benzyna',
        transmission: 'Automatyczna',
        image: 'https://static.wikia.nocookie.net/gtawiki/images/3/34/Sultan-GTAVe-front.png/revision/latest/scale-to-width-down/1000?cb=20230623151719',
        featured: false
    },
    {
        id: 3,
        make: 'Declasse',
        model: 'Granger 3600LX',
        year: 2012,
        price: 66000,
        mileage: 46000,
        type: 'combi',
        fuel: 'Benzyna',
        transmission: 'Automatyczna',
        image: 'https://static.wikia.nocookie.net/gtawiki/images/7/75/Granger3600LX-GTAOe-front.png/revision/latest/scale-to-width-down/1000?cb=20211223020048',
        featured: true
    },
    {
        id: 4,
        make: 'Benefactor',
        model: 'Panto',
        year: 2010,
        price: 15000,
        mileage: 65000,
        type: 'hatchback',
        fuel: 'Benzyna',
        transmission: 'Manualna',
        image: 'https://static.wikia.nocookie.net/gtawiki/images/a/ad/Panto-GTAV-front.png/revision/latest/scale-to-width-down/1000?cb=20190308222526',
        featured: false
    },
    {
        id: 5,
        make: 'Benefactor',
        model: 'Schafter',
        year: 2019,
        price: 85000,
        mileage: 72000,
        type: 'combi',
        fuel: 'Benzyna',
        transmission: 'Automatyczna',
        image: 'https://static.wikia.nocookie.net/gtawiki/images/5/57/Schafter-GTAV-front.png/revision/latest/scale-to-width-down/1000?cb=20160409181945',
        featured: true
    },
    {
        id: 6,
        make: 'Vapid',
        model: 'Minivan',
        year: 2007,
        price: 12000,
        mileage: 160000,
        type: 'van',
        fuel: 'Benzyna',
        transmission: 'Automatyczna',
        image: 'https://static.wikia.nocookie.net/gtawiki/images/1/16/Minivan-GTAV-front.png/revision/latest/scale-to-width-down/1000?cb=20190513111721',
        featured: false
    },
    {
        id: 7,
        make: 'Karin',
        model: 'Dilettante',
        year: 2010,
        price: 35000,
        mileage: 130000,
        type: 'Hatchback',
        fuel: 'Hybrydowy',
        transmission: 'CVT',
        image: 'https://static.wikia.nocookie.net/gtawiki/images/8/84/Dilettante-GTAVe-front.png/revision/latest/scale-to-width-down/1000?cb=20231012173443',
        featured: true
    },
    {
        id: 8,
        make: 'Declasse',
        model: 'Impaler SZ',
        year: 2004,
        price: 27000,
        mileage: 114000,
        type: 'combi',
        fuel: 'Benzyna',
        transmission: 'Automatyczna',
        image: 'https://static.wikia.nocookie.net/gtawiki/images/e/eb/ImpalerSZ-GTAOe-front.png/revision/latest/scale-to-width-down/1000?cb=20231214201045',
        featured: false
    }
];

// DOM elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const carsGrid = document.getElementById('cars-grid');
const contactForm = document.getElementById('contact-form');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    loadCars();
    initializeEventListeners();
});

// Event listeners
function initializeEventListeners() {
    // Mobile menu toggle
    hamburger.addEventListener('click', mobileMenu);
    
    // Contact form submission
    contactForm.addEventListener('submit', handleContactForm);
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Mobile menu toggle
function mobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Load cars into the grid
function loadCars(carsToShow = carsData) {
    carsGrid.innerHTML = '';
    
    carsToShow.forEach(car => {
        const carCard = createCarCard(car);
        carsGrid.appendChild(carCard);
    });
    
    // Add animation to cards
    const cards = document.querySelectorAll('.car-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
    });
}

// Create car card element
function createCarCard(car) {
    const carCard = document.createElement('div');
    carCard.className = 'car-card';
    carCard.innerHTML = `        <div class="car-image">
            <img src="${car.image}" alt="${car.year} ${car.make} ${car.model}">
            ${car.featured ? '<div class="car-badge">Polecane</div>' : ''}
        </div><div class="car-details">
            <h3>${car.year} ${car.make.charAt(0).toUpperCase() + car.make.slice(1)} ${car.model}</h3>
            <p class="car-year">${car.mileage.toLocaleString()} km</p>
            <div class="car-features">
                <span><i class="fas fa-gas-pump"></i> ${car.fuel}</span>
                <span><i class="fas fa-cogs"></i> ${car.transmission}</span>
            </div>
            <div class="car-price">${car.price.toLocaleString()} zł</div>
            <div class="car-actions">
                <button class="btn btn-primary btn-small" onclick="viewCarDetails(${car.id})">
                    Zobacz Szczegóły
                </button>
                <button class="btn btn-outline btn-small" onclick="contactAboutCar(${car.id})">
                    Kontakt
                </button>
            </div>
        </div>
    `;
    return carCard;
}

// Filter cars by type
function filterByType(type) {
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Filter cars
    let filteredCars;
    if (type === 'all') {
        filteredCars = carsData;
    } else {
        filteredCars = carsData.filter(car => car.type === type);
    }
    
    loadCars(filteredCars);
}

// Filter cars based on search criteria
function filterCars() {
    const makeFilter = document.getElementById('make-filter').value;
    const priceFilter = document.getElementById('price-filter').value;
    
    let filteredCars = carsData;
    
    // Filter by make
    if (makeFilter) {
        filteredCars = filteredCars.filter(car => car.make === makeFilter);
    }
      // Filter by price range
    if (priceFilter) {
        if (priceFilter.includes('-')) {
            const [min, max] = priceFilter.split('-').map(p => parseInt(p));
            filteredCars = filteredCars.filter(car => car.price >= min && car.price <= max);
        } else if (priceFilter.includes('+')) {
            const min = parseInt(priceFilter.replace('+', ''));
            filteredCars = filteredCars.filter(car => car.price >= min);
        }
    }
    
    loadCars(filteredCars);
    
    // Scroll to inventory section
    scrollToSection('inventory');
}

// View car details
function viewCarDetails(carId) {
    const car = carsData.find(c => c.id === carId);
    if (car) {
        alert(`Szczegóły Samochodu:\n\n${car.year} ${car.make.charAt(0).toUpperCase() + car.make.slice(1)} ${car.model}\nCena: ${car.price.toLocaleString()} zł\nPrzebieg: ${car.mileage.toLocaleString()} km\nPaliwo: ${car.fuel}\nSkrzynia biegów: ${car.transmission}\n\nSkontaktuj się z nami po więcej informacji!`);
    }
}

// Contact about specific car
function contactAboutCar(carId) {
    const car = carsData.find(c => c.id === carId);
    if (car) {
        // Scroll to contact form
        scrollToSection('contact');
        
        // Pre-fill the interest field
        const interestSelect = document.getElementById('interest');
        interestSelect.value = 'buying';
        
        // Pre-fill message with car info
        const messageField = document.getElementById('message');
        messageField.value = `Dzień dobry, interesuje mnie ${car.year} ${car.make.charAt(0).toUpperCase() + car.make.slice(1)} ${car.model} w cenie ${car.price.toLocaleString()} zł. Proszę o kontakt z więcej informacjami.`;
    }
}

// Handle contact form submission
function handleContactForm(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
      // Simulate form submission
    showNotification('Dziękujemy za wiadomość! Skontaktujemy się z Tobą telefonicznie lub mailowo w ciągu 24 godzin.', 'success');
    
    // Reset form
    contactForm.reset();
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
        <span>${message}</span>
        <button onclick="this.parentElement.remove()" class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#27ae60' : '#3498db'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 10px;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
    `;
    
    // Add close button styles
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: transparent;
        border: none;
        color: white;
        cursor: pointer;
        margin-left: 10px;
        padding: 5px;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        animation: fadeInUp 0.6s ease forwards;
        opacity: 0;
        transform: translateY(30px);
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .notification {
        animation: slideInRight 0.3s ease;
    }
`;
document.head.appendChild(style);

// Intersection Observer for scroll animations
const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe feature cards, service cards, etc.
    document.querySelectorAll('.feature-card, .service-card, .about-text, .about-image').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
};

// Initialize scroll animations after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(observeElements, 100);
});

// Add search functionality on Enter key
document.getElementById('make-filter').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        filterCars();
    }
});

document.getElementById('price-filter').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        filterCars();
    }
});

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#fff';
        header.style.backdropFilter = 'none';
    }
});
