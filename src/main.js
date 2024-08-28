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
const unmotivationalPosters = [
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
var currentPoster;
var posterImage = document.querySelector('.poster-img');
var posterTitle = document.querySelector('.poster-title');
var posterQuote = document.querySelector('.poster-quote');
var randomButton = document.querySelector('.show-random');

const makePosterButton = document.querySelector('.make-poster');
const mainPage = document.querySelector('.main-poster');
const posterFormParent = document.querySelector('.poster-form');
const customPosterButton = document.querySelector('.show-form');
const savedPostersPage = document.querySelector('.saved-posters');
const savedPostersButton = document.querySelector('.show-saved');
const backToMainButton = document.querySelector('.back-to-main');
const returnToMainButton = document.querySelector('.return-to-main');
const nevermindButton = document.querySelector('.show-main');
const saveAPosterButton = document.querySelector('.save-poster');
const posterGrid = document.querySelector('.saved-posters-grid');
const unmotivationalPostersButton = document.querySelector('.show-unmotivationals');
const unmotivationalPostersPage = document.querySelector('.unmotivationals');
const unmotivationalPosterGrid = document.querySelector('.bad-poster-grid');
let cleanedUnMotivatedPosters = [];

const switchHidden = (element1, element2) => {
  element1.classList.toggle('hidden');
  element2.classList.toggle('hidden');
};

const contentGenerator = () => {
  var imageURL = images[getRandomIndex(images)];
  var title = titles[getRandomIndex(titles)];
  var quote = quotes[getRandomIndex(quotes)];

  currentPoster = createPoster(imageURL, title, quote);

  posterImage.src = currentPoster.imageURL;
  posterTitle.innerText = currentPoster.title;
  posterQuote.innerText = currentPoster.quote;
};

window.addEventListener('load', contentGenerator);
window.addEventListener('load', unmotivationalPosterGenerator);

randomButton.addEventListener('click', contentGenerator);

customPosterButton.addEventListener('click', () => {
  switchHidden(mainPage, posterFormParent)
});

backToMainButton.addEventListener('click', () => {
  switchHidden(savedPostersPage, mainPage)
});

returnToMainButton.addEventListener('click', () => {
  switchHidden(unmotivationalPostersPage, mainPage)
});

nevermindButton.addEventListener('click', () => {
  switchHidden(posterFormParent, mainPage)
});

makePosterButton.addEventListener('click', (event) => {
  event.preventDefault()
  const inputURL = document.querySelector('#poster-image-url').value;
  const inputTitle = document.querySelector('#poster-title').value;
  const inputQuote = document.querySelector('#poster-quote').value;

  currentPoster = createPoster(inputURL, inputTitle, inputQuote);

  posterImage.src = currentPoster.imageURL;
  posterTitle.innerText = currentPoster.title;
  posterQuote.innerText = currentPoster.quote;
  
  images.unshift(inputURL); 
  titles.unshift(inputTitle);
  quotes.unshift(inputQuote);

  switchHidden(posterFormParent, mainPage);
});

saveAPosterButton.addEventListener('click', () => {
  var imageURL = posterImage.src;
  var title= posterTitle.innerText;
  var quote = posterQuote.innerText;
  currentPoster = createPoster(imageURL, title, quote);

  if (!savedPosters.some(function(poster) {
    return poster.imageURL === currentPoster.imageURL && 
      poster.title === currentPoster.title &&
      poster.quote === currentPoster.quote})) {
  savedPosters.unshift(currentPoster);
  };
  console.log(savedPosters)
});

savedPostersButton.addEventListener('click', () => {
  savedPostersGenerator();
  switchHidden(mainPage, savedPostersPage);
});

unmotivationalPostersButton.addEventListener('click', () => {

  cleanedUnMotivatedPosters = cleanData(unmotivationalPosters);

  unmotivationalPosterGenerator();

  switchHidden(mainPage, unmotivationalPostersPage);

  const unMoPosterObjects = document.querySelectorAll('.sad-mini-poster');
  unMoPosterObjects.forEach((posterObject, indexPosition) => {
    posterObject.addEventListener('dblclick', (event) => {
     
      let targetedPoster = event.currentTarget;

      let posterToDelete = cleanedUnMotivatedPosters[indexPosition];

      cleanedUnMotivatedPosters = cleanedUnMotivatedPosters.filter(poster => poster !== posterToDelete);

      targetedPoster.remove();

      console.log('Deleted Poster:', posterToDelete);
      console.log('Updated Posters Array:', cleanedUnMotivatedPosters);

    });
  });
});

// ---------
// unmotivationalPostersButton.addEventListener('click', () => {
//   // Clean the unmotivational posters data
//   cleanedUnMotivatedPosters = cleanData(unmotivationalPosters);
  
//   // Generate and display the posters
//   unmotivationalPosterGenerator();
  
//   switchHidden(mainPage, unmotivationalPostersPage);

//   // Add double-click event listeners to each poster
//   const unMoPosterObjects = document.querySelectorAll('.sad-mini-poster');
//   unMoPosterObjects.forEach((posterElement, index) => {
//     posterElement.addEventListener('dblclick', (event) => {
//       // Get the targeted poster element
//       const targetedPosterElement = event.currentTarget;

//       // Find the index of the poster object in the cleanedUnMotivatedPosters array
//       const posterToDelete = cleanedUnMotivatedPosters[index];

//       // Remove the poster from the array
//       cleanedUnMotivatedPosters = cleanedUnMotivatedPosters.filter(poster => poster !== posterToDelete);

//       // Remove the poster's HTML element from the DOM
//       targetedPosterElement.remove();

//       console.log('Deleted Poster:', posterToDelete);
//       console.log('Updated Posters Array:', cleanedUnMotivatedPosters);
//     });
//   });
// });
// -------

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

function savedPostersGenerator() {
  // iterate over savedposters array
  // every array elemetn to be a mini-poster in a div element
  // assign miniposter css style to new div elements
  posterGrid.innerHTML = '';

  savedPosters.forEach(poster => {
    // makes new html div element. adds mini poster class to div element
    var miniPosterDiv = document.createElement("div");
    miniPosterDiv.classList.add("mini-poster");

    // making a new html img element. assigning poster object url to image src
    var miniImg = document.createElement("img");
    miniImg.src = poster.imageURL;
    var miniTitle = document.createElement("h2");
    miniTitle.innerText = poster.title;
    var miniQuote = document.createElement("h4");
    miniQuote.innerText = poster.quote;

    // recreating html nesting 11-16
    posterGrid.appendChild(miniPosterDiv);
    miniPosterDiv.appendChild(miniImg);
    miniPosterDiv.appendChild(miniTitle);
    miniPosterDiv.appendChild(miniQuote);
  });
};

function cleanData(unmotivationalPosters) {
    cleanedUnMotivatedPosters = unmotivationalPosters.map(poster => {
    var imageURL = poster.img_url;
    var title = poster.name;
    var quote = poster.description;
    return createPoster(imageURL, title, quote);
  });
  return cleanedUnMotivatedPosters;
};

function unmotivationalPosterGenerator() {
  unmotivationalPosterGrid.innerHTML = "";

  var cleanedUnMotivatedPosters = cleanData(unmotivationalPosters);
  console.log(cleanedUnMotivatedPosters);

  cleanedUnMotivatedPosters.forEach(poster => {

    unmotivationalPosterGrid.classList.add('bad-posters-grid');
   
    var miniPosterDiv = document.createElement("div");
    miniPosterDiv.classList.add("sad-mini-poster");

    var miniImg = document.createElement("img");
    miniImg.src = poster.imageURL;
    var miniTitle = document.createElement("h2");
    miniTitle.innerText = poster.title;
    var miniQuote = document.createElement("h4");
    miniQuote.innerText = poster.quote;

    unmotivationalPosterGrid.appendChild(miniPosterDiv);
    miniPosterDiv.appendChild(miniImg);
    miniPosterDiv.appendChild(miniTitle);
    miniPosterDiv.appendChild(miniQuote);
  });
};

