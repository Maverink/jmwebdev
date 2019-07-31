let scrolled;

let alreadyAnimated = false;

let lgLogo = document.querySelector(".logo__big");

let bckgBox = document.querySelector(".intro--background");

let greeting = document.querySelector(".intro--greeting");

let intro = document.querySelector(".intro");

let skills = document.querySelector(".dev-skill-tracks");

let logoSubTitle = document.querySelector(".logo__big--subtitle");

let cube1 = document.querySelector(".cube1");
let cube11 = document.querySelector(".cube11");

let mouseIcon = document.querySelector(".scroll-icon-box");

let viewHeight = window.innerHeight;

// keepRatio();

var desSkills = [73, 68, 45, 38, 20];

function onScreen(el) {
  function getElementHeight(el) {
    let elHeight = parseInt(
      window
        .getComputedStyle(el)
        .getPropertyValue("height")
        .slice(0, -2),
      10
    );
    return elHeight;
  }

  viewHeight = window.innerHeight;

  // console.log(viewHeight)
  // console.log(el.getBoundingClientRect().top);
  // console.log(getElementHeight(el));

  if (
    el.getBoundingClientRect().top + getElementHeight(el) / 1.2 <
    viewHeight
  ) {
    return true;
  } else {
    return false;
  }
}

window.addEventListener("scroll", revealOnScroll);

function revealOnScroll() {
  //   if (onScreen(skills)) {
  //     let arr = Array.prototype.slice.call(document.querySelectorAll(".cube"));
  //     arr.forEach(function(el) {
  //       el.classList.add("clicked");
  //     });
  //   }

  scrolled = window.scrollY;

  if (scrolled < 100 && alreadyAnimated === true) {
    alreadyAnimated = false;
    lgLogo.classList.remove("rightTranslate");
    bckgBox.classList.remove("expandRight");
    greeting.classList.remove("fadeIn");

    lgLogo.classList.add("leftTranslate");
    logoSubTitle.classList.remove("opacity");
    bckgBox.classList.add("expandLeft");
    greeting.classList.add("fadeOut");

    lgLogo.addEventListener("transitionend", function() {
      lgLogo.classList.remove("leftTranslate");
    });

    bckgBox.addEventListener("transitionend", function() {
      bckgBox.classList.remove("expandLeft");
    });

    greeting.addEventListener("transitionend", function() {
      greeting.classList.remove("fadeOut");
    });

    console.log("less than 100");
  } else if (scrolled >= 100 && scrolled < 900) {
    lgLogo.classList.add("rightTranslate");
    bckgBox.classList.add("expandRight");
    greeting.classList.add("fadeIn");
    logoSubTitle.classList.add("opacity");
    mouseIcon.classList.add("opacity-mouse-icon");
    console.log("more than 100");
    alreadyAnimated = true;
  } else if (scrolled >= 900) {
    intro.style.transform = "translateY(900px)";
  }

  if (scrolled < 900) {
    intro.style.transform = "translateY(" + scrolled + "px)";
  }
}

// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// }

var devSkills = [200, 250, 450, 300, 450, 550];

window.addEventListener("scroll", function() {
  if (onScreen(cube1)) {
    for (let i = 1; i < 6; i++) {
      let currentCube = document.querySelector(".cube" + i.toString());
      console.log(currentCube);
      currentCube.style.transform =
        "translate(-.2vw," + devSkills[i - 1].toString() + "%)";
    }
  }
});

var desSkills = [250, 170, 600, 450, 600];

window.addEventListener("scroll", function() {
  if (onScreen(cube11)) {
    for (let i = 1; i <= 5; i++) {
      let currentCube = document.querySelector(".cube" + (i + 6).toString());
      currentCube.style.transform =
        "translate(2px," + desSkills[i - 1].toString() + "%)";
      console.log(currentCube);
    }
  }
});

// div.style.transform = "translate(x,y)"

// document.querySelector("#cube5").addEventListener("click", function() {
//   document.querySelector("#cube5").classList.add("skills-activated");
// });
