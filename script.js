document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('change', function() {
        menuIcon.classList.toggle('open');
        menu.classList.toggle('open');
    });
});
