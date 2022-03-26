// const a = [95, -3, -1, 1, 2, 3, 4, 5, -4];
const a = [-2, -1, 0, 1, 2];
let min = a[0];
let max = a[1];
for (let i = 0; i < a.length; i++) {
  if (min > a[i]) {
    min = a[i];
  } else {
    if (max < a[i]) {
      max = a[i];
    }
  }
}
console.log("min :" + min);
console.log("max :" + max);
