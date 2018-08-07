var main = function(){
  $('.navigation li').click(function(){
    var menuItem = $(this).attr('class');

    $('.home').hide();
    $('.landing').hide();
    $('.banner').hide();
    $('.supporting').hide();

    switch(menuItem)
    {
      case 'zero':
        $('.home').show();
        $('.landing').show();
        $('.banner').show();
        break;

      case 'one':
        $('.navigation').show();
        $('.home').show();
        break;

      case 'four':
        $('.navigation').show();
        $('.lessons').show();
        break;

      case 'five':
        $('.navigation').show();
        $('.contact').show();
        break;

      default:
        $('.home').show();
    }

  });
  $('.scroll').click(function(){
    $('html, body').animate({
      scrollTop: $(".navigation").offset().top
}, 1500);
  });
};

$(document).ready(main);