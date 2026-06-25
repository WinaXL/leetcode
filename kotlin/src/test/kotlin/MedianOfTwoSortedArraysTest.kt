import kotlin.test.Test
import kotlin.test.assertEquals

class MedianOfTwoSortedArraysTest {
    private val solution = Solution()

    @Test
    fun example1() {
        assertEquals(2.0, solution.findMedianSortedArrays(intArrayOf(1, 3), intArrayOf(2)))
    }

    @Test
    fun example2() {
        assertEquals(2.5, solution.findMedianSortedArrays(intArrayOf(1, 2), intArrayOf(3, 4)))
    }

    @Test
    fun singleElementEach() {
        assertEquals(2.0, solution.findMedianSortedArrays(intArrayOf(1), intArrayOf(3)))
    }

    @Test
    fun oneEmpty() {
        assertEquals(2.0, solution.findMedianSortedArrays(intArrayOf(), intArrayOf(2)))
    }
}
