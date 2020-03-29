// Add all constants, e.g colors, widths, used across multiple files
const soundToAnim = {
  '0': {
    sound: 'vox-uhh',
    animation: function() {
      rise(width, height); // duplicate
    }
  },
  '1': {
    sound: 'beat-808',
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
    sound: 'vox-smack',
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
    sound: 'vox-run',
    animation: function() {
      dropDotsScattered(scatteredDrops);
    }
  },
  '7': {
    sound: 'vox-mygod',
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
    sound: 'beat-vinyl-scratch',
    animation: function() {
      slide(imgSymbol, mid, height); // duplicate
    }
  },
  '15': {
    sound: 'beat-vocalA',
    animation: function() {
      drawNeon(width, height); // duplicate
    }
  },
  '16': {
    sound: 'beat-vocalB',
    animation: function() {
      slideSquare(); // duplicate
    }
  },
  '17': {
    sound: 'beat-snare',
    animation: function() {
      flash(flashRectangles); // duplicate
    }
  },
  '18': {
    sound: 'beat-sample-lo',
    animation: function() {
      dropDotsScattered(scatteredDrops); // duplicate
    }
  },
  '19': {
    sound: 'vox-ohh-dist',
    animation: function() {
      dropDotsGroup(groupedDrops); // duplicate
    }
  },
  '20': {
    sound: 'vox-mf',
    animation: function() {
      // duplicate
      for (var i = 0; i < 20; i++) {
        delay(randof(rectTiles), i);
      }
    }
  },
  '21': {
    sound: 'beat-sample-lo',
    animation: function() {
      showBorder(borderRect); // duplicate
    }
  },
  '22': {
    sound: 'beat-sample-hi',
    animation: function() {
      dropSideDots(hihatCircles); // duplicate
    }
  },
  '23': {
    sound: 'vox-fastlife',
    animation: function() {
      showSplit(splits); // duplicate
    }
  },
  '24': {
    sound: 'vox-black',
    animation: function() {
      growRect(growingRects); // duplicate
    }
  },
  '25': {
    sound: 'vox-cheese',
    animation: function() {
      sink(sinkRects); // duplicate
    }
  },
  '26': {
    sound: 'vox-asoh',
    animation: function() {
      sink(sinkRects); // duplicate
    }
  }
};

const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

var colors1 = [
  'rgb(249,14,27)',
  'rgb(250,40,251)',
  'rgb(11,36,250)',
  'rgb(45,254,254)',
  'rgb(254,253,56)',
  'rgb(41,251,47)'
];
