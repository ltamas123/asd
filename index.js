const map = require('./map');
const ctx = require('axel');

let flakeNumber = 5;

const stdin = process.stdin;

stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');
stdin.on('data', (key) => {
  if (key === 'q') {
    process.exit();
  } else if (key === 'j') {
    flakeNumber += 1;
  } else if (key === 'm' && flakeNumber > 1) {
    flakeNumber -= 1;
  }
});

//console.log('cica')

const printMapAxel = (arr) => {
  ctx.clear();
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === ' ') {
        ctx.bg(0, 128, 255);
        ctx.point(j + 1, i + 1);
        ctx.cursor.restore();
      } else if (arr[i][j] === '*') {
        ctx.bg(0, 128, 255);
        ctx.fg(255, 255, 255);
        ctx.text(j + 1, i + 1, '*');
        //arr[i + 1][j + 1] = '*';
      }
    }
  }
};

const main = () => {
  let array = map.generateMap(25, 25);
  map.fillMap(array);

  setInterval(() => {
    //console.log('asd'),
    printMapAxel(array);
    map.addSnow(array, flakeNumber), map.falling(array);
  }, 800);
};
main();
