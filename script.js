// VK Travels Interactive Website Script

// Initialize EmailJS
(function() {
    // Check if EmailJS is loaded
    if (typeof emailjs !== 'undefined') {
        emailjs.init("J2On6AvryHHmP68fq");
        console.log('EmailJS initialized successfully');
    } else {
        console.error('EmailJS library not loaded');
    }
})();

// Loading Screen
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loading-screen').style.display = 'none';
    }, 3000);
});

let slideIndex = 1;
showSlides(slideIndex);

// Mobile Navigation
document.getElementById('nav-toggle').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.toggle('active');
    this.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('nav-menu').classList.remove('active');
        document.getElementById('nav-toggle').classList.remove('active');
    });
});

// Modal Functions
function openModal(img) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const caption = document.getElementById('modalCaption');
    
    modal.style.display = 'block';
    modalImg.src = img.src;
    caption.innerHTML = img.alt;
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

// Enhanced South India Section Interactions
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers for South India destination cards
    const southIndiaCards = document.querySelectorAll('.south-india-header + .gallery-grid .destination-item');
    
    southIndiaCards.forEach((card, index) => {
        // Add click to show more info
        card.addEventListener('click', function() {
            showDestinationDetails(this, index);
        });
        
        // Add keyboard navigation
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                showDestinationDetails(this, index);
            }
        });
    });
});

// Function to show destination details
function showDestinationDetails(card, index) {
    const destinations = [
        {
            name: 'Tirupati Balaji',
            location: 'Andhra Pradesh',
            description: 'One of the richest temples in India dedicated to Lord Venkateswara. Experience divine blessings and architectural marvels.',
            highlights: ['Golden Temple', 'Divine Darshan', 'Hilltop Location', 'Festive Celebrations'],
            bestTime: 'October to March',
            duration: '1-2 Days'
        },
        {
            name: 'Meenakshi Temple',
            location: 'Madurai, Tamil Nadu',
            description: 'A magnificent example of Dravidian architecture with stunning sculptures and vibrant festivals.',
            highlights: ['Dravidian Architecture', 'Thousand Pillar Hall', 'Golden Lotus Tank', 'Cultural Heritage'],
            bestTime: 'October to March',
            duration: '1 Day'
        },
        {
            name: 'Ramanathaswamy Temple',
            location: 'Rameswaram, Tamil Nadu',
            description: 'Sacred temple with 22 holy wells, one of the twelve Jyotirlinga shrines of Lord Shiva.',
            highlights: ['22 Holy Wells', 'Jyotirlinga Shrine', 'Corridor of 1000 Pillars', 'Spiritual Significance'],
            bestTime: 'October to April',
            duration: '1 Day'
        },
        {
            name: 'Kanyakumari',
            location: 'Tamil Nadu',
            description: 'The southernmost tip of India where three seas meet, featuring the iconic Vivekananda Rock Memorial.',
            highlights: ['Vivekananda Rock', 'Sunset Point', 'Three Seas Meeting', 'Triveni Sangam'],
            bestTime: 'October to May',
            duration: '1-2 Days'
        },
        {
            name: 'Mahabalipuram',
            location: 'Tamil Nadu',
            description: 'UNESCO World Heritage Site famous for ancient temples, rock carvings, and shore temples.',
            highlights: ['Shore Temple', 'Rock Carvings', 'UNESCO Heritage', 'Beach Location'],
            bestTime: 'November to February',
            duration: '1 Day'
        },
        {
            name: 'Brihadeeswarar Temple',
            location: 'Thanjavur, Tamil Nadu',
            description: 'UNESCO World Heritage Site and the largest temple in India, built by Raja Raja Chola I.',
            highlights: ['UNESCO Heritage', 'Chola Architecture', 'Largest Temple', 'Ancient Engineering'],
            bestTime: 'October to March',
            duration: '1 Day'
        },
        {
            name: 'Padmanabhaswamy Temple',
            location: 'Thiruvananthapuram, Kerala',
            description: 'One of the richest temples in India, dedicated to Lord Vishnu in Anantha Shayana posture.',
            highlights: ['Ancient Treasures', 'Secret Chambers', 'Kerala Architecture', 'Spiritual Center'],
            bestTime: 'October to March',
            duration: '1 Day'
        },
        {
            name: 'Srirangam Temple',
            location: 'Tiruchirappalli, Tamil Nadu',
            description: 'The largest functioning Hindu temple complex in the world, dedicated to Lord Ranganatha.',
            highlights: ['Largest Temple Complex', 'Seven Prakarams', 'Vaishnavite Shrine', 'Festival Celebrations'],
            bestTime: 'October to March',
            duration: '1-2 Days'
        },
        {
            name: 'Chidambaram Temple',
            location: 'Tamil Nadu',
            description: 'Home of Lord Nataraja, the cosmic dancer, featuring the famous Thillai Nataraja Temple.',
            highlights: ['Lord Nataraja', 'Cosmic Dance', 'Five Sabhas', 'Spiritual Significance'],
            bestTime: 'October to March',
            duration: '1 Day'
        },
        {
            name: 'Kumbakonam Temples',
            location: 'Tamil Nadu',
            description: 'Temple town known as the "Cambridge of South India" with magnificent Dravidian temples.',
            highlights: ['Temple Town', 'Dravidian Architecture', 'Mahamaham Festival', 'Sacred Tanks'],
            bestTime: 'October to March',
            duration: '1-2 Days'
        },
        {
            name: 'Hampi',
            location: 'Karnataka',
            description: 'UNESCO World Heritage Site showcasing the ruins of the Vijayanagara Empire.',
            highlights: ['Vijayanagara Ruins', 'UNESCO Heritage', 'Ancient City', 'Stone Architecture'],
            bestTime: 'October to March',
            duration: '2-3 Days'
        }
    ];
    
    const destination = destinations[index];
    
    // Create or update modal content
    let detailsModal = document.getElementById('destinationDetailsModal');
    if (!detailsModal) {
        detailsModal = document.createElement('div');
        detailsModal.id = 'destinationDetailsModal';
        detailsModal.className = 'modal';
        detailsModal.innerHTML = `
            <div class="modal-content destination-modal">
                <span class="close" onclick="closeDestinationModal()">&times;</span>
                <div class="destination-details">
                    <h2 id="destinationTitle"></h2>
                    <p class="location" id="destinationLocation"></p>
                    <p class="description" id="destinationDescription"></p>
                    <div class="highlights">
                        <h3>Highlights:</h3>
                        <ul id="destinationHighlights"></ul>
                    </div>
                    <div class="travel-info">
                        <div class="info-item">
                            <strong>Best Time to Visit:</strong> <span id="bestTime"></span>
                        </div>
                        <div class="info-item">
                            <strong>Recommended Duration:</strong> <span id="duration"></span>
                        </div>
                    </div>
                    <button class="book-now-btn" onclick="scrollToBooking()">Book This Tour</button>
                </div>
            </div>
        `;
        document.body.appendChild(detailsModal);
    }
    
    // Update modal content
    document.getElementById('destinationTitle').textContent = destination.name;
    document.getElementById('destinationLocation').textContent = destination.location;
    document.getElementById('destinationDescription').textContent = destination.description;
    document.getElementById('bestTime').textContent = destination.bestTime;
    document.getElementById('duration').textContent = destination.duration;
    
    const highlightsList = document.getElementById('destinationHighlights');
    highlightsList.innerHTML = '';
    destination.highlights.forEach(highlight => {
        const li = document.createElement('li');
        li.textContent = highlight;
        highlightsList.appendChild(li);
    });
    
    // Show modal
    detailsModal.style.display = 'block';
}

function closeDestinationModal() {
    const modal = document.getElementById('destinationDetailsModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function scrollToBooking() {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
    closeDestinationModal();
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('destinationDetailsModal');
    if (event.target === modal) {
        closeDestinationModal();
    }
});

// Close modal when clicking outside
document.getElementById('imageModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});
showSlides(slideIndex);

// Next/previous controls
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Auto slideshow
setInterval(function() {
    changeSlide(1);
}, 5000); // Change slide every 5 seconds

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Enhanced Form Validation and Submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Clear previous errors
    clearErrors();
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Validate form
    let isValid = true;
    
    if (!data.name || data.name.trim().length < 2) {
        showError('name', 'Name must be at least 2 characters');
        isValid = false;
    }
    
    if (!data.email || !isValidEmail(data.email)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    if (!data.message || data.message.trim().length < 10) {
        showError('message', 'Message must be at least 10 characters');
        isValid = false;
    }
    
    if (!isValid) return;
    
    // Show loading state
    const submitBtn = document.getElementById('submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Prepare email parameters
    const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone || 'Not provided',
        service: data.service || 'Not specified',
        message: data.message,
        to_name: 'Satyanarayana Goud',
        to_email: 'ssgoud96@gmail.com',
        reply_to: data.email
    };
    
    // Check if EmailJS is available
    if (typeof emailjs === 'undefined') {
        showMessage('Email service is currently unavailable. Please contact us directly at ssgoud96@gmail.com', 'error');
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        return;
    }
    
    // Send email using EmailJS
    emailjs.send('service_5m55sjy', 'template_50xp96r', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            showMessage('Thank you, ' + data.name + '! Your message has been sent successfully. We\'ll get back to you soon.', 'success');
            document.getElementById('contact-form').reset();
        }, function(error) {
            console.log('FAILED...', error);
            let errorMessage = 'Sorry, there was an error sending your message. ';
            
            // Provide more specific error messages
            if (error.text) {
                if (error.text.includes('user ID is required')) {
                    errorMessage += 'EmailJS is not properly configured. Please check the setup.';
                } else if (error.text.includes('Template not found')) {
                    errorMessage += 'Email template not found. Please check your EmailJS template.';
                } else if (error.text.includes('Service not found')) {
                    errorMessage += 'Email service not found. Please check your EmailJS service.';
                } else {
                    errorMessage += 'Error: ' + error.text;
                }
            } else if (error.message) {
                errorMessage += 'Error: ' + error.message;
            } else {
                errorMessage += 'Please check your internet connection and try again.';
            }
            
            showMessage(errorMessage + '\n\nYou can also contact us directly at ssgoud96@gmail.com', 'error');
        })
        .finally(function() {
            // Reset button state
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
});

// Form validation helpers
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(fieldId, message) {
    const errorElement = document.getElementById(fieldId + '-error');
    errorElement.textContent = message;
    document.getElementById(fieldId).style.borderColor = '#e74c3c';
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(el => el.textContent = '');
    
    const inputs = document.querySelectorAll('#contact-form input, #contact-form textarea, #contact-form select');
    inputs.forEach(input => input.style.borderColor = '#e1e8ed');
}

function showMessage(message, type) {
    const messageDiv = document.getElementById('form-message');
    messageDiv.textContent = message;
    messageDiv.className = 'form-message ' + type;
    messageDiv.style.display = 'block';
    
    // Scroll to message
    messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    // Auto hide success messages
    if (type === 'success') {
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000);
    }
}

// Gallery image click handler - Use modal instead of alert
document.querySelectorAll('.gallery-grid img').forEach(img => {
    img.addEventListener('click', function() {
        openModal(this);
    });
});

// Back to Top Button
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Enhanced smooth scrolling with offset for fixed header
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            const headerOffset = 80;
            const elementPosition = targetSection.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add loading animation to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        if (!this.disabled) {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        }
    });
});

// Add click animations to cards
document.querySelectorAll('.service-item, .fleet-item, .testimonial').forEach(card => {
    card.addEventListener('click', function() {
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});

// Test EmailJS connection (for debugging)
function testEmailJS() {
    if (typeof emailjs === 'undefined') {
        console.error('EmailJS not loaded');
        return;
    }
    
    console.log('Testing EmailJS connection...');
    emailjs.send('service_5m55sjy', 'template_50xp96r', {
        from_name: 'Test User',
        from_email: 'test@example.com',
        message: 'This is a test message',
        to_name: 'Satyanarayana Goud',
        to_email: 'ssgoud96@gmail.com',
        reply_to: 'test@example.com'
    })
    .then(result => console.log('EmailJS test successful:', result))
    .catch(error => console.error('EmailJS test failed:', error));
}

// Uncomment the line below to test EmailJS on page load
// setTimeout(testEmailJS, 2000);

console.log('VK Travels Enhanced Interactive Website Loaded Successfully! 🚗✨');