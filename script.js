const ratingButtons = document.querySelectorAll(".user-options .rating-button");
const submitButton = document.querySelector("#submit-button");
const thankYouContainer = document.querySelector("#thank-you-container");
const ratingValue = document.querySelector("#rating-value");

ratingButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    ratingButtons.forEach((otherButton) => {
      otherButton.classList.remove("active");
    });
    button.classList.add("active");
    submitButton.disabled = false;
  });
});

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const activeButton = document.querySelector(
    ".user-options .rating-button.active"
  );
  if (activeButton) {
    activeButton.disabled = true;
    document.querySelector(".card").style.display = "none";
    thankYouContainer.style.display = "block";
    ratingValue.textContent = activeButton.dataset.rating;
  }
});
