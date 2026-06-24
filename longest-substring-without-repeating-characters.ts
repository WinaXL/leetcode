/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s: string): number {
  const last = new Map<string, number>();
  let max = 0;
  let left = 0;

  for (let right = 0, n = s.length; right < n; ++right) {
    const c = s[right];
    const prev = last.get(c);
    if (prev !== undefined && prev >= left) left = prev + 1;
    last.set(c, right);
    const len = right - left + 1;
    if (len > max) max = len;
  }

  return max;
}
