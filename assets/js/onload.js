$(document).ready(function() {
    $('.like').on('click', function() {
        $(this).toggleClass('clicked');
    });

    $(".menu__link").click(function() {
        if (!$(this).hasClass("menu__link--active")) {
            $(".menu__link").removeClass('menu__link--active');
            $(this).addClass("menu__link--active");
            $(".showcase__products").hide();
            $('#tab-' + $(this).data("id")).show();
        }
    });

    /* slider */
    let slider = $('#slider_list').lightSlider({
        item: 4,
        slideMove: 4,
        slideMargin: 20,
        speed: 2000,
        controls: false,
        responsive: [{
                breakpoint: 1250,
                settings: {
                    item: 3,
                    slideMove: 3
                }
            },
            {
                breakpoint: 900,
                settings: {
                    item: 2,
                    slideMove: 2
                }
            },
            {
                breakpoint: 650,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            }
        ]
    });

    $('#previous').on('click', function() {
        slider.goToPrevSlide();
    });
    $('#next').on('click', function() {
        slider.goToNextSlide();
    });
});