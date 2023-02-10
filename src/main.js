// query selector variables go here 👇

var randomPosterImg = document.querySelector('.poster-img')
var randomPosterTitle = document.querySelector('.poster-title')
var randomPosterQuote = document.querySelector('.poster-quote')
var randomPosterBtn = document.querySelector('.show-random')
var makePosterBtn = document.querySelector('.show-form');
var viewForm = document.querySelector('.poster-form');
var viewHome = document.querySelector('.main-poster');
var savePosterBtn = document.querySelector('.show-saved');
var savedPage = document.querySelector('.saved-posters');
var backToMainBtn = document.querySelector('.back-to-main');
var takeMeBackBtn = document.querySelector('.show-main');



// we've provided you with some data to work with 👇

var savedPosters = [];
var currentPoster;

// event listeners go here 👇

window.addEventListener('load', randomPoster)
randomPosterBtn.addEventListener('click', randomPoster)
makePosterBtn.addEventListener('click', changeViewToForm);
savePosterBtn.addEventListener('click', viewSavedPoster);
backToMainBtn.addEventListener('click', changeViewToHome);
takeMeBackBtn.addEventListener('click', changeViewToHome);

// functions and event handlers go here 👇
// (we've provided one for you to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function randomPoster() {
currentPoster = new Poster(images[getRandomIndex(images)], titles[getRandomIndex(titles)], quotes[getRandomIndex(quotes)])
addPosterToDom()  
}

function addPosterToDom() {
randomPosterImg.src = currentPoster.imageURL
randomPosterTitle.innerText = currentPoster.title
randomPosterQuote.innerText = currentPoster.quote
}

function changeViewToForm(){
viewForm.classList.remove('hidden');
viewHome.classList.add('hidden');
}
function viewSavedPoster (){
savedPage.classList.remove('hidden');
viewHome.classList.add('hidden');

}
function changeViewToHome(){
  viewHome.classList.remove('hidden');
  viewForm.classList.add('hidden');
  savedPage.classList.add('hidden');
}
