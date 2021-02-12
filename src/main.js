// query selector variables go here 👇
var image = document.querySelector('.poster-img');
var title = document.querySelector('.poster-title');
var quote = document.querySelector('.poster-quote');

// we've provided you with some data to work with 👇
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];

var savedPosters = [];
var currentPoster;
var currImage = getRandomIndex(images);
var currTitle = getRandomIndex(titles);
var currQuote = getRandomIndex(quotes);
var image = document.querySelector('.poster-img');
var title = document.querySelector('.poster-title');

// event listeners go here 👇

// functions and event handlers go here 👇
// (we've provided one for you to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function buildCurrentPoster() {
  image.src = images[currImage];
  title.innerText = titles[currTitle];
  quote.innerText = quotes[currQuote];
};

// target button element and assign to variable

var button = document.querySelector(".show-random");


// assign eventListener to button variables



// call buildCurrentPoster function within eventListener assignment


buildCurrentPoster()



// ITERATION 0
// 1)   When the page loads, we should see a poster with a randomly selected image, title, and quote
// i)   On page load, generate random image, title, quote
  // √ write a function to generate a random index
  // √ write a function that will call the random index function for each data array `images`, `titles`, and `quotes`
  // write a function to push values to a new object, stored in the currentPoster variable
  // use a for loop? loop through each array to getRandomIndex() and
  // currentPoster should hold an object?
  // write a function that will display these values in the browser (`innerText` and `innerHTML` will be useful for this purpose)
// ii)
// iii)

// 2)   Every time the user clicks the Show Random Poster button, a new random poster is displayed.
// i)   Functionality should follow pattern above:
  // generate random index for each variable array
  // generate value by calling array[i] and pushing value into empty `currentPoster` object
  // display values in the browser

// ITERATION 1 - Switching Views - GOAL: get through 1/3 on Thursday eve; complete Friday during afternoon work session
// 1) When a user clicks the “Make Your Own Poster” button, we should see the form, and the main poster should be hidden
// 2) When a user clicks the “View Saved Posters” button, we should see the saved posters area, and the main poster should be hidden
// 3) When a user clicks the “Nevermind, take me back!” or “Back to Main” buttons, we should only see the main poster section
//    In summary: Be able to switch between the three views (main poster, form, and saved posters) on the correct button clicks

// ITERATION 2 - Creating a New Poster - GOAL: complete Friday evening
// On the new poster form view, users should be able to fill out the three input fields and then hit the save button
// When the save button is clicked, several things will happen:
// Save the submitted data into the respective arrays (image URL into the images array, etc) so that future random posters can use the user-created data
// Use the values from the inputs to create a new instance of our Poster class
// Change back to the main poster view (hiding the form view again)
// Display the newly created poster image, title, and quote in the main view

// ITERATION 3 - Saving & Viewing Posters - GOAL: complete Saturday evening; refactor Sunday and work on the README; review DTR
// When a user clicks the “Save This Poster” button, the current main poster will be added to the savedPosters array.
// If a user clicks the “Save This Poster” more than once on a single poster, it will still only be saved once (no duplicates)
// When a user clicks the “Show Saved Posters” button, we should see the saved posters section
// All the posters in the savedPosters array should be displayed in the saved posters grid section

// ITERATION 4 - Deleting Saved Posters - STRETCH GOAL: if we complete iteration 3 goals early (on Saturday) we will divide and each attempt iteration 4 (with communication)
// From the saved posters view, if a user double clicks a saved poster, it will be deleted
