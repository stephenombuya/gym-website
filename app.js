// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.warn(`Element with ID ${targetId} not found.`);
        }
    });
});

// Handle Form Submission
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Form Submitted:', { name, email, message });
    alert(`Thank you, ${name}! Your message has been sent.`);
    this.reset();
});

// Modal functionality for Membership Plans
const membershipModal = document.getElementById('membership-modal');
const modalCloseButton = membershipModal.querySelector('.modal-close');
const membershipButtons = document.querySelectorAll('.membership-plan button');
const modalDescription = document.getElementById('modal-description');

membershipButtons.forEach(button => {
    button.addEventListener('click', () => {
        const planTitle = button.closest('.membership-plan').querySelector('h3').textContent;
        const planPrice = button.closest('.membership-plan').querySelector('p:nth-of-type(2)').textContent;
        modalDescription.textContent = `You selected the ${planTitle}. Price: ${planPrice}. Click "Join Now" to proceed!`;
        membershipModal.style.display = 'block';
    });
});

modalCloseButton.addEventListener('click', () => {
    membershipModal.style.display = 'none';
});

window.addEventListener('click', event => {
    if (event.target === membershipModal) {
        membershipModal.style.display = 'none';
    }
});

document.getElementById('modal-join-button').addEventListener('click', () => {
    alert('Thank you for joining! We will contact you shortly.');
    membershipModal.style.display = 'none';
});

// Modal functionality for Personal Training Booking
const bookingModal = document.getElementById('booking-modal');
const bookingModalCloseButton = bookingModal.querySelector('.modal-close');
const bookingButtons = document.querySelectorAll('.book-now');
const bookingDescription = document.getElementById('booking-description');

bookingButtons.forEach(button => {
    button.addEventListener('click', () => {
        const sessionTitle = button.closest('.trainer').querySelector('h3').textContent;
        bookingDescription.textContent = `You selected the session with ${sessionTitle}. Click "Book Now" to confirm your booking!`;
        bookingModal.style.display = 'block';
    });
});

bookingModalCloseButton.addEventListener('click', () => {
    bookingModal.style.display = 'none';
});

window.addEventListener('click', event => {
    if (event.target === bookingModal) {
        bookingModal.style.display = 'none';
    }
});

document.getElementById('modal-book-button').addEventListener('click', () => {
    alert('Thank you for booking! We will contact you shortly to confirm your session.');
    bookingModal.style.display = 'none';
});

// Move to Top Button functionality
const moveToTopButton = document.getElementById('move-to-top');

window.addEventListener('scroll', () => {
    moveToTopButton.style.display = (window.scrollY > 200) ? 'block' : 'none';
});

moveToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});




document.getElementById('signupForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulate saving user data (this should be done in a backend)
    console.log('User signed up:', { username, email, password });

    alert('Sign up successful! Please log in.');
    window.location.href = 'login.html'; // Redirect to login page
});

document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Simulate login (this should also be done in a backend)
    console.log('User logged in:', { email, password });

    alert('Login successful!'); // You can implement further actions here
});


document.getElementById('login-button').addEventListener('click', function(event) {
    event.preventDefault();
    let hasAccount = confirm("Do you already have an account?");

    if (hasAccount) {
      // Redirect to login page
      window.location.href = 'login.html'; // Update with the actual path to your login page
    } else {
      // Redirect to signup page
      window.location.href = 'signup.html'; // Update with the actual path to your signup page
    }
  });
