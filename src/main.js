// Some tips and tricks to keep in mind while we work through this!
// step 1: Capture elements that I want to work with (buttons, images, etc.) -> query selector 
// step 2: Add event listener to 'listen' for interactions to the DOM elements 
//          it will then run function that we decide will be 
// step 3: Do the thing. Have event liistener invoke the function we give 
// **Keep everything inside of a function so it can be invoked!!!!!



// query selector variables go here 👇

// poster elements
var posterTitle = document.querySelector('.poster-title');
var img = document.querySelector('.poster-img');
var posterQuote = document.querySelector('.poster-quote');

// buttons elements 
var randomButton = document.querySelector('.show-random');
var savePosterButton = document.querySelector('.show-saved');
var makeYourOwnPosterButton = document.querySelector('.show-form');

var nvmTakeMeBackButton = document.querySelector('.show-main');
var backToMainButton = document.querySelector('.back-to-main');
var makePosterButton = document.querySelector('.make-poster');
var saveThisPosterButton = document.querySelector('.save-poster');
var showSavedPostersButton = document.querySelector('.show-saved');

// page elements 
var wholePage = document.querySelector('.main-poster');
var hiddenPosterForm = document.querySelector('.poster-form');
var hiddenSavedPosters = document.querySelector('.saved-posters');

// user input for 'create your own poster' form elements 
var imageInput = document.querySelector('#poster-image-url');
var titleInput = document.querySelector('#poster-title');
var quoteInput = document.querySelector('#poster-quote');

// poster grid for mini posters elements 
var posterGrid = document.querySelector('.saved-posters-grid');

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
  "Don\'t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
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
  "Never limit yourself because of others\' limited imagination; never limit others because of your own limited imagination.",
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

// window load event listener
window.addEventListener('load', displayRandomPoster);

// button event listeners
randomButton.addEventListener('click', displayRandomPoster);
savePosterButton.addEventListener('click', showSavedPosters);
makeYourOwnPosterButton.addEventListener('click', openForm);
nvmTakeMeBackButton.addEventListener('click', showMainPage);
backToMainButton.addEventListener('click', showMainPage);
makePosterButton.addEventListener('click', function(event) {
    event.preventDefault();
    makeNewPoster();
  });
saveThisPosterButton.addEventListener('click', addToSavedPostersArray);
showSavedPostersButton.addEventListener('click', showSavedPosters);

// double clicking mini-poster event listener 
posterGrid.addEventListener('dblclick', function(event) {
 deleteMiniPoster(event);
});

// functions and event handlers go here 👇
// (we've provided two to get you started)!

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(), 
    imageURL: imageURL, 
    title: title, 
    quote: quote}
}

//........................ iteration 0 ..........................
function displayRandomPoster() {
      var randomQuote = quotes[getRandomIndex(quotes)];
      var randomImage = images[getRandomIndex(images)];
      var randomTitle = titles[getRandomIndex(titles)];

      currentPoster = createPoster(randomImage, randomTitle, randomQuote);

      posterQuote.innerText = currentPoster.quote;
      img.src = currentPoster.imageURL;
      posterTitle.innerText = currentPoster.title;
}

//........................ iteration 1 ..........................
function showSavedPosters() {
  posterGrid.innerHTML = '';
  wholePage.classList.add('hidden');
  hiddenSavedPosters.classList.remove('hidden');
  
    for (var i = 0; i < savedPosters.length; i++) {
      posterGrid.innerHTML +=
          `<article class='mini-poster' id = '${savedPosters[i].id}'>
          <img class='mini-poster img' src='${savedPosters[i].imageURL}' alt='Inspirational poster'>
          <h2>${savedPosters[i].title}</h2>
          <h4>${savedPosters[i].quote}</h4></article>`
  }
}

function openForm(){
  wholePage.classList.add('hidden');
  hiddenPosterForm.classList.remove('hidden');
  imageInput.value = '';
  titleInput.value = '';
  quoteInput.value = '';
}

function showMainPage() {
  hiddenSavedPosters.classList.add('hidden');
  hiddenPosterForm.classList.add('hidden');
  wholePage.classList.remove('hidden');
  posterGrid.innerHTML = '';
}

//........................ iteration 2 ..........................
function makeNewPoster() {

  var newImage = imageInput.value;
  var newTitle = titleInput.value;
  var newQuote = quoteInput.value;

  images.push(newImage);
  titles.push(newTitle);
  quotes.push(newQuote);

 currentPoster = createPoster(newImage, newTitle, newQuote);

  posterQuote.innerText = currentPoster.quote;
  img.src = currentPoster.imageURL;
  posterTitle.innerText = currentPoster.title;

  showMainPage();
}

//........................ iteration 3 ..........................
function addToSavedPostersArray() {

  for (var i = 0; i < savedPosters.length; i++ ){
    if (savedPosters[i].imageURL === currentPoster.imageURL
       && savedPosters[i].quote === currentPoster.quote
       && savedPosters[i].title === currentPoster.title) {
    return;
    } 
  }
 savedPosters.push(currentPoster);
}

//........................ iteration 4 ..........................
function deleteMiniPoster(event){
  for (var i = 0; i < savedPosters.length; i++) {
    if(parseInt(event.target.closest('article').id) === savedPosters[i].id) {
    savedPosters.splice(i, 1);
    }
  }
  showSavedPosters();
}

