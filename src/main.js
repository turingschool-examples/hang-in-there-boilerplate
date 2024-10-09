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

// query selector variables go here 👇
var posterImage = document.querySelector(".poster-img")
var posterTitle = document.querySelector(".poster-title")
var posterQuote = document.querySelector(".poster-quote")
var userPosterImage = document.querySelector("#poster-image-url")
var userPosterTitle = document.querySelector("#poster-title")
var userPosterQuote = document.querySelector("#poster-quote")
var makeOwnPosterButton = document.querySelector(".show-form")
var showSavedPostersButton = document.querySelector(".show-saved")
var showMainPageButton = document.querySelector(".show-main")
var backToMainButton = document.querySelector(".back-to-main")
var showRandomPosterButton = document.querySelector(".show-random")
var mainPosterViewSection = document.querySelector(".main-poster")
var OwnPosterFormSection = document.querySelector(".poster-form")
var savedPostersSection = document.querySelector(".saved-posters")
var showRandomPosterButton = document.querySelector(".show-random")
var showUserPosterButton = document.querySelector(".make-poster")

// event listeners go here 👇
window.addEventListener("load", showRandomHomepagePoster)
makeOwnPosterButton.addEventListener("click", function() {handleView('form')})
showSavedPostersButton.addEventListener("click", function() {handleView('saved')})
showMainPageButton.addEventListener("click", function() {handleView('main')})
backToMainButton.addEventListener("click", function() {handleView('main')})
showUserPosterButton.addEventListener("click", function() {handleView('main')})
showUserPosterButton.addEventListener("click", showUserCreatedPoster)
showRandomPosterButton.addEventListener("click", showRandomHomepagePoster)


//the anonymous callback function () used above is for deferring its execution
//until the button is acutually clicked. 


// functions and event handlers go here 👇
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



function handleView(view) {
  const views = {
    main: mainPosterViewSection,
    form: OwnPosterFormSection,
    saved: savedPostersSection
  }
  //this object above links the keys to the dom elements (via the query selectors)

  Object.values(views).forEach((section) => {
    section.classList.add("hidden")
    // console.log(Object.values(views))
  })
  //above we start by removing all of the view sections
  //Object.values() takes my views object above it and returns an array 
  //containing all of the values of that object’s properties, ignoring the keys.

  views[view].classList.remove("hidden")
  // console.log(views[view])
}

function showPoster(imageURL, title, quote) {
  posterImage.src = imageURL
  posterTitle.innerText = title
  posterQuote.innerText = quote

  currentPoster = {
    imageURL: imageURL,
    title: title,
    quote: quote
  }
}

function showRandomHomepagePoster() {
  let randomImage = images[getRandomIndex(images)];
  let randomTitle = titles[getRandomIndex(titles)];
  let randomQuote = quotes[getRandomIndex(quotes)];

  showPoster(randomImage, randomTitle, randomQuote)
  };


function showUserCreatedPoster(event) {
  event.preventDefault();

  let userImage = userPosterImage.value
  let userTitle = userPosterTitle.value
  let userQuote = userPosterQuote.value

  // console.log("User Image:", userImage);
  // console.log("User Title:", userTitle);
  // console.log("User Quote:", userQuote);

  showPoster(userImage, userTitle, userQuote)
  addUserPoster(userImage, userTitle, userQuote)
}

function addUserPoster(image, title, quote) {
  images.push(image)
  titles.push(title)
  quotes.push(quote)
}



