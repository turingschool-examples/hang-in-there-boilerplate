// query selector variables go here 👇

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

// functions and event handlers go here 👇
// (we've provided one for you to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

var posterImage = document.querySelector('.poster-img')

var posterTitle = document.querySelector('.poster-title')

var posterQuote = document.querySelector('.poster-quote')

var randomButton = document.querySelector('.show-random')

var makeYourOwnButton = document.querySelector('.show-form')

var posterForm = document.querySelector('.poster-form')

var mainPagePoster = document.querySelector('.main-poster')

var showSavedPosterButton = document.querySelector('.show-saved')

var savedPostersSection = document.querySelector('.saved-posters')

var backToMainButton = document.querySelector('.back-to-main')

var nevermindTakeMeBackButton = document.querySelector('.show-main')

var saveThisPosterButton = document.querySelector('.save-poster')

var imageInput = document.querySelector('#poster-image-url')

var titleInput = document.querySelector('#poster-title')

var quoteInput = document.querySelector('#poster-quote')

var showMyPoster = document.querySelector('.make-poster')

var showSavedPostersGrid = document.querySelector('.saved-posters-grid')

//inputs for create your own motivational poster on form page
var imageInput = document.querySelector('#poster-image-url');
var titleInput = document.querySelector('#poster-title');
var quoteInput = document.querySelector('#poster-quote');
var showMyPoster = document.querySelector('.make-poster');





function generatePoster() {
  currentPoster = new Poster(images[getRandomIndex(images)], titles[getRandomIndex(titles)], quotes[getRandomIndex(quotes)])

  posterImage.src = currentPoster.imageURL //updating the image url source attribute and setting it equal to the value of currentposter.imageURL
  posterTitle.innerText = currentPoster.title
  posterQuote.innerText = currentPoster.quote
};

function showForm(){
  posterForm.classList.remove('hidden')
  mainPagePoster.classList.add('hidden')
// create a function that when its clicked, it becomes unhidden
};

function showSavedPosters() {
  savedPostersSection.classList.remove('hidden')
  mainPagePoster.classList.add('hidden')
  displaySavedPostersGrid();
};

function backToMain() {
  savedPostersSection.classList.add('hidden')
  mainPagePoster.classList.remove('hidden')
};



function generateCustomPoster(event) {
  event.preventDefault();

  currentPoster = new Poster(imageInput.value, titleInput.value, quoteInput.value)

  images.push(imageInput.value);
  titles.push(titleInput.value);
  quotes.push(quoteInput.value);


  posterImage.src = currentPoster.imageURL
  posterTitle.innerText = currentPoster.title
  posterQuote.innerText = currentPoster.quote

  posterForm.classList.add('hidden')
  mainPagePoster.classList.remove('hidden')

  // savedPosters.push(currentPoster);

};

function takeMeBack() {
  posterForm.classList.add('hidden')
  mainPagePoster.classList.remove('hidden')
}

function generateCustomPoster(event) {
  event.preventDefault();

currentPoster = new Poster(imageInput.value, titleInput.value, quoteInput.value)

images.push(imageInput.value);
titles.push(titleInput.value);
quotes.push(quoteInput.value);

posterImage.src = currentPoster.imageURL
posterTitle.innerText = currentPoster.title
posterQuote.innerText = currentPoster.quote

posterForm.classList.add('hidden')
mainPagePoster.classList.remove('hidden')
};



function saveMainPoster() {
  if (!savedPosters.includes(currentPoster)) {
    savedPosters.push(currentPoster)
  }
}

function displaySavedPostersGrid() {
    showSavedPostersGrid.innerHTML = "";
    for(var i = 0; i < savedPosters.length; i++) {
      showSavedPostersGrid.innerHTML += `
        <article class="mini-poster" id=${savedPosters[i].id}>
          <img src="${savedPosters[i].imageURL}" alt="nothin' to see here">
          <h2>${savedPosters[i].title}</h2>
          <h4>${savedPosters[i].quote}</h4>
        </article>`
  }
}

function deletePoster() {
  for (var i = 0; i < savedPosters.length; i++) {
    if (savedPosters[i].id === Number(event.target.parentNode.id)) {
      savedPosters.splice(i, 1);
    }
  }
  showSavedPosters();
};


window.addEventListener("load", generatePoster);
randomButton.addEventListener("click", generatePoster);
makeYourOwnButton.addEventListener("click", showForm);
showSavedPosterButton.addEventListener("click", showSavedPosters);
backToMainButton.addEventListener("click", backToMain);
showMyPoster.addEventListener("click", generateCustomPoster);
nevermindTakeMeBackButton.addEventListener("click", takeMeBack)
saveThisPosterButton.addEventListener("click", saveMainPoster)
showSavedPostersGrid.addEventListener("dblclick", deletePoster)

// Ive got an element, showMyPoster, I want to add a behvior for a specific event.
// I want specific behavior, when this button is clicked.
//generateCustomPoster is an event handler





//Iteration2
  //Allow the user to input
    //poster-quote.innerText = input.value;
    //poster-image.src = input.value;
    //poster-quote.innerText = input.value;
  //Click button (Event listener with this function)
    //saveButton.addEventListener("click", createCustomPoster)
  //Create object instance of poster class (see poster.js)
    //userCreatedPoster = new Poster
  //Save user input into respective arrays
    //.push()
  //Display new object on main view



//Iteration3

//Bullet 1 (check!)
  //Click "save this poster" button (event listener)
    //---> Add current poster to savedPosters arrays
          //Create object instance
          //and push into savedPosters arrays
//Bullet 2 (check!)
  //If user clicks poster more than once,
    //Poster will not be saved again
    //No duplicates!
//Bullet 3
  //Click "Show Saved Posters" ---> display saved Posters
    //Remove hidden from "saved posters" page
    //Add hidden to main page
//Bullet 4
    //Posters in savedPosters should be in grid--->CSS

//Iteration4
//Bullet 1
  //create add eventListener "DBL" for savedPoster.
  //
