import React from "react";

export const Progresscomponent = props => {
  // const { currentIndex, totalImages } = props;
  return (
    <div>
      <p>
        You are viewing {props.currentIndex} of {props.totalImages} German
        Shepherds
      </p>
    </div>
  );
};
