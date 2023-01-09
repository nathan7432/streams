const cliProgress = require('cli-progress');
const big = [];
let space = 0;
const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
bar1.start(250, 0);

while (true) {
  big.push(new Array(100000000).join('x'))
  space = Math.round(process.memoryUsage()['heapUsed']/1024/1024*100)/100
  if (space % 1 === 0)
    bar1.update(space);
}