import React from "react";

const GameCircle = ({ id, className, onCircleClicked }) => {
  return (
    <>
      <div
        className={className}
        onClick={() => onCircleClicked(id)}
      ></div>
    </>
  );
};

export default GameCircle;
