const navBtn = document.querySelector('#menu-btn');
const navBtns = document.querySelectorAll('.nav-button');

navBtn.addEventListener('click', () => {
    navBtn.setAttribute('aria-expanded', navBtn.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
})

setNavigation();

function setNavigation() {
    var path = window.location.pathname;
    
    navBtns.forEach(nb => {
        var href = nb.getAttribute('href');
        
        if (path === href) {
            nb.classList.add('active');
        }
    });
}