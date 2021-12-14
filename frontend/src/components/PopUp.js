import React from "react";
import "./css styles/PopUp.css";
import PopUpInfo from "./PopUpInfo";

const PopUp = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <PopUpInfo />
        {props.content}
      </div>
    </div>
  );
};

export default PopUp;
