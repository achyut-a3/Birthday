import React from "react";
import Header from "../../../Components/Header";

import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="main">
      <div className="box container ">
        <div className="box2 ">
          <Header />
          <div className="left col-4">
            <p className="speed">
              <img
                src={"Image/emoji.jpg"}
                alt="emoji"
                height="20px"
                width="15px"
              ></img>
              <br />
              SPEED UP <br />
              COMMUNICATION
            </p>
            <br />
            <p className="name">Hi I'm Samrat</p>

            <p className="studio">
              Au Studio is the place for everything related to <br />a project,
              to-do-list or communication.
            </p>
            <div className="btn2">
              <button className="hire" onclick="">
                Hire Me
              </button>

              <img className="arrow" src={"Images/arrow.png"} alt="arrow"></img>
            </div>
            <div className="socialmedia">
              <img
                src={"Images/insta.png"}
                alt="insta"
                width="50px"
                height="30px"
              ></img>
              <img
                src={"Images/twitter.png"}
                alt="twitter"
                width="50px"
                height="30px"
              ></img>
              <img
                src={"Images/facebook.png"}
                alt="facebook"
                width="50px"
                height="30px"
              ></img>
            </div>
            <br />
            <br />
            <img
              src={"Images/arrow1.png"}
              alt="arrow"
              width="50px"
              height="40px"
            ></img>
          </div>

          <div className="right col-6 offset-2">
            <div className="project">
              <img
                src={"Images/emoji.jpg"}
                alt="emoji"
                height="20px"
                width="15px"
              ></img>
              <span>Great Project</span>
              <p className="num">212+ Done </p>
              <p>2.1% vs last 7 days</p>
            </div>
            <p className="ui">UI Designer</p>
            <div className="searchbtn">
              <img
                src={"Images/search.png"}
                alt="search"
                height="20px"
                width="20px"
              ></img>
              User Search
            </div>
            <img
              className="image2"
              src={"Images/ronaldo.jpg"}
              alt="ronaldo"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
