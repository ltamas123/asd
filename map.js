const generateMap = (width, height) => {
  let arry = new Array(width);
  for (let i = 0; i < width; i++) {
    arry[i] = new Array(height);
  }
  return arry;
};

const fillMap = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = ' ';
    }
  }
};

const addSnow = (arr, num) => {
  let numberArray = [];
  let counter = 0;
  for (let i = 0; i < num; i++) {
    let rnd = Math.floor(Math.random() * arr[1].length);
    if (!numberArray.includes(rnd)) {
      numberArray.push(rnd);
    }
  }
  console.log(numberArray);
  numberArray.sort();

  for (let i = 0; i < arr[0].length; i++) {
    arr[0][i] = ' ';
  }

  for (let i = 0; i < arr[0].length; i++) {
    if (i === numberArray[counter]) {
      arr[0][i] = '*';
      counter++;
    }
  }
};

const printMap = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      process.stdout.write(arr[i][j] + ' ');
    }
    console.log();
  }
};

const falling = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = arr.length - 1; j >= 0; j--) {
      if (arr[i - 1][j] === '*') {
        arr[i][j] = arr[i - 1][j];
      } else {
        arr[i][j] = ' ';
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    arr[arr.length - 1][i] = ' ';
  }
};

let array = generateMap(50, 50);
//fillMap(array);
//addSnow(array, 4);

//printMap(array);

addSnow(array, 5);

module.exports = {
  generateMap,
  fillMap,
  addSnow,
  falling,
  printMap,
};
