class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        prevNumbers = {}

        for i, n in enumerate(nums):
            diff = target - n
            if diff in prevNumbers:
                return [prevNumbers[diff], i]
            prevNumbers[n] = i
        return []


if __name__ == "__main__":
    print(Solution().twoSum([2, 7, 11, 15], 9))
    print(Solution().twoSum([3, 2, 4], 6))
    print(Solution().twoSum([3, 5, 7], 3))
    print(Solution().twoSum([3, 2, 4, 8, 10, 14, 1, 5], 9))
