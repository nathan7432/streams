const fs = require('fs')
const cliProgress = require('cli-progress');
const { Transform } = require('stream');
const csvtojson = require('csvtojson');
const readStream = fs.createReadStream('./product50.csv')
const writeStream = fs.createWriteStream('./product50.json')

let progress = 0;
const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
bar1.start(48832, 0)

//THIS IS ALL WE NEED//
readStream
  .pipe(csvtojson({ delimiter: ',' }))
  .pipe( new Transform({
    transform(chunk, enc, callback) {
      callback(null, chunk.toString().toUpperCase())
    }
  }))
  .pipe(writeStream)
//THIS IS ALL WE NEED//

readStream.on('data', (chunk) => {
  return bar1.update(progress+=64)
})

readStream.on('end', () => {
  return bar1.stop()
})