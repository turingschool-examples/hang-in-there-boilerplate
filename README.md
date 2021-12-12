# Motivate Me
Motivational poster creator. This site will allow you to generate a random poster or make your own. When you create your own poster, it saves the submitted data so that future posters can use it. Additionally, you have the option to save posters, delete posters from a collection, and replace individual elements (image, title, quote) on your main poster.

#### Tech

This site was built using JavaScript, HTML, and CSS. The main functionality of the site is created through DOM manipulation in the JavaScript file. There are three views for this page:
- Main page
- Make Your Own Poster page
- Saved Posters page

#### Contributors
This site was built by [Kim Ward](https://github.com/kmewrd) and [Andrew Musselman](https://github.com/Andrew-Musselman) as a pair project at Turing School of Software & Design.

## Step-by-Step Guide
#### Part 1: Main Page
The site can be opened at [this link](https://andrew-musselman.github.io/motivate-me/). On load, you will see the main page and a poster with a randomly selected image, title, and quote.

<img width="1440" alt="main-page" src="https://user-images.githubusercontent.com/79027364/145722550-9324f6c6-8ae4-4f37-9cc2-2c7071fce44e.png">

Every time the Show Another Random Poster button is clicked, a new random poster will be displayed.

#### Part 2: Switching Page View
When you click the Show Saved Posters button, it will take you to the saved posters area. The Back to Main button takes you back to the main page.

<img width="1440" alt="saved-view-empty" src="https://user-images.githubusercontent.com/79027364/145722654-d7a44bde-e2f6-4d92-be50-c912158dfe71.png">

Clicking on the Make Your Own Poster button will take you to a form that contains fields to enter an image URL, title, and quote for your custom poster. If you decide not to create your own poster, you can click on the Nevermind button and go back to the main page without filling out the form.

<img width="1440" alt="form-view" src="https://user-images.githubusercontent.com/79027364/145722609-f4e5e3a1-2b04-4609-a771-e677d44666fb.png">

#### Part 3: Make a Custom Poster

On the poster form, fill in the three fields with your desired text and image URL. Show my poster will bring you back to the main page view with your custom poster displayed. It will also save your submitted data so that you can use it for future random posters.

<img width="1440" alt="create-poster" src="https://user-images.githubusercontent.com/79027364/145722632-c2d6ab62-3bb8-45a1-80a9-e711bb2116ab.png">

#### Part 4: Saving Posters

On the main page, there is an option to save this poster. You can use this after getting a random poster or after creating your own poster. Clicking on the Save This Poster button adds the current poster to the Saved Posters gallery. Each poster will only be saved once so the gallery does not contain duplicates. Clicking on the Show Saved Posters button opens the gallery, which displays all saved posters as a thumbnail.

<img width="1440" alt="saved-view-posters" src="https://user-images.githubusercontent.com/92277979/145724958-e0952712-1362-418a-ad8b-b72669f67e0e.png">


#### Part 5: Deleting Saved Posters

In the saved posters area, double clicking any of the poster thumbnails will delete that poster from the saved posters gallery and only show the remaining posters.


<img width="1440" alt="delete-posters" src="https://user-images.githubusercontent.com/92277979/145725373-1acacd9e-4687-4028-b15f-48ab70d0207e.gif">


#### Part 6: Dynamic Poster Elements

On the main page, you can click on the poster image, title, or quote to randomize that element while keeping the other parts the same. For example, if you click the image it will select another random image while keeping the title and quote the same.

![extension](https://user-images.githubusercontent.com/92277979/145725639-fcb4eb4d-d20b-42ae-8dde-b443c657f5ca.gif)

#### Future Additions

  - Provide an error alert on the poster form to alert you if the data you have entered is incorrect or missing
  - Allow you to view saved posters in the full size poster view by clicking on them in the saved posters gallery
  - Allow you to rearrange the saved posters gallery by dragging the poster thumbnails
