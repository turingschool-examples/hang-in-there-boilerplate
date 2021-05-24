# Hang In There
___
## Contributors
 - Hayley Dixon  github: @hheyhhay
 - Justin Anthony github: @justincanthony
___
## Technologies Used
 - Javascript - Html - CSS
___
## Project Intent
- The _Hang in there Boilerplate_ project is intended for users to be able to view, generate, save, and delete  motivational posters. Each poster contains an image, title and quote. Users can navigate to several different sections of the page including a create your own poster page, and a saved poster gallery.
___
## Running and Viewing the Project
 - Web page can be viewed [here](file:///Users/justin-turing/turing/mod_1/mod_1_projects/hang-in-there-boilerplate/index.html)  
 - Repo can be accessed [here](https://hheyhhay.github.io/hang-in-there-boilerplate/)  
___
### Main Page
![Main Page](/Users/justin-turing/turing/mod_1/mod_1_projects/hang-in-there-boilerplate/readme-imgs/form-result.png)

The main page UI displays a randomly generated poster from a preset array of images, preset array of quotes and a preset array of titles. Below the poster, the user will find 4 buttons to interact with,

_Save This Poster_, _Show Saved Posters_, _Show Another Random Poster_, and _Make Your Own Poster_.

Since our HTML is one page, different sections are toggled between being hidden
while the current section of the page is in view.

__Example: Hide Section Function__
```
function showForm() {
  if (formPage.classList.contains('hidden')) {
    formPage.classList.remove('hidden');
    mainPage.classList.add('hidden');
  }
}
```

___
### Save This Poster
This will save the current poster displayed on the main page to an array,
and make it available for viewing in the image gallery.
___
### Show Saved Posters
![Image Gallery](/Users/justin-turing/turing/mod_1/mod_1_projects/hang-in-there-boilerplate/readme-imgs/saved.png)  

Engaging the _Show Saved Posters_ button will hide the main page, and navigate to the gallery of previously saved images.
From this page, the user has the ability to delete an image by double clicking the poster, and the ability to return to the main page by clicking the _Back to Main_ button.

__Example: Delete Picture Function__
```
function deleteImg(id) {
  for (var i = 0; i < savedPosters.length; i++) {
    if (savedPosters[i].id === id) {
      savedPosters.splice(i, 1)
    }
  }
  showSaved()
};
```
___
### Show Another Random Poster
![Random Poster Button](/Users/justin-turing/turing/mod_1/mod_1_projects/hang-in-there-boilerplate/readme-imgs/homepage.png)  

This feature will automatically generate a random poster with a unique image, title, and quote.
___
### Make Your Own Poster
![Poster form Page](/Users/justin-turing/turing/mod_1/mod_1_projects/hang-in-there-boilerplate/readme-imgs/form.png)  

Clicking this button will navigate the user to _Poster Form_ page.
[!Poster Form Image]
This section of the page allows for the user to create their own unique content. Users can input an image URL, a custom title, and a custom quote that will be displayed on the main page. Once the image is displayed, the user has the option to save the poster to the gallery.
___
### Project Notes
The _Save This Poster_ button does not operate as intended and allows for duplicate posters to be saved to the gallery.
___
### Future Additions
Other features that we would like to be able to incorporate would be:

- Restore Deleted Poster
- Drag Image to Reposition in Gallery
- Allow for Different Poster Borders
- Add Extra Galleries
