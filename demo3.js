const fs = require('fs')
const cliProgress = require('cli-progress');
const readStream = fs.createReadStream('./photos.csv')
const writeStream = fs.createWriteStream('./photosCopy.csv')

let progress = 0;
const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
bar1.start(1500000, 0)

//THIS IS ALL WE NEED//
readStream.pipe(writeStream)
//THIS IS ALL WE NEED//

readStream.on('data', () => {
  return bar1.update(progress+=64)
})

readStream.on('end', () => {
  return bar1.stop()
})