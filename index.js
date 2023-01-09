const big = []

while (true) {
  big.push(new Array(1000000).join('x'))
  console.log(`Heap allocated ${Math.round(process.memoryUsage()['heapUsed']/1024/1024/1024*100)/100} GB`);
  console.log(big.length)
}