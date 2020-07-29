var main = function() {
  $('form').submit(function() {
    var comment = $('#comment').val();
    if(comment !== "") {
      var html = $('<li>').text(comment);
      $(html).prependTo('.comments');
      $('#comment').val("");
      var val = "";
      switch (comment) {
          case 'yes':
          case 'Yes':
          case 'YES':
            val = 'The dark side, and the light. The droid you seek is aboard the Millennium Falcon in the hands of your father, Han... Solo.';
            break;
          case 'He means nothing to me':
            val = 'Even you, master of the Knights of Ren have never faced such a test.';
            break;
          case 'By the grace of your training I will not be seduced':
            val = 'We shall see, Kylo Ren. We shall see.';
            break;
          default:
            val = 'My confidence in you is weak.';
      }
      val = $('<li>').text(val);
      $(val).prependTo('.comments');
    }

    return false;
  });
};

$(document).ready(main);
