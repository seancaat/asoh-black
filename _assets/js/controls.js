var container;
var minControlId, maxControlId;

function drawControls(width, height) {
  controlLayer.activate();

  container = new Rectangle(0, 0, width, 0.8375 * height);
  container.y += 45; // magic number, need to generalize // figure out how to consolidate with typography
  container.strokeColor = '#ff0000';
  container.fillColor = 'blue';
  var rect = new Path.Rectangle(container);

  var button = new Path.Rectangle(
    container.topLeft.x,
    container.topLeft.y,
    container.width / 3,
    container.height / 8
  );
  button.fillColor = 'red';
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
  console.log(buttons);
  setControlRange();
}

function setControlRange() {
  console.log(controlLayer.children);
}