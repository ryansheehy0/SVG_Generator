class SVGText {
  constructor(x, y, fontSize, color){
    this.x = x
    this.y = y
    this.fontSize = fontSize
    this.color = color
    this.text = "SVG"
  }

  setText(text){
    this.text = text
  }

  render(){
    return `<text x="${this.x}" y="${this.y}" font-size="${this.fontSize}" text-anchor="middle" fill="${this.color}">${this.text}</text>`
  }
}

module.exports = SVGText