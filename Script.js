const body = window.document.body;
const light = window.document.getElementById("light");
const dark = window.document.getElementById("dark");
const content = document.querySelectorAll(".container");
const kbd = document.querySelectorAll("kbd");
const moment = document.querySelector(".blockquote-footer");

dark.addEventListener("click" , () => {
    localStorage.setItem("theme" , "bg-dark");
    localStorage.setItem("colors" , "text-white")
    window.document.location = document.baseURI;
    localStorage.setItem("kbd-bg" , "bg-secondary");
    localStorage.setItem("kdb-color" , "text-white");
    
});

light.addEventListener("click" , function(){
    localStorage.removeItem("theme");
    localStorage.removeItem("colors");
    localStorage.removeItem("kbd-bg");
    window.document.location = document.baseURI;
});
  
body.classList.toggle(localStorage.getItem("theme"));
content.forEach((container) => {
  container.classList.toggle(localStorage.getItem("colors"));
});
for (let i = 0; i < kbd.length; i++) {
  kbd[i].classList.toggle(localStorage.getItem("kbd-bg"));
  kbd[i].classList.toggle(localStorage.getItem("kdb-color"));
}
let date = new Date();
let hours = date.getHours();
window.addEventListener("load", () => {
  if (hours <= 12) {
    moment.innerHTML = "Morning";
  } else if (hours > 18) {
    moment.innerHTML = "Evening";
  } else if (hours > 12) {
    moment.innerHTML = "Afternoon";
  }
});

