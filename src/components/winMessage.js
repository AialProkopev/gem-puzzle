export function renderWinMessage(time, countMoves) {
  const main = document.querySelector(".main");
  main.innerHTML = "";
  main.append(createWinPopup(time, countMoves));
}

function createWinPopup(time, countMoves) {
  const winPopup = document.createElement("div");
  winPopup.classList.add("win-popup");

  const winTitle = document.createElement("h2");
  winTitle.classList.add("win-popup__title");
  winTitle.textContent = "You won!";
  winPopup.append(winTitle);

  const timeElement = document.createElement("p");
  timeElement.classList.add("win-popup__counter");
  timeElement.textContent = time + " seconds";
  winPopup.append(timeElement);

  const countMovesElement = document.createElement("p");
  countMovesElement.classList.add("win-popup__counter");
  countMovesElement.textContent = countMoves + " moves";
  winPopup.append(countMovesElement);

  return winPopup;
}
