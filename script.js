// Highlight active sidebar link and smooth scroll
const sidebarLinks = document.querySelectorAll('.sidebar-links a');

sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        sidebarLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        document.querySelector('.content').scrollIntoView({behavior: 'smooth'});
    });
});
