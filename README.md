# Hang in There  

### Abstract:
[//]: <> (Briefly describe what you built and its features. What problem is the app solving? How does this application solve that problem?)
The application is designed to provide a platform for generating, saving, and interacting with motivational and un-motivational posters.
The functionally includes randomly generating a motivational poster, which can be saved and viewed on a seperate page. In addition, users have the ability to create their own poster on a seperate page, which can be saved for later viewing as well.
The application also features a seperate page where users can view a list of un-motivational posters, which they can remove, and keep removed, by double clicking.<br>

This provides the user with a bit motivation and humor to get them through everyday life.


### Installation Instructions:
[//]: <> (What steps does a person have to take to get your app cloned down and running?)
* Clone the application down from GitHub.
* `cd` into the directory.
* Open by typing `open index.html` in the terminal.

### Preview of App:
[//]: <> (Provide ONE gif or screenshot of your application - choose the "coolest" piece of functionality to show off. gifs preferred!)
![gif](./readme-imgs/example-gif.gif)

### Context:
[//]: <> (Give some context for the project here. How long did you have to work on it? How far into the Turing program are you?)
This project was given to me on the first day of the second inning. I was given nine days to complete this project; however, I have never worked with JavaScript before. This project forced me to learn at a rapid pace, as is all projects at Turing.

### Contributors:
[//]: <> (Who worked on this application? Link to your GitHub. Consider also providing LinkedIn link)
Part of the application was prebuilt by Turing and the rest I comppleted on my own.

### Learning Goals:
[//]: <> (What were the learning goals of this project? What tech did you work with?)
* Practice reading, understanding, and using existing code
* Write clean, DRY JavaScript
    * Build out functionality using functions that show trends toward SRP
    * Manipulate the page after it has loaded by adding, removing, and updating elements on the DOM
    * Use array prototype iterator methods to reformat data and display it on the DOM
* Use CSS and HTML to match styling and layout of provided comps

### Wins + Challenges:
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)
Wins:
1. Styling with CSS
    * Learning to use flexbox was not easy and took a lot of time to figure out.
2. Iterating through arrays
    * This was difficult for me as I am used to Ruby Enumerables, yet JavaScript has its own way of doing things that I had to learn. For this project, I mainly just used for loops, as that is what I have the most experience within JavaScript so far.
3. Learning how JavaScript works with HTML elements<br>

Challenges:
1. Working with JavaScript for the first time.
2. Deleting an HTML element and preventing it from reappearing when navigating pages.
    * This was difficult, as I was struggling to ensure once a poster was deleted it stayed deleted; however, I didn't want to actually delete the data in the original dataset. Additionally, the default function of a button in a form is to submit, and this would cause the unmotivational posters to reappear multiple times on the page, which I didn't want.
