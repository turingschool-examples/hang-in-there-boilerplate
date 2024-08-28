# Hang in There  

### Abstract:
[//]: <> (Briefly describe what you built and its features. What problem is the app solving? How does this application solve that problem?)
This project is a one stop spot for building, saving, and viewing company posters to lift the spirits of employees. Select from an assortment of provided images, titles and quotes to customize your own poster before saving it and if you can't find something you like import your own with the make your own poster feature. From the `Make Your Own Poster` you are able to create either a motivational poster or an unmotivational poster. 

Once saved, those posters that you made are saved into their own page where they'll be presented into a grid. If you want to see them larger, give the poster a click to see it expand.

If motivation isn't what you are looking for, there is also a section of predefined unmotivational posters. However, if you don't like any of the specific posters, double click to remove it from those that are being displayed. Again, you are able to add your own posters using the `Make Your Own Poster` form.

### Installation Instructions:
[//]: <> (What steps does a person have to take to get your app cloned down and running?)
1. Fork this repository
2. Clone down your new, forked repo
3. `cd` into the repository
4. In your terminal, navigate to your project repo
5. Run the command open index.html


### Preview of App:
[//]: <> (Provide ONE gif or screenshot of your application - choose the "coolest" piece of functionality to show off. gifs preferred!)
![MainPage](readme-imgs/MainPageScreenShot.png)
![FormPage](readme-imgs/Form2.png)

### Context:
[//]: <> (Give some context for the project here. How long did you have to work on it? How far into the Turing program are you?)
This was the first project that was done during the second mod of Turing School of Software and Design. We had just been introduced to HTML, JavaScript, and CSS after spending the first six weeks learning through Ruby. This introductory project into the front end development took roughly a week of development, working on it a few hours each day. 

### Contributors:
[//]: <> (Who worked on this application? Link to your GitHub. Consider also providing LinkedIn link)
Solo project with minor assists from others within my cohort at Turing. Inspirations taken from other cohort members as well.
https://github.com/Sgalvin36

### Learning Goals:
[//]: <> (What were the learning goals of this project? What tech did you work with?)
This project was to help us get familiar with JavaScript, HTML, and CSS all interacting with each other. We were to get familiar with interacting with the DOM of the page so that we could have plenty of dynamic interactions with the pages. We worked with a single page project so that we learned more about the functions of CSS particularly in regards to hiding sections of the page or revealing it. 

The page was only minorly modified directly, with most changes to the HTML coming dynamically from the JavaScript. CSS was also added or subtracted through the use of the JavaScript file.
### Wins + Challenges:
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)
One of the biggest wins with this project is getting to see the interaction between JavaScript, CSS, and HTML. Having worked with HTML before more in isolation, it was a challenge to really see how it worked with other parts of the front end and it was just a static page. Any changes were hardcoded and it was tiresome to work with. This time around, we've got a lot more dynamic page(s) with elements being hidden, added, changed, removed, and saved allowing the user to interact with the page a lot better. 

I was really proud of my approach to deleting elements. It was partially brought on by the approach of how I built the saved poster pages. Since I didn't reset the page each time, I needed to find a way to select the HTML element and delete it.
I knew the challenge of allowing the user to delete the posters would create either a very messy conditional based off of what was registered in the click, or I could find a way to dynamically get to the element that I wanted regardless of what the user did or even the potential expanded scope of the project. I had learned about recursion before hand yet never really figured out how it worked, so I thought I would try it out with this. So the function calls itself if it doesn't find the correct parent element, slowly working its way up the chain, so theoretically even if there were great-great-great-etc grandchildren, it would work its way up to the correct element and then delete that specific element.

A third thing that was a challenge yet interesting to learn about was how to get to the DOM elements and manipulate them. It was sometimes difficult to figure out how to get into an element or compare values to other element's values. But lots of doc reading and just straight testing things until it gets what I am looking for was how I worked through getting a better understanding of this .