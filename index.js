const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let a = 0;
let b = batteryBatches.reduce((sum, num) => sum + num, 0);

let totalBatteries = a + b;

console.log(totalBatteries);