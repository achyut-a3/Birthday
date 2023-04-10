import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import Menuheader from "../Components/Menu/Menuheader";
import "./menu.css";
import data from "../page/SingleMenu/singlefilemenu";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const [menuItems, setMenuItems] = useState(data);
  console.log(menuItems);
  const navigate = useNavigate();
  return (
    <div>
      <div className="navgation">
        <Menuheader setMenuItems={setMenuItems} />
        <div className="right ">
          {menuItems.map((aa) => (
            <div className="r1 col-md-3">
              <img
                className="image"
                src={aa.img}
                alt="food"
                width="100%"
                height="100% "
              ></img>
              <div className="header">
                <div className="navsection">
                  <h4>{aa.name}</h4>

                  <p className="price">{aa.price}</p>
                </div>

                <p className="intro">{aa.intro}</p>
                <button onClick={() => navigate(`product/${aa.id}`)}>
                  view detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
