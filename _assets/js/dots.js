function setupDrops(num) {
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
    var c = new Path.Circle(view.center, randof(fib) / 4);

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

function dropDotsScattered() {
  dropDots(dropRects, height / 2, 300, 'scatter');
}

function dropDotsGroup() {
  dropDots(dropRects, 100, 500, 'group');
}

function dropDots(group, point, duration, typeOfDots) {
  for (var i = 0; i < group.length; i++) {
    enterExit(group, i);
  }

  function enterExit(group, i) {
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
      group[i].tween(
        {
          position: pointInCircle(point) + view.center,
          opacity: 1
        },
        {
          easing: 'easeOutQuint',
          duration: duration
        }
      );

      console.log(group[i].bounds.height);
    }, 7 * i + 150);

    setTimeout(function() {
      group[i]
        .tween(
          {
            position: '+= 10',
            'bounds.width': 0.01,
            'bounds.height': 0.01
          },
          {
            easing: 'easeInQuint',
            duration: duration
          }
        )
        .then(function() {
          group[i].bounds.width = randof(fib) / 2;
          group[i].bounds.height = group[i].bounds.width;
          // group[i].scale((randof(fib) / 2) / (group[i].bounds.height / 2), group[i].position );
          group[i].position =
            typeOfDots === 'scatter'
              ? view.center
              : pointInCircle(height) + view.center;
          group[i].fillColor = randof(colors);
          group[i].opacity = 0.0001;
        });
    }, duration);
  }
}
