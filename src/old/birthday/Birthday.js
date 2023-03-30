import { useState } from "react";
import "./birthday.css";
let data = [
  { name: "Aayush Bastola", age: 36, img: require("./dog.jpg") },
  { name: "Riju Bastola", age: 32, img: require("./dog2.jpg") },
  { name: "Raju Bastola", age: 41, img: require("./dog3.jpg") },
  { name: "Aarzu Bastola", age: 36, img: require("./dog4.jpg") },
];

function Birthday() {
  const [clear, setClear] = useState(data);
  function handleClear() {
    setClear([]);
  }
  return (
    <>
      <div className="main">
        <div className="navgation">
          <h2>{clear.length} Birthday Today</h2>
          {clear.map((aa) => (
            <div className="r1">
              <img src={aa.img} width="100px" height="100"></img>
              <div className="info">
                <h2> {aa.name}</h2>
                <p>{aa.age}</p>
              </div>
            </div>
          ))}
          <button
            onClick={() => {
              handleClear();
            }}
          >
            clear all
          </button>
        </div>
      </div>
    </>
  );
}

export default Birthday;
