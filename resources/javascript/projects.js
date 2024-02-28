const projectstext = document.getElementById("projectstext");

if(window.matchMedia("(pointer: coarse)").matches) {
    projectstext.innerHTML = "Here are some of my projects. Tap on the images to go to the github repository.";
} else {
    projectstext.innerHTML = "Here are some of my projects. Click on the images to go to the github repository.";
}