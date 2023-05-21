// Global variables 👇
var savedPosters = [];
var randomPoster;
var currentPoster;

// Button querySelectors 👇
var createPosterButton = document.querySelector('.show-form');
var randomButton = document.querySelector('.show-random');
var showPosterButton = document.querySelector('.make-poster');
var backButton = document.querySelector('.show-main');
var saveButton = document.querySelector('.save-poster');
var showSavedButton = document.querySelector('.show-saved');
var backToMainButton = document.querySelector('.back-to-main');

// Main poster view 👇
var mainView = document.querySelector('.main-poster');
var currentImage = document.querySelector('.poster-img');
var currentTitle = document.querySelector('.poster-title');
var currentQuote = document.querySelector('.poster-quote');

// Form view 👇
var posterForm = document.querySelector('.poster-form');
var savedPosterView = document.querySelector('.saved-posters');
var imageInput = document.querySelector('#poster-image-url');
var titleInput = document.querySelector('#poster-title');
var quoteInput = document.querySelector('#poster-quote');
var savedGrid = document.querySelector('.saved-posters-grid');


// Event listeners go here 👇
window.addEventListener('load', showRandomPoster);
savedPosterView.addEventListener('dblclick', function(event) {
  deletePoster(event)
});

// Event listeners for buttons 👇
randomButton.addEventListener('click', showRandomPoster);
createPosterButton.addEventListener('click', makeOwnPoster)
showPosterButton.addEventListener('click', function(event) {
  createOwnPoster(event)
});
backButton.addEventListener('click', returnHome);
saveButton.addEventListener('click', savePoster);
showSavedButton.addEventListener('click', showSaved);
backToMainButton.addEventListener('click', backMain);

// Event handlers go here 👇
function showRandomPoster() {
  currentPoster = createRandomPoster();
  currentImage.src = currentPoster.imageURL;
  currentTitle.innerText = currentPoster.title;
  currentQuote.innerText = currentPoster.quote;
  };

function createOwnPoster(event){
    event.preventDefault();
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
    hide(posterForm);
    show(mainView);
    resetForm();
};

function savePoster() {
  if (savedPosters.length === 0){
      savedPosters.push(currentPoster);
        return;
  }
    for (var i = 0; i <savedPosters.length ; i++) {
      if(savedPosters[i].id === currentPoster.id) {
        return;
    }
  }
  savedPosters.push(currentPoster);
};

function showSaved() {
  savedGrid.innerHTML = ''
  hide(mainView);
  show(savedPosterView);
  for (var i = 0; i < savedPosters.length; i++) {
    savedGrid.innerHTML += `
    <article class="mini-poster" id="${savedPosters[i].id}">
      <img class="mini-poster img" src="${savedPosters[i].imageURL}">
      <h2 class="mini-poster-title"> ${savedPosters[i].title}</h2>
      <h4 class="poster-quote"> ${savedPosters[i].quote}</h4>
    </article>`
  }
};

function deletePoster(event) {
  for (var i = 0; i < savedPosters.length; i++) {
    if (parseInt(event.target.closest('article').id) === savedPosters[i].id) {
      savedPosters.splice(i, 1);
    }
  }
  showSaved();
};

// functions here 👇
function hide(element) {
  element.classList.add('hidden');
};

function show(element) {
  element.classList.remove('hidden');
};

function returnHome() {
  hide(posterForm);
  show(mainView);
};

function backMain() {
  hide(savedPosterView);
  show(mainView);
};

function resetForm() {
  imageInput.value = ''
  titleInput.value = ''
  quoteInput.value = ''
};

function makeOwnPoster(){
  hide(mainView);
  show(posterForm);
};

function createRandomPoster(){
  var randImg = images[getRandomIndex(images)];
  var randTitle = titles[getRandomIndex(titles)];
  var randQuote = quotes[getRandomIndex(quotes)];
  var randomPoster = createPoster(randImg, randTitle, randQuote);
  return randomPoster;
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(), 
    imageURL: imageURL, 
    title: title, 
    quote: quote}
};
    

