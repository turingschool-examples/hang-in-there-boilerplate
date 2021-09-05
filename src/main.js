/**
 * Just do a quick find all in your project before pushing to remove all unwanted console logs I think command + shift + f in Atom
 */

// query selector variables go here 👇
var imageElement = document.querySelector(".poster-img");
var titleElement = document.querySelector(".poster-title");
var quoteElement = document.querySelector(".poster-quote");
var backToMainButton = document.querySelector(".back-to-main");
var nevermindButton = document.querySelector(".show-main");
var randomizeButton = document.querySelector(".show-random");
var savedPostersButton = document.querySelector(".show-saved");
var showFormButton = document.querySelector(".show-form");
var customPosterButton = document.querySelector(".make-poster");
var savePosterButton = document.querySelector(".save-poster");
var mainPosterPage = document.querySelector(".main-poster");
var posterFormPage = document.querySelector(".poster-form");
var savedPostersPage = document.querySelector(".saved-posters");
var userImage = document.querySelector("#poster-image-url");
var userTitle = document.querySelector("#poster-title");
var userQuote = document.querySelector("#poster-quote");
var grid = document.querySelector(".saved-posters-grid")

// Good practice to keep global variabels at the top
var savedPosters = [];
var currentPoster;

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

randomizeAndDisplay();

function toggleHiddenView(elementToShow, elementToHide) {
	// show a thing
	// hide a thing
}

// event listeners go here 👇
randomizeButton.addEventListener('click', randomizeAndDisplay) // You can give a function without arguments directly to an event listener
//  Just don't call it like
// randomizeButton.addEventListener('click', randomize())
// because it will be invoked when the script runs on load and you want it to be invoked on click


// ... but if you need to pass arguments to an event listener, you need to add them in an anonymous function like below

showFormButton.addEventListener('click', function() {
	toggleHiddenView(posterFormPage, mainPosterPage)
	// posterFormPage.classList.remove("hidden")
  // mainPosterPage.classList.add("hidden")
})
savedPostersButton.addEventListener('click', function() {
	toggleHiddenView(savedPostersPage, mainPosterPage)
  // savedPostersPage.classList.remove('hidden')
  // mainPosterPage.classList.add('hidden')
})
nevermindButton.addEventListener('click', function() {
	toggleHiddenView(mainPosterPage, posterFormPage)
  // mainPosterPage.classList.remove('hidden')
  // posterFormPage.classList.add('hidden')
})
backToMainButton.addEventListener('click', function() {
	toggleHiddenView(mainPosterPage, posterFormPage)
  // mainPosterPage.classList.remove('hidden')
  // savedPostersPage.classList.add('hidden')
})
/** 
 * Could also combine the following functions into a savePoster function like:
 * function savePoster() { // ... all those functions } and call like
 * savePosterButton.addEventListener('click', savePoster)
*/
savePosterButton.addEventListener('click', function() {
  pushIntoArray()
  saveUserData()
  displayInGrid()
})

customPosterButton.addEventListener('click', function() {
	/**
	 * Usually you want to add event.preventDefault() first because it is synchronous and most forms 
	 * make an API call which is asynchronous and the event will have happend before the function resumes
	 * Don't worry about it much now but since events deal with time and computer time is quick you usually want to 
	 * tell the event to do something at the top of the function
	 */
  event.preventDefault()
  createCustomPoster();
  showUserPoster()
});
// functions and event handlers go here 👇

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}

/**
 * Something like this might be a bit more strait forward for the randomize function.
 * Loops are great but I feel this could be more strait forward for what it's doing.
 * It's good to try and do one thing at a time with functions so this function could be split in 2 in case you need it elsewhere
 */

function createRandomPoster() {
	var imagesIndex = getRandomIndex(images)
	var titlesIndex = getRandomIndex(titles)
	var quotesIndex = getRandomIndex(quotes)

	return currentPoster = new Poster(
		images[imagesIndex],
		titles[titlesIndex],
		quotes[quotesIndex]
	)
}

function randomizeAndDisplay() {
	var randomPoster = createCustomPoster()
	// displayPoster()
}

// function randomize() {
//   var txtImgOptions = [images, titles, quotes];
//   var randomPoster = [];
//   for (var i = 0; i < txtImgOptions.length; i++) {
//     var index = getRandomIndex(txtImgOptions[i])
//     randomPoster.push(txtImgOptions[i][index])
//   }
//   currentPoster = new Poster(randomPoster[0], randomPoster[1], randomPoster[2])
//   displayPoster();
// }

function displayPoster() {
  imageElement.src = currentPoster.imageURL
  titleElement.innerText = currentPoster.title
  quoteElement.innerText = currentPoster.quote
}

function showUserPoster() {
	toggleHiddenView(mainPosterPage, posterFormPage)
  // mainPosterPage.classList.remove("hidden")
  // posterFormPage.classList.add("hidden")
  displayPoster()
}

function createCustomPoster() {
  currentPoster = new Poster(userImage.value, userTitle.value, userQuote.value)
  console.log('image', currentPoster.imageURL)
}

function saveUserData() {
  images.push(imageElement.src)
  titles.push(titleElement.innerText)
  quotes.push(quoteElement.innerText)

  }

function pushIntoArray(){
  if (!savedPosters.includes(currentPoster)) { // Nice check!
    savedPosters.push(currentPoster)
      console.log((!savedPosters.includes(currentPoster)))
    }
  }

function displayInGrid() {
  grid.innerHTML = `` // Why backticks here?  `` == '' == "".  No big deal just a small style thing
  for (var i = 0; i < savedPosters.length; i++) {
		//  Backticks don't care about white space so something like this is a bit more readable when formatted like HTML
    grid.innerHTML += `
			<article class= "mini-poster">
				<img src=${savedPosters[i].imageURL} alt="nothin' to see here">
				<h2>${savedPosters[i].title}</h2>
				<h4> ${savedPosters[i].quote}</h4>
			</article>
		`
  }
}
