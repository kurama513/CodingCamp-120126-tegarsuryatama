// Welcome message
const namePrompt = prompt("Masukkan nama Anda:");
if (namePrompt) {
  document.getElementById("welcomeText").innerText =
    "Hi " + namePrompt + ", Welcome To Website";
}

// Form submit
document.getElementById("messageForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const birthdate = document.getElementById("birthdate").value;
  const message = document.getElementById("messageText").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;

  const now = new Date().toString();

  document.getElementById("currentTime").innerText = now;
  document.getElementById("resultName").innerText = name;
  document.getElementById("resultBirth").innerText = birthdate;
  document.getElementById("resultGender").innerText = gender;
  document.getElementById("resultMessage").innerText = message;
});
