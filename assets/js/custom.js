$(document).ready(function () {
    $('.slick-mobile').slick({
        dots: true,
        fade: true,
        cssEase: 'linear'
    });
});

$(document).ready(function () {
    $('.slick-desktop').slick({
        dots: true,
        fade: true,
        cssEase: 'linear',
        appendDots: $('.dots'),
        speed: 250
    });
});

$(document).ready(function () {
    $('.slick-avenger').slick({
        dots: true,
        fade: true,
        cssEase: 'linear'
    });
});