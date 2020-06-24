var main = function() {
  /*$(function() {
    $(".carousel").carousel({

      interval: 1000,
      pause: "hover"
    });
  });*/
  $('.nav li').click(function() {
    var category = $(this).attr('class');
    $('.thumbnail').removeClass('selected');
    $('.thumbnail').addClass('unselected');
    switch (category) {
      case "nav-ruby":
        $('.ruby').removeClass('unselected');
        $('.ruby').addClass('selected');
        break;
      case "nav-html":
        $('.html').removeClass('unselected');
        $('.html').addClass('selected');
        break;
      default:
        $('.thumbnail').removeClass('unselected');
    }

    $('.nav li').removeClass('active');
    $(this).addClass('active');
  });
  $('.btn').click(function(){
    $('.dropdown-menu').toggle();
  });
  $('.dropdown-menu').mouseleave(function(){
    $('.dropdown-menu').toggle();
  });

};

$(document).ready(main);
