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
      title: "Thank you!",
      text: "Our manager will contact you within 20 minutes.",
      confirmButtonColor: "#007bff",
    }).then(() => {
      telInput.value = "";
      signUpButton.disabled = true;
      signUpButton.classList.remove("valid-button");
    });
  }
});

// sign up popup
function togglePopupSignUp() {
  const popupSignUp = document.getElementById("popupSignUp");
  popupSignUp.style.display =
    popupSignUp.style.display === "flex" ? "none" : "flex";
}

function closePopupSignUp() {
  document.getElementById("popupSignUp").style.display = "none";
}

document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {});

// log in popup
function togglePopupLogIn() {
  const popupLogIn = document.getElementById("popupLogIn");
  popupLogIn.style.display =
    popupLogIn.style.display === "flex" ? "none" : "flex";
}

function closePopupLogIn() {
  document.getElementById("popupLogIn").style.display = "none";
}

document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {});

// register validation
// sign up
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(String(email).toLowerCase());
}

function validateForm(event) {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  const confirmPasswordValue = confirmPasswordInput.value.trim();

  let isValid = true;

  if (/\d/.test(nameValue)) {
    nameError.textContent = "Name should not contain digits";
    nameError.style.display = "block";
    isValid = false;
  } else if (nameValue.length < 3 || nameValue.length > 16) {
    nameError.textContent = "Name should be between 3 and 16 characters";
    nameError.style.display = "block";
    isValid = false;
  } else {
    nameError.style.display = "none";
  }

  if (!validateEmail(emailValue)) {
    emailError.style.display = "block";
    isValid = false;
  } else {
    emailError.style.display = "none";
  }

  if (passwordValue.length < 6) {
    passwordError.style.display = "block";
    isValid = false;
  } else {
    passwordError.style.display = "none";
  }

  if (passwordValue !== confirmPasswordValue) {
    confirmPasswordError.style.display = "block";
    isValid = false;
  } else {
    confirmPasswordError.style.display = "none";
  }

  return isValid;
}

document
  .querySelector(".btn-popup")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      // Закрити поп-ап
      document.getElementById("popupSignUp").style.display = "none";
      alert("You have successfully signed up!");
    }
  });

document.getElementById("name").addEventListener("input", validateForm);
document.getElementById("email").addEventListener("input", validateForm);
document.getElementById("password").addEventListener("input", validateForm);
document
  .getElementById("confirmPassword")
  .addEventListener("input", validateForm);
document.getElementById("signupForm").addEventListener("submit", validateForm);

// log in
function validateLoginForm(event) {
  const emailInput = document.getElementById("emailLogin");
  const passwordInput = document.getElementById("passwordLogin");

  const emailError = document.getElementById("emailErrorLogin");
  const passwordError = document.getElementById("passwordErrorLogin");

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  let isValid = true;

  if (!validateEmail(emailValue)) {
    emailError.style.display = "block";
    isValid = false;
  } else {
    emailError.style.display = "none";
  }

  if (passwordValue.length < 6) {
    passwordError.style.display = "block";
    isValid = false;
  } else {
    passwordError.style.display = "none";
  }

  return isValid;
}

document
  .querySelector(".btn-popup-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const isValid = validateLoginForm();

    if (isValid) {
      // Закрити поп-ап логіну
      document.getElementById("popupLogIn").style.display = "none";
      alert("You have successfully logged in!");
    }
  });

document
  .getElementById("emailLogin")
  .addEventListener("input", validateLoginForm);
document
  .getElementById("passwordLogin")
  .addEventListener("input", validateLoginForm);
document
  .getElementById("loginForm")
  .addEventListener("submit", validateLoginForm);
