var posterImage = document.querySelector('.poster-img');
var posterTitle = document.querySelector('.poster-title');
var posterQuote = document.querySelector('.poster-quote');

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
  "Don't wait until it's urgent. Just go pee. Minimize your potential for bladder stones.",
  "Don’t downgrade your ego to fit your reality, upgrade your imagination to match your ego.",
  "You are braver than you believe, stronger than you seem, and smarter than you think. So, stop acting cowardly, weak, and stupid.",
  "We forge the chains we wear in life.",
  "Those confident ones, whose confidence is unwaivering, gain the confidence of others by being so dang confident.",
  "Act as if what you do makes a difference. Even if it doesn't.",
  "Success is not success, failure is not failure: everything is relative.",
  "Never bend your head. Always hold it high. Look the world straight in the eye and headbutt it right in the nose.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals. - The Unibomber",
  "Believe you can and you're halfway there. - John Wayne Gacy",
  "When you have a dream, you've got to grab it by the throat and never let it go. That's how you kill your sleep paralysis demon.",
  "I can't change the direction of the wind, but I can make my own wind with my butt.",
  "No matter what you're going through, there's a light at the end of the tunnel. Do not go towards the light.",
  "It is your appetite at the beginning of a difficult task which, more than anything else, will affect your appetite at the outcome.",
  "Life is like riding a bicycle. Your butt will hurt and you wil sweat a lot.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.  -Charles Manson",
  "Limit your intake of saturated fats, sodium, and refined sugars.",
  "You are never too old to set another goal or to dream a new dream.  - Sam Little ",
  "Try to be a rainbow in the dark.",
  "You do not find the happy life. It finds you...",
  "Inspiration comes from within your imagination. One has to be vigilant in their positivity. When you're aggressively positive, good things might happen sometimes... maybe.",
  "You will never know the value of a moment, until it becomes a memory. - Hannibal Lecter",
  "The most wasted of days are those spent without doing crimes.",
  "You must do the things. You must.",
  "It isn't when you came from. It's the how and the why.",
  "It is never too late to try eating an entire ham.",
  "Happiness often sneaks in through a door you didn't know you left open. Then, Happiness robs your house. Don't forget to close and lock your doors. Happiness needs money to buy drugs.",
  "We must be willing to let go of the life we planned so as to have space for the life that is waiting for us. Keep your expectations low and you'll rarely be disappointed.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination. Imagine all of the imaginations and all of imagining that they could imagine. Just imagine it.",
  "Be the food that you wish to taste in the world.",
  "Let us make our future our past, and let us make our dreams tomorrow's nightmare.",
  "You don't always need to go to the bathroom. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do things, I can maybe do other things instead.",
  "Don't wait! Call now to start saving money today!",
  "With the right kind of coaching, determination, and networking skills you potentially might be able to accomplish something someday.",
  "If you have good thoughts they will shine out of your eyes like sunbeams and and burn evil to a crispy bacon like texture.",
  "No matter what people tell you, words and ideas can't change the world as much as money and blackmail.",
  "Each person must live their life as a model for an art class.",
  "A champion is defined not by their wins but by their losses."
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
var currentPoster = null;
var currentUnmotivationalPosters = [...unmotivationalPosters];

document.querySelector('.show-random').addEventListener('click', createRandomPoster);
document.querySelector('.show-form').addEventListener('click', toggleCreateNew);
document.querySelector('.show-main').addEventListener('click', toggleCreateNew);
document.querySelector('.show-saved').addEventListener('click', toggleShowSaved);
document.querySelector('.back-to-main').addEventListener('click', toggleShowSaved);
document.querySelector('.save-poster').addEventListener('click', savePoster);
document.querySelector('.make-poster').addEventListener('click', function(event) {
  createCustomPoster(event);
  toggleCreateNew();
});
document.querySelector('.show-unmotivational').addEventListener('click', toggleShowUnmotivational);
document.querySelector('.hide-unmotivational').addEventListener('click', toggleShowUnmotivational);
document.querySelector('.unmotivational-posters-grid').addEventListener('dblclick', function(event) {
  let target = event.target;
  while (target && !target.classList.contains('unmotivational-poster')) {
    target = target.parentElement;
  }
  if (target) {
    deletePoster(target);
  }
});

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

function createRandomPoster() {
  const randomImage = images[getRandomIndex(images)];
  const randomTitle = titles[getRandomIndex(titles)];
  const randomQuote = quotes[getRandomIndex(quotes)];
  
  currentPoster = updatePosterContent(randomImage, randomTitle, randomQuote);
}

function createCustomPoster (event) {
  event.preventDefault();

  const newImage = document.querySelector('#poster-image-url').value;
  const newTitle = document.querySelector('#poster-title').value;
  const newQuote = document.querySelector('#poster-quote').value;

  saveInputData(newImage, newTitle, newQuote);

  currentPoster = updatePosterContent(newImage, newTitle, newQuote);
}

function saveInputData(imageURL, title, quote){
  images.push(imageURL);
  titles.push(title);
  quotes.push(quote);
}

function updatePosterContent(imageURL, title, quote) {

  posterImage.src = imageURL;
  posterTitle.innerText = title;
  posterQuote.innerText = quote;

  return createPoster(imageURL, title, quote);
}

function savePoster() {
  if (currentPoster && !savedPosters.some(poster => poster.id === currentPoster.id)) {
    savedPosters.push(currentPoster);
  }
}

function displaySavedPosters() {
  const savedPostersGrid = document.querySelector('.saved-posters-grid');
  savedPostersGrid.innerHTML = ''; 

  savedPosters.forEach(poster => {
    let miniaturePoster = document.createElement('div');
    miniaturePoster.classList.add('mini-poster');

    let miniImage = document.createElement('img');
    miniImage.src = poster.imageURL;
    miniImage.alt = 'Miniature Poster Image'
    miniaturePoster.appendChild(miniImage);

    let miniTitle = document.createElement('h2');
    miniTitle.innerText = poster.title;
    miniaturePoster.appendChild(miniTitle);

    let miniQuote = document.createElement('h4');
    miniQuote.innerText = poster.quote;
    miniaturePoster.appendChild(miniQuote);

    savedPostersGrid.appendChild(miniaturePoster);
  });
}

function cleanData() {
  const cleanedPosters = unmotivationalPosters.map(poster => {
    return {
      name: poster.name,
      description: poster.description,
      img_url: poster.img_url
    };
  });
  unmotivationalPosters.length = 0;
  unmotivationalPosters.push(...cleanedPosters); 
}

function loadUnmotivationalPosters() {
  const unmotivationalPostersGrid = document.querySelector('.unmotivational-posters-grid');
  unmotivationalPostersGrid.innerHTML = '';

  cleanData();

  currentUnmotivationalPosters.forEach(poster => {
    const posterElements = createUnmotivationalPosterElements(poster);
    unmotivationalPostersGrid.appendChild(posterElements);
  });
}

function createUnmotivationalPosterElements(poster) {
  let unmotivationalPoster = document.createElement('div');
  unmotivationalPoster.classList.add('unmotivational-poster');

  let unmotivationalImage = document.createElement('img');
  unmotivationalImage.src = poster.img_url;
  unmotivationalImage.alt = 'Anti-Motivational Poster Image'
  unmotivationalPoster.appendChild(unmotivationalImage);

  let unmotivationalTitle = document.createElement('h2');
  unmotivationalTitle.innerText = poster.name;
  unmotivationalPoster.appendChild(unmotivationalTitle);

  let unmotivationalQuote = document.createElement('h4');
  unmotivationalQuote.innerText = poster.description;
  unmotivationalPoster.appendChild(unmotivationalQuote);

  return unmotivationalPoster;
}

function deletePoster(poster){
  poster.classList.add('zoom-out');
  poster.addEventListener('animationend', function() {
    const posterIndex = Array.from(poster.parentNode.children).indexOf(poster);
    poster.remove();
    currentUnmotivationalPosters.splice(posterIndex, 1);
  }, { once: true }); 
}

function toggleCreateNew() {
  document.querySelector('.main-poster').classList.toggle('hidden');
  document.querySelector('.poster-form').classList.toggle('hidden');
}

function toggleShowSaved() {
  displaySavedPosters();
  document.querySelector('.main-poster').classList.toggle('hidden');
  document.querySelector('.saved-posters').classList.toggle('hidden');
}

function toggleShowUnmotivational() {
  loadUnmotivationalPosters();
  document.querySelector('.main-poster').classList.toggle('hidden');
  document.querySelector('.unmotivational-posters').classList.toggle('hidden');
}

// function toggleDisplay(selectors) {
//   selectors.forEach(selector => {
//     let element = document.querySelector(selector);
//     element.style.display = window.getComputedStyle(element).display === "none" ? "block" : "none";
//   });
// }

// function toggleCreateNew() {
//   toggleDisplay(['.main-poster', '.poster-form']);
// }

// function toggleShowSaved() {
//   displaySavedPosters();
//   toggleDisplay(['.main-poster', '.saved-posters']);
// }

// function toggleShowUnmotivational() {
//   loadUnmotivationalPosters();
//   toggleDisplay(['.main-poster', '.unmotivational-posters']);
//}

window.onload = createRandomPoster;