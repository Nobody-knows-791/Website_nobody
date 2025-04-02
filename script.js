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

// Friend Circle Slider
let currentMember = 0;
const members = document.querySelectorAll('.member');
const dots = document.querySelectorAll('.dot');

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

// Scroll Handling for Scroll Container
window.addEventListener('scroll', () => {
    const scrollDown = document.querySelector('.scroll-down');
    const scrollUp = document.querySelector('.scroll-up');
    const scrollContainer = document.querySelector('.scroll-container');
    
    if (window.scrollY > 100) {
        scrollDown.style.display = 'none';
        scrollUp.style.display = 'block';
        scrollContainer.style.transform = `translateY(${window.scrollY / 2}px)`;
    } else {
        scrollDown.style.display = 'block';
        scrollUp.style.display = 'none';
        scrollContainer.style.transform = 'translateY(-50%)';
    }
});