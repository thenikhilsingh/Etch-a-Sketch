let sketchContainer = document.querySelector(".sketchContainer");

let valueInput = 16;

function grid() {
  for (let i = 0; i < valueInput; i++) {
    let row = document.createElement("div");
    row.className = "row";
    for (let j = 0; j < valueInput; j++) {
      let boxes = document.createElement("div");
      boxes.addEventListener("mouseover", () => {
        boxes.style.cssText = "background:gray;";
      });
      row.append(boxes);
      boxes.className = "box";
    }
    sketchContainer.append(row);
  }
}
grid();

function getRandomColor() {
  let val1 = Math.ceil(0 + Math.random() * 255);
  let val2 = Math.ceil(0 + Math.random() * 255);
  let val3 = Math.ceil(0 + Math.random() * 255);
  return `rgb(${val1},${val2},${val3})`;
}

let coloredBtn = document.querySelector(".colored");
coloredBtn.addEventListener("click", () => {
  document.querySelectorAll(".box").forEach((e) => {
    e.addEventListener("mouseover", () => {
      e.style.background = getRandomColor();
    });
  });
});

let ValueBtn = document.querySelector(".value");
ValueBtn.addEventListener("click", () => {
  let nodeList = document.querySelectorAll(".row");
  for (let k = 0; k < valueInput; k++) {
    nodeList[k].remove();
  }
  valueInput = prompt();
  grid();
});

let eraserBtn = document.querySelector(".eraser");
eraserBtn.addEventListener("click", () => {
  document.querySelectorAll(".box").forEach((e) => {
    e.addEventListener("mouseover", () => {
      e.style.background = "none";
    });
  });
});
