"use strict";

//first we need to set the value to number of columns
//make grid perfect square
window.addEventListener("load", function () {
  populateGrid(1);
});
const gridContainer = document.querySelector(".grid-container");
const range = document.getElementById("range");
const label = document.getElementById("label");
const body = document.querySelector("body");
const RGB = document.querySelector(".RGB");
let mouseDown = false;
let clickRGB = false;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function populateGrid(gridSize) {
  gridContainer.textContent = "";
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  for (let i = 0; i < gridSize * gridSize; i++) {
    const div = document.createElement("div");
    div.textContent = "";
    div.classList.add("grid-item");
    gridContainer.insertAdjacentElement("afterbegin", div);
  }
}

function changeColor(e) {
  if (clickRGB) {
    console.log(123)
    e.target.style.backgroundColor = `rgb(${getRandomInt(
      0,
      255
    )}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
  } else e.target.style.backgroundColor = "black";
}

range.addEventListener("input", function () {
  label.textContent = `${range.value}X${range.value}`;
});

range.addEventListener("mouseup", function () {
  populateGrid(range.value);
});

gridContainer.addEventListener("mousemove", function (e) {
  if (!e.target.classList.contains("grid-item")) return;
  if (mouseDown) changeColor(e);
});

gridContainer.addEventListener("mousedown", function () {
  mouseDown = true;
});

body.addEventListener("mouseup", function () {
  mouseDown = false;
});

RGB.addEventListener("click", function () {
  clickRGB = !clickRGB;
});
