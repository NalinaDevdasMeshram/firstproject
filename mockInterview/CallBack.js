function sum(a, b) {
  console.log(a + b);
}
function Calculate(a, b, sumcallback) {
  console.log(sumcallback(a, b));
}
Calculate(1, 5, sum);
