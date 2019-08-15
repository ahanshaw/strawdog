import '../vendor/jquery-accessibleMegaMenu.js';

function megaMenu() {
    var intViewportWidth = window.innerWidth,
        mainNav = $('.main-nav');

    if (intViewportWidth > 768) {
        mainNav.accessibleMegaMenu();
    }
}

export { megaMenu };
