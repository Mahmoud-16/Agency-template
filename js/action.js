// Start Option Box
// Checking if the local storage has a color
let colorLis = document.querySelectorAll(".colors ul li");

// If there is color in local storage
if (window.localStorage.getItem("color")) {
  // Change the mainColor to the color in local storage
  document.documentElement.style.setProperty(
    "--mainColor",
    window.localStorage.getItem("color")
  );
  // Remove active class from all lis
  colorLis.forEach((li) => {
    li.classList.remove("active");
  });
  // Add active class to the li that has the same color stored in local storage
  document
    .querySelector(`[data-color = '${window.localStorage.getItem("color")}']`)
    .classList.add("active");
}

// Switching the main color of the page
colorLis.forEach((li) => {
  // On click remove active class from all lis and add it to the li I clicked
  li.addEventListener("click", (e) => {
    colorLis.forEach((li) => {
      li.classList.remove("active");
    });
    // Add active class to the clicked li
    e.target.classList.add("active");

    // Change the main color to the color of the clicked li
    document.documentElement.style.setProperty(
      "--mainColor",
      e.target.dataset.color
    );
    // Add the color of the clicked li to local storage
    window.localStorage.setItem("color", e.target.dataset.color);
  });
});

// Showing and Hiding Setting Box
let settingBox = document.querySelector(".setting-box");
let settingIcon = document.querySelector(".setting-box i");

settingIcon.addEventListener("click", function () {
  settingBox.classList.toggle("open");
  settingIcon.classList.toggle("rotated");
});

// Changing the landing background image every 10 seconds
let landing = document.querySelector(".landing");
let images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
let backgroundControl = true; // Depend on this to stop or start the switcher
let backgroundInterval; // Declared global here to be visible to forEach. if declared inside switcher, it won't be visible globally
let backgroundOptions = document.querySelectorAll(".random-backgrounds span");

if (window.localStorage.getItem("yes")) {
  backgroundControl = true;

  backgroundOptions.forEach((span) => {
    span.classList.remove("active");
  });
  document.querySelector(".random-backgrounds .yes").classList.add("active");
}

if (window.localStorage.getItem("no")) {
  backgroundControl = false;
  backgroundOptions.forEach((span) => {
    span.classList.remove("active");
  });
  document.querySelector(".random-backgrounds .no").classList.add("active");
}

function switcher() {
  if (backgroundControl === true) {
    backgroundInterval = setInterval(() => {
      // Generate random index from the images array
      let randomNumber = Math.floor(Math.random() * images.length);
      // Every 10 sec the image will change
      landing.style.backgroundImage = `url(images/${images[randomNumber]})`;
    }, 10000);
  }
}
switcher();

// Random Background ON and OFF
backgroundOptions.forEach((span) => {
  span.addEventListener("click", (e) => {
    backgroundOptions.forEach((span) => {
      span.classList.remove("active");
    });
    e.target.classList.add("active");
    // Controlling Background switcher
    if (e.target.classList.contains("yes")) {
      backgroundControl = true;
      switcher();
      window.localStorage.setItem("yes", true);
      window.localStorage.removeItem("no");
    } else {
      backgroundControl = false;
      clearInterval(backgroundInterval);
      window.localStorage.setItem("no", false);
      window.localStorage.removeItem("yes");
    }
  });
});
// End Option Box

// Start Toggle Menu
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
// End Toggle Menu

// Start Skills
let skills = document.querySelector(".skills");

window.onscroll = function () {
  let skillsOffsetTop = skills.offsetTop;
  let skillsOuterHeight = skills.offsetHeight;
  let windowHeight = this.innerHeight;
  let windowScrollTop = this.scrollY;

  if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowHeight) {
    let allSkills = document.querySelectorAll(
      ".skill-box .skill-progress span"
    );

    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};
// End Skills