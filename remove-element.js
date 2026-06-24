/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let k = 0;
  for (let i = 0, n = nums.length; i < n; ++i) {
    if (nums[i] !== val) {
      nums[k++] = nums[i];
    }
  }
  return k;
};
