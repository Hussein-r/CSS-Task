let button = document.getElementById("showme");
let songs = document.getElementById("container");
button.addEventListener("click", myFunction);
function myFunction() {
  if (songs.style.display == "none" || songs.style.display == "") {
    songs.style.display = "grid";
    button.innerHTML = "Hide Me!";
  } else {
    songs.style.display = "none";
    button.innerHTML = "Show Me!";
  }
}
