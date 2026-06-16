const bulb = document.querySelector("div");
const btn = document.querySelector("button");

// let flag = true;

btn.addEventListener("click", () => {
  //   if (flag) {
  //     bulb.style.backgroundColor = "yellow";
  //     btn.textContent = "OFF";
  //     flag = false;
  //   } else {
  //     bulb.style.backgroundColor = "transparent";
  //     btn.textContent = "ON";
  //     flag = true;
  //   }
  if (bulb.classList.toggle("lightup")) {
    btn.textContent = "Off";
  } else {
    btn.textContent = "On";
  }
});
