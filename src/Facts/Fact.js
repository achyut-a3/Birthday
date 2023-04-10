import React, { useState } from "react";
// import Fact from "./Facts/Fact";

let facts = {
  Science: [
    "Water can exist in three states at the same time. ",
    "The Majority of Earth's Oxygen Is Produced by Oceans.",
    " Animals Use Earth's Magnetic Field to Know Their Location.",
    "Helium Works Against Gravity",
  ],
  Math: [
    "The word “hundred” comes from the old Norse term, “hundrath”, which actually means 120 and not 100.",
    "In a room of 23 people there's a 50% chance that two people have the same birthday.",
    "Most mathematical symbols weren't invented until the 16th century.",
  ],
  social: [
    "The typewriter is the longest word that can be made using only the letters on the top row of the keyboard.",
    "The popular game of Snakes and Ladders originated in India.",
    "The most common name in the world is Mohammed.",
  ],
};
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let keys;
function Fact() {
  // console.log(facts);

  const [ranString, setRanString] = useState("");

  function Abc() {
    let NumberOfKeys = getRandomInt(3);

    console.log(NumberOfKeys);

    let SingleFact = Object.keys(facts)[NumberOfKeys];

    let SingleElement = Object.values(facts[SingleFact]);

    let SingleElementLength = SingleElement.length;

    let RandomArrayNumber = getRandomInt(SingleElementLength);

    console.log(SingleElement[RandomArrayNumber]);

    keys = SingleElement[RandomArrayNumber];
    setRanString(keys);
  }

  return (
    <>
      <button onClick={() => Abc()}>click me</button>
      <div>{ranString}</div>
    </>
  );
}

export default Fact;
