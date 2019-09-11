var numRasters = 5;

function slide(symbol, mid, height) {
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
