import setItemsStyle from "./setItemsStyle";

export default function setPositionMatrix(mtrx, nodeItems) {
  for (let y = 0; y < mtrx.length; y++) {
    for (let x = 0; x < mtrx[y].length; x++) {
      const value = mtrx[y][x];
      const node = nodeItems[value - 1];
      setItemsStyle(node, x, y);
    }
  }
}
