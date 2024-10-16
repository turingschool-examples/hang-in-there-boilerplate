// we've provided you with some data to work with 👇
// tip: you can tuck this data out of view with the dropdown found near the line number where the variable is declared 
const images = [
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
const titles = [
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
const quotes = [
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
var currentPoster;

// query selector variables go here 👇
var posterImage = document.querySelector(".poster-img")
var posterTitle = document.querySelector(".poster-title")
var posterQuote = document.querySelector(".poster-quote")
var userPosterImage = document.querySelector("#poster-image-url")
var userPosterTitle = document.querySelector("#poster-title")
var userPosterQuote = document.querySelector("#poster-quote")
var mainPosterViewSection = document.querySelector(".main-poster")
var OwnPosterFormSection = document.querySelector(".poster-form")
var savedPostersSection = document.querySelector(".saved-posters")
var savedPostersGrid = document.querySelector(".saved-posters-grid")
var makeOwnPosterButton = document.querySelector(".show-form")
var showSavedPostersButton = document.querySelector(".show-saved")
var showMainPageButton = document.querySelector(".show-main")
var backToMainButton = document.querySelector(".back-to-main")
var backToMainFromUnmotivationalButton = document.querySelector(".back-to-main-from-unmotivational")
var showRandomPosterButton = document.querySelector(".show-random")
var savePosterButton = document.querySelector('.save-poster')
var showUserPosterButton = document.querySelector(".make-poster")
var showUnmotivationalPostersButton = document.querySelector(".show-unmotivational")
var unmotivationalPostersSection = document.querySelector(".unmotivational-section")
var unmotivationalGrid = document.querySelector("#unmotivational-grid")
var saveMessage = document.querySelector("#save-message")
var posterModal = document.getElementById("posterModal")
var modalPosterImg = document.getElementById("modalPosterImg")
var modalPosterTitle = document.getElementById("modalPosterTitle")
var modalPosterQuote = document.getElementById("modalPosterQuote")
var closeModalButton = document.querySelector(".close-modal")
var savedPostersGrid = document.querySelector(".saved-posters-grid")
var modalContent = posterModal.querySelector('.modal-content');

// event listeners go here 👇
window.addEventListener("load", showRandomHomepagePoster)
makeOwnPosterButton.addEventListener("click", function() {handleView('form')})
showSavedPostersButton.addEventListener("click", function() {handleView('saved'); displaySavedPosters()})
showMainPageButton.addEventListener("click", function() {handleView('main')})
backToMainButton.addEventListener("click", function() {handleView('main'); showRandomHomepagePoster()})
showUserPosterButton.addEventListener("click", function() {handleView('main'); showUserCreatedPoster(event)})
backToMainFromUnmotivationalButton.addEventListener("click", function() {handleView('main')})
showUnmotivationalPostersButton.addEventListener("click", function() {handleView('unmotivational'); displayCleanedPosters (cleanData(unmotivationalPosters))}); 
showRandomPosterButton.addEventListener("click", showRandomHomepagePoster)
savePosterButton.addEventListener("click", saveCurrentPoster)
unmotivationalGrid.addEventListener("dblclick", deleteUnmotivationalPoster) 
savedPostersGrid.addEventListener("click", handlePosterClick) 
closeModalButton.addEventListener("click", closePosterModal) 
window.addEventListener("click", handleOutsideClick)

// functions and event handlers go here 👇
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

function handleView(view) {
  const views = {
    main: mainPosterViewSection,
    form: OwnPosterFormSection,
    saved: savedPostersSection,
    unmotivational: unmotivationalPostersSection,
    modal: posterModal
  }
  Object.values(views).forEach((section) => {
    section.classList.add("hidden")
    // console.log(Object.values(views))
  })
  views[view].classList.remove("hidden")
  // console.log(views[view])
}

function showPoster(imageURL, title, quote) {
  posterImage.src = imageURL
  posterTitle.innerText = title
  posterQuote.innerText = quote

  currentPoster = {
    imageURL: imageURL,
    title: title,
    quote: quote
  }
}

function showRandomHomepagePoster() {

  saveMessage.classList.add("hidden")

  let randomImage = images[getRandomIndex(images)];
  let randomTitle = titles[getRandomIndex(titles)];
  let randomQuote = quotes[getRandomIndex(quotes)];

  showPoster(randomImage, randomTitle, randomQuote)
  };

function showUserCreatedPoster(event) {
  event.preventDefault();

  saveMessage.classList.add("hidden")

  let userImage = userPosterImage.value
  let userTitle = userPosterTitle.value
  let userQuote = userPosterQuote.value

  addUserPosterInput(userImage, userTitle, userQuote)

  const userPosterHTML = `
    <div class="mini-poster">
      <img src="${userImage}" class="poster-img">
      <h2 class="poster-title">${userTitle}</h2>
      <p class="poster-quote">${userQuote}</p>
    </div>`

  savedPostersGrid.innerHTML += userPosterHTML
  showPoster(userImage, userTitle, userQuote)
}

function addUserPosterInput(image, title, quote) {
  images.push(image)
  titles.push(title)
  quotes.push(quote)
}

function saveCurrentPoster() {            
if (!savedPosters.some((poster) => {      
    return  poster.imageURL === currentPoster.imageURL &&
            poster.title === currentPoster.title &&
            poster.quote === currentPoster.quote
  })) {
    savedPosters.push(currentPoster)
    saveMessage.classList.add("hidden")
    // console.log("Poster saved:", currentPoster);
    // console.log("Saved Posters Array:", savedPosters); 
  } else {
    saveMessage.innerText = "Duplicate poster! This poster cannot be saved."
    saveMessage.classList.remove("hidden")
    // console.log("Poster is already saved");
  }
}

function displaySavedPosters() {
  savedPostersGrid.innerHTML = savedPosters.map((poster) => {
    return `
       <div class="mini-poster">
        <img src="${poster.imageURL}" class="poster-img">
        <h2 class="poster-title">${poster.title}</h2>
        <p class="poster-quote">${poster.quote}</p>
      </div>`;
  }).join('') 
}

function cleanData(posters) {
 let cleanedData = posters.map((poster) => {
    return {
      imageURL:poster.img_url,
      title: poster.name,
      quote: poster.description, 
    }
  })
    // console.log("Cleaned Data:", cleanedData)
  return cleanedData
}
// console.log(cleanData(unmotivationalPosters))

function displayCleanedPosters(posters) {
  console.log("Rendering the following posters:", posters)
  unmotivationalGrid.innerHTML = posters.map((poster, index) => { 
    return ` 
      <div class="mini-poster mini-poster-unmotivational" data-id="${index}"> 
      <img src="${poster.imageURL}" class="poster-img poster-img-unmotivational">
      <h2 class="poster-title poster-title-unmotivational">${poster.title}</h2>
      <p class="poster-quote poster-quote-unmotivational">${poster.quote}</p>
      </div>` 
  }).join('')
}
// console.log(displayCleanedPosters(unmotivationalPosters))

function deleteUnmotivationalPoster(event) {
  const posterElement = event.target.closest(".mini-poster");

  if (posterElement) {
    const posterId = parseInt(posterElement.getAttribute("data-id")); 
      console.log("Deleting poster with ID:", posterId);

    unmotivationalPosters.splice(posterId, 1);

    let cleanedData = cleanData(unmotivationalPosters); 
    displayCleanedPosters(cleanedData); 

    console.log("Unmotivational posters after deletion:", unmotivationalPosters);
  }
}

function showPosterModal(poster) {
  modalPosterImg.src = poster.imageURL;
  modalPosterTitle.innerText = poster.title;
  modalPosterQuote.innerText = poster.quote;
  handleView('modal'); 
}

function closePosterModal() {
  handleView('saved'); 
}

function handlePosterClick(event) {
  const clickedPoster = event.target.closest(".mini-poster")
  
  if (clickedPoster) {
    const posterIndex = Array.from(savedPostersGrid.children).indexOf(clickedPoster) 
    const selectedPoster = savedPosters[posterIndex]
    showPosterModal(selectedPoster); 
  }
}

function handleOutsideClick(event) {
  if (event.target == posterModal) {
    closePosterModal();
  }
}