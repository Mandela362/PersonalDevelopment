// Dark mode toggle
const toggle = document.getElementById('darkModeToggle');
if (toggle) {
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
        toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });
    
    // On load, check for dark mode preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        toggle.textContent = '☀️';
    }
}

// Mastery Calculator
function calculateMastery() {
    const hoursPerDay = parseFloat(document.getElementById('hours-per-day').value);
    const complexity = document.getElementById('skill-complexity').value;
    const result = document.getElementById('result');

    // Basic calculation based on the 10,000-hour rule with adjustments for complexity
    let totalHours;
    switch(complexity) {
        case 'beginner':
            totalHours = 1000;
            break;
        case 'intermediate':
            totalHours = 5000;
            break;
        case 'advanced':
            totalHours = 10000;
            break;
        default:
            totalHours = 5000;
    }

    const daysToMastery = Math.ceil(totalHours / hoursPerDay);
    const yearsToMastery = (daysToMastery / 365).toFixed(1);

    result.innerHTML = `
        <h3>Your Mastery Timeline:</h3>
        <p>At ${hoursPerDay} hours per day, you could achieve:</p>
        <ul>
            <li>Basic proficiency: ${Math.ceil(daysToMastery * 0.2)} days</li>
            <li>Intermediate level: ${Math.ceil(daysToMastery * 0.5)} days</li>
            <li>Mastery: ${daysToMastery} days (approximately ${yearsToMastery} years)</li>
        </ul>
    `;
}

// Form Submissions
document.addEventListener('DOMContentLoaded', () => {
    // Contact Form
    const mentorForm = document.getElementById('mentorForm');
    if (mentorForm) {
        mentorForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Here you would typically send the form data to a server
            alert('Thank you! A mentor will contact you soon.');
            mentorForm.reset();
        });
    }

    // Newsletter Form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Here you would typically send the email to a server
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        });
    }
});

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, {
    threshold: 0.1
});

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in-section');
    observer.observe(section);
});
