// query selector variables go here 👇

// we've provided you with some data to work with 👇
// tip: you can tuck this data out of view with the dropdown found near the line number where the variable is declared 
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
var holdPosters = [];

// event listeners go here 👇
document.querySelector(".show-random").addEventListener('click',generateRandomImage)
window.addEventListener('load',generateRandomImage)
document.querySelector(".show-form").addEventListener('click', () => {
  showHiddenForm(document.querySelector(".show-form"))
  }
);
document.querySelector(".show-main").addEventListener('click',  () => {
  showHiddenForm(document.querySelector(".show-main"))
  }
);
document.querySelector(".show-saved").addEventListener('click',  () => {
    showHiddenForm(document.querySelector(".show-saved"))
  }
);
document.querySelector(".back-to-main").addEventListener('click',  () => {
    showHiddenForm(document.querySelector(".back-to-main"))
  }
);
document.querySelector(".make-poster").addEventListener('click', function(event) {
  event.preventDefault(); 

    var imageURL = document.querySelector('#poster-image-url').value;
    var title = document.querySelector('#poster-title').value;
    var quote = document.querySelector('#poster-quote').value;
    createPoster(imageURL, title, quote);
    showHiddenForm(this);
  }
);
document.querySelector(".save-poster").addEventListener('click', saveThisPoster);

// functions and event handlers go here 👇
// (we've provided two to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function createPoster(imageURL, title, quote) {
  var savedPoster ={
    id: Date.now(),
    imgURL: document.querySelector(".poster-img").src = imageURL,
    title: document.querySelector(".poster-title").innerText = title,
    quote: document.querySelector(".poster-quote").innerText = quote
  }
  images.push(savedPoster.imgURL)
  titles.push(savedPoster.title)
  quotes.push(savedPoster.quote)
  return holdPoster(savedPoster)
};

function holdPoster(posterObject) {
  return holdPosters.push(posterObject)
}

function saveThisPoster() {
  if(holdPoster.length > 0) {
    savedPosters.push(holdPosters[0])
  return holdPosters = []
  }else{
    alert("You have already saved this poster")
  }
};

function generateRandomImage() {
  var randomPoster = {
    id: Date.now(),
    imgURL: images[getRandomIndex(images)],
    quote: quotes[getRandomIndex(quotes)],
    title: titles[getRandomIndex(titles)],
  }
  document.querySelector(".poster-img").src = randomPoster.imgURL
  document.querySelector(".poster-quote").innerText = randomPoster.quote 
  document.querySelector(".poster-title").innerText = randomPoster.title
  return holdPoster(randomPoster)
};

function showHiddenForm(button) {
  switch(button.className){
    case 'show-form':
      document.querySelector(".poster-form").classList.toggle('hidden')
      document.querySelector(".main-poster").classList.toggle('hidden')
    break;
    case 'show-main':
      document.querySelector(".poster-form").classList.toggle('hidden')
      document.querySelector(".main-poster").classList.toggle('hidden')
    break;
    case 'show-saved':
      document.querySelector(".saved-posters").classList.toggle('hidden')
      document.querySelector(".main-poster").classList.toggle('hidden')
      if(savedPosters[0] === undefined){savedPosters.shift(0,1)}
      renderSavedPosters()
    break;
    case 'back-to-main':
      document.querySelector(".saved-posters").classList.toggle('hidden')
      document.querySelector(".main-poster").classList.toggle('hidden')
    break;
    case 'make-poster':
      document.querySelector(".poster-form").classList.toggle('hidden');
      document.querySelector(".main-poster").classList.toggle('hidden');
    break;
  }
};

function renderSavedPosters() {
  var postersGrid = document.querySelector('.saved-posters-grid');
  postersGrid.innerHTML = '';
  savedPosters.forEach((poster, index) => {
    var posterHTML = `<div class="mini-poster" id=${poster.id}>
                        <img src="${poster.imgURL}" alt="Saved Poster Image">
                        <h2>${poster.title}</h2>
                        <h4>${poster.quote}</h4>
                      </div>`;

    var posterElement = document.createRange().createContextualFragment(posterHTML).firstElementChild;

    posterElement.addEventListener('dblclick', function() {

      var clickedIndex = savedPosters.findIndex(savedPoster => savedPoster.id === poster.id);

      if (clickedIndex !== -1) {
        savedPosters.splice(clickedIndex, 1);
      }

      renderSavedPosters();
    });

    postersGrid.appendChild(posterElement);
  });
}