//1 to preserve memory, should maybe do 2, three sets of symbols and cycle through
// or if press during
function rise(width, height) {
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
