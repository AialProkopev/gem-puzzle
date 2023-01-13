export default function isValidForSwap(c1, c2) {
  const diffX = Math.abs(c1.x - c2.x);
  const diffY = Math.abs(c1.y - c2.y);
  return (diffX === 1 || diffY === 1) && (c1.x === c2.x || c1.y === c2.y);
}
