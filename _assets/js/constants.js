// Add all constants, e.g colors, widths, used across multiple files
const soundToAnim = {
  '0': {
    sound: '',
    animation: function() {
      rise(width, height); // duplicate
    }
  },
  '1': {
    sound: '',
    animation: function() {
      rise(width, height);
    }
  },
  '2': {
    sound: 'vox-foolie',
    animation: function() {
      slide(imgSymbol, mid, height);
    }
  },
  '3': {
    sound: 'vox-damn',
    animation: function() {
      drawNeon(width, height);
    }
  },
  '4': {
    sound: '',
    animation: function() {
      slideSquare();
    }
  },
  '5': {
    sound: 'beat-clap',
    animation: function() {
      flash(flashRectangles);
    }
  },
  '6': {
    sound: '',
    animation: function() {
      dropDotsScattered(scatteredDrops);
    }
  },
  '7': {
    sound: '',
    animation: function() {
      dropDotsGroup(groupedDrops); // duplicate
    }
  },
  '8': {
    sound: 'beat-hats1',
    animation: function() {
      for (var i = 0; i < 20; i++) {
        delay(randof(rectTiles), i);
      }
    }
  },
  '9': {
    sound: 'vox-hey',
    animation: function() {
      showBorder(borderRect);
    }
  },
  '10': {
    sound: 'beat-hats2',
    animation: function() {
      dropSideDots(hihatCircles);
    }
  },
  '11': {
    sound: 'beat-vinyl-scratch',
    animation: function() {
      sink(sinkRects);
    }
  },
  '12': {
    sound: 'beat-kick',
    animation: function() {
      showSplit(splits);
    }
  },
  '13': {
    sound: 'vox-damn',
    animation: function() {
      growRect(growingRects);
    }
  },
  '14': {
    sound: '',
    animation: function() {
      slide(imgSymbol, mid, height); // duplicate
    }
  },
  '15': {
    sound: '',
    animation: function() {
      drawNeon(width, height); // duplicate
    }
  },
  '16': {
    sound: '',
    animation: function() {
      slideSquare(); // duplicate
    }
  },
  '17': {
    sound: '',
    animation: function() {
      flash(flashRectangles); // duplicate
    }
  },
  '18': {
    sound: '',
    animation: function() {
      dropDotsScattered(scatteredDrops); // duplicate
    }
  },
  '19': {
    sound: '',
    animation: function() {
      dropDotsGroup(groupedDrops); // duplicate
    }
  },
  '20': {
    sound: '',
    animation: function() {
      // duplicate
      for (var i = 0; i < 20; i++) {
        delay(randof(rectTiles), i);
      }
    }
  },
  '21': {
    sound: '',
    animation: function() {
      showBorder(borderRect); // duplicate
    }
  },
  '22': {
    sound: '',
    animation: function() {
      dropSideDots(hihatCircles); // duplicate
    }
  },
  '23': {
    sound: '',
    animation: function() {
      showSplit(splits); // duplicate
    }
  },
  '24': {
    sound: '',
    animation: function() {
      growRect(growingRects); // duplicate
    }
  },
  '25': {
    sound: '',
    animation: function() {
      sink(sinkRects); // duplicate
    }
  },
  '26': {
    sound: '',
    animation: function() {
      sink(sinkRects); // duplicate
    }
  }
};
