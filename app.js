let value = document.querySelector("#value");
let decrease = document.querySelector(".decrease");
let reset = document.querySelector(".reset");
let increase = document.querySelector(".increase");

let count = 0;
value.textContent = count;

decrease.addEventListener("click", () => {
  count--;
  value.textContent = count;

  if (count < 0) {
    value.classList.remove("positive-value");
    value.classList.add("negative-value");
  } else {
    value.classList.remove("negative-value");
  }
});

reset.addEventListener("click", () => {
  count = 0;
  value.textContent = count;

  value.classList.remove("negative-value");
  value.classList.remove("positive-value");
});

increase.addEventListener("click", () => {
  count++;
  value.textContent = count;

  if (count > 0) {
    value.classList.remove("negative-value");
    value.classList.add("positive-value");
  } else {
    value.classList.remove("positive-value");
  }
});
