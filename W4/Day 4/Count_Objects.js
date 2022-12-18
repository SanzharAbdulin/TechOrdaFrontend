function getCount(objects) {
  let count = 0;
  for (let i in objects) {
    if (objects[i].x == objects[i].y) count++;
  }
  return count;
}
