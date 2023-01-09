const fs = require('fs')
const cliProgress = require('cli-progress');
const { Transform } = require('stream');
const csvtojson = require('csvtojson');
const readStream = fs.createReadStream('./product50.csv')
const writeStream = fs.createWriteStream('./product50.json')

let firstChuck = true;
let progress = 0;
const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
bar1.start(280704, 0)

//THIS IS ALL WE NEED//
readStream
  .pipe(csvtojson({ delimiter: ',' }))
  .pipe(writeStream)
//THIS IS ALL WE NEED//

readStream.on('data', (chunk) => {
  if (firstChuck) {
    console.log(chunk.toString())
    firstChuck = false
  }
  return bar1.update(progress+=64)
})

readStream.on('end', () => {
  return bar1.stop()
})