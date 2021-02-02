let product_slider;

$(document).ready(function () {

    //Акардиоон

    $(function() {
        $('details').on('mouseover', function() {
            $(this).attr('open', true);
            $(this).removeAttr('close', false);
        }).on('mouseout', function() {
            $(this).attr('open', false);
            $(this).removeAttr('open', false);
            $(this).attr('close', true);
        }).on('click', function(e) {
            e.preventDefault();
        })
    });

    //Галерея

    product_slider=$('#imageGallery').lightSlider({
        gallery:true,
        item:1,
        loop:true,
        thumbItem:6,
        slideMargin:10,
        enableDrag: false,
        currentPagerPosition:'left',
        responsive : [
            {
                breakpoint:1200,
                settings: {
                    thumbItem:5,
                    slideMargin:10
                }
            },
            {
                breakpoint:1000,
                settings: {
                    thumbItem:6
                }
            },
            {
                breakpoint:800,
                settings: {
                    thumbItem:5
                }
            },
            {
                breakpoint:600,
                settings: {
                    thumbItem:4
                }
            },
            {
                breakpoint:450,
                settings: {
                    thumbItem:3
                }
            }
        ],
        onSliderLoad: function(el) {
            el.lightGallery({
                selector: '#imageGallery .lslide'
            });
        }
    });

    let slider = $("#lightSlider").lightSlider({
        item: 5,
        controls: false,
        loop: true,
        slideMove: 1,
        slideMargin:20,
        responsive : [
            {
                breakpoint:1200,
                settings: {
                    item:4,
                    slideMove:1,
                }
            },
            {
                breakpoint:1050,
                settings: {
                    item:3.5,
                    slideMove:1,
                }
            },
            {
                breakpoint:870,
                settings: {
                    item:3,
                    slideMove:1,
                }
            },
            {
                breakpoint:730,
                settings: {
                    item:2.5,
                    slideMove:1,
                }
            },
            {
                breakpoint:600,
                settings: {
                    item:2,
                    slideMove:1,
                }
            },
            {
                breakpoint:480,
                settings: {
                    item:1.7,
                    slideMove:1,
                }
            },
            {
                breakpoint:400,
                settings: {
                    item:1,
                    slideMove:1,
                }
            }

        ]
    });

    //arrows for slider

    $('#prev').on('click', function () {
        slider.goToPrevSlide()
    })
    $('#next').on('click', function () {
        slider.goToNextSlide()
    });

    $(window).resize(function () {
        if ($(window).width() < 1200){
            product_slider.refresh();
        }
    })

    // Tabs

    $('.tab_num').click(function() {
        if (!$(this).hasClass("active")) {
            $('.tab_num.active').removeClass("active");
            $(this).addClass("active");
            $('.tabs_info.active').removeClass('active');
            $('.tabs_info' + $(this).data('num')).addClass('active');
        }
    });

    //Ajax

    $.ajax({
        url:'assets/data/reviews.json',
        type:'GET',
        dataType: 'json',
        success: function(json){
            let html = '';
            for(let i = 0; i<json.length; i++){
                html+= `
                <div class="review_col">
                    <div class="author">
                        <h4>${json[i].name}</h4>
                        <div class="author_photo">
                            <img src="${json[i].photo}" alt="${json[i].name}">
                        </div>
                    </div>
                    <div class="full_review">
                        <div class="data_time">
                            <time>${json[i].date}</time>
                        </div>
                        <div class="data_description">
                            <p>${json[i].description}</p>
                        </div>
                        <div class="like_dislike">
                            <a class="like" href="#"><i class="icon-like"></i></a>
                            <a class="dislike" href="#"><i class="icon-like"></i></a>
                        </div>
                    </div>
                </div>
                `;
            }
            $('.review_list').html(html);
        }
    });

    $.ajax({
        url:'assets/data/more_item.json',
        type:'GET',
        dataType: 'json',
        success: function(json){
            let html = '';
            for(let i = 0; i<json.length; i++){
                html+= `
                <div class="item_padding">
                    <div class="more_item">
                        <a href="product.html"><img src="${json[i].photo}" alt="${json[i].name}"></a>
                        <div class="text">
                        <div class="product_name tooltip" title="${json[i].name}">
                        <a href="product.html">
                            <h5>${json[i].name}</h5>
                        </a>
                        </div>
                            <span>${json[i].price}</span>
                            <a class="pixel_btn" href="#">add to cart</a>
                        </div>
                    </div>
                </div>
                `;
            }
            $('.tabs_info3').html(html);
            $('.tabs_info3 .tooltip').tooltipster({
                theme: 'tooltipster-noir'
            });
        }
    });

//tooltipster

    $('.tooltip').tooltipster({
        theme: 'tooltipster-default'
    });

//Like

    $('body').on('click', '.like_link', function() {
        $(this).toggleClass('clicked');
    });

//Modal

    $('.trigger').on('click', function() {
        $('.modal-wrapper').toggleClass('open');
    });
    $('.btn_close').on('click', function() {
        $('.modal-wrapper').removeClass('open');
    });

//Scroll to review
    $(".product_reviews").click(function() {
        $('html, body').animate({
            scrollTop: $(".product_tabs").offset().top
        }, 1000);
        $('.tab_num').removeClass('active');
        $('.tab_num[data-num="2"]').addClass('active');
        $('.tabs_info').removeClass('active');
        $('.tabs_info2').addClass('active');
    });
});




