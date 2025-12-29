const password = document.getElementById("password");
const btn = document.querySelector(".btn");
const input_box = document.querySelector("input");
const icon = document.getElementById("icon");
const text = document.querySelector(".text");
const bar = document.getElementById("strength-bar");


password.addEventListener("input", (e) => {
  let val = password.value;
  let strength = 0;
  if (val.length >= 8) strength++;
  if (/[A-Z]/.test(val)) strength++;
  if (/[a-z]/.test(val)) strength++;
  if (/[0-9]/.test(val)) strength++;
  if (/[^a-zA-Z0-9]/.test(val)) strength++;

  if (val.length === 0) {
    bar.style.width = "0%";
    text.innerHTML = "";
    test.style.color = "";
    btn.style.color = "";
    input_box.style.border = "";
    icon.style.color = "";
    btn.style.border = "";
    return;
  }
  if (strength <= 2) {
    bar.style.width = "30%";
    bar.style.background = "red";
    text.innerHTML = "Weak";
    text.style.color = "red";
    btn.style.color = "red";
    input_box.style.border = "2px solid red ";
    icon.style.color = "red";
    btn.style.border = "2px solid red ";
  } else if (strength <= 4) {
    bar.style.width = "60%";
    bar.style.background = "orange";
    text.innerHTML = "Medium";
    text.style.color = "orange";
    btn.style.color = "orange";
    input_box.style.border = "2px solid orange ";
    icon.style.color = "orange";
    btn.style.border = "2px solid orange ";
  } else {
    bar.style.width = "100%";
    bar.style.background = "green";
    text.innerHTML = "Strong";
    text.style.color = "green";
    btn.style.color = "green";
    input_box.style.border = "2px solid green";
    icon.style.color = "green";
    btn.style.border = "2px solid green";
  }
});
