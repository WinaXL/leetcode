/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s: string): string {
  let start = 0;
  let maxLen = 0;
  const n = s.length;

  const expand = (left: number, right: number): void => {
    while (left >= 0 && right < n && s[left] === s[right]) {
      --left;
      ++right;
    }
    const len = right - left - 1;
    if (len > maxLen) {
      maxLen = len;
      start = left + 1;
    }
  };

  for (let i = 0; i < n; ++i) {
    expand(i, i);
    expand(i, i + 1);
  }

  return s.slice(start, start + maxLen);
}
