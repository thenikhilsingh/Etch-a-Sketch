let sketchContainer = document.querySelector(".sketchContainer");

function grid() {
  let boxes;
  for (let i = 0; i < 256; i++) {
    boxes = document.createElement("div");
    sketchContainer.append(boxes);
    boxes.className = "box";
  }
}
grid();


