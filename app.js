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
  for (let i = 0; i < gridSize; i++) {
    const div = document.createElement("div");
    div.textContent = '123'
    div.classList.add("grid-item");
    gridContainer.insertAdjacentElement("afterbegin", div);
  }
}

range.addEventListener("click", function () {
  const value = range.value;
  label.textContent = `${range.value}`;
  populateGrid(value);
});
