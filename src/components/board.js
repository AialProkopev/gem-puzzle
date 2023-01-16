import swap from "../helpers/swap";
import isValidForSwap from "../helpers/isValidForSwap";
import findCoordinatesByNumber from "../helpers/findCoordinatesByNumber";
import getMatrix from "../helpers/getMatrix";
import setPositionMatrix from "../helpers/setPositionMatrix";
import isWon from "../helpers/isWon";
import randomSwap from "../helpers/randomSwap";
import { changeStart } from "./header";
import { startTimer, stopTimer } from "../helpers/startTimer";
import { renderWinMessage } from "./winMessage";
import { addResult } from "./saveResult";

const SHUFFLEINTERVAL = 30;
const MULTSHUFFLECOUNT = 50;

let nodeItems = [];
let matrix = null;
let SIZE = null;
let timer;
let WINTIME;

function renderBoard(size, className) {
  nodeItems = [];
  matrix = null;
  let countMoves = 0;
  clearInterval(timer);
  const array = new Array(size ** 2).fill(0).map((item, index) => index + 1);
  const boardWrapper = document.createElement("div");
  boardWrapper.classList.add("board-wrapper");

  const board = document.createElement("div");

  board.classList.add(className);
  board.dataset.type = size;

  for (let i = 0; i < array.length; i++) {
    const btnElement = document.createElement("button");
    btnElement.classList.add(className + "__item");
    btnElement.textContent = array[i];
    btnElement.dataset.matrixId = array[i];
    board.append(btnElement);
    nodeItems.push(btnElement);
  }

  nodeItems[nodeItems.length - 1].style.display = "none";
  matrix = getMatrix(
    nodeItems.map((item) => Number(item.dataset.matrixId)),
    size
  );

  setPositionMatrix(matrix, nodeItems);

  const blankNumber = size ** 2;

  // Change Position
  board.addEventListener("click", (event) => {
    const buttonNode = event.target.closest("button");
    if (!buttonNode) {
      return;
    }

    const buttonNumber = Number(buttonNode.dataset.matrixId);
    const buttonCoordinates = findCoordinatesByNumber(buttonNumber, matrix);
    const blankCoordinates = findCoordinatesByNumber(blankNumber, matrix);
    const isValid = isValidForSwap(buttonCoordinates, blankCoordinates);

    if (isValid) {
      swap(blankCoordinates, buttonCoordinates, matrix);
      setPositionMatrix(matrix, nodeItems);
      countMoves++;
      changeCountMoves(countMoves);
    }
    if (isWon(matrix, size)) {
      setTimeout(() => {
        stopTimer();
        renderWinMessage(WINTIME, countMoves, size);
        addResult(size, WINTIME, countMoves);
      }, 100);
    }
  });

  changeSize(size);

  boardWrapper.append(board);
  boardWrapper.append(renderGlass());
  return boardWrapper;
}

function renderGlass() {
  const glass = document.createElement("button");
  glass.classList.add("glass");
  glass.textContent = "start";

  const maxShuffleCount = MULTSHUFFLECOUNT * SIZE;

  // Start shuffling
  glass.addEventListener("click", () => {
    let shuffleCount = 0;
    clearInterval(timer);

    if (shuffleCount === 0) {
      timer = setInterval(() => {
        randomSwap(matrix, SIZE);
        setPositionMatrix(matrix, nodeItems);

        shuffleCount += 1;

        if (shuffleCount >= maxShuffleCount) {
          clearInterval(timer);
          changeStart();
          startTimer();
          changeCountMoves(0);
        }
      }, SHUFFLEINTERVAL);
    }

    glass.remove();
  });

  return glass;
}

function changeSize(size) {
  SIZE = size;
}

export function changeCountMoves(count) {
  const timer = document.querySelector(".header__countMoves");
  timer.textContent = `moves: ${count}`;
}

export function changeWinTime(time) {
  WINTIME = time;
}

export default renderBoard;
