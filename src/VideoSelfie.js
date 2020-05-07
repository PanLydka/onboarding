import React from "react";
import Camera from './Camera';

const VideoSelfie = () => {
  const constraints = {
    video: {
      width: 1280,
      height: 720,
    },
  };


  return (
   <>
   
      
      <h1 className="paragraph"> Strzel <strong> selfie </strong></h1>
      <Camera constraints={constraints} />
     
    </>
  );
};

export default VideoSelfie;
