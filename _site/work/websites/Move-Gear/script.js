var main = function(){
  
  $( 'div.login > p' ).click(function(){
    
    $('.dropdown-menu').toggle();

  });
  
  $( "#accordion" ).accordion();
  
};

$(document).ready(main);