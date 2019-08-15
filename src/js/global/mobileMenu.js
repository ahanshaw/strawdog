function mobileMenu() {
    var mobileNav = $('.c-header__links'),
        page = $('#page');

    $('.mobile-open').click(function() {
        page.addClass('fixed');
        mobileNav.animate({
            'left': 0
        });
    });

    $('.mobile-close').click(function() {
        page.removeClass('fixed');
        mobileNav.animate({
            'left': '-100%'
        });
    });
}

export { mobileMenu };
