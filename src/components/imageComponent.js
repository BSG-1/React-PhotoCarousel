import React from "react";

export const ImageComponent = props => {
  return (
    <div className="image-component">
      <img src={props.imageUrl} />
    </div>
  );
};
