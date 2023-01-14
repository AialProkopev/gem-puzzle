export default function getMatrix(arr, size) {
  const matrix = [];
  for (let i = 0; i < size; i++) {
    matrix.push([]);
  }
  let y = 0;
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (x >= size) {
      y++;
      x = 0;
    }
    matrix[y][x] = arr[i];
    x++;
  }
  return matrix;
}
