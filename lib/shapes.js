class Shape {
  constructor(x, y, color){
    this.x = x
    this.y = y
    this.color = color
  }

  render(){}
}

class Circle extends Shape {
  constructor(x, y, radius, color){
    super(x, y, color)
    this.radius = radius
  }

  render(){
    return `<circle cx="${this.x}" cy="${this.y}" r="${this.radius}" fill="${this.color}"></circle>`
  }
}

class Triangle extends Shape {
  constructor(points, color){
    super(0, 0, color)
    this.points = points // Array of points
      // Ex: 150,0 0,260 300,260
  }

  render(){
    return `<polygon points="${this.points}" fill="${this.color}"/>`
  }
}

class Square extends Shape {
  constructor(x, y, width, color){
    super(x, y, color)
    this.width = width
  }

  render(){
    return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.width}" fill="${this.color}"/>`
  }
}

//Exporting
module.exports = {Circle, Triangle, Square}
