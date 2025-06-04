var main = function() {
  var name = "";
  var question = "0";
  $('form').submit(function() {
    var user_response = $('#comment').val().replace(/[^\w\s]/gi,"").replace(/[\d]/gi, "").trim();
    if(user_response !== "") {
      post_user_response(user_response);
      switch (question) {
        case '0':
          hello_response = `Hello ${user_response}, what is your interest in programming and software engineering? You can say coding, building apps, money, work at google, ai.`;
          if(user_response === "Eric") {
            post_bot_response('NO. This chat bot has just been broken. There is only one Eric. The creator is Eric.');
            sleep(1500).then(() => {
              post_bot_response('Bot rebooting.')
            });
            sleep(3500).then(() => {
              post_bot_response('Reboot in progress.')
            });
            sleep(5500).then(() => {
              post_bot_response('Just Kidding! Let us proceed as normal.');
            });
            sleep(6500).then(() => {
              post_bot_response(hello_response);
            });
          } else {
            post_bot_response('User is not Eric. Proceed');
            sleep(1500).then(() => {
              post_bot_response(hello_response);
            });
          }
          question = "1";
          break;
        case '1':
          post_bot_response(question_two(user_response));
          sleep(1500).then(() => {
            post_bot_response('What is your experience with programming?(Interested, Took a Class, Built some apps, Ready to work)');
          });
          question = "2";
          break;
        case '2':
          post_bot_response(question_three(user_response));
          sleep(1500).then(() => {
            post_bot_response("Master Software Engineer Eric will take it over from here. Thanks for talking with me!");
          });
          break;
        default:
      }
      
    }

    return false;
  });
};

var question_two = function(response) {
  switch (response.toLowerCase()) {
    case 'coding':
      bot_response = 'So you like to sit down and just hammer away at the keyboard until you pump out some cool new app that is going to change the world.';
      break;
    case 'building apps':
      bot_response = 'There is a sense of accomplishment when you build an app.';
      break;
    case 'money':
      bot_response = 'Software Engineers can start out at $40,000-200,000 a year with big sign on bonuses of $20,000.';
      break;
    case 'work at google':
      bot_response = 'Working at Google has always been a goal of many programmers as the Google search algorithm is the single largest piece of code. Google also has many other great products they develop.';
      break;
    case 'ai':
      bot_response = 'When you develop and build an app or program you are creating artifical intelligence. It has to think for itself.';
      break;
    default:
      bot_response = 'We can talk more about that.';
  }
  return bot_response;
};

var question_three = function(response) {
  switch (response.toLowerCase()) {
    case 'Interested':
      bot_response = 'There are many ways you can begin to learn to program. You can take a course online, at HCA, watch some YouTube videos, attend some classes at the local college, or intern at a company';
      break;
    case 'took a class':
      bot_response = 'Tell me more about that class';
      break;
    case 'built some apps':
      bot_response = 'What kind of apps have you built?';
      break;
    case 'Ready to work':
      bot_response = 'Ah... the young prodigy is ready to build the world changing app! The one app to rule them all.';
      break;
    default:
      bot_response = 'Talk to Eric about that.';
  }
  return bot_response;
};

var post_user_response = function(user_response) {
  var html = $('<li>').text(user_response);
  $(html).prependTo('.comments');
  $('#comment').val("");
};

var post_bot_response = function(bot_response) {
  var val = $('<li>').text(bot_response);
  sleep(500).then(() => {
    $(val).prependTo('.comments');
  });
};

var sleep = function(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

$(document).ready(main);
