// query selector variables go here 👇
var mainPosterPage = document.querySelector('.main-poster');
var posterImg = document.querySelector('.poster-img');
var posterTitle = document.querySelector('.poster-title');
var posterQuote = document.querySelector('.poster-quote');
var savePoster = document.querySelector('.save-poster');
var showSaved = document.querySelector('.show-saved');
var showRandom = document.querySelector('.show-random');
var showForm = document.querySelector('.show-form');
var posterForm = document.querySelector('.poster-form');
var customPosterImageUrl = document.querySelector('#poster-image-url');
var customPosterTitle = document.querySelector('#poster-title');
var customPosterQuote = document.querySelector('#poster-quote');
var makePoster = document.querySelector('.make-poster');
var showMain = document.querySelector('.show-main');
var savedPosterPage = document.querySelector('.saved-posters');
var backToMain = document.querySelector('.back-to-main');
var savedPostersGrid = document.querySelector('.saved-posters-grid')
var miniPoster = document.querySelector('.mini-poster')
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

];

var currentPoster;

// event listeners go here 👇
mainPosterPage.addEventListener('click', buttonHandler);
savedPosterPage.addEventListener('click', savedPosterButtonHandler);
posterForm.addEventListener('click', posterFormButtonHandler);

// functions and event handlers go here 👇
// (we've provided one for you to get you started)!
//Displays form page and hides main page.
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

currentPoster = new Poster(
  randomPosterImage(), 
  randomTitle(), 
  randomQuote()
)

function randomPosterImage() {
  var randomImage = getRandomIndex(images);
  posterImg.src = images[randomImage];
  return Poster.imageURL = posterImg.src
};

function randomTitle() {
  var randomWord = getRandomIndex(titles);
  posterTitle.innerText = titles[randomWord];
  return Poster.title = posterTitle.innerText
};

function randomQuote() {
  var randomPhrase = getRandomIndex(quotes);
  posterQuote.innerText = quotes[randomPhrase];
  return Poster.quote = posterQuote.innerText
};

window.onload = currentPoster;

function buttonHandler(event) {
  if (event.target === showForm) {
    displayPosterForm();
  } else if (event.target === showSaved) {
    displaySavedPosterPage();
  } else if (event.target === showRandom) {
    displayRandomPoster();
  } else if (event.target === savePoster) {
    saveCurrentPoster();
    createMiniPosterId();
  }
};

function displayPosterForm() {
  posterForm.classList.remove('hidden');
  mainPosterPage.classList.add('hidden');
}

function displaySavedPosterPage() {
  savedPosterPage.classList.remove('hidden');
  mainPosterPage.classList.add('hidden');
}

function displayRandomPoster() {
  var newCurrentPoster = new Poster(
    randomPosterImage(), 
    randomTitle(), 
    randomQuote()
  );
  currentPoster = newCurrentPoster;
}

function saveCurrentPoster() {
  if (!(savedPosters.includes(currentPoster))) {
    savedPosters.push(currentPoster);
    savedPostersGrid.insertAdjacentHTML('beforeend',  
      `<section class='mini-poster' id=${currentPoster.id}>
      <img src=${currentPoster.imageURL} />
      <h2>${currentPoster.title}</h2>
      <h4>${currentPoster.quote}</h4>
      </section>`
    );
  }
}

function createMiniPosterId() {
  var miniPosterId = document.getElementById(currentPoster.id)
  miniPosterId.addEventListener('dblclick', deleteMiniPoster)
}

function deleteMiniPoster() {
  let savedMiniPosterId = document.getElementById(this.id)
  savedMiniPosterId.remove();
}

function savedPosterButtonHandler(event) {
  if (event.target === backToMain) {
    navBackToMain();
  };
};

function navBackToMain() {
  event.preventDefault();
  savedPosterPage.classList.add('hidden');
  mainPosterPage.classList.remove('hidden');
}

function posterFormButtonHandler(event) {
  if (event.target === showMain) {
    navShowMain();
  } else if (event.target === makePoster) {
    navShowMain();
    customPosterData();
  }
}

function navShowMain() {
  posterForm.classList.add('hidden');
  mainPosterPage.classList.remove('hidden');
}

function customPosterData() {
  event.preventDefault();
  var customPoster = new Poster()
  customPoster.imageURL = posterImg.src = customPosterImageUrl.value;
  customPoster.title = posterTitle.innerText = customPosterTitle.value;
  customPoster.quote = posterQuote.innerText = customPosterQuote.value;
  images.push(customPoster.imageURL);
  titles.push(customPoster.title);
  quotes.push(customPoster.quote);
  currentPoster = customPoster
}
