const container = document.querySelector("#container");

for (let index = 0; index < 256; index++) {
  const newDiv = document.createElement("div");
  newDiv.className = "squareGrid";
  newDiv.addEventListener("mouseover", function () {
    const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    newDiv.style.backgroundColor = randomColor;
  });
  container.appendChild(newDiv);
}
const button = document.querySelector("button");
button.addEventListener("click", function () {
  const squares = prompt("Enter the squares you want per side: ");
  if (squares > 100 || squares < 1) {
    alert("Invalid input");
    return;
  } else {
    container.innerHTML = "";
    for (let index = 0; index < squares * squares; index++) {
      const newDiv = document.createElement("div");
      newDiv.className = "squareGrid";
      newDiv.addEventListener("mouseover", function () {
        const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        newDiv.style.backgroundColor = randomColor;
      });
      newDiv.style.width = 400 / squares + "px";
      newDiv.style.height = 400 / squares + "px";
      container.appendChild(newDiv);
    }
  }
});

const clearButton = document.querySelector("#clearGrid");
clearButton.addEventListener("click", function () {
  const squares = document.querySelectorAll(".squareGrid");
  squares.forEach(square => {
    square.style.backgroundColor = "#0B1D2A";
  });
});
