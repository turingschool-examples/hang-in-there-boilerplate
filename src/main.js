// query selector variables go here 👇
var titleDisplay = document.querySelector('h1');
var quoteDisplay = document.querySelector('h3');
var imageDisplay = document.querySelector('.poster-img');
var savedPosterGrid = document.querySelector('.saved-posters-grid');

var inputTitle = document.querySelector('#poster-title');
var inputQuote = document.querySelector('#poster-quote');
var inputImage = document.querySelector('#poster-image-url');

var buttonSave = document.querySelector('.save-poster');
var buttonShowSaved = document.querySelector('.show-saved');
var buttonRandom = document.querySelector('.show-random');
var buttonToFormPage = document.querySelector('.show-form');
var buttonBackFromSaved = document.querySelector('.back-to-main');
var buttonBackFromMake = document.querySelector('.show-main');
var buttonMakePoster = document.querySelector('.make-poster');

var mainPage = document.querySelector('.main-poster');
var makePage = document.querySelector('.poster-form');
var savedPage = document.querySelector('.saved-posters');

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

window.addEventListener('load', loadRandomPoster);
buttonSave.addEventListener('click', savePoster);
buttonShowSaved.addEventListener('click', showSaved);
buttonRandom.addEventListener('click', loadRandomPoster);
buttonToFormPage.addEventListener('click', showFormPage);
buttonBackFromSaved.addEventListener('click', backToMain);
buttonBackFromMake.addEventListener('click', backToMain);
buttonMakePoster.addEventListener('click', function(event) {
  loadCustomPoster();
  event.preventDefault();
});
inputImage.addEventListener('input', buttonMakePosterState);
inputQuote.addEventListener('input', buttonMakePosterState);
inputTitle.addEventListener('input', buttonMakePosterState);

savedPosterGrid.addEventListener('dblclick', function(event){
  deleteSavedPoster();
  event.target();
});

// functions and event handlers go here 👇
// (we've provided one for you to get you started)!

function getRandomIndex(array) {
  var arrayIndex = Math.floor(Math.random() * array.length);
  return array[arrayIndex];
};

function sendCurrentPosterToHTML() {
  imageDisplay.src = currentPoster.imageURL;
  titleDisplay.innerText = currentPoster.title;
  quoteDisplay.innerText = currentPoster.quote;
};

function loadRandomPoster() {
  currentPoster = new Poster(getRandomIndex(images), getRandomIndex(titles), getRandomIndex(quotes));

  sendCurrentPosterToHTML();
};

function buttonMakePosterState() {
  if (inputImage.value == "" || inputTitle.value == "" || inputQuote.value == "") {
    buttonMakePoster.disabled = true;
  } else {
    buttonMakePoster.disabled = false;
  }
}

function loadCustomInstance() {

    currentPoster = new Poster(inputImage.value, inputTitle.value, inputQuote.value);

    images.push(inputImage.value);
    titles.push(inputTitle.value);
    quotes.push(inputQuote.value);
    // if we don't change this function, it can be combined with loadCustomPoster
  };

function loadCustomPoster() {
  loadCustomInstance();
  sendCurrentPosterToHTML();
  mainPage.classList.remove('hidden');
  makePage.classList.add('hidden');
};

function showFormPage() {
  mainPage.classList.add('hidden');
  makePage.classList.remove('hidden');
  buttonMakePoster.disabled = true;

  inputImage.value = "";
  inputQuote.value = "";
  inputTitle.value = "";
};

function backToMain() {
  mainPage.classList.remove('hidden'); 
  
  if (!makePage.classList.contains('hidden')) {
    makePage.classList.add('hidden');
  };
  if (!savedPage.classList.contains('hidden')) {
    savedPage.classList.add('hidden');
  };

  loadRandomPoster();
};

function savePoster() {
  for (var i = 0; i < savedPosters.length; i++) {
    if (savedPosters[i].imageURL === currentPoster.imageURL && savedPosters[i].title === currentPoster.title && savedPosters[i].quote === currentPoster.quote) {
      alert("Oops, this already exists in your Saved Posters!");
      return;
    };
  };

  savedPosters.push(currentPoster);
};

function showSaved() {
  mainPage.classList.add('hidden');
  savedPage.classList.remove('hidden');

  savedPosterGrid.innerHTML = ``;

  for(var i = 0; i < savedPosters.length; i++){
    savedPosterGrid.innerHTML += `
      <article class="mini-poster" id="${savedPosters[i].id}">
        <img class="poster-img" src="${savedPosters[i].imageURL}" alt="nothin' to see here">
        <h2 class="poster-title">${savedPosters[i].title}</h2>
        <h4 class="poster-quote">${savedPosters[i].quote}</h4>
      </article>
    `;
  };
};

function deleteSavedPoster() {
  var posterToBeDeleted = event.target.closest('.mini-poster');
  
  if (posterToBeDeleted !== null) {
    for (var i = 0; i < savedPosters.length; i++) {
      if (savedPosters[i].id == posterToBeDeleted.id) {       
        savedPosters.splice(i, 1);
      };
    };

    posterToBeDeleted.remove();
  };
};


// REMAINING TASKS:
// Complete ReadMe (20 mins)
// Debug input fields to clear on page load -> if value input is empty, use placeholder string instead (1 hour)

