import React from "react";

export const ProgressComponent = props => {
  const { currentIndex, totalImages } = props;
  return (
    <div className="progress-component">
      <p>
        You are viewing {currentIndex} of {totalImages} German Shepherds
      </p>
    </div>
  );
};
