class Solution:
    def topKFrequent(self, nums: list[int], k: int) -> list[int]:
        count = {}
        repeated = [[] for i in range(len(nums) + 1)]
        result = []

        for num in nums:
            count[num] = 1 + count.get(num, 0)
        for num, c in count.items():
            repeated[c].append(num)

        for i in range(len(repeated) - 1, 0, -1):
            for num in repeated[i]:
                result.append(num)

                if len(result) == k:
                    return result

        return result


if __name__ == "__main__":
    print(Solution().topKFrequent([1, 1, 1, 2, 2, 3], 2))
