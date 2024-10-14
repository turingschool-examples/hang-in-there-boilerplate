// query selector variables go here 👇
var currentPoster = {
  id: 0,
  image: document.querySelector('.poster-img'),
  title: document.querySelector('.poster-title'),
  quote: document.querySelector('.poster-quote')
};
var randomButton = document.querySelector('.show-random')
var customButton = document.querySelector('.show-form')
var returnButton = document.querySelector('.show-main')
var savedButton = document.querySelector('.show-saved')
var showButton = document.querySelector('.make-poster')
var unmotivationalButton = document.querySelector('.show-unmotivational')
var otherReturnButton = document.querySelector('.back-to-main')
var savePosterButton = document.querySelector('.save-poster')
var becomeMotivedButton = document.querySelector('.become-motivated')
var main = document.querySelector('.main-poster')
var custom = document.querySelector('.poster-form')
var saved = document.querySelector('.saved-posters')
var unmotivational = document.querySelector('.unmotivational-posters')
let customPosterImage = document.querySelector('#poster-image-url')
let customPosterTitle = document.querySelector('#poster-title')
let customPosterQuote = document.querySelector('#poster-quote')
const savedGrid = document.querySelector('.saved-posters-grid')  
const unmotivationalGrid = document.querySelector('.unmotivational-posters-grid')

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
]
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
]
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
]
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
]
var savedPosters = []
var cleanedUnmotivationalPosters = []

// event listeners go here 👇
window.addEventListener('load', createRandomPoster)
window.addEventListener('load', cleanPosters)
randomButton.addEventListener('click', createRandomPoster)
customButton.addEventListener('click', showCustomPosterForm)
returnButton.addEventListener('click', showCustomPosterForm)
savedButton.addEventListener('click', showSavedPosters)
otherReturnButton.addEventListener('click', showSavedPosters)
savePosterButton.addEventListener('click', savePoster)
showButton.addEventListener('click', showCustomPoster)
unmotivationalButton.addEventListener('click', showUnmotivationalPosters)
becomeMotivedButton.addEventListener('click', showUnmotivationalPosters)

// functions and event handlers go here 👇
// (we've provided two to get you started)!
function getRandomIndex(array) { /* generates a random number for the arrays */
  return Math.floor(Math.random() * array.length)
}

function createPoster(imageURL, title, quote) { /* blueprint for creating new posters */
  return {
    id: Date.now(), 
    imageURL: imageURL, 
    title: title, 
    quote: quote}
}

function createRandomPoster() { /* returns values based on the random numbrs provided by the getRandomIndex function and updates the current poster */
  const randomPosterData = createPoster(
    images[getRandomIndex(images)], 
    titles[getRandomIndex(titles)], 
    quotes[getRandomIndex(quotes)]
  );

  updateCurrentPoster(randomPosterData.imageURL, randomPosterData.title, randomPosterData.quote)
  currentPoster.id = randomPosterData.id
}

function showCustomPosterForm() { /* toggles vision of the custom poster form */
  custom.classList.toggle('hidden')
  main.classList.toggle('hidden')
}

function showCustomPoster() { /* creates custom poster based on provided values and displays it */
  event.preventDefault()

  const tempPoster = createPoster(
    customPosterImage.value, 
    customPosterTitle.value, 
    customPosterQuote.value
  )

  images.push(tempPoster.imageURL)
  titles.push(tempPoster.title)
  quotes.push(tempPoster.quote)

  updateCurrentPoster(tempPoster.imageURL, tempPoster.title, tempPoster.quote)
  currentPoster.id = tempPoster.id

  showCustomPosterForm()

  customPosterImage.value = ''
  customPosterTitle.value = ''
  customPosterQuote.value = ''
}

function savePoster() { /* adds poster to the savedPoster array */
  const posterCopy = {
    id: currentPoster.id,
    imageURL: currentPoster.image.src,
    title: currentPoster.title.innerText,
    quote: currentPoster.quote.innerText
  }

  if (!savedPosters.some(poster => poster.id === posterCopy.id)) {
    savedPosters.push(posterCopy)
  }
  
}

function showSavedPosters() { /* toggles view of saved posters */
  saved.classList.toggle('hidden')
  main.classList.toggle('hidden')

  savedGrid.innerHTML = ''

  savedPosters.forEach(poster => {
  const smallPoster = document.createElement('div')
  smallPoster.classList.add('mini-poster')

  smallPoster.innerHTML = `
    <p hidden>${poster.id}</p>
    <img src="${poster.imageURL}">
    <h2>${poster.title}<h2>
    <h4>${poster.quote}<h4>
  `
  smallPoster.addEventListener('dblclick', deletePoster)

  savedGrid.appendChild(smallPoster)
  })
}

function cleanPosters() { /* unmotivational poster factory (dunno if that is proper term in JS) */
  unmotivationalPosters.forEach(poster => {
    cleanedUnmotivationalPosters.push(createPoster(
      poster.img_url,
      poster.name,
      poster.description
    ))
  })
}

function showUnmotivationalPosters() { /* toggles unmotivational view */
  unmotivational.classList.toggle('hidden')
  main.classList.toggle('hidden')

  unmotivationalGrid.innerHTML = ''
  var counter = 0
  cleanedUnmotivationalPosters.forEach(poster => {
    const unmotivationalPoster = document.createElement('div')
    unmotivationalPoster.classList.add('mini-poster')

    unmotivationalPoster.innerHTML = `
    <p hidden>${poster.id = counter++}</p>
    <img src="${poster.imageURL}">
    <h2>${poster.title}<h2>
    <h4>${poster.quote}<h4>
  `

  unmotivationalPoster.addEventListener('dblclick', deletePoster)

  unmotivationalGrid.appendChild(unmotivationalPoster)
  })
}
/* idk how to do a function like this w/o declaring the variables inside of it with query selectors */
function deletePoster(event) { /* removes undesired poster from the array and the webpage */

  const deletedPoster = event.currentTarget
  const uniquePosterId = deletedPoster.querySelector('p').innerText
  if (deletedPoster) {
    if (deletedPoster.parentElement.classList.contains('saved-posters-grid')) {
      savedPosters = savedPosters.filter(poster => String(poster.id) !== String(uniquePosterId))
    } else if (deletedPoster.parentElement.classList.contains('unmotivational-posters-grid')) {
      cleanedUnmotivationalPosters = cleanedUnmotivationalPosters.filter(poster => String(poster.id) !== String(uniquePosterId))
    }
    deletedPoster.classList.add('hidden')
  }
}

/* ~~~~~ added code for drying up functions ~~~~~ */

function updateCurrentPoster(imageURL, title, quote) {
  currentPoster.image.src = imageURL;
  currentPoster.title.innerText = title;
  currentPoster.quote.innerText = quote;
}
