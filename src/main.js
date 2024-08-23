var image = document.querySelector('.poster-img');
var title = document.querySelector('.poster-title');
var quote = document.querySelector('.poster-quote');
var mainPoster = document.querySelector('.main-poster');
var showForm = document.querySelector('.poster-form');
var savedPostersSection = document.querySelector('.saved-posters');

// Buttons
var makeNewPosterButton = document.querySelector('.show-form');
var showSavedPosterButton = document.querySelector('.show-saved');
var nevermindButton = document.querySelector('.show-main');
var backToMainButtom = document.querySelector('.back-to-main');
var showMyPosterButton = document.querySelector('.make-poster');

// Input Fields
var userImageUrlInput = document.querySelector('#poster-image-url');
var userTitleInput = document.querySelector('#poster-title');
var userQuoteInput = document.querySelector('#poster-quote');


// First, use the values from the inputs to create a new, unique poster object and save it as the value of the currentPoster global variable (part of your data model)

showMyPosterButton.addEventListener('click', function(event) {
  event.preventDefault();
  currentPoster = createPoster(userImageUrlInput.value, userTitleInput.value, userQuoteInput.value);
  images.push(currentPoster.imageURL);
  titles.push(currentPoster.title);
  quotes.push(currentPoster.quote);
  image.src = currentPoster.imageURL;
  title.innerText = currentPoster.title;
  quote.innerText = currentPoster.quote;
  mainPoster.classList.toggle('hidden');
  showForm.classList.toggle('hidden');
});


// Save the submitted data into the respective arrays (image URL into the images array, etc - all part of your data model) so that future random posters can use the user-created data

// Change back to the main poster view (hiding the form view again)

// Use the new, unique poster object (which should be saved in the currentPoster variable - part of your data model) to display the newly created poster image, title, and quote in the main view on the DOM

// Will use createPoster Fx to take user inputs and generate new poster
// Store user input variables in `currentPoster` variable

window.addEventListener("load", collectPosterParts);

makeNewPosterButton.addEventListener("click", function() {
  mainPoster.classList.toggle('hidden')
  showForm.classList.toggle('hidden')
});

showSavedPosterButton.addEventListener('click', function() {
  mainPoster.classList.toggle('hidden')
  savedPostersSection.classList.toggle('hidden')
});

nevermindButton.addEventListener('click', function() {
  mainPoster.classList.remove('hidden')
  showForm.classList.toggle('hidden')
})

backToMainButtom.addEventListener('click', function() {
  mainPoster.classList.toggle('hidden')
  savedPostersSection.classList.toggle('hidden')
})

//Consider how you might use arguments/parameters to make dynamic reusable functions to control what is shown/hidden.


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

// event listeners go here 👇

const randomPosterButton = document.querySelector('.show-random');
randomPosterButton.addEventListener("click",  collectPosterParts);

// functions and event handlers go here 👇
// (we've provided two to get you started)!

// If the function requires the use of "AND" to describe it => SRP that shit
function collectPosterParts() {
  var randomImage = images[getRandomIndex(images)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomQuote = quotes[getRandomIndex(quotes)];
  currentPoster = createPoster(randomImage, randomTitle, randomQuote);
  image.src = randomImage;
  title.innerText = randomTitle;
  quote.innerText = randomQuote;
  console.log(currentPoster)
}

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





// Switching views

// Click "Show Saved Posters" button
  // Reveal saved posters area

// Click "Nevermind, take me back" OR "Back to Main buttons"
  // Show only  main poster section


// Will use classList to add/remove class of `hidden` to reveal create poster form
  // Event listener to alternate what is hidden and what is not upon clicking "Make Your Own Poster" button
// Will save newly created poster in arrays for future recycling with `Random Poster` Button

// Clicking "Nevermind, Take me back" button return to original view of main poster section


