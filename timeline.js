for (let i = 1; i < 8; i++) {
  let time = document.getElementById("circle" + i);
  let parent = time.parentElement;
  time.addEventListener("click", () => {
    time.setAttribute("modified", "true");
    for (let j = 1; j < 7; j++) {
      let frame = document.getElementById("textcircle" + j);
      frame.style.display = "none";
      let circle = document.getElementById("circle" + j);
      circle.classList.add("colorC");
      circle.classList.remove("startC");
    }
    let frame = document.getElementById("textcircle" + i);
    frame.style.animation = "slide 1.5s ease forwards";
    frame.style.display = "block";
    time.classList.remove("colorC");
    time.classList.add("startC");
  });
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function timeAnimation() {
  let val = getRandomInt(6) + 1;
  let icon = document.getElementById("circle" + val);
  icon.style.animation = "bubble-anim 1s ease-out";
  setTimeout(() => {
    icon.style.animation = "";
    setTimeout(timeAnimation, 1000);
  }, 2000);
}

timeAnimation();
