var btn = document.getElementById("btn-menu");
const header = document.querySelector(".links-header")

btn.addEventListener("click", function() {
   header.classList.toggle("visible")
});