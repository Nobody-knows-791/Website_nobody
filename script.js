// Loading Animation
window.onload = function() {
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
    }, 1000);
};

function showLoading(modalId) {
    const loading = document.getElementById('loading');
    // Skip loading for friend-circle section
    if (modalId === 'friend-circle') {
        document.getElementById(modalId).style.display = 'flex';
        return;
    }
    loading.style.display = 'flex';
    setTimeout(() => {
        loading.style.display = 'none';
        document.getElementById(modalId).style.display = 'flex';
    }, 1000);
}

// Theme Toggle
function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.textContent = document.body.classList.contains('light-theme') ? '🌞' : '🌙';
}

// Modal Functions
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Portfolio Filter
function filterWorks(category) {
    const works = document.querySelectorAll('.work');
    const tabs = document.querySelectorAll('.tab');
    
    tabs.forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
    
    works.forEach(work => {
        if (category === 'all' || work.getAttribute('data-category').includes(category)) {
            work.style.display = 'block';
        } else {
            work.style.display = 'none';
        }
    });
}

// Friend Circle Slider with Swipe Support
let currentMember = 0;
const members = document.querySelectorAll('.member');
const dots = document.querySelectorAll('.dot');
let touchStartX = 0;
let touchEndX = 0;

function showMember(index) {
    members.forEach(member => member.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    members[index].classList.add('active');
    dots[index].classList.add('active');
    currentMember = index;
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showMember(index));
});

// Touch Swipe Support
const memberContainer = document.querySelector('.member-container');
memberContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

memberContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50; // Minimum swipe distance
    if (touchStartX - touchEndX > swipeThreshold) {
        // Swipe left
        currentMember = (currentMember + 1) % members.length;
        showMember(currentMember);
    }
    if (touchEndX - touchStartX > swipeThreshold) {
        // Swipe right
        currentMember = (currentMember - 1 + members.length) % members.length;
        showMember(currentMember);
    }
}

setInterval(() => {
    currentMember = (currentMember + 1) % members.length;
    showMember(currentMember);
}, 5000);

// Scroll to Section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Scroll to Top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Scroll Navigation Animation
const scrollUp = document.querySelector('.scroll-up');
const scrollDown = document.querySelector('.scroll-down');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Show/hide arrows based on scroll position
    if (scrollPosition > 100) {
        scrollUp.classList.add('active');
    } else {
        scrollUp.classList.remove('active');
    }

    if (scrollPosition + windowHeight < documentHeight - 100) {
        scrollDown.classList.add('active');
    } else {
        scrollDown.classList.remove('active');
    }
});

// Click events for scroll navigation
scrollUp.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

scrollDown.addEventListener('click', () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});