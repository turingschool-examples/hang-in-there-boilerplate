class Poster {
  constructor(imageURL, title, quote) {
    this.id = Date.now();
    this.imageURL = imageURL;
    this.title = title;
    this.quote = quote;
  }
}


var poster1 = new Poster("./assets/squirrel.jpg", "conviction", "Never bend your head. Always hold it high. Look the world straight in the eye.")

console.log(poster1)
