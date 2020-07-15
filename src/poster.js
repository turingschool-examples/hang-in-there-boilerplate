class Poster {
  constructor(imageURL, title, quote) {
    this.id = Date.now();
    this.imageURL = imageURL;
    this.title = title;
    this.quote = quote;
  }
}

// var posterInstance = new Poster();
// document = posterInstance.imageURL
