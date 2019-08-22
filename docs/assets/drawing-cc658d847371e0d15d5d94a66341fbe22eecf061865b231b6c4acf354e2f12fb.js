paper.install(window);

window.onload = function() {
  paper.setup('myCanvas');

  var tool = new Tool();
  var myPath;

  tool.onMouseDrag = function onMouseDrag(event) {
    myPath.add(event.point);
  };

  tool.onMouseDown = function onMouseDown(event) {
    myPath = new Path();
    myPath.strokeColor = 'black';
  };
};
