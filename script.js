// Smooth scroll for navbar links
document.querySelectorAll('.Navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            const target = document.querySelector(this.hash);
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Navbar shadow on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.Navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
    } else {
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
    }
});

// Simple contact form validation
document.querySelector("form").addEventListener("submit", function(e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields before submitting.");
        e.preventDefault();
    }
});

// Slight zoom effect on headings
document.querySelectorAll("h1").forEach(h => {
    h.addEventListener("mouseenter", () => {
        h.style.transform = "scale(1.05)";
    });
    h.addEventListener("mouseleave", () => {
        h.style.transform = "scale(1)";
    });
});

