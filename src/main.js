//how to link Javascript file in HTML? 👇
//already done in HTML: script src="path-to-your-script.js"></script>

// QUERY SELECTOR VARIABLES go here 👇
//in doc/DOM object, we'll query select for element that has a class with a value of '.value' = '.poster-img' 
//attributes usu are key:value pairs
var accessImage = document.querySelector('.poster-img'); //accesses element src ="" where you put image URL
var accessTitle = document.querySelector('.poster-title');
var accessQuote = document.querySelector('.poster-quote'); //gives us access to <h3>Quote</h3>
//QUESTION!!!!!!: lost, what to do now?
//QUESTION!!!!!!: how do we see what we do on the webpage? Nothing is showing up open html.js so I don't know
// I'm doing anything!

//calls and selects Show Another Random Poster element:
var ShowRandomPosterButton = document.querySelector('.show-random');


var makeOwnPosterButton = document.querySelector('.show-form');
var showSavedPostersButton = document.querySelector('.show-saved')
var nevermindTakeMeBackButton = document.querySelector('.show-main')

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
var savedPosters = [];//it 2 and 3
var currentPoster//global variable, use that to store current poster data in that variable

//EVENT LISTENERS HERE! 👇 TELLING COMPUTER TO LISTEN TO CLICK:

// When the page loads, we should see a poster with a randomly selected image, title, and quote
window.addEventListener('load',randomPoster)
// Every time the user clicks the Show Random Poster button, a new random poster is displayed.
ShowRandomPosterButton.addEventListener('click', randomPoster)


//When a user clicks the “Make Your Own Poster” button, we should see the form,
// and the main poster should be hidden
//hide it show new content
makeOwnPosterButton.addEventListener('click',generateForm) //next step to generate form, and the main poster should be hidden

//When a user clicks the “Show Saved Posters” button, 
//we should see the saved posters area, and the main poster should be hidden

showSavedPostersButton.addEventListener('click', showSavedPoster) //=> should see the saved posters area, and the main poster should be hidden

//When a user clicks the “Nevermind, take me back!” or “Back to Main” 
//buttons, we should only see the main poster section
nevermindTakeMeBackButton.addEventListener('click', randomPoster)
//In summary: Be able to switch between the three views (main poster, form, and saved posters) on the correct button clicks

// FUNCTIONS AND EVENT HANDLERS GO HERE 👇

// (we've provided two to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
//Math. = random decimal b/t 0-1   -> Math.floor - .floor brings it down to nearest whole number

function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(), 
    imageURL: imageURL, //change bc our return value has to give us random image
    title: title, 
    quote: quote}
} //returns object..

//current poster value is random image, title wuote
//global variable, use that to store current poster data in that variable
// var currentPoster = {
//   newImageURL: images[getRandomIndex(images)],
//   newTitle: titles[getRandomIndex(titles)],
//   newQuote: quotes[getRandomIndex(quotes)] 
// }
function randomPoster() {
 //QUESTION: how do we console.log(imageURL), idk what that is, and what that prints out to?
  var newImageURL = images[getRandomIndex(images)] //new image
  // console.log(newImageURL)
  var newTitle = titles[getRandomIndex(titles)] //new random title
  //console.log(newTitle)
  var newQuote = quotes[getRandomIndex(quotes)] 

  var newPoster = createPoster(newImageURL, newTitle, newQuote); //returns the entire object
  accessImage.src = newPoster.imageURL; //assigns to newImageURL value = random image in images array.
  accessTitle.innerText = newPoster.title;
  accessQuote.innerText = newPoster.quote;
}

var makeOwnPosterButton = document.querySelector('.show-form');
var showSavedPostersButton = document.querySelector('.show-saved')
var nevermindTakeMeBackButton = document.querySelector('.show-main')



function generateForm() {
//should see the form, and the main poster should be hidden - hide it show new content
//BEST PRACTICE: hide first
// var mainPosterSection = document.querySelector('.main-poster')
//selecting HTML element which is an object by class main-poster: class="main-poster" = style="width 200vw";visibility: hidden
//
// document.querySelector('.main-poster').style.visibility = "hidden";
//if I had word hidden in class then use it

//Class selectors - watch for this class, then do its thing!

//hidden means something here: bc it in our CSS style.css class selector there is a 
//class selector hidden that applies that rule to all elements with a class that has the word hidden in it
document.querySelector('.main-poster').classList.add("hidden"); //add rule to hide poster
document.querySelector('.poster-form').classList.remove("hidden")
}

//.style = inline CSS, go in CSS in HTML 
//TIPS:
//Pay attention with SCOPE: has to do with scope!
