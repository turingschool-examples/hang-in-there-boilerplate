class Poster {
  constructor(imageURL, title, quote) {
    this.id = Date.now(); //what does Date and .now refer to? It needs this in order to be unique, so the new Poster instantiation so it doesn't return the same poster twice. 
    this.imageURL = imageURL;
    this.title = title;
    this.quote = quote;
  }
}
