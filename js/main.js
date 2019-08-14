'use strict';
//2
var img, imgSymbol;

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

var previousItem = 0;
const mouseDragHandler = function onMouseDrag(event) {
  // make sure event.item isn't an animated asset
  var item = event.item;
  var itemId = item.id;
  if (item && itemId !== previousItem.id && itemId < 28) {
    showButton(item);
    animate(itemId);

    previousItem = item;
  }
};

const mouseDownHandler = function onMouseDown(event) {
  // make sure event.item isn't an animated asset
  var item = event.item;
  var itemId = item.id;
  if (item && itemId < 28) {
    showButton(item);
    animate(itemId);
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

  switch (id - 4) {
    case 0:
      drawNeon();
      break;
    case 1:
      rise();
      break;
    case 2:
      slide(imgSymbol);
      break;
    case 3:
      drawNeon();
      break;
    case 4:
      rise();
      break;
    case 5:
      slide(imgSymbol);
      break;
    case 6:
      drawNeon();
      break;
    case 7:
      rise();
      break;
    case 8:
      slide(imgSymbol);
      break;
    case 9:
      drawNeon();
      break;
    case 10:
      rise();
      break;
    case 11:
      slide(imgSymbol);
      break;
    case 12:
      drawNeon();
      break;
    case 13:
      rise();
      break;
    case 14:
      slide(imgSymbol);
      break;
    case 15:
      drawNeon();
      break;
    case 16:
      rise();
      break;
    case 17:
      slide(imgSymbol);
      break;
    case 18:
      drawNeon();
      break;
    case 19:
      rise();
      break;
    case 20:
      slide(imgSymbol);
      break;
    case 21:
      drawNeon();
      break;
    case 22:
      rise();
      break;
    case 23:
      slide(imgSymbol);
      break;
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
