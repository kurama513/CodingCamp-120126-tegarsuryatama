// Welcome message
const userName = prompt("Please enter your name:");
if (userName) {
  document.getElementById("welcomeText").innerText =
    `Hi ${userName}, Welcome To Website`;
}

// Form handling
document.getElementById("messageForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const birth = document.getElementById("birthdate").value;
  const message = document.getElementById("messageText").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;

  document.getElementById("currentTime").innerText = new Date().toString();
  document.getElementById("resultName").innerText = name;
  document.getElementById("resultBirth").innerText = birth;
  document.getElementById("resultGender").innerText = gender;
  document.getElementById("resultMessage").innerText = message;
});
