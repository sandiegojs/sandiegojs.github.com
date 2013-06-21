
// This code is nearly 100% ripped off from a https://github.com/auduno/headtrackr example
// This code was hacked in 30 minutes and should not be looked at with eyes.

var start = document.getElementById('start');
var images = document.getElementById('the-bidness');
var videoInput = document.getElementById('vid');
var canvasInput = document.getElementById('compare');
var canvasOverlay = document.getElementById('overlay');
var debugOverlay = document.getElementById('debug');
var overlayContext = canvasOverlay.getContext('2d');
canvasOverlay.style.zIndex = '100001';
debugOverlay.style.zIndex = '100002';

// add some custom messaging

statusMessages = {
  "whitebalance" : "checking for stability of camera whitebalance",
  "detecting" : "Detecting face",
  "hints" : "Hmm. Detecting the face is taking a long time",
  "redetecting" : "Lost track of face, redetecting",
  "lost" : "Lost track of face",
  "found" : "Tracking face"
};

supportMessages = {
  "no getUserMedia" : "Unfortunately, <a href='http://dev.w3.org/2011/webrtc/editor/getusermedia.html'>getUserMedia</a> is not supported in your browser. Try <a href='http://chrome.google.com/'>downloading chrome</a> or <a href='http://caniuse.com/stream'>another browser that supports getUserMedia</a>. Now using fallback video for facedetection.",
  "no camera" : "No camera found."
};

document.addEventListener("headtrackrStatus", function(event) {
  var messagep = document.getElementById('message');
  if (event.status in supportMessages) {
    messagep.innerHTML = supportMessages[event.status];
  } else if (event.status in statusMessages) {
    messagep.innerHTML = statusMessages[event.status];
  }
}, true);

var htracker = new headtrackr.Tracker({calcAngles : true, ui : false, headPosition : false});
htracker.init(videoInput, canvasInput);
htracker.start();

var imageIndex = 0;
var image = images.children[imageIndex];

setInterval(function(){
  imageIndex++;
  if (imageIndex > images.children.length - 1) imageIndex = 0;
  image = images.children[imageIndex];
},5000);

document.addEventListener("facetrackingEvent", function( event ) {
  // clear canvas
  overlayContext.clearRect(0,0,320,240);
  // once we have stable tracking, draw rectangle
  if (event.detection == "CS") {
    overlayContext.translate(event.x, event.y);
    overlayContext.rotate(event.angle-(Math.PI/2));
    var eventWidthRatio = event.width / image.width;
    var eventHeightRatio = event.height / image.height;
    var eventRatio = Math.max(eventWidthRatio, eventHeightRatio);
    var imageWidth = eventRatio * image.width;
    var imageHeight = eventRatio * image.height;
    var left = -((imageWidth)/2) >> 0;
    var top = -(event.height/2) >> 0;
    overlayContext.drawImage(image, left, top, imageWidth, imageHeight);
    overlayContext.rotate((Math.PI/2)-event.angle);
    overlayContext.translate(-event.x, -event.y);
  }
});

