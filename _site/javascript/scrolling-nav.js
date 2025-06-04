//jQuery to collapse the navbar on scroll
var main = function(){
    $(".navbar-fixed-top").addClass("top-nav-collapse");
};

$(document).ready(main);
    

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});