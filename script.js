// Show all works by default
document.addEventListener('DOMContentLoaded', () => {
    const works = document.querySelectorAll('.work');
    works.forEach(work => work.classList.add('active'));
});

// Modal Functions
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.getElementById('loading').style.display = 'none';
}

// Loading Animation
function showLoading(modalId) {
    const loading = document.getElementById('loading');
    loading.style.display = 'flex';
    setTimeout(() => {
        loading.style.display = 'none';
        openModal(modalId);
    }, 2000); // Show loading for 2 seconds
}