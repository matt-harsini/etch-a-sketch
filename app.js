"use strict";
const gridContainer = document.querySelector(".grid-container");
gridContainer.style.gridTemplateColumns = "repeat(2, 1fr)";

for (let i = 0; i < 20; i++) {
  const div = document.createElement("div");
  div.textContent = "123";
  gridContainer.insertAdjacentElement("afterbegin", div);
}
