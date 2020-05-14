function setupGrowingRects() {
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
  for (var i = 0; i < colors.length * 1.5; i++) {
    var r = new Path.Rectangle(
      Math.random() * 0.9 * width,
      Math.random() * 0.9 * height,
      0.1,
      randof(fib)
    );

    r.fillColor = randof(colors); // random colors or mask pic
    r.opacity = 0;
    r.blendMode = "difference";
    r.shadowColor = 'rgb(0,0,0,0.5)';
    r.shadowBlur = 3;

    arr.push(r);
  }

  return arr;
}

function growRect(group) {
  for (var i = 0; i < group.length; i++) {
    enterExit(group, i);
  }

  function enterExit(group, i) {
    var fib = [55, 89, 144, 233];

    setTimeout(function() {
      group[i].tween(
        {
          'bounds.width': randof(fib),
          'position.x': '+=10',
          opacity: 1
        },
        {
          easing: 'easeOutQuint',
          duration: 500
        }
      );
    }, 25 * i + 150);

    setTimeout(function() {
      group[i]
        .tween(
          {
            'bounds.width': 0.1,
            'position.x': '+=24'
          },
          {
            easing: 'easeOutQuint',
            duration: 500
          }
        )
        .then(function() {
          group[i].position = new Point(
            Math.random() * 0.9 * width,
            Math.random() * 0.9 * height
          );
          group[i].bounds.height = randof(fib);
          group[i].opacity = 0.01;
        });
    }, 75 * i + 400);
  }
}
