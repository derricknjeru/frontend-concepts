function startGame() {
  //comments
  let playerName: string = "Derrick Njeru";

  //type casting and assertion
  let no: any = 5;
  let x: string = (no as number).toFixed(4);
  let y: string = (<number>no).toFixed(4);


  logPlayer(playerName);

  let messageElement = document.getElementById("messages");
  messageElement!.innerHTML = "Welcome to MultiMath, starting a new game";
}

function logPlayer(name: string | undefined) {
  console.log(`New game starting for player:${name}`);
}

document.getElementById("startGame")!.addEventListener("click", startGame);
