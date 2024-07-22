const form = document.querySelector("form");
const amt = document.getElementById("amt");
const dis = document.getElementById("dis");
const tip = document.getElementById("tip");
const cus = document.getElementById("cus");
const disPer = document.getElementById("disPer");
const tipPer = document.getElementById("tipPer");
const cusCnt = document.getElementById("cusCnt");
const generateButton = document.querySelector("button");
const tipRes = document.getElementById("tipRes");
const amtRes = document.getElementById("amtRes");
const cusRes = document.getElementById("cusRes");

disPer.textContent = dis.value;
tipPer.textContent = tip.value;
cusCnt.textContent = cus.value;

form.addEventListener("change", (e) => {
  const target = e.target;
  if (target.getAttribute("type") === "range") {
    if (target.id === "dis") disPer.textContent = target.value;
    if (target.id === "tip") tipPer.textContent = target.value;
    if (target.id === "cus") cusCnt.textContent = target.value;
  }
});

generateButton.addEventListener("click", (e) => {
  e.preventDefault();
  // const discountAmt = Math.round((disPer.textContent / 100) * amt.value);
  const discountAmt = (disPer.textContent / 100) * amt.value;
  const discountedBill = amt.value - discountAmt;
  // const tipAmt = Math.round((tipPer.textContent / 100) * discountedBill);
  const tipAmt = (tipPer.textContent / 100) * discountedBill;
  const totAmt = discountedBill + tipAmt;
  // const cusAmt = (totAmt / cusCnt.textContent).toFixed(2);
  const cusAmt = totAmt / cusCnt.textContent;
  tipRes.textContent = tipAmt;
  amtRes.textContent = totAmt;
  cusRes.textContent = cusAmt;
});
