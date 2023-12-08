// query selector variables go here 👇
var poster = document.querySelector('.poster-img')
var quote = document.querySelector('.poster-quote');
var title = document.querySelector('.poster-title');
var randomPosterButton = document.querySelector('.show-random');
var formButton = document.querySelector('.show-form'); 
var posterForm = document.querySelector('.poster-form hidden')
var frontPagePoster = document.querySelector('.main-poster')
var hidden = document.querySelector('.hidden');
var showSavedPostersButton = document.querySelector('.show-saved');
var savedPosters = document.querySelector('.saved-posters hidden')
var neverMindButton = document.querySelector('.show-main');
var imageTextBox = document.querySelector('#poster-image-url')
var titleTextBox = document.querySelector('#poster-title')
var quoteTextBox = document.querySelector('#poster-quote')
var makePosterButton = document.querySelector('.make-poster')
var formForPoster = document.querySelector('formforposter')
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
// poster.addEventListener('DOMContentLoaded', getRandomIndex)

// button.addEventListener("click", getRandomIndex);

formButton.addEventListener('click', hideMainPoster) 

function hideMainPoster(){
  frontPagePoster.className = "poster-main hidden"
  hidden.classList.remove('hidden')
}

showSavedPostersButton.addEventListener('click', showSavedPosters)

function showSavedPosters(){
  frontPagePoster.className = "poster-main hidden";

  posterForm.className= 'poster-form hidden';
  }

makePosterButton.addEventListener('click', revertPage)

function revertPage(e){
  e.preventDefault();
  hidden.classList.add('hidden')
  frontPagePoster.className = "poster-main";
}

neverMindButton.addEventListener('click', goToMainPage)

function goToMainPage(){
  hidden.classList.add('hidden')
  frontPagePoster.className = "poster-main";
}

var storedTitle; 
storedTitle = titleTextBox.value; 
// console.log(storedTitle);

var storedQuote; 
storedQuote = quoteTextBox.value;
// console.log(storedQuote);
title.innerHTML = storedTitle; 
quote.innerHTML = storedQuote; 



// On the new poster form view, users should be able to fill out the three input fields and then hit the Show My Poster button
// on poster form, users will be able to input values into the three text boxes. 
// user will be able to click on the save poster button 
// will need to grab id/class for the 3 text boxes

// ___.addEventListener('submit', function(event){
//   event.preventDefault()
// })

// ____.addEventListener("dblclick", (event){
//   delete ...
// }
// functions and event handlers go here  👇
// (we've provided two to get you started)!

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length); 
}

var titleIndex = getRandomIndex(titles);
// console.log(titleIndex);

var quoteIndex = getRandomIndex(quotes);
// console.log(quoteIndex);
 
poster.src = images[getRandomIndex(images)]
  title.innerText = titles[titleIndex]; 
  quote.innerText = quotes[quoteIndex];

function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(), 
    imageURL: imageURL, 
    title: title, 
    quote: quote
  }
}

function createUniquePoster(imageURL, title, quote) {
  return {
    id: Date.now(), 
    imageURL: imageURL, 
    title: title, 
    quote: quote
  }
}

function createNewPoster(){
  var userPoster = createUniquePoster(images, storedTitle, storedQuote)
  title.innerHTML = storedTitle; 
  quote.innerHTML = storedQuote; 
  return userPoster; 
}

randomPosterButton.addEventListener('click', createRandomPoster)

function createRandomPoster() {
  var newPoster = createPoster(images[getRandomIndex(images)], titles[titleIndex], quotes[quoteIndex])
  poster.src = images[getRandomIndex(images)]
  title.innerText = titles[getRandomIndex(titles)]; 
  quote.innerText = quotes[getRandomIndex(quotes)];
}
// When a user clicks the “Make Your Own Poster” button, we should see the form, and the main poster should be hidden
// make your own poster button 
// addEventListener click
// when click the poster button, should show the form 
// when click the poster butotn, the main poster should be hidden 