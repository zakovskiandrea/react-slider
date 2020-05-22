import React from "react";
import Slide from "../Slide/Slide";

const Slider = (props) => {
  const { slides, translate, transition, width } = props;

  const style = {
    width: `${width}px`,
    height: "100%",
    display: "flex",
    transform: `translateX(-${translate}px)`,
    transition: `transform cubic-bezier(0.95, 0.11, 1, 0.67) ${transition}s`,
  };

  return (
    <div style={style}>
      {slides.map((img) => (
        <Slide key={img} imgUrl={img} />
      ))}
    </div>
  );
};

export default Slider;
