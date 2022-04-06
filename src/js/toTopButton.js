const ttb = document.querySelector('#ttBtn');

ttb.addEventListener('click', () => {
    toTopOfPage();
})

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { toggleButton() };

function toggleButton() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        ttb.style.display = "grid";
    }
    else {
        ttb.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function toTopOfPage() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}