import '../vendor/slick.min.js';

function homeAnimation() {
    var windowWidth = $(window).width(),
        heroCopy = $('.c-hero__copy'),
        showItem = $('.c-home__current__show'),
        subscribeBtn = $('.c-home__current__subscribe'),
        numberShows = showItem.length;

    function heroCopyAnimation() {
        heroCopy.animate({
            'right': 0
        }, 1000);
    }

    function showAnimate() {
        showItem.each(function(index) {
            $(this).delay(index * 500).animate({
                'opacity': 1
            }, 500);
        });
    }

    function subscribeBtnAnimate() {
        subscribeBtn.animate({
            'opacity': 1
        }, 500);
    }

    if (windowWidth > 768) {
        setTimeout(heroCopyAnimation, 250);
        setTimeout(showAnimate, 1250);
        setTimeout(subscribeBtnAnimate, 1250 + (500 * numberShows));
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
    homeAnimation();
    homeCarousel();
});


$(window).resize(function() {
    homeAnimation();
});
