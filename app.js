let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newBtn = document.querySelector("#newBtn");
let msgBox = document.querySelector(".msgBox");
let msgPara = document.querySelector("#msg"); 

// PlayerX and PlayerO
let turnX = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
    turnX = true;
    enableBox();
    msgBox.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {
      box.innerText = "X";
      box.style.color = "blue";
      turnX = false;
    } else {
      box.innerText = "O";
      box.style.color = "red";
      turnX = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disabledBox = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableBox = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msgPara.innerText = `Congratulation winner is "Player-${winner}"`;
    msgBox.classList.remove("hide");
    disabledBox();
};

const checkWinner = () => {
  for (pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if(pos1Val === pos2Val && pos2Val === pos3Val) {
            showWinner(pos1Val);
        }
    }
  }
};

newBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);