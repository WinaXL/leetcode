/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  const stack = [];
  for (let i = 0, n = s.length, c, top; i < n; ++i) {
    c = s[i];
    top = stack[stack.length - 1];
    if (top && (c.charCodeAt(0) ^ top.charCodeAt(0)) === 32) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }
  return stack.join("");
};
