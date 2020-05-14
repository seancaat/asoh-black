function setupSplit(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    var r = new Path.Rectangle(view.bounds.topCenter, 1, height);
    r.opacity = 0.0001;
    r.blendMode = "difference";
    r.strokeColor = 'black';
    arr.push(r);
  }

  return arr;
}

function showSplit(group) {
  var colors = [
    'rgb(249,14,27)',
    'rgb(250,40,251)',
    'rgb(11,36,250)',
    'rgb(45,254,254)',
    'rgb(254,253,56)',
    'rgb(41,251,47)'
  ];
  var color = randof(colors);

  for (var i = 0; i < group.length; i++) {
    group[i].fillColor = color;
    enterExit(group, i);
  }

  function enterExit(group, i) {
    setTimeout(function() {
      group[i].tween(
        {
          opacity: 1,
          'bounds.width': width / 2,
          'position.x': (width * 3) / 4
        },
        {
          easing: 'easeOutQuint',
          duration: 400
        }
      );

      if (i % 2 === 0) {
        group[i].tween(
          {
            'position.x': width / 4
          },
          {
            easing: 'easeOutQuint',
            duration: 400
          }
        );
      }
    }, 0);

    setTimeout(function() {
      group[i]
        .tween(
          {
            'bounds.width': 0.1,
            'position.x': width + 10
          },
          {
            easing: 'easeOutQuint',
            duration: 300
          }
        )
        .then(function() {
          group[i].position.x = mid.x;
          group[i].opacity = 0.001;
        });

      if (i % 2 === 0) {
        group[i]
          .tween(
            {
              'position.x': 0 - 10
            },
            {
              easing: 'easeOutQuint',
              duration: 300
            }
          )
          .then(function() {
            group[i].position.x = mid.x;
            group[i].opacity = 0.001;
          });
      }
    }, 300);
  }
}
