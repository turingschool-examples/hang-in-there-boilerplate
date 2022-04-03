// query selector variables go here 👇
// test
// we've provided you with some data to work with 👇
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
  "Don't downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
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
  "Never limit yourself because of others' limited imagination; never limit others because of your own limited imagination.",
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

var colors = [
  "black",
  "#005F73",
  "#CA6702",
  "#BB3E03",
  "#AE2012",
  "#E9D8A6",
  "#0A9396",
  "#001219",
  "#94D2BD",
  "#9B2226",
  "#EE9B00",
];
var savedPosters = [];
var currentPoster;

// event listeners go here 👇
//This code will: display a random poster on load
window.addEventListener("load", uponLoad)

//This piece of code will: add event listening to "show random" button. On click,
//it will display a new random poster.
let showRandomButton = document.querySelector(".show-random")
showRandomButton.addEventListener("click", uponLoad)

//This piece of code will: add event listening to "change background color" button. On click,
//it will change the poster's background color.
let backgroundColorButton = document.querySelector(".change-background");
backgroundColorButton.addEventListener("click", changeBackgroundColor);


//These will: add event listening to the title  and quote buttons. On click,
//random selection is generated and displayed
let posterImageButton = document.querySelector(".poster-img")
posterImageButton.addEventListener("click", changeImage);

let posterTitleButton = document.querySelector(".poster-title");
posterTitleButton.addEventListener("click", changeTitle);

let posterQuoteButton = document.querySelector(".poster-quote");
posterQuoteButton.addEventListener("click", changeQuote);

//This will: add event listening to "Make Your Own Poster" button. On click,
//it will show form
let makeOwnPosterButton = document.querySelector(".show-form");
makeOwnPosterButton.addEventListener("click", toggleFormView);

//This will: add event listening to "Nevermind, Go Back" button. On click,
//it will restore main view from "Make Your Own Poster" view
let goBackButton = document.querySelector(".show-main");
goBackButton.addEventListener("click", toggleFormView);

//This will: add event listening to "Show Saved Posters" button. On click,
//it will show saved posters section
let showSavedButton = document.querySelector(".show-saved");
showSavedButton.addEventListener("click", toggleSavedView)
showSavedButton.addEventListener("click", miniPoster)

//This will: add event listening to "Back to Main" button
let backToMainButton = document.querySelector(".back-to-main");
backToMainButton.addEventListener("click", toggleSavedView);

let showMyPosterButton = document.querySelector(".make-poster")
showMyPosterButton.addEventListener("click", submitForm)


let saveButton = document.querySelector(".save-poster")
saveButton.addEventListener("click", storeData)


// functions and event handlers go here 👇
// (we've provided one for you to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

//This piece of code will: select a random element from any array passed through its parameters
function getRandomElement(array) {
  let randomNum = (getRandomIndex(array));
  let randomItem = array[randomNum]
  return randomItem
}

//This piece of code will: display a random pic upon page load
  function uponLoad() {
  let loadPoster = new RandomPoster()
  document.getElementById("poster-img").src = loadPoster.imageURL
  document.getElementById("title-button").innerHTML = loadPoster.title
  document.getElementById("quote-button").innerHTML = loadPoster.quote
  return loadPoster

//  document.querySelector(".poster-img").src = getRandomElement(images)
//  document.querySelector(".poster-title").innerHTML = getRandomElement(titles)
//  document.querySelector(".poster-quote").innerHTML = getRandomElement(quotes)
}

// This code will: access colors array and change poster background color when invoked
function changeBackgroundColor() {
  let posterBackground = document.querySelector(".poster");
  posterBackground.style.backgroundColor = getRandomElement(colors);
}

//
function changeImage() {
  document.querySelector(".poster-img").src = getRandomElement(images)
}

// This code will: generate and display new title in title button
function changeTitle() {
  posterTitleButton.innerHTML = getRandomElement(titles);
}

// This code will: generate and display new quote in quote button
function changeQuote() {
  posterQuoteButton.innerHTML = getRandomElement(quotes);
}


//This will: turng main view on and off
function toggleMainView() {
  const grabPosterId = document.getElementById("main-posterId");
  if (grabPosterId.className == "main-poster") {
    grabPosterId.className = "main-poster hidden";
  } else {
    grabPosterId.className = "main-poster";
  }
}


// This code will: toggle between "hidden" class in order to
// reveal form
function toggleFormView() {
  const grabFormId = document.getElementById("poster-form-shown");
  if (grabFormId.className == "poster-form hidden") {
    grabFormId.className = "poster-form";
    toggleMainView();
  } else {
    grabFormId.className = "poster-form hidden";
    toggleMainView();
  }
}

//Turns saved posters section on and off
function toggleSavedView() {
  const grabSavedId = document.getElementById("saved-posters-shown");
  if (grabSavedId.className == "saved-posters hidden") {
    grabSavedId.className = "saved-posters";
    toggleMainView();
  } else {
    grabSavedId.className = "saved-posters hidden";
    toggleMainView();
    }
  }

let newArray = [];
let savedArea = document.querySelector(".saved-posters-grid");


// Accepts user input from form and displays data on main page
function submitForm() {
  event.preventDefault();
  toggleFormView();
  let data = getFormData();
  document.getElementById("poster-img").src = data.imageURL
  document.getElementById("title-button").innerHTML = data.title
  document.getElementById("quote-button").innerHTML = data.quote
}

// Fetches data from form, generates new Poster instance, saves submitted data to arrays
function getFormData() {
  let userInputImage = document.getElementById("poster-image-url").value;
  let userInputQuote = document.getElementById("poster-quote").value;
  let userInputTitle = document.getElementById("poster-titleId").value;
  let userPoster = new Poster(userInputImage, userInputTitle, userInputQuote);

  images.push(userPoster.imageURL)
  titles.push(userPoster.title)
  quotes.push(userPoster.quote)
  return userPoster
}


function captureAsObject() {
  let currentDisplayImage = document.getElementById("poster-img").src
  let currentDisplayQuote = document.getElementById("quote-button").innerText;
  let currentDisplayTitle = document.getElementById("title-button").innerText;
  let newObject = new Poster (currentDisplayImage, currentDisplayTitle, currentDisplayQuote);
  return newObject
}


// Stores posters as objects until saved poster area is full
function storeData() {
  let myPoster = captureAsObject()
for (let i = 0; i < 10; i++)
if (!newArray[i]) {
  newArray[i] = myPoster;
  return myPoster;
} else if (myPoster.title === newArray[i].title &&
   myPoster.quote === newArray[i].quote &&
   myPoster.imageURL === newArray[i].imageURL) {
     console.log("Taken!");
     return "taken!";
   } else if (newArray[i] === undefined) {
         newArray[i] = myPoster;
         return newArray
       }
  }

  function miniPoster() {
  for (let i = 0; i < newArray.length; i++) {
    let a = newArray[i].imageURL
    let b = newArray[i].title
    let c = newArray[i].quote
    let d = newArray[i].id
    let aa = document.getElementById("mini-img" + i);
    let bb = document.getElementById("mini-poster-title" + i);
    let cc = document.getElementById("mini-poster-quote" + i);
    let dd = document.getElementById("mini-poster-shown" + i);
    dd.className = "mini-poster " + newArray[i].id;
    aa.src = a;
    bb.innerText = b;
    cc.innerText = c;
    }
    getAllMiniPosters()
  }

  function deletePoster() {
    let allMiniPosters = document.querySelectorAll(".mini-poster")
    for (let i = 0; i < allMiniPosters.length; i++) {
      let idNumber = allMiniPosters[i].id
      if (idNumber.includes(this.id)){
      console.log("delete")
      newArray.splice(i, 1);
      console.log(newArray);
      let toBeRemoved = document.getElementById(idNumber);
      console.log(toBeRemoved)
      toBeRemoved.className = "mini-poster hidden"
    } else {
      console.log("no")
    }
  }
}

function getAllMiniPosters() {
let allMiniPosters = document.querySelectorAll(".mini-poster")
for (let i = 0; i < allMiniPosters.length; i++) {
  allMiniPosters[i].addEventListener("dblclick", deletePoster)
  }
  return allMiniPosters
}