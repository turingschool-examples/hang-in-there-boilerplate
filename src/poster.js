class Poster {
  constructor(imageUrl, title, quote) {
    this.id = Date.now();
    this.imageURL = imageUrl;
    this.title = title;
    this.quote = quote;
  }
}
