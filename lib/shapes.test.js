const { Circle, Triangle, Square, Svg } = require('./shapes')

describe('Circle', () => {
  test('Should produce instance of Circle', () => {
    const circle = new Circle('blue')
    expect(typeof circle).toBe('object')
  })
  test('Should set shape color', () => {
    const circle = new Circle('red')
    expect(circle.shapeColor).toBe('red')
  })
  test('Should render circle', () => {
    const circle = new Circle('red')
    expect(circle.render()).toBe(
      '<circle cx="50%" cy="50%" r="80" fill="red"></circle>'
    )
  })
})

describe('Svg', () => {
  test('Should set properties', () => {
    const text = 'abc'
    const textColor = 'yellow'
    const circle = new Circle('blue')
    const svg = new Svg(text, textColor, circle)
    expect(svg.text).toBe(text)
    expect(svg.textColor).toBe(textColor)
    expect(typeof svg.shape).toBe('object')
  })
  test('Should render SVG', () => {
    const text = 'abc'
    const textColor = 'yellow'
    const circle = new Circle('blue')
    const svg = new Svg(text, textColor, circle)
    expect(svg.render()).toBe(` <svg width="300" height="200">
        <circle cx="50%" cy="50%" r="80" fill="blue"></circle>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`)
  })
})

describe('Triangle', () => {
  test('Should produce instance of Triangle', () => {
    const triangle = new Triangle('blue')
    expect(typeof triangle).toBe('object')
  })
  test('Should set shape color', () => {
    const triangle = new Triangle('red')
    expect(triangle.shapeColor).toBe('red')
  })
  test('Should render triangle', () => {
    const triangle = new Triangle('red')
    expect(triangle.render()).toBe(
      '<polygon points="150, 43.75 206.25, 156.15 93.75, 156.15" fill="red" />'
    )
  })
})

describe('Square', () => {
  test('Should produce instance of Square', () => {
    const square = new Square('blue')
    expect(typeof square).toBe('object')
  })
  test('Should set shape color', () => {
    const square = new Square('red')
    expect(square.shapeColor).toBe('red')
  })
  test('Should render square', () => {
    const square = new Square('red')
    expect(square.render()).toBe(
      '<rect x="93.75" y="43.75" width="112.5" height="112.5" fill="red" />'
    )
  })
})
