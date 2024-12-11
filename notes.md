line 361 / 379 = savedPostersSection.replaceChildren() / unmotivationalGrid.replaceChildren()

    - Removes all the current child nodes (elements, text, etc.) from the DOM.

    - Replaces the child nodes with new child nodes (will be updated if there is a function for that) and displays them to the DOM.
    
---------------------------------------------------------------------------------------------------------------------------------------

line 290 = id: Date.now() + performance.now() + Math.floor(Math.random() * 100)

    - Date.now(): Generates a timstamp in milliseconds since January 1st, 1970.

    - Performance.now(): Measures time down to a fraction of a millisecond.

    - Math.random(): Generates a random decimbal between 0 and 1.

    - Math.random() * 100: Multiplies the random decimal by 100, resulting in a number between 0 and 100.

    - Math.floor(): Rounds down to the nearest whole number.

All Together: Generates a random decimal between 0 and 1, multiplies it by 100, and then rounds it down to the nearest whole number. This result is then added to the timestamp from Date.now() to produce a unique ID.

---------------------------------------------------------------------------------------------------------------------------------------

line 411 / 412 = event.target

Breaking it Down: 

    1. Event Happens: When something happens on the webpage (like a user clicks a button or hovers over an element), an event is created in the background.

    2. Event Object: This event contains information about what happened. One of the important pieces of information is event.target. This is a reference to the actual element (like a button, a link, or an image) that the user interacted with.

    3. Manipulating the Target: Since event.target is an object representing that element, you can use it to access and manipulate the element. For example, you can change its text, color, or remove it from the page.

In Summary: It tells you which element on the webpage triggered an event, like a click, a key press, or a hover.This is helpful when you don’t know ahead of time which element will be clicked. So, by accessing event.target, you can manipulate the element’s properties (like its text, styles, or classes), and these changes happen right in the DOM, which is how they appear on the page.

---------------------------------------------------------------------------------------------------------------------------------------

line 391 = event.target.closest(".unmotivational-mini")

    - .closest(): Finds the closest container (parent, grandparent, etc.) element that shares a class with the element that was targeted (the one that was clicked or triggered the event).

    - It will then return the first container element that matches the selectors argument.

    - If no match, it moves up to the parent element, then to the grandparent, and continues upwards through the DOM tree until it finds a match, and it will return that element.

    - If not match is found throughout the DOM tree then it will return null.


