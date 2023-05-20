//query Selectors and variables here 
var savedPosters = [];
var randomPoster;
var currentPoster;

var createPosterButton = document.querySelector('.show-form');
var randomButton = document.querySelector('.show-random');
var showPosterButton = document.querySelector('.make-poster');
var backButton = document.querySelector('.show-main');
var saveButton = document.querySelector('.save-poster');
var showSavedButton = document.querySelector('.show-saved');
var backToMainButton = document.querySelector('.back-to-main');

var mainView = document.querySelector('.main-poster');
var currentImage = document.querySelector('.poster-img');
var currentTitle = document.querySelector('.poster-title');
var currentQuote = document.querySelector('.poster-quote');

var posterForm = document.querySelector('.poster-form');
var savedPosterView = document.querySelector('.saved-posters');
var imageInput = document.querySelector('#poster-image-url');
var titleInput = document.querySelector('#poster-title');
var quoteInput = document.querySelector('#poster-quote');
var savedGrid = document.querySelector('.saved-posters-grid');
// var miniPoster = document.querySelector('.mini-poster')


// event listeners go here 👇
window.addEventListener('load', showRandomPoster);

randomButton.addEventListener('click', showRandomPoster);

savedPosterView.addEventListener('dblclick', function(e) {
  deletePoster(e)
});

createPosterButton.addEventListener('click', makeOwnPoster)

showPosterButton.addEventListener('click', function(event) {
  createOwnPoster(event)
});

backButton.addEventListener('click', returnHome);

saveButton.addEventListener('click', savePoster);

showSavedButton.addEventListener('click', showSaved);

backToMainButton.addEventListener('click', backMain);

// miniPoster.addEventListener('dblclick', deletePoster);

// event handlers go here 👇

// functions here 
// (we've provided two to get you started)!

function backMain(){
  hide(savedPosterView);
  show(mainView);
}

function showSaved(){
  savedGrid.innerHtml = ''
  hide(mainView);
  show(savedPosterView);
      for (var i = 0; i < savedPosters.length; i++) {
        console.log(savedPosters)
        savedGrid.innerHTML += `
        <article class="mini-poster" id="${savedPosters[i].id}">
          <img class="mini-poster img" src="${savedPosters[i].imageURL}">
          <h2 class="mini-poster-title"> ${savedPosters[i].title}</h2>
          <h4 class="poster-quote"> ${savedPosters[i].quote}</h4>
        </article>`
      }
};

function savePoster(){
  if (savedPosters.length === 0){
      savedPosters.push(currentPoster);
      return;
  }
    for (var i = 0; i <savedPosters.length ; i++){
     if(savedPosters[i].id === currentPoster.id){
       return;
    }
  }
  savedPosters.push(currentPoster);
  }
  
function returnHome(){
  hide(posterForm);
  show(mainView);
}
function hide(element){
  element.classList.add('hidden');
}

function show(element){
  element.classList.remove('hidden');
}

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
}

function makeOwnPoster(){
  hide(mainView);
  show(posterForm);
}

function deletePoster(e) {
  for (var i = 0; i < savedPosters.length; i++) {
    if (parseInt(e.target.closest('article').id) === savedPosters[i].id) {
      savedPosters.splice(i, 1);
      console.log(savedPosters)
    }
    hide()
  }
  showSaved()
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