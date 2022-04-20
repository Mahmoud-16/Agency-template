// Changing the landing background image every 10 seconds

let landing = document.querySelector(".landing");

let images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

setInterval(() => {
  // Generate random index from the images array
  let randomNumber = Math.floor(Math.random() * images.length);
  // Every 10 sec the image will change
  landing.style.backgroundImage = `url(../images/${images[randomNumber]})`;
}, 10000);
