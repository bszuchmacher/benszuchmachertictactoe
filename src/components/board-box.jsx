import React from "react";

export const Box = (props) => {
  return (
    <button style={{height:"140px", width: "140px", fontSize:"48px"}} className="board_box" onClick={props.onClick}>
      {props.value}
    </button>
  );
};
