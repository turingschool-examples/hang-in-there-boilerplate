// query selector variables go here 👇

//we are updating random images, title, quotes? how do we do this?
//When the page loads, we should see a poster with a randomly selected image, title, and quote
//1. create variable for accessing image
//2. that variable is possibly an object
//3. create a function to be able to generate a random number with that variable 

// When the page loads, we should see a poster with a randomly selected image, title, and quote
var accessImage = document.querySelector('.poster-img'); //accesses element src ="" where you put image URL

//put random imageURL into src. 
//so call on accessImage object variable.src = to random image
//since we created a variable under createPoster function (below), we have to call on the function to access imageURL
//var imageURL = images[randomIndexForImages] //new image
//so how to access object value: imageURL within function
//where can we store this function's retured value? the entire object?
//we can store this value in a variable!!!
//create variable that returns object
//so we can access imageURL with dot notation
var newPoster = createPoster(imageURL, title, quote); //returns the entire object
accessImage.src = newPoster.imageURL; //assigns to newImageURL value = random image in images array.
//QUESTION is a void element <img class="poster-img" src="" alt="nothin' to see here"> an OBJECT? line 13
//Yes, the <img> element with the class="poster-img" is an HTML element, and in the context of JavaScript, it can be considered an object.
var accessTitle = document.querySelector('.poster-title');
accessTitle.innerText = newPoster.title;
//if we console.log(accessTitle.innerText), it'll just print out title
//QUESTION: can you give us more examples of what to use inner HTML for? **update multiple items within it** like <section>
var accessQuote = document.querySelector('.poster-quote'); //gives us access to <h3>Quote</h3>
accessQuote.innerText = newPoster.quote;
//QUESTION!!!!!!: what else do we do??

// Every time the user clicks the Show Random Poster button, a new random poster is displayed.
//1. the querySelector can used to select the button Show random poster
//2. we have to attach that button to an event listener tell the computer to listen for a ('click', function)
//This function will create function that will generate a new random poster.

//calls and selects Show Another Random Poster element:
var ShowRandomPosterButton = document.querySelector('.show-random');

//select Show Another Random Poster element & tell computer to listen for a click, 
ShowRandomPosterButton.addEventListener('click', createPoster(imageURL, title, quote))
//function will have to generate a new random poster: including random image, title, quote.
//so we use the createPoster(imageURL, title, quote) function?
//THIS IS WHERE WE LEFT OFF!!!
//Every time the user clicks the Show Random Poster button, a new random poster is displayed.
//QUESTION!!!!! why isn't it doing anything to the page?? How do I console.log? Where does it show?

// var createPoster1 = document.querySelector('.main-poster');
// console.log(createPoster,'this is createPoster')
// createPoster1.innerText = currentPoster.imageURL;
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
var savedPosters = [];
var currentPoster;

// event listeners go here 👇

// functions and event handlers go here 👇

// (we've provided two to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
//Math.floor - but .floor brings it down to nearest whole number
//Math. = random decimal b/t 0-1

//When page loads, we need to generate a poster randomly
//When user clicks onto Show Random button, this function needs to return a random image, title, quote
//We have to add functionality to createPoster to do this:
function createPoster(newImageURL, newTitle, newQuote) {
  var randomIndexForImages = getRandomIndex(imageURL) //QUESTION: how do we console.log(imageURL), idk what that is, and what that prints out to?
  var newImageURL = images[randomIndexForImages] //new image
  var randomIndexForTitle = getRandomIndex(title)
  var newTitle = titles[randomIndexForTitle] //new random title
  var randomIndexForQuotes = getRandomIndex(quote)
  var newQuote = quotes[randomIndexForQuotes] //new random quote

  return {
    id: Date.now(), 
    imageURL:newImageURL, //change bc our return value has to give us random image
    title: newTitle, 
    quote: newQuote}
} //returns object..

<button type="button" name="browse-button">Show Another Random Poster</button>
</main>