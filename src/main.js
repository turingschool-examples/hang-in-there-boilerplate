// query selector variables go here 👇
var title = document.querySelector(".poster-title");
var phrase = document.querySelector(".poster-quote");
var image = document.querySelector("img");
var imageURL = document.querySelector("#poster-image-url");
var newTitle = document.querySelector("#poster-title");
var newQuote = document.querySelector("#poster-quote");

var randomButton = document.querySelector(".show-random");
var tryItButton = document.querySelector(".show-form");
var savedButton = document.querySelector(".show-saved");

var mainSection = document.querySelector(".main-poster");
var formSection = document.querySelector(".poster-form");
var savedSection = document.querySelector(".saved-posters");

var neverMindButton = document.querySelector(".show-main");
var backToMainButton = document.querySelector(".back-to-main");
var showMyPosterButton = document.querySelector(".make-poster");
var savePosterButton = document.querySelector(".save-poster");

var savedPostersGrid = document.querySelector(".saved-posters-grid");

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
randomButton.addEventListener("click", randomizePoster);
tryItButton.addEventListener("click", showForm);
savedButton.addEventListener("click", showSaved);
neverMindButton.addEventListener("click", showMain);
backToMainButton.addEventListener("click", showMain);
savePosterButton.addEventListener("click", savePoster);


// functions and event handlers go here 👇
// (we've provided one for you to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// this function randomizes the poster
function randomizePoster() {
  var randomImage = images[getRandomIndex(images)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomQuote = quotes[getRandomIndex(quotes)];
  currentPoster = new Poster(randomImage, randomTitle, randomQuote);
  displayCurrentPoster();
}

// this function displays current poster on main section
function displayCurrentPoster() {
  image.src = currentPoster.imageURL;
  title.innerText = currentPoster.title;
  phrase.innerText =  currentPoster.quote;
}

// this function shows the form
function showForm() {
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
}

// this function shows the saved posters
function showSaved() {
  mainSection.classList.toggle("hidden");
  savedSection.classList.toggle("hidden");
  savedPostersGrid.innerHTML = "";
// savedPostersGrid.classList.remove("hidden");
  displayInSaved();
}

// this function shows the main page
function showMain() {
  mainSection.classList.toggle("hidden");
  formSection.classList.add("hidden");
  savedSection.classList.add("hidden");
}

// this function displays your saved posters
function displayInSaved() {
  for (i = 0; i < savedPosters.length; i++) {
    var savedPostersData =
    `
    <article class="mini-poster" id=${savedPosters[i].id}>
      <img class="poster-img" src="${savedPosters[i].imageURL}" alt="somethin' to see here">
      <h2 class="poster-title">${savedPosters[i].title}</h2>
      <h4 class="poster-quote">${savedPosters[i].quote}</h4>
    </article>
    `;
    savedPostersGrid.insertAdjacentHTML("beforeend", savedPostersData);
    var availPoster = document.getElementById("poster-i");
  }
}

// this function saves a poster
function savePoster() {
  if (!savedPosters.includes(currentPoster)) {
  savedPosters.unshift(currentPoster);
  }
}

// this function stores your form input and displays your creation
showMyPosterButton.addEventListener("click", function(e) {
  e.preventDefault();
  currentPoster = new Poster(imageURL.value, newTitle.value, newQuote.value);
  images.unshift(currentPoster.imageURL);
  titles.unshift(currentPoster.title);
  quotes.unshift(currentPoster.quote);
  showMain();
  displayCurrentPoster();
});

// this function removes a saved poster on double-click
savedPostersGrid.addEventListener("dblclick", function(e) {
  for (i=0; i<savedPosters.length; i++) {
  if (parseInt(e.target.closest(".mini-poster").id) === savedPosters[i].id) {
    savedPosters.splice(i,1);
    savedPostersGrid.innerHTML = "";
    displayInSaved();
  }
}
});

// these auto-functions randomize and store poster on refresh
randomizePoster();
displayCurrentPoster();
