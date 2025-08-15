// Function to display a temporary message box for feedback
function displayMessage(message) {
    const messageBox = document.createElement('div');
    messageBox.classList.add('message-box');
    messageBox.innerText = message;
    document.body.appendChild(messageBox);
    messageBox.style.display = 'block';

    // Automatically remove the message after 3 seconds
    setTimeout(() => {
        messageBox.remove();
    }, 3000);
}

// --- Mobile Navigation Toggle ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// --- Hide Header on Scroll Down ---
let lastScrollTop = 0;
const header = document.querySelector('.main-header');

if (header) {
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Downscroll
            header.style.top = '-80px';
        } else {
            // Upscroll
            header.style.top = '0';
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    }, false);
}


// --- Menu "See More" / "See Less" functionality ---
const showMoreBtn = document.getElementById('show-more-btn');
const showLessBtn = document.getElementById('show-less-btn');
const hiddenItems = document.querySelectorAll('.menu-item.hidden-item');

if (showMoreBtn && showLessBtn) {
    showMoreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        hiddenItems.forEach(item => {
            item.style.display = 'flex'; // Or 'block', depending on your layout
        });
        showMoreBtn.classList.add('hidden');
        showLessBtn.classList.remove('hidden');
    });

    showLessBtn.addEventListener('click', (e) => {
        e.preventDefault();
        hiddenItems.forEach(item => {
            item.style.display = 'none';
        });
        showMoreBtn.classList.remove('hidden');
        showLessBtn.classList.add('hidden');
    });
}


// --- Order Form Submission ---
const orderForm = document.getElementById('orderForm');

if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevents the default form submission

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const requests = document.getElementById('requests').value;
        const selectedDishes = Array.from(document.querySelectorAll('input[name="dishes"]:checked'))
                                 .map(checkbox => checkbox.value)
                                 .join(', ');

        const orderMessage = `Thank you, ₹ {name}! Your order has been placed.\n\nDishes: ₹ {selectedDishes || 'None selected'}\nSpecial Requests: ₹ {requests || 'None'}`;
        
        displayMessage(orderMessage);
        
        // Reset the form after submission
        orderForm.reset();
        
        // Hide the modal after submission
        document.getElementById('order-modal').classList.remove('show');
        document.body.style.overflow = 'auto';
    });
}

// --- Modal Show/Hide Logic ---
const orderLink = document.getElementById('order-link');
const orderModal = document.getElementById('order-modal');
const closeModalBtn = document.getElementById('close-modal-btn');

// Show modal when the 'Order' link is clicked
if (orderLink && orderModal) {
    orderLink.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        orderModal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
}

// Hide modal when the close button is clicked
if (closeModalBtn && orderModal) {
    closeModalBtn.addEventListener('click', () => {
        orderModal.classList.remove('show');
        document.body.style.overflow = 'auto'; // Allow scrolling again
    });
}

// Hide modal when clicking outside the form
if (orderModal) {
    orderModal.addEventListener('click', (e) => {
        if (e.target === orderModal) {
            orderModal.classList.remove('show');
            document.body.style.overflow = 'auto'; // Allow scrolling again
        }
    });
}
cd "c:\Users\prathmesh\Documents\college\INTERSHIP PROJECT\AB Infotrech Projects\Responsive Restaurant"cd "c:\Users\prathmesh\Documents\college\INTERSHIP PROJECT\AB Infotrech Projects\Responsive Restaurant"git initgit initgit init