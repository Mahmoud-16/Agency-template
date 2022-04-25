// Changing the landing background image every 10 seconds
let landing = document.querySelector(".landing");

let images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

setInterval(() => {
  // Generate random index from the images array
  let randomNumber = Math.floor(Math.random() * images.length);
  // Every 10 sec the image will change
  landing.style.backgroundImage = `url(images/${images[randomNumber]})`;
}, 10000);


// Showing toggle menu once the icon is clicked
let headerIcon = document.querySelector(".landing i");
let toggleMenu = document.querySelector(".landing .links");

headerIcon.addEventListener("click", function () {
  if (toggleMenu.style.display === "none") {
    toggleMenu.style.display = "block";
  } else {
    toggleMenu.style.display = "none";
  }
});


// Showing and Hiding Setting Box
let settingBox = document.querySelector(".setting-box");
let settingIcon = document.querySelector(".setting-box i");

settingIcon.addEventListener("click", function () {
  settingBox.classList.toggle("open");
  settingIcon.classList.toggle("rotated")
});
