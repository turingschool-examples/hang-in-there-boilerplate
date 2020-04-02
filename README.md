# Hang In There

A boilerplate repo.

collaborators:
- Bill Wilke github: Billwilke42
- Justin Volk github: jdvolk
- Jim Miller github:
- Trevor Suarez
___
## Set Up

1. One teammate: fork this repository
2. Go to settings and turn on GitHub Pages for this repository
3. All teammates: clone down this repository
4. `cd` into the repository
5. Run `open index.html` to view it in the browser

## Progression
___

### Iteration 0 - Main Page

![Screen-Shot-2020-04-01-at-2-52-36-PM.png](https://i.postimg.cc/dV78HSYC/Screen-Shot-2020-04-01-at-2-52-36-PM.png)

- When the page loads, we should see a poster with a randomly selected image, title, and quote

- When the page loads, we call the randomize function. The randomize function uses the getRandomIndex function to bring back an image, title, and quote for the main page.
___
### Iteration 1 - Switching Views

Form page:
![Screen-Shot-2020-04-01-at-12-53-21-PM.png](https://i.postimg.cc/25zpYvSC/Screen-Shot-2020-04-01-at-12-53-21-PM.png)

Saved posters page (once working with extra saved posters):
![Screen-Shot-2020-04-01-at-12-54-14-PM.png](https://i.postimg.cc/BtWyVPz9/Screen-Shot-2020-04-01-at-12-54-14-PM.png)

- When a user clicks the "Make Your Own Poster" button, we should see the form, and the main poster should be hidden

- We added an event listener for the click on the make my own poster button, a function is called that reassigns the hidden class to the main poster class and off the poster form class. We applied this same idea to the rest of the buttons on the app

_Hint: go check out the HTML and CSS files to see how the form and saved posters sections are being hidden in the first place_
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

- When the user clicks save this poster, we called a function that adds the poster to an array of `savedPosters`. 

- We used a function to compare the array to the new item and only saved it when it wasn't in the array already. 

- We then added functionality to the saved posters section so that the items in the saved posters array were displayed on the saved posters page.
___
## Iteration 4 - Deleting Saved Posters

- For the next portion of interactivity we set up a click listener for a double click on the entire grid. that called a function `deleteMiniPoster`  that would delete the poster they clicked on.

- We localized this to the specific poster buy using the `closest()` method to grab the div that the click happened on.

- We updated the data model by adding the clicked element to a `deletedPosters` array. We compared the deleted array to the saved posters array by using a filter prototype that looked for an item with the same quote and removed that object from the saved posters array. Then we removed it from the DOM tree.
___
## Optional Extensions - Gettin' fancy

Here's a list of possible extensions to implement - but **ONLY IF** your team has completed all the previous iterations **AND** have cleaned up your code to make it DRYer and more readable.

You are welcome to add your own extensions. Be sure they are thoughtful in terms of UX/UI, and that they do not break any prior functionality.

- Implement data validation and error handling into the form (disable button, provide error messages if data entered is not correct, etc)
- In the main poster view, allow users to click each piece of the poster (image, title, quote) to update just that piece with another random item from the appropriate array
- When a user single clicks a saved poster, create a modal to view it larger
- Allow users to drag and drop saved posters into whatever order they want them to appear


Project spec & rubric can be found [here](https://frontend.turing.io/projects/module-1/hang-in-there.html)
