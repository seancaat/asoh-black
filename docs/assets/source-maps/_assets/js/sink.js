function setupSink(num) {
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
    var r = new Path.Rectangle(0, -height * 1.25, width, height);

    r.fillColor = colors[i]; // random colors or mask pic
    r.opacity = 0.25;
    // r.strokeColor = "gray";
    // r.strokeWidth = 1;
    r.shadowColor = 'rgb(0,0,0,0.5)';
    r.shadowBlur = 4;

    arr.push(r);
  }

  return arr;
}

function sink(group) {
  for (var i = 0; i < group.length; i++) {
    enterExit(group, i);
  }

  function enterExit(group, i) {
    setTimeout(function() {
      group[group.length - 1 - i]
        .tween(
          {
            'position.y':
              height + group[group.length - 1 - i].bounds.height / 2,
            // 'bounds.y': height,
            opacity: 0.76
          },
          {
            easing: 'easeOutQuint',
            duration: 500
          }
        )
        .then(function() {
          // group[group.length - 1 - i].tween
          group[group.length - 1 - i].position.y = -height * 0.75;
          group[group.length - 1 - i].opacity = 0.25;
        });
    }, i * 100);
  }
}
