/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const seen = Object.create(null);
  for (let i = 0, n = nums.length, v; i < n; ++i) {
    v = nums[i];
    const j = seen[target - v];
    if (j !== undefined) return [j, i];
    seen[v] = i;
  }
};
