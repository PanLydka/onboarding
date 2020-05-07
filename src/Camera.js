import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
let ratio, w, h, button, canvas, video, context;

const Camera = ({ constraints }) => {
  const [cameraActive, setCameraActive] = useState(true);
  const [cameraStop, setCameraStop] = useState(false);

 
  

  navigator.getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia;

  

  useEffect(() => {

    button = document.getElementById("b");
    canvas = document.getElementById("c");
    video = document.querySelector("video");
    context = canvas.getContext("2d");
    
    load();
  }, [])

  const load = () => {
    if (navigator.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function (mediaStream) {
  
    
          video.srcObject = mediaStream;
          video.onloadedmetadata = function (e) {
            video.play();
            ratio = video.videoWidth / video.videoHeight;
            w = video.videoWidth - 100;
            h = parseInt(w / ratio, 10);
            canvas.width = w;
            canvas.height = h;
            
           
          };
        
        })
        .catch(function (err) {
          console.log(err.name + ": " + err.message);
        }); // always check for errors at the end.
    }
  }

  const makePhoto = () => {
    context.fillRect(0, 0, w, h);
    context.drawImage(video, 0, 0, w, h);
    video.style.display = "none";
    canvas.style.display = "initial";

    setCameraActive(false);
    setCameraStop(true);
  }

  const unlockCamera = () => {
    video.style.display = "initial";
    canvas.style.display = "none";
    
    setCameraStop(false);
    setCameraActive(true);
  }

  return (
    <>
      <div class="camera-container">
        <div className="camera-button">
          {cameraActive && <Button
            variant="contained"
            color="secondary"
            startIcon={<PhotoCamera />}
            id="b"
            onClick={() => makePhoto()}
          >
            Zrób zdjęcie
          </Button>}

          {cameraStop &&
            <> 
            <Button
              variant="contained"
              color="secondary"
              id="b"
              onClick={() => unlockCamera()}
            >
              Zrób ponownie   
            </Button>
            </>
          }

        </div>
        <video> </video>

        <canvas id="c"></canvas>
      </div>
    </>
  );
};

export default Camera;

