# Psuedo Code 

## Interation 0 - 

1) assign variable randomButton - doc.querySelector("show another random poster class")
2) addEventListener ('click', randomPoster)
    * Event Handler is already created
3) addEventListener (pageload, randomPoster) --
    * Research other addEventListener funtions
    *USE SAME EVEN HANDLER - randomPoster

## Interation 1 - Switching Views
ADD QUERY SELECTOR FOR EACH BUTTON BELOW 

1) Add make your own poster evenListener ('click', makeOwnPoster)
2) Create eventHandler - makeOwnPoster(){}
3) Access html form ".poster-form hidden" - toggle form?, hide main poster page.

1) Add View Save Poster evenListener ('click', viewSavedPoster)
2) Create eventHandler - viewSavedPoster(){}
3) Access html ".class" - toggle save posters, hide main poster page.

1) Add "take me back" && "Back to main evenListener ('click', returnToMain)
2) Create eventHandler - returnToMain(){}
3) Access html both ".class"s  - toggle mainPage, hide makeOwnPoster & View Saved pages.

_Hint: check out html/css, see how form and saved posters are being hidden_
Notes/thoughts: Our event handler will be a function that hides currentPage, and shows clickedPage

**GOAL - switch between 3 views on the correct button clicks**

## Iteration 2 - Creating a New Poster - ON NEW POSTER FORM
_notes: refer to [https://repl.it/@KevinHartmann23/04-DOM-manipulation#index.html]_

1) add query selector to 3 input fields
2) add query selector to show my poster button 
3) Add event listner showmyposter (to back to main and submit to current poster)
4) WHEN SAVED BUTTON IS CLICKED
    * FUNCTION - .push input values into existing var images = [], var titles = [], var quotes= []
    * eventlistner ('click', showMyPoster)
    * event handler FUNCTION - showMyPoster(){} currentPoster = new Poster (very similar to random function, minus the random)
          * hide form, and return to main page - update currentPoster

## Iteration 3 - Saving & Viewing Posters 

1) add queryselector to saveThisPoster "button"
2) eventListen ('click', addToSaved)
3) FUNCTION - addToSaved(){} -- include .push to savedPoster = [];
    * NO DUPLICATES - "think !==" - conditional statement
4) add eventHandler - show saved posters, hide mainPage -- 
5) display savedPoster[] in saved posters page; 
    *Must be placed in grid section -- loop savedPosters - assign index to grid;
    *RESEARCH - GRID SECTION

## Iteration 4 - Deleting Saved Posters

1) add querySelector to grid images
2) add eventListener ('double click', deletePoster) -- assigned to grid image
3) event handler - FUNCTION deletePoster(){} savedImages.splice

_Hint: How will you update the data model to achieve this? keep data model & DOM seperate - 
_RESEARCH DATA MODELS_ _Refer back to DOM lesson_

## REFACTOR - DRY CODE ONLY

  
