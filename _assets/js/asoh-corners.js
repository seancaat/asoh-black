var square;
var smokeSymbol1, smokeSymbol2;

function setupSmokeAnim() {
  square = new Path.Rectangle(0, 0, (width * 3) / 5, (width * 3) / 5);

  var smoke1 = new Raster('img-temp/smoke-top.jpg');
  var smoke2 = new Raster('img-temp/smoke-bottom.jpg');

  smoke1.crossOrigin = 'anonymous';
  smoke2.crossOrigin = 'anonymous';

  smoke1.shadowColor = 'rgba(0, 0, 0, 0.25)';
  smoke1.shadowBlur = '4';
  smoke1.shadowOffset = 0;

  smoke2.shadowColor = 'rgba(0, 0, 0, 0.25)';
  smoke2.shadowBlur = '4';
  smoke2.shadowOffset = 0;

  smokeSymbol1 = new Symbol(smoke1);
  smokeSymbol2 = new Symbol(smoke2);
}

function slideSquare() {
  for (var i = 0; i < 8; i++) {
    enterExit(i);
  }

  function enterExit(offset) {
    var copy1, copy2;
    var spacing = 5;

    var topPoint = new Point(
      width - square.bounds.width / 2 - 2.125 * spacing * offset,
      square.bounds.width / 2 + spacing * offset
    );
    var bottomPoint = new Point(
      square.bounds.width / 2 + 2.125 * spacing * offset,
      height - square.bounds.width / 2 - spacing * offset
    );

    setTimeout(function() {
      copy1 = smokeSymbol1.place(topPoint);
      copy2 = smokeSymbol2.place(bottomPoint);
    }, offset * 80);

    setTimeout(function() {
      copy1.remove();
      copy2.remove();
    }, offset * 80 + 500);
  }
}
