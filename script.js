// Only highlight the current page link
const sidebarLinks = document.querySelectorAll('.sidebar-links a');

// Highlight based on current page URL
const currentPage = window.location.pathname.split("/").pop();

sidebarLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});
