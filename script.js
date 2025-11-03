// Highlight active sidebar link and smooth scroll
const sidebarLinks = document.querySelectorAll('.sidebar-links a');

sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // Remove active from all
        sidebarLinks.forEach(l => l.classList.remove('active'));
        // Add active to clicked
        link.classList.add('active');
        // Scroll main content into view smoothly
        document.querySelector('.content').scrollIntoView({behavior: 'smooth'});
    });
});
