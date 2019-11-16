//= require load-image
//= require paper
//= require utils
//= require constants
//= require controls
//= require neon
//= require raster-slide
//= require rising-circles
//= require borders
//= require asoh-corners
//= require background-flash
//= require dots
//= require grid-pics
//= require side-dots
//= require sink
//= require split
//= require rectangle-grow

"use strict";

//2
var img,
  imgSymbol,
  splits,
  borderRect,
  rectTiles,
  sinkRects,
  flashRectangles,
  growingRects,
  scatteredDrops,
  groupedDrops,
  hihatCircles;
var controlLayer, animationLayer;
var sounds = [].slice.call(
  document.querySelector(".sounds").querySelectorAll("audio")
);
var numberSounds = sounds.length;
var width;
var height;
var mid;

function disableAnimation() {
  if (menu && !menu.classList.contains('hidden')) return true;
  return false;
}

function playSound(id) {
  if (disableAnimation()) return;
  var matchedSound = soundToAnim[id.toString()];
  if (!matchedSound) return;
  var soundName = matchedSound.sound;
  var sound = document.querySelector("audio[src*='" + soundName + "']");
  if (!sound) return;
  try {
    if (sound.paused) {
      var playPromise = sound.play();
      if (playPromise !== undefined) {
        playPromise
          .then(_ => {
            // Automatic playback started!
            // Show playing UI.
          })
          .catch(error => {
            console.log(error);
          });
      }
    } else {
      sound.currentTime = 0;
    }
  } catch (e) {
    console.log(e);
  }
}

var previousItem = 0;
const mouseDragHandler = function onMouseDrag(event) {
  // make sure event.item isn't an animated asset
  var item = event.item;
  var index = item ? item.index : null;
  if (index && index !== previousItem.index && controlLayer.isChild(item)) {
    showButton(item);
    previousItem = item;
    if (isNaN(index)) return;
    animate(index);
    playSound(index);
  }
};

const mouseDownHandler = function onMouseDown(event) {
  // make sure event.item isn't an animated asset
  var item = event.item;
  var index = item ? item.index : null;
  if (item && controlLayer.isChild(item)) {
    showButton(item);
    if (isNaN(index)) return;
    animate(index);
    playSound(index);
  }
};

const keyDownHandler = function onKeyDown(event) {
  const letterPosition = alphabet.indexOf(event.key);
  if (letterPosition > -1) {
    showButton(controlLayer.children[letterPosition]);
    animate(letterPosition);
    playSound(letterPosition);
  }
};

function showButton(button) {
  if (disableAnimation()) return;
  var tween = button.tween({ opacity: 0.1 }, 50).then(function () {
    button.tween({ opacity: 0 }, 100);
  });
  setTimeout(function () {
    tween.stop();
  }, 105);
}

function animate(id) {
  if (disableAnimation()) return;
  const item = soundToAnim[id.toString()];
  if (item) item.animation();
}

function triggerRandomAnimations() {
  for (var i = 0; i < 5; i++) {
    var index = Math.abs(Math.floor(Math.random() * 25));
    animate(index);
    playSound(index);
  }
}

function resizeHandler() {
  controlLayer.removeChildren();
  width = window.innerWidth;
  height = window.innerHeight;
  drawControls(width, height);
  img.position = new Point(mid.x * 1.25, height - img.bounds.height / 2);
}

function setupAnimations() {
  animationLayer.activate();
  setupSmokeAnim();
  setUpRasters();
  //to be called when loading animation is running
  flashRectangles = setupFlash();
  borderRect = setupBorder();
  rectTiles = setupTiles();
  // risingCircles = setupRisingCircles();
  hihatCircles = setupSideDots(14);
  scatteredDrops = setupDrops(10, "scatter");
  groupedDrops = setupDrops(10, "group");
  sinkRects = setupSink(5);
  splits = setupSplit(2);
  growingRects = setupGrowingRects();
}

paper.install(window);

window.onload = function () {
  paper.setup("myCanvas");
  var tool = new Tool();
  controlLayer = new paper.Layer();
  animationLayer = new paper.Layer();
  controlLayer.moveAbove(animationLayer);
  controlLayer.setName("Controls");
  animationLayer.setName("Animations");

  width = window.innerWidth;
  height = window.innerHeight;
  mid = { x: width / 2, y: height / 2 };
  drawControls(width, height);
  setupAnimations();
  triggerRandomAnimations();

  paper.view.onResize = resizeHandler;
  tool.onMouseDrag = mouseDragHandler;
  tool.onMouseDown = mouseDownHandler;
  tool.onKeyDown = keyDownHandler;
};
