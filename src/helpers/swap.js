export default function swap(c1, c2, matrix) {
  const coord = matrix[c1.y][c1.x];
  matrix[c1.y][c1.x] = matrix[c2.y][c2.x];
  matrix[c2.y][c2.x] = coord;
}
