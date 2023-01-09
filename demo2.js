const fs = require('fs')
const cliProgress = require('cli-progress');
let space = 0;
const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

let firstChuck = true;

// const readStream = fs.createReadStream('photos.csv')
const readStream = fs.createReadStream('photos.csv', {highWaterMark: 1000})

readStream.on('data', chunk => {
  if (firstChuck) {
    console.log(chunk.toString())
    firstChuck = false
    bar1.start(250, space);
  }
  space = Math.round(process.memoryUsage()['heapUsed']/1024/1024*100)/100
  bar1.update(space);
})

readStream.on('end', () => {
  bar1.stop();
})