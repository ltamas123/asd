let messageArray = [];
let counter = 0;

const fn = () => {
  console.log("Enter massage: ");
  scan = keyscan.make_scanner((ch) => message(ch.parsed));
};

const message = (char) => {
  messageArray.push(char.charCodeAt(0));

  //process.stdout.write(messageArray[counter]);

  counter++;
};

//delete everything
