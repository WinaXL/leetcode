/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s: string): number {
  let i = s.length - 1;
  while (s[i] === " ") --i;
  let len = 0;
  while (i >= 0 && s[i] !== " ") {
    ++len;
    --i;
  }
  return len;
}
