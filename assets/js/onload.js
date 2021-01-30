$(document).ready(function() {
    // hamburger 
    $(".header__hamburger").click(function() {
        $(".header__hamburger").toggleClass("is-active");
        $(".mobile-menu, .menu-shadow").toggleClass("opened");
    });

    $(".menu-shadow").click(function() {
        $(".header__hamburger").removeClass("is-active");
        $(".mobile-menu, .menu-shadow").removeClass("opened");
    });

    $(window).scroll(function() {
        if ($(window).scrollTop() > 250) {
            $(".header").addClass("scrolled");
        } else {
            $(".header").removeClass("scrolled");
        }
    });

    // favorites
    $('.like').on('click', function() {
        $(this).toggleClass('clicked');
    });

    // tabs
    $(".menu__link").click(function() {
        if (!$(this).hasClass("menu__link--active")) {
            $(".menu__link").removeClass('menu__link--active');
            $(this).addClass("menu__link--active");
            $(".showcase__products").hide();
            $('#tab-' + $(this).data("id")).show();
        }
    });

    // scroll to top

    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('#scroller').fadeIn();
        } else {
            $('#scroller').fadeOut();
        }
    });
    $('#scroller').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
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
        ],
        onSliderLoad: function(el) {
            let showActiveSlides = function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.src = entry.target.dataset.src;
                        observer.unobserve(entry.target);
                    }
                });
            };

            let imageWidth = el.find("li").outerWidth() + "px";

            let observer = new window.IntersectionObserver(showActiveSlides, {
                root: el.parent()[0],
                rootMargin: "0px " + imageWidth + " 0px " + imageWidth
            });

            el.find("li img").each(function() {
                observer.observe(this);
            });
        }
    });

    $('.instaShop__prev').on('click', function() {
        slider.goToPrevSlide();
    });
    $('.instaShop__next').on('click', function() {
        slider.goToNextSlide();
    });
});

// modal window

let modal = document.getElementById("my_modal");
let btn = document.getElementById("open-modal");
let span = document.getElementsByClassName("close_modal_window")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// lazy 
let lazyLoadInstance = new LazyLoad({
    // Your custom settings go here

});