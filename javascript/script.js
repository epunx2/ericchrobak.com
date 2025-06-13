var main = function () {
  // add padding top to show content behind navbar
  // $('body').css('padding-top', $('.navbar').outerHeight() + 'px')

  // detect scroll top or down
  if ($('.smart-scroll').length > 0) { // check if element exists
    var last_scroll_top = 0;
    $(window).on('scroll', function () {
      scroll_top = $(this).scrollTop();
      if (scroll_top < last_scroll_top) {
        $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
      }
      else {
        $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
      }
      last_scroll_top = scroll_top;
    });
  }
  $('.nav li').click(function () {
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
      case "nav-rails":
        $('.rails').removeClass('unselected');
        $('.rails').addClass('selected');
        break;
      default:
        $('.thumbnail').removeClass('unselected');
    }
    // $('.thumbnail').click(function() {
    //     var modal_num = $(this).attr('id');
    //      // retrieve the modal element
    //      //
    //      var modal = $('#' + modal_num);
    //      // Set the modal title
    //      modal.find('.modal-title').html(modal_num);
    //      // Set the modal body
    //      modal.find('.modal-body').text('This is the body of modal ' + modal_num);
    // });
    $('.nav li').removeClass('active');
    $(this).addClass('active');
  });
  $('.btn').click(function () {
    $('.dropdown-menu').toggle();
  });
  $('.dropdown-menu').mouseleave(function () {
    $('.dropdown-menu').toggle();
  });

};

$(document).ready(main);
