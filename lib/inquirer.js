// Use constructor function instead of class to allow for private vars
module.exports = function Inquirer() {
  const inquirer = require("inquirer")
  let type
  let name
  let question
  let validationFunction
  let options

  let answers

  this.setType = function(typeArg){
    type = typeArg
    return this
  }

  this.setName = function(nameArg){
    name = nameArg
    return this
  }

  this.setQuestion = function(questionArg){
    question = questionArg
    return this
  }

  this.setValidationFunction = function(validationFunctionArg){
    validationFunction = validationFunctionArg
    return this
  }

  this.setOptions = function(optionsArg){
    options = optionsArg
    return this
  }

  // Used to make the code a little cleaner
  async function questionBoilerplate(propertiesObj){
    return new Promise((resolve, reject) => {
      inquirer.prompt([propertiesObj])
      .then(answer => {resolve(answer)})
      .catch(error => {reject(error)})
    })
  }

  this.askQuestion = async function(){
    const propertiesObj = {
        type: type,
        name: name,
        message: question,
        validate: validationFunction,
    }

    // If the type is a list then add the choices option
    if(type === "list"){
      propertiesObj.choices = options
    }

    return questionBoilerplate(propertiesObj)
      .then(response => {
        answers = {...answers, ...response} // Add response to the object's answers
        return response
      })
      .catch(error => console.log(error))
  }

  this.getAnswers = function(){
    return answers
  }
}