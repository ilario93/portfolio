function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function loopAnimation() {
  let val = getRandomInt(13);
  let icon = document.getElementById("bubble" + val);
  icon.style.animation = "bubble-anim 1s ease-out";
  setTimeout(() => {
    icon.style.animation = "";
    setTimeout(loopAnimation, 1000);
  }, 2000);
}

loopAnimation();
