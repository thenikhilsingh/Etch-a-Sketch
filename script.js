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


function getRandomColor() {
  let val1 = Math.ceil(0 + Math.random() * 255);//Math.ceil() is used to round off numbers
  let val2 = Math.ceil(0 + Math.random() * 255);//Math.random() is used to generate random numbers
  let val3 = Math.ceil(0 + Math.random() * 255);
  return `rgb(${val1},${val2},${val3})`;
}




