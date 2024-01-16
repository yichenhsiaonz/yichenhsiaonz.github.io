const minimiseButton = document.getElementById("minimise")

minimiseButton.addEventListener("click", toggleHide);

function toggleHide() {
    document.getElementById("navigation").classList.toggle("hide");
    minimiseButton.classList.toggle("flip");
  }