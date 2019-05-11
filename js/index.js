$(document).ready(function() {
    // ARRAY FOR COLOR CHANGES
    const colors = [
        '#FF6666',
        '#E6AE32',
        '#E12F37',
        'yellow',
        'black',
        'brown',
    ];
    const $nav = $('#nav');
    console.log($nav);

    //  Scrollify Library Function Initialization
    $(function() {
        $.scrollify({
            section: '.block', // WILL SCROLL ONLY ELEMENTS WITH CLASS 'block'
            scrollbars: false,
            scrollSpeed: 700,
            easing: 'swing',

            before: function(index) {
                // Function to trigger before scrolling to section. Currently used to scroll the TOP NAV up or down and change the Fixed Nav colors
                $nav.css('background-color', colors[index - 1]);

                if (index !== 0) {
                    $('.top-section').slideUp(600);
                    $('.teaser').addClass('scroll-down');
                    $('.top-logo').addClass('hide');
                } else {
                    $('.top-section').slideDown(600);
                    $('.teaser').removeClass('scroll-down'); // scrollsdown teaser icecream image
                    $('.top-logo').removeClass('hide');
                    $('.top-logo').show();
                }
            },
        });
    });

    // Moves the background
    $(function() {
        var y = 0;
        setInterval(function() {
            y -= 0.05;
            $('.bg-common').css('background-position', `0 ${y}vh`); // only moves .bg-common class
        }, 20);
    });
});
