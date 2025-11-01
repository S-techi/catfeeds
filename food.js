// Food slider motion logic
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".foods-slider");
  const leftBtn = document.getElementById("slide-left");
  const rightBtn = document.getElementById("slide-right");

  rightBtn.addEventListener("click", () => {
    slider.scrollBy({ left: 300, behavior: "smooth" });
  });

  leftBtn.addEventListener("click", () => {
    slider.scrollBy({ left: -300, behavior: "smooth" });
  });
});
