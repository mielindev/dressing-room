const topClothImages = [
  "../assets/images/clothes/topcloth1.png",
  "../assets/images/clothes/topcloth2.png",
  "../assets/images/clothes/topcloth3.png",
  "../assets/images/clothes/topcloth4.png",
  "../assets/images/clothes/topcloth5.png",
  "../assets/images/clothes/topcloth6.png",
];
const botClothImages = [
  "../assets/images/clothes/botcloth1.png",
  "../assets/images/clothes/botcloth2.png",
  "../assets/images/clothes/botcloth3.png",
  "../assets/images/clothes/botcloth4.png",
  "../assets/images/clothes/botcloth5.png",
];
const shoeImages = [
  "../assets/images/shoes/shoes1.png",
  "../assets/images/shoes/shoes2.png",
  "../assets/images/shoes/shoes3.png",
  "../assets/images/shoes/shoes4.png",
  "../assets/images/shoes/shoes5.png",
];
const handBagImages = [
  "../assets/images/handbags/handbag1.png",
  "../assets/images/handbags/handbag2.png",
  "../assets/images/handbags/handbag3.png",
];
const necklaceImages = [
  "../assets/images/necklaces/necklace1.png",
  "../assets/images/necklaces/necklace2.png",
  "../assets/images/necklaces/necklace3.png",
];
const hairstyleImages = [
  "../assets/images/hairstyle/hairstyle1.png",
  "../assets/images/hairstyle/hairstyle2.png",
  "../assets/images/hairstyle/hairstyle3.png",
];
const faceImages = [
  "../assets/images/model/999.png",
  "../assets/images/model/1000.png",
  "../assets/images/model/1003.png",
];
const bgImages = [
  "../assets/images/background/background1.jpg",
  "../assets/images/background/background2.jpg",
  "../assets/images/background/background3.jpg",
  "../assets/images/background/background4.jpg",
  "../assets/images/background/background5.jpg",
  "../assets/images/background/background6.jpg",
  "../assets/images/background/background7.jpg",
];
function createClothButtons() {
  const buttonsTopCloth = document.querySelectorAll("#top_cloth button");
  const buttonsBotCloth = document.querySelectorAll("#bot_cloth button");
  const buttonsShoes = document.querySelectorAll("#shoes button");
  const buttonsHandBag = document.querySelectorAll("#handbag_item button");
  const buttonsNecklaces = document.querySelectorAll("#necklace_item button");
  const buttonsHairstyle = document.querySelectorAll("#hairstyle_item button");
  const buttonsFaces = document.querySelectorAll("#faces button");
  const buttonsBackground = document.querySelectorAll(
    "#background_item button"
  );
  buttonsTopCloth.forEach((button, index) => {
    button.addEventListener("click", () => {
      console.log("Selected button index:", index);
      changeTopClothes(index);
    });
  });
  buttonsBotCloth.forEach((button, index) => {
    button.addEventListener("click", () => {
      console.log("Selected button index:", index);
      changeBotClothes(index);
    });
  });
  buttonsShoes.forEach((button, index) => {
    button.addEventListener("click", () => {
      console.log("Selected button index:", index);
      changeShoes(index);
    });
  });
  buttonsHandBag.forEach((button, index) => {
    button.addEventListener("click", () => {
      console.log("Selected button index:", index);
      changeHandBags(index);
    });
  });
  buttonsNecklaces.forEach((button, index) => {
    button.addEventListener("click", () => {
      console.log("Selected button index:", index);
      changeNecklaces(index);
    });
  });
  buttonsHairstyle.forEach((button, index) => {
    button.addEventListener("click", () => {
      console.log("Selected button index:", index);
      changeHairstyle(index);
    });
  });
  buttonsFaces.forEach((button, index) => {
    button.addEventListener("click", () => {
      console.log("Selected button index:", index);
      changeFaces(index);
    });
  });
  buttonsBackground.forEach((button, index) => {
    button.addEventListener("click", () => {
      console.log("Selected button index:", index);
      changeBackground(index);
    });
  });
}

function changeTopClothes(index) {
  let content = `<img src="${topClothImages[index]}" style="width: 100%;">`;
  document.querySelector(".bikinitop").innerHTML = content;
}

function changeBotClothes(index) {
  let content = `<img src="${botClothImages[index]}" style="width: 100%;">`;
  document.querySelector(".bikinibottom").innerHTML = content;
}
function changeShoes(index) {
  let content = `<img src="${shoeImages[index]}" style="width: 100%;">`;
  document.querySelector(".feet").innerHTML = content;
}
function changeHandBags(index) {
  let content = `<img src="${handBagImages[index]}" style="width: 100%;">`;
  document.querySelector(".handbag").innerHTML = content;
}
function changeNecklaces(index) {
  let content = `<img src="${necklaceImages[index]}" style="width: 100%;">`;
  document.querySelector(".necklace").innerHTML = content;
}
function changeHairstyle(index) {
  let content = `<img src="${hairstyleImages[index]}" style="width: 112%;">`;
  document.querySelector(".hairstyle").innerHTML = content;
}
function changeFaces(index) {
  let content = `<img src="${faceImages[index]}" style="width: 100%;">`;
  document.querySelector(".model").innerHTML = content;
}
function changeBackground(index) {
  let content = `<img src="${bgImages[index]}" style="width: 100%;">`;
  document.querySelector(".background").innerHTML = content;
}

// Call this function when the page loads
createClothButtons();
