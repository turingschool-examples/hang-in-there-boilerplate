// query selector variables go here 👇
var title = document.querySelector(".poster-title");
var quote = document.querySelector(".poster-quote");
var image = document.querySelector(".poster-img");
var showRandomPosterBtn = document.querySelector(".show-random");
var makeYourOwnPosterBtn = document.querySelector(".show-form");
var formPage = document.querySelector(".poster-form");
var mainPage = document.querySelector(".main-poster");

// event listeners go here 👇
window.addEventListener("load", generatePoster);
showRandomPosterBtn.addEventListener("click", generatePoster);
makeYourOwnPosterBtn.addEventListener("click", showFormPage);

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

function showFormPage() {
  mainPage.classList.add("hidden");
  formPage.classList.remove("hidden");
}
