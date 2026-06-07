/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = 0;
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      nums[k++] = nums[i];
    }
  }

  return k;
};
