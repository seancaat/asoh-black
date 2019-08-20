'use strict';
//2
var img, imgSymbol;
var controlLayer, animationLayer;
var sounds = [].slice.call(
  document.querySelector('.sounds').querySelectorAll('audio')
);
var numberSounds = sounds.length;

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
  if (item && itemId !== previousItem.id && itemId < 28) {
    showButton(item);
    animate(itemId);
    playSound(itemId);

    previousItem = item;
  }
};

const mouseDownHandler = function onMouseDown(event) {
  animationLayer.activate();
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

function triggerRandomAnimations() {
  for (var i = 0; i < 5; i++) {
    var itemId = Math.floor(Math.random() * 27);
    console.log('id', itemId);
    animate(itemId);
    playSound(itemId);
  }
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

  drawControls();
  setUpRasters();
  triggerRandomAnimations();
  tool.onMouseDrag = mouseDragHandler;
  tool.onMouseDown = mouseDownHandler;
};

document.querySelector('.toggle-menu').addEventListener('click', toggleMenu);

function toggleMenu() {
  document.querySelector('.menu').classList.toggle('hidden');
}
