import './style.css';
// import { countries } from 'countries-list';
import countryList from './countryNames';

/*
function checkZIP() {
  // For each country, defines the pattern that the ZIP has to follow
  const constraints = {
    ch: [
      "^(CH-)?\\d{4}$",
      "Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950",
    ],
    fr: [
      "^(F-)?\\d{5}$",
      "France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012",
    ],
    de: [
      "^(D-)?\\d{5}$",
      "Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345",
    ],
    nl: [
      "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
      "Netherland ZIPs must have exactly 4 digits, followed by 2 letters except SA, SD and SS",
    ],
  };

  // Read the country id
  const country = document.getElementById("Country").value;

  // Get the NPA field
  const ZIPField = document.getElementById("ZIP");

  // Build the constraint checker
  const constraint = new RegExp(constraints[country][0], "");
  console.log(constraint);

  // Check it!
  if (constraint.test(ZIPField.value)) {
    // The ZIP follows the constraint, we use the ConstraintAPI to tell it
    ZIPField.setCustomValidity("");
  } else {
    // The ZIP doesn't follow the constraint, we use the ConstraintAPI to
    // give a message about the format required for this country
    ZIPField.setCustomValidity(constraints[country][1]);
  }
}


const form = document.querySelector("form");
const email = document.getElementById("mail");
const error = email.nextElementSibling;

// As per the HTML Specification
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Now we can rebuild our validation constraint
// Because we do not rely on CSS pseudo-class, we have to
// explicitly set the valid/invalid class on our email field
window.addEventListener("load", () => {
  // Here, we test if the field is empty (remember, the field is not required)
  // If it is not, we check if its content is a well-formed email address.
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  email.className = isValid ? "valid" : "invalid";
});

// This defines what happens when the user types in the field
email.addEventListener("input", () => {
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  if (isValid) {
    email.className = "valid";
    error.textContent = "";
    error.className = "error";
  } else {
    email.className = "invalid";
  }
});

// This defines what happens when the user tries to submit the data
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  if (!isValid) {
    email.className = "invalid";
    error.textContent = "I expect an email, darling!";
    error.className = "error active";
  } else {
    email.className = "valid";
    error.textContent = "";
    error.className = "error";
  }
});

*/

function createCountryOptions() {
  const select = document.querySelector('form select');
  let selected = false;

  countryList.forEach((country) => {
    const optionElm = document.createElement('option');
    if (!selected) {
      optionElm.selected = true;
      selected = true;
    }

    const [countryName, codeName] = country.split('-');

    if (!countryName || !codeName) {
      console.log('empty');
    }
    optionElm.value = codeName;
    optionElm.textContent = countryName;

    select.appendChild(optionElm);
  });
}

createCountryOptions();

const form = document.querySelector('form');

const { email, country, zipCode, password, confirmPassword } = form.elements;

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

email.addEventListener('input', () => {
  const { value } = email;

  const isValid = value.trim() !== '' || emailRegExp.test(email.value);
  if (!isValid) {
    email.setCustomValidity('Please input a valid email');
  } else {
    email.setCustomValidity('');
  }

  email.reportValidity();
});

function passwordStrengthCheck(checkPassword, minPasswordLength = 16) {
  const criteria = {
    lowercaseLetters: /[a-z]/.test(checkPassword),
    uppercaseLetters: /[A-Z]/.test(checkPassword),
    numbers: /[0-9]/.test(checkPassword),
    length: checkPassword.length >= minPasswordLength,
  };

  // specialCharacters: /\W/.test(checkPassword),

  let strength = 0;

  const keys = Object.keys(criteria);
  const keysCount = keys.length;

  keys.forEach((key) => {
    if (criteria[key]) {
      strength += 1;
    }
  });

  const strengthPercentage = (strength / keysCount) * 100;
  return { strengthPercentage, criteria };
}

function getPasswordErrorMsg(criteria) {
  let errorMsg = '';

  const keys = Object.keys(criteria);
  keys.forEach((key) => {
    if (!criteria[key]) {
      switch (key) {
        case 'length':
          errorMsg += 'Password must be at least 16 characters long.\n';
          break;
        case 'lowercaseLetters':
          errorMsg += 'Password must contain lower case letters.\n';
          break;

        case 'uppercaseLetters':
          errorMsg += 'Password must contain upper case letters.\n';
          break;

        case 'numbers':
          errorMsg += 'Password must contain numbers.\n';
          break;

        default:
          break;
      }
    }
  });

  return errorMsg;
}

password.addEventListener('input', () => {
  const { value } = password;

  const { strengthPercentage, criteria } = passwordStrengthCheck(value);

  if (strengthPercentage < 100) {
    const errorMsg = getPasswordErrorMsg(criteria);

    password.setCustomValidity(errorMsg);
  } else {
    password.setCustomValidity('');
  }

  password.reportValidity();
});

confirmPassword.addEventListener('input', () => {
  const passwordValue = password.value;

  const confirmPasswordValue = confirmPassword.value;

  if (passwordValue !== confirmPasswordValue) {
    confirmPassword.setCustomValidity('Passwords do not match');
  } else {
    confirmPassword.setCustomValidity('');
  }

  confirmPassword.reportValidity();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const emailValue = email.value;

  const emailValid = emailValue.trim() !== '' || emailRegExp.test(email.value);

  if (!emailValid) {
    email.setCustomValidity('Please input a valid email');
    email.reportValidity();
    return;
  }

  const passwordValue = password.value;

  const { strengthPercentage, criteria } = passwordStrengthCheck(passwordValue);

  if (strengthPercentage < 100) {
    const errorMsg = getPasswordErrorMsg(criteria);

    password.setCustomValidity(errorMsg);
    password.reportValidity();
    return;
  }

  const confirmPasswordValue = confirmPassword.value;

  if (passwordValue !== confirmPasswordValue) {
    confirmPassword.setCustomValidity('Passwords do not match');
    confirmPassword.reportValidity();
    return;
  }

  //   const successMsgDiv = document.querySelector('.success-msg');

  form.classList.add('hide');
});
