const { info } = require('console')
const fs = require('graceful-fs')
const inquirer = require('inquirer')
const {Circle, Triangle, Square, Svg} = require('./lib/shapes')
inquirer
  .prompt([
    {
      type: 'input',
      name: 'textInfo',
      message: 'Please enter three letters',
      validate: (textInfo) =>
        textInfo.length <= 3 || 'Please enter 3 characters',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'What text color would you like to use?',
    },
    {
      type: 'list',
      name: 'shapeInfo',
      message: 'What shape would you like to use?',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'What color would you like for the shape to be?',
    },
  ])
  .then((data) => {
    console.log(data)
    let shape
    if (data.shapeInfo === 'circle') {
      console.log('circle')
      shape = new Circle(data.shapeColor)
    } else if (data.shapeInfo === 'triangle') {
      console.log('triangle')
      shape = new Triangle(data.shapeColor)
    } else {
      console.log('square')
      shape = new Square(data.shapeColor)
    }
    const svg = new Svg(data.textInfo, data.textColor, shape)
    console.log(svg.render())

    fs.writeFile('./dist/logo.svg', svg.render(), function (err) {
      if (err) throw err
      console.log('success!')
    })
  })