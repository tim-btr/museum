jQuery(function () {

    //Меняем цвет шапки при скроллинге на десктопах
    if ($(window).width() >= 993) {
        $(window).on('load scroll', function () {
            var head = $('header');
            if (head.offset().top > 100) {
                head.css({'background': '#3f3c47'});
            } else {
                head.css({'background': 'transparent'});
            }
        });
    }

    //Клик по иконке поиска по сайту
    $('.search > .fa').on('click', function () {
        var form = $('.search-form').css('display');
        if (form == 'none') {
            $('.search > .fa').css({
                '-moz-transform': 'rotate(45deg)',
                '-webkit-transform': 'rotate(45deg)',
                '-o-transform': 'rotate(45deg)',
                '-ms-transform': 'rotate(45deg)',
                'transform': 'rotate(45deg)'
            });
            $('.search > .fa').removeClass('fa-search').addClass('fa-plus');
            $('.search-form').css({'display': 'block'});
        } else {
            $('.search > .fa').css({
                '-moz-transform': 'rotate(0deg)',
                '-webkit-transform': 'rotate(0deg)',
                '-o-transform': 'rotate(0deg)',
                '-ms-transform': 'rotate(0deg)',
                'transform': 'rotate(0deg)'
            });
            $('.search > .fa').removeClass('fa-plus').addClass('fa-search');
            $('.search-form').css({'display': 'none'});
        }
    });

    //Клик по иконке меню - анимация иконки + слайд блока меню
    $('.bars > .fa').on('click', function () {
        if($('.mob-menu').offset().left < 0) {
            $('.mob-menu').animate({
                left: "0"
            }, 600);
        } else {
            $('.mob-menu').animate({
                left: "-230"
            }, 600);
        }
    });

    //Клик по иконке бокового меню анимация поворота
    $('.bars > .fa').on('click', function () {
        var left = $('.mob-menu').offset().left;
        if (left < 0) {
            $('.bars > .fa').css({
                '-moz-transform': 'rotate(90deg)',
                '-webkit-transform': 'rotate(90deg)',
                '-o-transform': 'rotate(90deg)',
                '-ms-transform': 'rotate(90deg)',
                'transform': 'rotate(90deg)'
            });
            $('.bars > .fa').removeClass('fa-bars').addClass('fa-arrow-down');
        } else {
            $('.bars > .fa').css({
                '-moz-transform': 'rotate(0deg)',
                '-webkit-transform': 'rotate(0deg)',
                '-o-transform': 'rotate(0deg)',
                '-ms-transform': 'rotate(0deg)',
                'transform': 'rotate(0deg)'
            });
            $('.bars > .fa').removeClass('fa-arrow-down').addClass('fa-bars');
        }
    });
});