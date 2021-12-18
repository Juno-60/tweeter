/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// const timeago = require("timeago");


$(document).ready(function() {

  // controls submit function on "tweet" button
  $('#tweetbtn').submit(function(e){
    //prevents default POST behavior
    e.preventDefault();
    // checks length and verifies text box has contents
    if ($('#tweet-text').val().length <= 140 && $('#tweet-text').val().length > 0) {
      //ajax to POST and parse ~serialized~ contents of text box
      $.ajax({
        url: '/tweets',
        method: 'POST',
        data: $('#tweetbtn').serialize(),
      }).then(() => {
        // resets the text field, isn't that nice
        $(this)[0].reset();
        // runs loadTweets immediately upon completion of POST
        loadTweets()
      });
      // alerts for failed checks
    } else if ($('#tweet-text').val() === '') {
      alert('that form is empty');
    } else if ($('#tweet-text').val().length > 140) {
      alert('141 is too many characters');
    }
  })

  // loads new tweet data from /tweets, adds to page
  const loadTweets = function() {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      success: (tweets) => {
        renderTweets(tweets)
      },
    });
  }

  // prepends each complete tweet HTML block to the targeted container
  const renderTweets = function(tweets) {
    for (let tweet of tweets) {
      let tweetHTML = createTweetElement(tweet);
      $('.tweet-container').prepend(tweetHTML)
    }
  };

  // tweet template with string literals
  const createTweetElement = function(tweetData) {
    return `
    <article class="tweet-element">
      <header class="tweet-header">
        <div class="tweet-icon-fullname">
          <img src="${tweetData.user.avatars}" alt="Tweeter's Avatar">
          ${tweetData.user.name}
        </div>
        <div class="tweet-handle">
          ${tweetData.user.handle}
        </div>
      </header>
      <div class ="tweet-body">
        ${tweetData.content.text}
      </div>
      <footer class="tweet-footer">
        <div class="time-posted">
          ${timeago.format(tweetData.created_at)}
        </div>
      <div class="social-icons">
        <i class="fas fa-flag"></i> | <i class="fas fa-retweet"></i> | <i class="fas fa-heart"></i>
      </div>
      </footer>
    </article>`
  };

  // loads tweets from /tweets on each page load
  loadTweets();

});

