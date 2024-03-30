// query selector variables go here 👇
var posterImage = document.querySelector('.poster-img')
var posterTitle = document.querySelector('.poster-title')
var posterQuote = document.querySelector('.poster-quote')

//iteration 0
var randomButton = document.querySelector(".show-random")

//iteration 1
  //buttons
var makeOwnPosterButton = document.querySelector(".show-form")
var savedPostersButton = document.querySelector(".show-saved")
var nevermindButton = document.querySelector('.show-main')
var backToMainButton = document.querySelector('.back-to-main')

  //pages
var mainPosterPage = document.querySelector(".main-poster")
var makeYourOwnPosterPage = document.querySelector(".poster-form")
var savedPostersPage = document.querySelector(".saved-posters")


//iteration 2
var imageInput = document.querySelector("#poster-image-url");
var titleInput = document.querySelector("#poster-title");
var quoteInput = document.querySelector("#poster-quote");
var showMyPosterButton = document.querySelector('.make-poster');

//iteration 3
var saveThisPosterButton = document.querySelector('.save-poster');



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
//iteration 0
randomButton.addEventListener('click', getRandomContent)
//iteration 1
makeOwnPosterButton.addEventListener('click', accessMakeYourOwnPosterPage)
savedPostersButton.addEventListener('click', accessShowSavedPostersPage)
nevermindButton.addEventListener('click', returnToMainPage)
backToMainButton.addEventListener('click', returnToMainPage)
showMyPosterButton.addEventListener('click', createMyPoster)
//iteration 2

//iteration3
saveThisPosterButton.addEventListener('click', saveCurrentPoster)


// functions and event handlers go here 👇
// (we've provided two to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(), 
    imageURL: imageURL, 
    title: title, 
    quote: quote
  };
}

function createMyPoster(event){
  event.preventDefault()
  console.log("Hello")
  

  currentPoster = createPoster(imageInput.value, titleInput.value, quoteInput.value)
  console.log(currentPoster, "<>>Current Poster")
  images.push(imageInput.value)
  titles.push(titleInput.value)
  quotes.push(quoteInput.value)
  posterImage.src = currentPoster.imageURL
  posterTitle.innerText = titleInput.value
  posterQuote.innerText = quoteInput.value
  
  returnToMainPage()
}
function getRandomContent(){
  var imageIndex = getRandomIndex(images);
  var randomImage = images[imageIndex];
  
  var titleIndex = getRandomIndex(titles);
  var randomTitle = titles[titleIndex];

  var quoteIndex = getRandomIndex(quotes);
  var randomQuote = quotes[quoteIndex];

  createPoster(randomImage, randomTitle, randomQuote)
  posterImage.src = randomImage;
  posterTitle.innerText = randomTitle;
  posterQuote.innerText = randomQuote;

  currentPoster = createPoster(randomImage, randomTitle, randomQuote)
   
}
function accessMakeYourOwnPosterPage() {
  mainPosterPage.classList.add('hidden')
  makeYourOwnPosterPage.classList.remove('hidden')
  }

function accessShowSavedPostersPage(){
  mainPosterPage.classList.add('hidden')
  savedPostersPage.classList.remove('hidden')
}

function returnToMainPage() {
  mainPosterPage.classList.remove('hidden')
  savedPostersPage.classList.add('hidden')
  makeYourOwnPosterPage.classList.add('hidden')
}

function savedToMain (){
  savedPostersPage.classList.add('hidden')
  mainPosterPage.classList.remove('hidden')
}

function saveCurrentPoster() {
  if (!savedPosters.some(poster => poster.id === currentPoster.id)) {
    savedPosters.push(currentPoster);
    displaySavedPosters();
  }
}

function displaySavedPosters() {
  var savedPostersGrid = document.querySelector('.saved-posters-grid');
  savedPostersGrid.innerHTML = '';

  savedPosters.forEach(poster => {
    var posterElement = document.createElement('article');
    posterElement.classList.add('poster');
    posterElement.innerHTML = `
      <img class="poster-img" src="${poster.imageURL}" alt="nothin' to see here">
      <h1 class="poster-title">${poster.title}</h1>
      <h3 class="poster-quote">${poster.quote}</h3>
    `;
    savedPostersGrid.appendChild(posterElement);
  });
}

getRandomContent();
