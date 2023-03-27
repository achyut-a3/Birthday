import React from "react";
import "./Template.css";
import photo from "../images/paris.jpg";
import photos from "../images/ireland.jpg";
import photoss from "../images/salverz.jpg";

function Template() {
  return (
    <>
      <container>
        <div className="main">
          <h1>Our Tours</h1>
          <hr className="hr"></hr>
          <div className="content">
            <div className="img">
              <img src={photo} alt="paris" height="300px"></img>
              <div className="nav">
                <h2>Best Of Paris In 7 Days Tour</h2>
                <p>
                  Paris is synonymous with the finest things
                  <br />
                  that culture can offer — in art, fashion,
                  <br />
                  food, literature, and ideas. On this tour,
                  <br /> your Paris-savvy Rick Steves guide will
                  <br />
                  immerse you in the very best of ...
                  <button className="btn">Read More</button>
                </p>
                <button className="intbtn"> Not Interested</button>
              </div>
            </div>

            <div className="img">
              <img src={photos} alt="ireland" height="300px"></img>
              <div className="nav">
                <h2>Best Of Ireland In 14 Days Tour</h2>
                <p>
                  Rick Steves' Best of Ireland tour kicks off <br />
                  with the best of Dublin, followed by Ireland's <br />
                  must-see historical sites, charming towns,
                  <br /> music-filled pubs, and seaside getaways — <br />
                  including Kinsale, the D...
                  <button className="btn"> Read More</button>
                </p>
                <button className="intbtn"> Not Interested</button>
              </div>
            </div>
            <div className="img3">
              <img
                src={photoss}
                alt="salverz"
                height="300px"
                width="450px"
              ></img>
              <div className="nav">
                <h2>Best Of Salzburg & Vienna In 8 Days Tour</h2>
                <p>
                  Let's go where classical music, towering
                  <br /> castles, and the-hills-are-alive scenery <br />
                  welcome you to the gemütlichkeit of Bavaria
                  <br /> and opulence of Austria's Golden Age. Your
                  <br /> Rick Steves guide will bring th..
                  <button className="btn"> Read More</button>
                </p>
                <button className="intbtn"> Not Interested</button>
              </div>
            </div>
          </div>
        </div>
      </container>
    </>
  );
}
export default Template;
