class Poster {
  constructor(imageURL, title, quote) {
    this.id = Date.now(); //what does Date and .now refer to?
    this.imageURL = imageURL;
    this.title = title;
    this.quote = quote;
  }
}
