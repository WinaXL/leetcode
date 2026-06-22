/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const first = strs[0];
  for (let i = 0, len = first.length; i < len; ++i) {
    const c = first[i];
    for (let j = 1, n = strs.length; j < n; ++j) {
      if (i >= strs[j].length || strs[j][i] !== c) {
        return first.slice(0, i);
      }
    }
  }
  return first;
};
