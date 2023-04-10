import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "./singlefilemenu";

const SingleMenu = () => {
  const { id } = useParams();
  // let id = Params.id;
  const navigate = useNavigate();
  const items = data.filter((item) => item.id == id);

  return (
    <div>
      <div>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
      {items[0]?.name}
    </div>
  );
};

export default SingleMenu;
