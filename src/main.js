

// .query selector variables go here 👇 HEAD
//iteration 0
var posterQuote = document.querySelector(".poster-quote");
var posterTitle = document.querySelector(".poster-title");
var posterImage = document.querySelector(".poster-img");
var randomPosterButton = document.querySelector(".show-random");
//iteration 1 -
var hideMainPosterPage = document.querySelector(".main-poster");
var formCreatePoster = document.querySelector(".poster-form");
var showMyPosterButton = document.querySelector(".make-poster");
var showFormButton = document.querySelector(".show-form");
var takeMeBack = document.querySelector(".show-main");
var posterQuoteInput = document.querySelector("#poster-quote");
var posterTitleInput = document.querySelector("#poster-title");
var imageUrlInput = document.querySelector("#poster-image-url");
var backToMainButton = document.querySelector(".back-to-main")
var showSavedPageButton = document.querySelector('.show-saved')
var showSavedPosters = document.querySelector('.saved-posters')
var saveThisPosterGrid = document.querySelector('.saved-posters-grid')
var saveThisPosterButton = document.querySelector('.save-poster')
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
// var picture = `${posterQuote} + ${posterTitle} + ${posterImage}`
// event listeners go here 👇
//Iteration 0
window.addEventListener('load', homePage)
randomPosterButton.addEventListener('click', homePage)
//Iteration 1 & 2
showFormButton.addEventListener('click', openFormPage)
takeMeBack.addEventListener('click', openMainPage)
//showMyPosterButton.addEventListener('click', displayMyPoster)
showMyPosterButton.addEventListener('click', displayMyPoster)
formCreatePoster.addEventListener('load', openFormPage)
backToMainButton.addEventListener('click', backToMainPage)
showSavedPageButton.addEventListener('click', openSavedPosterPage)
//Iteration 3
saveThisPosterGrid.addEventListener('click', gridDisplay)
saveThisPosterButton.addEventListener('click', saveMyPoster)
//functions and event handlers go here 👇

var imgIndex = getRandomIndex(images);
var quoteIndex = getRandomIndex(quotes);
var titleIndex = getRandomIndex(titles);

//iteratrion 0
function homePage() {
posterImage.src = images[getRandomIndex(images)]
posterTitle.innerText = titles[getRandomIndex(titles)]
posterQuote.innerText = quotes[getRandomIndex(quotes)]
}

//Iteration 1
function openFormPage(){
  hideMainPosterPage.classList.add('hidden')
  formCreatePoster.classList.remove('hidden')
}
//Iteration 1
  function openMainPage(){
    hideMainPosterPage.classList.remove('hidden')
    formCreatePoster.classList.add('hidden')
  }

  function displayMyPoster(){
    event.preventDefault()
    formCreatePoster.classList.add('hidden')
    hideMainPosterPage.classList.remove('hidden')
    currentPoster = new Poster(newImage, newTitle, newQuote)
    var newImage = imageUrlInput.value
    var newTitle = posterTitleInput.value
    var newQuote = posterQuoteInput.value
    posterImage.src = newImage
    posterTitle.innerText = newTitle
    posterQuote.innerText = newQuote
    images.push(newImage)
    titles.push(newTitle)
    quotes.push(newQuote)
  }
  function saveMyPoster() {
    console.log('hello', saveMyPoster)
    if (!savedPosters.includes(currentPoster)) {
      savedPosters.push(currentPoster)
    }
    function gridDisplay() {
    openSavedPosterPage()
    }
    document
    getElementsByClassName(savedPostersGrid)
    saveThisPosterGrid.innerHTML = savedPosters
    console.log(savedPosters)
  }

  //if !savedPosters does not include current push into array
//current poster interpilated
// function saveCreated() {
//   currentPoster = new Poster(posterImage, posterTitle, posterQuote)
//   posterImage = imageUrlInput.value
//   posterTitle = posterTitleInput.value
//   posterQuote = posterQuoteInput.value
//   images.push(posterImage)
//   titles.push(posterTitle)
//   quotes.push(posterQuote)
// }

  function openSavedPosterPage() {
  hideMainPosterPage.classList.add('hidden')
  showSavedPosters.classList.remove('hidden')
  }
  function backToMainPage() {
  hideMainPosterPage.classList.remove('hidden')
  showSavedPosters.classList.add('hidden')
  }
  function saveThisPosterPage() {
  hideMainPosterPage.classList.add('hidden')
  showSavedPosters.classList.remove('hidden')


  //savedPosters.push(saveThisPosterButton)
  }
// (we've provided one for you to get you started)!
//function newRandomPoster() {



function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
