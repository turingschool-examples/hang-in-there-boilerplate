// query selector variables go here 👇

// Poster elements
const posterImg = document.querySelector('.poster-img');
const posterTitle = document.querySelector('.poster-title');
const posterQuote = document.querySelector('.poster-quote');

// Add current poster to saved posters
const savePosterBtn = document.querySelector('.save-poster');

// Generate a new random poster
const randomPosterBtn = document.querySelector('.show-random');

// Main navigation buttons
const showSavedBtn = document.querySelector('.show-saved');
const showFormBtn = document.querySelector('.show-form');
const showUnmotivationalBtn = document.querySelector('.show-unmotivational');

// Secondary navigation buttons (return to main view)
const showMainBtn = document.querySelector('.show-main');
const backToMainBtn = document.querySelector('.back-to-main');
const unmotivationalBackToMainBtn = document.querySelector('.unmotivational-back-to-main');

// Page views
const mainView = document.querySelector('.main-poster');
const posterFormView = document.querySelector('.poster-form');
const savedView = document.querySelector('.saved-posters');
const unmotivationalView = document.querySelector('.unmotivational-posters');

// Custom poster user input elements
const inputPosterImgURL = document.querySelector('#poster-image-url');
const inputPosterTitle = document.querySelector('#poster-title');
const inputPosterQuote = document.querySelector('#poster-quote');

// Submit custom poster button
const makePosterBtn = document.querySelector('.make-poster');

// Grid display for saved posters
const savedPostersDisplay = document.querySelector('.saved-posters-grid');

// we've provided you with some data to work with 👇
// tip: you can tuck this data out of view with the dropdown found near the line number where the variable is declared 
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

// event listeners go here 👇
// Display a random poster on content load
document.addEventListener('DOMContentLoaded', randomPosterEventHandler);

// Save poster to Saved Posters list
savePosterBtn.addEventListener('click', savePosterEventHandler);

// Create and Display a new poster
randomPosterBtn.addEventListener('click', randomPosterEventHandler);

// Reveal Show Saved Poster view
showSavedBtn.addEventListener('click', () => {
  changeView(mainView, savedView)
});

// Reveal Make Your Own Poster view
showFormBtn.addEventListener('click', () => {
  changeView(mainView, posterFormView);
});

// Show unmotivational poster view
showUnmotivationalBtn.addEventListener('click', unmotivationalPosterEventHandler);

// Show main poster page without creating new poster
showMainBtn.addEventListener('click', () => {
  changeView(posterFormView, mainView);
});

// Return to main poster page
backToMainBtn.addEventListener('click', () => {
  changeView(savedView, mainView);
});

// Return to motivational view from unmotivational view
unmotivationalBackToMainBtn.addEventListener('click', () => {
  changeView(unmotivationalView, mainView)
});  

// Make new poster and display
makePosterBtn.addEventListener('click', userPosterEventHandler);

// functions and event handlers go here 👇
// (we've provided two to get you started)!

// Handle random poster creation and display
function randomPosterEventHandler() {
  getRandomPoster(images, titles, quotes);
  changePosterDisplay();
}

// Handle user poster creation and display
function userPosterEventHandler() {
  event.preventDefault();
  getUserPoster();
  addNewPosterElements(currentPoster.imageURL, currentPoster.title, currentPoster.quote);
  changeView(posterFormView, mainView);
  changePosterDisplay();
}

function savePosterEventHandler() {
  addToSaved();
  populateSavedPosters();
  changeView(mainView, savedView);
}

function unmotivationalPosterEventHandler() {
  changeView(mainView, unmotivationalView);
  getRandomPoster(unmotivationalImages, unmotivationalTitles, unmotivationalQuotes);
  changePosterDisplay();
}

// Select random poster elements and set them as currentPoster object
function getRandomPoster(imgsArray, titlesArray, quotesArray) {
  let randomImgURL = images[getRandomIndex(imgsArray)];
  let randomTitle = titles[getRandomIndex(titlesArray)];
  let randomQuote = quotes[getRandomIndex(quotesArray)];

  currentPoster = createPoster(randomImgURL, randomTitle, randomQuote);
}

// Create a new custom poster based on user input
function getUserPoster() {
  let posterImgURL = inputPosterImgURL.value;
  let posterTitle = inputPosterTitle.value;
  let posterQuote = inputPosterQuote.value;
  
  currentPoster = createPoster(posterImgURL, posterTitle, posterQuote);
}

// Select random element from specified array
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// Create new poster object
function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(), 
    imageURL: imageURL, 
    title: title, 
    quote: quote}
}

// Change the HTML elements with currentPoster object values
function changePosterDisplay() {
  posterImg.src = currentPoster.imageURL;
  posterTitle.innerText = currentPoster.title;
  posterQuote.innerText = currentPoster.quote;
}

// Change sections hidden status
function changeView(currentSection, clickedSection) {
  clickedSection.classList.remove('hidden');
  currentSection.classList.add('hidden');
}

// Save new poster elements to arrays
function addNewPosterElements(newImgURL, newTitle, newQuote) {
  images.push(newImgURL);
  titles.push(newTitle);
  quotes.push(newQuote);
}

function addToSaved() {
  if (!savedPosters.includes(currentPoster)) {
    savedPosters.push(currentPoster);
  }
}

// For each savedPoster, create mini poster object innerHTML
function createMiniPoster(poster) {
  return `<div class="mini-poster">
      <img src=${poster.imageURL} alt="Mini Image" />
      <h2>${poster.title}</h2>
      <h4>${poster.quote}</h4>
    </div>`;
}

// Add each mini to saved view 
function populateSavedPosters() {
  // Refresh display before repopulating
  savedPostersDisplay.innerHTML = '';

  for (let i = 0; i < savedPosters.length; i++) {
    let miniPoster = createMiniPoster(savedPosters[i]);
    savedPostersDisplay.innerHTML += miniPoster;
  }
}
