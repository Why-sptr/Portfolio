// Navbar Toggle
const navbar = document.getElementById('navbarNav');
const toggler = document.querySelector('.navbar-toggler');

document.addEventListener('click', function (event) {
    const isClickInsideNavbar = navbar.contains(event.target);
    const isClickInsideToggler = toggler.contains(event.target);

    if (!isClickInsideNavbar && !isClickInsideToggler) {
        const navbarInstance = bootstrap.Collapse.getInstance(navbar);
        if (navbarInstance) {
            navbar.classList.remove('show');
            setTimeout(() => {
                navbarInstance.hide();
            }, 300);
        }
    }
});

// Modal Preview
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function () {
            const image = card.getAttribute('data-image');

            document.getElementById('modalImage').src = image;
        });
    });
});

// Typing Animation
const textElement = document.getElementById('typing-text');
const texts = [
    ' Fullstack Web Developer ',
    ' Graphic Designer ',
    ' UI/UX Designer ',
    ' Digital Marketing ',
];
let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 1000;

function typeAnimation() {
    const currentText = texts[currentTextIndex];

    if (isDeleting) {
        textElement.textContent = currentText.substring(0, currentCharIndex--);
    } else {
        textElement.textContent = currentText.substring(0, currentCharIndex++);
    }

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && currentCharIndex === currentText.length) {
        isDeleting = true;
        delay = pauseTime;
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        delay = pauseTime;
    }

    setTimeout(typeAnimation, delay);
}

typeAnimation();