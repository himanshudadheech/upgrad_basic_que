let a = 123456;
let n;
let r = 0;
while (a > 0) {
  n = a % 10;
  // 123456 => 12345.6 =>6
  // 12345 => 1234.5 =>5
  r = r * 10 + n;
  6;
  a = parseInt(a / 10);
  // 123456 => 12345.6 => 12345
}
console.log(r);
