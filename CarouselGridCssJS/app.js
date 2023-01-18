//let allGridItems = [...document.getElementsByClassName("grid-item")];

//let popupBg = document.getElementById("popup-bg");
//let popupImg = document.getElementById("popup-img");

//const openPopup = (e) =>{
   // let gridItemClicked = e.EventTarget.closest(".grid-item");
  // let gridItemClicked = e.target.closest(".grid-item");
   // let clickedImageName = gridItemClicked.id;
   // popupBg.classList;addEventListener("active");
   // popupImg.src = `./images/${clickedImageName}.jpg`;
  // let clickedImageName = gridItemClicked.id;
  // popupBg.classList.add("active");
  // popupImg.src = `./images/${clickedImageName}.jpg`;

//};
//const closePopup = () => {
  //  popupBg.classList.remove("active");

//};

/*allGridItems.forEach((el) => el.addEventListener("click", openPopup));

popuImg.addEventListener("click", (e) => e.stopPropagation());
//popupBg.addEventListener("click",closePopup);
popupBg.addEventListener("click", closePopup);*/

let allGridItems = [...document.getElementsByClassName("grid-item")];
let popupBg = document.getElementById("popup-bg");
let popupImg = document.getElementById("popup-img");

const openPopup = (e) => {
  let gridItemClicked = e.target.closest(".grid-item");
  let clickedImageName = gridItemClicked.id;
  popupBg.classList.add("active");
  popupImg.src = `./images/${clickedImageName}.jpg`;
};

const closePopup = () => {
  popupBg.classList.remove("active");
};

allGridItems.forEach((el) => el.addEventListener("click", openPopup));

popupImg.addEventListener("click", (e) => e.stopPropagation());
popupBg.addEventListener("click", closePopup);