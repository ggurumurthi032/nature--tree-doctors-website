// Nature Trees Doctors - JavaScript for Interactivity

// Login Form Validation
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const message = document.getElementById('message');

            // Simple validation (in a real app, this would be server-side)
            if (username === 'admin' && password === 'password') {
                message.textContent = 'Login successful!';
                message.style.color = 'green';
                // Redirect or show dashboard (for demo, just change message)
            } else {
                message.textContent = 'Invalid username or password.';
                message.style.color = 'red';
            }
        });
    }

    // Add some animations or effects
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        hero.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }

    // Doctor cards hover effect (additional JS if needed)
    const doctorCards = document.querySelectorAll('.doctor-card');
    doctorCards.forEach(card => {
        card.addEventListener('click', function() {
            // Toggle details or something (for now, just alert)
            alert('Doctor details: ' + this.querySelector('h3').textContent);
        });
    });
});
