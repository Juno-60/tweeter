$(document).ready(function() {
  $("#tweet-text").on('input', function() {

    // .closest looks for closest specified html element on DOM tree
    // .find returns an array of specified elements
    let counter = $(this).closest("form").find(".counter")[0];
    counter.value = 140 - this.value.length;
    if (counter.value < 0) {
      $('.counter').css('color', '#D00000')
    } else if (counter.value >= 0) {
      $('.counter').css('color', '');
    }
  });
});