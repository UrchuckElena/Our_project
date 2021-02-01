$(document).ready(function (){

    const view = getCookie('products_view');
    if(typeof (view)!= undefined){
        if (view=='list'){
            $('#product_list').addClass('list-view');
            $('.change_view[data-view="list"]').addClass('active');
        }else{
            $('.change_view[data-view="grid"]').addClass('active');
        }
    }


    // Ratio-Slider
    let $range = $(".js-range-slider"),
        $inputFrom = $(".js-input-from"),
        $inputTo = $(".js-input-to"),
        instance,
        min = 0,
        max = 10000,
        from = 0,
        to = 10000;

    $range.ionRangeSlider({
        skin: "round",
        type: "double",
        min: min,
        max: max,
        from: from,
        to: to,
        onStart: updateInputs,
        onChange: updateInputs
    });

    function updateInputs (data) {
        from = data.from;
        to = data.to;

        $inputFrom.val(from + "$");
        $inputTo.val(to + "$");
    }

    instance = $range.data("ionRangeSlider");

    $inputFrom.on("keyup", function () {
        let val = $(this).val();
        // validate
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }
        instance.update({
            from: val
        });
    });
    $inputTo.on("keyup", function () {
        let val = $(this).val();
        // validate
        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }
        instance.update({
            to: val
        });
    });


    // Ratio-Slider

    $('select, input:checkbox, input:radio').styler();

    //Карточки товаров

    $.getJSON('assets/data/service.json', function (json) {
        $('#card_item').pagination({
            dataSource: json,
            pageSize: 16,
            callback: function(data, pagination) {
                $('#product_list').empty();
                $.each(data, function (i, f) {
                    $('#product_list').append(`<li class="product_item">
                      <div class="favorite">
                            <a class="like_link" href="javascript:void(0)">
                                <svg class="like" width="20" height="20" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.3022 2.72346L12.0004 3.40422L12.6985 2.72332C13.7846 1.66396 15.276 1 16.9387 1C20.3433 1 23 3.75848 23 7.03761C23 8.77432 22.2631 10.3504 21.0666 11.4595L21.0516 11.4734L21.0372 11.4879L11.9982 20.5815L2.90797 11.4364L2.89728 11.4256L2.88627 11.4152C1.71766 10.3087 1 8.75166 1 7.03761C1 3.75848 3.65669 1 7.06134 1C8.72443 1 10.2154 1.66391 11.3022 2.72346Z"></path>
                                </svg>
                            </a>
                        </div>
                        <div class="product_photo">
                            <a href="product.html"><img class="item_img" src="${f.image}" alt=""></a>
                            <div class="favorite favorite-list">
                            <a class="like_link" href="javascript:void(0)">
                                <svg class="like" width="20" height="20" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.3022 2.72346L12.0004 3.40422L12.6985 2.72332C13.7846 1.66396 15.276 1 16.9387 1C20.3433 1 23 3.75848 23 7.03761C23 8.77432 22.2631 10.3504 21.0666 11.4595L21.0516 11.4734L21.0372 11.4879L11.9982 20.5815L2.90797 11.4364L2.89728 11.4256L2.88627 11.4152C1.71766 10.3087 1 8.75166 1 7.03761C1 3.75848 3.65669 1 7.06134 1C8.72443 1 10.2154 1.66391 11.3022 2.72346Z"></path>
                                </svg>
                            </a>
                        </div>
                        </div>
                        <div class="shop_description">
                            <a href="product.html">
                                <p>${f.title}</p>
                            </a>
                        <div class="buy_box">
                            <span>${f.price}</span>
                            <a class="pixel_btn" href="#">add to cart</a>
                        </div>
                        <div class="products_color">
                            <form method="POST">
                                <input type="checkbox" id="blue_${i}" name="colors">
                                <label class="blue" title="Синий" for="blue_${i}"></label>
                                <input type="checkbox" id="green_${i}" name="colors">
                                <label class="green" title="Зеленый" for="green_${i}"></label>
                                <input type="checkbox" id="orange_${i}" name="colors">
                                <label class="orange" title="Оранжевый" for="orange_${i}"></label>
                                <input type="checkbox" id="black_${i}" name="colors">
                                <label class="black" title="Черный" for="black_${i}"></label>
                            </form>
                         </div>
                         <div class="off_btn">
                            <a class="pixel_btn off_bnt" href="#">add to cart</a>
                         </div>
                        </div>
                    </li>`);
                });
            }
        });
    });

    $('body').on('click', '.like_link', function() {
        $(this).toggleClass('clicked');
    });


    $('.change_view').click(function(){
        $('.change_view').removeClass('active');
        $(this).addClass('active');
        setCookie('products_view', $(this).data('view'), {expires:60*60*24*7});
        if($(this).data('view')=='list'){
            $('#product_list').addClass('list-view');
        }else {
            $('#product_list').removeClass('list-view');
        }
    });

//Выпадающий фильтр

    $(".shop_filter_btn").click(function(){
        $("#mobile_filter, #menu_shadow").toggleClass("opened");
    });
    $("#menu_shadow, .close_filter").click(function(){
        $("#mobile_filter, #menu_shadow").removeClass("opened");
    });

});

//Cookie

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
}

//уcтанавливает cookie

function setCookie(name, value, props) {
    props = props || {}
    let exp = props.expires
    if (typeof exp == "number" && exp) {
        let d = new Date()
        d.setTime(d.getTime() + exp*1000)
        exp = props.expires = d
    }
    if(exp && exp.toUTCString) { props.expires = exp.toUTCString() }
    value = encodeURIComponent(value)
    let updatedCookie = name + "=" + value
    for(let propName in props){
        updatedCookie += "; " + propName
        let propValue = props[propName]
        if(propValue !== true){ updatedCookie += "=" + propValue }
    }
    document.cookie = updatedCookie
}

//удаляет cookie
function deleteCookie(name) {
    setCookie(name, null, { expires: -1 })
}














