// query selector variables go here 👇
var targetTitle = document.querySelector('.poster-title');
var targetImage = document.querySelector('.poster-img');
var targetQuote = document.querySelector('.poster-quote');

var posterForm = document.querySelector('.poster-form');
var mainPoster = document.querySelector('.main-poster');
var savedPoster = document.querySelector('.saved-posters');

var showFormBtn = document.querySelector('.show-form');
var showSavedBtn = document.querySelector('.show-saved');
var nevermindBtn = document.querySelector('.show-main');
var backToMainBtn = document.querySelector('.back-to-main');
var randomBtn = document.querySelector('.show-random');
var showMyPosterBtn = document.querySelector('.make-poster');
var savePosterBtn = document.querySelector('.save-poster');

var ownTitle = document.getElementById('poster-title');
var ownImage = document.getElementById('poster-image-url');
var ownQuote = document.getElementById('poster-quote');




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
showFormBtn.addEventListener('click', makeOwnPoster);
showSavedBtn.addEventListener('click', viewSaved);
nevermindBtn.addEventListener('click', takeMeBack);
backToMainBtn.addEventListener('click', takeMeBack);
randomBtn.addEventListener('click', randomPoster);
showMyPosterBtn.addEventListener('click', savePoster);
savePosterBtn.addEventListener('click', addToArray);

// functions and event handlers go here 👇


function savePoster(event) {
  event.preventDefault();
  titles.push(ownTitle.value);
  images.push(ownImage.value);
  quotes.push(ownQuote.value);
  currentPoster = new Poster(ownImage.value, ownTitle.value, ownQuote.value);
  updatePoster();
  takeMeBack();
};

function updatePoster() {
  targetTitle.innerText = currentPoster.title;
  targetImage.src = currentPoster.imageURL;
  targetQuote.innerText = currentPoster.quote;
}
function makeOwnPoster() {
  mainPoster.classList.toggle('hidden');
  posterForm.classList.toggle('hidden');
};

function viewSaved() {
  savedPoster.classList.toggle('hidden');
  mainPoster.classList.toggle('hidden');
};

function takeMeBack() {
  mainPoster.classList.remove('hidden');
  savedPoster.classList.add('hidden');
  posterForm.classList.add('hidden');
};

// function addToArray() {
//   if (!savedPosters.includes(currentPoster)){
//     savedPosters.push(currentPoster);
//   };
//
// };

function addToArray() {
  for (var i = 0; i < savedPosters.length; i++) {
    if (isEquivalent(currentPoster, savedPosters[i])) {
    return;
    }
  }
  savedPosters.push(currentPoster);
}

function isEquivalent(a, b) {
  if (a.imageURL == b.imageURL && a.title == b.title && a.quote == b.quote) {
    return true;
  } else {
    return false;
  }
}

function randomPoster() {
  targetTitle.innerText = titles[getRandomIndex(titles)];
  targetImage.src = images[getRandomIndex(images)];
  targetQuote.innerText = quotes[getRandomIndex(quotes)];
};

randomPoster();

//poster.src = 'https://fr.cdn.v5.futura-sciences.com/builds/images/thumbs/4/4e1f8098cf_Chilesaurus_diegosuarezi_2__University_of_Birmingham.jpg';
// (we've provided one for you to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
