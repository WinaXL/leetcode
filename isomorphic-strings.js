/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const s2t = new Int32Array(128).fill(-1);
  const t2s = new Int32Array(128).fill(-1);

  for (let i = 0, n = s.length, a, b, x, y; i < n; ++i) {
    a = s.charCodeAt(i);
    b = t.charCodeAt(i);
    x = s2t[a];
    y = t2s[b];
    if (x === -1 && y === -1) {
      s2t[a] = b;
      t2s[b] = a;
    } else if (x !== b || y !== a) {
      return false;
    }
  }

  return true;
};
