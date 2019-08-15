function mobileMenu() {
    var mobileNav = $('.c-header__links'),
        mobileClose = $('.c-header__mobile--close'),
        page = $('#page');

    $('.mobile-open').click(function() {
        page.addClass('fixed');
        mobileNav.animate({
            'left': 0
        }, function() {
            mobileClose.addClass('fixed');
        });
    });

    $('.mobile-close').click(function() {
        page.removeClass('fixed');
        mobileClose.removeClass('fixed');
        mobileNav.animate({
            'left': '-100%'
        });
    });
}

export { mobileMenu };
