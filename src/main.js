// query selector variables go here 👇
let mainPosterSection = document.querySelector(".main-poster");
let createPosterSection = document.querySelector(".poster-form");
let savedPosterSection = document.querySelector(".saved-posters");
let savedPostersGrid = document.querySelector(".saved-posters-grid");
let posterImage = document.querySelector(".poster-img");
let randomTitle = document.querySelector(".poster-title");
let randomQuote = document.querySelector(".poster-quote");
let randomPosterButton = document.querySelector(".show-random");
let makePosterButton = document.querySelector(".show-form");
let savedPosterButton = document.querySelector(".show-saved");
let nevermindButton = document.querySelector(".show-main");
let backToMainButton = document.querySelector(".back-to-main");
let showMyPosterButton = document.querySelector(".make-poster");
let saveNewPosterButton = document.querySelector(".save-poster");
let customImageURL = document.querySelector("#poster-image-url");
let customTitle = document.querySelector("#poster-title");
let customQuote = document.querySelector("#poster-quote");


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
document.addEventListener('DOMContentLoaded', loadRandomPoster);

randomPosterButton.addEventListener('click', loadRandomPoster);

makePosterButton.addEventListener('click', () => {loadSection(createPosterSection)}) ;
nevermindButton.addEventListener('click', () => {loadSection(mainPosterSection)});

savedPosterButton.addEventListener('click', () => {loadSection(savedPosterSection)});
backToMainButton.addEventListener('click', () => {loadSection(mainPosterSection)});

showMyPosterButton.addEventListener('click', createNewPosterData);

saveNewPosterButton.addEventListener('click', savePoster);

// functions and event handlers go here 👇
// (we've provided two to get you started)!

// getRandomIndex takes a single argument which should be a variable of an array.  It then generates a random number based on the amount of elements in the array.
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

//getRandomPoster takes the random number generated from the getRandomIndex function and pulls the element from the images array.
function getRandomPoster() {
  return images[getRandomIndex(images)];
};

// applyRandomPoster assigns the element returned from the getRandomPoster function to the .src attribute of the posterImage variable.
function applyRandomPoster() {
  return posterImage.src = getRandomPoster();
};

//getRandomTitle takes the random number generated from the getRandomIndex function and pulls the element from the titles array.
function getRandomTitle() {
  return titles[getRandomIndex(titles)];
};

// applyRandomTitle assigns the element returned from the getRandomTitle function to the .innerText attribute of the randomTitle variable.
function applyRandomTitle() {
  return randomTitle.innerText = getRandomTitle();
};

//getRandomQuote takes the random number generated from the getRandomIndex function and pulls the element from the quotes array.
function getRandomQuote() {
  return quotes[getRandomIndex(quotes)];
};

// applyRandomQuote assigns the element returned from the getRandomQuote function to the .innerText attribute of the randomQuote variable.
function applyRandomQuote() {
  return randomQuote.innerText = getRandomQuote();
};

// loadRandomPoster calls three helper methods applyRandomPoster, applyRandomTitle, applyRandomQuote, and is used when the page loads and when the "Show Another Random Poster" button is clicked to randomly generate a new poster.
function loadRandomPoster() {
  currentPoster = createPoster(applyRandomPoster(), applyRandomTitle(), applyRandomQuote());
};

function loadSection(sectionName) {
  if (sectionName === mainPosterSection) {
    mainPosterSection.classList.remove("hidden");
    createPosterSection.classList.add("hidden");
    savedPosterSection.classList.add("hidden");
  } else if (sectionName === createPosterSection) {
    createPosterSection.classList.remove("hidden");
    mainPosterSection.classList.add("hidden");
    savedPosterSection.classList.add("hidden");
  } else if (sectionName === savedPosterSection) {
    savedPosterSection.classList.remove("hidden");
    mainPosterSection.classList.add("hidden");
    createPosterSection.classList.add("hidden");
    displaySavedPosters();
  };
};

function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(), 
    imageURL: imageURL, 
    title: title, 
    quote: quote}
};

function createPosterImage() {
  imageURL = customImageURL.value;
  images.push(imageURL);
};

function createPosterTitle() {
  title = customTitle.value;
  titles.push(title);
};

function createPosterQuote() {
  quote = customQuote.value;
  quotes.push(quote);
};

function createNewPosterData() {
  event.preventDefault();
  createPosterImage();
  createPosterTitle();
  createPosterQuote();
  currentPoster = createPoster(imageURL, title, quote);
  loadSection(mainPosterSection);
  posterImage.src = currentPoster.imageURL;
  randomTitle.innerText = currentPoster.title;
  randomQuote.innerText = currentPoster.quote;
};

function savePoster() {
  if (savedPosters.includes(currentPoster)) {
    alert("This poster has already been saved.");
  } else {
    savedPosters.push(currentPoster);
    alert("Your poster has been saved.");
  };
};

function displaySavedPosters() {
  savedPosters.forEach((poster) => { 
      savedPostersGrid.innerHTML += `
      <article class="mini-poster">
        <img src="${poster.imageURL}" id="${poster.id}">
        <h2>${poster.title}</h1>
        <h4>${poster.quote}</h3>
      </article>
  `});
};