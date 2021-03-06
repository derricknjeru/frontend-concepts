/// <reference path="result.ts" />

class ScoreBoard {
  private result: Result[] = [];

  addResult(newResult: Result): void {
    this.result.push(newResult);
  }

  updateScoreboard(): void {
    let output: string = "<h2>Scoreboard</h2>";
    for (let index = 0; index < this.result.length; index++) {
      const result: Result = this.result[index];
      output += "<h4>";
      output +=
        result.playerName +
        ":" +
        result.score +
        "/" +
        result.problemCount +
        " for factor " +
        result.factor;
    }
    const scoreElement: HTMLElement = document.getElementById("scores")!;
    scoreElement.innerHTML = output;
  }
}
