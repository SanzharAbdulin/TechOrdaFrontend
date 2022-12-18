class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  perimeter() {
    let p = 0;
    for (let i of this.sides) {
      p += i;
    }
    return p;
  }
}
