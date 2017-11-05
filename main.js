let containerMenu = document.querySelector(".container-menu");
let menuRes = document.querySelector(".menu-res");
let down = document.querySelector("#down");
let gallery = document.querySelector(".gallery");
let galleryDiv;

if (gallery) {
  galleryDiv = gallery.querySelectorAll("div");

  down.addEventListener("click", function () {
    let scrollValue = 0;
    let scroll = window.setInterval(function () {
      let prevValue = window.scrollY;
      if (window.scrollY < gallery.offsetTop - 50) {
        window.scrollBy(0, scrollValue);
    } else if (window.scrollY > gallery.offsetTop - 50) {
      scrollValue = 0;
      window.clearInterval(scroll);
    }
    scrollValue++;
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
