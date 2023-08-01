$(document).ready(function(){
    $('#arrow-link').on('click', function(e) {
        e.preventDefault();
        var page2 = $('#page2');
        $('html, body').animate({
            scrollTop: page2.offset().top
        }, 'slow');
    });
});
