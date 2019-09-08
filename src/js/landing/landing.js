import isInViewport from 'is-in-viewport';

function navAnimate() {
    var windowWidth = $(window).width(),
        navItem = $('.c-landing__nav li:in-viewport');

    if (windowWidth > 768) {
        navItem.each(function(index) {
            $(this).delay(index * 350).animate({
                'opacity': 1
            }, 500);
        });
    }
}

$(document).ready(function() {
    $(window).scroll(function() {
        setTimeout(navAnimate, 250);
    })
});
