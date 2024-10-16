// query selector variables go here 👇
var posterImage = document.querySelector('.poster-img')
var posterTitle = document.querySelector('.poster-title')
var posterQuote = document.querySelector('.poster-quote')
var mainPosterSection = document.querySelector('.main-poster')
var formSection = document.querySelector('.poster-form')
var savedPostersSection = document.querySelector('.saved-posters')
var posterImageInput = document.querySelector('#poster-image-url')
var posterTitleInput = document.querySelector('#poster-title')
var posterQuoteInput = document.querySelector('#poster-quote')
var savedPostersGrid = document.querySelector('.saved-posters-grid')
var unmotivationalPostersSection = document.querySelector('#unmotivational-posters')
var unmotivationalPostersDisplay = document.querySelector('#unmotivational-poster-display')

var showRandomBtn = document.querySelector('.show-random')
var makePosterBtn = document.querySelector('.show-form')
var showSavedBtn = document.querySelector('.show-saved')
var nevermindBtn = document.querySelector('.show-main')
var backToMainBtn = document.querySelector('.back-to-main')
var showMyPosterBtn = document.querySelector('.make-poster')
var savePosterBtn = document.querySelector('.save-poster')
var unmotivationalPostersBtn = document.querySelector('.unmotivational-poster-button')
var backToMainUnmotivationalBtn = document.querySelector('#back-to-main-unmotivational')

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
var currentPoster;

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

// event listeners go here 👇
window.addEventListener('load', displayRandomPoster)
showRandomBtn.addEventListener('click', displayRandomPoster)
makePosterBtn.addEventListener('click', showFormSection)
showSavedBtn.addEventListener('click', showSavedSection)
backToMainBtn.addEventListener('click', showMainSection)
nevermindBtn.addEventListener('click', showMainSection)
showMyPosterBtn.addEventListener('click', posterFormSubmit)
savePosterBtn.addEventListener('click', savePoster)
unmotivationalPostersBtn.addEventListener('click', showUnmotivationalPosters)
backToMainUnmotivationalBtn.addEventListener('click', showMainPoster)
// posterDiv.addEventListener('dblclick', deleteUnmotivationalPoster)


// functions and event handlers go here 👇
// (we've provided two to get you started)!

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayRandomPoster() {
    var randomImage = images[getRandomIndex(images)]
    var randomTitle = titles[getRandomIndex(titles)]
    var randomQuote = quotes[getRandomIndex(quotes)]

    posterImage.src = randomImage
    posterTitle.innerText = randomTitle
    posterQuote.innerText = randomQuote
}

function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(), 
    imageURL: imageURL, 
    title: title, 
    quote: quote}
}

function switchView(showSection, hideSections) {
    showSection.classList.remove('hidden')
    hideSections.forEach(section => section.classList.add('hidden'))
}

function showFormSection() {
    switchView(formSection, [mainPosterSection, savedPostersSection])

}


function showSavedSection() {
    switchView(savedPostersSection, [mainPosterSection, formSection])
    displaySavedPosters()
}

function showMainSection() {
    console.log("Back to Main button Click")
    switchView(mainPosterSection, [formSection, savedPostersSection])
}

function posterFormSubmit(event) {
    event.preventDefault()
    createAndDisplayNewPoster()
    showMainSection()
}

function createAndDisplayNewPoster() {
    var newImageURL = getPosterImageInput()
    var newTitle = getPosterTitleInput()
    var newQuote = getPosterQuoteInput()

    currentPoster = createPoster(newImageURL, newTitle, newQuote)

    savePosterData(newImageURL, newTitle, newQuote)
    
    updatePosterDisplay(currentPoster)
}

function getPosterImageInput() {
    return posterImageInput.value
}

function getPosterTitleInput() {
    return posterTitleInput.value
}

function getPosterQuoteInput() {
    return posterQuoteInput.value
}

function savePosterData(imageURL, title, quote) {
    images.push(imageURL)
    titles.push(title)
    quotes.push(quote)
}

function updatePosterDisplay(poster) {
    posterImage.src = poster.imageURL
    posterTitle.innerText = poster.title
    posterQuote.innerText = poster.quote
}

function savePoster() {
    var isDuplicate = savedPosters.some(poster => 
        poster.imageURL === currentPoster.imageURL &&
        poster.title === currentPoster.title &&
        poster.quote === currentPoster.quote
    )
    if (!isDuplicate) {
        savedPosters.push(currentPoster)
    }
    
    savedPostersGrid.innerHTML = ''

    savedPosters.forEach(function(poster) {
        var miniPoster = document.createElement('div')
        miniPoster.classList.add('mini-poster')

        var miniPosterImg = document.createElement('img')
        miniPosterImg.src = poster.imageURL
        miniPosterImg.alt = 'mini poster image'

        var miniPosterTitle = document.createElement('h2')
        miniPosterTitle.innerText = poster.title

        var miniPosterQuote = document.createElement('h4')
        miniPosterQuote.innerText = poster.quote

        miniPoster.appendChild(miniPosterImg)
        miniPoster.appendChild(miniPosterTitle)
        miniPoster.appendChild(miniPosterQuote)

        savedPostersGrid.appendChild(miniPoster)
    })

}

function showUnmotivationalPosters() {
    switchView(unmotivationalPostersSection, [mainPosterSection, formSection, savedPostersSection])
    unmotivationalPostersDisplay.innerHTML = ''

    unmotivationalPosters.forEach(function(poster, index) {
        var posterDiv = document.createElement('div')
        posterDiv.classList.add('unmotivational-poster')
        posterDiv.setAttribute('data-index', index)

        var img = document.createElement('img')
        img.src = poster.img_url
        img.alt = poster.name

        var title = document.createElement('h2')
        title.innerText = poster.name

        var description = document.createElement('p')
        description.innerText = poster.description

        posterDiv.appendChild(img)
        posterDiv.appendChild(title)
        posterDiv.appendChild(description)

        unmotivationalPostersDisplay.appendChild(posterDiv)
        posterDiv.addEventListener('dblclick', deleteUnmotivationalPoster)
    });
}

function showMainPoster() {
    switchView(mainPosterSection, [unmotivationalPostersSection, formSection, savedPostersSection]);
}

function deleteUnmotivationalPoster(event) {
    const index = event.currentTarget.getAttribute('data-index')
    
    unmotivationalPosters.splice(index, 1)

    showUnmotivationalPosters()
}