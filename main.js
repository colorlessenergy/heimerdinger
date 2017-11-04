let containerMenu = document.querySelector(".container-menu");
let menuRes = document.querySelector(".menu-res");


containerMenu.addEventListener("click", function (e) {
  containerMenu.classList.toggle("change");
  menuRes.classList.toggle("toggle-nav");
})
