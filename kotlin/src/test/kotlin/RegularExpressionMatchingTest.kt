import kotlin.test.Test
import kotlin.test.assertEquals

class RegularExpressionMatchingTest {
    private val solution = RegularExpressionMatchingSolution()

    @Test
    fun example1() {
        assertEquals(false, solution.isMatch("aa", "a"))
    }

    @Test
    fun example2() {
        assertEquals(true, solution.isMatch("aa", "a*"))
    }

    @Test
    fun example3() {
        assertEquals(true, solution.isMatch("ab", ".*"))
    }

    @Test
    fun complexPattern() {
        assertEquals(true, solution.isMatch("aab", "c*a*b"))
    }

    @Test
    fun noMatchAfterStar() {
        assertEquals(false, solution.isMatch("aab", "a*a"))
    }
}
