const shapes = require("./shapes")

test("Tests if the circle renders properly,", () => {
  const circle = new shapes.Circle(150, 100, 80, "green");
  expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green"></circle>');
})

test("Tests if the triangle renders properly,", () => {
  const triangle = new shapes.Triangle("150,0 0,260 300,260", "green");
  expect(triangle.render()).toEqual('<polygon points="150,0 0,260 300,260" fill="green"/>');
})

test("Tests if the square renders properly,", () => {
  const square = new shapes.Square(55, 10, 190, "green");
  expect(square.render()).toEqual('<rect x="55" y="10" width="190" height="190" fill="green"/>');
})