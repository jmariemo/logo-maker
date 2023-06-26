//require shape objects
const {Circle, Triangle, Square} = require("../lib/shape");

//circle test
test("Should return circle shape", () => {
    const circle = new Circle;
    circle.setColor("pink");
    expect(circle.render()).toEqual('<circle cx="150" cy="115" r="80" fill="pink"/>');
});

//triangle test
test("Should return triangle shape", () => {
    const triangle = new Triangle;
    triangle.setColor("pink");
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="pink"/>');
});

//square test
test("Should return square shape", () => {
    const square = new Square;
    square.setColor("pink");
    expect(square.render()).toEqual('<rect x="73" y="40" width="160" height="160" fill="pink"/>');
});