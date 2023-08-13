module.exports = class SVG {
  constructor(width, height){
    this.width = width
    this.height = height
    this.string = `<svg version="1.1" width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">`
  }

  addElement(elementString){
    this.string += "\n\t" + elementString
  }

  render(){
    return this.string + "</svg>"
  }
}