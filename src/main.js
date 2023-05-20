// query selector variables go here 👇
var showRandPoster = document.querySelector(".show-random")
var makePoster = document.querySelector(".show-form")
var posterImg = document.querySelector(".poster-img")
var title = document.querySelector(".poster-title")
var quote = document.querySelector(".poster-quote")
var mainPoster = document.querySelector(".main-poster")
var makePosterView = document.querySelector(".poster-form")
var mySavedPosters = document.querySelector(".saved-posters")
var showMyPosters = document.querySelector(".show-saved")
var neverMindButton = document.querySelector(".show-main")
var backToMainButton = document.querySelector(".back-to-main")
var showMyPosterButton = document.querySelector(".make-poster")
var userPosterImgUrl = document.querySelector("#poster-image-url")
var userPosterTitle = document.querySelector("#poster-title")
var userPoserQuote = document.querySelector("#poster-quote")

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


window.addEventListener("load", randomPoster)
showRandPoster.addEventListener("click", randomPoster)
makePoster.addEventListener("click", makePosterForm)
showMyPosters.addEventListener("click", showSaved)
neverMindButton.addEventListener("click", backFromMake)
backToMainButton.addEventListener("click", backFromSaved)
showMyPosterButton.addEventListener("click", uniquePoster)


// functions and event handlers go here 👇
// (we've provided two to get you started)!

function randomPoster() {
  var getRandoImageIndex = getRandomIndex(images)
  var getRandoTitleIndex = getRandomIndex(titles)
  var getRandoQuoteIndex = getRandomIndex(quotes)
  var randoPoster = images[getRandoImageIndex]
  var randoTitle = titles[getRandoTitleIndex]
  var randoQuote = quotes[getRandoQuoteIndex]
    posterImg.src = randoPoster
    title.innerText = randoTitle
    quote.innerText = randoQuote
}

// hide mainPoster and switch to form view
// remove "hidden" from the page we want to see
// variable.classList.add("hidden")
// variable.classList.remove("hidden")

function makePosterForm() {
  mainPoster.classList.add("hidden")
  makePoster.classList.remove("hidden")
  makePosterView.classList.remove("hidden")
}

function showSaved() {
  mySavedPosters.classList.remove("hidden")
  mainPoster.classList.add("hidden")
}

function backFromMake() {
  mainPoster.classList.remove("hidden")
  makePosterView.classList.add("hidden")
}

function backFromSaved() {
  mainPoster.classList.remove("hidden")
  mySavedPosters.classList.add("hidden")
}

function uniquePoster() {
  event.preventDefault();
  var inputUrl = userPosterImgUrl.value
  var inputMotivationalTitle = userPosterTitle.value
  var inputMotivationalQuote = userPoserQuote.value
  posterImg.src=inputUrl
  title.innerText=inputMotivationalTitle
  quote.innerText=inputMotivationalQuote
  backFromMake();
  var imgValue = document.getElementById("poster-image-url").value
  images.push(imgValue);
  varartitleValue = document.getElementById("poster-title").value
  titles.push(titleValue);
  var quoteValue = document.getElementById("poster-quote").value
  quotes.push(quoteValue);
}





// event prevent inside of a function. put it inside of function connected to event listener. 

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



// 1. once we have rand number, set them as index numbers for each of arrays to find out what is at those index numbers. 

// 2. create new function that returns what's at the index postion at each of the arrays. pull out the string to set as the value the for createPoster function parameters. 

//3. different numbers all random. plug them into each array names using bracket notion. this will give us the string, then we assign that to a variable. put this variable into the value part of the object keys.

// Extra Tips
/* access event objects in event listener and pass events as a parameter. event.target to get specific ID's
event something in the event object called preventDefault - overrides functionality of
whatever it things the event should do. Target is separate from preventDefault
*/