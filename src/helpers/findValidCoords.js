import isValidForSwap from "./isValidForSwap";

export default function findValidCoords(blankCoords, matrix, blockedCoords) {
  const validCoords = [];

  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (isValidForSwap({ x, y }, blankCoords)) {
        if (!blockedCoords || !(blockedCoords.x === x && blockedCoords.y === y)) {
          validCoords.push({ x, y });
        }
      }
    }
  }
  return validCoords;
}
