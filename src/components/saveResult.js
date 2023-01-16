export function addResult(size, time, moves) {
  const key = `wins${size}x${size}`;
  const result = localStorage.getItem(key);
  const item = {
    time,
    moves,
  };
  let arr = [];
  if (result) {
    arr = [...JSON.parse(result), item];
  } else {
    arr.push(item);
  }
  localStorage.setItem(key, JSON.stringify(arr));
}

export function openResults(size) {
  const key = `wins${size}x${size}`;
  const results = JSON.parse(localStorage.getItem(key));
  if (!results) return;
  if (results.length < 2) return results;
  const sorted = results.sort((a, b) => {
    const kpdA = a.time + a.moves;
    const kpdB = b.time + b.moves;
    return kpdA - kpdB;
  });
  if (sorted > 10) {
    return sorted.slice[(0, 10)];
  }
  return sorted;
}
