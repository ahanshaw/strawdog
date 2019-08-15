import '../vendor/slick.min.js';

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
                    slidesToShow: 1
                }
            }
        ]
    });
}

$(document).ready(function() {
    homeCarousel();
});