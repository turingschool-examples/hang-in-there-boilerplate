// query selector variables go here 👇

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

var currentPoster;
var savedPosters = [];
var imageMain = document.querySelector('.poster-img');
var quoteMain = document.querySelector('.poster-quote');
var titleMain = document.querySelector('.poster-title');
var randomPoster = document.querySelector('.show-random');
var posterForm = document.querySelector('.poster-form');
var posterFormButton = document.querySelector('.show-form');
var mainPoster = document.querySelector('.main-poster');
var removeFormButton = document.querySelector('.show-main');
var savedPosterPage = document.querySelector('.saved-posters');
var savedPosterButton = document.querySelector('.show-saved');
var fromSavedButton = document.querySelector('.back-to-main')
var titleInput = document.getElementById('poster-title');
var quoteInput = document.getElementById('poster-quote');
var imageInput = document.getElementById('poster-image-url');
var showPoster = document.querySelector('.make-poster');
var saveThisPosterButton = document.querySelector('.save-poster');
var savedPostersGrid = document.querySelector('.saved-posters-grid');
// // event listeners go here 👇





  // console.log('outside', title, imageURL, quote)
savedPosterButton.addEventListener('click', showSaved);
removeFormButton.addEventListener('click', backToMain);
posterFormButton.addEventListener('click', showForm);
fromSavedButton.addEventListener('click', backToMainSaved);
showPoster.addEventListener('click', showPosterFunction);
randomPoster.addEventListener('click', changeButton );
saveThisPosterButton.addEventListener('click', saveThisPoster);
// // Save This Poster Function


function saveThisPoster() { // WE NEED TO NOT HAVE THE DUPLICATE
// currentPoster = new Poster (imageMain.src, quoteMain.innerText, titleMain.innerText); // making new instance

currentPoster = new Poster (imageMain.src, quoteMain.innerText, titleMain.innerText);


if (!savedPosters.includes(currentPoster)) {
  savedPosters.push(currentPoster);
}


  // if (savedPosters.length === 0) { // if the lenght of the savedPosters array is 0 (none in there)
  //   savedPosters.push(currentPoster); // then add the new saved poster to the array
  // } else if (savedPosters.length !== 0) { // if the savedPosters array is NOT equal to zero
  //     for (var i = 0; i < savedPosters.length; i++) { // then go through the for loop
  //       if (savedPosters[i].imageURL !== currentPoster.imageURL ) /* && savedPosters[i].title !== newSavedPoster.title && savedPosters[i].quote !== newSavedPoster.quote)*/ { // if the savedPoster element at position i's does NOT have the same property as the new poster 'instance's image
  //           console.log('Im activated');
  //         savedPosters.push(currentPoster); // then add new poster to the array
  //       }
  //     }
  // }
};

console.log(savedPosters);






// && savedPoster[i].title !== titleMain.innerText && savedPoster[i].quote !== quoteMain.innerText


// currentPoster
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

titleMain.innerText = titles[getRandomIndex(titles)];
quoteMain.innerText = quotes[getRandomIndex(quotes)];
imageMain.src = images[getRandomIndex(images)];


function changeButton(){
    titleMain.innerText = titles[getRandomIndex(titles)];
    quoteMain.innerText = quotes[getRandomIndex(quotes)];
    imageMain.src = images[getRandomIndex(images)];
}

function showForm() {
  if (posterForm.classList.contains('hidden')) {
    posterForm.classList.remove('hidden');
    mainPoster.classList.add('hidden');
  }
}
// refactor possible
function backToMain() {
  if (mainPoster.classList.contains('hidden')) {
      mainPoster.classList.remove('hidden');
      posterForm.classList.add('hidden');
      // changeButton();
    }
  }




function showSaved() {
  var savedHTML = "";
  if (savedPosterPage.classList.contains('hidden')) {
    savedPosterPage.classList.remove('hidden');
    mainPoster.classList.add('hidden');
  };
  for (var i = 0; i < savedPosters.length; i++) {
    savedHTML += `<article class = "mini-poster" id= "${savedPosters[i].id}" ondblclick = deleteImg(${savedPosters[i].id})>
    <img src = ${savedPosters[i].imageURL} />
    <h2> ${savedPosters[i].title} </h2>
    <h4> ${savedPosters[i].quote} </h4>
    </article>`;
  }
  savedPostersGrid.innerHTML = savedHTML;
};

function deleteImg(id) {
  document.getElementById(id).style.display = "hidden"; // needs to remove 
};

function backToMainSaved() {
  if (mainPoster.classList.contains('hidden')) {
    mainPoster.classList.remove('hidden');
    savedPosterPage.classList.add('hidden');
    changeButton();
  }
}

function showPosterFunction() {
event.preventDefault();

  titleMain.innerText = titleInput.value;
  quoteMain.innerText = quoteInput.value;
  imageMain.src = imageInput.value;
  mainPoster.classList.remove('hidden');
  posterForm.classList.add('hidden');

  titles.push(titleInput.Value);
  quotes.push(quoteInput.value);
  images.push(imageInput.value);


}
// posterForm.section = posterForm.classList.remove('.hidden');
// this can be refractored - considering having it stored in an array and having a for loop....
// function backToMain() {
//   if (mainPoster.classList.contains('hidden')) {
//     if (!mainPoster.classList.contains('hidden')) {
//       mainPoster.classList.remove('hidden');
//       posterForm.classList.add('hidden');
//       changeButton();
//     } else {
//       savedPosterPage.classList.remove('hidden');
//       mainPoster.classList.add('hidden');
//       changeButton();
//     }
//   }
// }
