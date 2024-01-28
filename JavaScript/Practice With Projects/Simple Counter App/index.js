let count = document.querySelector("#counter");

const handleClickPlus = () => {
  // getting/fetching the div text as string and converting it into integer value
  let value = parseInt(count.innerText);
  // updating the value
  value = value + 1;
  // setting the div text to the updated value
  count.innerText = value;
};

const handleClickMinus = () => {
  let value = parseInt(count.innerText);
  if (value > 0) {
    value = value - 1;
    count.innerText = value;
  }
};
