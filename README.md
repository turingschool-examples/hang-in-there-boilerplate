# Hang In There

A boilerplate repo.


## Progression

### Iteration 0 - Main Page

- On July 8, 2020 and July 9, 2020 we completed iteration 0 by creating variables, functions, and an event listener in order to get the Poster image, title, and quote to display randomly on load of page.

![gif of main page poster upon load](/ReadMeGifs/PageLoad.gif)

### Iteration 1 - Switching Views

Form page:

- On July 9, 2020 we completed iteration 1 by creating variables, functions, and event listeners that targeted buttons to change page views by being clicked.

![gif of Make Your Own Poster Button being clicked](/ReadMeGifs/viewForm.gif)

- Here we click the Make Your Own Poster button, which takes the user from the main page view to the form view.

![gif of View Saved Posters button being clicked](/ReadMeGifs/showSavedPostersButton.gif)

- Here we click the View Saved Posters button, which takes the user from the main page view to the saved posters view.

![gif of Nevermind, take me back! button being clicked](/ReadMeGifs/takeMeBack.gif)

- Here we click the Nevermind, take me back! button, which takes the user from the form view to the main page view.

![gif of Back to Main button being clicked](/ReadMeGifs/backToMainButton.gif)

- Here we click the Back to Main button, which takes the user from the saved posters view to the main page view.

## Iteration 2 - Creating a New Poster

Form being filled out:
![screenshot of form](/readme-imgs/form.png)

Once poster is saved:
![screenshot of result](/readme-imgs/form-result.png)

- On the new poster form view, users should be able to fill out the three input fields and then hit the save button
- When the save button is clicked, several things will happen:
  - Save the submitted data into the respective arrays (image URL into the images array, etc) so that future random posters can use the user-created data
  - Use the values from the inputs to create a new instance of our Poster class
  - Change back to the main poster view (hiding the form view again)
  - Display the newly created poster image, title, and quote in the main view

## Iteration 3 - Saving & Viewing Posters

Saved posters view:
![screenshot of saved posters section](/readme-imgs/saved.png)

- When a user clicks the "Save This Poster" button, the current main poster will be added to the `savedPosters` array.
- If a user clicks the "Save This Poster" more than once on a single poster, it will still only be saved once (no duplicates)
- When a user clicks the "Show Saved Posters" button, we should see the saved posters section
- All the posters in the `savedPosters` array should be displayed in the saved posters grid section

## Iteration 4 - Deleting Saved Posters

- From the saved posters view, if a user double clicks a saved poster, it will be deleted

_Hint: How will you update the data model to achieve this?_

## Optional Extensions - Gettin' fancy

Here's a list of possible extensions to implement - but **ONLY IF** your team has completed all the previous iterations **AND** have cleaned up your code to make it DRYer and more readable.

You are welcome to add your own extensions. Be sure they are thoughtful in terms of UX/UI, and that they do not break any prior functionality.

- Implement data validation and error handling into the form (disable button, provide error messages if data entered is not correct, etc)
- In the main poster view, allow users to click each piece of the poster (image, title, quote) to update just that piece with another random item from the appropriate array
- When a user single clicks a saved poster, create a modal to view it larger
- Allow users to drag and drop saved posters into whatever order they want them to appear


Project spec & rubric can be found [here](https://frontend.turing.io/projects/module-1/hang-in-there.html)
