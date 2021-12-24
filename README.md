# Tweeter Project

Tweeter is a simple, single-page Twitter "clone".

While not particularly functional, this project is intended as an exercise in using HTML, CSS, JS, jQuery and AJAX front-end, and related Node and Express back-end. 

## Dependencies

- Express
- Body-Parser
- Chance
- MD5
- Node 5.10.x or above

## Project Description

- User should start server by running the command "npm start" from the project root directory
- Project then runs at localhost:8080 (can be changed from tweeter/server/index.js)
- When text is entered into the input form, a character counter keeps track of the number of characters in the form
- Upon a user's click input of the "tweet" button, the form is then submitted to /tweets, parsed and applied to the template, then immediately posted to the main page via an asynchronous function, provided it meets the following conditions: 
  1. The "tweet" must contain at least 1 character.
  2. The "tweet" must not contain in excess of 140 characters.
  * If any of the two aforementioned conditions is not met, a relevant error is displayed until a tweet meeting the proper conditions is submitted.
- Media queries are used for responsive design at two different sizes, with the cutoff for a wider desktop application being at the 1024px width mark. 
