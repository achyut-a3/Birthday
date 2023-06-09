import React from "react";
import "./project.css";
import Birthday from "../../old/birthday/Birthday";
import Header from "../../Components/Header";
const Project = () => {
  return (
    <div className="screen">
      <div className="miniscreen">
        <Header />
        <div className="birth">
          <Birthday />
        </div>
      </div>
    </div>
  );
};

export default Project;
