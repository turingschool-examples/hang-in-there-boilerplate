# Hang in There  

### Abstract:
[//]: <> (Briefly describe what you built and its features. What problem is the app solving? How does this application solve that problem?)

We created an inspirational poster generator. In our application, the user can click a button to randomly generate a poster. They can choose to save this poster, or generate another random poster. If they choose to save the poster, they can click on a button that will show a grid of all posters that they selected to save. This grid allows the user to double click on a poster to remove it from their saved poster. There is a fourth button that takes the user to a custom form where they can input their own image source, title, and quote. This page will not proceed if the user does not input values. 

### Installation Instructions:
[//]: <> (What steps does a person have to take to get your app cloned down and running?)

If a person wanted to clone our app and run the files on their machine, they would follow these steps:
1. Begin on the github site: https://github.com/tialaaa/paired-project1
2. With the SSH key, they can clone it to their local machine.
3. After cloning, CD into the directory.
4. Open the directory with a text editor.

To view/run the application on their own machine:
1. In terminal, navigate to project repo.
2. Run the command `open index.html`.

### Preview of App:
[//]: <> (Provide ONE gif or screenshot of your application - choose the "coolest" piece of functionality to show off.)

![gif of button functionality in the custom poster section] (readme-imgs/App-example.mov)

### Context:
[//]: <> (Give some context for the project here. How long did you have to work on it? How far into the Turing program are you?)

We spent about 21 hours on this project over the course of 5 days. We had days that were more productive than others, but found a great work flow by day 2 or 3 of working. We are both two weeks into Mod 1 of the Turing FE program, cohort 2301.

### Contributors:
[//]: <> (Who worked on this application? Link to their GitHubs.)

Priscilla Paxton: https://github.com/priscillaapaxton
Tiala Young: https://github.com/tialaaa

### Learning Goals:
[//]: <> (What were the learning goals of this project? What tech did you work with?)

The learning goals of this project were to write clean JavaScript, develop our understanding of HTML, CSS, and JavaScript as intercommunicating languages, and to improve our ability to work collaboratively. 
Throughout our workflow, we tried to constantly be scrupulous about variable and function naming. We also refactored and condensed our code whenever we noticed instances in which we could. We feel much more confident about the communication between these three languages. In regards to our collaborative process, we followed a strict procedure of committing/pushing/creating pull requests. There were several moments of confusion that we were able to navigate and mitigate.

### Wins + Challenges:
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)
Every iteration of this project came with it's own unique challenges, yet once we solved them, we noticed that we now had new resources/intel to tackle the subsequent iteration. It was especially challenging initially to conceptualize how to even display a poster upon page load. However, this initial function gave us the framework of how we could load posters in different positions of the site (displaying a poster that the user had created, generating a new random poster, or viewing previously saved posters, etc). It was interesting to see how each new function had similar elements to the inital one we wrote. We spent a lot of time figuring out how to display the posters as a grid on the Saved Posters view. There were elements of trial and error, but ultimately once we realized that we had to copy the 'mini poster' class from the CSS file, the process became more intuitive. An optional challenge (that we chose to attempt!) was disabling and enabling the button that allows the user to create their custom poster. Our functionality requires an input value in all three text input boxes for the button to be enabled. We had much trial and error with this aspect, but are pleased with the simplicity of our final code.
