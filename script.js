const slider = document.querySelector(".items");

let isDown = false;   //mouse isn't down;
let startX;           //where mouse was when first pressed;
let scrollLeft;       //How far the slider is already scrolled when mouse is pressed;

function down(e) {
  isDown = true;
  slider.classList.add("active");       //to scale the slider up;
  startX = e.pageX;
  scrollLeft = slider.scrollLeft;
}

function notDown() {
  isDown = false;
  slider.classList.remove("active");
}

function slide(e) {
  if (!isDown) return;  // stop the fn from running
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;            //to scroll relative to slider position on the page;
  const walk = (x - startX);                        //Distance to scroll;
  slider.scrollLeft = scrollLeft - walk;
}


slider.addEventListener("mousedown", down);
slider.addEventListener("mouseup", notDown);
slider.addEventListener("mouseleave", notDown);
slider.addEventListener("mousemove", slide);