let a = 123456;
let n;
let r = 0;
while (a > 0) {
  n = a % 10;
  r = r * 10 + n;
  a = parseInt(a / 10);
}
console.log(r);
