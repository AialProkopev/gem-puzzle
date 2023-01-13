import renderBoard3x3 from "./3x3"
import renderBoard4x4 from "./4x4"
import renderBoard5x5 from "./5x5"
import renderBoard6x6 from "./6x6"
import renderBoard7x7 from "./7x7"
import renderBoard8x8 from "./8x8"
import randomSwap from "../helpers/randomSwap"
import setPositionMatrix from "../helpers/setPositionMatrix"

let MATRIX
let NODEITEMS
let SIZE

export function renderHeader() {
  const header = document.createElement("header")
  const title = document.createElement("h1")
  const timer = document.createElement("div")
  const countMoves = document.createElement("div")

  // Add classes
  header.classList.add("header")
  title.classList.add("header__title")
  timer.classList.add("header__timer")
  countMoves.classList.add("header__countMoves")

  title.textContent = "Gem puzzle"
  timer.textContent = "Timer"
  countMoves.textContent = "Count Moves"

  header.append(title)
  header.append(timer)
  header.append(countMoves)
  header.append(renderMenu())

  return header
}

function renderMenu() {
  const menu = document.createElement("ul")

  menu.classList.add("header__menu")
  menu.classList.add("menu")
  menu.append(getListContent())
  menu.children[0].append(renderStartButton())
  menu.children[1].append(renderModeSwitcher())

  return menu
}

function getListContent() {
  const fragment = new DocumentFragment()
  for (let i = 1; i <= 4; i++) {
    const li = document.createElement("li")
    li.classList.add("menu__item")
    fragment.append(li)
  }
  return fragment
}

function renderModeSwitcher() {
  const dropdown = document.createElement("div")
  dropdown.classList.add("dropdown")
  const button = document.createElement("button")
  button.classList.add("dropdown__button")
  const dropdownMenu = document.createElement("div")
  dropdownMenu.classList.add("dropdown__menu")

  button.textContent = "mode"

  // DropDown Menu

  for (let i = 1; i <= 6; i++) {
    const menuItem = document.createElement("button")
    menuItem.classList.add("dropdown__item")
    menuItem.textContent = `${i + 2}x${i + 2}`

    menuItem.addEventListener("click", () => {
      const main = document.querySelector(".main")
      const items = [...document.querySelectorAll(".dropdown__item")]
      if (menuItem.classList.length === 1 && main) main.innerHTML = ""
      if (menuItem.classList.length < 2) {
        if (i === 1) main.append(renderBoard3x3())
        if (i === 2) main.append(renderBoard4x4())
        if (i === 3) main.append(renderBoard5x5())
        if (i === 4) main.append(renderBoard6x6())
        if (i === 5) main.append(renderBoard7x7())
        if (i === 6) main.append(renderBoard8x8())
      }

      items.map((item) => {
        item.classList.remove("dropdown__item_active")
        return item
      })
      menuItem.classList.add("dropdown__item_active")
    })
    if (i === 2) menuItem.classList.add("dropdown__item_active")
    dropdownMenu.append(menuItem)
  }

  dropdown.append(button)
  dropdown.append(dropdownMenu)

  return dropdown
}

function renderStartButton() {
  const startButton = document.createElement("button")
  startButton.classList.add("header__button")
  startButton.textContent = "start"

  const maxShuffleCount = 500
  let timer

  startButton.addEventListener("click", () => {
    const main = document.querySelector(".main")
    // if (main.children[0].dataset.type === "4") {

    let shuffleCount = 0
    clearInterval(timer)

    if (shuffleCount === 0) {
      timer = setInterval(() => {
        randomSwap(MATRIX, SIZE)
        setPositionMatrix(MATRIX, NODEITEMS)

        shuffleCount += 1

        if (shuffleCount >= maxShuffleCount) {
          clearInterval(timer)
        }
      }, 30)
    }
    // }
  })
  return startButton
}

export function changeMatrix(matrix) {
  MATRIX = matrix
}
export function changeNodeItems(nodeItems) {
  NODEITEMS = nodeItems
}
export function changeSize(size) {
  SIZE = size
}
