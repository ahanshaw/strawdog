$(document).ready(function() {

    //megamenu
    $('.main-nav').accessibleMegaMenu();

    $('.nav-item a').mouseenter(function() {
        $(this).addClass('open').next().addClass('open');
    });

    $('.nav-item').mouseleave(function() {
        $('.nav-item a').removeClass('open').next().removeClass('open');
    });


    //homepage carousel
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
});
