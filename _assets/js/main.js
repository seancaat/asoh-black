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

'use strict';

//2
var img,
  imgSymbol,
  splits,
  borderRect,
  tiles,
  dropRects,
  sinkRects,
  flashRectangles,
  growingRects,
  hihatCircles;
var controlLayer, animationLayer;
var sounds = [].slice.call(
  document.querySelector('.sounds').querySelectorAll('audio')
);
var numberSounds = sounds.length;
var width;
var height;
var mid;

function setUpRasters() {
  img = new Raster('img-temp/asoh-slide.png');

  img.onLoad = function() {
    img.visible = true;
    img.position = new Point(mid.x * 1.25, height - img.bounds.height / 2);
    img.selected = true;
    imgSymbol = new SymbolDefinition(img);
  };
}

function playSound(id) {
  var sound = soundToAnim(id.toString()).sound();
  if (!sound) return;
  try {
    if (sound.paused) {
      sound.play();
    } else {
      sound.currentTime = 0;
    }
  } catch (e) {
    console.log(e);
  }
}

var previousItem = 0;
const mouseDragHandler = function onMouseDrag(event) {
  animationLayer.activate();
  // make sure event.item isn't an animated asset
  var item = event.item;
  var itemId = item ? item.id : null;
  if (item && itemId !== previousItem.id && controlLayer.isChild(item)) {
    var shiftedId = mapItemId(id - 4); // because id's are indexed 4-27. id's go down then to the right.
    showButton(item);
    animate(shiftedId);
    playSound(shiftedId);
    previousItem = item;
  }
};

const mouseDownHandler = function onMouseDown(event) {
  animationLayer.activate();
  // make sure event.item isn't an animated asset
  var item = event.item;
  var itemId = item ? item.id : null;
  if (item && controlLayer.isChild(item)) {
    var shiftedId = mapItemId(id - 4); // because id's are indexed 4-27. id's go down then to the right.
    showButton(item);
    animate(shiftedId);
    playSound(shiftedId);
  }
};

function showButton(button) {
  var tween = button.tween({ opacity: 0.1 }, 50).then(function() {
    button.tween({ opacity: 0 }, 100);
  });
  setTimeout(function() {
    tween.stop();
  }, 105);
}

function animate(id) {
  console.log('run animation ' + id);
  soundToAnim(id.toString()).animation();
}

function triggerRandomAnimations() {
  for (var i = 0; i < 5; i++) {
    var itemId = Math.abs(Math.floor(Math.random() * 27));
    console.log('id', itemId);
    animate(itemId);
    playSound(itemId);
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
  setupSmokeAnim();
  setUpRasters();
  //to be called when loading animation is running
  flashRectangles = setupFlash();
  borderRect = setupBorder();
  tiles = setupTiles();
  hihatCircles = setupSideDots(14);
  dropRects = setupDrops(10);
  sinkRects = setupSink(5);
  splits = setupSplit(2);
  growingRects = setupGrowingRects();
}

paper.install(window);

window.onload = function() {
  paper.setup('myCanvas');
  var tool = new Tool();
  controlLayer = new paper.Layer();
  animationLayer = new paper.Layer();
  controlLayer.moveAbove(animationLayer);
  controlLayer.setName('Controls');
  animationLayer.setName('Animations');

  width = window.innerWidth;
  height = window.innerHeight;
  mid = { x: width / 2, y: height / 2 };
  drawControls(width, height);
  setupAnimations();
  triggerRandomAnimations();

  paper.view.onResize = resizeHandler;
  tool.onMouseDrag = mouseDragHandler;
  tool.onMouseDown = mouseDownHandler;
};
