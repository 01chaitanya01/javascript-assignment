let form = document.getElementById("myForm");

let userData = {};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("button clicked");

  let valid = true;

  // validating first name
  const firstName = document.getElementById("firstName");
  const firstNameError = document.getElementById("firstNameError");
  if (firstName.value.length > 0) {
    firstNameError.style.display = "none";
    userData.firstName = firstName.value;
  } else {
    valid = false;
    firstNameError.textContent = "First name is required";
    firstNameError.style.display = "block";
    console.log(firstName.value);
  }

  // validating last name
  const lastName = document.getElementById("lastName");
  const lastNameError = document.getElementById("lastNameError");
  if (lastName.value.length > 0) {
    lastNameError.style.display = "none";
    userData.lastName = lastName.value;
  } else {
    valid = false;
    lastNameError.textContent = "Last name is required";
    lastNameError.style.display = "block";
    console.log(firstName.value);
  }

  // validating Gender
  const genderMale = document.getElementById("genderMale");
  const genderFemale = document.getElementById("genderFemale");
  const genderOther = document.getElementById("genderOther");
  const genderError = document.getElementById("genderError");

  if (!genderMale.checked && !genderFemale.checked && !genderOther.checked) {
    valid = false;
    genderError.textContent = "Gender is required";
    genderError.style.display = "block";
  } else {
    genderError.style.display = "none";
    if (genderMale.checked) {
      userData.gender = "male";
    } else if (genderFemale.checked) {
      userData.gender = "female";
    } else {
      userData.gender = "other";
    }
  }

  // validating Mobile number
  const mobileNumber = document.getElementById("mobileNumber");
  const mobileNumberError = document.getElementById("mobileNumberError");
  if (mobileNumber.value.length === 0) {
    valid = false;
    mobileNumberError.textContent = "Mobile number is required";
    mobileNumberError.style.display = "block";
  } else if (mobileNumber.value.length !== 10) {
    valid = false;
    mobileNumberError.textContent = "Length should be 10";
    mobileNumberError.style.display = "block";
  } else {
    mobileNumberError.style.display = "none";
    userData.mobileNumber = mobileNumber.value;
  }

  // validating Email id
  const email = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  if (email.value.trim() === "") {
    valid = false;
    emailError.textContent = "Email is required";
    emailError.style.display = "block";
    console.log(firstName.value);
  } else if (!/\S+@\S+\.\S+/.test(email.value.trim())) {
    valid = false;
    emailError.textContent = "Email is invalid";
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
    userData.email = email.value;
  }

  // if the form is valid then success message alert
  if (valid) {
    alert("form submitted successfully");
    console.log(userData);
  }
});
