class Poster {
  constructor(imageURL, title, quote) {
    this.id = Date.now();
    this.imageURL = imageURL;
    this.title = title;
    this.quote = quote;
  }
}
// I think that the parameters for this are going to end up being the random
// assignment function that we made in the main.js
// doing this will make sure that the class poster when 
// called upon will be a random image, title, and quote!
// this.id is going to equal the time logged?