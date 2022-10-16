const ratingBoxes = document.querySelectorAll(".rating-box div");
for (const [index, box] of ratingBoxes.entries()) {
  if (index > 0) {
    const prevBox = ratingBoxes[index - 1];
    box.addEventListener("mouseover", function () {
      prevBox.classList.add("highlight__prev");
    });
    box.addEventListener("mouseout", function () {
      prevBox.classList.remove("highlight__prev");
    });
  }
}
const submitBtn = document.querySelector("#submit_btn");
const ratingSection = document.querySelector(".rating__section");
const thankYouSection = document.querySelector(".thankyou__section");
submitBtn.addEventListener("click", () => {
  ratingSection.classList.add("hide");
  thankYouSection.classList.remove("hide");
});
