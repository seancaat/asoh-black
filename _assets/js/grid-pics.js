function setupTiles() {
  var arr = [];

  var colors = [
    'rgb(249,14,27)',
    'rgb(250,40,251)',
    'rgb(11,36,250)',
    'rgb(45,254,254)',
    'rgb(254,253,56)',
    'rgb(41,251,47)'
  ];

  for (var i = 0; i < colors.length; i++) {
    var r = new Path.Rectangle(0, 0, width / 3, height / 12);
    r.fillColor = colors[i];
    r.strokeColor = 'rgba(0,0,0,0.2)';

    var symbol = new SymbolDefinition(r);
    arr.push(symbol);
  }

  return arr;
}

var tileX = [(width * 1) / 6, (width * 3) / 6, (width * 5) / 6];

function delay(symbol, i) {
  var copy;

  setTimeout(function() {
    copy = symbol.place(new Point(randof(tileX), Math.random() * height));
  }, i * 50);

  setTimeout(function() {
    copy.remove();
  }, i * 75);
}
