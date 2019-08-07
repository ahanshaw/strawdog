$(document).ready(function() {

    //megamenu
    $('.main-nav').accessibleMegaMenu();

    //moble Menu
    $('.mobile-open').click(function() {
        $('.c-header__links').animate({
            'left': 0
        });
    });

    $('.mobile-close').click(function() {
        $('.c-header__links').animate({
            'left': '-100%'
        });
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

    //smooth scroll
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault()

        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top,
            },
            750,
            'linear'
        )
    })

});
