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
//---------------------------------> Query Selectors <-----------------------------------------
var mainPoster = document.querySelector('.main-poster');
var poster = document.querySelector('.poster');
var posterImg = document.querySelector('.poster-img');
var posterTitle = document.querySelector('.poster-title');
var posterQuote = document.querySelector('.poster-quote');
var savePosterButton = document.querySelector('.save-poster');
var showSavedButton = document.querySelector('.show-saved');
var showRandomButton = document.querySelector('.show-random');
var showFormButton = document.querySelector('.show-form');
var posterForm = document.querySelector('.poster-form');
var posterImageUrl = document.querySelector('#poster-image-url');
var posterTitleForm = document.querySelector('#poster-title');
var posterQuoteForm = document.querySelector('#poster-quote');
var makePosterButton = document.querySelector('.make-poster');
var showMainButton = document.querySelector('.show-main');
var showSavedPosterPage = document.querySelector('.saved-posters');//may need to delete this
var backToMainButton = document.querySelector('.back-to-main');


var savedPosters = [];
var currentPoster;

//-------------------------------> Event Listeners <-------------------------------------------

window.addEventListener('load', createRandomPoster);
showRandomButton.addEventListener('click', createRandomPoster);
showFormButton.addEventListener('click', makeYourOwnPoster);
// savePosterButton.addEventListener('click', function);
showSavedButton.addEventListener('click', showSavedPosters);
showMainButton.addEventListener('click', backToMain);
backToMainButton.addEventListener('click', backToMain);



//-------------------------------> Functions <-------------------------------------------------

function show(elements) {
  elements.classList.remove('hidden')
}

function hide(elements) {
  elements.classList.add('hidden')
}

function createRandomPoster() {
  currentPoster = new Poster ( 
  images[getRandomIndex(images)], 
  titles[getRandomIndex(titles)],
  quotes[getRandomIndex(quotes)]
  )
displayPoster()
}

function displayPoster() {
  posterImg.src = currentPoster.imageURL
  posterTitle.innerText = currentPoster.title
  posterQuote.innerText = currentPoster.quote
 }

 // we need to generate the get random idex(takes arrays and picks a random image, quote and title)do this inside of anothe instants of the poster class
// we need to create a function that displays all of the properties from our instance

function makeYourOwnPoster() {
  hide(mainPoster)
  hide(showRandomButton)
  hide(showSavedButton)
  hide(savePosterButton)
  hide(showFormButton)
  show(posterForm)
  show(showMainButton)
  show(makePosterButton)
}

function showSavedPosters() {
  hide(mainPoster)
  hide(showRandomButton)
  hide(showSavedButton)
  hide(savePosterButton)
  hide(showFormButton)
  hide(posterForm)
  hide(showMainButton)
  hide(makePosterButton)
  show(backToMainButton)
  show(showSavedPosterPage)
}

function backToMain() {
  show(mainPoster)
  show(showRandomButton)
  show(showSavedButton)
  show(savePosterButton)
  show(showFormButton)
}

//-------------------------------> Misc Functions <-----------------------------------------
 
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}





// Create an event listener that accesses the querySelector for makePosterButton
// and hides the main page, 

