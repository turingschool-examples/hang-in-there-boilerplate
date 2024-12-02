// query selector variables go here 👇
var posterImage = document.querySelector('.poster-img');
var posterTitle = document.querySelector('.poster-title');
var posterQuote = document.querySelector('.poster-quote');
var newRandomPoster = document.querySelector('.show-random');
var makeYourOwnPosterButton = document.querySelector('.show-form');
var showSavedPostersButton = document.querySelector('.show-saved');
var backToMainButton = document.querySelector('.back-to-main');
var takeMeBackButton = document.querySelector('.show-main');
var showMyPosterButton = document.querySelector('.make-poster');
var saveThisPosterButton = document.querySelector('.save-poster');
var posterFormSection = document.querySelector('.poster-form');
var mainPosterSection = document.querySelector('.main-poster');
var savedPostersSection = document.querySelector('.saved-posters');
var posterImageInput = document.querySelector('#poster-image-url');
var posterTitleInput = document.querySelector('#poster-title');
var posterQuoteInput = document.querySelector('#poster-quote');
var savedPostersGrid = document.querySelector('.saved-posters-grid');


// we've provided you with some data to work with 👇
// tip: you can tuck this data out of view with the dropdown found near the line number where the variable is declared 
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
var currentPoster = {

};

// event listeners go here 👇

newRandomPoster.addEventListener('click', makeRandomPoster);
makeYourOwnPosterButton.addEventListener('click', switchToForm);
showSavedPostersButton.addEventListener('click', switchToSavedPosters);
backToMainButton.addEventListener('click', switchToMain);
takeMeBackButton.addEventListener('click', switchToMain);
showMyPosterButton.addEventListener('click', handleAllEvents);
saveThisPosterButton.addEventListener('click', savePoster);


// functions and event handlers go here 👇
// (we've provided two to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
};

function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(), 
    imageURL: imageURL, 
    title: title, 
    quote: quote
  }
};

function newPosterObject() {
  currentPoster = createPoster (posterImageInput.value, posterTitleInput.value, posterQuoteInput.value);
};

function makeMyPoster() {
  var currentImage = posterImageInput.value;
  var currentTitle = posterTitleInput.value;
  var currentQuote = posterQuoteInput.value;
  posterQuote.innerHTML = currentQuote;
  posterTitle.innerHTML = currentTitle;
  posterImage.src = currentImage;
};

function pushToArrays() {
  images.push(currentPoster.imageURL)
  titles.push(currentPoster.title)
  quotes.push(currentPoster.quote)
};

function handleAllEvents() {
  newPosterObject();
  switchToMain();
  event.preventDefault();
  makeMyPoster();
  pushToArrays();
}


// function testThis() {
//   var currentPoster = createPoster(posterImageInput.value, posterTitleInput.value, posterQuoteInput.value)
//   console.log(currentPoster);
//   return currentPoster;
// }
// function showMyPosterHandler() {
//   var currentPoster = createPoster(posterImageInput.value, posterTitleInput.value, posterQuoteInput.value)
//   console.log('current poster: ', currentPoster);
//   return currentPoster
// }

//declare querySElectors variables for each poster element via id names
//declare show my poster button variable
//declare variables to store input values
//pass the input values from the form as arguments in the createPoster function
//push the input values to their respective arrays
//store the createPoster return in the current poster variable [invoke as the value of currentPoster]
//write event listener
//create variables to 

function makeRandomPoster() {
  var randomImage = images[getRandomIndex(images)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomQuote = quotes[getRandomIndex(quotes)];
  posterQuote.innerHTML = randomQuote;
  posterTitle.innerHTML = randomTitle;
  posterImage.src = randomImage;
};


makeRandomPoster();


function switchToForm() {
  posterFormSection.classList.remove('hidden');
  mainPosterSection.classList.add('hidden');
};

function switchToSavedPosters() {
  savedPostersSection.classList.remove('hidden');
  mainPosterSection.classList.add('hidden');
};

function switchToMain() {
  mainPosterSection.classList.remove('hidden');
  posterFormSection.classList.add('hidden');
  savedPostersSection.classList.add('hidden');
};

savedPostersGrid.innerHTML = `
  <div class="mini-poster saved-posters-grid"> </div>
  `;
  
var miniPosters = document.querySelector('.mini-poster');

//what the hell is happening here?

  function savePoster() {
    // savedPosters.forEach((object) => if (currentPoster.id !== object.id) {  
    // savedPosters.push(currentPoster)});
      // for (var i = -1; i < savedPosters.length; i++) {
      //  var savedPosterCheck = savedPosters.find((object) => object.id === currentPoster.id)
      //  if (savedPosterCheck = undefined) { 
        // if (currentPoster.id !== savedPosters[0].id) {
        var arrayCheck = savedPosters.find(object => object.id === currentPoster.id);
        if (arrayCheck === undefined) {
          console.log('arrayCheck result: ', arrayCheck)
          savedPosters.push(currentPoster);
          miniPosters.insertAdjacentHTML('afterbegin', `
            <div class="mini-poster">
              <img src="${currentPoster.imageURL}" alt="motivational poster image">
              <h2>${currentPoster.title}</h2>
              <h4>${currentPoster.quote}</h4>
            </div>
            `)
        };
  // }
};
  
      

    // function postCurrentPoster() {
    //   miniPosters.insertAdjacentHTML('afterbegin', `
    //   <div class="mini-poster">
    //   <img src="${currentPoster.imageURL}" alt="motivational poster image">
    //   <h2>${currentPoster.title}</h2>
    //   <h4>${currentPoster.quote}</h4>
    //   </div>
    //    `
    // )
    // };
  
    // function handleSaveClick() {
    //   savePoster();
    //   postCurrentPoster();
    // };
 
