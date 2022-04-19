const navBtn = document.querySelector('#menu-btn');

navBtn.addEventListener('click', () => {
    navBtn.setAttribute('aria-expanded', navBtn.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
})

document.querySelectorAll('.nav-button').forEach(link => {
    if (link.href === window.location.href) {
        link.setAttribute('aria-current', 'page')
    }
})