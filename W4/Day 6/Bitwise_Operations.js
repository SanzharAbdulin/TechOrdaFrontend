function getMaxLessThanK(n, k) {
  let max = 1 & 2;
  for (let i = 1; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      let bitwise = i & j;
      if (bitwise > max && bitwise < k) max = bitwise;
    }
  }
  return max;
}
