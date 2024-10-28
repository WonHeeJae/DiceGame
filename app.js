const gameStart = () => {
  gameStart_btn.removeEventListener("click", gameStart);
  let gameUser = "1PLAYER";
  const totalP1 = document.querySelector(".DICE-TOTAL__Llabel");
  const totalP2 = document.querySelector(".DICE-TOTAL__Rlabel");
  const countP1 = document.querySelector(".DICE-CAL__Llabel");
  const countP2 = document.querySelector(".DICE-CAL__Rlabel");

  const clearData = () => {
    totalP1.innerText = "0";
    totalP2.innerText = "0";
    countP1.innerText = "0";
    countP2.innerText = "0";
    gameUser = "1PLAYER";
  };
  const gameExit = () => {
    gameStart_btn.addEventListener("click", gameStart);
    rolldice_btn.removeEventListener("click", gameCount);
    hold_btn.removeEventListener("click", gameHold);
    alert(`게임이 종료되었습니다. 승리자는 ${gameUser}`);
  };
  const gameCount = () => {
    let dice = Math.floor(Math.random() * 6 + 1);
    let count = 0;
    console.log(`플레이어 : ${gameUser} , 주사위 값 : ${dice}`);
    if (dice === 1 || dice === 2) {
      if (gameUser === "1PLAYER") {
        countP1.innerText = 0;
        gameUser = "2PLAYER";
      } else if (gameUser === "2PLAYER") {
        countP2.innerText = 0;
        gameUser = "1PLAYER";
      }
    } else {
      if (gameUser === "1PLAYER") {
        count = Number(countP1.innerText);
        countP1.innerText = count + dice;
      } else if (gameUser === "2PLAYER") {
        count = Number(countP2.innerText);
        countP2.innerText = count + dice;
      }
    }
  };
  const gameHold = () => {
    let totalCount = 0;
    let count = 0;

    if (gameUser === "1PLAYER") {
      totalCount = Number(totalP1.innerText);
      count = Number(countP1.innerText);
      totalP1.innerText = totalCount + count;
      if (totalP1.innerText > 50) {
        gameExit();
      }
      countP1.innerText = "0";
      gameUser = "2PLAYER";
    } else if (gameUser === "2PLAYER") {
      totalCount = Number(totalP2.innerText);
      count = Number(countP2.innerText);
      totalP2.innerText = totalCount + count;
      if (totalP2.innerText > 50) {
        gameExit();
      }
      countP2.innerText = "0";
      gameUser = "1PLAYER";
    }
  };
  clearData();
  const rolldice_btn = document.querySelector(".ROLLDICE__button");
  rolldice_btn.addEventListener("click", gameCount);

  const hold_btn = document.querySelector(".HOLD__button");
  hold_btn.addEventListener("click", gameHold);
};

const gameStart_btn = document.querySelector(".GAMESTART__button");
gameStart_btn.addEventListener("click", gameStart);
