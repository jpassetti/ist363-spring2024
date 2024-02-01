const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeBtn');

menuBtn.addEventListener('click', function() {
    mobileMenu.classList.add('active');
});

closeBtn.addEventListener('click', function() {
    mobileMenu.classList.remove('active');
});