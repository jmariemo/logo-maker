// constants to pull in required inquirer module and shape + svg objects
const  inquirer = require("inquirer");
const {Triangle, Circle, Square} = require("./lib/shape.js");
const {writeFile} = require("fs/promises");
const SVG = require("./lib/svg.js");


// function uses inquirer to ask user for desired logo characteristics
function createLogo() {
inquirer
    .prompt([
    {
        type: "input",
        name: "charsLogo",
        message: "Enter up to 3 characters for logo:",
        validate: charsInput => {
            if (charsInput) {
                return true;
            } else {
                console.log("Enter between 1 and 3 characters:")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "charsColor",
        message: "Enter color for characters:",
    },
    {
        type: "list",
        name: "shapeType",
        message: "Pick one of the following shapes:",
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter color for shape:",
    },

    ])

    // use logo characteristics to generate svg file
    .then (({ charsLogo, charsColor, shapeType, shapeColor}) => {
    var shape;
    switch (shapeType) {
        case "Circle":
        shape = new Circle();
        break;
        case "Triangle":
        shape = new Triangle();
        break;
        case "Square":
        shape = new Square();
        break;
    }
    // generates the new logo
    shape.setColor(shapeColor);
    const svg = new SVG();
    svg.setText(charsLogo, charsColor);
    svg.setShape(shape)
    const svgMarkup = svg.render();
    return writeFile("logo.svg", svgMarkup);
    })
    .then(() => {
    console.log("Success! Logo generated.")
    })
    .catch((error) => {
    console.log("Error!", error)
    });
}

// call createLogo function
createLogo();