var flashColors = [
  'rgb(249,14,27)',
  'rgb(250,40,251)',
  'rgb(11,36,250)',
  'rgb(45,254,254)',
  'rgb(254,253,56)',
  'rgb(41,251,47)'
];

function setupFlash() {
  // this always needs to be in the back... maybe this should affecting html canvas directly... idk
  var flashRectangles = [];
  for (var i = 0; i < flashColors.length; i++) {
    flashRectangles[i] = new Path.Rectangle(0, 0, width, height);
    flashRectangles[i].fillColor = flashColors[i];
    flashRectangles[i].opacity = 0;
  }
  return flashRectangles;
}

function flash(rects) {
  shuffleArray(flashColors);

  for (var i = 0; i < flashColors.length; i++) {
    enterExit(rects, i);
  }

  function enterExit(r, offset) {
    setTimeout(function() {
      r[offset].opacity = 1;
    }, offset * 50);

    setTimeout(function() {
      r[offset].opacity = 0;
    }, offset * 55);
  }
}
