// declarations
const toggle = document.querySelectorAll(".toggle");
const slide = document.querySelectorAll(".slide");
const btnSort = document.querySelectorAll(".btnSort");
const list = document.querySelectorAll(".list");
const floor = document.querySelectorAll(".floor");
const table = document.querySelectorAll(".table");
const tps = document.querySelectorAll(".tps");
const select = document.querySelector(".select");
const send = document.querySelector(".send");
const cancel = document.querySelectorAll(".cancel");
const deleteBtn = document.querySelector(".delete");
const subTot = document.querySelector(".sub-tot");
const tipsAdded = document.querySelector(".tips-added");
const serCha = document.querySelector(".ser-cha");
const totalItemPrice = document.querySelector(".total-item-price");
const logo = document.querySelector(".logo");

let count = 0;
let itemPicked, serChaAmt;
let tipsAmt = 5;

//functions
const sumItemPrice = () => {
  const totPrice = [...document.querySelectorAll(".tot-pri")];
  itemPicked = totPrice
    .map((n) => +n.textContent)
    .reduce((acc, cur) => acc + cur);
  subTot.textContent = itemPicked;

  serChaAmt = serCha.textContent = itemPicked / 10;

  totalItemPrice.textContent = tipsAmt + serChaAmt + itemPicked;
};
sumItemPrice();

const toggleFxn = () => {
  toggle.forEach((t) => t.classList.remove("active"));
  slide.forEach((t) => t.classList.remove("show"));
  toggle[count].classList.add("active");
  slide[count].classList.add("show");
};

// events
/* toggle.forEach((tog, i) => {
  tog.addEventListener("click", () => {
    toggle.forEach((t) => t.classList.remove("active"));
    tog.classList.add("active");
    count = i;

    toggleFxn();
  });
}); */

select.addEventListener("click", () => {
  count++;
  toggleFxn();
});

send.addEventListener("click", () => {
  count++;
  toggleFxn();
});

cancel.forEach((can) => {
  can.addEventListener("click", () => {
    count--;
    toggleFxn();
  });
});

list.forEach((listI) => {
  listI.addEventListener("click", (e) => {
    const targ = e.target;
    if (targ.classList.contains("delete")) listI.remove();
    sumItemPrice();
    subTot.textContent = itemPicked;
  });
});

floor.forEach((t) => {
  t.addEventListener("click", () => {
    floor.forEach((f) => f.classList.remove("active"));
    t.classList.add("active");
  });
});

table.forEach((t) => {
  t.addEventListener("click", () => {
    table.forEach((f) => f.classList.remove("active"));
    t.classList.add("active");
  });
});

btnSort.forEach((t) => {
  t.addEventListener("click", () => {
    btnSort.forEach((f) => f.classList.remove("active"));
    t.classList.add("active");
  });
});

tps.forEach((t) => {
  t.addEventListener("click", () => {
    tps.forEach((f) => f.classList.remove("active"));
    t.classList.add("active");
    tipsAmt = +t.textContent;
    tipsAdded.textContent = t.textContent;
    totalItemPrice.textContent = tipsAmt + serChaAmt + itemPicked;
  });
});

logo.addEventListener("click", () => {
  count = 0;
  toggleFxn();
});
