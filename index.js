// Imports
const Inquirer = require("./lib/inquirer")
  const question = new Inquirer()
const shapes = require("./lib/shapes")
const SVGText = require("./lib/svgText")
const SVG = require("./lib/svg")
  const svg = new SVG(300, 200)
const fs = require('fs')

// Used to make sure that the color is correct
function validateColor(response){
  const colors = require("./lib/colors")
  const hexColorRegex = /^#([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/gm
  if(response.match(hexColorRegex) || colors.includes(response)){
    return true
  }
  return "Your color needs to be either a hex color or a named color which can be found here:\n\thttps://johndecember.com/html/spec/colorsvg.html"
}


// Starts the code
async function start(){
  await question
    .setType("input")
    .setQuestion("Where would you like to store logo.svg?")
    .setName("location")
    .setValidationFunction(() => {return true})
    .askQuestion()

  await question
    .setQuestion("What's the text for your logo?")
    .setName("text")
    .setValidationFunction(response => {
      if(response.length > 3){
        return "Your text has to be 3 or less letters."
      }
      return true
    })
    .askQuestion()

  await question
    .setQuestion("What's your text's color?")
    .setName("textColor")
    .setValidationFunction(validateColor)
    .askQuestion()

  await question
    .setQuestion("What's your logo's shape?")
    .setName("shape")
    .setType("list")
    .setValidationFunction(() => {return true})
    .setOptions(["Circle", "Triangle", "Square"])
    .askQuestion()

  await question
    .setType("input")
    .setQuestion("What's your shape's color?")
    .setName("shapeColor")
    .setValidationFunction(validateColor)
    .askQuestion()

  // Gets the answers
  const answers = question.getAnswers()
  let shape
  let svgText

  // Gets which shape was chosen
  switch(answers.shape){
    case "Circle":
      shape = new shapes.Circle(150, 100, 80, answers.shapeColor)
      svgText = new SVGText(150, 125, 60, answers.textColor)
      svgText.setText(answers.text)
      break
    case "Triangle":
      shape = new shapes.Triangle("150,0 0,260 300,260", answers.shapeColor)
      svgText = new SVGText(150, 190, 55, answers.textColor)
      svgText.setText(answers.text)
      break
    case "Square":
      shape = new shapes.Square(55, 10, 190, answers.shapeColor)
      svgText = new SVGText(150, 130, 60, answers.textColor)
      svgText.setText(answers.text)
      break
  }

  // Adds shape and svg text to the svg
  svg.addElement(shape.render())
  svg.addElement(svgText.render())

  // Add "/" to the end of location if it doesn't have one at the end
  let location = answers.location
  location = location.charAt(location.length - 1) === "/" ? location : location + "/"

  // Writes the svg to the file
  fs.writeFile(`${location}logo.svg`, svg.render(), error => {
    if(error){
      console.log(error)
    }else{
      console.log("Generated logo.svg")
    }
  })

}

start()