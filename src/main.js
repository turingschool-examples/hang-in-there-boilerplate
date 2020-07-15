var showRandomButton = document.querySelector(".show-random")
var image = document.querySelector(".poster-img")
var title = document.querySelector(".poster-title")
var quote = document.querySelector(".poster-quote")
var makeYourOwnPoster = document.querySelector('.poster-form')
var makePosterButton = document.querySelector('.show-form')
var mainPoster = document.querySelector('.main-poster')
var takeMeBack = document.querySelector('.show-main')
var savePosterSection = document.querySelector('.saved-posters')
var savedPosterButton = document.querySelector('.show-saved')
var goBackFromSaveButton = document.querySelector('.back-to-main')
var userImageInput = document.querySelector('#poster-image-url')
var userPosterInput = document.querySelector('#poster-title')
var userQuoteInput = document.querySelector('#poster-quote')
var activateUserPoster = document.querySelector('.make-poster')
var saveThePoster = document.querySelector('.save-poster')
var ourSavedPosters = document.querySelector('.saved-posters-grid')

// we've provided you with some data to work with
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
var currentPoster

function makeRandomPoster() {
  var randomimageIndex = getRandomIndex(images)
  var randomTitleIndex = getRandomIndex (titles)
  var randomQuoteIndex = getRandomIndex (quotes)
  makePoster(images[randomimageIndex], titles[randomTitleIndex], quotes[randomQuoteIndex])
}

function toggleHiddenHtmlElement (htmlElement){
htmlElement.classList.toggle('hidden')
}
function makePoster (url, userTitle, userQuote){
  currentPoster = new Poster(url, userTitle, userQuote)

  console.log(currentPoster)
  //forPosterId.id = currentPoster[0].id
  // var currentImage = currentPoster.imageURL
image.src = currentPoster.imageURL
title.innerText = currentPoster.title
quote.innerText = currentPoster.quote
console.log(image.src)
console.log(currentPoster.imageURL)
}


// event listeners go here :point_down:
showRandomButton.addEventListener ('click', makeRandomPoster)
window.addEventListener('load', makeRandomPoster)








makePosterButton.addEventListener('click', function () {
   toggleHiddenHtmlElement (mainPoster)
  toggleHiddenHtmlElement (makeYourOwnPoster)
})
takeMeBack.addEventListener('click', function () {
    toggleHiddenHtmlElement (mainPoster)
    toggleHiddenHtmlElement (makeYourOwnPoster)
})
    savedPosterButton.addEventListener('click', function (){
     toggleHiddenHtmlElement (mainPoster)
     toggleHiddenHtmlElement (savePosterSection)


     displaySavedPosters ()

})
    goBackFromSaveButton.addEventListener('click', function (){
      toggleHiddenHtmlElement (mainPoster)
      toggleHiddenHtmlElement (savePosterSection)
})

activateUserPoster.addEventListener('click', function (){
  //window.removeEventListener('load', makeRandomPoster)
  makePoster(
    userImageInput.value ,
    userPosterInput.value ,
    userQuoteInput.value
  )
  toggleHiddenHtmlElement (mainPoster)
  toggleHiddenHtmlElement (makeYourOwnPoster)

})

saveThePoster.addEventListener('click',function(){

// var currentPoster = makePoster ()
if(savedPosters[0] === undefined ){
  savedPosters.push(currentPoster)
} else {
console.log(savedPosters, 'savedPostersArray')

 for(var i = 0; i < savedPosters.length; i++){
   console.log(savedPosters[i], "works")
   if( savedPosters[i].id !== currentPoster.id){

     savedPosters.push(currentPoster)

   }


}

  console.log(ourSavedPosters.innerHTML)

}


shouldPushValue(images,image.src)
shouldPushValue(titles,title.innerText)
shouldPushValue(quotes,quote.innerText)
})

function shouldPushValue(arrayToCheck,value){
if(arrayToCheck.includes(value)){
  return
}
else{
  arrayToCheck.push(value)
}

}
ourSavedPosters.addEventListener('dblclick',function(){
 for (var i = 0; i < savedPosters.length; i++){
   if(event.target.id == savedPosters[i].id || event.target.classList[0] == savedPosters[i].id){
     // console.log('hello darkness')
   savedPosters.splice(i, 1)
 }
 }
displaySavedPosters()
})
function displaySavedPosters(){
ourSavedPosters.innerHTML = ''
var poster = ""
  for (var i = 0; i < savedPosters.length; i++){
console.log(savedPosters[i])

  poster = `<article id = ${savedPosters[i].id} class = "mini-poster">

  <img class = ${savedPosters[i].id} src= ${savedPosters[i].imageURL} alt="nothin' to see here">

  <h2 class = ${savedPosters[i].id}> ${savedPosters[i].title} </h2>

  <h4 class = ${savedPosters[i].id} > ${savedPosters[i].quote} </h4>
  </article>`
  ourSavedPosters.innerHTML += poster

  }
}

// functions and event handlers go here :point_down:
// (we've provided one for you to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
