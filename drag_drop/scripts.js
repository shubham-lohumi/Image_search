const box = document.getElementById("drag");
const item = document.getElementById("item");

let offsetX, offsetY;
let current = null; // which element is dragging
let isdragingChild = false;

box.addEventListener("mousedown", (e) => {
  e.stopPropagation();
  current = box;
  offsetX = e.clientX - box.offsetLeft;
  offsetY = e.clientY - box.offsetTop;
});

item.addEventListener("mousedown", (e) => {
  e.stopPropagation();
  current = item;
  offsetX = e.clientX - item.offsetLeft;
  offsetY = e.clientY - item.offsetTop;
});

document.addEventListener("mousemove", (e) => {
  if (!current) return;

  current.style.position = "absolute";
  current.style.left = e.clientX - offsetX + "px";
  current.style.top = e.clientY - offsetY + "px";
});

document.addEventListener("mouseup", () => {
  current = null;
});
