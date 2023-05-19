const stars = document.getElementById("stars");

const moon = document.getElementById("moon");
const mountains3 = document.getElementById("mountains3");
const mountains4 = document.getElementById("mountains4");
const river5 = document.getElementById("river");
const boat6 = document.getElementById("boat");
const mohammed = document.querySelector(".mohammed");

window.onscroll = function () {
  const value = scrollY;
  stars.style.left = value + "px";
  moon.style.top = value * 4 + "px";
  mountains3.style.top = value * 2 + "px";
  mountains4.style.top = value * 1.5 + "px";
  river5.style.top = value + "px";
  boat6.style.top = value + "px";
  boat6.style.left = value * 3 + "px";
  mohammed.style.fontSize = value + "px";
  if (scrollY >= 67) {
    mohammed.style.fontSize = 67 + "px";
    mohammed.style.position = "fixed";
    if (scrollY >= 478) {
      mohammed.style.visibility = "hidden";
    } else {
      mohammed.style.visibility = "visible";
    }
    if (scrollY >= 127) {
      document.querySelector(".main").style.background =
        "linear-gradient(#376281,#10001f)";
    } else {
      document.querySelector(".main").style.background = background =
        "linear-gradient(to top, #200016,transparent)";
    }
  }
};
