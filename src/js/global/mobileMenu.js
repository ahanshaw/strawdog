function mobileMenu() {
    var mobileNav = $('.c-header__links'),
        mobileOpen = $('.mobile-open'),
        mobileClose = $('.c-header__mobile--close'),
        page = $('#page');

    mobileOpen.click(function() {
        page.addClass('fixed');
        mobileNav.animate({
            'left': 0
        }, function() {
            mobileClose.addClass('fixed');
        });
    });

    function closeMenu() {
        page.removeClass('fixed');
        mobileClose.removeClass('fixed');
        mobileNav.animate({
            'left': '-100%'
        });
    }

    mobileClose.click(function() {
        closeMenu();
    });

    mobileNav.click(function() {
        closeMenu();
    });
}

export { mobileMenu };
