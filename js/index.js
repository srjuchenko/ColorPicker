"use strict";

const hexCodeEl = document.querySelector(".hex-code");
const colorPickerBtnEL = document.querySelector(".box-btn-picker");
const headerEl = document.querySelector("header");
let hexCode = hexCodeEl.textContent;

const genarateRandomHex = function () {
  let hex = "#";
  const lettersAndNumbers = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
  ];

  for (let i = 0; i < 6; i++) {
    hex +=
      lettersAndNumbers[Math.floor(Math.random() * lettersAndNumbers.length)];
  }

  return hex;
};

colorPickerBtnEL.addEventListener("click", (e) => {
  e.preventDefault();

  const hex = genarateRandomHex();

  document.body.style.backgroundColor = hex;
  hexCodeEl.textContent = hex;
  hexCodeEl.style.color = hex;
  headerEl.style.color = hex;
});
