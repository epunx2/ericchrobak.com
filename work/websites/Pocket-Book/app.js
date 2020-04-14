var main = function() {
  $('form').submit(function() {
    var firstName = $('#first').val();
    
    if(firstName === "") {
      $('.first-name-error').html("Please enter your first name.");
    }

    return false;
  });
  $('form').submit(function() {
    var lastName = $('#last').val();
    
    if(lastName === "") {
      $('.last-name-error').html("Please enter your last name.");
    }

    return false;
  });
  $('form').submit(function() {
    var email = $('#email').val();
    
    if(email === "") {
      $('.email-error').html("Please enter your email address.");
    }else if(email === "eric@ericchrobak.com"){
      $('.email-error').html("This email is already taken.");
    }

    return false;
  });
  $('form').submit(function() {
    var password = $('#password').val();
    
    if(password === "") {
      $('.password-error').html("Please enter a password.");
    }else if(password.length < 8){
      $('.password-error').html("Short passwords are easy to guess. Try one with at least 8 characters.");
    }

    return false;
  });
};

$(document).ready(main);