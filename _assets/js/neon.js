// 0
function drawNeon(width, height) {
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
