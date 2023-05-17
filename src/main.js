// query selector variables go here 👇

// we've provided you with some data to work with 👇
//query Selectors and variables here 
var savedPosters = [];
var currentPoster;

// event listeners go here 👇

// event handlers go here 👇

// functions here 
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