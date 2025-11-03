// Smooth scroll for sidebar links
document.querySelectorAll('.sidebar-links a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector('.content').scrollIntoView({ behavior: 'smooth' });
        // Set active class
        document.querySelectorAll('.sidebar-links a').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});
});
