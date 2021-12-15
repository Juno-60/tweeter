$(document).ready(function() {
  console.log('log this if it works');

  $("#tweet-text").on('keypress', function() {
    let number = 0;
    console.log(number += 1); //The this keyword is a reference to the button
  });
  


});