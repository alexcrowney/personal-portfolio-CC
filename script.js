const button = document.querySelector("button");
const navbar = document.getElementById("navbar");
const logo = document.getElementById("nav-logo");
const navLinks = navbar.getElementsByTagName("a");
const aboutMe = document.getElementById("about-me");
const projects = document.getElementById("projects");
const skills = document.getElementById("skills");
const body = document.body;
const footer = document.querySelector("footer");
const contact = document.getElementById("contact-page");
let wasExecuted = false;

function nightMode() {
  if (!wasExecuted) {
    console.log("Changing to night mode");

    navbar.style.backgroundColor = "var(--night-first-color)";
    logo.style.filter = "invert(100%)";
    button.style.backgroundColor = "var(--night-fourth-color)";
    button.className = "fas fa-sun";
    button.style.color = "var(--night-text-color)";
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].style.color = "var(--night-text-color)";
    }
    aboutMe.style.backgroundColor = "var(--night-second-color)";
    aboutMe.querySelector("img").style.border = "#9290C3 solid 5px";
    aboutMe.querySelector("img").style.boxShadow =
      "6px 6px 3.5px 0px var(--night-text-color)";
    projects.style.backgroundColor = "var(--night-third-color)";
    skills.style.backgroundColor = "var(--night-fourth-color)";
    body.style.color = "var(--night-text-color)";
    footer.style.color = "var(--night-text-color)";
    // contact.style.backgroundColor = "var(--night-fifth-color)";

    wasExecuted = true;
  } else {
    console.log("Changing back to normal mode");

    navbar.style.backgroundColor = "";
    logo.style.filter = "";
    button.style.backgroundColor = "";
    button.className = "fas fa-moon";
    button.style.color = "";
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].style.color = "";
    }
    aboutMe.style.backgroundColor = "";
    aboutMe.querySelector("img").style.border = "";
    aboutMe.querySelector("img").style.boxShadow = "";
    projects.style.backgroundColor = "";
    skills.style.backgroundColor = "";
    body.style.color = "";
    footer.style.color = "";
    // contact.style.backgroundColor = "";

    wasExecuted = false;
  }
  removeEventListener("click", nightMode);
}

// function changeToNormalMode() {
//   if ((navbar.style.backgroundColor = "var(--night-first-color)")) {
//     navbar.style.backgroundColor = "";
//     logo.style.filter = "";
//     button.style.backgroundColor = "";
//     button.className = "";
//     button.style.color = "";
//     for (let i = 0; i < navLinks.length; i++) {
//       navLinks[i].style.color = "";
//     }
//     aboutMe.style.backgroundColor = "";
//     aboutMe.querySelector("img").style.border = "";
//     aboutMe.querySelector("img").style.boxShadow = "";
//     projects.style.backgroundColor = "";
//     skills.style.backgroundColor = "";
//     body.style.color = "";
//     footer.style.color = "";
//   }
// }

button.addEventListener("click", nightMode);
