document.getElementById("minimise").addEventListener("click", toggleHide);

function toggleHide() {
    document.getElementById("navigation").classList.toggle("hide");
    document.getElementById("minimise").classList.toggle("flip");
  }