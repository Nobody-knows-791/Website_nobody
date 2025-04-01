// Show all works by default
document.addEventListener('DOMContentLoaded', () => {
    const works = document.querySelectorAll('.work');
    works.forEach(work => work.classList.add('active'));
});

// Modal Functions with Loading Animation
function showLoading(modalId) {
    const loading = document.getElementById('loading');
    loading.style.display = 'flex';
    setTimeout(() => {
        loading.style.display = 'none';
        openModal(modalId);
    }, 2000); // 2-second delay for the loading animation
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Theme Toggle
function toggleTheme() {
    document.body.classList.toggle('bright-theme');
}

// Swipe Functionality for Friend Profiles
let currentIndex = 0;
const members = document.querySelectorAll('.member');
const dots = document.querySelectorAll('.dot');

function showMember(index) {
    members.forEach((member, i) => {
        member.classList.remove('active');
        dots[i].classList.remove('active');
        if (i === index) {
            member.classList.add('active');
            dots[i].classList.add('active');
        }
    });
}

const memberContainer = document.querySelector('.member-container');
let touchStartX = 0;
let touchEndX = 0;

memberContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

memberContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) {
        // Swipe left
        currentIndex = (currentIndex + 1) % members.length;
        showMember(currentIndex);
    } else if (touchEndX - touchStartX > 50) {
        // Swipe right
        currentIndex = (currentIndex - 1 + members.length) % members.length;
        showMember(currentIndex);
    }
});

// Smooth Scrolling for Navigation Links
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}