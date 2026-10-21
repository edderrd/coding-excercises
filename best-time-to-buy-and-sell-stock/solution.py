class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        left, right = 0, 1
        maxP = 0

        while right < len(prices):
            if prices[left] < prices[right]:
                profit = prices[right] - prices[left]
                maxP = max(maxP, profit)
            else:
                left = right
            right += 1

        return maxP


if __name__ == "__main__":
    print(Solution().maxProfit([7, 1, 5, 6, 4]))
    print(Solution().maxProfit([5, 3, 7, 8, 10, 14, 1, 6]))
