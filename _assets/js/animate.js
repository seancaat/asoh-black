var width = window.innerWidth;
var height = window.innerHeight;
var vertical = width < height ? true : false;
var mid = { x: width / 2, y: height / 2 };

function drawControls() {
  controlLayer.activate();

  var container = new Rectangle(0, 0, width, 0.8375 * height);
  container.y += 45; // magic number, need to generalize // figure out how to consolidate with typography
  container.strokeColor = '#ff0000';
  container.fillColor = 'blue';
  var rect = new Path.Rectangle(container);

  // rect.selected = true;

  var button = new Path.Rectangle(
    container.topLeft.x,
    container.topLeft.y,
    container.width / 3,
    container.height / 8
  );
  button.fillColor = new Color(0.2, 0.2, 0.2);
  button.opacity = 0;
  button.visible = false;

  var buttons = [];
  buttons[0] = [];
  buttons[1] = [];
  buttons[2] = [];

  var columnHeight = 8;

  for (var i = 0; i < buttons.length; i++) {
    for (var j = 0; j < columnHeight; j++) {
      var copy = button.clone();
      copy.visible = true;

      var x =
        container.topLeft.x +
        (i * container.width) / 3 +
        button.bounds.width / 2;
      var y =
        container.topLeft.y +
        (j * container.height) / 8 +
        button.bounds.height / 2;

      copy.position = new Point(x, y);
      //id's start at 4 and go to 27.
      buttons[i].push(copy);
    }
  }
}

// 0
function drawNeon() {
  for (var i = 0; i < 12; i++) {
    var c = new Path.Line(
      new Point(width * 0.25 - 12, ((i + 3) * height) / 20),
      new Point(width * 0.75 + 12, ((i + 6) * height) / 20)
    );
    c.strokeWidth = 5;
    c.strokeColor = 'white';
    c.shadowColor = 'red';
    c.shadowBlur = 12.5;
    c.strokeCap = 'round';

    c.bounds.width = 0.01;
    c.bounds.height = 0.01;
    c.opacity = 0.01;

    enterExit(c, i);

    function enterExit(path, offset) {
      setTimeout(function() {
        path.tween(
          {
            'bounds.width': 0.564 * width,
            'bounds.height': 0.133 * height,
            opacity: 1
          },
          { easing: 'linear', duration: 100 + 10 * offset }
        );
      }, offset);

      setTimeout(function() {
        path.tween(
          { 'bounds.width': 0.01, 'bounds.height': 0.01, opacity: 0.01 },
          { easing: 'linear', duration: 100 + 5 * offset }
        );
      }, offset + 50 + 12 * 50);
    }
  }
}

//1 to preserve memory, should maybe do 2, three sets of symbols and cycle through
// or if press during
function rise() {
  var minRadius = width / 20;
  var maxRadius = width / 4;
  var colors = ['#2AD4BD', '#F9F04D', '#FF6F55', '#2A40D4']; // teal, yellow, red, purple

  for (var i = 0; i < 5; i++) {
    var c = new Path.Circle(
      new Point(Math.random() * width, height + minRadius + maxRadius),
      minRadius + Math.random() * maxRadius
    );
    c.fillColor = colors[Math.floor(Math.random() * colors.length)];
    c.shadowColor = new Color(0, 0, 0, 0.25);
    c.shadowBlur = '4';
    c.shadowOffset = new Point(0, 4);
    // c = riseCircles[i]
    enterExit(c, i + c.bounds.width / 5);

    function enterExit(path, offset) {
      setTimeout(function() {
        path.tween(
          { 'position.y': Math.random() * height },
          {
            easing: 'easeOutCubic',
            duration: 400 - (10 * path.bounds.width) / offset
          }
        );
      }, offset);

      setTimeout(function() {
        path.tween(
          { 'position.y': height + minRadius + maxRadius },
          { easing: 'easeInQuad', duration: 400 - path.bounds.width / offset }
        );
      }, offset + 50 + 5 * 75);
    }
  }
}
var numRasters = 5;

function slide(symbol) {
  for (var i = 0; i < numRasters; i++) {
    enterExit(symbol, i);
  }

  function enterExit(symbol, offset) {
    if (!symbol) return;
    var copy;

    setTimeout(function() {
      copy = symbol.place();
      copy.position.x = mid.x * 1.25 - offset * copy.bounds.width * 0.05;
      copy.position.y = height - copy.bounds.height / 2;
    }, offset * 100);

    setTimeout(function() {
      copy.remove();
    }, offset * 100 + numRasters * 100);
  }
}
