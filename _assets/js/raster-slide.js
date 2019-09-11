//= require asoh-slide.png

function setUpRasters() {
  img = new Raster('asoh-slide.png');

  img.onLoad = function() {
    img.visible = true;
    img.position = new Point(mid.x * 1.25, height - img.bounds.height / 2);
    img.selected = true;
    imgSymbol = new SymbolDefinition(img);
  };
}

function slide(symbol, mid, height) {
  var numRasters = 5;
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
