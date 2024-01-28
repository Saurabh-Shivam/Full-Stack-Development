const gameInfo = document.querySelector(".gameInfo");
const boxes = document.querySelectorAll(".box");
const newGameBtn = document.querySelector(".btn");

let currentPlayer;
let gameGrid;

const winningPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Initialize the game
function initializeGame() {
  // Set Current Player to X
  currentPlayer = "❌";
  // Making all the boxes empty at start as gameGrid is made to check the current status of our game
  gameGrid = ["", "", "", "", "", "", "", "", ""];

  // Make Boxes Empty on the UI
  boxes.forEach((box, index) => {
    box.textContent = "";
    box.style.pointerEvents = "all";
    // initalise box with css properties again
    box.classList = `box box${index + 1}`;
  });

  // Remove Active Class From newGameBtn
  newGameBtn.classList.remove("active");
  // displaying the cuurent player at the start of game
  gameInfo.textContent = `Current Player: ${currentPlayer}`;
}

initializeGame();

// Handle Click Game
function handleClick(index) {
  if (gameGrid[index] === "") {
    // making the pointer as none when a particular box is clicked
    boxes[index].style.pointerEvents = "none";
    // putting the current player value at particular clicked box/position on the UI, boxes -> indicate our UI
    boxes[index].textContent = currentPlayer;
    // making changes in our gameGrid array, gameGrid -> indicates our inner logic
    gameGrid[index] = currentPlayer;
    // swap the current values for next player's turn
    swapTurns();
    // updating the gameInfo text on UI with current player
    gameInfo.textContent = `Current Player : ${currentPlayer}`;
    // check whether someone has won or not
    checkGameOver();
  }
}

// Check Game is Over or Not
function checkGameOver() {
  let winner = "";
  winningPositions.forEach((position) => {
    // all 3 boxes should be non-empty and exactly same in value

    // if (
    //   (gameGrid[position[0]] !== "" ||
    //     gameGrid[position[1]] !== "" ||
    //     gameGrid[position[2]] !== "") &&
    //   gameGrid[position[0]] === gameGrid[position[1]] &&
    //   gameGrid[position[1]] === gameGrid[position[2]]
    // ) {

    // another approach
    if (
      (gameGrid[position[0]] === "❌" &&
        gameGrid[position[1]] === "❌" &&
        gameGrid[position[2]] === "❌") ||
      (gameGrid[position[0]] === "⭕" &&
        gameGrid[position[1]] === "⭕" &&
        gameGrid[position[2]] === "⭕")
    ) {
      // check whether the winner is X or O
      winner = gameGrid[position[0]] === "❌" ? "❌" : "⭕";
      // disabling the pointer events to prevent the game continuation after the winner is found
      boxes.forEach((box) => {
        box.style.pointerEvents = "none";
      });

      // now we know X/O is the winner
      boxes[position[0]].classList.add("win");
      boxes[position[1]].classList.add("win");
      boxes[position[2]].classList.add("win");
    }
  });

  // when we get a winnner
  if (winner !== "") {
    gameInfo.textContent = `Winner is - ${winner}`;
    newGameBtn.classList.add("active");
    return;
  }

  // Here is not winner yet Check for tie
  // game is currently on
  let fillCount = 0;
  gameGrid.forEach((box) => {
    if (box !== "") {
      fillCount++;
    }
  });

  // board is filled, game tied
  if (fillCount === 9) {
    gameInfo.textContent = "Game Tied !";
    newGameBtn.classList.add("active");
  }
}

// Swapping Turns
function swapTurns() {
  currentPlayer = currentPlayer === "❌" ? "⭕" : "❌";
}

// Adding Event Listener to all Boxes to Get Player Input
boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    handleClick(index);
  });
});

// when newGameBtn is clicked it will call initializeGame() function and it will start a new game again after the previous game is finished
newGameBtn.addEventListener("click", initializeGame);
