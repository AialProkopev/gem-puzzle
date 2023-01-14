import renderBoard3x3 from "./3x3";
import renderBoard4x4 from "./4x4";
import renderBoard5x5 from "./5x5";
import renderBoard6x6 from "./6x6";
import renderBoard7x7 from "./7x7";
import renderBoard8x8 from "./8x8";

export function renderWinMessage(time, countMoves, size) {
  const main = document.querySelector(".main");
  main.innerHTML = "";
  main.append(createWinPopup(time, countMoves, size));
}

function createWinPopup(time, countMoves, size) {
  const winPopup = document.createElement("div");
  winPopup.classList.add("win-popup");

  const container = document.createElement("div");
  container.classList.add("win-popup__container");

  const winTitle = document.createElement("h2");
  winTitle.classList.add("win-popup__title");
  winTitle.textContent = "You won!";
  container.append(winTitle);

  const timeElement = document.createElement("p");
  timeElement.classList.add("win-popup__counter");
  timeElement.textContent = time + " seconds";
  container.append(timeElement);

  const countMovesElement = document.createElement("p");
  countMovesElement.classList.add("win-popup__counter");
  countMovesElement.textContent = countMoves + " moves";
  container.append(countMovesElement);

  const restart = document.createElement("button");
  restart.classList.add("win-popup__restart");
  restart.textContent = "restart";
  restart.addEventListener("click", () => {
    const main = document.querySelector(".main");
    switch (size) {
      case 3:
        main.innerHTML = "";
        main.append(renderBoard3x3());
        break;
      case 4:
        main.innerHTML = "";
        main.append(renderBoard4x4());
        break;
      case 5:
        main.innerHTML = "";
        main.append(renderBoard5x5());
        break;
      case 6:
        main.innerHTML = "";
        main.append(renderBoard6x6());
        break;
      case 7:
        main.innerHTML = "";
        main.append(renderBoard7x7());
        break;
      case 8:
        main.innerHTML = "";
        main.append(renderBoard8x8());
        break;
    }
  });
  container.append(restart);

  winPopup.append(container);
  return winPopup;
}
