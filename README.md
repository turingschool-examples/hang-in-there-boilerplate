# Hang-In-There-Boilerplate


[	Deployed site](https://blakedonn.github.io/hang-in-there-boilerplate/)

### Blake Donnelly

  https://github.com/BlakeDonn

### Dennis Clark

  https://github.com/DennClark
  
---

Hang-in-there is a project about learning the basics of **JavaScript**, **HTML**, and **CSS** interaction. The webpage itself if a very basic, template based, poster generation tool. The idea behind this tool is that users can filter through randomly generated combinations of inspirational Posters, Titles, and Quotes. The user can also choose to make their own poster, which is done by providing a user-selected URL, Title, and Quote; Once the user has input these three items into their respective fields, they will click a button to store the poster for future inspiration-seekers. Users have the option of saving their favorite posters, and even have a separate part of the website where they can view a gallery of their favorites. The Integration of Event Listeners, QuerySelectors, Class Instantiation, and dynamic Array Manipulation are the key focuses for creating this unique tool. This must all be done while trying to implement the DRY'est version of javascript and following professional git-collaboration.

---

## Main Page

The first step in the development process was to have the poster load with a randomly selected image, title, and quote. This was done by utilizing an event listener with the load event. Once the load event was triggered, the assignRandomPoster function was triggered. This function reassigned the image source, title text, and quote text with a random element pulled from their respective arrays.

![Alt Text](https://i.imgur.com/Frt8rIm.png)

The Second Step was to enable functionality on the "Show another Random Poster" button, which would, as hinted, show a poster with a randomly selected image source, title, and quote. This was done by adding an event listener to the button, with the "Click" event tied to it. When the button was clicked, it would run the same assignRandomPoster function to alter the currently displayed poster.

![Alt Text](https://i.imgur.com/0JR1o0W.gif)

___

## Switching Views

This step of the development process focused on switching between the different views of the webpage. The View Saved Posters page, the Make Your Own Poster page, and the Main page should all be easily traversed. We targeted the CSS style of .hidden and created the changePagefunction to toggle this style in and out of the class attribute as needed. We then applied eventListeners with the "click" event to run this function, this eventListener was applied to the page, back, and create poster buttons.

![Alt Text](https://i.imgur.com/AOYS4OB.png)

![Alt Text](https://i.imgur.com/Pn1zgGN.gif)

---

## Creating a New Poster

This step in the development process focused on targeting user-inputted values to do a number of tasks with. The first task was to add the user-data to their respective arrays, image, title, and quotes. The second task was to use these inputs to create a new instance of the Poster class. The third task was to hide the current page and show the main page with the user-created poster on display. This would require an eventListener being attached to the showMyPoster button that fires a number of functions.

1. `changeMainPoster()` to alter the poster that will be displayed on the main page
2. `instantiateMyPoster()` to create a new instance of the Poster class
3. `changePage()` to toggle the CSS class attribute on both pages
4. `addToArray()` to add the captured values to their respective arrays

![Alt Text](https://i.imgur.com/u2VKMg4.gif)

___

## Saving & Viewing Posters

This step in the development process focused on adding functionality to the Save This Poster, and Show Saved Posters buttons. These buttons needed to do a few things to function correctly. The Save This Poster button would need to add an instantiation of the Poster class to a newly created savedPosters array, this button would also need to assure that no duplicate posters are being saved. The Show Saved Posters button needed to move the user to the saved posters area of the tool. The saved posters area should have the savePosters array displayed in its grid section.

* Save This Poster
  1. `addToSaved()` to push the current Instace of the Poster class to the savedPosters array only if it does not exist in the array
  2. `addToSaved()` to run the `saveToGrid()` function to be added and displayed on the savedPosters grid

* Show Saved Posters
  1. `changePage()` to move to the Saved Posters area and display the grid with the users saved posters

![Alt Text](https://i.imgur.com/S8kwNNj.gif)

___

## Deleting Saved Posters

This step in the development process focused on adding and eventListener with the doubleclick event tied to it. This event listener would delete the targeted Poster from the savedPosters array and remove it from the Saved Posters grid.
