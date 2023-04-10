import React from "react";
import "./Menuheader.css";
import data from "../../page/SingleMenu/singlefilemenu";

const Menuheader = (props) => {
  const filterbreakfast = () => {
    const breakfastItems = data.filter((item) => item.type === "breakfast");

    props.setMenuItems(breakfastItems);
  };

  const lunch = () => {
    const lunchItems = data.filter((item) => item.type === "lunch");

    props.setMenuItems(lunchItems);
  };

  const shakes = () => {
    const shakesItems = data.filter((item) => item.type === "shakes");

    props.setMenuItems(shakesItems);
  };

  const all = () => {
    props.setMenuItems(data);
  };
  return (
    <>
      <div className="fullscreen">
        <h2>Our Menu</h2>
        <div className="title-underline"></div>
        <div className=" navsections ">
          <button className="butn" onClick={all}>
            All
          </button>
          <button onClick={filterbreakfast} className="butn">
            breakfast
          </button>
          <button className="butn" onClick={lunch}>
            Lunch
          </button>
          <button className="butn" onClick={shakes}>
            Shakes
          </button>
        </div>
      </div>
    </>
  );
};

export default Menuheader;
