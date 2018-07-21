// On page load, cursor appears in the name field.
const nameTextField = document.getElementById('name');
nameTextField.focus();
const nameDiv = document.createElement('div');
const nameSpan = document.createElement('span');
nameDiv.append(nameSpan);

// Job Role text field appears when users select other from the list.
const jobRoleTextField = document.getElementById('jobRole');
jobRoleTextField.style.display = "none";
const jobRoleSelectField = document.getElementById('title');
jobRoleSelectField.addEventListener('change', (e) => {
  if (e.target.value === 'other') {
    jobRoleTextField.style.display = "";
  } else {
    jobRoleTextField.style.display = "none";
    jobRoleTextField.value = "";
  }
});
// Until a theme is selected, the color field for T-shirts will read "Please select a theme."
// When the T-shirt theme is selected, the color field will limit options to only those avaiable to that theme.
// Extra Credit: The color field will only appear when a theme is selected.
const colorSelectField = document.getElementById('color');
const colorLabel = colorSelectField.previousElementSibling;
const colorSelectOptions = colorSelectField.children;
const designSelectField = document.getElementById('design');
colorSelectField.style.display = "none";
colorLabel.style.display = "none";
designSelectField.addEventListener('change', (e) => {
  colorSelectOptions[6].selected = true;
  colorSelectField.style.display = "";
  colorLabel.style.display = "";
  if (e.target.value === 'js puns') {
    for (let i = 0; i < colorSelectOptions.length; i += 1) {
      colorSelectOptions[i].style.display = "";
      const optionText = colorSelectOptions[i].textContent;
      const searchString = optionText.search('JS shirt only');
      if (searchString > -1) {
        colorSelectOptions[i].style.display = "none";
      }
    }
  } else if (e.target.value === 'heart js') {
    for (let i = 0; i < colorSelectOptions.length; i += 1) {
      colorSelectOptions[i].style.display = "";
      const optionText = colorSelectOptions[i].textContent;
      const searchString = optionText.search('JS Puns shirt');
      if (searchString > -1) {
        colorSelectOptions[i].style.display = "none";
      }
    }
  } else {
    colorSelectField.style.display = "none";
    colorLabel.style.display = "none";
  }
});

// Users cannot select activities that are held at the same time.
// There should be a running total that updates at the bottom of the activities section.
const activitiesFieldset = document.querySelector('.activities');
const paymentfieldset = activitiesFieldset.nextElementSibling;
const newDiv = document.createElement('div');
const pageForm = document.querySelector('form');
const newSpan = document.createElement('span');
let activitiesTotal = 0;
newSpan.textContent = `Total \$${activitiesTotal}`;
newDiv.appendChild(newSpan);
pageForm.insertBefore(newDiv, paymentfieldset);
activitiesFieldset.addEventListener('change', (e) => {
  if (e.target.name === 'js-frameworks') {
    const label = e.target.parentNode.nextElementSibling.nextElementSibling;
    const input = label.querySelector('input');
    if (e.target.checked) {
      input.disabled = true;
      label.style.color = 'grey';
      activitiesTotal += 100;
      newSpan.textContent = `Total \$${activitiesTotal}`;
    } else {
      input.disabled = false;
      label.style.color = 'initial';
      activitiesTotal -= 100;
      newSpan.textContent = `Total \$${activitiesTotal}`;
    }
  } else if (e.target.name === 'express') {
    const label = e.target.parentNode.previousElementSibling.previousElementSibling;
    const input = label.querySelector('input');
    if (e.target.checked) {
      input.disabled = true;
      label.style.color = 'grey';
      activitiesTotal += 100;
      newSpan.textContent = `Total \$${activitiesTotal}`;
    } else {
      input.disabled = false;
      label.style.color = 'initial';
      activitiesTotal -= 100;
      newSpan.textContent = `Total \$${activitiesTotal}`;
    }
  } else if (e.target.name === 'js-libs') {
    const label = e.target.parentNode.nextElementSibling.nextElementSibling;
    const input = label.querySelector('input');
    if (e.target.checked) {
      input.disabled = true;
      label.style.color = 'grey';
      activitiesTotal += 100;
      newSpan.textContent = `Total \$${activitiesTotal}`;
    } else {
      input.disabled = false;
      label.style.color = 'initial';
      activitiesTotal -= 100;
      newSpan.textContent = `Total \$${activitiesTotal}`;
    }
  } else if (e.target.name === 'node') {
    const label = e.target.parentNode.previousElementSibling.previousElementSibling;
    const input = label.querySelector('input');
    if (e.target.checked) {
      input.disabled = true;
      label.style.color = 'grey';
      activitiesTotal += 100;
      newSpan.textContent = `Total \$${activitiesTotal}`;
    } else {
      input.disabled = false;
      label.style.color = 'initial';
      activitiesTotal -= 100;
      newSpan.textContent = `Total \$${activitiesTotal}`;
    }
  } else if (e.target.name === 'all') {
    if (e.target.checked) {
      activitiesTotal += 200;
      newSpan.textContent = `Total \$${activitiesTotal}`;
    } else {
      activitiesTotal -= 200;
      newSpan.textContent = `Total \$${activitiesTotal}`;
    }
  } else {
    if (e.target.checked) {
      activitiesTotal += 100;
      newSpan.textContent = `Total \$${activitiesTotal}`;
    } else {
      activitiesTotal -= 100;
      newSpan.textContent = `Total \$${activitiesTotal}`;
    }
  }
});

// Credit Card payment option is selected by default.
// The selected payment option should match what is displayed on screen.
// When users switch among payment options, the chosen one displays and the others are hidden.
const paymentSelect = document.getElementById('payment');
const paymentSelectOptions = paymentSelect.children;
paymentSelectOptions[1].selected = true;
const creditCardDiv = document.getElementById('credit-card');
const payPalDiv = creditCardDiv.nextElementSibling;
const bitCoinDiv = payPalDiv.nextElementSibling;
payPalDiv.style.display = "none";
bitCoinDiv.style.display = "none";
paymentSelect.addEventListener('change', (e) => {
  noPaymentSpan.textContent = '';
  noPaymentDiv.className = '';
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

// There should be form validation which interupts the page from refreshing unless met.
// 1. Name field cannot be blank.
// 2. Email field should contain a properly formatted email address.
// 3. At least one checkbox under activities should be selected.
// 4. If the credit card payment option is selected, the card number should be 13-16 digits, zip 5 digits, & CVV 3 digits.
const nameTest = /[A-Za-z]/;
const creditZipInput = document.getElementById('zip');
const zipTest = /^\d{5}$/;
const creditCVVInput = document.getElementById('cvv');
const cvvTest = /^\d{3}$/;




// On submission, the form provides and error indication or message for each field that requires validation.
// Extra Credit: The form should provide at least one error message in real time.
// Extra Credit: The form should provide at least one error message that changes based on the type of error. ie. empty or incorrect.
const emailInput = document.getElementById('mail');
const emailTest = /^[\w.]+@[\w.]+\.[com|net|org|edu]{3}$/;
const emailValid = document.createElement('div');
const emailValidSpan = document.createElement('span');
emailValid.append(emailValidSpan);
const titleLabel = emailInput.nextElementSibling;
const fieldset1 = pageForm.querySelectorAll('fieldset')[0];
fieldset1.insertBefore(emailValid, titleLabel);
emailInput.addEventListener('keyup', (e) => {
  emailInput.style.border = 'initial';
  const textValid = emailTest.test(emailInput.value);
  if (e.target.value === "") {
    emailValidSpan.textContent = "";
    emailValid.className = '';
  } else {
    if (textValid) {
      emailValidSpan.textContent = "Valid Email Address";
      emailValid.className = 'passTest';
    } else {
      emailValidSpan.textContent = "Invalid Email Address";
      emailValid.className = "failTest";
    }
  }
});
const creditCardInput = document.getElementById('cc-num');
const creditCardTest = /^\d{13,16}$/;
const creditCardDigitTest = /[\D]/;
const paymentDiv = document.createElement('div');
paymentDiv.className = "col-6";
paymentDiv.style.display = 'inline-block';
const paymentSpan = document.createElement('span');
const zipDiv = document.createElement('div');
zipDiv.className = "col-3 space";
zipDiv.style.display = 'inline-block';
const zipSpan = document.createElement('span');
const cvvDiv = document.createElement('div');
cvvDiv.className = "col-3 space";
cvvDiv.style.display = 'inline-block';
const cvvSpan = document.createElement('span');
const noPaymentDiv = document.createElement('div');
const noPaymentSpan = document.createElement('span');
paymentDiv.append(paymentSpan);
zipDiv.append(zipSpan);
cvvDiv.append(cvvSpan);
noPaymentDiv.append(noPaymentSpan);
const cardNumDiv = document.querySelector('.col-6');
const creditDiv = document.getElementById('credit-card');
const beforeLabel = cardNumDiv.nextElementSibling.nextElementSibling.nextElementSibling;
creditDiv.insertBefore(paymentDiv, beforeLabel);
creditDiv.insertBefore(zipDiv, beforeLabel);
creditDiv.insertBefore(cvvDiv, beforeLabel);
const paymentFieldset = activitiesFieldset.nextElementSibling.nextElementSibling;
paymentFieldset.append(noPaymentDiv);
creditCardInput.addEventListener('keyup', (e) => {
  creditCardInput.style.border = 'initial';
  const digitTest = creditCardDigitTest.test(creditCardInput.value);
  const numTest = creditCardTest.test(creditCardInput.value);
  if (creditCardInput.value === '') {
    paymentSpan.textContent = "";
    paymentDiv.className = 'col-6';
  } else {
    if (digitTest) {
      paymentSpan.textContent = "Please enter only numberic digits";
      paymentDiv.className = 'failTest col-6';
    } else if (numTest) {
      paymentSpan.textContent = "Valid Credit Card Number";
      paymentDiv.className = 'passTest col-6';
    } else {
      paymentSpan.textContent = "Invalid Credit Card Number";
      paymentDiv.className = 'failTest col-6';
    }
  }
});

const emailLabel = emailInput.previousElementSibling;
fieldset1.insertBefore(nameDiv, emailLabel);
const activitiesCheckbox1 = activitiesFieldset.querySelectorAll('label')[0];
const activitiesValidDiv = document.createElement('div');
const activitiesValidSpan = document.createElement('span');
activitiesValidDiv.append(activitiesValidSpan);
activitiesFieldset.insertBefore(activitiesValidDiv, activitiesCheckbox1);

creditZipInput.addEventListener('keyup', (e) => {
  creditZipInput.style.border = 'initial';
  zipSpan.textContent = '';
  zipDiv.className = "col-3 space";
});
creditCVVInput.addEventListener('keyup', (e) => {
  creditCVVInput.style.border = 'initial';
  cvvSpan.textContent = '';
  cvvDiv.className = "col-3 space";
});
nameTextField.addEventListener('keyup', (e) => {
  nameTextField.style.border = 'initial';
  nameSpan.textContent = '';
  nameDiv.className = '';
});
activitiesFieldset.addEventListener('change', (e) => {
  activitiesValidSpan.textContent = '';
  activitiesValidDiv.className = '';
});


pageForm.addEventListener('submit', (e) => {
  noPaymentSpan.textContent = '';
  noPaymentDiv.className = '';
  activitiesValidSpan.textContent = '';
  activitiesValidDiv.className = '';
  nameSpan.textContent = '';
  nameDiv.className = '';
  emailValidSpan.textContent = '';
  emailValid.className = '';
  paymentSpan.textContent = '';
  paymentDiv.className = "col-6";
  zipSpan.textContent = '';
  zipDiv.className = "col-3 space";
  cvvSpan.textContent = '';
  cvvDiv.className = "col-3 space";
  nameTextField.style.border = 'initial';
  emailInput.style.border = 'initial';
  creditCardInput.style.border = 'initial';
  creditZipInput.style.border = 'initial';
  creditCVVInput.style.border = 'initial';
  const checkedBoxes = document.querySelectorAll('input:checked');
  const nameValidTest = nameTest.test(nameTextField.value);
  const emailValidTest = emailTest.test(emailInput.value);
  const creditCardValidTest = creditCardTest.test(creditCardInput.value);
  const creditZipTest = zipTest.test(creditZipInput.value);
  const creditCVVValidTest = cvvTest.test(creditCVVInput.value);
  if (paymentSelectOptions[1].selected) {
    if (checkedBoxes.length > 0 && nameValidTest && emailValidTest && creditCardValidTest && creditZipTest && creditCVVValidTest) {
    } else {
      e.preventDefault();
      if (checkedBoxes.length === 0) {
        activitiesValidSpan.textContent = 'You must select at least one activity';
        activitiesValidDiv.className = 'failTest';
      }
      if (!nameValidTest) {
        nameSpan.textContent = 'You must enter a name';
        nameDiv.className = 'failTest';
        nameTextField.style.border = '2px solid red';
      }
      if (!emailValidTest) {
        emailValidSpan.textContent = 'Invalid email address';
        emailValid.className = 'failTest';
        emailInput.style.border = '2px solid red';
      }
      if (!creditCardValidTest) {
        paymentSpan.textContent = 'Invalid Credit Card Number';
        paymentDiv.classList.add('failTest');
        creditCardInput.style.border = '2px solid red';
      }
      if (!creditZipTest) {
        zipSpan.textContent = 'Invalid zip code';
        zipDiv.classList.add('failTest');
        creditZipInput.style.border = '2px solid red';
      }
      if (!creditCVVValidTest) {
        cvvSpan.textContent = 'Invalid cvv';
        cvvDiv.classList.add('failTest');
        creditCVVInput.style.border = '2px solid red';
      }
    }
  } else {
    if (paymentSelectOptions[0].selected) {
      e.preventDefault();
      if (checkedBoxes.length === 0) {
        activitiesValidSpan.textContent = 'You must select at least one activity';
        activitiesValidDiv.className = 'failTest';
      }
      if (!nameValidTest) {
        nameSpan.textContent = 'You must enter a name';
        nameDiv.className = 'failTest';
        nameTextField.style.border = '2px solid red';
      }
      if (!emailValidTest) {
        emailValidSpan.textContent = 'Invalid email address';
        emailValid.className = 'failTest';
        emailInput.style.border = '2px solid red';
      }
      noPaymentSpan.textContent = 'You must select a payment option';
      noPaymentDiv.classList.add('failTest');
    } else {
      if (checkedBoxes.length > 0 && nameValidTest && emailValidTest) {
      } else {
        e.preventDefault();
        if (checkedBoxes.length === 0) {
          activitiesValidSpan.textContent = 'You must select at least one activity';
          activitiesValidDiv.className = 'failTest';
        }
        if (!nameValidTest) {
          nameSpan.textContent = 'You must enter a name';
          nameDiv.className = 'failTest';
          nameTextField.style.border = '2px solid red';
        }
        if (!emailValidTest) {
          emailValidSpan.textContent = 'Invalid email address';
          emailValid.className = 'failTest';
          emailInput.style.border = '2px solid red';
        }
      }
    }
  }
});
// When javascript is disabled, all form fields and payment methods should be displayed.
