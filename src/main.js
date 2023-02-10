// query selector variables go here 👇
var posterImage = document.querySelector('.poster-img')
var posterTitle = document.querySelector('.poster-title')
var posterQuote = document.querySelector('.poster-quote')
var showRandomButton = document.querySelector('.show-random')
var mainPoster = document.querySelector('.main-poster')
var posterForm = document.querySelector('.poster-form')
var showMain = document.querySelector('.show-main')
var showMain2 = document.querySelector('.back-to-main')

//make own poster section
var makePosterButton = document.querySelector('.show-form')
var ownPosterImg = document.querySelector('.poster-img')
var ownPosterTitle = document.querySelector('.poster-title')
var ownPosterQuote = document.querySelector('.poster-quote')
console.log(ownPosterImg, ownPosterTitle, ownPosterQuote, 'line14')

//show saved posters button
var showSavedButton = document.querySelector('.show-saved')
var savedPoster = document.querySelector('.saved-posters')
var saveThisPoster = document.querySelector('.save-poster')

var savedPosterGrid = document.querySelector('.saved-posters-grid')
// console.log(makePosterButton, 'line 7')
// console.log(ownPosterForm, 'line 9')

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
var savedPosters = []



var currentPoster;



// event listeners go here 👇
 
window.addEventListener('load',displayRandomPoster)
showRandomButton.addEventListener('click', displayRandomPoster)
makePosterButton.addEventListener('click', ownPosterButton)
showMain.addEventListener('click', returnToMain)
showMain2.addEventListener('click', returnToMain)
showSavedButton.addEventListener('click', showSavedPosters)
saveThisPoster.addEventListener('click', savePosterArray)
savedPosterGrid.addEventListener('dblclick', deletePoster)
 // functions and event handlers go here 👇

const hide = (element) => {
  element.classList.add("hidden");
}

const show = (element) => {
  element.classList.remove("hidden");
}

// on html files for this lines 22-36
var selfImageInput = document.querySelector('#poster-image-url')
var selfTitleInput = document.querySelector('#poster-title')
var selfQuoteInput = document.querySelector('#poster-quote')
var showOwnPoster = document.querySelector('.make-poster')
//console.log(selfImageUrl, selfPosterTitle, selfPosterQuote, showOwnPoster, "line 165")

showOwnPoster.addEventListener('click', function(){
  createOwnPoster(event)
})
// this function should be able to register the inputs
// these inputs then should be registered into a class!
//'parameters in poster insinuation should be the new variables set
// then inside of our Current poster class there should be 
// variables equal to the parameters set?
// the left value from 180 on = the 'linked' value
function goHome() {
  showMain.classList.remove('hidden')
  posterForm.classList.add('hidden')
  savedPoster.classList.add('hidden')
}
function createOwnPoster(event) {
  event.preventDefault() 
var userSelfImage = selfImageInput.value
var userSelfTitle = selfTitleInput.value
var userSelfQuote = selfQuoteInput.value
  
currentPoster = new Poster(userSelfImage, userSelfTitle, userSelfQuote)
var selfImage = document.querySelector('.poster-img')
var selfTitle = document.querySelector('.poster-title')
var selfQuote = document.querySelector('.poster-quote')

selfImage.src = currentPoster.imageURL
selfTitle.innerText = currentPoster.title
selfQuote.innerText = currentPoster.quote

images.push(userSelfImage)
titles.push(userSelfTitle)
quotes.push(userSelfQuote)
returnToMain()
}



function savePosterArray() {
  //  var posterImage = document.querySelector('.poster-img').src;
  //  var posterTitle = document.querySelector('.poster-title').textContent;
  //  var posterQuote = document.querySelector('.poster-quote').textContent;
 
  // currentPoster = new Poster(posterImage, posterTitle, posterQuote)
  //console.log('line 210', currentPoster)
if (!savedPosters.includes(currentPoster)) {
  savedPosters.push(currentPoster)
  } else {
  alert('This poster has already been saved!') 
  }
  // console.log('line 212', savedPosters)
}
function showSavedGrid() {
  var savedPosterHTML = ''
  for (var i = 0; i < savedPosters.length; i++) {
    //console.log('savedposters[i]', savedPosters[i].imageURL)
    savedPosterHTML += `
      <div class="mini-poster" id=${savedPosters[i].id}>      
        <img src=${savedPosters[i].imageURL} alt="nothin' to see here">
        <h2>${savedPosters[i].title}</h2>
        <h4>${savedPosters[i].quote}</h4>
      </div>
    
    `
  }
  savedPosterGrid.innerHTML = savedPosterHTML
}


  





// (we've provided one for you to get you started)!

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}





function displayRandomPoster() {
  
  currentPoster = new Poster (images[getRandomIndex(images)],titles[getRandomIndex(titles)],
  quotes[getRandomIndex(quotes)])
  posterImage.src = currentPoster.imageURL;
  posterTitle.innerText = currentPoster.title;
  posterQuote.innerText = currentPoster.quote;
  return currentPoster
}
function ownPosterButton() {
  console.log("ive been clicked")
 hide(mainPoster)
 show(posterForm)
}

function returnToMain() {
  hide(posterForm)
  hide(savedPoster)
  show(mainPoster)
}

function showSavedPosters() {
  hide(mainPoster)
  show(savedPoster)
  showSavedGrid()
//this is where the new function is iteration 3
// looking at savedPosters array(for loop)
// innerHTML will be used
}

function returnToMainFromSavedPosters() {
  hide(savedPoster)
  show(mainPoster)
}
// for(i = 0; i < titles.length; i++) {
  //   var randomIndex = getRandomIndex(titles);
  //   if (!savedPosters.includes(titles[randomIndex])) { // i dont think this will be exactly how we store images
//     // i think it will be similar as the store
//     savedPosters.push(titles[randomIndex])
//   }
// }
// console.log(savedPosters, "titles line 130")

// console.log('line 116', randomPosterImage)
// for(i = 0; i < images.length; i++) {
//   var randomIndex = getRandomIndex(images);
//   if (!savedPosters.includes(images[randomIndex])) { // to make sure there arent multiples
//     savedPosters.push(images[randomIndex])
//   }
// }
// console.log(savedPosters, "images line 120")



function deletePoster(event) {
  var splicePoster = event.target.id
  console.log(splicePoster, "line 305")
  for (i = 0; i < savedPosters.length; i++) {
if (savedPosters[i].id === splicePoster) {
  savedPosters.splice(i,1)
}
}
  
}