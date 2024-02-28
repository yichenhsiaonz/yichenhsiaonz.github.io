const minimiseButton = document.getElementById("minimise")
const aboutButton = document.getElementById("aboutbutton")
const projectsButton = document.getElementById("projectsbutton")
const contactButton = document.getElementById("contactbutton")
const navigation = document.getElementById("navigation")

minimiseButton.addEventListener("click", toggleHide);

aboutButton.addEventListener("click", navOption);
projectsButton.addEventListener("click", navOption);
contactButton.addEventListener("click", navOption);

function toggleHide() {
    navigation.classList.toggle("hide");
    minimiseButton.classList.toggle("flip");
  }
function navOption() {
  if(window.innerWidth <= 1450) {
    navigation.classList.toggle("hide");
    minimiseButton.classList.toggle("flip");
  }
}