// Filter Works for the "ALL" button
function filterWorks(category) {
    const works = document.querySelectorAll('.work');
    const tabs = document.querySelectorAll('.tab');

    // Remove active class from all tabs
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Add active class to the clicked tab
    event.target.classList.add('active');

    // Show/hide works based on category
    works.forEach(work => {
        if (category === 'all' || work.getAttribute('data-category').includes(category)) {
            work.classList.add('active');
        } else {
            work.classList.remove('active');
        }
    });
}

// Modal Functions for "Channel," "Group," and "Bot" buttons
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Show all works by default when the page loads
document.addEventListener('DOMContentLoaded', () => {
    filterWorks('all');
});