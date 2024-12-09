// query selector variables here 👇

const posterImage = document.querySelector('.poster-img');
const posterTitle = document.querySelector('.poster-title');
const posterQuote = document.querySelector('.poster-quote');
const showRandomButton = document.querySelector('.show-random');
const makeOwnPosterButton = document.querySelector('.show-form');
const showSavedPostersButton = document.querySelector('.show-saved');
const backToMainButton = document.querySelector('.back-to-main');
const savePosterButton = document.querySelector('.save-poster');
const showMainButton = document.querySelector('.show-main');
const mainPosterSection = document.querySelector('.main-poster');
const formSection = document.querySelector('.poster-form');
const savedPostersSection = document.querySelector('.saved-posters');
const savedPostersGrid = document.querySelector('.saved-posters-grid');

// Arrays of image URLs, titles, and quotes
var images = [
  "./assets/bees.jpg", "./assets/bridge.jpg", "./assets/butterfly.jpg", 
  "./assets/cliff.jpg", "./assets/elephant.jpg", "./assets/flock.jpg", 
  "./assets/fox.jpg", "./assets/frog.jpg", "./assets/horse.jpg", 
  "./assets/lion.jpg", "./assets/mountain.jpg", "./assets/pier.jpg", 
  "./assets/puffins.jpg", "./assets/pug.jpg", "./assets/runner.jpg", 
  "./assets/squirrel.jpg", "./assets/tiger.jpg", "./assets/turtle.jpg"
];

var titles = [
  "determination", "success", "inspiration", "perspiration", "grit", 
  "empathy", "feelings", "hope", "believe", "try", "conviction", 
  "accomplishment", "achievement", "ambition", "clarity", "challenge", 
  "commitment", "confidence", "action", "courage", "focus", "breathe", 
  "gratitude", "imagination", "kindness", "mindfulness", "knowledge", 
  "opportunity", "passion", "patience", "practice", "smile", "trust", 
  "understanding", "wisdom"
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
  "Limit your 'always' and your 'nevers.'", 
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

// Functions go here 👇

// Random index generator function
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// Function to create a poster
function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(), 
    imageURL: imageURL, 
    title: title, 
    quote: quote
  };
}

// Function to display a poster
function displayPoster(poster) {
  posterImage.src = poster.imageURL;  
  posterTitle.textContent = poster.title;  
  posterQuote.textContent = poster.quote; 
}

// Function to display a random poster
function displayRandomPoster() {
  const randomImageIndex = getRandomIndex(images);
  const randomTitleIndex = getRandomIndex(titles);
  const randomQuoteIndex = getRandomIndex(quotes);

  const randomPoster = createPoster(images[randomImageIndex], titles[randomTitleIndex], quotes[randomQuoteIndex]);

  displayPoster(randomPoster);
}

// Function to switch views between different sections
function switchView(viewToShow) {
  const sections = [mainPosterSection, formSection, savedPostersSection];
  sections.forEach(section => {
    section.style.display = 'none';  // Hide all sections
  });

  viewToShow.style.display = 'block';  // Show the selected section
}

// Event listeners for buttons
window.addEventListener('load', () => {
  displayRandomPoster();
  switchView(mainPosterSection);
});

showRandomButton.addEventListener('click', displayRandomPoster);  // Show another random poster

makeOwnPosterButton.addEventListener('click', () => {
  switchView(formSection);  
});

showSavedPostersButton.addEventListener('click', () => {
  switchView(savedPostersSection);  
});

backToMainButton.addEventListener('click', () => {
  switchView(mainPosterSection);  
});

showMainButton.addEventListener('click', () => {
  switchView(mainPosterSection);  
});

// Save poster functionality
savePosterButton.addEventListener('click', () => {
  const poster = {
    imageURL: posterImage.src,
    title: posterTitle.textContent,
    quote: posterQuote.textContent
  };

  console.log('Poster saved:', poster);

  // Add saved poster to the grid (this is a simple way to show saved posters)
  const savedPosterElement = document.createElement('div');
  savedPosterElement.classList.add('saved-poster-item');
  savedPosterElement.innerHTML = `
    <img src="${poster.imageURL}" alt="Saved Poster">
    <h3>${poster.title}</h3>
    <p>${poster.quote}</p>
  `;
  savedPostersGrid.appendChild(savedPosterElement);
});

makeOwnPosterButton.addEventListener('click', () => {
  console.log('Make Your Own Poster button clicked');
  switchView(formSection);  
});
showSavedPostersButton.addEventListener('click', () => {
  console.log('Show Saved Posters button clicked');
  switchView(savedPostersSection);  
});

