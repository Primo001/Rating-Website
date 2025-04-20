document.addEventListener("DOMContentLoaded", () => {
  const ratingButtons = document.querySelectorAll(".rating-button");
  const submitButton = document.querySelector(".submit");
  const ratingState = document.querySelector(".rating-state");
  const thankYouState = document.querySelector(".thank-you-state");
  const selectedRatingSpan = document.getElementById("selected-rating");

  let selectedRating = null;

  // Add click event listeners to rating buttons
  ratingButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      ratingButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to the clicked button
      button.classList.add("active");

      // Store the selected rating
      selectedRating = button.textContent;
    });

    // Add hover and focus states for accessibility
    button.addEventListener("mouseover", () => {
      button.classList.add("hover");
    });

    button.addEventListener("mouseout", () => {
      button.classList.remove("hover");
    });

    button.addEventListener("focus", () => {
      button.classList.add("focus");
    });

    button.addEventListener("blur", () => {
      button.classList.remove("focus");
    });
  });

  // Add click event listener to the submit button
  submitButton.addEventListener("click", () => {
    if (selectedRating) {
      // Update the selected rating in the thank-you state
      selectedRatingSpan.textContent = selectedRating;

      // Hide the rating state and show the thank-you state
      ratingState.classList.add("hidden");
      thankYouState.classList.remove("hidden");
    } else {
      alert("Please select a rating before submitting.");
    }
  });
});