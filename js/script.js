$(document).ready(function() {
    $(".menu").on('click', function() {
        var selector = $(".site");
        if (selector.hasClass('shown')) {
            selector.removeClass('shown');
        } else {
            selector.addClass('shown');
        }
    });
});


