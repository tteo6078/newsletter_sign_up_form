const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const errorSpan = document.getElementById("email-error");
const successMessage = document.getElementById("success-message");
const outputEmail = document.getElementById("output-email");
const dismissBtn = document.getElementById("dismiss");
const mainCard = document.querySelector(".main-card");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(emailInput.value)) {
    errorSpan.style.display = "none";
    outputEmail.textContent = emailInput.value;
    successMessage.hidden = false;
    form.closest(".main-card").style.display = "none"; // hide card
  } else {
    errorSpan.textContent = "Valid email required";
    errorSpan.style.display = "block";
    emailInput.style.borderColor = "var(--red)";
    emailInput.style.backgroundColor = "var(--light-red)";
  }
  
});

dismissBtn.addEventListener("click", () => {
  // hide success and show form again
  successMessage.hidden = true;
  mainCard.style.display = "flex";
  mainCard.removeAttribute("aria-hidden");

  // reset form and UI
  form.reset();
  errorSpan.style.display = "none";
  emailInput.style.borderColor = "";
  emailInput.style.backgroundColor = "";

  // return focus to the email input
  emailInput.focus();
});

