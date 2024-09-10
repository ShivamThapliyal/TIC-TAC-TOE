let boxs = document.querySelectorAll(".box");
let newbtn = document.querySelector("#newgame");
let reset = document.querySelector("#reset");
let show = document.querySelector("#msg");
let show1 = document.querySelector(".msg-top");

let turn = true;
let count = 0;

const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const disableboxs = () => {
  for (let box of boxs) {
    box.disabled = true;
  }
};

const enableboxs = () => {
  for (let box of boxs) {
    box.disabled = false;
    box.innerText = "";
  }
};

boxs.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      box.innerText = "X";
      box.style.color = "green";
      turn = false;
    } else {
      box.innerText = "O";
      box.style.color = "blue";
      turn = true;
    }
    box.disabled = true;
    count++;
    let iswinner = check();
    if (count === 9 && !iswinner) {
      gamedraw();
    }
  });
});

const gamedraw = () => {
  show.innerText = "DRAW";
  show1.classList.remove("hide");
  disableboxs();
};

const winner = (a) => {
  show.innerText = `The Winner is ${a}`;
  show.style.color = "red";
  show1.classList.remove("hide");
  disableboxs();
};

const check = () => {
  for (let pattern of winpattern) {
    let a = boxs[pattern[0]].innerText;
    let b = boxs[pattern[1]].innerText;
    let c = boxs[pattern[2]].innerText;
    if (a != "" && b != "" && c != "") {
      if (a === b && b === c) {
        winner(a);
        return true;
      }
    }
  }
};

const newgame = () => {
  trun = true;
  count = 0;
  enableboxs();
  show1.classList.add("hide");
};
newbtn.addEventListener("click", newgame);
reset.addEventListener("click", newgame);
