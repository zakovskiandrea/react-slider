import React from "react";
import { arrows } from "../../images";

const Arrow = (props) => {
  const { direction, clicked } = props;
  const imgUrl = arrows[direction];
  const rightPositioning = direction === "right" ? "0" : "100px";

  const style = {
    backgroundImage: `url(${imgUrl})`,
    position: "absolute",
    height: "100px",
    width: "100px",
    bottom: "0",
    right: rightPositioning,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    cursor: "pointer",
  };
  return <div onClick={clicked} style={style}></div>;
};

export default Arrow;
