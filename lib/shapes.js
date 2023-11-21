class Shape {
  constructor(shapeColor) {
    this.shapeColor = shapeColor
  }
}

class Circle extends Shape {
  constructor(shapeColor) {
    super(shapeColor)
  }
  render() {
    return `<circle cx="50%" cy="50%" r="80" fill="${this.shapeColor}"></circle>`
  }
}

class Triangle extends Shape {
  constructor(shapeColor) {
    super(shapeColor)
  }
  render() {
    return `<polygon points="150, 43.75 206.25, 156.15 93.75, 156.15" fill="${this.shapeColor}" />`
  }
}

class Square extends Shape {
  constructor(shapeColor) {
    super(shapeColor)
  }
  render() {
    return `<rect x="93.75" y="43.75" width="112.5" height="112.5" fill="${this.shapeColor}" />`
  }
}

class Svg {
  constructor(text, textColor, shape) {
    this.text = text
    this.textColor = textColor
    this.shape = shape
  }
  render() {
    return ` <svg width="300" height="200">
        ${this.shape.render()}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
  }
}

module.exports = { Circle, Triangle, Square, Svg }
