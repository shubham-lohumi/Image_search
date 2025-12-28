let num = document.getElementById("number");
let dots = document.getElementById("dots");
let text=document.querySelector("#loading h1");

let cnt = 0;
let percentageInterval = setInterval(() => {
  if (cnt === 100) {
    clearInterval(percentageInterval);
    clearInterval(dotInterval);
    dots.textContent = "";
    text.textContent="wow you are genius";
    
  } else {
    cnt += 1;
    num.innerHTML = cnt + "%";
  }
}, 14);

let count = 0;
let dotInterval = setInterval(() => {
  count = (count + 1) % 4;
  dots.textContent = ".".repeat(count);
}, 500);
