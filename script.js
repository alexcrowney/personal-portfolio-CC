const body = document.body;
const button = document.querySelector("button");
const navbar = document.getElementById("navbar");
const logo = document.getElementById("nav-logo");
const navList = document.getElementById("nav-list").children;
const aboutMe = document.getElementById("about-me");
const mePhoto = document.getElementById("me-running");
const projects = document.getElementById("projects");
const skills = document.getElementById("skills");
const footer = document.querySelector("footer");
const contact = document.getElementById("contact-page");

function toggleNightMode() {
  localStorage.setItem(
    "nightMode",
    localStorage.getItem("nightMode") === "yes" ? "no" : "yes"
  );
}

function checkWhichMode() {
  // NIGHT MODE - HOME
  if (
    localStorage.getItem("nightMode") === "yes" &&
    document.contains(aboutMe)
  ) {
    body.classList.add("night-mode");
    navbar.classList.add("night-mode");
    logo.classList.add("night-mode");
    button.classList.remove("fa-moon");
    button.classList.add("fa-sun");
    button.classList.add("night-mode");
    for (let i = 0; i < navList.length; i++) {
      navList[i].children[0].classList.add("night-mode");
    }
    aboutMe.classList.add("night-mode");
    mePhoto.classList.add("night-mode");
    projects.classList.add("night-mode");
    skills.classList.add("night-mode");
    footer.classList.add("night-mode");
  }
  // NIGHT MODE - CONTACT
  else if (
    localStorage.getItem("nightMode") === "yes" &&
    document.contains(contact)
  ) {
    body.classList.add("night-mode");
    navbar.classList.add("night-mode");
    logo.classList.add("night-mode");
    button.classList.remove("fa-moon");
    button.classList.add("fa-sun");
    button.classList.add("night-mode");
    for (let i = 0; i < navList.length; i++) {
      navList[i].children[0].classList.add("night-mode");
    }
    contact.classList.add("night-mode");
    footer.classList.add("night-mode");
  }
  // DAY MODE - HOME
  else if (
    localStorage.getItem("nightMode") === "no" &&
    document.contains(aboutMe)
  ) {
    body.classList.remove("night-mode");
    navbar.classList.remove("night-mode");
    logo.classList.remove("night-mode");
    button.classList.add("fa-moon");
    button.classList.remove("fa-sun");
    button.classList.remove("night-mode");
    for (let i = 0; i < navList.length; i++) {
      navList[i].children[0].classList.remove("night-mode");
    }
    aboutMe.classList.remove("night-mode");
    mePhoto.classList.remove("night-mode");
    projects.classList.remove("night-mode");
    skills.classList.remove("night-mode");
    footer.classList.remove("night-mode");
  }
  // DAY MODE - CONTACT
  else if (
    localStorage.getItem("nightMode") === "no" &&
    document.contains(contact)
  ) {
    body.classList.remove("night-mode");
    navbar.classList.remove("night-mode");
    logo.classList.remove("night-mode");
    button.classList.add("fa-moon");
    button.classList.remove("fa-sun");
    button.classList.remove("night-mode");
    for (let i = 0; i < navList.length; i++) {
      navList[i].children[0].classList.remove("night-mode");
    }
    contact.classList.remove("night-mode");
    footer.classList.remove("night-mode");
  }
}
