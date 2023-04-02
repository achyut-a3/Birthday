import React from "react";
import Header from "../../../Components/Header";

import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="mainbox">
      <div className="box container ">
        <Header />
        <div className="row box2 ">
          <div className="left col-4">
            <p className="speed">
              <img
                src={"Images/emoji.jpg"}
                alt="emoji"
                height="20px"
                width="20px"
              ></img>
              <br />
              SPEED UP <br />
              COMMUNICATION
            </p>
            <br />
            <img className="sunshine" src="Images/sunshine.png" alt="sun"></img>
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
                src={"Images/instagram.png"}
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
                src={"Images/fb.png"}
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
                height="2px"
                width="20px"
              ></img>
              <span>Great Project</span>
              <p className="num">212+ Done </p>
              <p>2.1% vs last 7 days</p>
            </div>
            <img className="image2" src={"Images/photo.jpg"} alt="man"></img>
            <p className="ui">UI Designer</p>
            <div className="searchbtn">
              <img
                src={"Images/search.png"}
                alt="search"
                height="20px"
                width="20px"
              ></img>
              <input type="text" id="name" placeholder="Use Research"></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
