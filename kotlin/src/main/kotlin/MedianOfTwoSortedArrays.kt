class Solution {
    fun findMedianSortedArrays(nums1: IntArray, nums2: IntArray): Double {
        if (nums1.size > nums2.size) {
            return findMedianSortedArrays(nums2, nums1)
        }

        val m = nums1.size
        val n = nums2.size
        var lo = 0
        var hi = m
        val halfLen = (m + n + 1) / 2

        while (lo <= hi) {
            val i = (lo + hi) ushr 1
            val j = halfLen - i

            val maxLeft1 = if (i == 0) Int.MIN_VALUE else nums1[i - 1]
            val minRight1 = if (i == m) Int.MAX_VALUE else nums1[i]
            val maxLeft2 = if (j == 0) Int.MIN_VALUE else nums2[j - 1]
            val minRight2 = if (j == n) Int.MAX_VALUE else nums2[j]

            when {
                maxLeft1 <= minRight2 && maxLeft2 <= minRight1 -> {
                    return if ((m + n) % 2 == 1) {
                        maxOf(maxLeft1, maxLeft2).toDouble()
                    } else {
                        (maxOf(maxLeft1, maxLeft2) + minOf(minRight1, minRight2)) / 2.0
                    }
                }
                maxLeft1 > minRight2 -> hi = i - 1
                else -> lo = i + 1
            }
        }

        error("Input arrays are not sorted")
    }
}
