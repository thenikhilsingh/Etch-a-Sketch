let sketchContainer = document.querySelector(".sketchContainer");

let valueInput = 16;

function grid() {
  for (let i = 0; i < valueInput; i++) {
    let row = document.createElement("div");
    row.className = "row";
    for (let j = 0; j < valueInput; j++) {
      let boxes = document.createElement("div");
      boxes.addEventListener("mouseover", () => {
        boxes.style.cssText = "background:rgb(131, 129, 129);";
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

let colorflag = false;
let coloredBtn = document.querySelector(".colored");
coloredBtn.addEventListener("click", () => {
  if (colorflag == false) {
    colorflag = true;
    coloredBtn.style.cssText = " background-color: rgb(156, 156, 156);";
    document.querySelectorAll(".box").forEach((e) => {
      e.addEventListener("mouseover", () => {
        e.style.background = getRandomColor();
      });
    });
  } else {
    colorflag = false;
    coloredBtn.style.cssText = " background-color: rgb(69, 243, 243);";
    document.querySelectorAll(".box").forEach((e) => {
      e.addEventListener("mouseover", () => {
        e.style.background = "rgb(131, 129, 129)";
      });
    });
  }
});

let ValueBtn = document.querySelector(".value");
ValueBtn.addEventListener("click", () => {
  let nodeList = document.querySelectorAll(".row");
  for (let k = 0; k < valueInput; k++) {
    nodeList[k].remove();
  }
  let temp=valueInput
  valueInput = prompt("enter value between 1 to 100");
  if (valueInput >= 1 && valueInput <= 100) {
    grid();
  } else {
    valueInput=temp;
    grid()
    alert("You entered an invalid input. Please try again!!!");
  }
});

let eraserflag = false;
let eraserBtn = document.querySelector(".eraser");
eraserBtn.addEventListener("click", () => {
  coloredBtn.style.cssText = " background-color: rgb(69, 243, 243);";
  if (eraserflag == false) {
    eraserflag = true;
    eraserBtn.style.cssText = " background-color: rgb(156, 156, 156);";
    document.querySelectorAll(".box").forEach((e) => {
      e.addEventListener("mouseover", () => {
        e.style.background = "none";
      });
    });
  } else {
    eraserflag = false;
    eraserBtn.style.cssText = " background-color: rgb(69, 243, 243);";
    document.querySelectorAll(".box").forEach((e) => {
      e.addEventListener("mouseover", () => {
        e.style.background = "rgb(131, 129, 129)";
      });
    });
  }
});

let clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
  document.querySelectorAll(".box").forEach((e) => {
    e.style.background = "none";
  });
});
