const acc = document.querySelectorAll(".accordion");


acc.forEach((element) => {
  const open_icon = element.querySelector(".plus_icon");
  const close_icon = element.querySelector(".cross_icon");

  element.addEventListener("click", () => {
    if (element.classList.contains("active")) {
      element.classList.remove("active");
      // open_icon.style.display = "block";
      // close_icon.style.display = "none";
    }
     else {
      element.classList.add("active");
      // open_icon.style.display = "none";
      // close_icon.style.display = "block";
    }
  });
});
