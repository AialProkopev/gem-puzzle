import { clearTimer } from "../helpers/startTimer";
import renderBoard3x3 from "./3x3";
import renderBoard4x4 from "./4x4";
import renderBoard5x5 from "./5x5";
import renderBoard6x6 from "./6x6";
import renderBoard7x7 from "./7x7";
import renderBoard8x8 from "./8x8";
import { changeCountMoves } from "./board";

let ISSTART = false;

export function renderHeader() {
  const header = document.createElement("header");
  const title = document.createElement("h1");

  header.classList.add("header");
  title.classList.add("header__title");

  title.textContent = "Gem puzzle";

  header.append(title);
  header.append(renderTimer());
  header.append(renderCountMoves(0));
  header.append(renderMenu());

  return header;
}

function renderMenu() {
  const menu = document.createElement("ul");

  menu.classList.add("header__menu");
  menu.classList.add("menu");
  menu.append(getListContent());
  menu.children[0].append(renderModeSwitcher());
  menu.children[1].append(renderSaveButton());
  menu.children[2].append(renderSoundSwitcher());
  menu.children[3].append(renderResults());

  return menu;
}

function getListContent() {
  const fragment = new DocumentFragment();
  for (let i = 1; i <= 4; i++) {
    const li = document.createElement("li");
    li.classList.add("menu__item");
    fragment.append(li);
  }
  return fragment;
}

function renderModeSwitcher() {
  const dropdown = document.createElement("div");
  dropdown.classList.add("dropdown");
  const button = document.createElement("button");
  button.classList.add("dropdown__button");
  const dropdownMenu = document.createElement("div");
  dropdownMenu.classList.add("dropdown__menu");

  button.textContent = "size";

  // DropDown Menu

  for (let i = 1; i <= 6; i++) {
    const menuItem = document.createElement("button");
    menuItem.classList.add("dropdown__item");
    menuItem.textContent = `${i + 2}x${i + 2}`;

    menuItem.addEventListener("click", () => {
      const main = document.querySelector(".main");
      const items = [...document.querySelectorAll(".dropdown__item")];
      if (menuItem.classList.length === 1 && main) main.innerHTML = "";
      if (menuItem.classList.length < 2) {
        if (i === 1) {
          main.append(renderBoard3x3());
          resetCounters();
        }
        if (i === 2) {
          main.append(renderBoard4x4());
          resetCounters();
        }
        if (i === 3) {
          main.append(renderBoard5x5());
          resetCounters();
        }
        if (i === 4) {
          main.append(renderBoard6x6());
          resetCounters();
        }
        if (i === 5) {
          main.append(renderBoard7x7());
          resetCounters();
        }
        if (i === 6) {
          main.append(renderBoard8x8());
          resetCounters();
        }
      }

      items.map((item) => {
        item.classList.remove("dropdown__item_active");
        return item;
      });
      menuItem.classList.add("dropdown__item_active");
    });
    if (i === 2) menuItem.classList.add("dropdown__item_active");
    dropdownMenu.append(menuItem);
  }

  dropdown.append(button);
  dropdown.append(dropdownMenu);

  return dropdown;
}

function renderSoundSwitcher() {
  const sound = document.createElement("button");
  sound.classList.add("header__sound");
  sound.textContent = "sound";
  return sound;
}
function renderResults() {
  const results = document.createElement("button");
  results.classList.add("header__results");
  results.textContent = "results";
  return results;
}
function renderSaveButton() {
  const save = document.createElement("button");
  save.classList.add("header__save");
  save.textContent = "save";
  return save;
}

function renderTimer() {
  const timer = document.createElement("div");
  timer.classList.add("header__timer");
  timer.classList.add("timerCountdown");
  timer.innerHTML = `time: 00:00`;
  return timer;
}

function renderCountMoves(moves) {
  const countMoves = document.createElement("div");
  countMoves.classList.add("header__countMoves");
  countMoves.textContent = `moves: ${moves}`;
  return countMoves;
}

function resetCounters() {
  changeCountMoves(0);
  clearTimer();
}
export function changeStart() {
  ISSTART = !ISSTART;
}
