import React from "react";

const GameCircle = ({ id, onCircleClicked }) => {
  return (
    <>
      <div
        className={`gameCircle ${id % 2 === 0 ? "odd" : "even"}`}
        onClick={() => onCircleClicked(id)}
      ></div>
    </>
  );
};

export default GameCircle;
