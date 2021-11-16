function startGame() {
  var messageElement = document.getElementById("messages");
  messageElement.innerHTML = "Welcome to MultiMath, starting a new game";
}

document.getElementById("startGame").addEventListener("click", startGame);
