import React from "react";

const Slide = (props) => {
  const { imgUrl } = props;
  const style = {
    color: "red",
    backgroundImage: `url(${imgUrl})`,
    height: "100%",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return <div style={style}></div>;
};

export default Slide;
