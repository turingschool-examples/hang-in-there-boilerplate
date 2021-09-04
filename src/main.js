// query selector variables go here 👇
var title = document.querySelector('.poster-title');
var image = document.querySelector('.poster-img');
var quote = document.querySelector('.poster-quote');

// homepage element
var mainPoster = document.querySelector('.main-poster');

// "Show Another Random Poster" button element
var showRandomButton = document.querySelector('.show-random');

// "Make Your Own Poster" button element and form page
var makePosterButton = document.querySelector('.show-form');
var posterForm = document.querySelector('.poster-form');

// Save custom poster button
var savePosterButton = document.querySelector('.make-poster');

// On homepage, "Save This Poster" button
var saveRandomPosterButton = document.querySelector('.save-poster');
var savedPostersGrid = document.querySelector(".saved-posters-grid");

// Form page inputs
var posterImage = document.getElementById('poster-image-url');
var posterTitle = document.getElementById('poster-title');
var posterQuote = document.getElementById('poster-quote');

// "View Saved Posters" button element and Saved Posters page
var viewSavedButton = document.querySelector('.show-saved');
var savedPage = document.querySelector('.saved-posters');

//"Back To Main" button elements
var takeMeBackButton = document.querySelector('.show-main');
var backToMainButton = document.querySelector('.back-to-main');

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

// generate a random poster upon page load
window.addEventListener('load', getRandomSelection);

// generate a random poster by reloading page
showRandomButton.addEventListener('click', getRandomSelection);

// Save poster in Saved Posters gallery
saveRandomPosterButton.addEventListener('click', saveRandomPoster);

// when "Make Your Own Poster" button is clicked, show poster form
makePosterButton.addEventListener('click', showPosterForm);
savePosterButton.addEventListener('click', loadCustomPoster);

// when "Show Saved Posters" button is clicked, go to Saved Posters page
viewSavedButton.addEventListener('click', showSaved);

// when "Back to Main" or "Take Me Back" buttons are clicked, go back to homepage
takeMeBackButton.addEventListener('click', takeMeBack);
backToMainButton.addEventListener('click', backToMain);

// functions and event handlers go here 👇
// (we've provided one for you to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomSelection(){
  var randomTitle = getRandomIndex(titles);
  var randomQuote = getRandomIndex(quotes);
  var randomImage = getRandomIndex(images);

  title.innerText = titles[randomTitle];
  quote.innerText = quotes[randomQuote];
  image.src = images[randomImage];
}

// function reload(){
//   window.location.reload();
// }

function showPosterForm(){
  posterForm.classList.remove('hidden');
  mainPoster.classList.add('hidden');
}

function showSaved(){
  savedPage.classList.remove('hidden');
  mainPoster.classList.add('hidden');
}

function takeMeBack(){
  mainPoster.classList.remove('hidden');
  posterForm.classList.add('hidden');
}

function backToMain(){
  mainPoster.classList.remove('hidden');
  savedPage.classList.add('hidden');
}

function loadCustomPoster(){
  event.preventDefault();

  currentPoster = new Poster(posterImage.value, posterTitle.value, posterQuote.value);

  images.push(currentPoster.imageURL);
  titles.push(currentPoster.title);
  quotes.push(currentPoster.quote);

  title.innerText = currentPoster.title;
  quote.innerText = currentPoster.quote;
  image.src = currentPoster.imageURL;

  takeMeBack();
}

function checkForDuplicatePoster(){

}

function saveRandomPoster(){
  currentPoster = new Poster(image.src, title.innerText, quote.innerText);

  for (var i = 0; i < savedPosters.length; i++){
    if(savedPosters[i].imageURL === currentPoster.imageURL &&
      savedPosters[i].title === currentPoster.title &&
      savedPosters[i].quote === currentPoster.quote){
        return;
        }
      }
    savedPosters.push(currentPoster);
    savedPostersGrid.innerHTML = getPosterHTML(savedPosters);
    }

function getPosterHTML(array){
  var str = "";
  for (var i = 0; i < array.length; i++){
    var miniPosterHTML = `<article class="mini-poster"> <img class= "mini-poster img" src=${array[i].imageURL} alt= "nothin to see here">
     <h2 class="h2">${array[i].title}</h2>
     <h4 class="h4">${array[i].quote}</h4>
     </article>`;

     str += miniPosterHTML;
  }
  return str;
}
