// query selector variables go here 👇

var randomPosterImg = document.querySelector('.poster-img')
var randomPosterTitle = document.querySelector('.poster-title')
var randomPosterQuote = document.querySelector('.poster-quote')
// we've provided you with some data to work with 👇

var savedPosters = [];
var currentPoster;

// event listeners go here 👇

window.addEventListener('load', randomPoster)

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

