import slickCarousel from 'slick-carousel';
import isInViewport from 'is-in-viewport';
import { getCookie } from '../global/getCookie.js';

function homeAnimation() {
    var windowWidth = $(window).width(),
        heroImage = $('.c-hero__image'),
        heroCopy = $('.c-hero__copy'),
        showItem = $('.c-home__current__show'),
        subscribeBtn = $('.c-home__current__subscribe .btn'),
        numberShows = showItem.length;

    function heroImageAnimation() {
        heroImage.animate({
            'top': 0
        }, 500);
    }

    function heroCopyAnimation() {
        heroCopy.animate({
            'right': 0
        }, 1000);
    }

    function showAnimate() {
        showItem.each(function(index) {
            $(this).delay(index * 350).animate({
                'opacity': 1
            }, 500);
        });
    }

    function subscribeBtnAnimate() {
        subscribeBtn.animate({
            'bottom': '3em'
        }, 500);
    }

    if (windowWidth > 768) {
        setTimeout(heroImageAnimation, 50);
        setTimeout(heroCopyAnimation, 250);
        setTimeout(showAnimate, 1300);
        setTimeout(subscribeBtnAnimate, 1300 + (350 * numberShows));
    }
}

function eventsAnimate() {
    var windowWidth = $(window).width();

    if (windowWidth > 768) {
        $('.c-home__events:in-viewport').animate({
            'opacity': 1
        }, 750);
    }
}

function homeCarousel() {
    $('.c-home__carousel__container').slick({
        infinite: true,
        slidesToShow: 6,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev">&#8249;</button>',
        nextArrow: '<button type="button" class="slick-next">&#8250;</button>',
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
}

$(document).ready(function() {
    var visitedCookie = getCookie('visited');
    if (visitedCookie != 'yes') {
        homeAnimation();
    }
    homeCarousel();

    $(window).scroll(function() {
        setTimeout(eventsAnimate, 250);
    })
});


$(window).resize(function() {
    homeAnimation();
});
