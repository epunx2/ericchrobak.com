var main = function() {
  $(function() {
    $(".rslides").responsiveSlides({
      auto: true,
      speed: 1000,
      maxwidth: 800
    });
  });
  $('.nav li').click(function() {
    var category = $(this).attr('class');
		if(category == "nav-html"){
      $('.thumbnail').hide();
      $('.html').show();
    } else if(category == "nav-javascript"){
      $('.thumbnail').hide();
      $('.javascript').show();
    } else if(category == "nav-all"){
      $('.thumbnail').show();
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