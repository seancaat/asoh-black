function setupSideDots(num) {
  var circle = new Path.Circle(0, 0, width / 4.25);
  circle.fillColor = 'beige'; // random colors or mask pic
  circle.strokeColor = 'black';
  circle.strokeWidth = 1;
  circle.shadowColor = 'rgb(0,0,0,0.5)';
  circle.shadowBlur = 1;

  var circleSymbol = new SymbolDefinition(circle);
  var arr = [];

  for (var i = 0; i <= num + 1; i++) {
    if (i % 2 === 0) {
      var c = circleSymbol.place(
        new Point(width + width / 3.5, ((i - 1) * height) / num)
      );
    } else {
      var c = circleSymbol.place(
        new Point(0 - width / 3.5, (i * height) / num)
      );
    }

    arr.push(c);
  }

  return arr;
}

function dropSideDots(group) {
  for (var i = 0; i < group.length; i++) {
    enterExit(group, i);
  }

  function enterExit(group, i) {
    var dest;
    var ret;
    if (i % 2 === 0) {
      dest = mid.x / 2;
      ret = 0 - width / 3.5;
    } else {
      dest = mid.x * 1.5;
      ret = width + width / 3.5;
    }

    setTimeout(function() {
      group[group.length - 1 - i]
        .tween(
          {
            'position.x': dest
          },
          {
            easing: 'easeOutQuint',
            duration: 400
          }
        )
        .then(function() {
          group[group.length - 1 - i].tween(
            { 'position.x': ret },
            { easing: 'easeInQuint', duration: 400 }
          );
        });
    }, 50 * i);
  }
}
