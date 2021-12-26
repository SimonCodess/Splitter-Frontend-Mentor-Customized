// Selectors
const billInput = document.querySelector("#bill-inp");
const bill5 = document.querySelector("#five");
const bill10 = document.querySelector("#ten");
const bill15 = document.querySelector("#fiveten");
const bill25 = document.querySelector("#twofive");
const bill50 = document.querySelector("#fifty");
const percentageInput = document.querySelector("#tip-amount");
const peopleInput = document.querySelector("#people-inp");
const ppTip = document.querySelector("#perperson-tip");
const ppTotal = document.querySelector("#perperson-total");
const reset = document.querySelector(".reset");

// Function
function calculate() {
  let billTotal = billInput.value;
  let people = peopleInput.value;
  let percent = percentageInput.value;
  bill5.addEventListener("click", function () {
    percentageInput.value = 5;
  });
  bill10.addEventListener("click", function () {
    percentageInput.value = 10;
  });
  bill15.addEventListener("click", function () {
    percentageInput.value = 15;
  });
  bill25.addEventListener("click", function () {
    percentageInput.value = 25;
  });
  bill50.addEventListener("click", function () {
    percentageInput.value = 50;
  });
  if (billTotal > 0 && people > 0 && percent > 0) {
    let totalTip = ((billTotal / 100) * percent) / people;
    ppTip.innerText = totalTip.toFixed(2);
    let personTotal = billTotal / people;
    ppTotal.innerText = personTotal.toFixed(2);
  }
  reset.addEventListener("click", function () {
    billInput.value = null;
    percentageInput.value = null;
    peopleInput.value = null;
    ppTip.innerText = "0.00";
    ppTotal.innerText = "0.00";
  });
}
setInterval(calculate, 100);
