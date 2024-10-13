// query selector variables go here 👇

// buttons
let savePosterButton = document.querySelector('.save-poster'),                          // saves the poster to the poster array
    showSavedButton = document.querySelector('.show-saved'),                            // shows the saved posters page
    showRandomButton = document.querySelector('.show-random'),                          // shows a new random poster
    makePosterButton = document.querySelector('.show-form'),                            // loads the form to create a poster
    showUnmotivationalPostersButton = document.querySelector('.unmotivational-posters') // shows unmotivational posters
    showMyPosterButton = document.querySelector('.make-poster')                         // loads the main page and displays the poster you created
    showMainButton = document.querySelector('.show-main'),                              // loads the main page from the make a poster form page
    backToMainButton = document.querySelector('.back-to-main'),                         // loads the main page from the saved posters page
    returnToMainButton = document.querySelector('.return-to-main')                        // loads the main page from the unmotivational posters page

// pages
let togglePosterForm = document.querySelector('.poster-form'),
    toggleMainPage = document.querySelector('.main-poster'),
    toggleSavedPosters = document.querySelector('.saved-posters'),
    toggleUnmotivationalPosters = document.querySelector('.unmotivational-posters-page'),
    clickToDelete = document.querySelector('.click-to-delete'),
    savedPostersGrid = document.querySelector('.saved-posters-grid'),
    unmotivationalPostersGrid = document.querySelector('.unmotivational-posters-grid')

// user inputs
let newPosterURL = document.querySelector('#poster-image-url'),
    newPosterTitle = document.querySelector('#poster-title'),
    newPosterQuote = document.querySelector('#poster-quote')
    
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
let unmotivationalPosters = [
  {
    name: "FAILURE",
    description: "Why bother trying? It's probably not worth it.",
    price: 68.00,
    year: 2019,
    vintage: true,
    img_url: "./assets/failure.jpg",
  },
  {
    name: "MEDIOCRITY",
    description: "Dreams are just that—dreams.",
    price: 127.00,
    year: 2021,
    vintage: false,
    img_url: "./assets/mediocrity.jpg",
  },
  {
    name: "REGRET",
    description: "Hard work rarely pays off.",
    price: 89.00,
    year: 2018,
    vintage: true,
    img_url:  "./assets/regret.jpg",
  },
  {
    name: "FUTILITY",
    description: "You're not good enough.",
    price: 150.00,
    year: 2016,
    vintage: false,
    img_url:  "./assets/futility.jpg",
  },
  {
    name: "DEFEAT",
    description: "It's too late to start now.",
    price: 35.00,
    year: 2023,
    vintage: false,
    img_url:  "./assets/defeat.jpg",
  },
  {
    name: "HOPELESSNESS",
    description: "Stay in your comfort zone; it's safer.",
    price: 112.00,
    year: 2020,
    vintage: true,
    img_url: "./assets/hopelessness.jpg",
  },
  {
    name: "LAZINESS",
    description: "You can't change anything.",
    price: 25.00,
    year: 2022,
    vintage: false,
    img_url: "./assets/laziness.jpg",
  },
  {
    name: "PROCRASTINATION",
    description: "Better to avoid failure by not trying at all.",
    price: 48.00,
    year: 2017,
    vintage: true,
    img_url: "./assets/procrastination.jpg",
  },
  {
    name: "DESPAIR",
    description: "Let someone else do it; you’ll just mess it up.",
    price: 73.00,
    year: 2015,
    vintage: false,
    img_url: "./assets/despair.jpg",
  },
  {
    name: "NEGLECT",
    description: "Happiness is overrated.",
    price: 160.00,
    year: 2019,
    vintage: true,
    img_url: "./assets/neglect.jpg",
  },
  {
    name: "FEAR",
    description: "Giving up is always an option.",
    price: 91.00,
    year: 2014,
    vintage: false,
    img_url: "./assets/fear.jpg",
  },
  {
    name: "APATHY",
    description: "No one cares about your effort.",
    price: 110.00,
    year: 2016,
    vintage: true,
    img_url: "./assets/apathy.jpg",
  },
  {
    name: "MISERY",
    description: "Why take risks when you can stay stagnant?",
    price: 55.00,
    year: 2021,
    vintage: false,
    img_url: "./assets/misery.jpg",
  },
  {
    name: "BLAME",
    description: "Expect disappointment and you'll never be disappointed.",
    price: 39.00,
    year: 2017,
    vintage: true,
    img_url: "./assets/blame.jpg",
  },
  {
    name: "DOUBT",
    description: "Success is for other people, not you.",
    price: 140.00,
    year: 2020,
    vintage: false,
    img_url: "./assets/doubt.jpg",
  }
];

var savedPosters = [];
var cleanPosters = [];
var currentPoster;

// event listeners go here 👇
Window.onload = initialSetup();

showRandomButton.addEventListener('click', buildPoster);
savePosterButton.addEventListener('click', savePoster);
showMyPosterButton.addEventListener('click', showCreatedPoster);
showSavedButton.addEventListener('click', showSavedPosters);
showUnmotivationalPostersButton.addEventListener('click', showUnmotivationalPosters)
makePosterButton.addEventListener('click', function() {
  toggle(togglePosterForm, toggleMainPage) });
showMainButton.addEventListener('click', function() {
  toggle(togglePosterForm, toggleMainPage) });
backToMainButton.addEventListener('click', function() {
  toggle(toggleSavedPosters, toggleMainPage) });
returnToMainButton.addEventListener('click', function() {
  toggle(toggleUnmotivationalPosters, toggleMainPage) });
clickToDelete.addEventListener('dblclick', deletePoster);

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
    quote: quote}
}

function initialSetup() {
  cleanData()
  buildPoster()
}

function cleanData() {
  unmotivationalPosters.forEach(poster => {
    cleanPoster = {
      imageURL: poster.img_url,
      title: poster.name,
      quote: poster.description
    }

    cleanPosters.push(cleanPoster)
  })
}

function toggle(show, hide) {
  show.classList.toggle('hidden')
  hide.classList.toggle('hidden')
  cleanPage()
}

function cleanPage() {
  while(savedPostersGrid.hasChildNodes()) {
    savedPostersGrid.removeChild(savedPostersGrid.firstChild);
  }

  while(unmotivationalPostersGrid.hasChildNodes() === true) {
    unmotivationalPostersGrid.removeChild(unmotivationalPostersGrid.firstChild);
  }
}

function buildPoster() {
  var imageIndex = getRandomIndex(images);
  var titleIndex = getRandomIndex(titles);
  var quoteIndex = getRandomIndex(quotes);

  currentPoster = createPoster(images[imageIndex], titles[titleIndex], quotes[quoteIndex]);

  document.querySelector('.poster-img').src = currentPoster.imageURL;
  document.querySelector('.poster-title').innerHTML = currentPoster.title
  document.querySelector('.poster-quote').innerHTML = currentPoster.quote;
}


function savePoster() {
  if(!savedPosters.includes(currentPoster)) {
    savedPosters.push(currentPoster)
  }
}

function showSavedPosters() {
  toggle(toggleSavedPosters, toggleMainPage)

  savedPosters.forEach(poster => {
    let posterContainer = document.createElement('article');
    posterContainer.classList.add('mini-poster')
      
    let posterImage = document.createElement('img');
    posterImage.src = poster.imageURL;
    posterContainer.appendChild(posterImage);
      
    let posterTitle = document.createElement('h2');
    posterTitle.textContent = poster.title;
    posterContainer.appendChild(posterTitle);

    let posterQuote = document.createElement('h4');
    posterQuote.textContent = poster.quote;
    posterContainer.appendChild(posterQuote);

    savedPostersGrid.appendChild(posterContainer);
  })
}

function showCreatedPoster() {
  event.preventDefault()
  let posterURL = newPosterURL.value
  let posterTitle = newPosterTitle.value
  let posterQuote = newPosterQuote.value

  currentPoster = createPoster(posterURL, posterTitle, posterQuote)

  images.push(posterURL);
  titles.push(posterTitle);
  quotes.push(posterQuote);

  document.querySelector('.poster-img').src = posterURL;
  document.querySelector('.poster-title').innerHTML = posterTitle;
  document.querySelector('.poster-quote').innerHTML = posterQuote;

  newPosterURL.value = "";
  newPosterTitle.value = "";
  newPosterQuote.value = "";
  
  toggle(togglePosterForm, toggleMainPage);
}

function showUnmotivationalPosters() {
  toggle(toggleUnmotivationalPosters, toggleMainPage)

  let arrayIndex = 0;

  cleanPosters.forEach(poster => {
    let posterContainer = document.createElement('article');
    posterContainer.classList.add('mini-poster');
    posterContainer.classList.add('unmotivatioanal-mini-poster');
    posterContainer.id = (`${arrayIndex}`);
    arrayIndex += 1;
      
    let posterImage = document.createElement('img');
    posterImage.src = poster.imageURL;
    posterContainer.appendChild(posterImage);
      
    let posterTitle = document.createElement('h2');
    posterTitle.textContent = poster.title;
    posterContainer.appendChild(posterTitle);

    let posterQuote = document.createElement('h4');
    posterQuote.textContent = poster.quote;
    posterContainer.appendChild(posterQuote);

    unmotivationalPostersGrid.appendChild(posterContainer);
  })
}

function deletePoster() {
  let targetTag = event.target.tagName.toLowerCase();
  if (targetTag === 'img' || targetTag ==='h2' || targetTag === 'h4') {
    let parentNode = event.target.parentNode;
    let parentNodeId = parseInt(parentNode.id, 10);

    cleanPosters.splice(parentNodeId, 1);
    parentNode.remove();
  }
}