import React from "react";

const Dot = (props) => {
  return (
    <span
      style={{
        padding: `${props.active ? "8px" : "3px"}`,
        marginRight: "15px",
        cursor: "pointer",
        borderRadius: "50%",
        background: `${
          props.active ? "rgba(255,255,255, 0.8)" : "rgba(255,255,255, 0.5)"
        }`,
      }}
    />
  );
};

const Dots = (props) => {
  const { slides, activeSlide } = props;
  return (
    <div
      style={{
        position: "absolute",
        bottom: "25px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {slides.map((slide, i) => (
        <Dot key={slide} active={activeSlide === i} />
      ))}
    </div>
  );
};

export default Dots;
