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
		if(category == "nav-javascript"){
      $('.thumbnail').removeClass('selected');
      $('.javascript').addClass('selected');
    } else if(category == "nav-ruby"){
      $('.thumbnail').removeClass('selected');
      $('.ruby').addClass('selected');
    } else if(category == "nav-zohocreator"){
      $('.thumbnail').removeClass('selected');
      $('.zohocreator').addClass('selected');
    } else if(category == "nav-html"){
      $('.thumbnail').removeClass('selected');
      $('.html').addClass('selected');
    } else if(category == "nav-all"){
      $('.thumbnail').removeClass('selected');
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