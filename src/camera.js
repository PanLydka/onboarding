let videoDevice;
let canvas = document.getElementById('canvas');
let photo = document.getElementById('photo');

navigator.mediaDevices.getUserMedia({video: true}).then(gotMedia).catch(failedToGetMedia);

function gotMedia(mediaStream) {
  // Extract video track.
  videoDevice = mediaStream.getVideoTracks()[0];
  // Check if this device supports a picture mode...
  let captureDevice = new ImageCapture(videoDevice);
  if (captureDevice) {
    captureDevice.takePhoto().then(processPhoto).catch(stopCamera);
    captureDevice.grabFrame().then(processFrame).catch(stopCamera);
  }
}

function processPhoto(blob) {
  photo.src = window.URL.createObjectURL(blob);
}

function processFrame(imageBitmap) {
  canvas.width = imageBitmap.width;
  canvas.height = imageBitmap.height;
  canvas.getContext('2d').drawImage(imageBitmap, 0, 0);
}

function stopCamera(error) {
  console.error(error);
  if (videoDevice) videoDevice.stop();  // turn off the camera
}

photo.addEventListener('load', function () {
  // After the image loads, discard the image object to release the memory
  window.URL.revokeObjectURL(this.src);
});