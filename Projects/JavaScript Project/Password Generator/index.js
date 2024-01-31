// fetching all the html elements in js file
const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~!@#$%^&*()_+=-{}[]:;"<>,.?/';

// setting initial values
let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider();
setIndicator("#ccc");

// for setting password length
function handleSlider() {
  inputSlider.value = passwordLength;
  lengthDisplay.innerText = passwordLength;
  // finding width and height for slider
  const min = inputSlider.min;
  const max = inputSlider.max;
  inputSlider.style.backgroundSize =
    ((passwordLength - min) * 100) / (max - min) + "% 100%";
}

// for changing the indicator div color
function setIndicator(color) {
  indicator.style.backgroundColor = color;
  indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}

// for getting random intergers
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// for generating random number
function generateRandomNumber(params) {
  return getRndInteger(0, 9);
}
// for generating lowercase characters
function generateLowerCase() {
  return String.fromCharCode(getRndInteger(97, 123));
}
// for generating uppercase characters
function generateUpperCase() {
  return String.fromCharCode(getRndInteger(65, 91));
}
// for generating symbols
function generateSymbol() {
  const randNum = getRndInteger(0, symbols.length);
  return symbols.charAt(randNum);
}

// for calculating strength of password
function calcStrength() {
  let hasUpper = false;
  let hasLower = false;
  let hasNum = false;
  let hasSym = false;
  if (uppercaseCheck.checked) {
    hasUpper = true;
  }
  if (lowercaseCheck.checked) {
    hasLower = true;
  }
  if (numbersCheck.checked) {
    hasNum = true;
  }
  if (symbolsCheck.checked) {
    hasSym = true;
  }

  if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
    setIndicator("#0f0");
  } else if (
    (hasLower || hasUpper) &&
    (hasNum || hasSym) &&
    passwordLength >= 6
  ) {
    setIndicator("#ff0");
  } else {
    setIndicator("#f00");
  }
}

// for copying password to clipboard and displaying copied text when successful
async function copyContent() {
  try {
    await navigator.clipboard.writeText(passwordDisplay.value);
    copyMsg.innerText = "copied";
  } catch (e) {
    copyMsg.innerText = "Failed";
  }
  //to make copy span visible
  copyMsg.classList.add("active");

  setTimeout(() => {
    copyMsg.classList.remove("active");
  }, 2000);
}

// for shuffling password
function shufflePassword(array) {
  //Fisher Yates Algorithm
  for (let i = array.length - 1; i > 0; i--) {
    //random J, find out using random function
    const j = Math.floor(Math.random() * (i + 1));
    //swap number at i index and j index
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  let str = "";
  array.forEach((el) => (str += el));
  return str;
}

// for checkboxes
function handleCheckBoxChange() {
  checkCount = 0;
  allCheckBox.forEach((checkbox) => {
    if (checkbox.checked) checkCount++;
  });

  //special condition
  if (passwordLength < checkCount) {
    passwordLength = checkCount;
    handleSlider();
  }
}

allCheckBox.forEach((checkbox) => {
  checkbox.addEventListener("change", handleCheckBoxChange);
});

// for slider
inputSlider.addEventListener("input", (e) => {
  passwordLength = e.target.value;
  handleSlider();
});

// for copy button -> copying is only possible when there is password available/generated
copyBtn.addEventListener("click", () => {
  if (passwordDisplay.value) copyContent();
});

// for generate button
generateBtn.addEventListener("click", () => {
  // when none of the checkbox are selected
  if (checkCount == 0) {
    return;
  }

  // special case
  if (passwordLength < checkCount) {
    passwordLength = checkCount;
    handleSlider();
  }

  //remove old password generated
  password = "";

  // for the checkboxes checked
  //   if (uppercaseCheck.checked) {
  //     password += generateUpperCase();
  //   }

  //   if (lowercaseCheck.checked) {
  //     password += generateLowerCase();
  //   }

  //   if (numbersCheck.checked) {
  //     password += generateRandomNumber();
  //   }

  //   if (symbolsCheck.checked) {
  //     password += generateSymbol();
  //   }

  let funcArr = [];

  // if the checkboxes are checked they will be inserted into funcArr
  if (uppercaseCheck.checked) funcArr.push(generateUpperCase);

  if (lowercaseCheck.checked) funcArr.push(generateLowerCase);

  if (numbersCheck.checked) funcArr.push(generateRandomNumber);

  if (symbolsCheck.checked) funcArr.push(generateSymbol);

  //compulsory addition for checked boxes
  for (let i = 0; i < funcArr.length; i++) {
    password += funcArr[i]();
  }

  //remaining adddition, i.e. the complete length of password we set
  for (let i = 0; i < passwordLength - funcArr.length; i++) {
    let randIndex = getRndInteger(0, funcArr.length);
    password += funcArr[randIndex]();
  }

  //shuffle the password
  password = shufflePassword(Array.from(password));
  //show in UI
  passwordDisplay.value = password;
  //calculate strength
  calcStrength();
});
