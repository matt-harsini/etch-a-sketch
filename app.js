"use strict";

//first we need to set the value to number of columns
//make grid perfect square
window.addEventListener("load", function () {
  populateGrid(1);
});
const gridContainer = document.querySelector(".grid-container");
const range = document.getElementById("range");
const label = document.getElementById("label");

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
  e.target.style.backgroundColor = "black";
}

range.addEventListener("input", function () {
  label.textContent = `${range.value}X${range.value}`;
});

range.addEventListener("mouseup", function () {
  populateGrid(range.value);
});

gridContainer.addEventListener("mousedown", function (e) {
  if (!e.target.classList.contains("grid-item")) return;

  changeColor(e);
});
