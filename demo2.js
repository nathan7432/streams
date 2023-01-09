const fs = require('fs')
// console.sometimes = require('./sometimes').sometimes

let firstChuck = true;

const readStream = fs.createReadStream('product50.csv')
// const readStream = fs.createReadStream('product50.csv', {highWaterMark: 1000})

readStream.on('data', piece => {
  if (firstChuck) {
    console.log(piece.toString())
    firstChuck = false
  }
})