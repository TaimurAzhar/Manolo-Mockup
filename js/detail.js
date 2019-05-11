$(document).ready(function() {
    const $details = $('.details'); // REFERENCE FOR WAYPOINT LIBRARY
    const $image = $('.product-image'); // GRAB PRODUCT TO ANIMATE

    // FIRST MOVEMENT

    // USE DETAILS ARE REFERENCE
    $details.waypoint(
        function(direction) {
            console.log('Trigger'); // DEBUGGING
            if (direction === 'down') {
                $image.addClass('move-1');
            } else {
                $image.removeClass('move-1');
            }
        },
        { offset: '90%' } //AFTER DETAILS ARE AT A 90% OFFSET FROM THE TOP
    );

    // REPEAT FOR OTHER OFFSETS
    $details.waypoint(
        function(direction) {
            console.log('Trigger');
            if (direction === 'down') {
                $image.addClass('move-2');
            } else {
                $image.removeClass('move-2');
            }
        },
        { offset: '80%' }
    );
    $details.waypoint(
        function(direction) {
            console.log('Trigger');
            if (direction === 'down') {
                $image.addClass('move-3');
            } else {
                $image.removeClass('move-3');
            }
        },
        { offset: '70%' }
    );
    $details.waypoint(
        function(direction) {
            console.log('Trigger');
            if (direction === 'down') {
                $image.addClass('move-4');
            } else {
                $image.removeClass('move-4');
            }
        },
        { offset: '60%' }
    );
    $details.waypoint(
        function(direction) {
            console.log('Trigger');
            if (direction === 'down') {
                $image.addClass('move-5');
            } else {
                $image.removeClass('move-5');
            }
        },
        { offset: '55%' }
    );
    $details.waypoint(
        function(direction) {
            console.log('Trigger');
            if (direction === 'down') {
                $image.addClass('move-6');
            } else {
                $image.removeClass('move-6');
            }
        },
        { offset: '50%' }
    );
    $details.waypoint(
        function(direction) {
            console.log('Trigger');
            if (direction === 'down') {
                $image.addClass('move-7');
            } else {
                $image.removeClass('move-7');
            }
        },
        { offset: '45%' }
    );
});
