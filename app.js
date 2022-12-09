"use strict";

//first we need to set the value to number of columns
//make grid perfect square

const gridContainer = document.querySelector(".grid-container");
const range = document.getElementById("range");
const label = document.getElementById("label");

function populateGrid(gridSize) {
  const columns = gridSize / 2;
  gridContainer.textContent = "";
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  for (let i = 0; i < gridSize * gridSize; i++) {
    const div = document.createElement("span");
    div.textContent = "";
    div.classList.add("grid-item");
    gridContainer.insertAdjacentElement("afterbegin", div);
  }
}

function changeColor(e) {
  e.target.style.backgroundColor = "black";
}

range.addEventListener("input", function () {
  label.textContent = `${range.value}`;
});
range.addEventListener("click", function () {
  populateGrid(range.value);
});

gridContainer.addEventListener("mousedown", function (e) {
  if (!e.target.classList.contains("grid-item")) return;
  changeColor(e);
});
