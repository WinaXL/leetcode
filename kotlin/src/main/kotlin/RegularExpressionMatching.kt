class Solution {
    fun isMatch(s: String, p: String): Boolean {
        val m = s.length
        val n = p.length
        val dp = Array(m + 1) { _ -> BooleanArray(n + 1) }
        dp[0][0] = true

        for (j in 2..n) {
            if (p[j - 1] == '*') {
                dp[0][j] = dp[0][j - 2]
            }
        }

        for (i in 1..m) {
            for (j in 1..n) {
                when {
                    p[j - 1] == '*' -> {
                        dp[i][j] = dp[i][j - 2]
                        if (matches(s[i - 1], p[j - 2])) {
                            dp[i][j] = dp[i][j] || dp[i - 1][j]
                        }
                    }
                    matches(s[i - 1], p[j - 1]) -> {
                        dp[i][j] = dp[i - 1][j - 1]
                    }
                }
            }
        }

        return dp[m][n]
    }

    private fun matches(text: Char, pattern: Char): Boolean {
        return pattern == '.' || text == pattern
    }
}
