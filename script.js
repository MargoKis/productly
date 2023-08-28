// burger-menu
const burgerIcon = document.querySelector(".burger-icon");
const navbar = document.querySelector(".header__navbar");
const btn = document.querySelector(".header__btn-wrap");
const navLinks = document.querySelectorAll(".header__navbar a");
const btnLinks = document.querySelectorAll(".btn-head");

burgerIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
  btn.classList.toggle("active");
});

function closeBurgerMenu() {
  navbar.classList.remove("active");
  btn.classList.remove("active");
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeBurgerMenu();
  });
});

btnLinks.forEach((btn) => {
  btn.addEventListener("click", () => {
    closeBurgerMenu();
  });
});

// input tel-num validation

const telInput = document.getElementById("tel");
const errorMessage = document.getElementById("error-message");
const signUpButton = document.querySelector(".footer__sign");

const phonePattern = /^[0-9]{10}$/;

telInput.addEventListener("input", () => {
  if (!telInput.value.match(phonePattern)) {
    errorMessage.textContent = "Please enter a valid 10-digit phone number";
    signUpButton.disabled = true;
    signUpButton.classList.remove("valid-button");
  } else {
    errorMessage.textContent = "";
    signUpButton.disabled = false;
    signUpButton.classList.add("valid-button");
  }
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (target !== telInput) {
    errorMessage.textContent = "";
  }
});

signUpButton.addEventListener("click", () => {
  if (!telInput.value.match(phonePattern)) {
    errorMessage.textContent = "Please enter a valid 10-digit phone number";
  } else {
    errorMessage.textContent = "";
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Thank you for signing up.",
      confirmButtonColor: "#007bff",
    }).then(() => {
      telInput.value = "";
      signUpButton.disabled = true;
      signUpButton.classList.remove("valid-button");
    });
  }
});