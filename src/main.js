// query selector variables go here 👇
var imageOnPoster = document.querySelector('.poster-img');
var titleOnPoster = document.querySelector('.poster-title');
var quoteOnPoster = document.querySelector('.poster-quote');
var randomPosterButton = document.querySelector('.show-random');
var makeYourOwnPosterButton = document.querySelector('.show-form');
var showSavedPostersButton = document.querySelector('.show-saved');
var nvmTakeMeBackButton = document.querySelector('.show-main');
var backToMainButton = document.querySelector('.back-to-main');
var posterFormSection = document.querySelector('.poster-form');
var mainPosterSection = document.querySelector('.main-poster');
var savedPostersSection = document.querySelector('.saved-posters');
var showMyPosterButton = document.querySelector('.make-poster');
var imageUrlInput = document.querySelector('#poster-image-url');
var motivationalTitleInput = document.querySelector('#poster-title');
var motivationalQuoteInput = document.querySelector('#poster-quote');
var saveThisPosterButton = document.querySelector('.save-poster');
var savedPostersGrid = document.querySelector('.saved-posters-grid');

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

// event listeners go here 👇
window.addEventListener('load', changePoster);
randomPosterButton.addEventListener('click', changePoster);
makeYourOwnPosterButton.addEventListener('click', makeYourOwnPosterView);
showSavedPostersButton.addEventListener('click', showSavedPostersView);
nvmTakeMeBackButton.addEventListener('click', showMainPosterView);
backToMainButton.addEventListener('click', showMainPosterView);
showMyPosterButton.addEventListener('click', createYourOwnPoster);
saveThisPosterButton.addEventListener('click', saveThisPoster);
savedPostersGrid.addEventListener('dblclick', deleteSavedPoster);

// functions and event handlers go here 👇

// Outputs a randomized index in the given array
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

// Create a poster using randomized images, titles, and quotes, then return a poster in the currentPoster variable
function createPoster(imageURL, title, quote) {
  var imagesIndex = getRandomIndex(imageURL);
  var newImage = imageURL[imagesIndex];
  var titleIndex = getRandomIndex(title);
  var newTitle = title[titleIndex];
  var quoteIndex = getRandomIndex(quote);
  var newQuote = quote[quoteIndex];
  currentPoster = {
      id: Date.now(), 
      imageURL: newImage, 
      title: newTitle, 
      quote: newQuote 
    }
  return currentPoster;
};

// Change poster to another random poster
function changePoster() {
  createPoster(images, titles, quotes);
  imageOnPoster.src = currentPoster.imageURL;
  titleOnPoster.innerText = currentPoster.title;
  quoteOnPoster.innerText = currentPoster.quote;
};

// Switch user to 'Make Your Own Poster' view
function makeYourOwnPosterView() {
  posterFormSection.classList.remove('hidden');
  mainPosterSection.classList.add('hidden');
  savedPostersSection.classList.add('hidden');
};

// Switch user to 'Show Saved Posters' view
function showSavedPostersView() {
  savedPostersSection.classList.remove('hidden');
  mainPosterSection.classList.add('hidden');
  posterFormSection.classList.add('hidden');

  savedPostersGrid.innerHTML = '';

  for (var i = 0; i < savedPosters.length; i++) {
    var poster = savedPosters[i];
    var posterElement = document.createElement('div');
    posterElement.classList.add('mini-poster');
    posterElement.innerHTML = `<img src="${poster.imageURL}" alt="Saved Poster"><h2>${poster.title}</h2><h4>${poster.quote}</h4>`;
    savedPostersGrid.appendChild(posterElement);
  }
};

// Switch user to main view
function showMainPosterView() {
  mainPosterSection.classList.remove('hidden');
  savedPostersSection.classList.add('hidden');
  posterFormSection.classList.add('hidden');
};

// Allow a user to create their own poster
function createYourOwnPoster(event) { 
  images.push(imageUrlInput.value);
  titles.push(motivationalTitleInput.value);
  quotes.push(motivationalQuoteInput.value);
  var userCurrentPoster = {
    id: Date.now(), 
    imageURL: imageOnPoster.src = imageUrlInput.value,
    title: titleOnPoster.innerText = motivationalTitleInput.value,
    quote: quoteOnPoster.innerText = motivationalQuoteInput.value
  };
  currentPoster = userCurrentPoster; 
  event.preventDefault();
  showMainPosterView();
  return currentPoster;
};

// Save posters to saved poster view
function saveThisPoster() {
  if (!savedPosters.includes(currentPoster)) {
    savedPosters.push(currentPoster);
  }
  return savedPosters;
}

// Delete a saved poster when double clicked
function deleteSavedPoster(event) {
  if (event.target.tagName === 'DIV') {
    event.target.remove();
  }
}

