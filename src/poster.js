class Poster {
  constructor(imageUrl, title, quote) {
    this.id = Date.now();
    this.imageUrl = imageUrl;
    this.title = title;
    this.quote = quote;
  }
  updatePosterInfo(url, heading, saying) {
    this.imageUrl = url;
    this.title = heading;
    this.quote = saying;
  }
}

module.exports = Poster;
