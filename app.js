"use strict";
const gridContainer = document.querySelector(".grid-container");
const range = document.getElementById("range");
const label = document.getElementById("label");
gridContainer.style.gridTemplateColumns = "repeat(2, 1fr)";

for (let i = 0; i < 20; i++) {
  const div = document.createElement("div");
  div.textContent = "123";
  gridContainer.insertAdjacentElement("afterbegin", div);
}

range.addEventListener("click", function () {
  const value = range.value;
  label.textContent = `${range.value}`;
});
