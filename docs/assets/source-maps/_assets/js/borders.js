function setupBorder() {
  var colors = [
    'rgb(249,14,27)',
    'rgb(250,40,251)',
    'rgb(11,36,250)',
    'rgb(45,254,254)',
    'rgb(254,253,56)',
    'rgb(41,251,47)'
  ];

  var margin = width * 0.1;
  var rect = new Path.Rectangle(view.center, width - margin, height - margin);

  rect.opacity = 0;
  rect.position = view.center;
  rect.strokeColor = randof(colors);
  rect.strokeWidth = margin / 4;
  rect.scale(0.9);

  return rect;
}

function showBorder(shape) {
  enterExit(shape);

  function enterExit(shape) {
    var margin = width * 0.1;

    var colors = [
      'rgb(249,14,27)',
      'rgb(250,40,251)',
      'rgb(11,36,250)',
      'rgb(45,254,254)',
      'rgb(254,253,56)',
      'rgb(41,251,47)'
    ];

    shape
      .tween(
        {
          strokeColor: randof(colors),
          'bounds.width': width - margin,
          'bounds.height': height - margin,
          position: view.center,
          opacity: 1
        },
        {
          duration: 100,
          easing: 'easeOutQuad'
        }
      )
      .then(function() {
        shape.tween(
          {
            opacity: 0,
            'bounds.width': (width - margin) * 0.99,
            'bounds.height': (height - margin) * 0.99,
            position: view.center
          },
          {
            duration: 200,
            easing: 'easeInQuad'
          }
        );
      });
  }
}
