import React from "react";
import "./header.css";
const Header = () => {
  return (
    <>
      <div className="full">
        <div className="innerbox">
          <div className="d-flex navsection ">
            <div className="image1">
              <img
                src={"Images/pj.png"}
                alt="logo"
                height="60px"
                width="100px"
              ></img>
            </div>
            <div className="nav">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/">Portfolio</a>
                </li>
                <li>
                  <a href="project">Project</a>
                </li>
              </ul>
            </div>
            <div className="button">
              <button className="btn" onClick="">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
