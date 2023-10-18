// Wage Calculator

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // INPUT
  let regularH = +document.getElementById("regularH-in").value;
  let overtimeH = +document.getElementById("overtimeH-in").value;
  let payrate = +document.getElementById("payrate-in").value;

  // PROCESS
  let wage = payrate * regularH + payrate * (overtimeH * 1.5);

  // OUTPUT
  document.getElementById("output").innerHTML = Math.round(wage);
}
