import React from "react";
import Camera from './Camera';

const VideoBackCard = () => {

  const constraints =    {
    video: {
      width: 1280,
      height: 720,
      facingMode: {
        exact: "environment",
      },
    },
  };

  return (
    <>
      <h1 className="paragraph"> Wykonaj zdjecie <strong> dowodu z tyłu </strong></h1>
      <Camera constraints={constraints} />
    </>
  );
};

export default VideoBackCard;
