// query selector variables go here 👇
var title = document.querySelector(".poster-title");
var quote = document.querySelector(".poster-quote");
var image = document.querySelector(".poster-img");

// event listeners go here 👇

window.addEventListener('load', generatePoster);


// functions and event handlers go here 👇
// (we've provided one for you to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}



function generatePoster() {
  image.src = images[getRandomIndex(images)];
  title.innerText = titles[getRandomIndex(titles)];
  quote.innerText = quotes[getRandomIndex(quotes)];
};
