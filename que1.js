const a = [1, 2, 1, 1, 2, 1, 0, 0];
let count_zero = 0;
let count_even = 0;
let count_odd = 0;
for (let i = 1; i <= a.length; i++) {
  if (a[i] == 0) {
    count_zero = count_zero + 1;
  } else if (a[i] % 2 == 0) {
    count_even = count_even + 1;
  } else {
    count_odd = count_odd + 1;
  }
}
console.log("zeros : " + count_zero);
console.log("even : " + count_even);
console.log("odd : " + count_odd);
