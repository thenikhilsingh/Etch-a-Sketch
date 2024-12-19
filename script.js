let sketchContainer = document.querySelector(".sketchContainer");

function grid() {
  for (let i = 0; i < 256; i++) {
    let boxes = document.createElement("div");
    boxes.addEventListener("mouseover", () => {
      boxes.style.cssText = "background:gray;";
    });
    sketchContainer.append(boxes);
    boxes.className = "box";
  }
}
grid();

function getRandomColor() {
  let val1 = Math.ceil(0 + Math.random() * 255);
  let val2 = Math.ceil(0 + Math.random() * 255);
  let val3 = Math.ceil(0 + Math.random() * 255);
  return `rgb(${val1},${val2},${val3})`;
}
