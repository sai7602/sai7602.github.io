$(document).ready(function() {
    $(document).on('scroll', function() {
        var maxHeight = 100;
        if ($(window).scrollTop() > maxHeight) {
            $('.button-up').show(1000).css("display", "flex");
        } else {
            $('.button-up').hide(1000);
        }
    });

    $('.button-up').on('click', function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000)
    });

    $('.image-slick').slick({
        dots: true,
        infinite: true,
        dotsClass: 'slick-dots-custom',
        zIndex: 0,
        speed: 500,
        prevArrow: '<div class="prev"></div>)',
        nextArrow: '<div class="next"></div>)',
    });

    $('.login').on('click', function() {
        $('.modal-login').show(1000);
    });
    $('#button-sign-in').on('click', function() {
        $('.modal-login').hide(1000);
    });

    $(document).click(function(event) {
        if (!$(event.target).is("#modal-login, .login")) {
            $('.modal-login').hide(1000);
        }
    })
});