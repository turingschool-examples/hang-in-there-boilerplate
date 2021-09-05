// QUERY SELECTORS👇
var backToMainBtn = document.querySelector('.back-to-main');
var makePosterBtn = document.querySelector('.show-form');
var mainPoster = document.querySelector('.main-poster');
var nevermindBtn = document.querySelector('.show-main');
var posterForm = document.querySelector('.poster-form');
var posterImg = document.querySelector('.poster-img');
var posterImgURLInput = document.querySelector('#poster-image-url');
var posterQuote = document.querySelector('.poster-quote');
var posterQuoteInput = document.querySelector('#poster-quote');
var posterTitle = document.querySelector('.poster-title');
var savedPostersPg = document.querySelector('.saved-posters');
var posterTitleInput = document.querySelector('#poster-title');
var savedPostersGrid = document.querySelector('.saved-posters-grid');
var saveThisPosterBtn = document.querySelector('.save-poster');
var showSavedBtn = document.querySelector('.show-saved');
var showRandomPostersBtn = document.querySelector('.show-random');
var showMyPosterBtn = document.querySelector('.make-poster');

// ARRAYS👇
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
backToMainBtn.addEventListener('click', returnToMain);
makePosterBtn.addEventListener('click', makePosterForm);
nevermindBtn.addEventListener('click', returnToMain);
saveThisPosterBtn.addEventListener('click', saveCreatedPoster)
showMyPosterBtn.addEventListener('click', showMyPoster);
showRandomPostersBtn.addEventListener('click', createRandomPoster);
showSavedBtn.addEventListener('click', showSavedPosters);
window.addEventListener('load', createRandomPoster);

// functions and event handlers (function to invoke eventListeners) go here 👇
function createRandomPoster() {
  posterTitle.innerText = titles[getRandomIndex(titles)];
  posterQuote.innerText = quotes[getRandomIndex(quotes)];
  posterImg.src = images[getRandomIndex(images)];
  currentPoster = new Poster(posterImg.src, posterTitle.innerText, posterQuote.innerText);
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function makePosterForm() {
  mainPoster.classList.add('hidden');
  posterForm.classList.remove('hidden');
};

function returnToMain() {
  mainPoster.classList.remove('hidden');
  posterForm.classList.add('hidden');
  savedPostersPg.classList.add('hidden');
};

function saveCreatedPoster(event) {
  event.preventDefault();
  if (!savedPosters.includes(currentPoster)) {
    savedPosters.push(currentPoster);
  }
};

function showMyPoster(event) {
  event.preventDefault();
  posterImg.src = posterImgURLInput.value;
  posterTitle.innerText = posterTitleInput.value;
  posterQuote.innerText = posterQuoteInput.value;
  currentPoster = new Poster(posterImg.src, posterTitle.innerText, posterQuote.innerText);
  images.push(posterImgURLInput.value);
  titles.push(posterTitleInput.value);
  quotes.push(posterQuoteInput.value);
  returnToMain()
};

function showSavedPosters() {
  mainPoster.classList.add('hidden');
  savedPostersPg.classList.remove('hidden');
  savedPostersGrid.innerHTML = "";
  for (var i = 0; i < savedPosters.length; i++) {
    savedPostersGrid.innerHTML += `
      <article class="mini-poster">
      <img src= ${savedPosters[i].imageURL} alt="nothin' to see here">
      <h2>${savedPosters[i].title}</h2>
      <h4>${savedPosters[i].quote}</h4>
      </article>
    `
  }
};
