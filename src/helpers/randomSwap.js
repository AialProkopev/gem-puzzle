import findCoordinatesByNumber from "./findCoordinatesByNumber";
import findValidCoords from "./findValidCoords";
import swap from "./swap";

let blockedCoords = null;

export default function randomSwap(matrix, size) {
  const blankCoords = findCoordinatesByNumber(size ** 2, matrix);
  const validCoords = findValidCoords(blankCoords, matrix, blockedCoords);

  const swapCoords =
    validCoords[Math.floor(Math.random() * validCoords.length)];
  swap(blankCoords, swapCoords, matrix);
  blockedCoords = blankCoords;
}
