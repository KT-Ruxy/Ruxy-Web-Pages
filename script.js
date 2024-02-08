let lastScroll = 0;
const tabBar = document.querySelector('.tab-bar');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        tabBar.style.top = '0';
    }

    if (currentScroll > lastScroll) {
        tabBar.style.top = '-70px';
    } else if (currentScroll < lastScroll) {
        tabBar.style.top = '0';
    }

    lastScroll = currentScroll;
});
