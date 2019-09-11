// Functions used across more than one file (or that could be)
function randof(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function pointInCircle(n) {
  // n is the radius
  var u = Math.random();
  var v = Math.random();

  var theta = u * 2.0 * Math.PI;
  var phi = Math.acos(2.0 * v - 1.0);
  var r = Math.cbrt(Math.random());

  var x = r * Math.sin(phi) * Math.cos(theta);
  var y = r * Math.sin(phi) * Math.sin(theta);

  return new Point(n * x, n * y);
}

function mapItemId(value, in_min, in_max) {
  return ((value - in_min) * 24) / (in_max - in_min);
}
