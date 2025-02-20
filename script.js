// Toggle Mobile Navigation
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('show');
}

// Smooth Scrolling Navigation
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetID = this.getAttribute('href');
    const targetElement = document.querySelector(targetID);
    if (targetElement) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const offsetTop = targetElement.offsetTop - headerHeight - 20;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
    // Close mobile menu if open
    if (window.innerWidth <= 768) {
      document.getElementById('navLinks').classList.remove('show');
    }
  });
});

// Initialize EmailJS (replace with your actual keys)
(function () {
  emailjs.init("YOUR_EMAILJS_USER_ID");
})();

// Handle Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(() => {
      alert('Message sent successfully!');
      this.reset();
    }, error => {
      alert('Failed to send message. Please try again.');
      console.error('Error:', error);
    });
});

// Custom Cursor Movement
document.addEventListener('mousemove', function (e) {
  const cursor = document.querySelector('.cursor');
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
document.addEventListener('scroll', function () {
  const cursor = document.querySelector('.cursor');
  cursor.style.display = 'none';
});
document.addEventListener('mousemove', function () {
  const cursor = document.querySelector('.cursor');
  cursor.style.display = 'block';
});

// Contact Overlay Hover Effects
function animateContactOverlay() {
  const msg = document.getElementById('contactHoverMsg');
  if (msg) {
    msg.innerText = "Thank you for stopping by! I invite you to leave a message, share your suggestions, or simply drop a note—your feedback is the spark that helps drive our innovation";
  }
}
function resetContactOverlay() {
  const msg = document.getElementById('contactHoverMsg');
  if (msg) {
    msg.innerText = "Thank you for stopping by! I invite you to leave a message, share your suggestions, or simply drop a note—your feedback is the spark that helps drive our innovation";
  }
}

// Toggle Media in About Section
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleMedia");
  const profilePhoto = document.getElementById("profilePhoto");
  const introVideo = document.getElementById("introVideo");

  toggleBtn.addEventListener("click", () => {
    if (introVideo.style.display === "none" || introVideo.style.display === "") {
      introVideo.style.display = "block";
      profilePhoto.style.display = "none";
      toggleBtn.textContent = "Show Photo";
    } else {
      introVideo.style.display = "none";
      profilePhoto.style.display = "block";
      toggleBtn.textContent = "Watch Video";
    }
  });
});
