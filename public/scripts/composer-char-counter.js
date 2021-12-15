$(document).ready(function() {
  console.log('first log: ', this);

  $("#tweet-text").on('input', function() {
    // .closest looks for closest specified html element on DOM tree
    // .find returns an array of specified elements
    let counter = $(this).closest("form").find(".counter")[0];

    counter.value = 140 - this.value.length;

  });



});