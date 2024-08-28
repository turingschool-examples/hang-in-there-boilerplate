# Hang In There

A boilerplate repo. 

## Set Up

1. Fork this repository
2. Clone down your new, forked repo
3. `cd` into the repository
4. Open it in your text editor
5. Add the instructors as collaborators on the repository

Project spec & rubric can be found [here](https://curriculum.turing.edu/module2/projects/hang-in-there/index)

To view your project:

1. In your terminal, navigate to your project repo
2. Run the command `open index.html`
  
______________________________________________________  
# README Template  
Before turning this project in, erase this line and everything above it and fill in the info below.  
______________________________________________________  

# Hang in There  

### Abstract
[//]: <> (Briefly describe what you built and its features. What problem is the app solving? How does this application solve that problem?)
This app is a front-end-only application built with HTML, CSS, TypeScript, and JavaScript, designed to create Motivational/Unmotivational posters for users to display.

**Features:**
- Generate random motivational posters using pre-existing images, titles, and text.
- Click to change images, titles, or text to customize posters.
- Save your favorite posters for future reference.
- View all saved posters in a dedicated screen.
- Display saved posters in a modal within the saved posters screen.
- Drag and Drop posters inside the saved poster screen for reordering
- Create unmotivational posters with an option to delete them.
- Custom poster creation with strong validation for user-uploaded images.
  
### Installation Instructions:
[//]: <> (What steps does a person have to take to get your app cloned down and running?)
1. Clone the repository to your local machine using the following command:
   ```bash
   git clone https://github.com/jphill19/hang-in-there-boilerplate

2. Navigate to the project directory
3. Open the index.html file in your web browser. You can do this by double-clicking the file or using the following command in the terminal: `open index.html`
### Preview of App:
[//]: <> (Provide ONE gif or screenshot of your application - choose the "coolest" piece of functionality to show off. gifs preferred!)
Bellow is a preview of the app and its capabilities of validating image links
![Demo](assets/giphy.gif)
### Context:
[//]: <> (Give some context for the project here. How long did you have to work on it? How far into the Turing program are you?)
I am currently in my second week of Mod 2 at Turing School. This project was completed over a week and a half during my spare time. I was able to finish the core content midway through the project, and I dedicated the remaining time to improving my skills by incorporating TypeScript as a self-imposed challenge.
### Contributor:
[//]: <> (Who worked on this application? Link to your GitHub. Consider also providing LinkedIn link)
**John Hill**
- [John's LinkedIn](www.linkedin.com/in/johnpierrehill)
- [John's GitHub](https://github.com/jphill19)

### Learning Goals:
[//]: <> (What were the learning goals of this project? What tech did you work with?)
- Utilize JavaScript to implement the core functionality of the website.
- Incorporate HTML and CSS to structure and style the website, ensuring it meets the desired user experience and visual design standards.
- Explore and integrate TypeScript to enhance code quality and maintainability as a self-imposed challenge.

### Wins + Challenges:
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)
### Challenge #1:
**Figuring out how to validate the HTML to check whether the submitted link was an image.**

- **Solution**: After a long code spike where I experimented with multiple strategies, I discovered event listeners that can determine whether an `img` HTML element has loaded successfully or encountered an error. This approach allowed me to validate the link effectively by checking if the image loaded correctly.


### Challenge #2:
**Being able to drag and sort your posters inside your saved poster section.**

- **Solution**: I watched [this YouTube tutorial](https://www.youtube.com/watch?v=jfYWwQrtzzY&t=1183s), which provided a starting point for creating draggable elements and allowing them to be dropped elsewhere. However, the video addressed a 1-dimensional plane, where the logic worked perfectly. In contrast, my saved posters section was a 2-dimensional grid, which added complexity to the process. To solve this, I moved away from intensive mathematical calculations and instead opted to simply swap the element the cursor was dragging over with the current element being dragged.
