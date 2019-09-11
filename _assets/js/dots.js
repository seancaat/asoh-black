function setupDrops(num, typeOfDots) {
  var arr = [];
  var colors = [
    'rgb(249,14,27)',
    'rgb(250,40,251)',
    'rgb(11,36,250)',
    'rgb(45,254,254)',
    'rgb(254,253,56)',
    'rgb(41,251,47)'
  ];

  var fib = [55, 89, 144, 233];

  for (var i = 0; i < num * 1.5; i++) {
    // var pos = pointInCircle(width / 2);
    var pos =
      typeOfDots === 'scatter'
        ? view.center
        : pointInCircle(width).add(view.center);
    var c = new Path.Circle(pos, randof(fib) / 4);
    c.fillColor = randof(colors); // random colors or mask pic
    // c.strokeColor = 'black';
    c.strokeWidth = 1;
    c.opacity = 0;
    c.shadowColor = 'rgb(0,0,0,0.5)';
    c.shadowBlur = 1;

    arr.push(c);
  }

  return arr;
}

function dropDotsScattered(dropRects) {
  dropDots(dropRects, height / 2, 300, 'scatter');
}

function dropDotsGroup(dropRects) {
  dropDots(dropRects, 100, 500, 'group');
}

function dropDots(group, point, theDuration, typeOfDots) {
  for (var i = 0; i < group.length; i++) {
    var dots = group[i];
    enterExit(dots, dots.bounds.width, dots.bounds.height);
  }

  function enterExit(dots, width, height) {
    var fib = [55, 89, 144, 233];
    var colors = [
      'rgb(249,14,27)',
      'rgb(250,40,251)',
      'rgb(11,36,250)',
      'rgb(45,254,254)',
      'rgb(254,253,56)',
      'rgb(41,251,47)'
    ];

    setTimeout(function() {
      dots.tween(
        {
          position: pointInCircle(point).add(view.center),
          opacity: 1
        },
        {
          easing: 'easeOutQuint',
          duration: theDuration
        }
      );
    }, 7 * i + 150);

    setTimeout(function() {
      dots
        .tween(
          {
            position: '+= 10',
            'bounds.width': parseFloat('0.01'),
            'bounds.height': parseFloat('0.01')
          },
          {
            easing: 'easeInQuint',
            duration: theDuration
          }
        )
        .then(function() {
          dots.bounds.width = randof(fib) / 2;
          dots.bounds.height = width;
          // group[i].scale((randof(fib) / 2) / (group[i].bounds.height / 2), group[i].position );
          dots.position =
            typeOfDots === 'scatter'
              ? view.center
              : pointInCircle(height).add(view.center);
          dots.fillColor = randof(colors);
          dots.opacity = 0.0001;
        });
    }, theDuration);
  }
}
