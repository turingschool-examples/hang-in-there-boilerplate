// on page load the poster, image, title and quote are random.
// will need to use window.onload = getRandomIndex(array);

// window.onload = randomPoster();
// will need to access the images array.
  // will need to access the src in poster-img class and interpolate the random image url.

// will need to access the titles array.
  // will need to access the innerText of poster-title interpolate the random title.

// will need to access the quotes array.
  // will need to access the innerText of poster-quote and interpolate the random quote.

// query selector variables go here 👇

// Create a query selector for "save this poster button"
var savePoster = document.querySelector('.save-poster');
// Create a query selector for "show saved Posters button"
var showSaved = document.querySelector('.show-saved');
// Create a query selector for "show another random poster button"
var showRandom = document.querySelector('.show-random');
// Create a query selector for "Make your own poster button"
var showForm = document.querySelector('.show-form');
// Create a query selector for the parent of all page1 buttons.
var mainButtonParent = document.querySelector('.main-poster');
// Create a query selector for the create your own poster page.
var posterForm = document.querySelector('.poster-form');
// Create a query selector for the poster image source.
var posterImg = document.querySelector('.poster-img');
//Create query selector for the main page title.
var posterTitle = document.querySelector('.poster-title');
//Create query selector for the main page quote
var posterQuote = document.querySelector('.poster-quote');
//Create query selector for the saved poster page
var savedPosterPage = document.querySelector('.saved-posters')



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
  "What you get by achieving your goals is not as important as what you become  by achieving your goals.",
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
var savedPosters = [
  // makePoster(
  //   "https://i.giphy.com/media/5LU6ZcEGBbhVS/giphy.gif",
  //   "Optimism",
  //   "Keep a joyful heart!"
  // )
];
var currentPoster;

// event listeners go here 👇
mainButtonParent.addEventListener('click', buttonHandler)
// functions and event handlers go here 👇
// (we've provided one for you to get you started)!
//Displays form page and hides main page.
function buttonHandler(event) {
  if (event.target === showForm) {
    displayPosterForm();
    return;
  } else if (event.target === showSaved) {
    displayMakeMyPoster();
  } else if (event.target === showRandom) {
    createRandomPoster();
  }
};

function displayPosterForm() {
  posterForm.classList.remove('hidden');
  mainButtonParent.classList.add('hidden');
}

function displayMakeMyPoster() {
  savedPosterPage.classList.remove('hidden');
  mainButtonParent.classList.add('hidden');
}

function getRandomIndex(array) {
  for (var i = 0; i< array.length; i++) {
    return Math.floor(Math.random() * array.length);
  }
}

function createRandomPoster() {
  randomPoster();
  randomQuote();
  randomTitle();
}

function randomPoster() {
  var randomImage = getRandomIndex(images);
  posterImg.src = images[randomImage]
}

function randomTitle() {
  var randomWord = getRandomIndex(titles);
  posterTitle.innerText = titles[randomWord];
};

function randomQuote() {
  var randomPhrase = getRandomIndex(quotes);
  posterQuote.innerText = quotes[randomPhrase];
};

window.onload = randomPoster(), randomTitle(), randomQuote();
