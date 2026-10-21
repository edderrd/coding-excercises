from collections import defaultdict


class Solution:
    def groupAnagrams(self, strs: list[str]) -> list[list[str]]:
        result = defaultdict(list)

        for s in strs:
            count = [0] * 26

            for c in s:
                count[ord(c) - ord("a")] += 1

            result[tuple(count)].append(s)

        return list(result.values())


if __name__ == "__main__":
    print(Solution().groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
