// query selector variables go here 👇
var mainPosterContainer = document.querySelector(".main-poster");
var posterImage = document.querySelector(".poster-img");
var posterTitle = document.querySelector(".poster-title");
var posterQuote = document.querySelector(".poster-quote");
var anotherRandomPosterButton = document.querySelector(".show-random");
var makeYourOwnPosterButton = document.querySelector(".show-form");
var makeYourOwnPosterForm = document.querySelector(".poster-form");
var nevermindTakeMeBackButton = document.querySelector(".show-main");
var showSavedPostersButton = document.querySelector(".show-saved");
var savedPostersSection = document.querySelector(".saved-posters");
var backToMainButton = document.querySelector(".back-to-main");
var showMyPosterButton = document.querySelector(".make-poster");
var imageInput = document.querySelector("#poster-image-url");
var titleInput = document.querySelector("#poster-title");
var quoteInput = document.querySelector("#poster-quote");
var saveThisPosterButton = document.querySelector(".save-poster");
var savedPostersGrid = document.querySelector('.saved-posters-grid');
// we've provided you with some data to work with 👇
// tip: you can tuck this data out of view with the dropdown found near 
// the line number where the variable is declared 
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
document.addEventListener("DOMContentLoaded", randomPosterDetails);
anotherRandomPosterButton.addEventListener("click", randomPosterDetails);
makeYourOwnPosterButton.addEventListener("click", makeYourOwnPosterClick);
showSavedPostersButton.addEventListener("click", showSavedPostersButtonClick);
nevermindTakeMeBackButton.addEventListener("click", nevermindTakeMeBackButtonClick);
backToMainButton.addEventListener("click", backToMainButtonClick);
showMyPosterButton.addEventListener("click", showMyPosterClick);
saveThisPosterButton.addEventListener("click", saveThisPosterClick);
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

function randomPosterDetails () {
  //create random deets
  var imageURL = images[getRandomIndex(images)];
  var title = titles[getRandomIndex(titles)];
  var quote = quotes[getRandomIndex(quotes)];

  //create a random poster and assignt it to current poster
  currentPoster = createPoster(imageURL, title, quote);

  //update the DOM
  posterImage.src = currentPoster.imageURL
  posterTitle.innerText = currentPoster.title
  posterQuote.innerText = currentPoster.quote 
}
  // var randomPoster = createPoster(imageURL, title, quote);

  // //update the DOM
  // posterImage.src = randomPoster.imageURL
  // posterTitle.innerText = randomPoster.title


function makeYourOwnPosterClick () {
  //when this method is invoked by a click, the original poster disappears
  hidePoster (mainPosterContainer) 
  //and the form APPEARS in its place
  revealForm (makeYourOwnPosterForm)
}

function hidePoster (element) {
  //poster disappears to make space for form 
  console.log('the hide poster method has been invoked')
  element.classList.add("hidden")
}

function revealForm (element) {
  //form's inputs appear
  console.log('the reveal form method has been invoked')
  element.classList.remove("hidden")
}

function showSavedPostersButtonClick () {
  hidePoster (mainPosterContainer);
  showSavedPostersSection (savedPostersSection);
}

function showSavedPostersSection (element) {
  console.log('the show saved posters method has been invoked')
  //shows poster grid
  element.classList.remove("hidden")
}

function nevermindTakeMeBackButtonClick () {
  console.log('the nevermind method has been invoked')
  //return to main with poster, no form
  revealPoster (mainPosterContainer);
  hideForm (makeYourOwnPosterForm)
}

function backToMainButtonClick () {
  console.log('the back to main method has been invoked')
  //return to main with poster, no grid
  revealPoster (mainPosterContainer);
  hideSavedPosters (savedPostersSection)
}

function revealPoster (element) {
  console.log('the reveal poster method has been invoked')
  element.classList.remove("hidden")
}

function hideForm (element) {
  console.log('the hide form method has been invoked')
  element.classList.add("hidden")
}

function hideSavedPosters (element) {
  console.log('the hide form method has been invoked')
  element.classList.add("hidden")
}

function showMyPosterClick(event) {
  console.log('the Show My Poster Click method has been invoked')
  // console.log('image input: ', imageInput)
  event.preventDefault();
  //user poster deets
  var imageInputValue = imageInput.value;
  var titleInputValue = titleInput.value;
  var quoteInputValue = quoteInput.value;
  console.log('title input: ', titleInputValue)
  console.log('quote input: ', quoteInputValue)
   //create user's poster
  currentPoster = createPoster(imageInputValue, titleInputValue, quoteInputValue);
  console.log('image url: ', currentPoster.imageURL)
   //update the DOM
   posterImage.src = currentPoster.imageURL;
   posterTitle.innerText = currentPoster.title;
   posterQuote.innerText = currentPoster.quote;

  //save title input  
  console.log('current poster title: ', currentPoster.title)
  titles.push(currentPoster.title)
  //save image input  
  images.push(currentPoster.imageURL)
  //save quote input 
  console.log('updated quote array: ', quotes)
  quotes.push(currentPoster.quote)
  
  nevermindTakeMeBackButtonClick (); 
}

function saveThisPosterClick () {
  console.log('saved poster array: ', savedPosters)
  //add current poster to saved poster array
  savedPosters.push(currentPoster)

  //make sure no duplicates are included in the array
  savedPosters = [...new Set(savedPosters)]
  console.log('updated saved poster array: ', savedPosters)

  //make poster mini (should this be a helper method?
  //need help with global variables (does latest assignment overwrites previous ones?)
  createMiniPoster (currentPoster)

  //put the mini-poster into the miniposter grid

  savedPostersGrid.appendChild(miniPoster)
}

function createMiniPoster (currentPoster) {
  //1. create a new html article element for the mini poster
  var miniPoster = document.createElement('article');
  console.log('a mini poster element has been created')
  //2. set mini poster's attributes
  miniPoster.classList.add('mini-poster')
  //3.add poster html content based on currentPoster
  miniPoster.innerHTML = `
  <img class="poster-img" src="${currentPoster.imageURL}" alt="nothin' to see here">
  <h2 class="poster-title">${currentPoster.title}</h1>
  <h3 class="poster-quote">${currentPoster.quote}</h3>
  `;
  
}
   


// // function createMiniPoster () {
//   var miniCurrent = currentPoster.classList.add(mini-poster)
//     //1. create a  miniposter container
//     const miniPosterContainer = document.createElement('div');
//     miniPosterContainer.classList.add('mini-poster');

//     //2. create mini poster elements from current poster elements 
//     //mini title elements
//     var miniPosterTitleText = currentPoster.title;
//     var miniPosterTitle = document.createElement('h1')
//     miniPosterTitle.classList.add()
//     //mini image elements
//     var miniPosterImage = currentPoster.imageURL.classList.add('mini-poster img')
//     //mini quote elements
//     var miniPosterQuote = currentPoster.quote.classList.add('mini-poster h2')
// }

function addPosterToGrid () {
  //add saved posters to the grid
  console.log('current poster: ', currentPoster)
  savedPostersGrid.innerHTML += currentPoster  
}





 //Show Saved Posters button 
 //we should see the saved posters section where 
 //all posters in the savedPosters array 
 //should be displayed as little mini posters 
 //in the saved posters grid section (again, no duplicates)












// function saveInputData () {
//   //save image input
//   // images.push(currentPoster.imageURL)
//   // console.log('updated image url array: ', images)
  
//   //save title input
//   console.log('updated title array: ', titles)
//   console.log('current poster title: ', currentPoster.title)
//   titles.push(currentPoster.title)
  

//   //save quote input
//   quotes.push(currentPoster.quote)
//   console.log('updated quote array: ', quotes)
// }
//In the new poster form view, users should be able to fill out 
//the three input fields and then hit the Show My Poster button


// function displayDogName(event) {
//   event.preventDefault(); // Prevents the default form behavior
//   var dogName = input.value; // Get the value from the input
//   headerText.innerText = dogName; // Update the header with the input value