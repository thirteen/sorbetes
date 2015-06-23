$.fn.parallax = function(options) {
    if ( typeof options.opacity    === 'undefined' ) options.opacity = false;
    if ( typeof options.resistance === 'undefined' ) options.resistance = 1;
    if ( typeof options.inverse    === 'undefined' ) options.inverse = true;

    var element = $(this);
    var total    = 0;

    $( window ).on('scroll', function(){
        // calculate the offset
        total = window.pageYOffset + window.innerHeight;

        // scroll position
        var top = $(window).scrollTop();

        // determine the orientation
        var sign = (options.inverse) ? -1 : 1;

        // get the page scroll offset
        var offset = (window.pageYOffset * sign) / options.resistance;

        if(options.opacity) {
            var opacity = (100 - top) / 100;
            element.css({'opacity': opacity});
        }

        // move the element
        element.css({'transform': 'translate(0, ' + offset + 'px)' });
    });

    return $(this);
}

$('.feature').each(function () {
    var element = $(this);

    $(window).on('scroll', function (event) {
        var windowTop  = $(window).scrollTop();
        var elementTop = element.offset().top;
        var scope = (windowTop - elementTop);

        if (element.hasClass('--active')) {
            return;
        }

        if ((scope > -250) && (scope < 20)) {
            element.find('.feature__image').addClass('--active');
            element.find('.feature__description').addClass('--active');
        }
    });
});

$(window).on('scroll', function (event) {
    var element    = $('.peddling__image');
    var windowTop  = $(window).scrollTop();
    var elementTop = element.offset().top;
    var scope      = (windowTop - elementTop);

    if (element.hasClass('--active')) {
        return;
    }

    if ((scope > -250) && (scope < 20)) {
        element.addClass('--active');
        console.error('test');
    }
});


$('.ice-cream').parallax({resistance: 17});