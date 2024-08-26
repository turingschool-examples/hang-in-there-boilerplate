// query selector variables go here 👇
const mainPosterImage = document.querySelector(".poster-img");
const mainPosterTitle = document.querySelector(".poster-title");
const mainPosterQuote = document.querySelector(".poster-quote");

const randomPosterButton = document.querySelector(".show-random");
const makePosterButton = document.querySelector(".show-form");
const saveThisPosterButton = document.querySelector(".save-poster");
const savedPosterButton = document.querySelector(".show-saved");
const unmotivationalPosterButton = document.querySelector(".unmotivated");
const returnToMain = document.querySelector(".show-main");
const backToMain = document.querySelector(".back-to-main");
const offToMain = document.querySelector(".return-to-main");
const createPosterButton = document.querySelector(".make-poster");


const mainSection = document.querySelector(".main-poster");
const formSection = document.querySelector(".poster-form");
const savedSection = document.querySelector(".saved-posters");
const unmotivatedSection = document.querySelector(".unmotivational-posters");

var form = document.querySelector("form");
var inputImage = document.querySelector("#poster-image-url");
var inputTitle = document.querySelector("#poster-title");
var inputQuote = document.querySelector("#poster-quote");
var savedGrid = document.querySelector(".saved-posters-grid");
var savedUnmotivatedGrid = document.querySelector(".saved-unmotivated-grid");

const dialog = document.querySelector("dialog");
const modalImage = document.querySelector("#pop1");
const modalTitle = document.querySelector("#pop2");
const modalQuote = document.querySelector("#pop3");
const modalButton = document.querySelector("dialog button");


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
var savedUnmotivationalPosters = [];
var currentPoster;

// event listeners go here 👇
randomPosterButton.addEventListener("click", setupMainPoster);

makePosterButton.addEventListener("click", function() {
  hiddenswitch(formSection);
});

savedPosterButton.addEventListener("click", function() {
  hiddenswitch(savedSection);
  showSavedGrid(savedPosters, savedGrid, "reg");
});

unmotivationalPosterButton.addEventListener("click", function() {
  hiddenswitch(unmotivatedSection);
  showSavedGrid(savedUnmotivationalPosters, savedUnmotivatedGrid, "unmot");
});

returnToMain.addEventListener("click", function() {
  hiddenswitch(formSection);
});

backToMain.addEventListener("click", function() {
  hiddenswitch(savedSection);
});

offToMain.addEventListener("click", function() {
  hiddenswitch(unmotivatedSection);
})

saveThisPosterButton.addEventListener("click", function() {
  posterCreation(mainPosterImage.src, mainPosterTitle.innerText, mainPosterQuote.innerText);
  showSavedGrid(savedPosters, savedGrid, "reg");
  hiddenswitch(savedSection);
});

form.addEventListener("submit", function(event) {
  event.preventDefault();
  formControl();
  event.target.reset();
});

savedUnmotivatedGrid.addEventListener("dblclick", (e) => {
  var target = e.target;
  removePoster(target);
})

mainPosterImage.addEventListener("click", function() {
  mainPosterImage.setAttribute("src", images[getRandomIndex(images)]);
})

mainPosterTitle.addEventListener("click", function() {
  mainPosterTitle.innerHTML = titles[getRandomIndex(titles)];
})

mainPosterQuote.addEventListener("click", function() {
  mainPosterQuote.innerHTML = quotes[getRandomIndex(quotes)];
})

savedGrid.addEventListener("click", (e) => {
  var target = e.target;
  fillModal(target);
  dialog.showModal();
})

modalButton.addEventListener("click", () => {
  dialog.close();
})

// functions and event handlers go here 👇
// (we've provided two to get you started)!

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

function setupMainPoster() {
  let image = getRandomIndex(images);
  let title = getRandomIndex(titles);
  let quote = getRandomIndex(quotes);
  printPoster(images[image], titles[title], quotes[quote]);
};

function printPoster(image, title, quote) {
  mainPosterImage.setAttribute("src", image);
  mainPosterTitle.innerHTML = title;
  mainPosterQuote.innerHTML = quote;
};

function hiddenswitch(key) {
  mainSection.classList.toggle("hidden");
  key.classList.toggle("hidden");
};

function posterCreation(image, title, quote) {
  currentPoster = createPoster(image, title, quote);
  if (dataValidation(currentPoster, savedPosters)) {
    savedPosters.push(currentPoster);
    images.push(image);
    titles.push(title);
    quotes.push(quote);
  }
};

function formControl() {
  var image = inputImage.value;
  var title = inputTitle.value;
  var quote = inputQuote.value;
  posterCreation(image, title, quote);
  printPoster(image, title, quote);
  showSavedGrid(savedPosters, savedGrid, "reg");
  hiddenswitch(formSection);
};

function makePosterDiv(data, posterType) {
  let divOP = document.createElement("div");
  divOP.className = `mini-poster ${posterType}`;
  divOP.id = data.id;
  divOP.innerHTML += `<img src="${data.imageURL}" alt="nothin' to see here">`;
  divOP.innerHTML += `<h2>${data.title}</h2>`;
  divOP.innerHTML += `<h4>${data.quote}</h4>`;
  return divOP;
};

function showSavedGrid(listPosters, location, posterType) {
  listPosters.forEach((poster) =>{
    var divOfPoster = makePosterDiv(poster, posterType);
    if (posterValidation(divOfPoster, location)) {
      location.appendChild(divOfPoster);
    }
  })
};

function posterValidation(posterNode, posterGrid) {
  let matches = posterGrid.childNodes;
  for (let i =0; i < matches.length; i++){
    if (matches[i].isEqualNode(posterNode)) {
      return false;
    } else if (contentValidation(matches[i], posterNode)) {
      return false;
    }
  }
  return true;
};

function contentValidation(posterOne, posterTwo) {
  for(let i = 0; i < posterOne.children.length; i++){
    if (!posterOne.children[i].isEqualNode(posterTwo.children[i])) {
      return false;
    }
  }
  return true;
};

function dataValidation(data1, dataset) {
  dataArray = Object.entries(data1);
  for(let i=0; i < dataset.length; i++){
    dataSetArray = Object.entries(dataset[i])
    if (dataArray[1][1].trim().toLowerCase() === dataSetArray[1][1].trim().toLowerCase() &&
      dataArray[2][1].trim().toLowerCase() === dataSetArray[2][1].trim().toLowerCase() &&
      dataArray[3][1].trim().toLowerCase() === dataSetArray[3][1].trim().toLowerCase()) {
        return false;
    }
  }
  return true;
};

function cleanData(dataSet) {
  dataSet.forEach((data) => {
    var unPoster = createPoster(data.img_url, data.name, data.description);
    savedUnmotivationalPosters.push(unPoster);
  })
};

function removePoster(elementChecker) {  
  if (!elementChecker.parentElement.classList.contains("saved-unmotivated-grid")) {
    removePoster(elementChecker.parentElement);
  } else {
    let result = savedUnmotivationalPosters.findIndex((poster) =>{
      poster.title === elementChecker.children[1].innerText &&
      poster.quote === elementChecker.children[2].innerText &&
      poster.imageURL === elementChecker.children[0].src
    })
    savedUnmotivationalPosters.splice(result, 1);
    elementChecker.remove();
  }
};

function fillModal(target) {
  if (!target.parentElement.classList.contains("saved-posters-grid")) {
    fillModal(target.parentElement);
  } else {
    modalImage.setAttribute("src", target.children[0].src);
    modalTitle.innerHTML = target.children[1].innerText;
    modalQuote.innerHTML = target.children[2].innerText;
  }
};

function loadPage() {
  setupMainPoster();
  cleanData(unmotivationalPosters);
};

window.onload = loadPage();