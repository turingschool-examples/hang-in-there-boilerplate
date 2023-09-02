//how to link Javascript file in HTML? 👇 //already done in HTML: script src="path-to-your-script.js"></script>

// QUERY SELECTOR VARIABLES go here 👇
//iteration 0:
var accessImage = document.querySelector('.poster-img'); //accesses element src ="" where you put image URL
var accessTitle = document.querySelector('.poster-title');
var accessQuote = document.querySelector('.poster-quote'); //gives us access to <h3>Quote</h3>
var ShowRandomPosterButton = document.querySelector('.show-random');

//iteration 1:
var makeOwnPosterButton = document.querySelector('.show-form');
var showSavedPostersButton = document.querySelector('.show-saved'); 
var saveAPosterButton = document.querySelector('.save-poster')
var nevermindTakeMeBackButton = document.querySelector('.show-main'); 
var backToMainButton = document.querySelector('.back-to-main');

var mainPoster = document.querySelector('.main-poster'); 
var createOwnPosterForm = document.querySelector('.poster-form');
var savedPostersButton = document.querySelector('.saved-posters'); //hidden in string in index.html so to view it have to classList.remove("hidden")

//iteration 2:
var showMyPoster = document.querySelector('.make-poster');

// DATA PROVIDED 👇
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
var currentPoster = document.querySelector('.poster') // current poster on main page
var newPoster = {} //container, can pass an object
//EVENT LISTENERS HERE! 👇 TELLING COMPUTER TO LISTEN TO CLICK:
window.addEventListener('load',randomPoster);
ShowRandomPosterButton.addEventListener('click', randomPoster);
makeOwnPosterButton.addEventListener('click',generateForm); //next step to generate form, and the main poster should be hidden
showSavedPostersButton.addEventListener('click', showSavedPoster); //=> should see the saved posters area, and the main poster should be hidden
nevermindTakeMeBackButton.addEventListener('click',backToMainPoster);
backToMainButton.addEventListener('click',backToMainPoster);
saveAPosterButton.addEventListener('click', savePoster);
showMyPoster.addEventListener('click',showUserInputPoster);
// FUNCTIONS AND EVENT HANDLERS GO HERE 👇 (we've provided two to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
} //Math. = random decimal b/t 0-1   -> Math.floor - .floor brings it down to nearest whole number

function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(), 
    imageURL: imageURL,
    title: title, 
    quote: quote}
} //returns object..

function randomPoster() {
  var newImageURL = images[getRandomIndex(images)] // console.log(newImageURL)
  var newTitle = titles[getRandomIndex(titles)] //console.log(newTitle)
  var newQuote = quotes[getRandomIndex(quotes)] 
  newPoster = createPoster(newImageURL, newTitle, newQuote); //returns the entire object
  accessImage.src = newPoster.imageURL; //assigns to newImageURL value = random image in images array.
  accessTitle.innerText = newPoster.title;
  accessQuote.innerText = newPoster.quote;
}

function generateForm() {
  mainPoster.classList.add("hidden"); //add rule to hide poster
  createOwnPosterForm.classList.remove("hidden")
} //Best practice to hide first. To hide, add hidden string rule Class selectors rule book?

//savePoster fx already pushes all current posters up to array.

//savePoster() function already pushes currentPoster into array
//now we have to prevent click event from adding a duplicate item into array.
//if statement
function savePoster() { 
  var isDuplicate = false
  for (i=0; i < savedPosters.length; i++) {
    if (savedPosters[i].isEqualNode(currentPoster)) { //going to every index in array, so if current poster is different then, it'll add that
      isDuplicate = true; 
      break; 
    }
  }
    if (!isDuplicate) {
      savedPosters.push(currentPoster.cloneNode(true))
    }
}  


  //check if current poster is in array before pushing it!
  //do this by using a unique identifier for each poster.... 
  //if identifier is not present in savedPosters array
  //then push
  //current poster pushed to savePoster array.

  //QUESTION!! It's not adding anything else to array but one of the posters!

//QUESTION: WHY IS IT ONLY PUSHING 1 IMAGE??
//   // var newCurrentPoster = currentPoster.innerText
//   // console.log(newCurrentPoster, "newCurrentPost")
//   // if (savedPosters.indexOf(newCurrentPoster) === -1)
//   //   savedPosters.push(newCurrentPoster)
//   //   console.log(savedPosters,"saved Posters")
// }

// for (i=0; i < savedPosters.length; i++) 
// console.log(savedPosters[i])
// if (savedPosters[i] !== currentPoster) {
// console.log("hi")
// return savedPosters.push(currentPoster) 
// }


// ["currentPoster", ]
// if (array.length-1 !== curentPoster)
// savedPosters.push(currentPoster)

//1. push current poster into savedPoster array
//2. after pushing 1st current poster, you're checking the array.length-1  and check array.length-2
//3. if they are, remove
//if user clicks savePoster button, more than once, it will only save it once, no dupes.
  // console.log(savedPosters, "saved Poster Array")
  // console.log(currentPoster, "current Poster")


//we now want to display all the saved posters. 
var posterGrid = document.querySelector('.saved-posters-grid')
// iteration 3: go into savePoster function invoked in the savePosterButton function declaration when clicked
//currentPoster will be pushed to savedPoster array
//so every time there is a new current Poster, we want to push that into the saved poster array.

  // show the array of posters
  // add array into a class selector: class or id
  // iteration 3 or 4
function showSavedPoster() {
  posterGrid.innerHTML = ""
  for (var i=0; i < savedPosters.length; i++) {
    var posterGridContainer = document.createElement('div');
    posterGridContainer.classList.add('.saved-posters-grid');
    posterGridContainer.appendChild(savedPosters[i].cloneNode(true));
    posterGrid.appendChild(posterGridContainer)
    console.log(document.querySelector('.saved-posters-grid')) // go into the grid element and add a child for every item in savedPosters array.
  }
  mainPoster.classList.add("hidden"); //add rule to hide poster
  savedPostersButton.classList.remove("hidden")
} 

// When a user clicks the “Nevermind, take me back!” or “Back to Main” buttons, we should only see the main poster section
function backToMainPoster() {
  // console.log('Taking me back to main poster')
  mainPoster.classList.remove("hidden");
  nevermindTakeMeBackButton.classList.add("hidden"); //hide that button
  createOwnPosterForm.classList.add("hidden"); //hide that createOwnPosterForm!
}

var inputForImageURL = document.querySelector('#poster-image-url')
// var input = document.querySelector('input') //access 1st <input element>
// var input1 = document.getElementById('poster-image-url') 
// console.log(accessPosterImageURL,"accessPosterImageURL")
var inputForTitle =  document.querySelector('#poster-title')
var inputForQuote = document.querySelector('#poster-quote')

function showUserInputPoster(event) { //prevent generateRandom from generating it
  event.preventDefault()
  var newImage = inputForImageURL.value
  var newTitle = inputForTitle.value
  var newQuote = inputForQuote.value
 //change mainPoster image to input values
  var poster = createPoster(newImage,newTitle,newQuote) //returns object to property
  renderPoster(poster);
  backToMainPoster(); //when showuser button pressed, assign 
  //Change back to the main poster view (hiding the form view again)
  //inspect input area, to return what value.
  // id.
}

function renderPoster(poster) {
  console.log(poster.imageURL)
  accessImage.src = poster.imageURL
  accessTitle.innerText = poster.title
  accessQuote.innerText = poster.quote
}



// Go through code to create global variables so every function can access it
//var mainPoster = document.querySelector('.main-poster')


//.style = inline CSS, go in CSS in HTML 
//TIPS:
//- Pay attention with SCOPE: has to do with scope!
//- Math. = random decimal b/t 0-1   -> Math.floor - .floor brings it down to nearest whole number
//-Best practice to hide first. To hide, add hidden string rule Class selectors rule book?
//-Best practice not to querySelector in a function.

