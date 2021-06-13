const menuButton = document.getElementById('menu-button');
const header = document.getElementById('header');
const nav = document.getElementById('nav');
const socials = document.getElementById('socials');

menuButton.addEventListener('click', () => {
    if (header.classList.contains('header_non-zero-gaps')) {
        header.classList.remove('header_non-zero-gaps');
        header.classList.add('header_zero-gaps');
    } else {
        header.classList.add('header_non-zero-gaps');
        header.classList.remove('header_zero-gaps');
    }

    nav.classList.toggle('header_invisible');
    socials.classList.toggle('header_invisible');
})

window.addEventListener("resize", function () {
    if (window.innerWidth >= 820) {
        if (header.classList.contains('header_zero-gaps')) {
            header.classList.remove('header_zero-gaps');
            header.classList.add('header_non-zero-gaps');
        }

        if (nav.classList.contains('header_invisible')) {
            nav.classList.remove('header_invisible');
        }

        if (socials.classList.contains('header_invisible')) {
            socials.classList.remove('header_invisible');
        }
    }
});

handleOrderClick = () => {
    window.location.href = "/dist/order.html";
}

handleSuccessClick = () => {
    window.location.href = "/dist/success.html";
}
