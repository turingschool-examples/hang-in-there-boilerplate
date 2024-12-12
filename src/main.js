// Query Selector Variables  

  //Main poster
var mainPosterContainer = document.querySelector(".main-poster");
var posterImage = document.querySelector(".poster-img");
var posterTitle = document.querySelector(".poster-title");
var posterQuote = document.querySelector(".poster-quote");

  //Random posters
var anotherRandomPosterButton = document.querySelector(".show-random");

  //Make your own posters
var makeYourOwnPosterButton = document.querySelector(".show-form");
var makeYourOwnPosterForm = document.querySelector(".poster-form");
var nevermindTakeMeBackButton = document.querySelector(".show-main");
var imageInput = document.querySelector("#poster-image-url");
var titleInput = document.querySelector("#poster-title");
var quoteInput = document.querySelector("#poster-quote");
var showMyPosterButton = document.querySelector(".make-poster");

  //Saved posters
var showSavedPostersButton = document.querySelector(".show-saved");
var savedPostersSection = document.querySelector(".saved-posters");
var backToMainButton = document.querySelector(".back-to-main");
var saveThisPosterButton = document.querySelector(".save-poster");
var savedPostersGrid = document.querySelector('.saved-posters-grid');

  // UnMo Section query selectors 
var showUnMoPostersButton = document.querySelector('.show-unmo-posters');
var unMoPostersSection = document.querySelector(".unmo-posters");
var unMoBackToMainButton = document.querySelector(".unmo-back-to-main");
var unMoPostersGrid = document.querySelector(".unmo-posters-grid");

  // UnMo Posters query selectors  
var unMoPoster_0 = document.querySelector("#poster_0");


// Raw Data Sets
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

// Global Variables 
var savedPosters = [];
var currentPoster;
var cleanedUnMoPosters = cleanData(unmotivationalPosters)


// Event Listeners  
document.addEventListener("DOMContentLoaded", generateRandomPoster);
anotherRandomPosterButton.addEventListener("click", generateRandomPoster);
makeYourOwnPosterButton.addEventListener("click", makeYourOwnPosterClick);
showSavedPostersButton.addEventListener("click", showSavedPostersButtonClick);
nevermindTakeMeBackButton.addEventListener("click", nevermindTakeMeBackButtonClick);
backToMainButton.addEventListener("click", backToMainButtonClick);
showMyPosterButton.addEventListener("click", showMyPosterClick);
saveThisPosterButton.addEventListener("click", saveThisPosterClick);
showUnMoPostersButton.addEventListener("click", showUnMoPostersClick)
unMoBackToMainButton.addEventListener("click", unMoBackToMainButtonClick);
unMoPostersGrid.addEventListener('dblclick', function(e) {deleteUnMoPoster(e)})

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

function generateRandomPoster () {
  //create randomized poster deets 
  var imageURL = images[getRandomIndex(images)];
  var title = titles[getRandomIndex(titles)];
  var quote = quotes[getRandomIndex(quotes)];

  //create a random poster and assignt it to current poster based on the above random details
  currentPoster = createPoster(imageURL, title, quote);

  //update the DOM
  posterImage.src = currentPoster.imageURL
  posterTitle.innerText = currentPoster.title
  posterQuote.innerText = currentPoster.quote 
}


function makeYourOwnPosterClick () {
  //when this method is invoked by a click, the original poster disappears
  hidePoster (mainPosterContainer) 
  //and the make your own poster form APPEARS 
  revealForm (makeYourOwnPosterForm)
}

function hidePoster (element) {
  //helper method 
  //makes main poster disappear in order to make space for the make your own poster form 
  element.classList.add("hidden")
}

function revealForm (element) {
  //helper method 
  //form's inputs appear
  element.classList.remove("hidden")
}

function showSavedPostersButtonClick () {
  hidePoster (mainPosterContainer);
  showSavedPostersSection (savedPostersSection);
} 

function showSavedPostersSection (element) {
  //shows poster grid
  element.classList.remove("hidden")
}

function nevermindTakeMeBackButtonClick () {
  //return to main with poster, no form
  revealPoster (mainPosterContainer);
  hideForm (makeYourOwnPosterForm)
}

function backToMainButtonClick () {
  //return to main with poster, no grid
  revealPoster (mainPosterContainer);
  hideSavedPosters (savedPostersSection)
}

function revealPoster (element) {
  element.classList.remove("hidden")
}

function hideForm (element) {
  element.classList.add("hidden")
}

function hideSavedPosters (element) {
  element.classList.add("hidden")
}

function showMyPosterClick(event) {
  // console.log('image input: ', imageInput)
  event.preventDefault();

  //save user poster deets
  var imageInputValue = imageInput.value;
  var titleInputValue = titleInput.value;
  var quoteInputValue = quoteInput.value;
  
  //create user's poster
  currentPoster = createPoster(imageInputValue, titleInputValue, quoteInputValue);
  
  //save data
     //save title input to data model
   titles.push(currentPoster.title)
     //save image input  
   images.push(currentPoster.imageURL)
     //save quote input 
   quotes.push(currentPoster.quote)
   
  //update the DOM
   posterImage.src = currentPoster.imageURL;
   posterTitle.innerText = currentPoster.title;
   posterQuote.innerText = currentPoster.quote;

  nevermindTakeMeBackButtonClick (); 
}

function saveThisPosterClick () {

  //add current poster to saved poster array
  if (!savedPosters.some(poster => poster.id === currentPoster.id)) {
    savedPosters.push(currentPoster);
    updateGrid();
  } else {
  }
  //make sure no duplicates are included in the array
  // savedPosters = [...new Set(savedPosters)]
  // updateGrid () 
}


function createMiniPoster(poster) {
  //1. create a new html article element for the mini poster
  var miniPoster = document.createElement('article');
  //2. set mini poster's attributes
  miniPoster.classList.add('mini-poster')
  //3.add poster html content based on currentPoster

  miniPoster.id = poster.id  
  miniPoster.innerHTML = `
  <img class="poster-img" src="${poster.imageURL}" alt="mini poster image">
  <h2 class="poster-title">${poster.title}</h1>
  <h3 class="poster-quote">${poster.quote}</h3>
  `;
  return miniPoster;
}


function updateGrid() {
  const lastPoster = savedPosters[savedPosters.length - 1]
  let miniPoster = createMiniPoster(lastPoster)
  // savedPosters.push(miniPoster)
  console.log('mini poster: ', miniPoster)
  savedPostersGrid.appendChild(miniPoster)
}

let showUnMoPostersClickCounter = 0; 

function showUnMoPostersClick () {
  showUnMoPostersClickCounter++; // Increment the counter on each click
  hidePoster (mainPosterContainer);
  // showUnMoPosters (unMoPostersSection);
  unMoPostersSection.classList.remove("hidden")

  //retrieve cleaned data 
  cleanedUnMoPosters
  // var cleanUnMotivationalPosters = cleanData (unmotivationalPosters);

  //add posters ONCE
  if (showUnMoPostersClickCounter < 2) {
  renderUnMoPoster(cleanedUnMoPosters, unMoPostersGrid)
  }
}


function unMoBackToMainButtonClick () {
  //return to main with poster, no grid
  revealPoster (mainPosterContainer);
  hideSavedPosters (unMoPostersSection)
}


function cleanData (posterData) {
  
  //iterate though the array, unmotivationalPosters to 
  //clean the data to match poster, 
  //try unmotivationalPosters.map

  console.log(posterData)
  var cleanedPosters = posterData.map((poster, index) => {

    //return the cleaned poster object data  
    return {
      id: Math.random(),
      imageURL: poster.img_url,
      title: poster.name,
      quote: poster.description,
    };
    
  })
  // console.log(cleanedUnMoPosters)
  return cleanedPosters
}

function renderUnMoPoster(postersArray, containerElement) {
  postersArray.forEach((poster, index) => {
    // Create a new DOM element for the poster
    const posterElement = document.createElement('article');
    posterElement.classList.add('mini-unmo-poster');
    // Add id (for queryselector)  
    posterElement.id = (poster.id); 

    // Add an image
    const img = document.createElement('img');
    img.src = poster.imageURL;
    img.alt = poster.title;
    posterElement.appendChild(img);

    // Add a title
    const title = document.createElement('h2');
    title.textContent = poster.title;
    posterElement.appendChild(title);

    // Add a quote
    const quote = document.createElement('p');
    quote.textContent = poster.quote;
    posterElement.appendChild(quote);

    // Append the poster element to the container
    containerElement.appendChild(posterElement);

    // Attach the event listener for deletion
    posterElement.addEventListener("dblclick", () => deleteUnMoPoster(posterElement));
  });
  }



function deleteUnMoPoster(e) {
  var targetPoster = e.target.closest('article')
  e.target.closest('article').remove()
  //try a for each where you try to match up the id of the poster with the id in the array
  //and then splice it out
  for (var i=0; i<cleanedUnMoPosters.length; i++) {
    if (cleanedUnMoPosters[i].id == targetPoster.id) {
      cleanedUnMoPosters.splice(i, 1)
    } 
  } 
  console.log('cleaned UnMoPosters: ', cleanedUnMoPosters)
}

