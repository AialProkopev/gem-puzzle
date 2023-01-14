import "./index.scss";
import { renderHeader } from "./components/header";
import renderBoard4x4 from "./components/4x4";

function render() {
  const body = document.querySelector("body");
  const wrapper = document.createElement("div");
  const main = document.createElement("main");

  wrapper.classList.add("wrapper");
  main.classList.add("main");

  wrapper.append(renderHeader());
  wrapper.append(main);

  // Render default board
  main.append(renderBoard4x4());

  body.append(wrapper);
}

render();
