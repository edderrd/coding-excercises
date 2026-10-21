class Solution:
    def containsDuplicate(self, nums: list[int]) -> bool:
        seen = set()

        for n in nums:
            if n in seen:
                return True
            seen.add(n)

        return False


if __name__ == "__main__":
    print(Solution().containsDuplicate([3, 2, 4, 2]))
    print(Solution().containsDuplicate([2, 7, 11, 15]))
