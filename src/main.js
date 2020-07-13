// query selector variables go here 👇

var image = document.querySelector(".poster-img");
var title = document.querySelector(".poster-title");
var quote = document.querySelector(".poster-quote");
var showFormButton = document.querySelector(".show-form");
var savePosterButton = document.querySelector(".show-saved");
var takeMeBackButton = document.querySelector(".show-main");
var backToMainButton = document.querySelector(".back-to-main");
var urlInput = document.querySelector("#poster-image-url");
var titleInput = document.querySelector("#poster-title");
var quoteInput = document.querySelector("#poster-quote");

var showPosterButton = document.querySelector(".make-poster");

var savedPostersPage = document.querySelector(".saved-posters");
var savedPostersGrid = document.querySelector(".saved-posters-grid");
var posterFormSection = document.querySelector(".poster-form");
var mainPosterSection = document.querySelector(".main-poster");
var showSavedPostersButton = document.querySelector(".save-poster");
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
showPosterButton.addEventListener("click", handleShowPosterClick);
showFormButton.addEventListener("click", handleShowFormClick);
savePosterButton.addEventListener("click", handleShowSaveClick);
takeMeBackButton.addEventListener("click", handleTakeBackClick);
backToMainButton.addEventListener("click", handleBackToMainClick);

savePosterButton.addEventListener("click", savePoster);
showSavedPostersButton.addEventListener("click", showPosterGrid);

// functions and event handlers go here 👇

function showSavedPosters(){
  savedPostersGrid.innerHTML = "";
  savedPostersPage.classList.remove("hidden");
  mainPosterSection.classList.add("hidden");
  showPosterGrid()
}

function noDuplicates(){
//  event.preventDefault();
  for (var i = 0; i < savedPosters.length; i++){
    if(savedPosters[i] === currentPoster){
      return false;
    }
    return true;
  }
}

function savePoster(){
//  event.preventDefault();
  // var imageURL = image.src
  // var title = title.innerText
  // var quote = quote.innerText
  // var saveThisPoster = new Poster(imageURL, title, quote)
  if(noDuplicates()) {
    // savedPosters.unshift(urlInput.value);
    // savedPosters.unshift(titleInput.value);
    // savedPosters.unshift(quoteInput.value);
    savedPosters.unshift(currentPoster);
  }
}

        // on the main page we want to be able to
        // save the current poster as an object.
        // object will have 3 properties (image, title, quote).
        //
        // when the save this poster button is clicked

        // we want to insert that object into the saved posters array.
        //
        // want to display the object from the saved posters array

        // on the show saved posters page
        //
        // and only save non-duplicated posters.


// function showPosterGrid() {
//   if(savedPosters.length != 0){
//     for (var i = 0; i < savedPosters.length; i++){
//       var posterElement = createPosterHTML(savedPosters[i]);
//       savedPostersGrid.innerHTML += posterElement;
//     }
//     savedPoster.className = "saved-posters";
//     mainPoster.className = "main-poster hidden";
//
//     savedPostersGrid.insertAdjacentHTML("afterbegin", `
//     <div class="mini-poster">
//       <img src=${savedPosters[i].imageURL}>
//       <h2>${savedPosters[i].title}</h2>
//       <h4>${savedPosters[i].quote}</h4>
//     </div>}`);
//   } else {
//
//   }
//   }
//
// function createPosterHTML(newPoster){
//   return `<div class="mini-poster">
//     <img src=${newPoster[i].imageURL}>
//     <h2>${newPoster[i].title}</h2>
//     <h4>${newPoster[i].quote}</h4>
//   </div>}`
// }



function randomizePoster() {
    image.src = images[getRandomIndex(images)],
    title.innerText = titles[getRandomIndex(titles)],
    quote.innerText = quotes[getRandomIndex(quotes)]
}

function handleTakeBackClick(event) {
  event.preventDefault()
  showMainPage()
  hideForm()
}

function handleBackToMainClick(event) {
  event.preventDefault()
  showMainPage()
  hideSaved()
}

function showMainPage() {
  var mainPosterSection = document.querySelector(".main-poster")
  mainPosterSection.classList.remove("hidden")
}

function handleShowFormClick(event){
  event.preventDefault()
  hidePosterPage()
  showForm()
}

function handleShowSaveClick(event){
  event.preventDefault()
  hidePosterPage()
  showSaved()
}

function hidePosterPage(){
  var mainPosterSection = document.querySelector(".main-poster")
  mainPosterSection.classList.add("hidden");
}

function showForm() {
  var posterFormSection = document.querySelector(".poster-form")
  posterFormSection.classList.remove("hidden");
}

function hideForm() {
  var posterFormSection = document.querySelector(".poster-form")
  posterFormSection.classList.add("hidden");
}

function showSaved() {
  var savedPosterSection = document.querySelector(".saved-posters")
  savedPosterSection.classList.remove("hidden")
}

function hideSaved() {
  var savedPosterSection = document.querySelector(".saved-posters")
  savedPosterSection.classList.add("hidden")
}
function handleShowPosterClick() {
  event.preventDefault();
  getUserInput();
  image.src = images[0];
  title.innerText = titles[0];
  quote.innerText = quotes[0];
  hideForm();
  showMainPage();
  currentPoster = new Poster(image[0], title[0], quote[0]);
}

function getUserInput() {
  images.unshift(urlInput.value);
  titles.unshift(titleInput.value);
  quotes.unshift(quoteInput.value);
}

// (we've provided one for you to get you started)!

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
