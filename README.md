# Hang In There

A boilerplate repo.

collaborators:
- Bill Wilke- www.github.com/Billwilke42
- Justin Volk- www.github.com/jdvolk
- Jim Miller
- Trevor Suarez
___

### Iteration 0 - Main Page

![Screen-Shot-2020-04-01-at-2-52-36-PM.png](https://i.postimg.cc/dV78HSYC/Screen-Shot-2020-04-01-at-2-52-36-PM.png)

- When the page loads, we call the randomize function. The randomize function uses the getRandomIndex function to bring back an image, title, and quote for the main page.
___
### Iteration 1 - Switching Views

Form page:
![Screen-Shot-2020-04-01-at-12-53-21-PM.png](https://i.postimg.cc/25zpYvSC/Screen-Shot-2020-04-01-at-12-53-21-PM.png)

Saved posters page (once working with extra saved posters):
![Screen-Shot-2020-04-01-at-12-54-14-PM.png](https://i.postimg.cc/BtWyVPz9/Screen-Shot-2020-04-01-at-12-54-14-PM.png)


- We added an event listener for the click on the make my own poster button, a function is called that reassigns the hidden class to the main poster class and off the poster form class. We applied this same idea to the rest of the buttons on the app

___
## Iteration 2 - Creating a New Poster

Form being filled out:
![Screen-Shot-2020-04-01-at-12-51-59-PM.png](https://i.postimg.cc/d0nbV1hr/Screen-Shot-2020-04-01-at-12-51-59-PM.png)

Once poster is saved:
![Screen-Shot-2020-04-01-at-12-52-14-PM.png](https://i.postimg.cc/sXNb5N92/Screen-Shot-2020-04-01-at-12-52-14-PM.png)

- When the user click the save poster button in the form page, we used a click listener to call a function that created a new instance of the Poster class and saved the information from the quote, title, and url.

- This information was pushed to the data models so the user will now see their inputted information as part of the randomly generated poster button.

- Simultaneously, the main page is unhidden with the user created poster displayed in the middle of the page.
___
## Iteration 3 - Saving & Viewing Posters

Saved posters view:
![Screen-Shot-2020-04-01-at-2-52-36-PM.png](https://i.postimg.cc/dV78HSYC/Screen-Shot-2020-04-01-at-2-52-36-PM.png)

- When the user clicks save this poster its then added to the array of `savedPosters`.

- We used a function to compare the array to the new item and only saved it when it wasn't in the array already.

- We then added functionality to the saved posters section so that the items in the saved posters array were displayed on the saved posters page.
___
## Iteration 4 - Deleting Saved Posters

- For the next portion of interactivity we set up a click listener for a double click on the entire grid. that called a function `deleteMiniPoster` that would delete the poster they clicked on.

- We localized this to the specific poster by using the `closest()` method to grab the div that the click happened on.

- We updated the data model by adding the clicked element to a `deletedPosters` array. We compared the deleted array to the saved posters array by using a for loop that looked for an item with the same quote and removed that object from the saved posters array. Then we removed it from the DOM tree.
___
