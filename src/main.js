//query Selectors and variables here 
var savedPosters = [];
var randomPoster;
var currentPoster;
var createPosterButton = document.querySelector('.show-form');
var randomButton = document.querySelector('.show-random');
var currentImage = document.querySelector('.poster-img');
var currentTitle = document.querySelector('.poster-title');
var currentQuote = document.querySelector('.poster-quote');
var mainPoster = document.querySelector('.main-poster');
var posterForm = document.querySelector('.poster-form');
var savedForm = document.querySelector('.saved-posters');
var showPosterButton = document.querySelector('.make-poster');
var imageInput = document.querySelector('#poster-image-url');
var titleInput = document.querySelector('#poster-title');
var quoteInput = document.querySelector('#poster-quote');
var backButton = document.querySelector('.show-main');
var saveButton = document.querySelector('.save-poster');
var showSavedButton = document.querySelector('.show-saved');
var backToMainButton = document.querySelector('.back-to-main');
var savedGrid = document.querySelector('.saved-posters-grid');


// event listeners go here 👇
window.addEventListener('load', showRandomPoster);
randomButton.addEventListener('click', showRandomPoster);

createPosterButton.addEventListener('click', makeOwnPoster)

showPosterButton.addEventListener('click', createOwnPoster, false);

backButton.addEventListener('click', returnHome);

saveButton.addEventListener('click', savePoster);

showSavedButton.addEventListener('click', showSaved);

backToMainButton.addEventListener('click', backMain);

// event handlers go here 👇

// functions here 
// (we've provided two to get you started)!

function backMain(){
  hide(savedForm);
  show(mainPoster);
}

function showSaved(){
  hide(mainPoster);
  show(savedForm);
    savedGrid.innerHTML = ''
      for (var i = 0; i < savedPosters.length; i++) {
        savedGrid.innerHTML += `
        <article class="mini-posters" id="${savedPosters[i].id}">
          <img class="mini-poster img" src="${savedPosters[i].imageURL}">
          <h2 class="mini-poster-title"> ${savedPosters[i].title}</h2>
          <h4 class="poster-quote"> ${savedPosters[i].quote}</h4>
        </article>`
      }
};

function savePoster(){
  if(savedPosters.length === 0){
  savedPosters.push(currentPoster);
  return;
  }
  for(var i = 0; i <savedPosters.length ; i++){
     if(savedPosters[i].id == currentPoster.id){
       return;
    }
  }
  savedPosters.push(currentPoster);
  }


function returnHome(){
  hide(posterForm);
  show(mainPoster);
}
function hide(element){
  element.classList.add('hidden');
}

function show(element){
  element.classList.remove('hidden');
}

function createOwnPoster(event){
  var image = imageInput.value;
  var title = titleInput.value;
  var quote = quoteInput.value;
  images.push(image);
  titles.push(title);
  quotes.push(quote);
  currentPoster = createPoster(image, title, quote);
  currentImage.src = currentPoster.imageURL;
  currentTitle.innerText = currentPoster.title;
  currentQuote.innerText = currentPoster.quote;
  event.preventDefault();
  hide(posterForm);
  show(mainPoster);
}

function makeOwnPoster(){
  hide(mainPoster);
  show(posterForm);
}

function showRandomPoster(){
  currentPoster = createRandomPoster();
  currentImage.src = currentPoster.imageURL;
  currentTitle.innerText = currentPoster.title;
  currentQuote.innerText = currentPoster.quote;
  }

function createRandomPoster(){
  var randImg = images[getRandomIndex(images)];
  var randTitle = titles[getRandomIndex(titles)];
  var randQuote = quotes[getRandomIndex(quotes)];
  var randomPoster = createPoster(randImg, randTitle, randQuote);
  return randomPoster;
}

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