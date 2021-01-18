// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import animals from "./data";
import cars from "./practice";

console.log(animals);

const [cat, dog] = animals;

console.log(cat);
console.log(dog);

// const {name: catName, sound: catSound}  = cat;

// console.log(catName);
// console.log(catSound);

const { name = "Fluffy", sound = "Purrrr" } = cat;

console.log(name);
console.log(sound);

const [honda, tesla] = cars;
console.log(honda);
console.log(tesla);

const {
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;
const {
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;
console.log(hondaTopSpeed);
console.log(teslaTopSpeed);

const {
  coloursByPopularity: [hondaTopColour]
} = honda;
const {
  coloursByPopularity: [teslaTopColour]
} = tesla;
console.log(hondaTopColour);
console.log(teslaTopColour);

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
