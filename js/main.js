$(function() {
    $('.header-slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-prev.svg" alt="arrow-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-next.svg" alt="arrow-next"></button>',
        vertical: true,
        responsive: [{
            breakpoint: 371,
            settings: {
                dots: false,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }]
    });
});

$('.product__name').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: '.product__content',
    vertical: true,
    prevArrow: '<button type="button" class="product-prev"><img src="images/product-prev.svg" alt="product-prev"></button>',
    nextArrow: '<button type="button" class="product-next"><img src="images/product-next.svg" alt="product-next"></button>',
    responsive: [{
            breakpoint: 891,
            settings: {
                vertical: false,
                slidesToShow: 3,
                arrows: false,
                dots: true,
            }
        },
        {
            breakpoint: 461,
            settings: {
                vertical: false,
                slidesToShow: 1,
                arrows: false,
                dots: true,
            }
        }
    ]
});

$('.product__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product__name',
    fade: true,
    arrows: false,
});

$('a[href*="#"]').click(function(event) {
    event.preventDefault();
    let anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top
    }, 800);
});

$('.menu__btn').on('click', function() {
    $('.menu__list').toggleClass('menu__list--active');
});