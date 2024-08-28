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

const unmotivationalPostersData = [
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

var currentPoster;
const savedPosters = [];
const cleanedData = cleanData()
console.log(cleanedData);

const image = document.querySelector('.poster-img');
const title = document.querySelector('.poster-title');
const quote = document.querySelector('.poster-quote');
const showForm = document.querySelector('.poster-form');
const mainPoster = document.querySelector('.main-poster');
const posterGrid = document.querySelector('.saved-posters-grid');
const savedPostersSection = document.querySelector('.saved-posters');
const unmotivationalPostersSection = document.querySelector('.unmotivational-posters');

// Buttons
const nevermindButton = document.querySelector('.show-main');
const makeNewPosterButton = document.querySelector('.show-form');
const backToMainButton = document.querySelector('.back-to-main');
const showMyPosterButton = document.querySelector('.make-poster');
const randomPosterButton = document.querySelector('.show-random');
const showSavedPosterButton = document.querySelector('.show-saved');
const saveCurrentPosterButton = document.querySelector('.save-poster');
const unmotivationalPosterButton = document.querySelector('.show-unmotivational');
const backToMainFromUnmotivationalButton = document.querySelector('.unmotivational-posters .back-to-main');

// User Input Fields
const userImageUrlInput = document.querySelector('#poster-image-url');
const userTitleInput = document.querySelector('#poster-title');
const userQuoteInput = document.querySelector('#poster-quote');

// EL for Buttons
randomPosterButton.addEventListener('click', generateRandomPoster);
saveCurrentPosterButton.addEventListener('click', savePosterHandler);
showMyPosterButton.addEventListener('click', handleNewPosterCreation);
showSavedPosterButton.addEventListener('click', showSavedPostersHandler);

// Page Visibility Helper Functions
// Potentially refactor more (mainPoster) shows up consistently
backToMainFromUnmotivationalButton.addEventListener('click', function() {
  toggleVisibility(unmotivationalPostersSection);
  toggleVisibility(mainPoster);
})

makeNewPosterButton.addEventListener('click', function() {
  toggleVisibility(mainPoster);
  toggleVisibility(showForm);
});

nevermindButton.addEventListener('click', function() {
  showElement(mainPoster);
  hideElement(showForm);
});

backToMainButton.addEventListener('click', function() {
  toggleVisibility(mainPoster);
  toggleVisibility(savedPostersSection);
});

unmotivationalPosterButton.addEventListener('click', function() {
  toggleVisibility(mainPoster);
  toggleVisibility(unmotivationalPostersSection);
  displayUnmotivationalPosters();
});

// Hide/Reveal Page Sections Functions
function toggleVisibility(element) {
  element.classList.toggle('hidden');
}

function showElement(element) {
  element.classList.remove('hidden');
}

function hideElement(element) {
  element.classList.add('hidden');
}

function showUnmotivationalPosters() {
  toggleVisibility(mainPoster);
  toggleVisibility(unmotivationalPostersSection);
}

// Functions
function displayUnmotivationalPosters() {
  const renderUmotivationalPosters = document.querySelector('.unmotivational-layout');
  renderUmotivationalPosters.innerHTML = '';
  cleanedData.forEach(poster => {
    const posterInfo = document.createElement('article');
    posterInfo.classList.add('mini-poster');
    posterInfo.innerHTML = `
        <img src="${poster.imageURL}" alt="new photo">
        <h2>${poster.title}</h2>
        <h4>${poster.quote}</h4>
        </article>`;
        posterInfo.addEventListener('dblclick', deleteUnmotivationalPoster);
        console.log(targetUnmotivationalPoster);
        renderUmotivationalPosters.appendChild(posterInfo);
  });
}

// If either the image, quote, title, or background is clicked --> I want the poster to get deleted
// If I click on the image, I can compare that to the objects in the cleanedData array and remove that entire objects
// If I click on the poster itself, I still have access to the constituent parts 
  // And I can compare one of those to the cleanedData array and delete the entire object


function targetUnmotivationalPoster(event) {
  console.log(event);
  console.log(event.target);
  console.log(event.currentTarget);
}

// I was not able to generate the deleteUnmotivationalPoster function on my own.
// I have been having a couple of crummy days and I just wanted to be able to get this functionality in,
  // but by no means am I taking credit for it.  I just wanted something that worked so I could see it.
// Because this project is not graded, I 
// I shamelessly used ChatGPT to generate this function and I'm going to spend a lot of time dissecting it.
function deleteUnmotivationalPoster(event) {
  const posterElement = event.currentTarget;
  const posterIndex = posterElement.dataset.index;
  cleanedData.splice(posterIndex, 1);
  posterElement.remove();
  displayUnmotivationalPosters();
}

// Updates HTML elements with poster parts
function updatePosterDisplay(poster) {
  image.src = poster.imageURL;
  title.innerText = poster.title;
  quote.innerText = poster.quote;
}

function handleNewPosterCreation(event) {
  event.preventDefault(); // Form submission default is to refresh page (not desired here)
  currentPoster = createPoster(userImageUrlInput.value, userTitleInput.value, userQuoteInput.value);
  saveUserPosterData(currentPoster); 
  updatePosterDisplay(currentPoster);
  toggleVisibility(mainPoster);
  toggleVisibility(showForm);
}

// Saves poster parts in respective arrays for future random poster generation
// For User Input Form
function saveUserPosterData(poster) {
  images.push(currentPoster.imageURL);
  titles.push(currentPoster.title);
  quotes.push(currentPoster.quote);
}

function generateRandomPoster() {
  var randomImage = images[getRandomIndex(images)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomQuote = quotes[getRandomIndex(quotes)];
  currentPoster = createPoster(randomImage, randomTitle, randomQuote);
  image.src = randomImage;
  title.innerText = randomTitle;
  quote.innerText = randomQuote;
  console.log(currentPoster)
}

function cleanData() {
  return unmotivationalPostersData.map(sanitizeData);
}

function sanitizeData(data) {
  return createPoster(data.img_url, data.name, data.description);
}

function saveCurrentPoster() {
  if (savedPosters.includes(currentPoster)) {
    return;
  } 
  savedPosters.push(currentPoster);
  // This is how we're inserting mini saved posters into the grid
    // on the Saved Posters Page.
  posterGrid.insertAdjacentHTML('afterbegin', 
    `<article class="mini-poster">
      <img class="mini-poster" src="${currentPoster.imageURL}" alt="new photo">
      <h2>${currentPoster.title}</h2>
      <h4>${currentPoster.quote}</h4>
    </article>`
  );
}

function savePosterHandler() {
  saveCurrentPoster();
  showSavedPostersHandler();
}

function showSavedPostersHandler() {
  toggleVisibility(mainPoster);
  toggleVisibility(savedPostersSection);
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

window.addEventListener('load', generateRandomPoster);

// Create console.log to verify click occurs where desired


// How to target one unmoti poster?
// Double click on poster deletes unmoti poster from cleanedData
  // Therefore it will not display on page
  // Utilize `.remove`
// EL for double click anywhere on unmoti poster
  // Utilize currentTarget
    // Every poster will require EL (forEach)





// Before refactoring Event Listeners - (Save for now)

// makeNewPosterButton.addEventListener("click", function() {
  //   mainPoster.classList.toggle('hidden')
  //   showForm.classList.toggle('hidden')
  // });

// showSavedPosterButton.addEventListener('click', function() {
//   mainPoster.classList.toggle('hidden')
//   savedPostersSection.classList.toggle('hidden')
// });

// nevermindButton.addEventListener('click', function() {
//   mainPoster.classList.remove('hidden')
//   showForm.classList.toggle('hidden')
// })

// backToMainButton.addEventListener('click', function() {
//   mainPoster.classList.toggle('hidden')
//   savedPostersSection.classList.toggle('hidden')
// })

// showMyPosterButton.addEventListener('click', function(event) {
//   event.preventDefault();
//   currentPoster = createPoster(userImageUrlInput.value, userTitleInput.value, userQuoteInput.value);
//   images.push(currentPoster.imageURL);
//   titles.push(currentPoster.title);
//   quotes.push(currentPoster.quote);
//   image.src = currentPoster.imageURL;
//   title.innerText = currentPoster.title;
//   quote.innerText = currentPoster.quote;
//   mainPoster.classList.toggle('hidden');
//   showForm.classList.toggle('hidden');
// });