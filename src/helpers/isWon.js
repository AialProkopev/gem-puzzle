export default function isWon(matrix, size) {
  let countTrueTile = 0;
  let k = 1;
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] === k) {
        countTrueTile += 1;
      }
      if (countTrueTile === size ** 2) {
        return true;
      }
      k += 1;
    }
  }
  return false;
}
