let containerMenu = document.querySelector(".container-menu");
let menuRes = document.querySelector(".menu-res");
let down = document.querySelector("#down");
let gallery = document.querySelector(".gallery");
let galleryDiv;
if (gallery) {
  galleryDiv = gallery.querySelectorAll("div");

  down.addEventListener("click", function () {
    let scroll = window.setInterval(function () {
      if (window.scrollY < gallery.offsetTop - 50) {
        window.scrollBy(0, 5);
    } else if (window.scrollY > gallery.offsetTop - 50) {
      window.clearInterval(scroll)
    }
    }, 10)
  });
}

let once = false;

containerMenu.addEventListener("click", function (e) {
  containerMenu.classList.toggle("change");
  menuRes.classList.toggle("toggle-nav");
});



window.setInterval(function () {
  if (window.scrollY > 378 && !once) {
    console.log("called", window.scrollY);
    galleryDiv.forEach(function (current) {
      current.classList.toggle("showPic");
    });
    once = true;
  }
})
