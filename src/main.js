// query selector variables go here 👇

// Show Random Poster Query Selectors:
var mainPosterTitle = document.querySelector(".poster-title");
var mainPosterQuote = document.querySelector(".poster-quote");
var mainPosterImage = document.querySelector(".poster-img");
var showRandomPosterButton = document.querySelector(".show-random");

// Show Saved Posters & Make Your Own Poster Query Selectors:
var mainPoster = document.querySelector(".main-poster");
var makeYourOwnButton = document.querySelector(".show-form");
var showFormScreen = document.querySelector(".poster-form");
var showSavedButton = document.querySelector(".show-saved");
var savedPostersScreen = document.querySelector(".saved-posters");
var nevermindButton = document.querySelector(".show-main");
var backToMainButton = document.querySelector(".back-to-main");

// Creating a new poster:
var showMyPosterButton = document.querySelector(".make-poster");
var posterImageUrlInput = document.querySelector("#poster-image-url");
var posterTitleInput = document.querySelector("#poster-title");
var posterQuoteInput = document.querySelector("#poster-quote");

//Save this poster to grid:
var saveThisPosterButton = document.querySelector(".save-poster");
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
window.addEventListener("load", randomizePoster);
showRandomPosterButton.addEventListener("click", randomizePoster);
showSavedButton.addEventListener("click", bringUpSaved);
makeYourOwnButton.addEventListener("click", bringUpForm);
nevermindButton.addEventListener("click", formBackToMain);
backToMainButton.addEventListener("click", savedBackToMain);
showMyPosterButton.addEventListener("click", showCreatedPoster);
saveThisPosterButton.addEventListener("click", saveCurrentPoster);

// functions and event handlers go here 👇
function randomizePoster() {
  var newTitle = getRandomIndex(titles);
  mainPosterTitle.innerText = newTitle;
  var newQuote = getRandomIndex(quotes);
  mainPosterQuote.innerText = newQuote;
  var newImage = getRandomIndex(images);
  mainPosterImage.src = newImage;
  currentPoster = new Poster(newImage, newTitle, newQuote);
};

function getRandomIndex(array) {
  return array[Math.floor(Math.random() * array.length)];
};

function bringUpSaved() {
  mainPoster.classList.add("hidden");
  savedPostersScreen.classList.remove("hidden");
};

function bringUpForm() {
  mainPoster.classList.add("hidden");
  showFormScreen.classList.remove("hidden");
};

function formBackToMain() {
  mainPoster.classList.remove("hidden");
  showFormScreen.classList.add("hidden");
};

function savedBackToMain() {
  mainPoster.classList.remove("hidden");
  savedPostersScreen.classList.add("hidden");
};

function showCreatedPoster() {
  event.preventDefault();
  images.push(posterImageUrlInput.value);
  titles.push(posterTitleInput.value);
  quotes.push(posterQuoteInput.value);
  currentPoster = new Poster(posterImageUrlInput.value, posterTitleInput.value, posterQuoteInput.value);
  formBackToMain();
  mainPosterTitle.innerText = currentPoster.title;
  mainPosterQuote.innerText = currentPoster.quote;
  mainPosterImage.src = currentPoster.imageURL;
};

function saveCurrentPoster() {
    savedPostersGrid.innerHTML= "";
    if(!savedPosters.includes(currentPoster)) {
      savedPosters.unshift(currentPoster);
    };
    for (var i = 0; i < savedPosters.length; i++) {
      savedPostersGrid.innerHTML += `
      <section class="mini-poster" id="currentPoster.id">
        <img id="currentPoster.id" src=${savedPosters[i].imageURL} alt="does this show">
        <h2 id="currentPoster.id">${savedPosters[i].title}</h2>
        <h4 id="currentPoster.id">${savedPosters[i].quote}</h4>
        </section>
      `;
    }
  };

// function saveCurrentPoster() {
//     currentPoster = new Poster(mainPosterImage, mainPosterTitle, mainPosterQuote);
//     console.log(currentPoster);
//     if(!savedPosters.includes(mainPosterImage && mainPosterTitle && mainPosterQuote)) {
//       savedPosters.unshift(currentPoster);
//     };
//     for (var i = 0; i < savedPosters.length; i++) {
//       savedPostersGrid.innerText += `
//         ${savedPosters[i].imageURL}
//         // <h2 class="mini-poster">${savedPosters[i].title}</h2>
//         // <h4 class="mini-poster">${savedPosters[i].quote}</h4>
//       `;
//     }
//   };

// When a user clicks the “Save This Poster” button, the current main poster will be added to the savedPosters array. ->
    //Set up click event for save poster. We need to set the instance of the poster showed as current poster. Then push to the empty savedPosters array.
// If a user clicks the “Save This Poster” more than once on a single poster, it will still only be saved once (no duplicates)
    //add a conditional statement for if it includes all three parameters to not push, else push
// When a user clicks the “Show Saved Posters” button, we should see the saved posters section
    //Access show saved posters screen
// All the posters in the savedPosters array should be displayed in the saved posters grid section
    //Add saved posters array to the article
