class Poster {
  constructor(imageURL, title, quote) {
    this.id = Date.now();
    this.imageURL = imageURL
    this.title = title
    this.quote = quote
  }
}

class RandomPoster {
  constructor() {
    this.id = Date.now();
    this.imageURL = getRandomElement(images)
    this.title = getRandomElement(titles)
    this.quote = getRandomElement(quotes)
    let image = this.imageURL
    return image
  }
  //returnId() {
  //  let id = this.id
  //  return id
  //}
}
