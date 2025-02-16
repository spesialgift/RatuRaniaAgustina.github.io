
const correctPassword = "1612";

function addDigit(digit) {
  const input = document.getElementById("passwordInput");
  if (input.value.length < 4) {
    input.value += digit;
  }
}

function clearPassword() {
  document.getElementById("passwordInput").value = "";
}

function submitPassword() {
  const input = document.getElementById("passwordInput").value;
  if (input === correctPassword) {
    window.location.href = "main.html";
  } else {
    alert("PW SALAH AYANG YANG BENER MASA LUPA");
    clearPassword();
  }
}
