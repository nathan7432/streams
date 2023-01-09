module.exports.sometimes = (message, probability) => {
  if (Math.random() < probability) {
    console.log(message);
  }
}

// console.sometimes = require('./sometimes').sometimes