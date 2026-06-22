/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  for (let i = 0, n = s.length; i < n; ++i) {
    const c = s[i];
    if (c === "(" || c === "[" || c === "{") {
      stack.push(c);
    } else if (
      stack.length === 0 ||
      (c === ")" && stack.pop() !== "(") ||
      (c === "]" && stack.pop() !== "[") ||
      (c === "}" && stack.pop() !== "{")
    ) {
      return false;
    }
  }
  return stack.length === 0;
};
