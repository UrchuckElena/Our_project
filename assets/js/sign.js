$(document).ready(function() {

    $(window).scroll(function() {
        if ($(window).scrollTop() > 250) {
            $(".header").addClass("scrolled");
        } else {
            $(".header").removeClass("scrolled");
        }
    });
});