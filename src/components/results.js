import { stopTimer } from "../helpers/startTimer";
import { openResults } from "./saveResult";

export function clickHandlerResults() {
  stopTimer();
  const main = document.querySelector(".main");
  main.innerHTML = "";
  main.append(createMessageWindow());
}

function createMessageWindow() {
  const window = document.createElement("div");
  window.classList.add("results");

  const title = document.createElement("h2");
  title.classList.add("results__title");
  title.textContent = "Top 10 results:";
  window.append(title);

  const wrapper = document.createElement("div");
  wrapper.classList.add("results__wrapper");

  wrapper.append(createDiv(3));
  wrapper.append(createDiv(4));
  wrapper.append(createDiv(5));
  wrapper.append(createDiv(6));
  wrapper.append(createDiv(7));
  wrapper.append(createDiv(8));

  window.append(wrapper);

  return window;
}

function createDiv(size) {
  const div = document.createElement("div");
  div.classList.add(`results__div${size}`);
  const title = document.createElement("h3");
  title.classList.add("results__subtitle");
  title.textContent = `${size}x${size}`;
  div.append(title);
  const list = openResults(size);
  const ul = document.createElement("ul");
  ul.classList.add("list");
  if (list) {
    ul.append(getList(list));
    div.append(ul);
  } else {
    ul.textContent = "---";
    div.append(ul);
  }
  return div;
}

function getList(list) {
  const len = list.length;
  const fragment = new DocumentFragment();
  for (let i = 0; i < len; i++) {
    const li = document.createElement("li");
    li.classList.add("list__item");
    li.textContent = `time: ${list[i].time} sec, moves: ${list[i].moves}`;
    fragment.append(li);
  }
  return fragment;
}

function createList() {}
