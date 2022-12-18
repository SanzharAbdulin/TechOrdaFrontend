function sides(literals, ...expressions) {
  let result = [];
  let s1 =
    (expressions[1] +
      Math.sqrt(Math.pow(expressions[1], 2) - 16 * expressions[0])) /
    4;
  let s2 =
    (expressions[1] -
      Math.sqrt(Math.pow(expressions[1], 2) - 16 * expressions[0])) /
    4;
  if (s1 >= s2) {
    result.push(s2);
    result.push(s1);
  } else {
    result.push(s1);
    result.push(s2);
  }
  return result;
}
