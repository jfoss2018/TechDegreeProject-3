// Element Selections
const pageForm = document.querySelector('form');
const fieldset1 = pageForm.querySelectorAll('fieldset')[0];
const nameTextField = document.getElementById('name');
const emailInput = document.getElementById('mail');
const emailLabel = emailInput.previousElementSibling;
const titleLabel = emailInput.nextElementSibling;
const jobRoleSelectField = document.getElementById('title');
const jobRoleTextField = document.getElementById('jobRole');
const designSelectField = document.getElementById('design');
const colorSelectField = document.getElementById('color');
const colorLabel = colorSelectField.previousElementSibling;
const colorSelectOptions = colorSelectField.children;
const activitiesFieldset = document.querySelector('.activities');
const activitiesCheckbox1 = activitiesFieldset.querySelectorAll('label')[0];
const paymentFieldset = activitiesFieldset.nextElementSibling;
const creditCardDiv = document.getElementById('credit-card');
const payPalDiv = creditCardDiv.nextElementSibling;
const bitCoinDiv = payPalDiv.nextElementSibling;
const cardNumDiv = document.querySelector('.col-6');
const creditCardInput = document.getElementById('cc-num');
const creditZipInput = document.getElementById('zip');
const creditCVVInput = document.getElementById('cvv');
const beforeLabel = cardNumDiv.nextElementSibling.nextElementSibling.nextElementSibling;
const paymentSelect = document.getElementById('payment');
const paymentSelectOptions = paymentSelect.children;
const zipDiv1 = document.querySelector('.col-3');
const cvvDiv1 = document.querySelectorAll('.col-3')[1];

// Variable Declaration
let activitiesTotal = 0;

// Initial characteristics
nameTextField.focus();
jobRoleTextField.style.display = "none";
colorSelectField.style.display = "none";
colorLabel.style.display = "none";
paymentSelectOptions[1].selected = true;
payPalDiv.style.display = "none";
bitCoinDiv.style.display = "none";

///////////////////////////////////////////////////////////
// HTML element creation
const nameDiv = document.createElement('div');
const nameSpan = document.createElement('span');
nameDiv.append(nameSpan);
fieldset1.insertBefore(nameDiv, emailLabel);

const newDiv = document.createElement('div');
const newSpan = document.createElement('span');
newDiv.appendChild(newSpan);
newSpan.textContent = `Total \$${activitiesTotal}`;
pageForm.insertBefore(newDiv, paymentFieldset);

const emailValid = document.createElement('div');
const emailValidSpan = document.createElement('span');
emailValid.append(emailValidSpan);
fieldset1.insertBefore(emailValid, titleLabel);

const paymentDiv = document.createElement('div');
paymentDiv.className = "col-6 large";
paymentDiv.style.display = 'inline-block';
const paymentSpan = document.createElement('span');
paymentDiv.append(paymentSpan);
creditCardDiv.insertBefore(paymentDiv, beforeLabel);

const zipDiv = document.createElement('div');
zipDiv.className = "col-3 space large";
zipDiv.style.display = 'inline-block';
const zipSpan = document.createElement('span');
zipDiv.append(zipSpan);
creditCardDiv.insertBefore(zipDiv, beforeLabel);

const cvvDiv = document.createElement('div');
cvvDiv.className = "col-3 space";
cvvDiv.style.display = 'inline-block';
const cvvSpan = document.createElement('span');
cvvDiv.append(cvvSpan);
creditCardDiv.insertBefore(cvvDiv, beforeLabel);

const noPaymentDiv = document.createElement('div');
const noPaymentSpan = document.createElement('span');
noPaymentDiv.append(noPaymentSpan);
paymentFieldset.append(noPaymentDiv);

const activitiesValidDiv = document.createElement('div');
const activitiesValidSpan = document.createElement('span');
activitiesValidDiv.append(activitiesValidSpan);
activitiesFieldset.insertBefore(activitiesValidDiv, activitiesCheckbox1);

/////////////////////////////////////////////////////////////////

// RegEx Test declarations
const nameTest = /[A-Za-z]/;
const zipTest = /^\d{5}$/;
const cvvTest = /^\d{3}$/;
const emailTest = /^[\w.]+@[\w.]+\.[com|net|org|edu]{3}$/;
const creditCardTest = /^\d{13,16}$/;
const creditCardDigitTest = /[\D]/;

// Global Fuctions
function textChange(div, span, text, className) {
  span.textContent = text;
  div.className = className;
}

function checkPosition () {
  creditCardDiv.removeChild(paymentDiv);
  creditCardDiv.removeChild(zipDiv);
  creditCardDiv.removeChild(cvvDiv);
  if (window.innerWidth < 680) {
    creditCardDiv.insertBefore(paymentDiv, zipDiv1);
    creditCardDiv.insertBefore(zipDiv, cvvDiv1);
    zipDiv.classList.remove('space');
    creditCardDiv.insertBefore(cvvDiv, beforeLabel);
    cvvDiv.classList.remove('space');
  } else {
    creditCardDiv.insertBefore(paymentDiv, beforeLabel);
    creditCardDiv.insertBefore(zipDiv, beforeLabel);
    zipDiv.classList.add('space');
    creditCardDiv.insertBefore(cvvDiv, beforeLabel);
    cvvDiv.classList.add('space');
  }
}

// This Event Listener shows/hides the "Other Job Title" input element depending
// on if the "other" option is selected.
jobRoleSelectField.addEventListener('change', (e) => {
  if (e.target.value === 'other') {
    jobRoleTextField.style.display = "";
  } else {
    jobRoleTextField.style.display = "none";
    jobRoleTextField.value = "";
  }
});

// This Event Listener shows/hides the "shirt color" select box and label depending
// on if a shirt theme is selected. It also limits the colors to the corresponding
// shirt theme.
designSelectField.addEventListener('change', (e) => {
  colorSelectOptions[6].selected = true;
  colorSelectField.style.display = "";
  colorLabel.style.display = "";
  function showColor(shirtString) {
    for (let i = 0; i < colorSelectOptions.length; i += 1) {
      colorSelectOptions[i].style.display = "";
      const optionText = colorSelectOptions[i].textContent;
      const searchString = optionText.search(shirtString);
      if (searchString > -1) {
        colorSelectOptions[i].style.display = "none";
      }
    }
  }
  if (e.target.value === 'js puns') {
    showColor('JS shirt only');
  } else if (e.target.value === 'heart js') {
    showColor('JS Puns shirt');
  } else {
    showColor();
    colorSelectField.style.display = "none";
    colorLabel.style.display = "none";
  }
});

// This Event Listener limits the ability to select checkboxes for events if their
// timeslot coinsides with another event. It also keeps track of the running Total
// cost of the selected events.
activitiesFieldset.addEventListener('change', (e) => {
  const priceObject = {
    rks: 100,
    ess: 100,
    ibs: 100,
    ode: 100,
    all: 200,
    ols: 100,
    npm: 100
  };
  function mutuallyExclusive(target, property) {
    const label = target.parentNode[property][property];
    const input = label.querySelector('input');
    if (target.checked) {
      input.disabled = true;
      label.style.color = 'grey';
    } else {
      input.disabled = false;
      label.style.color = 'initial';
    }
    updateTotal(target);
  }
  function updateTotal(target) {
    if (target.checked) {
      activitiesTotal += priceObject[target.name.slice(-3)];
    } else {
      activitiesTotal -= priceObject[target.name.slice(-3)];
    }
    newSpan.textContent = `Total \$${activitiesTotal}`;
  }
  if (e.target.name === 'js-frameworks') {
    mutuallyExclusive(e.target, 'nextElementSibling');
  } else if (e.target.name === 'express') {
    mutuallyExclusive(e.target, 'previousElementSibling');
  } else if (e.target.name === 'js-libs') {
    mutuallyExclusive(e.target, 'nextElementSibling');
  } else if (e.target.name === 'node') {
    mutuallyExclusive(e.target, 'previousElementSibling');
  } else if (e.target.name === 'all') {
    updateTotal(e.target);
  } else if (e.target.name === 'build-tools') {
    updateTotal(e.target);
  } else if (e.target.name === 'npm') {
    updateTotal(e.target);
  }
});

// This Event Listener shows/hides the different payment methods.
paymentSelect.addEventListener('change', (e) => {
  textChange(noPaymentDiv, noPaymentSpan, '', '');
  payPalDiv.style.display = "none";
  bitCoinDiv.style.display = "none";
  creditCardDiv.style.display = "none";
  if (e.target.value === 'credit card') {
    creditCardDiv.style.display = "";
  } else if (e.target.value === 'paypal') {
    payPalDiv.style.display = "";
  } else if (e.target.value === 'bitcoin') {
    bitCoinDiv.style.display = "";
  }
});

// This Event Listener tests the email input in real time and displays an error
// message when invalid and a valid message when valid.
emailInput.addEventListener('keyup', (e) => {
  emailInput.style.border = 'initial';
  const textValid = emailTest.test(emailInput.value);
  if (e.target.value === "") {
    textChange(emailValid, emailValidSpan, '', '');
  } else {
    if (textValid) {
      textChange(emailValid, emailValidSpan, 'Valid Email Address', 'passTest');
    } else {
      textChange(emailValid, emailValidSpan, 'Invalid Email Address', 'failTest');
    }
  }
});

// This Event Listener applies a real time error message upon credit card number input.
// It provides a valid/invalid response, and upon entering anything other than numeric
// digits, it will provide a different message.
creditCardInput.addEventListener('keyup', (e) => {
  creditCardInput.style.border = 'initial';
  const digitTest = creditCardDigitTest.test(creditCardInput.value);
  const numTest = creditCardTest.test(creditCardInput.value);
  if (creditCardInput.value === '') {
    textChange(paymentDiv, paymentSpan, '', 'col-6 large');
  } else {
    if (digitTest) {
      textChange(paymentDiv, paymentSpan, 'Please enter only numeric digits', 'failTest col-6 large');
    } else if (numTest) {
      textChange(paymentDiv, paymentSpan, 'Valid Credit Card Number', 'passTest col-6 large');
    } else {
      textChange(paymentDiv, paymentSpan, 'Invalid Credit Card Number', 'failTest col-6 large');
    }
  }
});

// This block of four Event Listeners reset the error messages and border colors
// upon keyup after attempting to submit the form without all requisite information.
creditZipInput.addEventListener('keyup', (e) => {
  creditZipInput.style.border = 'initial';
  textChange(zipDiv, zipSpan, '', 'col-3 space');
});
creditCVVInput.addEventListener('keyup', (e) => {
  creditCVVInput.style.border = 'initial';
  textChange(cvvDiv, cvvSpan, '', 'col-3 space');
});
nameTextField.addEventListener('keyup', (e) => {
  nameTextField.style.border = 'initial';
  textChange(nameDiv, nameSpan, '', '');
});
activitiesFieldset.addEventListener('change', (e) => {
  textChange(activitiesValidDiv, activitiesValidSpan, '', '');
});

// This Event Listener tests input fields for validity, and interrupts the default
// submit function unless all fields pass the validity test. It also shows the
// error messages and styling for each field that needs attention.
pageForm.addEventListener('submit', (e) => {
  textChange(noPaymentDiv, noPaymentSpan, '', '');
  const checkedBoxes = document.querySelectorAll('input:checked');
  const nameValidTest = nameTest.test(nameTextField.value);
  const emailValidTest = emailTest.test(emailInput.value);
  const creditCardValidTest = creditCardTest.test(creditCardInput.value);
  const creditZipTest = zipTest.test(creditZipInput.value);
  const creditCVVValidTest = cvvTest.test(creditCVVInput.value);
  if (checkedBoxes.length === 0) {
    textChange(activitiesValidDiv, activitiesValidSpan, 'You must select at least one activity', 'failTest');
  } else {
    textChange(activitiesValidDiv, activitiesValidSpan, '', '');
  }
  if (!nameValidTest) {
    textChange(nameDiv, nameSpan, 'You must enter a name', 'failTest');
    nameTextField.style.border = '2px solid red';
  } else {
    textChange(nameDiv, nameSpan, '', '');
    nameTextField.style.border = 'initial';
  }
  if (!emailValidTest) {
    textChange(emailValid, emailValidSpan, 'Invalid email address', 'failTest');
    emailInput.style.border = '2px solid red';
  } else {
    textChange(emailValid, emailValidSpan, '', '');
    emailInput.style.border = 'initial';
  }
  if (!creditCardValidTest) {
    textChange(paymentDiv, paymentSpan, 'Invalid Credit Card Number', 'col-6 failTest');
    creditCardInput.style.border = '2px solid red';
    checkPosition();
  } else {
    textChange(paymentDiv, paymentSpan, '', 'col-6');
    creditCardInput.style.border = 'initial';
    checkPosition();
  }
  if (!creditZipTest) {
    textChange(zipDiv, zipSpan, 'Invalid zip code', 'failTest col-3 space');
    creditZipInput.style.border = '2px solid red';
    checkPosition();
  } else {
    textChange(zipDiv, zipSpan, '', 'col-3 space');
    creditZipInput.style.border = 'initial';
    checkPosition();
  }
  if (!creditCVVValidTest) {
    textChange(cvvDiv, cvvSpan, 'Invalid cvv', 'failTest col-3 space');
    creditCVVInput.style.border = '2px solid red';
    checkPosition();
  } else {
    textChange(cvvDiv, cvvSpan, '', 'col-3 space');
    creditCVVInput.style.border = 'initial';
    checkPosition();
  }
  if (paymentSelectOptions[1].selected) {
    if (checkedBoxes.length > 0 && nameValidTest && emailValidTest && creditCardValidTest && creditZipTest && creditCVVValidTest) {
    } else {
      e.preventDefault();
    }
  } else {
    textChange(paymentDiv, paymentSpan, '', 'col-6');
    creditCardInput.style.border = 'initial';
    textChange(zipDiv, zipSpan, '', 'col-3 space');
    creditZipInput.style.border = 'initial';
    textChange(cvvDiv, cvvSpan, '', 'col-3 space');
    creditCVVInput.style.border = 'initial';
    if (paymentSelectOptions[0].selected) {
      e.preventDefault();
      noPaymentSpan.textContent = 'You must select a payment option';
      noPaymentDiv.className = 'failTest';
    } else if (checkedBoxes.length > 0 && nameValidTest && emailValidTest) {
    } else {
      e.preventDefault();
    }
  }
});

// This Event Listener repositions credit card error divs when the screen is resized.
window.addEventListener('resize', () => {
  checkPosition();
});
