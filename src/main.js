
// Stores posters as objects until saved poster area is full
function storeData() {
  let myPoster = captureAsObject()
for (let i = 0; i < 10; i++)
if (!newArray[i]) {
  newArray[i] = myPoster;
  return myPoster;
} else if (myPoster.title === newArray[i].title &&
   myPoster.quote === newArray[i].quote &&
   myPoster.imageURL === newArray[i].imageURL) {
     console.log("Taken!");
     return "taken!";
   } else if (newArray[i] === undefined) {
         newArray[i] = myPoster;
         return newArray
       }
  }

  function miniPoster() {
  for (let i = 0; i < newArray.length; i++) {
    let a = newArray[i].imageURL
    let b = newArray[i].title
    let c = newArray[i].quote
    let d = newArray[i].id
    let aa = document.getElementById("mini-img" + i);
    let bb = document.getElementById("mini-poster-title" + i);
    let cc = document.getElementById("mini-poster-quote" + i);
    let dd = document.getElementById("mini-poster-shown" + i);
    dd.className = "mini-poster " + newArray[i].id;
    aa.src = a;
    bb.innerText = b;
    cc.innerText = c;
    }
    getAllMiniPosters()
  }

  function deletePoster() {
    let allMiniPosters = document.querySelectorAll(".mini-poster")
    for (let i = 0; i < allMiniPosters.length; i++) {
      let idNumber = allMiniPosters[i].id
      if (idNumber.includes(this.id)){
      console.log("delete")
      newArray.splice(i, 1);
      console.log(newArray);
      let toBeRemoved = document.getElementById(idNumber);
      console.log(toBeRemoved)
      toBeRemoved.className = "mini-poster hidden"
    } else {
      console.log("no")
    }
  }
}

function getAllMiniPosters() {
let allMiniPosters = document.querySelectorAll(".mini-poster")
for (let i = 0; i < allMiniPosters.length; i++) {
  allMiniPosters[i].addEventListener("dblclick", deletePoster)
  }
  return allMiniPosters
}
