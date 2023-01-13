import swap from "../helpers/swap"
import isValidForSwap from "../helpers/isValidForSwap"
import findCoordinatesByNumber from "../helpers/findCoordinatesByNumber"
import getMatrix from "../helpers/getMatrix"
import setPositionMatrix from "../helpers/setPositionMatrix"
import isWon from "../helpers/isWon"
import { changeMatrix, changeNodeItems, changeSize } from "./header"

function renderBoard(size, className) {
  let nodeItems = []
  const array = new Array(size ** 2).fill(0).map((item, index) => index + 1)
  const board = document.createElement("div")

  board.classList.add(className)
  board.dataset.type = size

  for (let i = 0; i < array.length; i++) {
    const btnElement = document.createElement("button")
    btnElement.classList.add(className + "__item")
    btnElement.textContent = array[i]
    btnElement.dataset.matrixId = array[i]
    board.append(btnElement)
    nodeItems.push(btnElement)
  }

  nodeItems[nodeItems.length - 1].style.display = "none"
  const matrix = getMatrix(
    nodeItems.map((item) => Number(item.dataset.matrixId)),
    size
  )

  setPositionMatrix(matrix, nodeItems)

  // Change Position
  const blankNumber = size ** 2

  board.addEventListener("click", (event) => {
    const buttonNode = event.target.closest("button")
    if (!buttonNode) {
      return
    }

    const buttonNumber = Number(buttonNode.dataset.matrixId)
    const buttonCoordinates = findCoordinatesByNumber(buttonNumber, matrix)
    const blankCoordinates = findCoordinatesByNumber(blankNumber, matrix)
    const isValid = isValidForSwap(buttonCoordinates, blankCoordinates)

    if (isValid) {
      swap(blankCoordinates, buttonCoordinates, matrix)
      setPositionMatrix(matrix, nodeItems)
    }
    if (isWon(matrix, size)) {
      setTimeout(() => {
        alert("You won")
      }, 100)
    }
  })

  changeMatrix(matrix)
  changeNodeItems(nodeItems)
  changeSize(size)
  
  return board
}

export default renderBoard
