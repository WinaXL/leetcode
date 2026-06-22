/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const val = new Int32Array(128);
  val[73] = 1;
  val[86] = 5;
  val[88] = 10;
  val[76] = 50;
  val[67] = 100;
  val[68] = 500;
  val[77] = 1000;

  let sum = 0;
  for (let i = 0, n = s.length, cur, next; i < n; ++i) {
    cur = val[s.charCodeAt(i)];
    next = i + 1 < n ? val[s.charCodeAt(i + 1)] : 0;
    if (cur < next) sum -= cur;
    else sum += cur;
  }

  return sum;
};
