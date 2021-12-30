function startGame() {
  //comments
  let playerName: string | undefined = getInputValue("playername");

  //type casting and assertion
  let no: any = 5;
  let x: string = (no as number).toFixed(4);
  let y: string = (<number>no).toFixed(4);

  logPlayer(playerName);

  postScore(100, playerName);
  postScore(-1, playerName);
}

function logPlayer(name: string = "MultiMath player"): void {
  console.log(`New game starting for player:${name}`);
}

function getInputValue(elementID: string): string | undefined {
  const inputElement: HTMLInputElement = <HTMLInputElement>(
    document.getElementById(elementID)
  );
  if (inputElement.value == "") {
    return undefined;
  } else {
    return inputElement.value;
  }
}

function postScore(
  score: number,
  playerName: string = "MultiMath player"
): void {
  let logger: (value: string) => void; //can be assigned any function that takes a string and return null

  if (score < 0) logger = logError;
  else logger = logMessage;

  const scoreElement: HTMLElement | null =
    document.getElementById("postedScores");
  scoreElement!.innerText = `${score} - ${playerName}`;

  logger(`Score ${score}`);
}
document.getElementById("startGame")!.addEventListener("click", startGame);

const logMessage = (message: string) => console.log(message);

function logError(err: string): void {
  console.error(err);
}
