import React from "react";
import "./Style.css";
import download from "./download.jpg";
const Plant1 = () => {
  return (
    <>
      <div className="content1">
        <div className="pp">
          <img src={download} alt="hsfbuys" height="400" width="500"></img>
          <p>
            <b>FICUS</b> Microcarpa Ginseng
          </p>
        </div>
      </div>

      <div className="content2">
        <div className="nav">
          <p>Basic Information</p>
          <h1>Plant Care Guide</h1>
          <p>
            <br />
            Plant tend to be an afterthought in interior design.<br></br>And the
            more bad experiences you have with plants <br></br>(in other
            words,how many of themdie at your<br></br> hand),the more likely you
            are to push them to the<br></br> back burner or forget about them
            altogether.
            <br></br>However,we know that plants make us happier,<br></br>helps
            us recharge and even be more productive.
          </p>
          <br />
          <button className="but">READ MORE</button>
        </div>
      </div>
    </>
  );
};

export default Plant1;
