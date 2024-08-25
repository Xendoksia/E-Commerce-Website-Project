const countryCode = document.getElementById("countryCode");
const phoneNumber = document.getElementById("tel");

countryCode.addEventListener("input", function () {
  const value = countryCode.value;

  if (!value.startsWith("+")) {
    countryCode.value = "+" + value.replace(/[^0-9]/g, "");
  } else {
    countryCode.value = "+" + value.slice(1).replace(/[^0-9]/g, "");
  }
});
countryCode.addEventListener("keydown", function (e) {
  if (
    countryCode.selectionStart <= 1 &&
    (e.key === "Backspace" || e.key === "Delete")
  ) {
    e.preventDefault();
  }
});

phoneNumber.addEventListener("input", function () {
  const value = phoneNumber.value;
  if (value.length >= 10) {
    phoneNumber.style.outline = "2px solid green";
  } else {
    phoneNumber.style.outline = "2px solid red";
  }
});

const myInput = document.getElementById("isim");
const myInput2 = document.getElementById("soyisim");

myInput.addEventListener("input", function () {
  let value = myInput.value;
  myInput.value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
});
myInput2.addEventListener("input", function () {
  let value2 = myInput2.value;
  myInput2.value =
    value2.charAt(0).toUpperCase() + value2.slice(1).toLowerCase();
});

myInput.addEventListener("input", checkInputs);
myInput2.addEventListener("input", checkInputs);

myInput.addEventListener("focus", checkInputs);
myInput2.addEventListener("focus", checkInputs);

function checkInputs() {
  let value = myInput.value;
  let value2 = myInput2.value;

  if (
    value.length == 0 ||
    value2.length == 0 ||
    value.length < 3 ||
    value2.length < 3
  ) {
    myInput.style.outline = "2px solid red";
    myInput2.style.outline = "2px solid red";
  } else if (value.length >= 3 && value2.length >= 3) {
    myInput.style.outline = "2px solid green";
    myInput2.style.outline = "2px solid green";
  }
}

countryCode.addEventListener("input", function () {
  const value = countryCode.value;
  if (value.length >= 2) {
    countryCode.style.outline = "2px solid green";
  } else {
    countryCode.style.outline = "2px solid red";
  }
});

const emailCheck = document.getElementById("email");
emailCheck.addEventListener("input", function () {
  const value = emailCheck.value;
  if (value.includes("@") && value.includes(".")) {
    emailCheck.style.outline = "2px solid green";
  } else {
    emailCheck.style.outline = "2px solid red";
  }
});

const Password = document.getElementById("password");
const requirements = document.getElementById("requirements");
const passwordStrength = document.getElementById("password-strength");

const specialCharCheck = document.getElementById("least1specialspan");
const numberCheck = document.getElementById("least1numberspan");
const upperCaseCheck = document.getElementById("least1span");
const lengthCheck = document.getElementById("least6span");

const btnprime = document.getElementsByClassName("btn-primary");
Password.addEventListener("focus", function () {
  requirements.style.display = "block";
});

Password.addEventListener("blur", function () {
  if (Password.value !== "") {
    requirements.style.display = "block";
  } else {
    requirements.style.display = "none";
    passwordStrength.style.display = "none";
    upperCaseCheck.style.color = "red";
    numberCheck.style.color = "red";
    lengthCheck.style.color = "red";
    specialCharCheck.style.color = "red";
    btnprime.style.marginTop = "20px";
  }
});

Password.addEventListener("input", function () {
  let strengthCounter = 0;
  const value = Password.value;

  if (value.length == 0) {
    passwordStrength.style.display = "none";
    strengthCounter = 0;
    upperCaseCheck.style.color = "red";
    numberCheck.style.color = "red";
    lengthCheck.style.color = "red";
    specialCharCheck.style.color = "red";
    Password.style.outline = "2px solid red";
    return;
  }

  if (/[A-Z]/.test(value)) {
    strengthCounter++;
    upperCaseCheck.style.color = "rgb(0, 205, 102)";
  } else {
    upperCaseCheck.style.color = "red";
  }

  if (/[0-9]/.test(value)) {
    strengthCounter++;
    numberCheck.style.color = "rgb(0, 205, 102)";
  } else {
    numberCheck.style.color = "red";
  }

  if (value.length >= 6) {
    strengthCounter++;
    lengthCheck.style.color = "rgb(0, 205, 102)";
  } else {
    lengthCheck.style.color = "red";
  }

  if (/[^a-zA-Z0-9]/.test(value)) {
    strengthCounter++;
    specialCharCheck.style.color = "rgb(0, 205, 102)";
  } else {
    specialCharCheck.style.color = "red";
  }

  if (strengthCounter >= 1) {
    passwordStrength.style.display = "block";
    passwordStrength.style.backgroundColor = "red";
    passwordStrength.style.width = "25%";
    passwordStrength.innerHTML = "Zayıf";
    Password.style.outline = "2px solid red";
  }
  if (strengthCounter >= 2) {
    passwordStrength.style.backgroundColor = "orange";
    passwordStrength.style.width = "40%";
    passwordStrength.innerHTML = "Orta";
    Password.style.outline = "2px solid red";
  }
  if (strengthCounter >= 3) {
    passwordStrength.style.backgroundColor = "yellow";
    passwordStrength.style.width = "60%";
    passwordStrength.innerHTML = "Güçlü";
    Password.style.outline = "2px solid red";
  }
  if (strengthCounter >= 4) {
    passwordStrength.style.backgroundColor = "green";
    passwordStrength.style.width = "80%";
    passwordStrength.innerHTML = "Çok Güçlü";
    Password.style.outline = "2px solid green";
  }
});
