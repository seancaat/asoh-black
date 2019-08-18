'use strict';
//2
var img, imgSymbol;
var sounds = [].slice.call(
  document.querySelector('.sounds').querySelectorAll('audio')
);

function setUpRasters() {
  img = new Raster(
    'https://cdn.glitch.com/ef3cac75-95ef-49cd-a455-eb9c81da99b8%2F2.png?v=1565156022738'
  );

  img.onLoad = function() {
    img.visible = true;
    img.position = new Point(mid.x * 1.25, height - img.bounds.height / 2);
    img.selected = true;
    imgSymbol = new SymbolDefinition(img);
  };
}

function playSound(id) {
  var shiftedId = id - 4; // because id's are indexed 4-27. id's go down then to the right.
  var sound = sounds[shiftedId];
  if (sound.paused) {
    sound.play();
  } else {
    sound.currentTime = 0;
  }
}

var previousItem = 0;
const mouseDragHandler = function onMouseDrag(event) {
  // make sure event.item isn't an animated asset
  var item = event.item;
  var itemId = item ? item.id : null;
  if (item && itemId !== previousItem.id && itemId < 28) {
    showButton(item);
    animate(itemId);
    playSound(itemId);

    previousItem = item;
  }
};

const mouseDownHandler = function onMouseDown(event) {
  // make sure event.item isn't an animated asset
  var item = event.item;
  var itemId = item ? item.id : null;
  if (item && itemId < 28) {
    showButton(item);
    animate(itemId);
    playSound(itemId);
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
  var shiftedId = id - 4;
  console.log('run animation ' + shiftedId);
  if (shiftedId % 3) {
    drawNeon();
  } else if ((shiftedId - 1) % 3) {
    rise();
  } else if ((shiftedId - 2) % 3) {
    slide(imgSymbol);
  }
}

paper.install(window);

window.onload = function() {
  paper.setup('myCanvas');

  drawControls();
  setUpRasters();
  var tool = new Tool();

  tool.onMouseDrag = mouseDragHandler;
  tool.onMouseDown = mouseDownHandler;
};